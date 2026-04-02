a.r(t), a.d(t, { default: () => h }), a(321073);
var i = a(205693),
    l = a(626584),
    o = a(430452),
    s = a(274372),
    n = a(372684),
    d = a(672412);
let r = new l.A("MLSignalHandler");
class c {
    emitSignal;
    emotionHistory = [];
    yellHistory = [];
    boundHandleV3MlDetection = null;
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        r.info("ML signal handler started"),
            d.A.start(this.handleMLResult.bind(this), () => {}),
            (this.boundHandleV3MlDetection = this.handleV3MlDetection.bind(this)),
            o.Ay.getMediaEngine().on(i.bg.ClipsMlDetection, this.boundHandleV3MlDetection);
    }
    stop() {
        d.A.stop(),
            null != this.boundHandleV3MlDetection &&
                (o.Ay.getMediaEngine().off(i.bg.ClipsMlDetection, this.boundHandleV3MlDetection),
                (this.boundHandleV3MlDetection = null)),
            (this.emotionHistory = []),
            (this.yellHistory = []),
            r.info("ML signal handler stopped");
    }
    getState() {
        return { emotionHistory: [...this.emotionHistory], yellHistory: [...this.yellHistory] };
    }
    handleV3MlDetection(e) {
        for (let t of e)
            ("laughter" === t.label || "shouting" === t.label) &&
                (r.info(`V3 ML detection: ${t.label} (confidence=${t.confidence.toFixed(2)}, ts=${t.timestamp_ms})`),
                this.emitSignal({ type: n.Gy.LAUGHTER, label: t.label, confidence: t.confidence }, t.timestamp_ms));
    }
    handleMLResult(e) {
        switch (e.type) {
            case "yell_classification":
                this.handleYellClassification(e.payload);
                break;
            case "wake_word":
                this.handleWakeWord(e.payload);
                break;
            case "emotion_classification":
                this.handleEmotionClassification(e.payload);
                break;
            case "whisper_transcription":
                this.handleWhisperTranscription(e.payload);
                break;
            default:
                r.warn(`Unknown ML result type: ${e.type}`);
        }
    }
    handleYellClassification(e) {
        let { userId: t, percentiles: a, yelling: i, debug: l, timestamp: o } = e;
        window.__CLIPS_DEBUG__?.yell &&
            (this.yellHistory.push({ timestamp: o, userId: t, percentiles: a, debug: l }),
            this.yellHistory.length > 50 && this.yellHistory.shift()),
            i && this.emitSignal({ type: n.Gy.YELLING, userId: t }, o);
    }
    handleWakeWord(e) {
        let { userId: t, probabilities: a, timestamp: i } = e,
            l = Object.entries(a)
                .map((e) => {
                    let [t, a] = e,
                        i = "number" == typeof a ? a : 0,
                        l = Math.round(20 * i),
                        o = "*".repeat(l),
                        s = " ".repeat(20 - l);
                    return `${t}: |${o}${s}| (${i.toFixed(3)})`;
                })
                .join("  ");
        window.__CLIPS_DEBUG__?.wakeWord && r.info(`Wake word: ${t}: ${l}`);
        let o = s.A.getSettings().autoClipPhrases;
        for (let [e, t] of Object.entries(a))
            if (("number" == typeof t ? t : 0) >= 0.5 && o.includes(e)) {
                this.emitSignal({ type: n.Gy.PHRASE, text: e }, i);
                break;
            }
    }
    handleEmotionClassification(e) {
        let { userId: t, emotions: a, timestamp: i } = e;
        this.emotionHistory.push({ timestamp: i, userId: t, emotions: a }),
            this.emotionHistory.length > 10 && this.emotionHistory.shift(),
            window.__CLIPS_DEBUG__?.emotion && r.info(`Emotion classification: ${t}: ${JSON.stringify(a)}`);
    }
    handleWhisperTranscription(e) {
        let { userId: t, transcription: a, timestamp: i } = e;
        window.__CLIPS_DEBUG__?.whisper && r.info(`Whisper transcription: ${t}: ${JSON.stringify(a)}`);
        let l = s.A.getSettings().autoClipPhrases;
        if (0 === l.length) return;
        let o = (e) =>
                e
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase(),
            d = l.map((e) => o(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            c = RegExp(`(${d.join("|")})`, "g");
        for (let e of a)
            for (let t of o(e.text).matchAll(c)) {
                let a = t[0],
                    s = l.find((e) => o(e) === a);
                if (null != s) {
                    let t = i + 1e3 * e.t0;
                    if (null != e.words && e.words.length > 0) {
                        let a = o(s).split(" "),
                            l = e.words.map((e) => ({ ...e, cleanText: o(e.text) }));
                        for (let e = 0; e <= l.length - a.length; e++) {
                            let n = l.slice(e, e + a.length);
                            if (n.map((e) => e.cleanText).join(" ") === o(s)) {
                                t = i + 1e3 * n[0].t0;
                                break;
                            }
                        }
                    }
                    this.emitSignal({ type: n.Gy.PHRASE, text: s }, t);
                }
            }
    }
}
let h = (e) => new c(e);

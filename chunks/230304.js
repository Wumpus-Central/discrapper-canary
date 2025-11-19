o.r(t),
    o.d(t, { default: () => c }),
    o(388685),
    o(539854),
    o(49124),
    o(704826),
    o(35282),
    o(781311),
    o(413496),
    o(433524),
    o(421244);
var a = o(710845),
    i = o(435064),
    l = o(894694),
    n = o(431927);
function s(e, t, o) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = o),
        e
    );
}
let r = new a.Z("MLSignalHandler");
class d {
    start() {
        r.info("ML signal handler started"), n.Z.start(this.handleMLResult.bind(this), () => {});
    }
    stop() {
        n.Z.stop(), (this.emotionHistory = []), (this.yellHistory = []), r.info("ML signal handler stopped");
    }
    getState() {
        return {
            emotionHistory: [...this.emotionHistory],
            yellHistory: [...this.yellHistory],
        };
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
                r.warn("Unknown ML result type: ".concat(e.type));
        }
    }
    handleYellClassification(e) {
        var t;
        let { userId: o, percentiles: a, yelling: i, debug: n, timestamp: s } = e;
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.yell) &&
            (this.yellHistory.push({
                timestamp: s,
                userId: o,
                percentiles: a,
                debug: n,
            }),
            this.yellHistory.length > 50 && this.yellHistory.shift()),
            i &&
                this.emitSignal(
                    {
                        type: l.Bs.YELLING,
                        userId: o,
                    },
                    s,
                );
    }
    handleWakeWord(e) {
        var t;
        let { userId: o, probabilities: a, timestamp: n } = e,
            s = Object.entries(a)
                .map((e) => {
                    let [t, o] = e,
                        a = "number" == typeof o ? o : 0,
                        i = Math.round(20 * a),
                        l = "*".repeat(i),
                        n = " ".repeat(20 - i);
                    return "".concat(t, ": |").concat(l).concat(n, "| (").concat(a.toFixed(3), ")");
                })
                .join("  ");
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.wakeWord) && r.info("Wake word: ".concat(o, ": ").concat(s));
        let d = i.Z.getSettings().autoClipPhrases;
        for (let [e, t] of Object.entries(a))
            if (("number" == typeof t ? t : 0) >= 0.5 && d.includes(e)) {
                this.emitSignal(
                    {
                        type: l.Bs.PHRASE,
                        text: e,
                    },
                    n,
                );
                break;
            }
    }
    handleEmotionClassification(e) {
        var t;
        let { userId: o, emotions: a, timestamp: i } = e;
        this.emotionHistory.push({
            timestamp: i,
            userId: o,
            emotions: a,
        }),
            this.emotionHistory.length > 10 && this.emotionHistory.shift(),
            (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.emotion) &&
                r.info("Emotion classification: ".concat(o, ": ").concat(JSON.stringify(a)));
    }
    handleWhisperTranscription(e) {
        var t;
        let { userId: o, transcription: a, timestamp: n } = e;
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.whisper) &&
            r.info("Whisper transcription: ".concat(o, ": ").concat(JSON.stringify(a)));
        let d = i.Z.getSettings().autoClipPhrases;
        if (0 === d.length) return;
        let c = (e) =>
                e
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase(),
            u = d.map((e) => c(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            f = RegExp("(".concat(u.join("|"), ")"), "g");
        for (let e of a)
            for (let t of c(e.text).matchAll(f)) {
                let o = t[0],
                    a = d.find((e) => c(e) === o);
                if (null != a) {
                    let t = n + 1000 * e.t0;
                    if (null != e.words && e.words.length > 0) {
                        let o = c(a).split(" "),
                            i = e.words.map((e) =>
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var o = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var a = Object.getOwnPropertySymbols(e);
                                                      o.push.apply(o, a);
                                                  }
                                                  return o;
                                              })(Object(t)).forEach(function (o) {
                                                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
                                              }),
                                        e
                                    );
                                })(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var o = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(o);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(o).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    s(e, t, o[t]);
                                                });
                                        }
                                        return e;
                                    })({}, e),
                                    { cleanText: c(e.text) },
                                ),
                            );
                        for (let e = 0; e <= i.length - o.length; e++) {
                            let l = i.slice(e, e + o.length);
                            if (l.map((e) => e.cleanText).join(" ") === c(a)) {
                                t = n + 1000 * l[0].t0;
                                break;
                            }
                        }
                    }
                    this.emitSignal(
                        {
                            type: l.Bs.PHRASE,
                            text: a,
                        },
                        t,
                    );
                }
            }
    }
    constructor(e) {
        s(this, "emitSignal", void 0), s(this, "emotionHistory", []), s(this, "yellHistory", []), (this.emitSignal = e);
    }
}
let c = (e) => new d(e);

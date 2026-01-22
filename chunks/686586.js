a.r(t),
    a.d(t, {
        default: () => c,
    }),
    a(896048),
    a(321073),
    a(457529),
    a(747238),
    a(812715),
    a(733351),
    a(591487),
    a(727858),
    a(169888);
var o = a(626584),
    i = a(274372),
    l = a(372684),
    n = a(672412);

function s(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
let r = new o.A("MLSignalHandler");
class d {
    start() {
        r.info("ML signal handler started"), n.A.start(this.handleMLResult.bind(this), () => {});
    }
    stop() {
        n.A.stop(), (this.emotionHistory = []), (this.yellHistory = []), r.info("ML signal handler stopped");
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
        let { userId: a, percentiles: o, yelling: i, debug: n, timestamp: s } = e;
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.yell) &&
            (this.yellHistory.push({
                timestamp: s,
                userId: a,
                percentiles: o,
                debug: n,
            }),
            this.yellHistory.length > 50 && this.yellHistory.shift()),
            i &&
                this.emitSignal(
                    {
                        type: l.Gy.YELLING,
                        userId: a,
                    },
                    s,
                );
    }
    handleWakeWord(e) {
        var t;
        let { userId: a, probabilities: o, timestamp: n } = e,
            s = Object.entries(o)
                .map((e) => {
                    let [t, a] = e,
                        o = "number" == typeof a ? a : 0,
                        i = Math.round(20 * o),
                        l = "*".repeat(i),
                        n = " ".repeat(20 - i);
                    return "".concat(t, ": |").concat(l).concat(n, "| (").concat(o.toFixed(3), ")");
                })
                .join("  ");
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.wakeWord) && r.info("Wake word: ".concat(a, ": ").concat(s));
        let d = i.A.getSettings().autoClipPhrases;
        for (let [e, t] of Object.entries(o))
            if (("number" == typeof t ? t : 0) >= 0.5 && d.includes(e)) {
                this.emitSignal(
                    {
                        type: l.Gy.PHRASE,
                        text: e,
                    },
                    n,
                );
                break;
            }
    }
    handleEmotionClassification(e) {
        var t;
        let { userId: a, emotions: o, timestamp: i } = e;
        this.emotionHistory.push({
            timestamp: i,
            userId: a,
            emotions: o,
        }),
            this.emotionHistory.length > 10 && this.emotionHistory.shift(),
            (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.emotion) &&
                r.info("Emotion classification: ".concat(a, ": ").concat(JSON.stringify(o)));
    }
    handleWhisperTranscription(e) {
        var t;
        let { userId: a, transcription: o, timestamp: n } = e;
        (null == (t = window.__CLIPS_DEBUG__) ? void 0 : t.whisper) &&
            r.info("Whisper transcription: ".concat(a, ": ").concat(JSON.stringify(o)));
        let d = i.A.getSettings().autoClipPhrases;
        if (0 === d.length) return;
        let c = (e) =>
                e
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase(),
            u = d.map((e) => c(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            f = RegExp("(".concat(u.join("|"), ")"), "g");
        for (let e of o)
            for (let t of c(e.text).matchAll(f)) {
                let a = t[0],
                    o = d.find((e) => c(e) === a);
                if (null != o) {
                    let t = n + 1e3 * e.t0;
                    if (null != e.words && e.words.length > 0) {
                        let a = c(o).split(" "),
                            i = e.words.map((e) =>
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var a = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var o = Object.getOwnPropertySymbols(e);
                                                      a.push.apply(a, o);
                                                  }
                                                  return a;
                                              })(Object(t)).forEach(function (a) {
                                                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                                              }),
                                        e
                                    );
                                })(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var a = null != arguments[t] ? arguments[t] : {},
                                                o = Object.keys(a);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (o = o.concat(
                                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                    }),
                                                )),
                                                o.forEach(function (t) {
                                                    s(e, t, a[t]);
                                                });
                                        }
                                        return e;
                                    })({}, e),
                                    {
                                        cleanText: c(e.text),
                                    },
                                ),
                            );
                        for (let e = 0; e <= i.length - a.length; e++) {
                            let l = i.slice(e, e + a.length);
                            if (l.map((e) => e.cleanText).join(" ") === c(o)) {
                                t = n + 1e3 * l[0].t0;
                                break;
                            }
                        }
                    }
                    this.emitSignal(
                        {
                            type: l.Gy.PHRASE,
                            text: o,
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

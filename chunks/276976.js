"use strict";
n.d(t, { NC: () => u, Xm: () => c, k1: () => o, wX: () => s, x: () => l });
var r = n(659416),
    i = n(926966),
    a = n(985018),
    s = (function (e) {
        return (
            (e.TimeElapsed = "TimeElapsed"),
            (e.TimeWhileSameGameAsSender = "TimeWhileSameGameAsSender"),
            (e.TimeWhileInDareVoiceChannel = "TimeWhileInDareVoiceChannel"),
            (e.TimeWhileStreamingInDareVoiceChannel = "TimeWhileStreamingInDareVoiceChannel"),
            (e.TimeWhileVideoEnabledInDareVoiceChannel = "TimeWhileVideoEnabledInDareVoiceChannel"),
            (e.ManualNoProgress = "ManualNoProgress"),
            e
        );
    })({});
function o(e) {
    let t = 36e5;
    switch (e) {
        case r.H9.TIMED:
            return {
                kind: e,
                progressSignal: "TimeElapsed",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default["0rUWZq"]),
                failureText: d(e, 1),
            };
        case r.H9.GAME:
            return {
                kind: e,
                progressSignal: "TimeWhileSameGameAsSender",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default.f4aIwB),
                failureText: d(e, 1),
            };
        case r.H9.VOCAL:
            return {
                kind: e,
                progressSignal: "TimeWhileInDareVoiceChannel",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default.Va04FX),
                failureText: d(e, 1),
            };
        case r.H9.STREAM:
            return {
                kind: e,
                progressSignal: "TimeWhileStreamingInDareVoiceChannel",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default.G2quIL),
                failureText: d(e, 1),
            };
        case r.H9.VIDEO:
            return {
                kind: e,
                progressSignal: "TimeWhileVideoEnabledInDareVoiceChannel",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default.HcnEjy),
                failureText: d(e, 1),
            };
        case r.H9.CHAT:
            return {
                kind: e,
                progressSignal: "ManualNoProgress",
                failAfterMsFromAccept: t,
                explanationText: a.intl.string(i.default.XqJWXB),
                failureText: d(e, 1),
            };
    }
}
function l(e) {
    return "ManualNoProgress" !== o(e).progressSignal;
}
function u(e) {
    return e.phase === r.Ob.RUNNING && l(e.kind);
}
function c(e) {
    let t = (e) => 60 * e * 6e4;
    return null != e.failAfterHours && e.failAfterHours > 0 ? t(e.failAfterHours) : o(e.kind).failAfterMsFromAccept;
}
function d(e, t) {
    let n =
        1 === t
            ? a.intl.formatToPlainString(i.default.Jp2EGO, { count: 1 })
            : a.intl.formatToPlainString(i.default.lnUmY4, { count: t });
    return e === r.H9.CHAT
        ? a.intl.formatToPlainString(i.default.AyEMDc, { hourText: n })
        : a.intl.formatToPlainString(i.default["/Ndpzl"], { hourText: n });
}

"use strict";
n.d(t, { A: () => T, x: () => p });
var i = n(64700),
    r = n(812729),
    a = n.n(r),
    s = n(277057),
    l = n.n(s),
    o = n(562708),
    d = n(228366),
    c = n(964486),
    u = n(734057),
    _ = n(309010),
    E = n(967198),
    A = n(174459),
    h = n(95561),
    I = n(686757);
let f = (0, o.trackMaker)({
    analyticEventConfigs: A.AnalyticEventConfigs,
    dispatcher: d.h,
    TRACK_ACTION_NAME: "TRACK",
});
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: i, type: r, properties: a } = e;
    if (e.type === o.ImpressionTypes.MODAL && null == e.name && (0, I.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    n || (0, I.Vm)(e);
    let s = a?.guild_id ?? E.A.getGuildId(),
        l = a?.channel_id ?? _.Ay.getChannelId(s),
        d = (0, A.expandEventProperties)({
            impression_type: r,
            location: (0, I.g$)(),
            ...(0, h.H$)(s),
            ...(0, h.dI)(u.A.getChannel(l)),
            ...a,
        });
    t ? (0, I.eE)(null, null) : (null != i && null != r && ((0, A.debugLogEvent)(i, d), f(i, d)), (0, I.eE)(i, d));
}
function T(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = i.useRef(void 0),
        s = i.useRef(void 0);
    function o() {
        let i = !a()(r.current, e);
        i && (r.current = e);
        let o = !a()(s.current, n);
        if ((o && (s.current = n), !i && !o)) return;
        let d = { ...e, sequenceId: l()("impression_") };
        return (
            p(d, t.disableTrack),
            () => {
                null != d && (0, I.u5)(d);
            }
        );
    }
    (0, c.Ay)(() => {
        if (t.trackOnInitialLoad) return o();
    }),
        i.useEffect(() => {
            if (!t.trackOnInitialLoad) return o();
        });
}

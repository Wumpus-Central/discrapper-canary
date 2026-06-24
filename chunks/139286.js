"use strict";
n.d(t, { A: () => A, x: () => g });
var i = n(64700),
    r = n(812729),
    s = n.n(r),
    a = n(296489),
    o = n.n(a),
    l = n(562708),
    u = n(228366),
    c = n(964486),
    d = n(734057),
    _ = n(309010),
    h = n(967198),
    f = n(174459),
    p = n(95561),
    E = n(686757);
let m = (0, l.trackMaker)({
    analyticEventConfigs: f.AnalyticEventConfigs,
    dispatcher: u.h,
    TRACK_ACTION_NAME: "TRACK",
});
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: i, type: r, properties: s } = e;
    if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, E.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    n || (0, E.Vm)(e);
    let a = s?.guild_id ?? h.A.getGuildId(),
        o = s?.channel_id ?? _.A.getChannelId(a),
        u = (0, f.expandEventProperties)({
            impression_type: r,
            location: (0, E.g$)(),
            ...(0, p.H$)(a),
            ...(0, p.dI)(d.A.getChannel(o)),
            ...s,
        });
    t ? (0, E.eE)(null, null) : (null != i && null != r && ((0, f.debugLogEvent)(i, u), m(i, u)), (0, E.eE)(i, u));
}
function A(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = i.useRef(void 0),
        a = i.useRef(void 0);
    function l() {
        let i = !s()(r.current, e);
        i && (r.current = e);
        let l = !s()(a.current, n);
        if ((l && (a.current = n), !i && !l)) return;
        let u = { ...e, sequenceId: o()("impression_") };
        return (
            g(u, t.disableTrack),
            () => {
                null != u && (0, E.u5)(u);
            }
        );
    }
    (0, c.Ay)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        i.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

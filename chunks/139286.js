"use strict";
n.d(t, { A: () => A, x: () => g });
var r = n(64700),
    i = n(812729),
    s = n.n(i),
    a = n(296489),
    o = n.n(a),
    l = n(110259),
    u = n(73153),
    c = n(964486),
    d = n(734057),
    _ = n(309010),
    f = n(967198),
    p = n(954571),
    h = n(58149),
    m = n(686757);
let E = (0, l.trackMaker)({
    analyticEventConfigs: p.AnalyticEventConfigs,
    dispatcher: u.h,
    TRACK_ACTION_NAME: "TRACK",
});
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: r, type: i, properties: s } = e;
    if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, m.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    n || (0, m.Vm)(e);
    let a = s?.guild_id ?? f.A.getGuildId(),
        o = s?.channel_id ?? _.A.getChannelId(a),
        u = (0, p.expandEventProperties)({
            impression_type: i,
            location: (0, m.g$)(),
            ...(0, h.H$)(a),
            ...(0, h.dI)(d.A.getChannel(o)),
            ...s,
        });
    t ? (0, m.eE)(null, null) : (null != r && null != i && ((0, p.debugLogEvent)(r, u), E(r, u)), (0, m.eE)(r, u));
}
function A(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(void 0),
        a = r.useRef(void 0),
        l = () => {
            let r = !s()(i.current, e);
            r && (i.current = e);
            let l = !s()(a.current, n);
            if ((l && (a.current = n), !r && !l)) return;
            let u = { ...e, sequenceId: o()("impression_") };
            return (
                g(u, t.disableTrack),
                () => {
                    null != u && (0, m.u5)(u);
                }
            );
        };
    (0, c.Ay)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        r.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

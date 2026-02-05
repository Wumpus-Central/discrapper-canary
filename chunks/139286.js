"use strict";
n.d(t, { A: () => A, x: () => E });
var r = n(64700),
    i = n(812729),
    a = n.n(i),
    s = n(296489),
    o = n.n(s),
    l = n(110259),
    u = n(73153),
    c = n(964486),
    d = n(734057),
    _ = n(309010),
    f = n(967198),
    p = n(954571),
    h = n(58149),
    m = n(686757);
let g = (0, l.trackMaker)({
    analyticEventConfigs: p.AnalyticEventConfigs,
    dispatcher: u.h,
    TRACK_ACTION_NAME: "TRACK",
});
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: n, type: r, properties: i } = e;
    if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, m.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    (0, m.Vm)(e);
    let a = i?.guild_id ?? f.A.getGuildId(),
        s = i?.channel_id ?? _.A.getChannelId(a),
        o = (0, p.expandEventProperties)({
            impression_type: r,
            location: (0, m.g$)(),
            ...(0, h.H$)(a),
            ...(0, h.dI)(d.A.getChannel(s)),
            ...i,
        });
    t ? (0, m.eE)(null, null) : (null != n && null != r && ((0, p.debugLogEvent)(n, o), g(n, o)), (0, m.eE)(n, o));
}
function A(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(void 0),
        s = r.useRef(void 0),
        l = () => {
            let r = !a()(i.current, e);
            r && (i.current = e);
            let l = !a()(s.current, n);
            if ((l && (s.current = n), !r && !l)) return;
            let u = { ...e, sequenceId: o()("impression_") };
            return (
                E(u, t.disableTrack),
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

"use strict";
n.d(t, { A: () => A, x: () => p });
var i = n(64700),
    r = n(812729),
    s = n.n(r),
    a = n(296489),
    o = n.n(a),
    l = n(110259),
    d = n(228366),
    _ = n(964486),
    u = n(734057),
    c = n(309010),
    E = n(967198),
    h = n(954571),
    m = n(58149),
    f = n(686757);
let g = (0, l.trackMaker)({
    analyticEventConfigs: h.AnalyticEventConfigs,
    dispatcher: d.h,
    TRACK_ACTION_NAME: "TRACK",
});
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: i, type: r, properties: s } = e;
    if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, f.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    n || (0, f.Vm)(e);
    let a = s?.guild_id ?? E.A.getGuildId(),
        o = s?.channel_id ?? c.A.getChannelId(a),
        d = (0, h.expandEventProperties)({
            impression_type: r,
            location: (0, f.g$)(),
            ...(0, m.H$)(a),
            ...(0, m.dI)(u.A.getChannel(o)),
            ...s,
        });
    t ? (0, f.eE)(null, null) : (null != i && null != r && ((0, h.debugLogEvent)(i, d), g(i, d)), (0, f.eE)(i, d));
}
function A(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = i.useRef(void 0),
        a = i.useRef(void 0),
        l = () => {
            let i = !s()(r.current, e);
            i && (r.current = e);
            let l = !s()(a.current, n);
            if ((l && (a.current = n), !i && !l)) return;
            let d = { ...e, sequenceId: o()("impression_") };
            return (
                p(d, t.disableTrack),
                () => {
                    null != d && (0, f.u5)(d);
                }
            );
        };
    (0, _.Ay)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        i.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

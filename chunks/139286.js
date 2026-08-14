t.d(n, { A: () => C, x: () => A });
var i = t(582128),
    l = t(812729),
    r = t.n(l),
    a = t(277057),
    u = t.n(a),
    d = t(562708),
    s = t(228366),
    c = t(964486),
    o = t(734057),
    p = t(309010),
    h = t(967198),
    f = t(174459),
    g = t(95561),
    k = t(686757);
let v = (0, d.trackMaker)({
    analyticEventConfigs: f.AnalyticEventConfigs,
    dispatcher: s.h,
    TRACK_ACTION_NAME: "TRACK",
});
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: i, type: l, properties: r } = e;
    if (e.type === d.ImpressionTypes.MODAL && null == e.name && (0, k.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    t || (0, k.Vm)(e);
    let a = r?.guild_id ?? h.A.getGuildId(),
        u = r?.channel_id ?? p.Ay.getChannelId(a),
        s = (0, f.expandEventProperties)({
            impression_type: l,
            location: (0, k.g$)(),
            ...(0, g.H$)(a),
            ...(0, g.dI)(o.A.getChannel(u)),
            ...r,
        });
    n ? (0, k.eE)(null, null) : (null != i && null != l && ((0, f.debugLogEvent)(i, s), v(i, s)), (0, k.eE)(i, s));
}
function C(e) {
    let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableTrack: !1, trackOnInitialLoad: !1 },
        t = arguments.length > 2 ? arguments[2] : void 0,
        l = i.useRef(void 0),
        a = i.useRef(void 0);
    function d() {
        let i = !r()(l.current, e);
        i && (l.current = e);
        let d = !r()(a.current, t);
        if ((d && (a.current = t), !i && !d)) return;
        let s = { ...e, sequenceId: u()("impression_") };
        return (
            A(s, n.disableTrack),
            () => {
                null != s && (0, k.u5)(s);
            }
        );
    }
    (0, c.Ay)(() => {
        if (n.trackOnInitialLoad) return d();
    }),
        i.useEffect(() => {
            if (!n.trackOnInitialLoad) return d();
        });
}

var i = t(582128),
    l = t(812729),
    r = t.n(l),
    u = t(277057),
    a = t.n(u),
    d = t(613412),
    c = t(73153),
    s = t(964486),
    o = t(734057),
    h = t(309010),
    k = t(967198),
    p = t(129230),
    f = t(149468),
    g = t(686757);
let A = (0, d.trackMaker)({ analyticEventConfigs: p.lG, dispatcher: c.h, TRACK_ACTION_NAME: "TRACK" });
function C(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { name: i, type: l, properties: r } = e;
    if (e.type === d.ImpressionTypes.MODAL && null == e.name && (0, g.uJ)().some((e) => e._stackContext?.isSlide))
        return;
    t || (0, g.Vm)(e);
    let u = r?.guild_id ?? k.A.getGuildId(),
        a = r?.channel_id ?? h.Ay.getChannelId(u),
        c = (0, p.kk)({
            impression_type: l,
            location: (0, g.g$)(),
            ...(0, f.H$)(u),
            ...(0, f.dI)(o.A.getChannel(a)),
            ...r,
        });
    n ? (0, g.eE)(null, null) : (null != i && null != l && ((0, p.Qe)(i, c), A(i, c)), (0, g.eE)(i, c));
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { disableTrack: !1, trackOnInitialLoad: !1 },
                t = arguments.length > 2 ? arguments[2] : void 0,
                l = i.useRef(void 0),
                u = i.useRef(void 0);
            function d() {
                let i = !r()(l.current, e);
                i && (l.current = e);
                let d = !r()(u.current, t);
                if ((d && (u.current = t), !i && !d)) return;
                let c = { ...e, sequenceId: a()("impression_") };
                return (
                    C(c, n.disableTrack),
                    () => {
                        null != c && (0, g.u5)(c);
                    }
                );
            }
            ((0, s.Ay)(() => {
                if (n.trackOnInitialLoad) return d();
            }),
                i.useEffect(() => {
                    if (!n.trackOnInitialLoad) return d();
                }));
        },
        x: C,
    },
);

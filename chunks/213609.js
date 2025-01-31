n.d(t, {
    Z: () => v,
    h: () => E
});
var i = n(192379),
    r = n(348327),
    a = n.n(r),
    s = n(97613),
    o = n.n(s),
    l = n(990547),
    u = n(570140),
    c = n(493773),
    d = n(592125),
    f = n(944486),
    _ = n(914010),
    p = n(626135),
    h = n(367907),
    m = n(565384);
let g = (0, l.trackMaker)({
    analyticEventConfigs: p.AnalyticEventConfigs,
    dispatcher: u.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function E(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: r, type: a, properties: s } = e;
    if (
        e.type === l.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, m.Ez)().some((e) => {
            var t;
            return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide;
        })
    )
        return;
    (0, m.Ps)(e);
    let o = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : _.Z.getGuildId(),
        u = null !== (n = null == s ? void 0 : s.channel_id) && void 0 !== n ? n : f.Z.getChannelId(o),
        c = (0, p.expandEventProperties)({
            impression_type: a,
            location: (0, m.k$)(),
            ...(0, h.hH)(o),
            ...(0, h.v_)(d.Z.getChannel(u)),
            ...s
        });
    if (i) {
        (0, m.dT)(null, null);
        return;
    }
    null != r && null != a && ((0, p.debugLogEvent)(r, c), g(r, c)), (0, m.dT)(r, c);
}
function v(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1
                  },
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = i.useRef(),
        s = i.useRef(),
        l = () => {
            let i = !a()(r.current, e);
            i && (r.current = e);
            let l = !a()(s.current, n);
            if ((l && (s.current = n), !i && !l)) return;
            let u = {
                ...e,
                sequenceId: o()('impression_')
            };
            return (
                E(u, t.disableTrack),
                () => {
                    null != u && (0, m.dw)(u);
                }
            );
        };
    (0, c.Z)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        i.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

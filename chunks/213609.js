r.d(n, {
    Z: function () {
        return I;
    },
    h: function () {
        return v;
    }
});
var i = r(192379),
    a = r(348327),
    s = r.n(a),
    o = r(97613),
    l = r.n(o),
    u = r(990547),
    c = r(570140),
    d = r(493773),
    f = r(592125),
    _ = r(944486),
    h = r(914010),
    p = r(626135),
    m = r(367907),
    g = r(565384);
let E = (0, u.trackMaker)({
    analyticEventConfigs: p.AnalyticEventConfigs,
    dispatcher: c.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function v(e) {
    var n, r;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: a, type: s, properties: o } = e;
    if (
        e.type === u.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, g.Ez)().some((e) => {
            var n;
            return null === (n = e._stackContext) || void 0 === n ? void 0 : n.isSlide;
        })
    )
        return;
    (0, g.Ps)(e);
    let l = null !== (n = null == o ? void 0 : o.guild_id) && void 0 !== n ? n : h.Z.getGuildId(),
        c = null !== (r = null == o ? void 0 : o.channel_id) && void 0 !== r ? r : _.Z.getChannelId(l),
        d = (0, p.expandEventProperties)({
            impression_type: s,
            location: (0, g.k$)(),
            ...(0, m.hH)(l),
            ...(0, m.v_)(f.Z.getChannel(c)),
            ...o
        });
    if (i) {
        (0, g.dT)(null, null);
        return;
    }
    null != a && null != s && ((0, p.debugLogEvent)(a, d), E(a, d)), (0, g.dT)(a, d);
}
function I(e) {
    let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1
                  },
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = i.useRef(),
        o = i.useRef(),
        u = () => {
            let i = !s()(a.current, e);
            i && (a.current = e);
            let u = !s()(o.current, r);
            if ((u && (o.current = r), !i && !u)) return;
            let c = {
                ...e,
                sequenceId: l()('impression_')
            };
            return (
                v(c, n.disableTrack),
                () => {
                    null != c && (0, g.dw)(c);
                }
            );
        };
    (0, d.Z)(() => {
        if (n.trackOnInitialLoad) return u();
    }),
        i.useEffect(() => {
            if (!n.trackOnInitialLoad) return u();
        });
}

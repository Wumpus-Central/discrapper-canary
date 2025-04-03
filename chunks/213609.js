n.d(t, {
    Z: () => I,
    h: () => O
});
var r = n(192379),
    i = n(348327),
    o = n.n(i),
    a = n(97613),
    s = n.n(a),
    l = n(990547),
    c = n(570140),
    u = n(493773),
    d = n(592125),
    f = n(944486),
    _ = n(914010),
    p = n(626135),
    h = n(367907),
    m = n(565384);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (0, l.trackMaker)({
    analyticEventConfigs: p.AnalyticEventConfigs,
    dispatcher: c.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function O(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: i, type: o, properties: a } = e;
    if (
        e.type === l.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, m.Ez)().some((e) => {
            var t;
            return null == (t = e._stackContext) ? void 0 : t.isSlide;
        })
    )
        return;
    (0, m.Ps)(e);
    let s = null != (t = null == a ? void 0 : a.guild_id) ? t : _.Z.getGuildId(),
        c = null != (n = null == a ? void 0 : a.channel_id) ? n : f.Z.getChannelId(s),
        u = (0, p.expandEventProperties)(
            E(
                {
                    impression_type: o,
                    location: (0, m.k$)()
                },
                (0, h.hH)(s),
                (0, h.v_)(d.Z.getChannel(c)),
                a
            )
        );
    if (r) return void (0, m.dT)(null, null);
    null != i && null != o && ((0, p.debugLogEvent)(i, u), v(i, u)), (0, m.dT)(i, u);
}
function I(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1
                  },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(),
        a = r.useRef(),
        l = () => {
            let r = !o()(i.current, e);
            r && (i.current = e);
            let l = !o()(a.current, n);
            if ((l && (a.current = n), !r && !l)) return;
            let c = y(E({}, e), { sequenceId: s()('impression_') });
            return (
                O(c, t.disableTrack),
                () => {
                    null != c && (0, m.dw)(c);
                }
            );
        };
    (0, u.ZP)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        r.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

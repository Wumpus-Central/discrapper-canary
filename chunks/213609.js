n.d(t, {
    Z: () => S,
    h: () => v,
});
var r = n(473749),
    i = n(348327),
    a = n.n(i),
    o = n(97613),
    s = n.n(o),
    l = n(990547),
    c = n(570140),
    u = n(493773),
    d = n(592125),
    f = n(944486),
    p = n(914010),
    _ = n(626135),
    m = n(367907),
    h = n(565384);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let O = (0, l.trackMaker)({
    analyticEventConfigs: _.AnalyticEventConfigs,
    dispatcher: c.Z,
    TRACK_ACTION_NAME: "TRACK",
});
function v(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: i, type: a, properties: o } = e;
    if (
        e.type === l.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, h.Ez)().some((e) => {
            var t;
            return null == (t = e._stackContext) ? void 0 : t.isSlide;
        })
    )
        return;
    (0, h.Ps)(e);
    let s = null != (t = null == o ? void 0 : o.guild_id) ? t : p.Z.getGuildId(),
        c = null != (n = null == o ? void 0 : o.channel_id) ? n : f.Z.getChannelId(s),
        u = (0, _.expandEventProperties)(
            E(
                {
                    impression_type: a,
                    location: (0, h.k$)(),
                },
                (0, m.hH)(s),
                (0, m.v_)(d.Z.getChannel(c)),
                o,
            ),
        );
    if (r) return void (0, h.dT)(null, null);
    null != i && null != a && ((0, _.debugLogEvent)(i, u), O(i, u)), (0, h.dT)(i, u);
}
function S(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1,
                  },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(void 0),
        o = r.useRef(void 0),
        l = () => {
            let r = !a()(i.current, e);
            r && (i.current = e);
            let l = !a()(o.current, n);
            if ((l && (o.current = n), !r && !l)) return;
            let c = y(E({}, e), { sequenceId: s()("impression_") });
            return (
                v(c, t.disableTrack),
                () => {
                    null != c && (0, h.dw)(c);
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

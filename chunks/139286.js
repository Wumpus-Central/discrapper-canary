n.d(t, {
    A: () => v,
    x: () => A,
});
var r = n(64700),
    i = n(812729),
    a = n.n(i),
    s = n(296489),
    o = n.n(s),
    l = n(110259),
    c = n(73153),
    u = n(964486),
    d = n(734057),
    f = n(309010),
    p = n(967198),
    _ = n(954571),
    h = n(58149),
    m = n(686757);

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
    dispatcher: c.h,
    TRACK_ACTION_NAME: "TRACK",
});

function A(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { name: i, type: a, properties: s } = e;
    if (
        e.type === l.ImpressionTypes.MODAL &&
        null == e.name &&
        (0, m.uJ)().some((e) => {
            var t;
            return null == (t = e._stackContext) ? void 0 : t.isSlide;
        })
    )
        return;
    (0, m.Vm)(e);
    let o = null != (t = null == s ? void 0 : s.guild_id) ? t : p.A.getGuildId(),
        c = null != (n = null == s ? void 0 : s.channel_id) ? n : f.A.getChannelId(o),
        u = (0, _.expandEventProperties)(
            E(
                {
                    impression_type: a,
                    location: (0, m.g$)(),
                },
                (0, h.H$)(o),
                (0, h.dI)(d.A.getChannel(c)),
                s,
            ),
        );
    r ? (0, m.eE)(null, null) : (null != i && null != a && ((0, _.debugLogEvent)(i, u), O(i, u)), (0, m.eE)(i, u));
}

function v(e) {
    let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      disableTrack: !1,
                      trackOnInitialLoad: !1,
                  },
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = r.useRef(void 0),
        s = r.useRef(void 0),
        l = () => {
            let r = !a()(i.current, e);
            r && (i.current = e);
            let l = !a()(s.current, n);
            if ((l && (s.current = n), !r && !l)) return;
            let c = y(E({}, e), {
                sequenceId: o()("impression_"),
            });
            return (
                A(c, t.disableTrack),
                () => {
                    null != c && (0, m.u5)(c);
                }
            );
        };
    (0, u.Ay)(() => {
        if (t.trackOnInitialLoad) return l();
    }),
        r.useEffect(() => {
            if (!t.trackOnInitialLoad) return l();
        });
}

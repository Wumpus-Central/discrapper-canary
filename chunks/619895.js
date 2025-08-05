(n.d(t, {
    Q: () => h,
    h: () => m
}),
    n(35282));
var r = n(73800),
    i = n(892814),
    a = n(442837),
    o = n(895924),
    s = n(581364),
    l = n(823379),
    c = n(399654),
    u = n(844439);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { contentType: t } = e;
    switch (t) {
        case 'image/jpeg':
        case 'image/jpg':
            return '.jpg';
        case 'image/png':
        case 'image/apng':
            return '.png';
        case 'image/webp':
            return '.webp';
        default:
            return '';
    }
}
function m(e) {
    let { channelId: t } = e,
        { fetchState: n, recommendationsSections: i } = g({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: r.useMemo(() => {
            let e = i.length > 0 ? i[0].items : void 0;
            if (void 0 === e) return [];
            let t = {};
            return (
                e.forEach((e) => {
                    var n;
                    let r = null != (n = e.command_metadata) ? n : {};
                    Object.keys(r).forEach((e) => {
                        t[e] = r[e];
                    });
                }),
                Object.keys(t)
                    .map((t) => {
                        var n, r, i, a, l, c, u, d, _, h, m, g;
                        let E,
                            b,
                            y = e.find((e) => {
                                var n;
                                return null != (E = null == (n = e.commands) ? void 0 : n.find((e) => e.id === t));
                            });
                        if (null == y) return null;
                        let { application: O } = y;
                        if (null == E) return null;
                        let v = (0, s.Z8)({
                                rootCommand: E,
                                command: E,
                                applicationId: O.id
                            }),
                            I = null == (i = y.command_metadata) || null == (r = i[t]) || null == (n = r.overrideSendCommandInfo) ? void 0 : n.commandId;
                        if (null != I) {
                            let e = null != I ? (null == (m = y.commands) ? void 0 : m.find((e) => e.id === I)) : void 0;
                            null != e &&
                                (b = (0, s.Z8)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: O.id
                                }));
                        }
                        return {
                            command: p(f({}, v), {
                                displayName: v.displayName
                                    .split(/[_ ]/)
                                    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                    .join(' ')
                            }),
                            imageOption: null == (l = y.command_metadata) || null == (a = l[t]) ? void 0 : a.imageOption,
                            overrideSendCommand: b,
                            overrideSendCommandInfo: null == (u = y.command_metadata) || null == (c = u[t]) ? void 0 : c.overrideSendCommandInfo,
                            onlyAllowEdit: null == (_ = y.command_metadata) || null == (d = _[t]) ? void 0 : d.onlyAllowEdit,
                            section: {
                                type: o.Qi.APPLICATION,
                                id: O.id,
                                icon: O.icon,
                                name: null != (g = null == O || null == (h = O.bot) ? void 0 : h.username) ? g : O.name,
                                application: O
                            }
                        };
                    })
                    .filter(l.lm)
            );
        }, [i])
    };
}
function g(e) {
    let { channelId: t } = e,
        n = i.I.CONTEXTUAL_IMAGE,
        o = r.useMemo(
            () => ({
                channelId: t,
                location: n,
                withCommands: !0
            }),
            [t, n]
        );
    r.useEffect(() => {
        (0, c.a)(o);
    }, [o]);
    let { fetchState: s, recommendationsSections: l } = (0, a.cj)([u.ZP], () => ({
        fetchState: u.ZP.getFetchState(o),
        recommendationsSections: u.ZP.getRecommendations(o)
    }));
    return {
        fetchState: s,
        recommendationsSections: l
    };
}

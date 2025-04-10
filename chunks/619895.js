n.d(t, {
    Q: () => d,
    h: () => m
}),
    n(35282);
var r = n(192379),
    l = n(228458),
    o = n(442837),
    a = n(895924),
    i = n(581364),
    c = n(823379),
    u = n(399654),
    s = n(844439);
function d(e) {
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
        { fetchState: n, recommendationsSections: d } = (function (e) {
            let { channelId: t } = e,
                n = l.I.CONTEXTUAL_IMAGE,
                a = r.useMemo(
                    () => ({
                        channelId: t,
                        location: n,
                        withCommands: !0
                    }),
                    [t, n]
                );
            r.useEffect(() => {
                (0, u.a)(a);
            }, [a]);
            let { fetchState: i, recommendationsSections: c } = (0, o.cj)([s.ZP], () => ({
                fetchState: s.ZP.getFetchState(a),
                recommendationsSections: s.ZP.getRecommendations(a)
            }));
            return {
                fetchState: i,
                recommendationsSections: c
            };
        })({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: r.useMemo(() => {
            let e = d.length > 0 ? d[0].items : void 0;
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
                        var n, r, l, o, c, u, s, d, m, p, f, b, O, E;
                        let g,
                            y,
                            h = e.find((e) => {
                                var n;
                                return null != (g = null == (n = e.commands) ? void 0 : n.find((e) => e.id === t));
                            });
                        if (null == h) return null;
                        let { application: v } = h;
                        if (null == g) return null;
                        let C = (0, i.Z8)({
                                rootCommand: g,
                                command: g,
                                applicationId: v.id
                            }),
                            j = null == (l = h.command_metadata) || null == (r = l[t]) || null == (n = r.overrideSendCommandInfo) ? void 0 : n.commandId;
                        if (null != j) {
                            let e = null != j ? (null == (f = h.commands) ? void 0 : f.find((e) => e.id === j)) : void 0;
                            null != e &&
                                (y = (0, i.Z8)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: v.id
                                }));
                        }
                        return {
                            command:
                                ((O = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, C)),
                                (E = E =
                                    {
                                        displayName: C.displayName
                                            .split(/[_ ]/)
                                            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                            .join(' ')
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(E))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(E)).forEach(function (e) {
                                          Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(E, e));
                                      }),
                                O),
                            imageOption: null == (c = h.command_metadata) || null == (o = c[t]) ? void 0 : o.imageOption,
                            overrideSendCommand: y,
                            overrideSendCommandInfo: null == (s = h.command_metadata) || null == (u = s[t]) ? void 0 : u.overrideSendCommandInfo,
                            onlyAllowEdit: null == (m = h.command_metadata) || null == (d = m[t]) ? void 0 : d.onlyAllowEdit,
                            section: {
                                type: a.Qi.APPLICATION,
                                id: v.id,
                                icon: v.icon,
                                name: null != (b = null == v || null == (p = v.bot) ? void 0 : p.username) ? b : v.name,
                                application: v
                            }
                        };
                    })
                    .filter(c.lm)
            );
        }, [d])
    };
}

n.d(t, {
    Q: () => s,
    h: () => m
}),
    n(301563);
var o = n(192379),
    i = n(228458),
    r = n(442837),
    l = n(895924),
    a = n(581364),
    c = n(823379),
    d = n(399654),
    u = n(844439);
function s(e) {
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
        { fetchState: n, recommendationsSections: s } = (function (e) {
            let { channelId: t } = e,
                n = i.I.CONTEXTUAL_IMAGE,
                l = o.useMemo(
                    () => ({
                        channelId: t,
                        location: n,
                        withCommands: !0
                    }),
                    [t, n]
                );
            o.useEffect(() => {
                (0, d.a)(l);
            }, [l]);
            let { fetchState: a, recommendationsSections: c } = (0, r.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(l),
                recommendationsSections: u.ZP.getRecommendations(l)
            }));
            return {
                fetchState: a,
                recommendationsSections: c
            };
        })({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: o.useMemo(() => {
            let e = s.length > 0 ? s[0].items : void 0;
            if (void 0 === e) return [];
            let t = {};
            return (
                e.forEach((e) => {
                    var n;
                    let o = null !== (n = e.command_metadata) && void 0 !== n ? n : {};
                    Object.keys(o).forEach((e) => {
                        t[e] = o[e];
                    });
                }),
                Object.keys(t)
                    .map((t) => {
                        var n, o, i, r, c, d, u, s, m, p, f, O, b, E;
                        let v, g;
                        let y = e.find((e) => {
                            var n;
                            return null != (v = null === (n = e.commands) || void 0 === n ? void 0 : n.find((e) => e.id === t));
                        });
                        if (null == y) return null;
                        let { application: h } = y;
                        if (null == v) return null;
                        let C = (0, a.Z8)({
                                rootCommand: v,
                                command: v,
                                applicationId: h.id
                            }),
                            P = null === (i = y.command_metadata) || void 0 === i ? void 0 : null === (o = i[t]) || void 0 === o ? void 0 : null === (n = o.overrideSendCommandInfo) || void 0 === n ? void 0 : n.commandId;
                        if (null != P) {
                            let e = null != P ? (null === (f = y.commands) || void 0 === f ? void 0 : f.find((e) => e.id === P)) : void 0;
                            null != e &&
                                (g = (0, a.Z8)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: h.id
                                }));
                        }
                        return {
                            command:
                                ((b = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            o = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (o = o.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            o.forEach(function (t) {
                                                var o;
                                                (o = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: o,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = o);
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
                                    ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(E))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var o = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, o);
                                          }
                                          return n;
                                      })(Object(E)).forEach(function (e) {
                                          Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(E, e));
                                      }),
                                b),
                            imageOption: null === (c = y.command_metadata) || void 0 === c ? void 0 : null === (r = c[t]) || void 0 === r ? void 0 : r.imageOption,
                            overrideSendCommand: g,
                            overrideSendCommandInfo: null === (u = y.command_metadata) || void 0 === u ? void 0 : null === (d = u[t]) || void 0 === d ? void 0 : d.overrideSendCommandInfo,
                            onlyAllowEdit: null === (m = y.command_metadata) || void 0 === m ? void 0 : null === (s = m[t]) || void 0 === s ? void 0 : s.onlyAllowEdit,
                            section: {
                                type: l.Qi.APPLICATION,
                                id: h.id,
                                icon: h.icon,
                                name: null !== (O = null == h ? void 0 : null === (p = h.bot) || void 0 === p ? void 0 : p.username) && void 0 !== O ? O : h.name,
                                application: h
                            }
                        };
                    })
                    .filter(c.lm)
            );
        }, [s])
    };
}

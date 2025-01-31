t.d(n, {
    Q: () => s,
    h: () => m
});
var l = t(192379),
    i = t(228458),
    a = t(442837),
    o = t(895924),
    d = t(581364),
    c = t(823379),
    r = t(399654),
    u = t(844439);
function s(e) {
    let { contentType: n } = e;
    switch (n) {
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
    let { channelId: n } = e,
        { fetchState: t, recommendationsSections: s } = (function (e) {
            let { channelId: n } = e,
                t = i.I.CONTEXTUAL_IMAGE,
                o = l.useMemo(
                    () => ({
                        channelId: n,
                        location: t,
                        withCommands: !0
                    }),
                    [n, t]
                );
            l.useEffect(() => {
                (0, r.a)(o);
            }, [o]);
            let { fetchState: d, recommendationsSections: c } = (0, a.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o)
            }));
            return {
                fetchState: d,
                recommendationsSections: c
            };
        })({ channelId: n });
    return {
        fetchState: t,
        imageRecCommandContexts: l.useMemo(() => {
            let e = s.length > 0 ? s[0].items : void 0;
            if (void 0 === e) return [];
            let n = {};
            return (
                e.forEach((e) => {
                    var t;
                    let l = null !== (t = e.command_metadata) && void 0 !== t ? t : {};
                    Object.keys(l).forEach((e) => {
                        n[e] = l[e];
                    });
                }),
                Object.keys(n)
                    .map((n) => {
                        var t, l, i, a, c, r, u, s, m, E, v, p;
                        let C, _;
                        let h = e.find((e) => {
                            var t;
                            return null != (C = null === (t = e.commands) || void 0 === t ? void 0 : t.find((e) => e.id === n));
                        });
                        if (null == h) return null;
                        let { application: g } = h;
                        if (null == C) return null;
                        let M = (0, d.Z8)({
                                rootCommand: C,
                                command: C,
                                applicationId: g.id
                            }),
                            f = null === (i = h.command_metadata) || void 0 === i ? void 0 : null === (l = i[n]) || void 0 === l ? void 0 : null === (t = l.overrideSendCommandInfo) || void 0 === t ? void 0 : t.commandId;
                        if (null != f) {
                            let e = null != f ? (null === (v = h.commands) || void 0 === v ? void 0 : v.find((e) => e.id === f)) : void 0;
                            null != e &&
                                (_ = (0, d.Z8)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: g.id
                                }));
                        }
                        return {
                            command: {
                                ...M,
                                displayName: M.displayName
                                    .split(/[_ ]/)
                                    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                    .join(' ')
                            },
                            imageOption: null === (c = h.command_metadata) || void 0 === c ? void 0 : null === (a = c[n]) || void 0 === a ? void 0 : a.imageOption,
                            overrideSendCommand: _,
                            overrideSendCommandInfo: null === (u = h.command_metadata) || void 0 === u ? void 0 : null === (r = u[n]) || void 0 === r ? void 0 : r.overrideSendCommandInfo,
                            onlyAllowEdit: null === (m = h.command_metadata) || void 0 === m ? void 0 : null === (s = m[n]) || void 0 === s ? void 0 : s.onlyAllowEdit,
                            section: {
                                type: o.Qi.APPLICATION,
                                id: g.id,
                                icon: g.icon,
                                name: null !== (p = null == g ? void 0 : null === (E = g.bot) || void 0 === E ? void 0 : E.username) && void 0 !== p ? p : g.name,
                                application: g
                            }
                        };
                    })
                    .filter(c.lm)
            );
        }, [s])
    };
}

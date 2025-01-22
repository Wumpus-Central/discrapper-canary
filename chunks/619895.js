t.d(n, {
    Q: function () {
        return s;
    },
    h: function () {
        return m;
    }
});
var i = t(192379),
    l = t(228458),
    a = t(442837),
    o = t(895924),
    d = t(581364),
    r = t(823379),
    c = t(399654),
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
                t = l.I.CONTEXTUAL_IMAGE,
                o = i.useMemo(
                    () => ({
                        channelId: n,
                        location: t,
                        withCommands: !0
                    }),
                    [n, t]
                );
            i.useEffect(() => {
                (0, c.a)(o);
            }, [o]);
            let { fetchState: d, recommendationsSections: r } = (0, a.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o)
            }));
            return {
                fetchState: d,
                recommendationsSections: r
            };
        })({ channelId: n });
    return {
        fetchState: t,
        imageRecCommandContexts: i.useMemo(() => {
            let e = s.length > 0 ? s[0].items : void 0;
            if (void 0 === e) return [];
            let n = {};
            return (
                e.forEach((e) => {
                    var t;
                    let i = null !== (t = e.command_metadata) && void 0 !== t ? t : {};
                    Object.keys(i).forEach((e) => {
                        n[e] = i[e];
                    });
                }),
                Object.keys(n)
                    .map((n) => {
                        var t, i, l, a, r, c, u, s, m, E, p, v;
                        let C, _;
                        let f = e.find((e) => {
                            var t;
                            return null != (C = null === (t = e.commands) || void 0 === t ? void 0 : t.find((e) => e.id === n));
                        });
                        if (null == f) return null;
                        let { application: h } = f;
                        if (null == C) return null;
                        let M = (0, d.Z8)({
                                rootCommand: C,
                                command: C,
                                applicationId: h.id
                            }),
                            g = null === (l = f.command_metadata) || void 0 === l ? void 0 : null === (i = l[n]) || void 0 === i ? void 0 : null === (t = i.overrideSendCommandInfo) || void 0 === t ? void 0 : t.commandId;
                        if (null != g) {
                            let e = null != g ? (null === (p = f.commands) || void 0 === p ? void 0 : p.find((e) => e.id === g)) : void 0;
                            null != e &&
                                (_ = (0, d.Z8)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: h.id
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
                            imageOption: null === (r = f.command_metadata) || void 0 === r ? void 0 : null === (a = r[n]) || void 0 === a ? void 0 : a.imageOption,
                            overrideSendCommand: _,
                            overrideSendCommandInfo: null === (u = f.command_metadata) || void 0 === u ? void 0 : null === (c = u[n]) || void 0 === c ? void 0 : c.overrideSendCommandInfo,
                            onlyAllowEdit: null === (m = f.command_metadata) || void 0 === m ? void 0 : null === (s = m[n]) || void 0 === s ? void 0 : s.onlyAllowEdit,
                            section: {
                                type: o.Qi.APPLICATION,
                                id: h.id,
                                icon: h.icon,
                                name: null !== (v = null == h ? void 0 : null === (E = h.bot) || void 0 === E ? void 0 : E.username) && void 0 !== v ? v : h.name,
                                application: h
                            }
                        };
                    })
                    .filter(r.lm)
            );
        }, [s])
    };
}

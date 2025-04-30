r.d(t, { Z: () => x }), r(388685), r(35282);
var n = r(200651),
    i = r(192379),
    a = r(120356),
    l = r.n(a),
    s = r(643872),
    o = r(442837),
    c = r(481060),
    u = r(570140),
    d = r(652898),
    m = r(93093),
    g = r(768581),
    f = r(810568),
    p = r(981631),
    O = r(388032),
    E = r(263930),
    h = r(926921);
function x(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: a, closeModal: x } = e,
        [v, j] = i.useState(),
        b = (0, o.e7)([m.Z], () => {
            var e, t;
            return (null == v || null == (e = v.guild) ? void 0 : e.id) != null && m.Z.isMember(null == v || null == (t = v.guild) ? void 0 : t.id);
        }),
        I = i.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    if (null != v && v.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (j(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != I && e(I.url);
        }, [I, a, v]),
        null == v || null == v.guild || (!v.guild.features.includes(p.oNc.VERIFIED) && !v.guild.features.includes(p.oNc.PARTNERED)))
    )
        return null;
    let y = g.ZP.getGuildIconURL({
        id: v.guild.id,
        icon: v.guild.icon,
        size: 32
    });
    return (0, n.jsxs)('div', {
        className: E.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: E.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: O.intl.string(O.t.kBDZSE)
            }),
            (0, n.jsxs)('div', {
                className: l()(E.row, E.gapMd),
                children: [
                    (0, n.jsx)('img', {
                        className: h.guildIcon,
                        src: y,
                        alt: O.intl.formatToPlainString(O.t.xm6W9P, { guildName: v.guild.name })
                    }),
                    (0, n.jsxs)('div', {
                        className: h.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: v.guild.name
                            }),
                            null != v.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: O.intl.format(O.t.zRl6XV, { count: v.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    x(),
                        r(f.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: v,
                            code: v.code,
                            context: p.IlC.APP
                        });
                },
                children: b ? O.intl.string(O.t.cEnaW1) : O.intl.string(O.t.XpeFYm)
            })
        ]
    });
}

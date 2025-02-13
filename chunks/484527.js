n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    _ = n(768581),
    g = n(810568),
    p = n(981631),
    f = n(388032),
    h = n(497329),
    x = n(400886);
function v(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: i, closeModal: v } = e,
        [I, C] = a.useState(),
        E = (0, s.e7)([m.Z], () => {
            var e, t;
            return (null == I ? void 0 : null === (e = I.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == I ? void 0 : null === (t = I.guild) || void 0 === t ? void 0 : t.id);
        }),
        b = a.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === l.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (a.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    if (null != I && I.code === t) return;
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (C(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != b && e(b.url);
        }, [b, i, I]),
        null == I || null == I.guild || (!I.guild.features.includes('VERIFIED') && !I.guild.features.includes('PARTNER')))
    )
        return null;
    let T = _.ZP.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32
    });
    return (0, r.jsxs)('div', {
        className: h.column,
        children: [
            (0, r.jsx)(c.X6q, {
                className: h.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: f.intl.string(f.t.kBDZSE)
            }),
            (0, r.jsxs)('div', {
                className: o()(h.row, h.gapMd),
                children: [
                    (0, r.jsx)('img', {
                        className: x.guildIcon,
                        src: T,
                        alt: f.intl.formatToPlainString(f.t.xm6W9P, { guildName: I.guild.name })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.inviteInfo,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: I.guild.name
                            }),
                            null != I.approximate_member_count &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: f.intl.format(f.t.zRl6XV, { count: I.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    v(),
                        n(g.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: I,
                            code: I.code,
                            context: p.IlC.APP
                        });
                },
                children: E ? f.intl.string(f.t.cEnaW1) : f.intl.string(f.t.XpeFYm)
            })
        ]
    });
}

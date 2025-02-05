n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    p = n(768581),
    g = n(810568),
    _ = n(981631),
    h = n(388032),
    f = n(561526),
    x = n(731364);
function v(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: a, closeModal: v } = e,
        [I, E] = r.useState(),
        C = (0, s.e7)([m.Z], () => {
            var e, t;
            return (null == I ? void 0 : null === (e = I.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == I ? void 0 : null === (t = I.guild) || void 0 === t ? void 0 : t.id);
        }),
        b = r.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === o.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (E(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != b && e(b.url);
        }, [b, a]),
        null == I || null == I.guild || (!I.guild.features.includes('VERIFIED') && !I.guild.features.includes('PARTNER')))
    )
        return null;
    let j = p.ZP.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32
    });
    return (0, i.jsxs)('div', {
        className: f.column,
        children: [
            (0, i.jsx)(c.X6q, {
                className: f.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: h.intl.string(h.t.kBDZSE)
            }),
            (0, i.jsxs)('div', {
                className: l()(f.row, f.gapMd),
                children: [
                    (0, i.jsx)('img', {
                        className: x.guildIcon,
                        src: j,
                        alt: h.intl.formatToPlainString(h.t.xm6W9P, { guildName: I.guild.name })
                    }),
                    (0, i.jsxs)('div', {
                        className: x.inviteInfo,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: I.guild.name
                            }),
                            null != I.approximate_member_count &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: h.intl.format(h.t.zRl6XV, { count: I.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    v(),
                        n(g.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: I,
                            code: I.code,
                            context: _.IlC.APP
                        });
                },
                children: C ? h.intl.string(h.t.cEnaW1) : h.intl.string(h.t.XpeFYm)
            })
        ]
    });
}

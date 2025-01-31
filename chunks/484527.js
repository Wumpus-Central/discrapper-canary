n.d(t, { Z: () => E }), n(47120);
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
    h = n(981631),
    _ = n(388032),
    f = n(561526),
    x = n(731364);
function E(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: a, closeModal: E } = e,
        [v, I] = r.useState(),
        C = (0, s.e7)([m.Z], () => {
            var e, t;
            return (null == v ? void 0 : null === (e = v.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == v ? void 0 : null === (t = v.guild) || void 0 === t ? void 0 : t.id);
        }),
        A = r.useMemo(() => {
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
                    !0 !== e.banned && (I(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != A && e(A.url);
        }, [A, a]),
        null == v || null == v.guild || (!v.guild.features.includes('VERIFIED') && !v.guild.features.includes('PARTNER')))
    )
        return null;
    let S = p.ZP.getGuildIconURL({
        id: v.guild.id,
        icon: v.guild.icon,
        size: 32
    });
    return (0, i.jsxs)('div', {
        className: f.column,
        children: [
            (0, i.jsx)(c.X6q, {
                className: f.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: _.intl.string(_.t.kBDZSE)
            }),
            (0, i.jsxs)('div', {
                className: l()(f.row, f.gapMd),
                children: [
                    (0, i.jsx)('img', {
                        className: x.guildIcon,
                        src: S,
                        alt: _.intl.formatToPlainString(_.t.xm6W9P, { guildName: v.guild.name })
                    }),
                    (0, i.jsxs)('div', {
                        className: x.inviteInfo,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: v.guild.name
                            }),
                            null != v.approximate_member_count &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: _.intl.format(_.t.zRl6XV, { count: v.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    E(),
                        n(g.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: v,
                            code: v.code,
                            context: h.IlC.APP
                        });
                },
                children: C ? _.intl.string(_.t.cEnaW1) : _.intl.string(_.t.XpeFYm)
            })
        ]
    });
}

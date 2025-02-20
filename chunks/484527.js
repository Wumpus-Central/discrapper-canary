r.d(t, { Z: () => O }), r(47120), r(301563);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    s = r(643872),
    l = r(442837),
    c = r(481060),
    u = r(570140),
    d = r(652898),
    p = r(93093),
    m = r(768581),
    f = r(810568),
    g = r(981631),
    b = r(388032),
    _ = r(384370),
    h = r(82066);
function O(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: o, closeModal: O } = e,
        [y, v] = a.useState(),
        j = (0, l.e7)([p.Z], () => {
            var e, t;
            return (null == y ? void 0 : null === (e = y.guild) || void 0 === e ? void 0 : e.id) != null && p.Z.isMember(null == y ? void 0 : null === (t = y.guild) || void 0 === t ? void 0 : t.id);
        }),
        x = a.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (a.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    if (null != y && y.code === t) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (v(e.invite), null != e.invite && (null == o || o(e.invite)));
                }
            };
            null != x && e(x.url);
        }, [x, o, y]),
        null == y || null == y.guild || (!y.guild.features.includes('VERIFIED') && !y.guild.features.includes('PARTNER')))
    )
        return null;
    let P = m.ZP.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32
    });
    return (0, n.jsxs)('div', {
        className: _.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: _.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: b.NW.string(b.t.kBDZSE)
            }),
            (0, n.jsxs)('div', {
                className: i()(_.row, _.gapMd),
                children: [
                    (0, n.jsx)('img', {
                        className: h.guildIcon,
                        src: P,
                        alt: b.NW.formatToPlainString(b.t.xm6W9P, { guildName: y.guild.name })
                    }),
                    (0, n.jsxs)('div', {
                        className: h.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: y.guild.name
                            }),
                            null != y.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: b.NW.format(b.t.zRl6XV, { count: y.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    O(),
                        r(f.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: y,
                            code: y.code,
                            context: g.IlC.APP
                        });
                },
                children: j ? b.NW.string(b.t.cEnaW1) : b.NW.string(b.t.XpeFYm)
            })
        ]
    });
}

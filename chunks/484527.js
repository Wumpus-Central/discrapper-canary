r.d(t, { Z: () => O }), r(47120), r(301563);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    l = r(643872),
    s = r(442837),
    c = r(481060),
    u = r(570140),
    d = r(652898),
    p = r(93093),
    f = r(768581),
    m = r(810568),
    g = r(981631),
    b = r(388032),
    _ = r(263930),
    h = r(926921);
function O(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: o, closeModal: O } = e,
        [y, v] = a.useState(),
        j = (0, s.e7)([p.Z], () => {
            var e, t;
            return (null == y || null == (e = y.guild) ? void 0 : e.id) != null && p.Z.isMember(null == y || null == (t = y.guild) ? void 0 : t.id);
        }),
        x = a.useMemo(() => {
            var e;
            return null == (e = t.websites)
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
                    if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (v(e.invite), null != e.invite && (null == o || o(e.invite)));
                }
            };
            null != x && e(x.url);
        }, [x, o, y]),
        null == y || null == y.guild || (!y.guild.features.includes(g.oNc.VERIFIED) && !y.guild.features.includes(g.oNc.PARTNERED)))
    )
        return null;
    let P = f.ZP.getGuildIconURL({
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
                        r(m.as.JoinOfficialServer),
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

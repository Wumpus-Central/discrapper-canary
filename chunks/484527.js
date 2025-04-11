r.d(t, { Z: () => h }), r(388685), r(35282);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
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
    N = r(926921);
function h(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: h } = e,
        [x, j] = a.useState(),
        v = (0, o.e7)([m.Z], () => {
            var e, t;
            return (null == x || null == (e = x.guild) ? void 0 : e.id) != null && m.Z.isMember(null == x || null == (t = x.guild) ? void 0 : t.id);
        }),
        b = a.useMemo(() => {
            var e;
            return null == (e = t.websites)
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
                    if (null != x && x.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (j(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != b && e(b.url);
        }, [b, i, x]),
        null == x || null == x.guild || (!x.guild.features.includes(p.oNc.VERIFIED) && !x.guild.features.includes(p.oNc.PARTNERED)))
    )
        return null;
    let I = g.ZP.getGuildIconURL({
        id: x.guild.id,
        icon: x.guild.icon,
        size: 32
    });
    return (0, n.jsxs)('div', {
        className: E.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: E.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: O.NW.string(O.t.kBDZSE)
            }),
            (0, n.jsxs)('div', {
                className: l()(E.row, E.gapMd),
                children: [
                    (0, n.jsx)('img', {
                        className: N.guildIcon,
                        src: I,
                        alt: O.NW.formatToPlainString(O.t.xm6W9P, { guildName: x.guild.name })
                    }),
                    (0, n.jsxs)('div', {
                        className: N.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: x.guild.name
                            }),
                            null != x.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: O.NW.format(O.t.zRl6XV, { count: x.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(c.zxk, {
                color: c.Ttl.PRIMARY,
                onClick: () => {
                    h(),
                        r(f.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: x,
                            code: x.code,
                            context: p.IlC.APP
                        });
                },
                children: v ? O.NW.string(O.t.cEnaW1) : O.NW.string(O.t.XpeFYm)
            })
        ]
    });
}

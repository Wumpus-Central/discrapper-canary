(r.d(t, { Z: () => v }), r(388685), r(35282));
var n = r(255367),
    i = r(73800),
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
    x = r(926921);
function v(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: a, closeModal: v } = e,
        [h, j] = i.useState(),
        b = (0, o.e7)([m.Z], () => {
            var e, t;
            return (null == h || null == (e = h.guild) ? void 0 : e.id) != null && m.Z.isMember(null == h || null == (t = h.guild) ? void 0 : t.id);
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
                    if (null != h && h.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (j(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != I && e(I.url);
        }, [I, a, h]),
        null == h || null == h.guild || !h.guild.features.includes(p.oNc.VERIFIED))
    )
        return null;
    let y = g.ZP.getGuildIconURL({
        id: h.guild.id,
        icon: h.guild.icon,
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
                        className: x.guildIcon,
                        src: y,
                        alt: O.intl.formatToPlainString(O.t.xm6W9P, { guildName: h.guild.name })
                    }),
                    (0, n.jsxs)('div', {
                        className: x.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: h.guild.name
                            }),
                            null != h.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: O.intl.format(O.t.zRl6XV, { count: h.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(c.zxk, {
                variant: 'secondary',
                text: b ? O.intl.string(O.t.cEnaW1) : O.intl.string(O.t.XpeFYm),
                onClick: () => {
                    (v(),
                        r(f.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: h,
                            code: h.code,
                            context: p.IlC.APP
                        }));
                }
            })
        ]
    });
}

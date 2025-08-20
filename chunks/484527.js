r.d(t, { Z: () => h }), r(388685), r(35282);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(643872),
    o = r(442837),
    c = r(481060),
    u = r(570140),
    d = r(652898),
    m = r(93093),
    p = r(768581),
    f = r(810568),
    g = r(981631),
    j = r(388032),
    x = r(226788),
    v = r(943987);
function h(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: l, closeModal: h } = e,
        [O, b] = i.useState(),
        y = (0, o.e7)([m.Z], () => {
            var e, t;
            return (
                (null == O || null == (e = O.guild) ? void 0 : e.id) != null &&
                m.Z.isMember(null == O || null == (t = O.guild) ? void 0 : t.id)
            );
        }),
        P = i.useMemo(() => {
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
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != O && O.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (b(e.invite), null != e.invite && (null == l || l(e.invite)));
                }
            };
            null != P && e(P.url);
        }, [P, l, O]),
        null == O || null == O.guild || !O.guild.features.includes(g.oNc.VERIFIED))
    )
        return null;
    let w = p.ZP.getGuildIconURL({
        id: O.guild.id,
        icon: O.guild.icon,
        size: 32,
    });
    return (0, n.jsxs)("div", {
        className: x.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: x.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: j.intl.string(j.t.kBDZSE),
            }),
            (0, n.jsxs)("div", {
                className: a()(x.row, x.gapMd),
                children: [
                    (0, n.jsx)("img", {
                        className: v.guildIcon,
                        src: w,
                        alt: j.intl.formatToPlainString(j.t.xm6W9P, { guildName: O.guild.name }),
                    }),
                    (0, n.jsxs)("div", {
                        className: v.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: O.guild.name,
                            }),
                            null != O.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    children: j.intl.format(j.t.zRl6XV, { count: O.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.zxk, {
                variant: "secondary",
                text: y ? j.intl.string(j.t.cEnaW1) : j.intl.string(j.t.XpeFYm),
                onClick: () => {
                    h(),
                        r(f.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: O,
                            code: O.code,
                            context: g.IlC.APP,
                        });
                },
            }),
        ],
    });
}

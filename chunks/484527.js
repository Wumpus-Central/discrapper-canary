n.d(t, { Z: () => v }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(643872),
    o = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(652898),
    m = n(93093),
    p = n(768581),
    f = n(810568),
    g = n(981631),
    x = n(388032),
    j = n(226788),
    h = n(943987);
function v(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: l, closeModal: v } = e,
        [O, b] = i.useState(),
        y = (0, o.e7)([m.Z], () => {
            var e, t;
            return (
                (null == O || null == (e = O.guild) ? void 0 : e.id) != null &&
                m.Z.isMember(null == O || null == (t = O.guild) ? void 0 : t.id)
            );
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
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != O && O.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (b(e.invite), null != e.invite && (null == l || l(e.invite)));
                }
            };
            null != I && e(I.url);
        }, [I, l, O]),
        null == O || null == O.guild || !O.guild.features.includes(g.oNc.VERIFIED))
    )
        return null;
    let P = p.ZP.getGuildIconURL({
        id: O.guild.id,
        icon: O.guild.icon,
        size: 32,
    });
    return (0, r.jsxs)("div", {
        className: j.column,
        children: [
            (0, r.jsx)(c.X6q, {
                className: j.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: x.intl.string(x.t.kBDZSE),
            }),
            (0, r.jsxs)("div", {
                className: a()(j.row, j.gapMd),
                children: [
                    (0, r.jsx)("img", {
                        className: h.guildIcon,
                        src: P,
                        alt: x.intl.formatToPlainString(x.t.xm6W9P, { guildName: O.guild.name }),
                    }),
                    (0, r.jsxs)("div", {
                        className: h.inviteInfo,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: O.guild.name,
                            }),
                            null != O.approximate_member_count &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    children: x.intl.format(x.t.zRl6XV, { count: O.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(c.zxk, {
                variant: "secondary",
                text: y ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm),
                onClick: () => {
                    v(),
                        n(f.as.JoinOfficialServer),
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

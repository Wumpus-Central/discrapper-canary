r.d(t, { Z: () => j }), r(388685), r(35282);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(643872),
    s = r(442837),
    c = r(481060),
    u = r(570140),
    d = r(652898),
    m = r(93093),
    f = r(768581),
    g = r(810568),
    p = r(981631),
    x = r(388032),
    v = r(226788),
    h = r(943987);
function j(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: j } = e,
        [b, O] = a.useState(),
        y = (0, s.e7)([m.Z], () => {
            var e, t;
            return (
                (null == b || null == (e = b.guild) ? void 0 : e.id) != null &&
                m.Z.isMember(null == b || null == (t = b.guild) ? void 0 : t.id)
            );
        }),
        _ = a.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === o.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (a.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != b && b.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, d.Z)(t);
                    !0 !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != _ && e(_.url);
        }, [_, i, b]),
        null == b || null == b.guild || !b.guild.features.includes(p.oNc.VERIFIED))
    )
        return null;
    let I = f.ZP.getGuildIconURL({
        id: b.guild.id,
        icon: b.guild.icon,
        size: 32,
    });
    return (0, n.jsxs)("div", {
        className: v.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: v.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: x.intl.string(x.t.kBDZSE),
            }),
            (0, n.jsxs)("div", {
                className: l()(v.row, v.gapMd),
                children: [
                    (0, n.jsx)("img", {
                        className: h.guildIcon,
                        src: I,
                        alt: x.intl.formatToPlainString(x.t.xm6W9P, { guildName: b.guild.name }),
                    }),
                    (0, n.jsxs)("div", {
                        className: h.inviteInfo,
                        children: [
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: b.guild.name,
                            }),
                            null != b.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    children: x.intl.format(x.t.zRl6XV, { count: b.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.zxk, {
                variant: "secondary",
                text: y ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm),
                onClick: () => {
                    j(),
                        r(g.as.JoinOfficialServer),
                        u.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: b,
                            code: b.code,
                            context: p.IlC.APP,
                        });
                },
            }),
        ],
    });
}

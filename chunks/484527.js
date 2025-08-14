r.d(t, { Z: () => h }), r(388685), r(35282);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(643872),
    s = r(442837),
    c = r(481060),
    d = r(570140),
    u = r(652898),
    m = r(93093),
    g = r(768581),
    p = r(810568),
    f = r(981631),
    x = r(388032),
    j = r(226788),
    v = r(943987);
function h(e) {
    let { detectedGame: t, trackClick: r, onInviteResolved: i, closeModal: h } = e,
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
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != _ && e(_.url);
        }, [_, i, b]),
        null == b || null == b.guild || !b.guild.features.includes(f.oNc.VERIFIED))
    )
        return null;
    let I = g.ZP.getGuildIconURL({
        id: b.guild.id,
        icon: b.guild.icon,
        size: 32,
    });
    return (0, n.jsxs)("div", {
        className: j.column,
        children: [
            (0, n.jsx)(c.X6q, {
                className: j.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: x.intl.string(x.t.kBDZSE),
            }),
            (0, n.jsxs)("div", {
                className: l()(j.row, j.gapMd),
                children: [
                    (0, n.jsx)("img", {
                        className: v.guildIcon,
                        src: I,
                        alt: x.intl.formatToPlainString(x.t.xm6W9P, { guildName: b.guild.name }),
                    }),
                    (0, n.jsxs)("div", {
                        className: v.inviteInfo,
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
                    h(),
                        r(p.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: b,
                            code: b.code,
                            context: f.IlC.APP,
                        });
                },
            }),
        ],
    });
}

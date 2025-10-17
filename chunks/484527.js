n.d(t, { Z: () => v }), n(388685), n(35282);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(643872),
    o = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    f = n(768581),
    p = n(810568),
    g = n(981631),
    x = n(388032),
    h = n(226788),
    j = n(943987);
function v(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: l, closeModal: v } = e,
        [O, y] = r.useState(),
        I = (0, o.e7)([m.Z], () => {
            var e, t;
            return (
                (null == O || null == (e = O.guild) ? void 0 : e.id) != null &&
                m.Z.isMember(null == O || null == (t = O.guild) ? void 0 : t.id)
            );
        }),
        b = r.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != O && O.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (y(e.invite), null != e.invite && (null == l || l(e.invite)));
                }
            };
            null != b && e(b.url);
        }, [b, l, O]),
        null == O || null == O.guild || !O.guild.features.includes(g.GuildFeatures.VERIFIED))
    )
        return null;
    let E = f.ZP.getGuildIconURL({
        id: O.guild.id,
        icon: O.guild.icon,
        size: 32,
    });
    return (0, i.jsxs)("div", {
        className: h.column,
        children: [
            (0, i.jsx)(c.Heading, {
                className: h.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: x.intl.string(x.t.kBDZSE),
            }),
            (0, i.jsxs)("div", {
                className: a()(h.row, h.gapMd),
                children: [
                    (0, i.jsx)("img", {
                        className: j.guildIcon,
                        src: E,
                        alt: x.intl.formatToPlainString(x.t.xm6W9P, { guildName: O.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.inviteInfo,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: O.guild.name,
                            }),
                            null != O.approximate_member_count &&
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    children: x.intl.format(x.t.zRl6XV, { count: O.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c.Button, {
                variant: "secondary",
                text: I ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm),
                onClick: () => {
                    v(),
                        n(p.as.JoinOfficialServer),
                        d.Z.dispatch({
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

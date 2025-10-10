n.d(t, { Z: () => j }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
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
    x = n(981631),
    g = n(388032),
    h = n(226788),
    v = n(943987);
function j(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: l, closeModal: j } = e,
        [O, y] = i.useState(),
        I = (0, o.e7)([m.Z], () => {
            var e, t;
            return (
                (null == O || null == (e = O.guild) ? void 0 : e.id) != null &&
                m.Z.isMember(null == O || null == (t = O.guild) ? void 0 : t.id)
            );
        }),
        b = i.useMemo(() => {
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
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (y(e.invite), null != e.invite && (null == l || l(e.invite)));
                }
            };
            null != b && e(b.url);
        }, [b, l, O]),
        null == O || null == O.guild || !O.guild.features.includes(x.oNc.VERIFIED))
    )
        return null;
    let E = f.ZP.getGuildIconURL({
        id: O.guild.id,
        icon: O.guild.icon,
        size: 32,
    });
    return (0, r.jsxs)("div", {
        className: h.column,
        children: [
            (0, r.jsx)(c.X6q, {
                className: h.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: g.intl.string(g.t.kBDZSE),
            }),
            (0, r.jsxs)("div", {
                className: a()(h.row, h.gapMd),
                children: [
                    (0, r.jsx)("img", {
                        className: v.guildIcon,
                        src: E,
                        alt: g.intl.formatToPlainString(g.t.xm6W9P, { guildName: O.guild.name }),
                    }),
                    (0, r.jsxs)("div", {
                        className: v.inviteInfo,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: O.guild.name,
                            }),
                            null != O.approximate_member_count &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    children: g.intl.format(g.t.zRl6XV, { count: O.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(c.zxk, {
                variant: "secondary",
                text: I ? g.intl.string(g.t.cEnaW1) : g.intl.string(g.t.XpeFYm),
                onClick: () => {
                    j(),
                        n(p.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: O,
                            code: O.code,
                            context: x.IlC.APP,
                        });
                },
            }),
        ],
    });
}

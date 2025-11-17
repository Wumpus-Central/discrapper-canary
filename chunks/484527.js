n.d(t, { Z: () => O }), n(388685), n(35282);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(643872),
    o = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(372769),
    m = n(652898),
    f = n(93093),
    g = n(768581),
    p = n(810568),
    x = n(981631),
    h = n(388032),
    v = n(226788),
    j = n(943987);
function O(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: r, closeModal: O } = e,
        [y, I] = l.useState(),
        b = (0, o.e7)([f.Z], () => {
            var e, t;
            return (
                (null == y || null == (e = y.guild) ? void 0 : e.id) != null &&
                f.Z.isMember(null == y || null == (t = y.guild) ? void 0 : t.id)
            );
        }),
        E = l.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (l.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.Z)(t);
                    !0 !== e.banned && (I(e.invite), null != e.invite && (null == r || r(e.invite)));
                }
            };
            null != E && e(E.url);
        }, [E, r, y]),
        null == y || null == y.guild || !y.guild.features.includes(x.GuildFeatures.VERIFIED))
    )
        return null;
    let N = g.ZP.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32,
    });
    return (0, i.jsxs)("div", {
        className: v.column,
        children: [
            (0, i.jsx)(c.Heading, {
                className: v.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: h.intl.string(h.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: a()(v.row, v.gapMd),
                children: [
                    (0, i.jsx)("img", {
                        className: j.guildIcon,
                        src: N,
                        alt: h.intl.formatToPlainString(h.t.xm6W9D, { guildName: y.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.inviteInfo,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.guildNameContainer,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: y.guild.name,
                                    }),
                                    (0, i.jsx)(u.Z, {
                                        guild: y.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != y.approximate_member_count &&
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-tertiary",
                                    children: h.intl.format(h.t.zRl6XR, { count: y.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c.Button, {
                variant: "secondary",
                text: b ? h.intl.string(h.t.cEnaWx) : h.intl.string(h.t.XpeFYr),
                onClick: () => {
                    O(),
                        n(p.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: y,
                            code: y.code,
                            context: x.IlC.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}

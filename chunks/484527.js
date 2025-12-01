n.d(t, { Z: () => _ }), n(388685), n(35282);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    s = n(643872),
    o = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(372769),
    m = n(652898),
    g = n(93093),
    f = n(768581),
    p = n(810568),
    x = n(981631),
    h = n(388032),
    v = n(226788),
    j = n(943987);
function _(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: r, closeModal: _ } = e,
        [I, b] = i.useState(),
        y = (0, o.e7)([g.Z], () => {
            var e, t;
            return (
                (null == I || null == (e = I.guild) ? void 0 : e.id) != null &&
                g.Z.isMember(null == I || null == (t = I.guild) ? void 0 : t.id)
            );
        }),
        O = i.useMemo(() => {
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
                    if (null != I && I.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.Z)(t);
                    !0 !== e.banned && (b(e.invite), null != e.invite && (null == r || r(e.invite)));
                }
            };
            null != O && e(O.url);
        }, [O, r, I]),
        null == I || null == I.guild || !I.guild.features.includes(x.GuildFeatures.VERIFIED))
    )
        return null;
    let E = f.ZP.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32,
    });
    return (0, a.jsxs)("div", {
        className: v.column,
        children: [
            (0, a.jsx)(c.Heading, {
                className: v.sectionHeader,
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: h.intl.string(h.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: l()(v.row, v.gapMd),
                children: [
                    (0, a.jsx)("img", {
                        className: j.guildIcon,
                        src: E,
                        alt: h.intl.formatToPlainString(h.t.xm6W9D, { guildName: I.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.inviteInfo,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.guildNameContainer,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: I.guild.name,
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        guild: I.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != I.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-tertiary",
                                    children: h.intl.format(h.t.zRl6XR, { count: I.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.Button, {
                variant: "secondary",
                text: y ? h.intl.string(h.t.cEnaWx) : h.intl.string(h.t.XpeFYr),
                onClick: () => {
                    _(),
                        n(p.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: I,
                            code: I.code,
                            context: x.IlC.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}

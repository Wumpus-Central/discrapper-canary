n.d(t, { Z: () => b }), n(388685), n(35282);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(372769),
    m = n(652898),
    f = n(93093),
    g = n(768581),
    p = n(810568),
    x = n(981631),
    v = n(388032),
    h = n(452379),
    j = n(214636);
function b(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: r, closeModal: b } = e,
        [I, O] = i.useState(),
        y = (0, s.e7)([f.Z], () => {
            var e, t;
            return (
                (null == I || null == (e = I.guild) ? void 0 : e.id) != null &&
                f.Z.isMember(null == I || null == (t = I.guild) ? void 0 : t.id)
            );
        }),
        P = i.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === o.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != I && I.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.Z)(t);
                    !0 !== e.banned && (O(e.invite), null != e.invite && (null == r || r(e.invite)));
                }
            };
            null != P && e(P.url);
        }, [P, r, I]),
        null == I || null == I.guild || !I.guild.features.includes(x.GuildFeatures.VERIFIED))
    )
        return null;
    let w = g.ZP.getGuildIconURL({
        id: I.guild.id,
        icon: I.guild.icon,
        size: 32,
    });
    return (0, a.jsxs)("div", {
        className: h.column,
        children: [
            (0, a.jsx)(c.Heading, {
                className: h.sectionHeader,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: l()(h.row, h.gapMd),
                children: [
                    (0, a.jsx)("img", {
                        className: j.guildIcon,
                        src: w,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: I.guild.name }),
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
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: I.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.Button, {
                variant: "secondary",
                text: y ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: () => {
                    b(),
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

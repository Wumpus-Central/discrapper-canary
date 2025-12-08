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
    g = n(93093),
    f = n(768581),
    p = n(810568),
    x = n(981631),
    v = n(388032),
    h = n(226788),
    j = n(943987);
function b(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: r, closeModal: b } = e,
        [_, y] = i.useState(),
        I = (0, s.e7)([g.Z], () => {
            var e, t;
            return (
                (null == _ || null == (e = _.guild) ? void 0 : e.id) != null &&
                g.Z.isMember(null == _ || null == (t = _.guild) ? void 0 : t.id)
            );
        }),
        O = i.useMemo(() => {
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
                    if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.Z)(t);
                    !0 !== e.banned && (y(e.invite), null != e.invite && (null == r || r(e.invite)));
                }
            };
            null != O && e(O.url);
        }, [O, r, _]),
        null == _ || null == _.guild || !_.guild.features.includes(x.GuildFeatures.VERIFIED))
    )
        return null;
    let P = f.ZP.getGuildIconURL({
        id: _.guild.id,
        icon: _.guild.icon,
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
                        src: P,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: _.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.inviteInfo,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.guildNameContainer,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: _.guild.name,
                                    }),
                                    (0, a.jsx)(u.Z, {
                                        guild: _.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != _.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: _.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.Button, {
                variant: "secondary",
                text: I ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: () => {
                    b(),
                        n(p.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: _,
                            code: _.code,
                            context: x.IlC.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}

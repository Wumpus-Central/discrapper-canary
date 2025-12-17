n.d(t, {
    W: () => S,
    Z: () => I,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(194983),
    o = n(36563),
    s = n(28664),
    l = n(481060),
    c = n(287734),
    u = n(933557),
    d = n(565138),
    f = n(359110),
    p = n(769654),
    _ = n(496675),
    m = n(323038),
    h = n(483517),
    g = n(652853),
    E = n(788858),
    b = n(981631),
    y = n(671955),
    O = n(388032),
    v = n(251806);
let S = 3;
function I(e) {
    let { user: t, guild: n, channel: I, onAction: T, onClose: C } = e,
        { themeType: A } = (0, g.z)(),
        N = (0, m.Z)(I),
        P = (0, u.ZP)(I),
        { canViewChannel: R, canConnect: w } = (0, i.cj)([_.Z], () => ({
            canViewChannel: _.Z.can(b.Plq.VIEW_CHANNEL, I),
            canConnect: I.isPrivate() || _.Z.can(b.Plq.CONNECT, I),
        }));
    if (!R) return null;
    let D = () => {
            let e = (e) => {
                e.stopPropagation(), (0, p.X)(n.id), null == T || T({ action: "OPEN_VOICE_GUILD" }), null == C || C();
            };
            return (0, r.jsx)(s.u, {
                asContainer: !0,
                text: n.name,
                "aria-label": !1,
                children: (0, r.jsx)(d.Z, {
                    guild: n,
                    size: d.Z.Sizes.SMOL,
                    className: v.guildIcon,
                    onClick: e,
                }),
            });
        },
        x = () => {
            if (!w)
                return (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.Z, { children: P }),
                });
            let e = (e) => {
                e.stopPropagation(),
                    c.default.selectVoiceChannel(I.id),
                    (0, f.Kh)(I.id),
                    null == T || T({ action: "OPEN_VOICE_CHANNEL" }),
                    null == C || C();
            };
            return (0, r.jsx)(l.P3F, {
                onClick: e,
                className: v.clickableText,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.Z, { children: P }),
                }),
            });
        },
        L = A !== y.l.MODAL && A !== y.l.MODAL_V2 && A !== y.l.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Z, { className: v.voiceChannelDivider }),
            (0, r.jsxs)("div", {
                className: v.voiceChannel,
                children: [
                    D(),
                    (0, r.jsx)(l.Fbu, {
                        size: "xxs",
                        color: l.TVs.colors.TEXT_SUBTLE,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.voiceChannelText,
                        children: [
                            (0, r.jsx)(E.Z, {
                                channel: I,
                                size: "xxs",
                                color: l.TVs.colors.TEXT_SUBTLE,
                                className: v.voiceIcon,
                            }),
                            x(),
                        ],
                    }),
                    (0, r.jsx)(o.Z, {
                        users: N,
                        guildId: n.id,
                        channelId: I.id,
                        maxUsers: S,
                        size: l.EFr.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: v.voiceChannelOverflowCount,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), null == T || T({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!L || ((e) => e === t.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}

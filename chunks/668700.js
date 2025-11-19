n.d(t, {
    W: () => I,
    Z: () => T,
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
    _ = n(769654),
    p = n(496675),
    h = n(323038),
    m = n(483517),
    g = n(652853),
    E = n(788858),
    b = n(981631),
    y = n(671955),
    O = n(388032),
    v = n(704543);
let I = 3;
function T(e) {
    let { user: t, guild: n, channel: T, onAction: S, onClose: A } = e,
        { themeType: C } = (0, g.z)(),
        N = (0, h.Z)(T),
        R = (0, u.ZP)(T),
        { canViewChannel: P, canConnect: D } = (0, i.cj)([p.Z], () => ({
            canViewChannel: p.Z.can(b.Plq.VIEW_CHANNEL, T),
            canConnect: T.isPrivate() || p.Z.can(b.Plq.CONNECT, T),
        }));
    if (!P) return null;
    let w = () => {
            let e = (e) => {
                e.stopPropagation(), (0, _.X)(n.id), null == S || S({ action: "OPEN_VOICE_GUILD" }), null == A || A();
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
        L = () => {
            if (!D)
                return (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.Z, { children: R }),
                });
            let e = (e) => {
                e.stopPropagation(),
                    c.default.selectVoiceChannel(T.id),
                    (0, f.Kh)(T.id),
                    null == S || S({ action: "OPEN_VOICE_CHANNEL" }),
                    null == A || A();
            };
            return (0, r.jsx)(l.P3F, {
                onClick: e,
                className: v.clickableText,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.Z, { children: R }),
                }),
            });
        },
        x = C !== y.l.MODAL && C !== y.l.MODAL_V2 && C !== y.l.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Z, { className: v.voiceChannelDivider }),
            (0, r.jsxs)("div", {
                className: v.voiceChannel,
                children: [
                    w(),
                    (0, r.jsx)(l.Fbu, {
                        size: "xxs",
                        color: l.TVs.colors.TEXT_SECONDARY,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.voiceChannelText,
                        children: [
                            (0, r.jsx)(E.Z, {
                                channel: T,
                                size: "xxs",
                                color: l.TVs.colors.TEXT_SECONDARY,
                                className: v.voiceIcon,
                            }),
                            L(),
                        ],
                    }),
                    (0, r.jsx)(o.Z, {
                        users: N,
                        guildId: n.id,
                        channelId: T.id,
                        maxUsers: I,
                        size: l.EFr.SIZE_16,
                        overflowCountColor: "text-secondary",
                        overflowCountClassName: v.voiceChannelOverflowCount,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), null == S || S({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!x || ((e) => e === t.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}

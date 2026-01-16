n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(731722),
    o = n(648052),
    s = n(530),
    l = n(420654),
    c = n(116854),
    u = n(271383),
    d = n(246946),
    f = n(654904),
    p = n(671955),
    _ = n(155493);
function h(e) {
    let {
            user: t,
            displayProfile: n,
            guild: h,
            pendingAvatar: m,
            pendingNickname: g,
            pendingGlobalName: E,
            pendingBio: b,
            pendingPronouns: y,
            pendingLegacyUsernameDisabled: O,
            pendingBadges: v,
            pendingDisplayNameStyles: S,
            pendingPrimaryGuildId: I,
            isTryItOut: T,
            hideBioSection: C,
            shouldOpenBadgeTooltip: A,
        } = e,
        N = (0, i.e7)([u.ZP], () => (null == h ? null : u.ZP.getMember(h.id, t.id))),
        P = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation),
        w = null == n ? void 0 : n.getPreviewBio(b),
        R = null != y ? y : null == n ? void 0 : n.pronouns,
        D = (0, f.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: t,
            guildMember: N,
        }),
        x = (0, a.oZ)(I),
        L = () => {
            if (null != N && null !== m && (null != N.avatar || null != m))
                return (0, r.jsx)(c.Z, {
                    user: t,
                    nickname: D,
                });
        };
    return (0, r.jsxs)("div", {
        className: _.body,
        inert: !0,
        children: [
            (0, r.jsx)(s.Z, {
                user: t,
                guildId: null == h ? void 0 : h.id,
                usernameIcon: L(),
                nickname: D,
                pendingDisplayNameStyles: S,
                pronouns: R,
                primaryGuild: x,
                isTryItOut: T,
                tags: (0, r.jsx)(o.Z, {
                    displayProfile: n,
                    themeType: p.l.POPOUT,
                    pendingLegacyUsernameDisabled: O,
                    pendingBadges: v,
                    shouldOpenBadgeTooltip: A,
                }),
            }),
            !C &&
                null != w &&
                "" !== w &&
                (0, r.jsx)(l.Z, {
                    user: t,
                    bio: w,
                    hidePersonalInformation: P,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

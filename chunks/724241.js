n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(648052),
    o = n(530),
    s = n(420654),
    l = n(116854),
    c = n(271383),
    u = n(246946),
    d = n(654904),
    f = n(671955),
    _ = n(116649);
function p(e) {
    let {
            user: t,
            displayProfile: n,
            guild: p,
            pendingAvatar: h,
            pendingNickname: m,
            pendingGlobalName: g,
            pendingBio: E,
            pendingPronouns: b,
            pendingLegacyUsernameDisabled: y,
            pendingBadges: O,
            pendingDisplayNameStyles: v,
            isTryItOut: I,
            hideBioSection: T,
            shouldOpenBadgeTooltip: S,
        } = e,
        A = (0, i.e7)([c.ZP], () => (null == p ? null : c.ZP.getMember(p.id, t.id))),
        C = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        N = null == n ? void 0 : n.getPreviewBio(E),
        R = null != b ? b : null == n ? void 0 : n.pronouns,
        P = (0, d.Ly)({
            pendingNickname: m,
            pendingGlobalName: g,
            user: t,
            guildMember: A,
        }),
        D = () => {
            if (null != A && null !== h && (null != A.avatar || null != h))
                return (0, r.jsx)(l.Z, {
                    user: t,
                    nickname: P,
                });
        };
    return (0, r.jsxs)("div", {
        className: _.body,
        inert: !0,
        children: [
            (0, r.jsx)(o.Z, {
                user: t,
                guildId: null == p ? void 0 : p.id,
                usernameIcon: D(),
                nickname: P,
                pendingDisplayNameStyles: v,
                pronouns: R,
                isTryItOut: I,
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: n,
                    themeType: f.l.POPOUT,
                    pendingLegacyUsernameDisabled: y,
                    pendingBadges: O,
                    shouldOpenBadgeTooltip: S,
                }),
            }),
            !T &&
                null != N &&
                "" !== N &&
                (0, r.jsx)(s.Z, {
                    user: t,
                    bio: N,
                    hidePersonalInformation: C,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

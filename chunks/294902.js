"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(685073),
    a = n(31432),
    o = n(810396),
    l = n(442228),
    u = n(192867),
    c = n(696451),
    d = n(351906),
    _ = n(385612),
    f = n(996988),
    p = n(886308);
function h(e) {
    let {
            user: t,
            displayProfile: n,
            guild: h,
            pendingAvatar: m,
            pendingNickname: E,
            pendingGlobalName: g,
            pendingBio: A,
            pendingPronouns: I,
            pendingLegacyUsernameDisabled: T,
            pendingBadges: S,
            pendingDisplayNameStyles: y,
            pendingPrimaryGuildId: v,
            hideBioSection: N,
            shouldOpenBadgeTooltip: C,
        } = e,
        R = (0, i.bG)([c.Ay], () => (null == h ? null : c.Ay.getMember(h.id, t.id))),
        O = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        b = n?.getPreviewBio(A),
        D = I ?? n?.pronouns,
        L = (0, _.eh)({ pendingNickname: E, pendingGlobalName: g, user: t, guildMember: R }),
        w = (0, s.gS)(v),
        M = () => {
            if (null != R && null !== m && (null != R.avatar || null != m))
                return (0, r.jsx)(u.A, { user: t, nickname: L });
        };
    return (0, r.jsxs)("div", {
        className: p.rf,
        inert: !0,
        children: [
            (0, r.jsx)(o.A, {
                user: t,
                guildId: h?.id,
                usernameIcon: M(),
                nickname: L,
                pendingDisplayNameStyles: y,
                pronouns: D,
                primaryGuild: w,
                tags: (0, r.jsx)(a.A, {
                    displayProfile: n,
                    themeType: f.d.POPOUT,
                    pendingLegacyUsernameDisabled: T,
                    pendingBadges: S,
                    shouldOpenBadgeTooltip: C,
                }),
            }),
            !N &&
                null != b &&
                "" !== b &&
                (0, r.jsx)(l.A, { user: t, bio: b, hidePersonalInformation: O, viewFullBioDisabled: !0 }),
        ],
    });
}

"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(685073),
    s = n(31432),
    o = n(810396),
    l = n(442228),
    u = n(192867),
    c = n(696451),
    d = n(351906),
    _ = n(385612),
    f = n(996988),
    p = n(183959);
function h(e) {
    let {
            user: t,
            displayProfile: n,
            guild: h,
            pendingAvatar: m,
            pendingNickname: g,
            pendingGlobalName: E,
            pendingBio: A,
            pendingPronouns: I,
            pendingLegacyUsernameDisabled: T,
            pendingBadges: y,
            pendingDisplayNameStyles: S,
            pendingPrimaryGuildId: v,
            isTryItOut: C,
            hideBioSection: b,
            shouldOpenBadgeTooltip: N,
        } = e,
        R = (0, i.bG)([c.Ay], () => (null == h ? null : c.Ay.getMember(h.id, t.id))),
        O = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        D = n?.getPreviewBio(A),
        L = I ?? n?.pronouns,
        w = (0, _.eh)({ pendingNickname: g, pendingGlobalName: E, user: t, guildMember: R }),
        x = (0, a.gS)(v),
        P = () => {
            if (null != R && null !== m && (null != R.avatar || null != m))
                return (0, r.jsx)(u.A, { user: t, nickname: w });
        };
    return (0, r.jsxs)("div", {
        className: p.rf,
        inert: !0,
        children: [
            (0, r.jsx)(o.A, {
                user: t,
                guildId: h?.id,
                usernameIcon: P(),
                nickname: w,
                pendingDisplayNameStyles: S,
                pronouns: L,
                primaryGuild: x,
                isTryItOut: C,
                tags: (0, r.jsx)(s.A, {
                    displayProfile: n,
                    themeType: f.d.POPOUT,
                    pendingLegacyUsernameDisabled: T,
                    pendingBadges: y,
                    shouldOpenBadgeTooltip: N,
                }),
            }),
            !b &&
                null != D &&
                "" !== D &&
                (0, r.jsx)(l.A, { user: t, bio: D, hidePersonalInformation: O, viewFullBioDisabled: !0 }),
        ],
    });
}

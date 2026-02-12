"use strict";
n.d(t, { A: () => p });
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
    h = n(183959);
function p(e) {
    let {
            user: t,
            displayProfile: n,
            guild: p,
            pendingAvatar: g,
            pendingNickname: E,
            pendingGlobalName: A,
            pendingBio: I,
            pendingPronouns: T,
            pendingLegacyUsernameDisabled: y,
            pendingBadges: S,
            pendingDisplayNameStyles: v,
            pendingPrimaryGuildId: C,
            hideBioSection: b,
            shouldOpenBadgeTooltip: N,
        } = e,
        R = (0, i.bG)([c.Ay], () => (null == p ? null : c.Ay.getMember(p.id, t.id))),
        O = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        D = n?.getPreviewBio(I),
        L = T ?? n?.pronouns,
        w = (0, _.eh)({ pendingNickname: E, pendingGlobalName: A, user: t, guildMember: R }),
        x = (0, a.gS)(C),
        P = () => {
            if (null != R && null !== g && (null != R.avatar || null != g))
                return (0, r.jsx)(u.A, { user: t, nickname: w });
        };
    return (0, r.jsxs)("div", {
        className: h.rf,
        inert: !0,
        children: [
            (0, r.jsx)(o.A, {
                user: t,
                guildId: p?.id,
                usernameIcon: P(),
                nickname: w,
                pendingDisplayNameStyles: v,
                pronouns: L,
                primaryGuild: x,
                tags: (0, r.jsx)(s.A, {
                    displayProfile: n,
                    themeType: f.d.POPOUT,
                    pendingLegacyUsernameDisabled: y,
                    pendingBadges: S,
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

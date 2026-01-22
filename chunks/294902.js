n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(685073),
    s = n(31432),
    o = n(810396),
    l = n(442228),
    c = n(192867),
    u = n(696451),
    d = n(351906),
    f = n(385612),
    p = n(996988),
    _ = n(183959);

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
            pendingBadges: A,
            pendingDisplayNameStyles: v,
            pendingPrimaryGuildId: S,
            isTryItOut: I,
            hideBioSection: T,
            shouldOpenBadgeTooltip: C,
        } = e,
        N = (0, i.bG)([u.Ay], () => (null == h ? null : u.Ay.getMember(h.id, t.id))),
        R = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        w = null == n ? void 0 : n.getPreviewBio(b),
        P = null != y ? y : null == n ? void 0 : n.pronouns,
        D = (0, f.eh)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: t,
            guildMember: N,
        }),
        x = (0, a.gS)(S),
        L = () => {
            if (null != N && null !== m && (null != N.avatar || null != m))
                return (0, r.jsx)(c.A, {
                    user: t,
                    nickname: D,
                });
        };
    return (0, r.jsxs)("div", {
        className: _.rf,
        inert: !0,
        children: [
            (0, r.jsx)(o.A, {
                user: t,
                guildId: null == h ? void 0 : h.id,
                usernameIcon: L(),
                nickname: D,
                pendingDisplayNameStyles: v,
                pronouns: P,
                primaryGuild: x,
                isTryItOut: I,
                tags: (0, r.jsx)(s.A, {
                    displayProfile: n,
                    themeType: p.d.POPOUT,
                    pendingLegacyUsernameDisabled: O,
                    pendingBadges: A,
                    shouldOpenBadgeTooltip: C,
                }),
            }),
            !T &&
                null != w &&
                "" !== w &&
                (0, r.jsx)(l.A, {
                    user: t,
                    bio: w,
                    hidePersonalInformation: R,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

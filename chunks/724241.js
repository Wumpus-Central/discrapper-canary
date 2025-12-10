n.d(t, { Z: () => _ });
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
    p = n(116649);
function _(e) {
    let {
            user: t,
            displayProfile: n,
            guild: _,
            pendingAvatar: m,
            pendingNickname: h,
            pendingGlobalName: g,
            pendingBio: E,
            pendingPronouns: b,
            pendingLegacyUsernameDisabled: y,
            pendingBadges: O,
            pendingDisplayNameStyles: v,
            isTryItOut: S,
            hideBioSection: I,
            shouldOpenBadgeTooltip: T,
        } = e,
        C = (0, i.e7)([c.ZP], () => (null == _ ? null : c.ZP.getMember(_.id, t.id))),
        A = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        N = null == n ? void 0 : n.getPreviewBio(E),
        P = null != b ? b : null == n ? void 0 : n.pronouns,
        R = (0, d.Ly)({
            pendingNickname: h,
            pendingGlobalName: g,
            user: t,
            guildMember: C,
        }),
        D = () => {
            if (null != C && null !== m && (null != C.avatar || null != m))
                return (0, r.jsx)(l.Z, {
                    user: t,
                    nickname: R,
                });
        };
    return (0, r.jsxs)("div", {
        className: p.body,
        inert: !0,
        children: [
            (0, r.jsx)(o.Z, {
                user: t,
                guildId: null == _ ? void 0 : _.id,
                usernameIcon: D(),
                nickname: R,
                pendingDisplayNameStyles: v,
                pronouns: P,
                isTryItOut: S,
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: n,
                    themeType: f.l.POPOUT,
                    pendingLegacyUsernameDisabled: y,
                    pendingBadges: O,
                    shouldOpenBadgeTooltip: T,
                }),
            }),
            !I &&
                null != N &&
                "" !== N &&
                (0, r.jsx)(s.Z, {
                    user: t,
                    bio: N,
                    hidePersonalInformation: A,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
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
    var t, n;
    let {
            user: p,
            displayProfile: h,
            guild: m,
            pendingAvatar: g,
            pendingNickname: E,
            pendingGlobalName: b,
            pendingBio: y,
            pendingPronouns: O,
            pendingLegacyUsernameDisabled: v,
            pendingBadges: I,
            pendingDisplayNameStyles: T,
            isTryItOutFlow: S,
            hideBioSection: A,
            shouldOpenBadgeTooltip: C,
        } = e,
        N = (0, i.e7)([c.ZP], () => (null == m ? null : c.ZP.getMember(m.id, p.id))),
        R = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        P = null == h || null == (t = h.getPreviewBio(y)) ? void 0 : t.value,
        w = null != O ? O : null == h ? void 0 : h.pronouns,
        D = (0, d.Ly)({
            pendingNickname: E,
            pendingGlobalName: b,
            user: p,
            guildMember: N,
        }),
        x = void 0 !== T ? T : null != (n = null == N ? void 0 : N.displayNameStyles) ? n : p.displayNameStyles,
        L = () => {
            if (null != N && null !== g && (null != N.avatar || null != g))
                return (0, r.jsx)(l.Z, {
                    user: p,
                    nickname: D,
                });
        };
    return (0, r.jsxs)("div", {
        className: _.body,
        inert: !0,
        children: [
            (0, r.jsx)(o.Z, {
                user: p,
                usernameIcon: L(),
                nickname: D,
                displayNameStyles: x,
                pronouns: w,
                isTryItOut: S,
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: h,
                    themeType: f.l.POPOUT,
                    pendingLegacyUsernameDisabled: v,
                    pendingBadges: I,
                    shouldOpenBadgeTooltip: C,
                }),
            }),
            !A &&
                null != P &&
                "" !== P &&
                (0, r.jsx)(s.Z, {
                    user: p,
                    bio: P,
                    hidePersonalInformation: R,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

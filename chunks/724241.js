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
    f = n(228168),
    _ = n(116649);
function p(e) {
    var t;
    let {
            user: n,
            displayProfile: p,
            guild: h,
            pendingAvatar: m,
            pendingNickname: g,
            pendingGlobalName: E,
            pendingBio: b,
            pendingPronouns: y,
            pendingLegacyUsernameDisabled: O,
            pendingBadges: v,
            pendingDisplayNameStyles: I,
            isTryItOutFlow: T,
            hideBioSection: S,
            shouldOpenBadgeTooltip: A,
        } = e,
        N = (0, i.e7)([c.ZP], () => (null == h ? null : c.ZP.getMember(h.id, n.id))),
        C = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        R = null == p || null == (t = p.getPreviewBio(b)) ? void 0 : t.value,
        P = null != y ? y : null == p ? void 0 : p.pronouns,
        w = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: n,
            guildMember: N,
        }),
        D = () => {
            if (null != N && null !== m && (null != N.avatar || null != m))
                return (0, r.jsx)(l.Z, {
                    user: n,
                    nickname: w,
                });
        };
    return (0, r.jsxs)("div", {
        className: _.body,
        inert: !0,
        children: [
            (0, r.jsx)(o.Z, {
                user: n,
                usernameIcon: D(),
                nickname: w,
                displayNameStyles: void 0 !== I ? I : n.displayNameStyles,
                pronouns: P,
                isTryItOut: T,
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: p,
                    themeType: f.lY.POPOUT,
                    pendingLegacyUsernameDisabled: O,
                    pendingBadges: v,
                    shouldOpenBadgeTooltip: A,
                }),
            }),
            !S &&
                null != R &&
                "" !== R &&
                (0, r.jsx)(s.Z, {
                    user: n,
                    bio: R,
                    hidePersonalInformation: C,
                    viewFullBioDisabled: !0,
                }),
        ],
    });
}

n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(648052),
    a = n(530),
    s = n(420654),
    l = n(116854),
    c = n(271383),
    u = n(246946),
    d = n(654904),
    f = n(228168),
    _ = n(200669);
function p(e) {
    var t;
    let { user: n, displayProfile: p, guild: h, pendingAvatar: m, pendingNickname: g, pendingGlobalName: E, pendingBio: b, pendingPronouns: y, pendingLegacyUsernameDisabled: O, pendingBadges: v, isTryItOutFlow: I, hideBioSection: S, shouldOpenBadgeTooltip: T } = e,
        A = (0, i.e7)([c.ZP], () => (null == h ? null : c.ZP.getMember(h.id, n.id))),
        N = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        C = null == p || null == (t = p.getPreviewBio(b)) ? void 0 : t.value,
        R = null != y ? y : null == p ? void 0 : p.pronouns,
        P = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: n,
            guildMember: A
        }),
        w = () => {
            if (null != A && null !== m && (null != A.avatar || null != m))
                return (0, r.jsx)(l.Z, {
                    user: n,
                    nickname: P
                });
        };
    return (0, r.jsxs)('div', {
        inert: '',
        className: _.body,
        children: [
            (0, r.jsx)(a.Z, {
                user: n,
                usernameIcon: w(),
                nickname: P,
                pronouns: R,
                isTryItOut: I,
                tags: (0, r.jsx)(o.Z, {
                    displayProfile: p,
                    themeType: f.lY.POPOUT,
                    pendingLegacyUsernameDisabled: O,
                    pendingBadges: v,
                    shouldOpenBadgeTooltip: T
                })
            }),
            !S &&
                null != C &&
                '' !== C &&
                (0, r.jsx)(s.Z, {
                    user: n,
                    bio: C,
                    hidePersonalInformation: N,
                    viewFullBioDisabled: !0
                })
        ]
    });
}

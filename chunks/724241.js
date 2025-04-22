n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(648052),
    o = n(530),
    s = n(420654),
    l = n(116854),
    c = n(271383),
    u = n(246946),
    d = n(654904),
    f = n(228168),
    _ = n(200669);
function p(e) {
    var t;
    let { user: n, displayProfile: p, guild: h, pendingAvatar: m, pendingNickname: g, pendingGlobalName: E, pendingBio: b, pendingPronouns: y, isTryItOutFlow: v, hideBioSection: O, pendingBadges: I, shouldOpenBadgeTooltip: S } = e,
        T = (0, i.e7)([c.ZP], () => (null == h ? null : c.ZP.getMember(h.id, n.id))),
        A = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        N = null == p || null == (t = p.getPreviewBio(b)) ? void 0 : t.value,
        C = null != y ? y : null == p ? void 0 : p.pronouns,
        R = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: n,
            guildMember: T
        }),
        P = () => {
            if (null != T && null !== m && (null != T.avatar || null != m))
                return (0, r.jsx)(l.Z, {
                    user: n,
                    nickname: R
                });
        };
    return (0, r.jsxs)('div', {
        inert: '',
        className: _.body,
        children: [
            (0, r.jsx)(o.Z, {
                user: n,
                usernameIcon: P(),
                nickname: R,
                pronouns: C,
                isTryItOut: v,
                tags: (0, r.jsx)(a.Z, {
                    displayProfile: p,
                    themeType: f.lY.POPOUT,
                    pendingBadges: I,
                    shouldOpenBadgeTooltip: S
                })
            }),
            !O &&
                null != N &&
                '' !== N &&
                (0, r.jsx)(s.Z, {
                    user: n,
                    bio: N,
                    hidePersonalInformation: A,
                    viewFullBioDisabled: !0
                })
        ]
    });
}

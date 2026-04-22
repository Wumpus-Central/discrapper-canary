a.d(i, { A: () => v });
var r = a(627968);
a(64700);
var n = a(311907),
    l = a(685073),
    s = a(31432),
    t = a(810396),
    d = a(442228),
    o = a(192867),
    u = a(696451),
    c = a(351906),
    m = a(385612),
    g = a(996988),
    p = a(656884);
function v(e) {
    let {
            user: i,
            displayProfile: a,
            guild: v,
            pendingAvatar: h,
            pendingNickname: A,
            pendingGlobalName: y,
            pendingBio: x,
            pendingPronouns: P,
            pendingLegacyUsernameDisabled: f,
            pendingBadges: j,
            pendingDisplayNameStyles: b,
            pendingPrimaryGuildId: C,
            hideBioSection: I,
            shouldOpenBadgeTooltip: w,
        } = e,
        T = (0, n.bG)([u.Ay], () => (null == v ? null : u.Ay.getMember(v.id, i.id))),
        D = (0, n.bG)([c.A], () => c.A.hidePersonalInformation),
        N = a?.getPreviewBio(x),
        k = P ?? a?.pronouns,
        S = (0, m.eh)({ pendingNickname: A, pendingGlobalName: y, user: i, guildMember: T }),
        O = (0, l.gS)(C);
    return (0, r.jsxs)("div", {
        className: p.rf,
        inert: !0,
        children: [
            (0, r.jsx)(t.A, {
                user: i,
                guildId: v?.id,
                usernameIcon: (() => {
                    if (null != T) {
                        if (null !== h && (null != T.avatar || null != h))
                            return (0, r.jsx)(o.A, { user: i, nickname: S });
                    }
                })(),
                nickname: S,
                pendingDisplayNameStyles: b,
                pronouns: k,
                primaryGuild: O,
                tags: (0, r.jsx)(s.A, {
                    displayProfile: a,
                    themeType: g.d.POPOUT,
                    pendingLegacyUsernameDisabled: f,
                    pendingBadges: j,
                    shouldOpenBadgeTooltip: w,
                }),
            }),
            !I &&
                null != N &&
                "" !== N &&
                (0, r.jsx)(d.A, { user: i, bio: N, hidePersonalInformation: D, viewFullBioDisabled: !0 }),
        ],
    });
}

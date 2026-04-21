"use strict";
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(734057),
    o = n(696451),
    l = n(309010),
    u = n(351906),
    c = n(562153),
    d = n(622543),
    _ = n(570287),
    f = n(987112),
    p = n(31432),
    h = n(559506),
    m = n(900179),
    E = n(646986),
    g = n(810396),
    A = n(570314),
    I = n(571077),
    T = n(243166),
    S = n(442228),
    y = n(568704),
    v = n(403369),
    N = n(360563),
    C = n(996988),
    R = n(985018),
    O = n(454555),
    b = n(656884);
function D(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: D,
            guild: L,
            isHoveringOrFocusing: w,
            onOpenProfile: M,
            channelId: P,
            onClose: x,
        } = e,
        k = c.Ay.getName(L?.id, P, t),
        U = (0, i.bG)([d.A], () => d.A.getUserProfile(t.id)?.application),
        G = (0, i.bG)([a.A, l.A], () => a.A.getChannel(l.A.getChannelId())),
        F = (0, i.bG)([o.Ay], () => o.Ay.isMember(L?.id, t.id)),
        V = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        B = (0, _.A)(t.id, L?.id);
    return (0, r.jsxs)(s.HOs, {
        fade: !0,
        className: b.rf,
        children: [
            (0, r.jsx)(h.A, { userId: t.id }),
            (0, r.jsx)(g.A, {
                user: t,
                guildId: L?.id,
                onOpenProfile: M,
                nickname: k,
                pronouns: D?.pronouns,
                tags: (0, r.jsx)(p.A, { displayProfile: D, themeType: C.d.POPOUT, onClose: x }),
                nicknameIcons: V ? null : (0, r.jsx)(T.A, { userId: t.id, isVisible: w, onOpenProfile: M }),
            }),
            (0, r.jsx)(N.A, { user: t, onOpenProfile: (e) => M?.({ tabSection: e }) }),
            B && (0, r.jsx)(y.A, { user: t, onClose: x }),
            (0, r.jsxs)("div", {
                className: O.U,
                children: [
                    (0, r.jsx)(A.A, { user: t, closePopout: x, fullWidth: !0 }),
                    (0, r.jsx)(I.A, { user: t, guildId: L?.id, fullWidth: !0 }),
                ],
            }),
            (0, r.jsx)(S.A, { user: t, bio: D?.bio, hidePersonalInformation: V, onClose: x }),
            (0, r.jsx)(E.A, { user: t, currentUser: n, guildId: L?.id, onOpenUserProfileModal: M, onClose: x }),
            U?.popularApplicationCommandIds != null &&
                null != G &&
                (0, r.jsx)(f.A, {
                    applicationId: U.id,
                    commandIds: U.popularApplicationCommandIds,
                    channel: G,
                    guildId: L?.id,
                    onClick: x,
                }),
            null != L &&
                F &&
                (0, r.jsx)(m.A, {
                    heading: R.intl.string(R.t["LPJmL/"]),
                    children: (0, r.jsx)(v.A, { userId: t.id, guild: L }),
                }),
        ],
    });
}

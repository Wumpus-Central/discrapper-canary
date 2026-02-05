"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(734057),
    o = n(309010),
    l = n(351906),
    u = n(562153),
    c = n(622543),
    d = n(987112),
    _ = n(31432),
    f = n(559506),
    p = n(900179),
    h = n(646986),
    m = n(810396),
    g = n(570314),
    E = n(571077),
    A = n(243166),
    I = n(442228),
    T = n(403369),
    y = n(360563),
    S = n(996988),
    v = n(985018),
    C = n(629338),
    b = n(183959);
function N(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: N,
            guild: R,
            isHoveringOrFocusing: O,
            onOpenProfile: D,
            channelId: L,
            onClose: w,
        } = e,
        x = u.Ay.getName(R?.id, L, t),
        P = (0, i.bG)([c.A], () => c.A.getUserProfile(t.id)?.application),
        M = (0, i.bG)([s.A, o.A], () => s.A.getChannel(o.A.getChannelId())),
        k = (0, i.bG)([l.A], () => l.A.hidePersonalInformation);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: b.rf,
        children: [
            (0, r.jsx)(f.A, { userId: t.id }),
            (0, r.jsx)(m.A, {
                user: t,
                guildId: R?.id,
                onOpenProfile: D,
                nickname: x,
                pronouns: N?.pronouns,
                tags: (0, r.jsx)(_.A, { displayProfile: N, themeType: S.d.POPOUT, onClose: w }),
                nicknameIcons: k ? null : (0, r.jsx)(A.A, { userId: t.id, isVisible: O, onOpenProfile: D }),
            }),
            (0, r.jsx)(y.A, { user: t, onOpenProfile: (e) => D?.({ tabSection: e }) }),
            (0, r.jsxs)("div", {
                className: C.U,
                children: [
                    (0, r.jsx)(g.A, { user: t, closePopout: w, fullWidth: !0 }),
                    (0, r.jsx)(E.A, { user: t, guildId: R?.id, fullWidth: !0 }),
                ],
            }),
            (0, r.jsx)(I.A, { user: t, bio: N?.bio, hidePersonalInformation: k, onClose: w }),
            (0, r.jsx)(h.A, { user: t, currentUser: n, guildId: R?.id, onOpenUserProfileModal: D, onClose: w }),
            P?.popularApplicationCommandIds != null &&
                null != M &&
                (0, r.jsx)(d.A, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: M,
                    guildId: R?.id,
                    onClick: w,
                }),
            null != R &&
                (0, r.jsx)(p.A, {
                    heading: v.intl.string(v.t["LPJmL/"]),
                    children: (0, r.jsx)(T.A, { userId: t.id, guild: R }),
                }),
        ],
    });
}

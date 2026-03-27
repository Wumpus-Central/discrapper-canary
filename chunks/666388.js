"use strict";
n.d(t, { A: () => O });
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
    _ = n(987112),
    f = n(31432),
    p = n(559506),
    h = n(900179),
    m = n(646986),
    E = n(810396),
    g = n(570314),
    A = n(571077),
    I = n(243166),
    T = n(442228),
    S = n(403369),
    y = n(360563),
    v = n(996988),
    N = n(985018),
    C = n(392416),
    R = n(74209);
function O(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: O,
            guild: b,
            isHoveringOrFocusing: D,
            onOpenProfile: L,
            channelId: w,
            onClose: M,
        } = e,
        x = c.Ay.getName(b?.id, w, t),
        P = (0, i.bG)([d.A], () => d.A.getUserProfile(t.id)?.application),
        k = (0, i.bG)([a.A, l.A], () => a.A.getChannel(l.A.getChannelId())),
        U = (0, i.bG)([o.Ay], () => o.Ay.isMember(b?.id, t.id)),
        G = (0, i.bG)([u.A], () => u.A.hidePersonalInformation);
    return (0, r.jsxs)(s.HOs, {
        fade: !0,
        className: R.rf,
        children: [
            (0, r.jsx)(p.A, { userId: t.id }),
            (0, r.jsx)(E.A, {
                user: t,
                guildId: b?.id,
                onOpenProfile: L,
                nickname: x,
                pronouns: O?.pronouns,
                tags: (0, r.jsx)(f.A, { displayProfile: O, themeType: v.d.POPOUT, onClose: M }),
                nicknameIcons: G ? null : (0, r.jsx)(I.A, { userId: t.id, isVisible: D, onOpenProfile: L }),
            }),
            (0, r.jsx)(y.A, { user: t, onOpenProfile: (e) => L?.({ tabSection: e }) }),
            (0, r.jsxs)("div", {
                className: C.U,
                children: [
                    (0, r.jsx)(g.A, { user: t, closePopout: M, fullWidth: !0 }),
                    (0, r.jsx)(A.A, { user: t, guildId: b?.id, fullWidth: !0 }),
                ],
            }),
            (0, r.jsx)(T.A, { user: t, bio: O?.bio, hidePersonalInformation: G, onClose: M }),
            (0, r.jsx)(m.A, { user: t, currentUser: n, guildId: b?.id, onOpenUserProfileModal: L, onClose: M }),
            P?.popularApplicationCommandIds != null &&
                null != k &&
                (0, r.jsx)(_.A, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: k,
                    guildId: b?.id,
                    onClick: M,
                }),
            null != b &&
                U &&
                (0, r.jsx)(h.A, {
                    heading: N.intl.string(N.t["LPJmL/"]),
                    children: (0, r.jsx)(S.A, { userId: t.id, guild: b }),
                }),
        ],
    });
}

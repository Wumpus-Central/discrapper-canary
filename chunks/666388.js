n.d(t, {
    A: () => C,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(734057),
    o = n(309010),
    l = n(351906),
    c = n(562153),
    u = n(622543),
    d = n(987112),
    f = n(31432),
    p = n(559506),
    _ = n(900179),
    h = n(646986),
    m = n(810396),
    g = n(570314),
    E = n(571077),
    b = n(243166),
    y = n(442228),
    O = n(403369),
    A = n(360563),
    v = n(996988),
    S = n(985018),
    I = n(629338),
    T = n(183959);

function C(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: C,
            guild: N,
            isHoveringOrFocusing: R,
            onOpenProfile: w,
            channelId: P,
            onClose: D,
        } = e,
        x = c.Ay.getName(null == N ? void 0 : N.id, P, t),
        L = (0, i.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        j = (0, i.bG)([s.A, o.A], () => s.A.getChannel(o.A.getChannelId())),
        M = (0, i.bG)([l.A], () => l.A.hidePersonalInformation);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: T.rf,
        children: [
            (0, r.jsx)(p.A, {
                userId: t.id,
            }),
            (0, r.jsx)(m.A, {
                user: t,
                guildId: null == N ? void 0 : N.id,
                onOpenProfile: w,
                nickname: x,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(f.A, {
                    displayProfile: C,
                    themeType: v.d.POPOUT,
                    onClose: D,
                }),
                nicknameIcons: M
                    ? null
                    : (0, r.jsx)(b.A, {
                          userId: t.id,
                          isVisible: R,
                          onOpenProfile: w,
                      }),
            }),
            (0, r.jsx)(A.A, {
                user: t,
                onOpenProfile: (e) =>
                    null == w
                        ? void 0
                        : w({
                              tabSection: e,
                          }),
            }),
            (0, r.jsxs)("div", {
                className: I.U,
                children: [
                    (0, r.jsx)(g.A, {
                        user: t,
                        closePopout: D,
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(E.A, {
                        user: t,
                        guildId: null == N ? void 0 : N.id,
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, r.jsx)(y.A, {
                user: t,
                bio: null == C ? void 0 : C.bio,
                hidePersonalInformation: M,
                onClose: D,
            }),
            (0, r.jsx)(h.A, {
                user: t,
                currentUser: n,
                guildId: null == N ? void 0 : N.id,
                onOpenUserProfileModal: w,
                onClose: D,
            }),
            (null == L ? void 0 : L.popularApplicationCommandIds) != null &&
                null != j &&
                (0, r.jsx)(d.A, {
                    applicationId: L.id,
                    commandIds: L.popularApplicationCommandIds,
                    channel: j,
                    guildId: null == N ? void 0 : N.id,
                    onClick: D,
                }),
            null != N &&
                (0, r.jsx)(_.A, {
                    heading: S.intl.string(S.t["LPJmL/"]),
                    children: (0, r.jsx)(O.A, {
                        userId: t.id,
                        guild: N,
                    }),
                }),
        ],
    });
}

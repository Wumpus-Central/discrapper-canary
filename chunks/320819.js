n.d(t, { A: () => x });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(922590),
    o = n(437774),
    l = n(994500),
    c = n(351906),
    u = n(562153),
    d = n(927578),
    f = n(970354),
    p = n(31432),
    _ = n(223330),
    h = n(559506),
    m = n(886891),
    g = n(383448),
    E = n(900179),
    b = n(646986),
    y = n(379654),
    O = n(946356),
    A = n(810396),
    v = n(243166),
    S = n(442228),
    I = n(192867),
    T = n(403369),
    C = n(360563),
    N = n(989461),
    R = n(652215),
    w = n(996988),
    P = n(985018),
    D = n(183959);
function x(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: x,
            guild: L,
            isHoveringOrFocusing: j,
            onOpenProfile: M,
            channelId: k,
            onClose: U,
        } = e,
        G = u.Ay.useName(null == L ? void 0 : L.id, k, t),
        { relationshipType: V, originApplicationId: F } = (0, i.cf)([l.A], () => ({
            relationshipType: l.A.getRelationshipType(t.id),
            originApplicationId: l.A.getOriginApplicationId(t.id),
        })),
        B = (0, s.fi)(t.id),
        H = (0, i.bG)([c.A], () => c.A.hidePersonalInformation),
        { enabled: Y } = (0, f.u)({ location: "UserProfilePopoutBody" }),
        W = t.id === n.id,
        K = (null == x ? void 0 : x.widgets) != null && x.widgets.length > 0,
        z = (0, d.TW)(n);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: D.rf,
        children: [
            (0, r.jsx)(h.A, { userId: t.id }),
            (0, r.jsx)(A.A, {
                user: t,
                guildId: null == L ? void 0 : L.id,
                onOpenProfile: M,
                onClose: U,
                usernameIcon:
                    t.hasAvatarForGuild(null == L ? void 0 : L.id) &&
                    (0, r.jsx)(I.A, {
                        user: t,
                        nickname: G,
                    }),
                nickname: G,
                pronouns: null == x ? void 0 : x.pronouns,
                tags: (0, r.jsx)(p.A, {
                    displayProfile: x,
                    themeType: w.d.POPOUT,
                    onClose: U,
                }),
                nicknameIcons: H
                    ? null
                    : (0, r.jsx)(v.A, {
                          userId: t.id,
                          isVisible: j,
                          onOpenProfile: M,
                      }),
            }),
            V === R.eA$.PENDING_INCOMING &&
                (0, r.jsx)(O.A.Overlay, {
                    children: (0, r.jsx)(m.A, {
                        user: t,
                        guildId: null == L ? void 0 : L.id,
                        channelId: k,
                        applicationId: F,
                    }),
                }),
            B.map((e) =>
                (0, r.jsx)(
                    O.A.Overlay,
                    {
                        children: (0, r.jsx)(m.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: k,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(g.A, { user: t }),
            !W &&
                (0, r.jsx)(C.A, {
                    user: t,
                    onOpenProfile: (e) => (null == M ? void 0 : M({ tabSection: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(O.A.Overlay, {
                      className: D.Nr,
                      children: (0, r.jsx)(E.A, {
                          heading: P.intl.string(P.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.EpV, {
                              size: "xxs",
                              color: a.LU0.colors.TEXT_STRONG,
                          }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(o.T, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(S.A, {
                      user: t,
                      bio: null == x ? void 0 : x.bio,
                      hidePersonalInformation: H,
                      onClose: U,
                  }),
            K &&
                (0, r.jsx)(y.A, {
                    user: t,
                    widgets: null == x ? void 0 : x.widgets,
                    onOpenUserProfileModal: M,
                }),
            W &&
                (0, r.jsx)(_.A, {
                    isPremiumUser: z,
                    onInteraction: U,
                }),
            (0, r.jsx)(b.A, {
                user: t,
                currentUser: n,
                guildId: null == L ? void 0 : L.id,
                onOpenUserProfileModal: M,
                onClose: U,
            }),
            Y &&
                !W &&
                (0, r.jsx)(N.A, {
                    user: t,
                    onOpenProfile: M,
                }),
            null != L &&
                (0, r.jsx)(T.A, {
                    userId: t.id,
                    guild: L,
                }),
        ],
    });
}

n.d(t, {
    A: () => P,
});
var r = n(627968),
    i = n(311907),
    a = n(397927),
    o = n(922590),
    s = n(437774),
    l = n(994500),
    c = n(351906),
    u = n(562153),
    d = n(927578),
    f = n(31432),
    p = n(223330),
    _ = n(559506),
    h = n(886891),
    m = n(383448),
    g = n(900179),
    E = n(646986),
    y = n(379654),
    b = n(946356),
    O = n(810396),
    v = n(243166),
    A = n(442228),
    I = n(192867),
    S = n(403369),
    T = n(360563),
    C = n(652215),
    N = n(996988),
    w = n(985018),
    R = n(183959);

function P(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: P,
            guild: D,
            isHoveringOrFocusing: L,
            onOpenProfile: x,
            channelId: M,
            onClose: j,
        } = e,
        k = u.Ay.useName(null == D ? void 0 : D.id, M, t),
        { relationshipType: U, originApplicationId: G } = (0, i.cf)([l.A], () => ({
            relationshipType: l.A.getRelationshipType(t.id),
            originApplicationId: l.A.getOriginApplicationId(t.id),
        })),
        F = (0, o.fi)(t.id),
        V = (0, i.bG)([c.A], () => c.A.hidePersonalInformation),
        B = t.id === n.id,
        H = (null == P ? void 0 : P.widgets) != null && P.widgets.length > 0,
        Y = (0, d.TW)(n);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: R.rf,
        children: [
            (0, r.jsx)(_.A, {
                userId: t.id,
            }),
            (0, r.jsx)(O.A, {
                user: t,
                guildId: null == D ? void 0 : D.id,
                onOpenProfile: x,
                onClose: j,
                usernameIcon:
                    t.hasAvatarForGuild(null == D ? void 0 : D.id) &&
                    (0, r.jsx)(I.A, {
                        user: t,
                        nickname: k,
                    }),
                nickname: k,
                pronouns: null == P ? void 0 : P.pronouns,
                tags: (0, r.jsx)(f.A, {
                    displayProfile: P,
                    themeType: N.d.POPOUT,
                    onClose: j,
                }),
                nicknameIcons: V
                    ? null
                    : (0, r.jsx)(v.A, {
                          userId: t.id,
                          isVisible: L,
                          onOpenProfile: x,
                      }),
            }),
            U === C.eA$.PENDING_INCOMING &&
                (0, r.jsx)(b.A.Overlay, {
                    children: (0, r.jsx)(h.A, {
                        user: t,
                        guildId: null == D ? void 0 : D.id,
                        channelId: M,
                        applicationId: G,
                    }),
                }),
            F.map((e) =>
                (0, r.jsx)(
                    b.A.Overlay,
                    {
                        children: (0, r.jsx)(h.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: M,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(m.A, {
                user: t,
            }),
            !B &&
                (0, r.jsx)(T.A, {
                    user: t,
                    onOpenProfile: (e) =>
                        null == x
                            ? void 0
                            : x({
                                  tabSection: e,
                              }),
                }),
            t.isProvisional
                ? (0, r.jsx)(b.A.Overlay, {
                      className: R.Nr,
                      children: (0, r.jsx)(g.A, {
                          heading: w.intl.string(w.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.EpV, {
                              size: "xxs",
                              color: a.LU0.colors.TEXT_STRONG,
                          }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(s.T, {
                              userId: t.id,
                          }),
                      }),
                  })
                : (0, r.jsx)(A.A, {
                      user: t,
                      bio: null == P ? void 0 : P.bio,
                      hidePersonalInformation: V,
                      onClose: j,
                  }),
            H &&
                (0, r.jsx)(y.A, {
                    user: t,
                    widgets: null == P ? void 0 : P.widgets,
                    onOpenUserProfileModal: x,
                }),
            B &&
                (0, r.jsx)(p.A, {
                    isPremiumUser: Y,
                    onInteraction: j,
                }),
            (0, r.jsx)(E.A, {
                user: t,
                currentUser: n,
                guildId: null == D ? void 0 : D.id,
                onOpenUserProfileModal: x,
                onClose: j,
            }),
            null != D &&
                (0, r.jsx)(S.A, {
                    userId: t.id,
                    guild: D,
                }),
        ],
    });
}

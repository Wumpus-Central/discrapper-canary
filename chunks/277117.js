n.d(t, { Z: () => w });
var r = n(255367);
n(73800);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    s = n(320582),
    o = n(246016),
    c = n(189156),
    u = n(699516),
    d = n(246946),
    h = n(5192),
    p = n(621853),
    f = n(209698),
    g = n(172351),
    m = n(648052),
    b = n(280885),
    y = n(483424),
    x = n(681837),
    _ = n(78806),
    j = n(91433),
    O = n(900927),
    v = n(944043),
    C = n(678738),
    E = n(638970),
    S = n(502762),
    I = n(530),
    Z = n(827313),
    P = n(228168),
    T = n(981631),
    N = n(388032),
    R = n(267419);
function w(e) {
    let { user: t, currentUser: n, displayProfile: w, channel: A, isHovering: D, onOpenProfile: k } = e,
        { relationshipType: L, originApplicationId: M } = (0, l.cj)([u.Z], () => ({
            relationshipType: u.Z.getRelationshipType(t.id),
            originApplicationId: u.Z.getOriginApplicationId(t.id),
        })),
        U = (0, s.vh)(t.id),
        F = (0, o.Y)({ userId: t.id }),
        H = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation),
        G = (0, l.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        B = (0, f.b)({ location: "UserProfileSidebarBody" });
    return (0, r.jsxs)("div", {
        className: R.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                nickname: h.ZP.getName(null, A.id, t),
                pronouns: null == w ? void 0 : w.pronouns,
                onOpenProfile: k,
                tags: (0, r.jsx)(m.Z, {
                    displayProfile: w,
                    themeType: P.lY.SIDEBAR,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(x.Z, { userId: t.id }),
                        !H &&
                            (0, r.jsx)(Z.Z, {
                                userId: t.id,
                                isHovering: D,
                                onOpenProfile: k,
                            }),
                    ],
                }),
            }),
            L === T.OGo.PENDING_INCOMING &&
                (0, r.jsx)(S.Z.Overlay, {
                    children: (0, r.jsx)(j.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: M,
                    }),
                }),
            U.map((e) =>
                (0, r.jsx)(
                    S.Z.Overlay,
                    {
                        children: (0, r.jsx)(j.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: A.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(v.Z, {
                user: t,
                className: R.card,
            }),
            t.isProvisional &&
                (0, r.jsx)(S.Z.Overlay, {
                    className: R.card,
                    children: (0, r.jsx)(C.Z, {
                        heading: N.intl.string(N.t.Iyka0d),
                        headingIcon: (0, r.jsx)(i.Mgn, {
                            size: "xxs",
                            color: a.Z.colors.HEADER_PRIMARY,
                        }),
                        headingColor: "header-primary",
                        children: (0, r.jsx)(c.n, { userId: t.id }),
                    }),
                }),
            B
                ? (0, r.jsx)(E.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: w,
                      onOpenUserProfileModal: k,
                  })
                : (0, r.jsx)(y.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: w,
                      className: R.card,
                  }),
            (0, r.jsxs)(S.Z.Overlay, {
                className: R.overlay,
                children: [
                    !H &&
                        (null == w ? void 0 : w.bio) != null &&
                        (null == w ? void 0 : w.bio) !== "" &&
                        (0, r.jsx)(C.Z, {
                            heading: N.intl.string(N.t["61W33d"]),
                            headingColor: "header-primary",
                            children: (0, r.jsx)(b.Z, {
                                userBio: w.bio,
                                animateOnHover: !0,
                                isHovering: D,
                                userId: t.id,
                            }),
                        }),
                    (null == G ? void 0 : G.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(g.Z, {
                            applicationId: G.id,
                            commandIds: G.popularApplicationCommandIds,
                            channel: A,
                        }),
                    F.length > 0 &&
                        (0, r.jsx)(C.Z, {
                            heading: N.intl.string(N.t["Uv/eT0"]),
                            headingColor: "header-primary",
                            children: (0, r.jsx)(_.Z, { applicationIds: F }),
                        }),
                    (0, r.jsx)(C.Z, {
                        heading: t.bot ? N.intl.string(N.t["A//N4u"]) : N.intl.string(N.t.a6XYDw),
                        headingColor: "header-primary",
                        children: (0, r.jsx)(O.Z, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

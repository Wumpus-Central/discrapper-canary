n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    s = n(320582),
    o = n(246016),
    c = n(189156),
    d = n(699516),
    u = n(246946),
    p = n(5192),
    h = n(621853),
    f = n(209698),
    g = n(172351),
    m = n(648052),
    b = n(280885),
    _ = n(483424),
    y = n(681837),
    O = n(78806),
    j = n(91433),
    x = n(900927),
    v = n(944043),
    C = n(678738),
    I = n(638970),
    S = n(502762),
    E = n(530),
    Z = n(827313),
    P = n(981631),
    T = n(671955),
    N = n(388032),
    R = n(892273);
function w(e) {
    let { user: t, currentUser: n, displayProfile: w, channel: A, isHoveringOrFocusing: D, onOpenProfile: L } = e,
        { relationshipType: M, originApplicationId: k } = (0, l.cj)([d.Z], () => ({
            relationshipType: d.Z.getRelationshipType(t.id),
            originApplicationId: d.Z.getOriginApplicationId(t.id),
        })),
        U = (0, s.vh)(t.id),
        G = (0, o.Y)({ userId: t.id }),
        H = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        F = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        B = (0, f.b)({ location: "UserProfileSidebarBody" });
    return (0, r.jsxs)("div", {
        className: R.body,
        children: [
            (0, r.jsx)(E.Z, {
                user: t,
                guildId: A.guild_id,
                nickname: p.ZP.getName(null, A.id, t),
                pronouns: null == w ? void 0 : w.pronouns,
                onOpenProfile: L,
                tags: (0, r.jsx)(m.Z, {
                    displayProfile: w,
                    themeType: T.l.SIDEBAR,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(y.Z, { userId: t.id }),
                        !H &&
                            (0, r.jsx)(Z.Z, {
                                userId: t.id,
                                isVisible: D,
                                onOpenProfile: L,
                            }),
                    ],
                }),
            }),
            M === P.OGo.PENDING_INCOMING &&
                (0, r.jsx)(S.Z.Overlay, {
                    children: (0, r.jsx)(j.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: k,
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
                        heading: N.intl.string(N.t.Iyka0U),
                        headingIcon: (0, r.jsx)(i.Mgn, {
                            size: "xxs",
                            color: a.Z.colors.HEADER_PRIMARY,
                        }),
                        headingColor: "header-primary",
                        children: (0, r.jsx)(c.n, { userId: t.id }),
                    }),
                }),
            B
                ? (0, r.jsx)(I.Z, {
                      user: t,
                      currentUser: n,
                      onOpenUserProfileModal: L,
                  })
                : (0, r.jsx)(_.Z, {
                      user: t,
                      currentUser: n,
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
                                userId: t.id,
                                userBio: w.bio,
                                isHoveringOrFocusing: D,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    (null == F ? void 0 : F.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(g.Z, {
                            applicationId: F.id,
                            commandIds: F.popularApplicationCommandIds,
                            channel: A,
                        }),
                    G.length > 0 &&
                        (0, r.jsx)(C.Z, {
                            heading: N.intl.string(N.t["Uv/eTx"]),
                            headingColor: "header-primary",
                            children: (0, r.jsx)(O.Z, { applicationIds: G }),
                        }),
                    (0, r.jsx)(C.Z, {
                        heading: t.bot ? N.intl.string(N.t["A//N4k"]) : N.intl.string(N.t.a6XYD9),
                        headingColor: "header-primary",
                        children: (0, r.jsx)(x.Z, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

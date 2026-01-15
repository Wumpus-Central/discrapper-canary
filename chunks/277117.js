n.d(t, { Z: () => T });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    o = n(320582),
    s = n(246016),
    c = n(189156),
    u = n(699516),
    d = n(246946),
    p = n(5192),
    f = n(621853),
    h = n(172351),
    g = n(648052),
    m = n(280885),
    b = n(407699),
    y = n(78806),
    v = n(91433),
    O = n(900927),
    j = n(944043),
    x = n(678738),
    C = n(638970),
    E = n(502762),
    S = n(530),
    _ = n(827313),
    I = n(981631),
    P = n(671955),
    Z = n(388032),
    N = n(82600);
function T(e) {
    let { user: t, currentUser: n, displayProfile: T, channel: A, isHoveringOrFocusing: w, onOpenProfile: R } = e,
        { relationshipType: D, originApplicationId: M } = (0, l.cj)([u.Z], () => ({
            relationshipType: u.Z.getRelationshipType(t.id),
            originApplicationId: u.Z.getOriginApplicationId(t.id),
        })),
        k = (0, o.vh)(t.id),
        L = (0, s.Y)({ userId: t.id }),
        U = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation),
        G = (0, l.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)("div", {
        className: N.body,
        children: [
            (0, r.jsx)(b.Z, { userId: t.id }),
            (0, r.jsx)(S.Z, {
                user: t,
                guildId: A.guild_id,
                nickname: p.ZP.getName(null, A.id, t),
                pronouns: null == T ? void 0 : T.pronouns,
                onOpenProfile: R,
                tags: (0, r.jsx)(g.Z, {
                    displayProfile: T,
                    themeType: P.l.SIDEBAR,
                }),
                nicknameIcons: U
                    ? null
                    : (0, r.jsx)(_.Z, {
                          userId: t.id,
                          isVisible: w,
                          onOpenProfile: R,
                      }),
            }),
            D === I.OGo.PENDING_INCOMING &&
                (0, r.jsx)(E.Z.Overlay, {
                    children: (0, r.jsx)(v.Z, {
                        user: t,
                        channelId: A.id,
                        applicationId: M,
                    }),
                }),
            k.map((e) =>
                (0, r.jsx)(
                    E.Z.Overlay,
                    {
                        children: (0, r.jsx)(v.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: A.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(j.Z, { user: t }),
            t.isProvisional &&
                (0, r.jsx)(E.Z.Overlay, {
                    children: (0, r.jsx)(x.Z, {
                        heading: Z.intl.string(Z.t.Iyka0U),
                        headingIcon: (0, r.jsx)(i.CircleErrorIcon, {
                            size: "xxs",
                            color: a.Z.colors.TEXT_STRONG,
                        }),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(c.n, { userId: t.id }),
                    }),
                }),
            (0, r.jsx)(C.Z, {
                user: t,
                currentUser: n,
                onOpenUserProfileModal: R,
            }),
            (0, r.jsxs)(E.Z.Overlay, {
                className: N.overlay,
                children: [
                    !U &&
                        (null == T ? void 0 : T.bio) != null &&
                        (null == T ? void 0 : T.bio) !== "" &&
                        (0, r.jsx)(x.Z, {
                            heading: Z.intl.string(Z.t["61W33d"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(m.Z, {
                                userId: t.id,
                                userBio: T.bio,
                                isHoveringOrFocusing: w,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    (null == G ? void 0 : G.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(h.Z, {
                            applicationId: G.id,
                            commandIds: G.popularApplicationCommandIds,
                            channel: A,
                        }),
                    L.length > 0 &&
                        (0, r.jsx)(x.Z, {
                            heading: Z.intl.string(Z.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(y.Z, { applicationIds: L }),
                        }),
                    (0, r.jsx)(x.Z, {
                        heading: t.bot ? Z.intl.string(Z.t["A//N4k"]) : Z.intl.string(Z.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(O.Z, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

n.d(t, { A: () => P });
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(311907),
    a = n(827734),
    s = n(922590),
    o = n(821269),
    c = n(437774),
    u = n(994500),
    d = n(351906),
    f = n(562153),
    p = n(622543),
    h = n(987112),
    b = n(31432),
    g = n(389996),
    m = n(559506),
    A = n(361311),
    y = n(886891),
    O = n(743987),
    j = n(383448),
    v = n(900179),
    x = n(646986),
    E = n(946356),
    _ = n(810396),
    C = n(243166),
    S = n(652215),
    I = n(996988),
    N = n(985018),
    T = n(673721);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, channel: w, isHoveringOrFocusing: R, onOpenProfile: D } = e,
        { relationshipType: M, originApplicationId: L } = (0, i.cf)([u.A], () => ({
            relationshipType: u.A.getRelationshipType(t.id),
            originApplicationId: u.A.getOriginApplicationId(t.id),
        })),
        G = (0, s.fi)(t.id),
        k = (0, o.q)({ userId: t.id }),
        U = (0, i.bG)([d.A], () => d.A.hidePersonalInformation),
        V = (0, i.bG)([p.A], () => {
            var e;
            return null == (e = p.A.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)("div", {
        className: T.rf,
        children: [
            (0, r.jsx)(m.A, { userId: t.id }),
            (0, r.jsx)(_.A, {
                user: t,
                guildId: w.guild_id,
                nickname: f.Ay.getName(null, w.id, t),
                pronouns: null == P ? void 0 : P.pronouns,
                onOpenProfile: D,
                tags: (0, r.jsx)(b.A, {
                    displayProfile: P,
                    themeType: I.d.SIDEBAR,
                }),
                nicknameIcons: U
                    ? null
                    : (0, r.jsx)(C.A, {
                          userId: t.id,
                          isVisible: R,
                          onOpenProfile: D,
                      }),
            }),
            M === S.eA$.PENDING_INCOMING &&
                (0, r.jsx)(E.A.Overlay, {
                    children: (0, r.jsx)(y.A, {
                        user: t,
                        channelId: w.id,
                        applicationId: L,
                    }),
                }),
            G.map((e) =>
                (0, r.jsx)(
                    E.A.Overlay,
                    {
                        children: (0, r.jsx)(y.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: w.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(j.A, { user: t }),
            t.isProvisional &&
                (0, r.jsx)(E.A.Overlay, {
                    children: (0, r.jsx)(v.A, {
                        heading: N.intl.string(N.t.Iyka0U),
                        headingIcon: (0, r.jsx)(l.CircleErrorIcon, {
                            size: "xxs",
                            color: a.A.colors.TEXT_STRONG,
                        }),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(c.T, { userId: t.id }),
                    }),
                }),
            (0, r.jsx)(x.A, {
                user: t,
                currentUser: n,
                onOpenUserProfileModal: D,
            }),
            (0, r.jsxs)(E.A.Overlay, {
                className: T.Lw,
                children: [
                    !U &&
                        (null == P ? void 0 : P.bio) != null &&
                        (null == P ? void 0 : P.bio) !== "" &&
                        (0, r.jsx)(v.A, {
                            heading: N.intl.string(N.t["61W33d"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(g.A, {
                                userId: t.id,
                                userBio: P.bio,
                                isHoveringOrFocusing: R,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    (null == V ? void 0 : V.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(h.A, {
                            applicationId: V.id,
                            commandIds: V.popularApplicationCommandIds,
                            channel: w,
                        }),
                    k.length > 0 &&
                        (0, r.jsx)(v.A, {
                            heading: N.intl.string(N.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(A.A, { applicationIds: k }),
                        }),
                    (0, r.jsx)(v.A, {
                        heading: t.bot ? N.intl.string(N.t["A//N4k"]) : N.intl.string(N.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(O.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var l = n(934551),
    s = n(311907),
    a = n(827734),
    r = n(922590),
    o = n(821269),
    d = n(437774),
    c = n(994500),
    u = n(351906),
    h = n(562153),
    A = n(622543),
    g = n(987112),
    m = n(31432),
    p = n(389996),
    _ = n(559506),
    x = n(361311),
    f = n(886891),
    E = n(743987),
    C = n(383448),
    I = n(900179),
    S = n(646986),
    b = n(946356),
    N = n(810396),
    T = n(243166),
    j = n(652215),
    v = n(996988),
    y = n(985018),
    R = n(673721);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, channel: L, isHoveringOrFocusing: D, onOpenProfile: M } = e,
        { relationshipType: G, originApplicationId: U } = (0, s.cf)([c.A], () => ({
            relationshipType: c.A.getRelationshipType(t.id),
            originApplicationId: c.A.getOriginApplicationId(t.id),
        })),
        P = (0, r.fi)(t.id),
        k = (0, o.q)({ userId: t.id }),
        w = (0, s.bG)([u.A], () => u.A.hidePersonalInformation),
        V = (0, s.bG)([A.A], () => A.A.getUserProfile(t.id)?.application);
    return (0, i.jsxs)("div", {
        className: R.rf,
        children: [
            (0, i.jsx)(_.A, { userId: t.id }),
            (0, i.jsx)(N.A, {
                user: t,
                guildId: L.guild_id,
                nickname: h.Ay.getName(null, L.id, t),
                pronouns: O?.pronouns,
                onOpenProfile: M,
                tags: (0, i.jsx)(m.A, { displayProfile: O, themeType: v.d.SIDEBAR }),
                nicknameIcons: w ? null : (0, i.jsx)(T.A, { userId: t.id, isVisible: D, onOpenProfile: M }),
            }),
            G === j.eA$.PENDING_INCOMING &&
                (0, i.jsx)(b.A.Overlay, { children: (0, i.jsx)(f.A, { user: t, channelId: L.id, applicationId: U }) }),
            P.map((e) =>
                (0, i.jsx)(
                    b.A.Overlay,
                    {
                        children: (0, i.jsx)(f.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: L.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(C.A, { user: t }),
            t.isProvisional &&
                (0, i.jsx)(b.A.Overlay, {
                    children: (0, i.jsx)(I.A, {
                        heading: y.intl.string(y.t.Iyka0U),
                        headingIcon: (0, i.jsx)(l.CircleErrorIcon, { size: "xxs", color: a.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(d.T, { userId: t.id }),
                    }),
                }),
            (0, i.jsx)(S.A, { user: t, currentUser: n, onOpenUserProfileModal: M }),
            (0, i.jsxs)(b.A.Overlay, {
                className: R.Lw,
                children: [
                    !w &&
                        O?.bio != null &&
                        O?.bio !== "" &&
                        (0, i.jsx)(I.A, {
                            heading: y.intl.string(y.t["61W33d"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(p.A, {
                                userId: t.id,
                                userBio: O.bio,
                                isHoveringOrFocusing: D,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    V?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(g.A, {
                            applicationId: V.id,
                            commandIds: V.popularApplicationCommandIds,
                            channel: L,
                        }),
                    k.length > 0 &&
                        (0, i.jsx)(I.A, {
                            heading: y.intl.string(y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(x.A, { applicationIds: k }),
                        }),
                    (0, i.jsx)(I.A, {
                        heading: t.bot ? y.intl.string(y.t["A//N4k"]) : y.intl.string(y.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(E.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

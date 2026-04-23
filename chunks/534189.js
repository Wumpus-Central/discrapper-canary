n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var l = n(695366),
    s = n(311907),
    a = n(827734),
    r = n(922590),
    o = n(821269),
    d = n(437774),
    c = n(994500),
    u = n(351906),
    h = n(562153),
    A = n(622543),
    _ = n(987112),
    m = n(31432),
    g = n(389996),
    p = n(559506),
    f = n(361311),
    E = n(886891),
    x = n(743987),
    I = n(501193),
    C = n(383448),
    b = n(900179),
    N = n(646986),
    S = n(946356),
    v = n(810396),
    T = n(243166),
    y = n(652215),
    j = n(996988),
    R = n(985018),
    L = n(523802);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, channel: G, isHoveringOrFocusing: M, onOpenProfile: D } = e,
        { relationshipType: U, originApplicationId: P } = (0, s.cf)([c.A], () => ({
            relationshipType: c.A.getRelationshipType(t.id),
            originApplicationId: c.A.getOriginApplicationId(t.id),
        })),
        w = (0, r.fi)(t.id),
        k = (0, o.q)({ userId: t.id }),
        V = (0, s.bG)([u.A], () => u.A.hidePersonalInformation),
        B = (0, s.bG)([A.A], () => A.A.getUserProfile(t.id)?.application);
    return (0, i.jsxs)("div", {
        className: L.rf,
        children: [
            (0, i.jsx)(p.A, { userId: t.id }),
            (0, i.jsx)(v.A, {
                user: t,
                guildId: G.guild_id,
                nickname: h.Ay.getName(null, G.id, t),
                pronouns: O?.pronouns,
                onOpenProfile: D,
                tags: (0, i.jsx)(m.A, { displayProfile: O, themeType: j.d.SIDEBAR }),
                nicknameIcons: V ? null : (0, i.jsx)(T.A, { userId: t.id, isVisible: M, onOpenProfile: D }),
            }),
            U === y.eA$.PENDING_INCOMING &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(E.A, { user: t, channelId: G.id, applicationId: P }) }),
            w.map((e) =>
                (0, i.jsx)(
                    S.A.Overlay,
                    {
                        children: (0, i.jsx)(E.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: G.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(C.A, { user: t }),
            O?.private &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(I.A, { username: h.Ay.getName(null, G.id, t) }) }),
            t.isProvisional &&
                (0, i.jsx)(S.A.Overlay, {
                    children: (0, i.jsx)(b.A, {
                        heading: R.intl.string(R.t.Iyka0U),
                        headingIcon: (0, i.jsx)(l.E, { size: "xxs", color: a.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(d.T, { userId: t.id }),
                    }),
                }),
            (0, i.jsx)(N.A, { user: t, currentUser: n, onOpenUserProfileModal: D }),
            (0, i.jsxs)(S.A.Overlay, {
                className: L.Lw,
                children: [
                    !V &&
                        O?.bio != null &&
                        O?.bio !== "" &&
                        (0, i.jsx)(b.A, {
                            heading: R.intl.string(R.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(g.A, {
                                userId: t.id,
                                userBio: O.bio,
                                isHoveringOrFocusing: M,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    B?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(_.A, {
                            applicationId: B.id,
                            commandIds: B.popularApplicationCommandIds,
                            channel: G,
                        }),
                    k.length > 0 &&
                        (0, i.jsx)(b.A, {
                            heading: R.intl.string(R.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(f.A, { applicationIds: k }),
                        }),
                    (0, i.jsx)(b.A, {
                        heading: t.bot ? R.intl.string(R.t["A//N4k"]) : R.intl.string(R.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(x.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

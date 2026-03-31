n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var l = n(934551),
    s = n(311907),
    a = n(827734),
    r = n(922590),
    o = n(821269),
    c = n(437774),
    d = n(994500),
    u = n(351906),
    h = n(562153),
    A = n(622543),
    _ = n(987112),
    m = n(31432),
    g = n(389996),
    p = n(559506),
    f = n(361311),
    x = n(886891),
    E = n(743987),
    I = n(501193),
    C = n(383448),
    N = n(900179),
    T = n(646986),
    S = n(946356),
    b = n(810396),
    y = n(243166),
    v = n(652215),
    j = n(996988),
    R = n(985018),
    O = n(733866);
function L(e) {
    let { user: t, currentUser: n, displayProfile: L, channel: M, isHoveringOrFocusing: D, onOpenProfile: U } = e,
        { relationshipType: G, originApplicationId: P } = (0, s.cf)([d.A], () => ({
            relationshipType: d.A.getRelationshipType(t.id),
            originApplicationId: d.A.getOriginApplicationId(t.id),
        })),
        k = (0, r.fi)(t.id),
        w = (0, o.q)({ userId: t.id }),
        B = (0, s.bG)([u.A], () => u.A.hidePersonalInformation),
        V = (0, s.bG)([A.A], () => A.A.getUserProfile(t.id)?.application);
    return (0, i.jsxs)("div", {
        className: O.rf,
        children: [
            (0, i.jsx)(p.A, { userId: t.id }),
            (0, i.jsx)(b.A, {
                user: t,
                guildId: M.guild_id,
                nickname: h.Ay.getName(null, M.id, t),
                pronouns: L?.pronouns,
                onOpenProfile: U,
                tags: (0, i.jsx)(m.A, { displayProfile: L, themeType: j.d.SIDEBAR }),
                nicknameIcons: B ? null : (0, i.jsx)(y.A, { userId: t.id, isVisible: D, onOpenProfile: U }),
            }),
            G === v.eA$.PENDING_INCOMING &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(x.A, { user: t, channelId: M.id, applicationId: P }) }),
            k.map((e) =>
                (0, i.jsx)(
                    S.A.Overlay,
                    {
                        children: (0, i.jsx)(x.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: M.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(C.A, { user: t }),
            L?.private &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(I.A, { username: h.Ay.getName(null, M.id, t) }) }),
            t.isProvisional &&
                (0, i.jsx)(S.A.Overlay, {
                    children: (0, i.jsx)(N.A, {
                        heading: R.intl.string(R.t.Iyka0U),
                        headingIcon: (0, i.jsx)(l.CircleErrorIcon, { size: "xxs", color: a.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(c.T, { userId: t.id }),
                    }),
                }),
            (0, i.jsx)(T.A, { user: t, currentUser: n, onOpenUserProfileModal: U }),
            (0, i.jsxs)(S.A.Overlay, {
                className: O.Lw,
                children: [
                    !B &&
                        L?.bio != null &&
                        L?.bio !== "" &&
                        (0, i.jsx)(N.A, {
                            heading: R.intl.string(R.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(g.A, {
                                userId: t.id,
                                userBio: L.bio,
                                isHoveringOrFocusing: D,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    V?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(_.A, {
                            applicationId: V.id,
                            commandIds: V.popularApplicationCommandIds,
                            channel: M,
                        }),
                    w.length > 0 &&
                        (0, i.jsx)(N.A, {
                            heading: R.intl.string(R.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(f.A, { applicationIds: w }),
                        }),
                    (0, i.jsx)(N.A, {
                        heading: t.bot ? R.intl.string(R.t["A//N4k"]) : R.intl.string(R.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(E.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

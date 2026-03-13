"use strict";
n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var s = n(934551),
    l = n(311907),
    r = n(827734),
    a = n(922590),
    o = n(821269),
    c = n(437774),
    d = n(994500),
    u = n(351906),
    h = n(562153),
    A = n(622543),
    m = n(987112),
    p = n(31432),
    g = n(389996),
    _ = n(559506),
    f = n(361311),
    x = n(886891),
    C = n(743987),
    E = n(501193),
    I = n(383448),
    N = n(900179),
    b = n(646986),
    S = n(946356),
    T = n(810396),
    v = n(243166),
    y = n(652215),
    j = n(996988),
    R = n(985018),
    O = n(627699);
function L(e) {
    let { user: t, currentUser: n, displayProfile: L, channel: M, isHoveringOrFocusing: D, onOpenProfile: G } = e,
        { relationshipType: U, originApplicationId: P } = (0, l.cf)([d.A], () => ({
            relationshipType: d.A.getRelationshipType(t.id),
            originApplicationId: d.A.getOriginApplicationId(t.id),
        })),
        w = (0, a.fi)(t.id),
        k = (0, o.q)({ userId: t.id }),
        V = (0, l.bG)([u.A], () => u.A.hidePersonalInformation),
        B = (0, l.bG)([A.A], () => A.A.getUserProfile(t.id)?.application);
    return (0, i.jsxs)("div", {
        className: O.rf,
        children: [
            (0, i.jsx)(_.A, { userId: t.id }),
            (0, i.jsx)(T.A, {
                user: t,
                guildId: M.guild_id,
                nickname: h.Ay.getName(null, M.id, t),
                pronouns: L?.pronouns,
                onOpenProfile: G,
                tags: (0, i.jsx)(p.A, { displayProfile: L, themeType: j.d.SIDEBAR }),
                nicknameIcons: V ? null : (0, i.jsx)(v.A, { userId: t.id, isVisible: D, onOpenProfile: G }),
            }),
            U === y.eA$.PENDING_INCOMING &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(x.A, { user: t, channelId: M.id, applicationId: P }) }),
            w.map((e) =>
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
            (0, i.jsx)(I.A, { user: t }),
            L?.private &&
                (0, i.jsx)(S.A.Overlay, { children: (0, i.jsx)(E.A, { username: h.Ay.getName(null, M.id, t) }) }),
            t.isProvisional &&
                (0, i.jsx)(S.A.Overlay, {
                    children: (0, i.jsx)(N.A, {
                        heading: R.intl.string(R.t.Iyka0U),
                        headingIcon: (0, i.jsx)(s.CircleErrorIcon, { size: "xxs", color: r.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(c.T, { userId: t.id }),
                    }),
                }),
            (0, i.jsx)(b.A, { user: t, currentUser: n, onOpenUserProfileModal: G }),
            (0, i.jsxs)(S.A.Overlay, {
                className: O.Lw,
                children: [
                    !V &&
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
                    B?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(m.A, {
                            applicationId: B.id,
                            commandIds: B.popularApplicationCommandIds,
                            channel: M,
                        }),
                    k.length > 0 &&
                        (0, i.jsx)(N.A, {
                            heading: R.intl.string(R.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(f.A, { applicationIds: k }),
                        }),
                    (0, i.jsx)(N.A, {
                        heading: t.bot ? R.intl.string(R.t["A//N4k"]) : R.intl.string(R.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(C.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

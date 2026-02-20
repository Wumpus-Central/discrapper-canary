"use strict";
n.d(t, { A: () => O });
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
    p = n(987112),
    g = n(31432),
    m = n(389996),
    _ = n(559506),
    f = n(361311),
    x = n(886891),
    C = n(743987),
    E = n(383448),
    I = n(900179),
    b = n(646986),
    N = n(946356),
    S = n(810396),
    T = n(243166),
    v = n(652215),
    y = n(996988),
    j = n(985018),
    R = n(673721);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, channel: L, isHoveringOrFocusing: M, onOpenProfile: D } = e,
        { relationshipType: G, originApplicationId: U } = (0, l.cf)([d.A], () => ({
            relationshipType: d.A.getRelationshipType(t.id),
            originApplicationId: d.A.getOriginApplicationId(t.id),
        })),
        P = (0, a.fi)(t.id),
        w = (0, o.q)({ userId: t.id }),
        k = (0, l.bG)([u.A], () => u.A.hidePersonalInformation),
        V = (0, l.bG)([A.A], () => A.A.getUserProfile(t.id)?.application);
    return (0, i.jsxs)("div", {
        className: R.rf,
        children: [
            (0, i.jsx)(_.A, { userId: t.id }),
            (0, i.jsx)(S.A, {
                user: t,
                guildId: L.guild_id,
                nickname: h.Ay.getName(null, L.id, t),
                pronouns: O?.pronouns,
                onOpenProfile: D,
                tags: (0, i.jsx)(g.A, { displayProfile: O, themeType: y.d.SIDEBAR }),
                nicknameIcons: k ? null : (0, i.jsx)(T.A, { userId: t.id, isVisible: M, onOpenProfile: D }),
            }),
            G === v.eA$.PENDING_INCOMING &&
                (0, i.jsx)(N.A.Overlay, { children: (0, i.jsx)(x.A, { user: t, channelId: L.id, applicationId: U }) }),
            P.map((e) =>
                (0, i.jsx)(
                    N.A.Overlay,
                    {
                        children: (0, i.jsx)(x.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: L.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(E.A, { user: t }),
            t.isProvisional &&
                (0, i.jsx)(N.A.Overlay, {
                    children: (0, i.jsx)(I.A, {
                        heading: j.intl.string(j.t.Iyka0U),
                        headingIcon: (0, i.jsx)(s.CircleErrorIcon, { size: "xxs", color: r.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(c.T, { userId: t.id }),
                    }),
                }),
            (0, i.jsx)(b.A, { user: t, currentUser: n, onOpenUserProfileModal: D }),
            (0, i.jsxs)(N.A.Overlay, {
                className: R.Lw,
                children: [
                    !k &&
                        O?.bio != null &&
                        O?.bio !== "" &&
                        (0, i.jsx)(I.A, {
                            heading: j.intl.string(j.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(m.A, {
                                userId: t.id,
                                userBio: O.bio,
                                isHoveringOrFocusing: M,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    V?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(p.A, {
                            applicationId: V.id,
                            commandIds: V.popularApplicationCommandIds,
                            channel: L,
                        }),
                    w.length > 0 &&
                        (0, i.jsx)(I.A, {
                            heading: j.intl.string(j.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(f.A, { applicationIds: w }),
                        }),
                    (0, i.jsx)(I.A, {
                        heading: t.bot ? j.intl.string(j.t["A//N4k"]) : j.intl.string(j.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(C.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}

"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(311907),
    s = n(397927),
    a = n(922590),
    o = n(437774),
    l = n(994500),
    u = n(351906),
    c = n(562153),
    d = n(927578),
    _ = n(570287),
    f = n(31432),
    p = n(223330),
    h = n(559506),
    m = n(886891),
    E = n(501193),
    g = n(383448),
    A = n(900179),
    I = n(646986),
    T = n(379654),
    S = n(946356),
    y = n(810396),
    v = n(243166),
    N = n(442228),
    C = n(568704),
    R = n(192867),
    O = n(403369),
    b = n(360563),
    D = n(652215),
    L = n(996988),
    w = n(985018),
    M = n(656884);
function P(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: P,
            guild: x,
            isHoveringOrFocusing: k,
            onOpenProfile: U,
            channelId: G,
            onClose: F,
        } = e,
        V = c.Ay.useName(x?.id, G, t),
        { relationshipType: B, originApplicationId: H } = (0, i.cf)([l.A], () => ({
            relationshipType: l.A.getRelationshipType(t.id),
            originApplicationId: l.A.getOriginApplicationId(t.id),
        })),
        j = (0, a.fi)(t.id),
        Y = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        W = t.id === n.id,
        K = P?.widgets != null && P.widgets.length > 0,
        $ = (0, d.TW)(n),
        z = (0, _.A)(t.id, x?.id);
    return (0, r.jsxs)(s.HOs, {
        fade: !0,
        className: M.rf,
        children: [
            (0, r.jsx)(h.A, { userId: t.id }),
            (0, r.jsx)(y.A, {
                user: t,
                guildId: x?.id,
                onOpenProfile: U,
                onClose: F,
                usernameIcon: t.hasAvatarForGuild(x?.id) && (0, r.jsx)(R.A, { user: t, nickname: V }),
                nickname: V,
                pronouns: P?.pronouns,
                tags: (0, r.jsx)(f.A, { displayProfile: P, themeType: L.d.POPOUT, onClose: F }),
                nicknameIcons: Y ? null : (0, r.jsx)(v.A, { userId: t.id, isVisible: k, onOpenProfile: U }),
            }),
            B === D.eA$.PENDING_INCOMING &&
                (0, r.jsx)(S.A.Overlay, {
                    children: (0, r.jsx)(m.A, { user: t, guildId: x?.id, channelId: G, applicationId: H }),
                }),
            j.map((e) =>
                (0, r.jsx)(
                    S.A.Overlay,
                    {
                        children: (0, r.jsx)(m.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: G,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(g.A, { user: t }),
            !W && (0, r.jsx)(b.A, { user: t, onOpenProfile: (e) => U?.({ tabSection: e }) }),
            z && (0, r.jsx)(C.A, { user: t, onClose: F }),
            P?.private && (0, r.jsx)(S.A.Overlay, { children: (0, r.jsx)(E.A, { username: V }) }),
            W && (0, r.jsx)(p.A, { isPremiumUser: $, onInteraction: F }),
            t.isProvisional
                ? (0, r.jsx)(S.A.Overlay, {
                      className: M.Nr,
                      children: (0, r.jsx)(A.A, {
                          heading: w.intl.string(w.t.Iyka0U),
                          headingIcon: (0, r.jsx)(s.EpV, { size: "xxs", color: s.LU0.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(o.T, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(N.A, { user: t, bio: P?.bio, hidePersonalInformation: Y, onClose: F }),
            K && (0, r.jsx)(T.A, { user: t, widgets: P?.widgets, onOpenUserProfileModal: U }),
            (0, r.jsx)(I.A, { user: t, currentUser: n, guildId: x?.id, onOpenUserProfileModal: U, onClose: F }),
            null != x && (0, r.jsx)(O.A, { userId: t.id, guild: x }),
        ],
    });
}

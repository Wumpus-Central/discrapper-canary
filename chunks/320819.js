"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(922590),
    o = n(437774),
    l = n(994500),
    u = n(351906),
    c = n(562153),
    d = n(927578),
    _ = n(31432),
    f = n(223330),
    p = n(559506),
    h = n(886891),
    m = n(383448),
    g = n(900179),
    E = n(646986),
    A = n(379654),
    I = n(946356),
    T = n(810396),
    y = n(243166),
    S = n(442228),
    v = n(192867),
    C = n(403369),
    b = n(360563),
    N = n(652215),
    R = n(996988),
    O = n(985018),
    D = n(183959);
function L(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: L,
            guild: w,
            isHoveringOrFocusing: x,
            onOpenProfile: P,
            channelId: M,
            onClose: k,
        } = e,
        U = c.Ay.useName(w?.id, M, t),
        { relationshipType: G, originApplicationId: V } = (0, i.cf)([l.A], () => ({
            relationshipType: l.A.getRelationshipType(t.id),
            originApplicationId: l.A.getOriginApplicationId(t.id),
        })),
        F = (0, s.fi)(t.id),
        B = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        j = t.id === n.id,
        H = L?.widgets != null && L.widgets.length > 0,
        Y = (0, d.TW)(n);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: D.rf,
        children: [
            (0, r.jsx)(p.A, { userId: t.id }),
            (0, r.jsx)(T.A, {
                user: t,
                guildId: w?.id,
                onOpenProfile: P,
                onClose: k,
                usernameIcon: t.hasAvatarForGuild(w?.id) && (0, r.jsx)(v.A, { user: t, nickname: U }),
                nickname: U,
                pronouns: L?.pronouns,
                tags: (0, r.jsx)(_.A, { displayProfile: L, themeType: R.d.POPOUT, onClose: k }),
                nicknameIcons: B ? null : (0, r.jsx)(y.A, { userId: t.id, isVisible: x, onOpenProfile: P }),
            }),
            G === N.eA$.PENDING_INCOMING &&
                (0, r.jsx)(I.A.Overlay, {
                    children: (0, r.jsx)(h.A, { user: t, guildId: w?.id, channelId: M, applicationId: V }),
                }),
            F.map((e) =>
                (0, r.jsx)(
                    I.A.Overlay,
                    {
                        children: (0, r.jsx)(h.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: M,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(m.A, { user: t }),
            !j && (0, r.jsx)(b.A, { user: t, onOpenProfile: (e) => P?.({ tabSection: e }) }),
            t.isProvisional
                ? (0, r.jsx)(I.A.Overlay, {
                      className: D.Nr,
                      children: (0, r.jsx)(g.A, {
                          heading: O.intl.string(O.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.EpV, { size: "xxs", color: a.LU0.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(o.T, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(S.A, { user: t, bio: L?.bio, hidePersonalInformation: B, onClose: k }),
            H && (0, r.jsx)(A.A, { user: t, widgets: L?.widgets, onOpenUserProfileModal: P }),
            j && (0, r.jsx)(f.A, { isPremiumUser: Y, onInteraction: k }),
            (0, r.jsx)(E.A, { user: t, currentUser: n, guildId: w?.id, onOpenUserProfileModal: P, onClose: k }),
            null != w && (0, r.jsx)(C.A, { userId: t.id, guild: w }),
        ],
    });
}

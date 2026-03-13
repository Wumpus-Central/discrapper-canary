"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(311907),
    s = n(397927),
    a = n(922590),
    o = n(437774),
    l = n(994500),
    u = n(351906),
    c = n(562153),
    d = n(927578),
    _ = n(31432),
    f = n(223330),
    p = n(559506),
    h = n(886891),
    m = n(501193),
    E = n(383448),
    g = n(900179),
    A = n(646986),
    I = n(379654),
    T = n(946356),
    S = n(810396),
    y = n(243166),
    v = n(442228),
    N = n(192867),
    C = n(403369),
    R = n(360563),
    O = n(652215),
    b = n(996988),
    D = n(985018),
    L = n(435953);
function w(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: w,
            guild: M,
            isHoveringOrFocusing: x,
            onOpenProfile: P,
            channelId: k,
            onClose: U,
        } = e,
        G = c.Ay.useName(M?.id, k, t),
        { relationshipType: F, originApplicationId: V } = (0, i.cf)([l.A], () => ({
            relationshipType: l.A.getRelationshipType(t.id),
            originApplicationId: l.A.getOriginApplicationId(t.id),
        })),
        B = (0, a.fi)(t.id),
        H = (0, i.bG)([u.A], () => u.A.hidePersonalInformation),
        j = t.id === n.id,
        Y = w?.widgets != null && w.widgets.length > 0,
        W = (0, d.TW)(n);
    return (0, r.jsxs)(s.HOs, {
        fade: !0,
        className: L.rf,
        children: [
            (0, r.jsx)(p.A, { userId: t.id }),
            (0, r.jsx)(S.A, {
                user: t,
                guildId: M?.id,
                onOpenProfile: P,
                onClose: U,
                usernameIcon: t.hasAvatarForGuild(M?.id) && (0, r.jsx)(N.A, { user: t, nickname: G }),
                nickname: G,
                pronouns: w?.pronouns,
                tags: (0, r.jsx)(_.A, { displayProfile: w, themeType: b.d.POPOUT, onClose: U }),
                nicknameIcons: H ? null : (0, r.jsx)(y.A, { userId: t.id, isVisible: x, onOpenProfile: P }),
            }),
            F === O.eA$.PENDING_INCOMING &&
                (0, r.jsx)(T.A.Overlay, {
                    children: (0, r.jsx)(h.A, { user: t, guildId: M?.id, channelId: k, applicationId: V }),
                }),
            B.map((e) =>
                (0, r.jsx)(
                    T.A.Overlay,
                    {
                        children: (0, r.jsx)(h.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: k,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(E.A, { user: t }),
            !j && (0, r.jsx)(R.A, { user: t, onOpenProfile: (e) => P?.({ tabSection: e }) }),
            w?.private && (0, r.jsx)(T.A.Overlay, { children: (0, r.jsx)(m.A, { username: G }) }),
            t.isProvisional
                ? (0, r.jsx)(T.A.Overlay, {
                      className: L.Nr,
                      children: (0, r.jsx)(g.A, {
                          heading: D.intl.string(D.t.Iyka0U),
                          headingIcon: (0, r.jsx)(s.EpV, { size: "xxs", color: s.LU0.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(o.T, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(v.A, { user: t, bio: w?.bio, hidePersonalInformation: H, onClose: U }),
            Y && (0, r.jsx)(I.A, { user: t, widgets: w?.widgets, onOpenUserProfileModal: P }),
            j && (0, r.jsx)(f.A, { isPremiumUser: W, onInteraction: U }),
            (0, r.jsx)(A.A, { user: t, currentUser: n, guildId: M?.id, onOpenUserProfileModal: P, onClose: U }),
            null != M && (0, r.jsx)(C.A, { userId: t.id, guild: M }),
        ],
    });
}

n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(783097),
    l = n(335670),
    c = n(951106),
    u = n(524995),
    d = n(812206),
    f = n(914498),
    p = n(515344),
    _ = n(810568),
    m = n(168524),
    h = n(171516),
    g = n(77498),
    E = n(81063),
    b = n(768581),
    y = n(758371),
    O = n(994339),
    v = n(206074),
    S = n(77603),
    I = n(732067),
    T = n(328886),
    C = n(388032);
function A(e, t) {
    var n;
    let r = (0, h.h)(e),
        i = (0, a.e7)([d.Z, g.Z], () => {
            let t = d.Z.getApplication(e);
            return null != t ? g.Z.getGameByApplication(t) : null;
        }, [e]);
    return {
        openGameProfileModal: (0, m.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != (n = null == i ? void 0 : i.id) ? n : void 0,
            source: _.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: r,
    };
}
function N(e, t) {
    var n, r, i, a;
    let { bot: o } = t,
        s =
            (null == (n = e.activity) ? void 0 : n.icon_override) != null
                ? (0, E.xF)(t.id, null == (r = e.activity) ? void 0 : r.icon_override)
                : null;
    return {
        iconSrc:
            null != s
                ? s
                : b.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function P(e) {
    var t, n;
    let {
            analyticsLocations: a,
            application: d,
            channel: _,
            currentUserId: m,
            currentUserPresenceActivity: h,
            hideParty: g,
            message: E,
            onView: b,
            partyStatusElement: P,
            presenceActivity: R,
        } = e,
        D = (0, s.ye)(d),
        { iconSrc: w, name: x } = N(E, d),
        L =
            null !=
            (n = (0, S.v)({
                messageId: E.id,
                presenceActivity: R,
                application: d,
            }))
                ? n
                : void 0,
        { openGameProfileModal: j, launchableAppId: M } = A(d.id, E.author.id),
        k = (0, v.Z)({
            application: d,
            analyticsLocations: a,
        }),
        U = i.useMemo(() => {
            if (null != k)
                return {
                    label: C.intl.string(C.t["jaYS/h"]),
                    icon: o.v3n,
                    trackingArea: f.j_.CLOUD_PLAY,
                    onClick: k,
                };
        }, [k]),
        G = (0, p.G)(d),
        Z = i.useMemo(() => (null != j ? j : null != G && D ? G : void 0), [D, j, G]),
        B = l.Z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: F, hasAlreadyLinked: V, startAuthorization: H } = (0, u.F)(d),
        Y = (0, c.K)(H, V),
        W = !(0, O.Z)(R, E, d.id),
        K = (0, y.dQ)(x, null == (t = E.activity) ? void 0 : t.type, W);
    return W
        ? (0, r.jsx)(I.Z, {
              message: E,
              application: d,
              applicationName: x,
              channel: _,
              header: K,
              currentUserId: m,
              launchableAppId: M,
              isEmbeddedApplication: D,
              tryWithGdnAction: U,
              staticBannerSrc: L,
              onClickContent: Z,
              iconSrc: w,
              onView: b,
              presenceActivity: R,
              analyticsLocations: a,
              showAuthButton: F && !V && B.enabled,
              startAuthorization: Y,
          })
        : (0, r.jsx)(T.Z, {
              message: E,
              application: d,
              applicationName: x,
              channel: _,
              header: K,
              currentUserId: m,
              launchableAppId: M,
              isEmbeddedApplication: D,
              tryWithGdnAction: U,
              staticBannerSrc: L,
              onClickContent: Z,
              iconSrc: w,
              onView: b,
              presenceActivity: R,
              currentUserPresenceActivity: h,
              hideParty: g,
              partyStatusElement: P,
              analyticsLocations: a,
              showAuthButton: F && !V && B.enabled,
              startAuthorization: Y,
          });
}

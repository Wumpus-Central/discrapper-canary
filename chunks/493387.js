n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(783097),
    l = n(812206),
    c = n(914498),
    u = n(515344),
    d = n(810568),
    f = n(168524),
    p = n(171516),
    _ = n(77498),
    m = n(81063),
    h = n(768581),
    g = n(758371),
    E = n(994339),
    b = n(206074),
    y = n(77603),
    O = n(732067),
    v = n(328886),
    S = n(388032);
function I(e, t) {
    var n;
    let r = (0, p.h)(e),
        i = (0, a.e7)([l.Z, _.Z], () => {
            let t = l.Z.getApplication(e);
            return null != t ? _.Z.getGameByApplication(t) : null;
        }, [e]);
    return {
        openGameProfileModal: (0, f.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != (n = null == i ? void 0 : i.id) ? n : void 0,
            source: d.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: r,
    };
}
function T(e, t) {
    var n, r, i, a;
    let { bot: o } = t,
        s =
            (null == (n = e.activity) ? void 0 : n.icon_override) != null
                ? (0, m.xF)(t.id, null == (r = e.activity) ? void 0 : r.icon_override)
                : null;
    return {
        iconSrc:
            null != s
                ? s
                : h.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function A(e) {
    var t, n;
    let {
            analyticsLocations: a,
            application: l,
            channel: d,
            currentUserId: f,
            currentUserPresenceActivity: p,
            hideParty: _,
            message: m,
            onView: h,
            partyStatusElement: A,
            presenceActivity: C,
        } = e,
        N = (0, s.ye)(l),
        { iconSrc: P, name: R } = T(m, l),
        w =
            null !=
            (n = (0, y.v)({
                messageId: m.id,
                presenceActivity: C,
                application: l,
            }))
                ? n
                : void 0,
        { openGameProfileModal: D, launchableAppId: x } = I(l.id, m.author.id),
        L = (0, b.Z)({
            application: l,
            analyticsLocations: a,
        }),
        j = i.useMemo(() => {
            if (null != L)
                return {
                    label: S.intl.string(S.t["jaYS/h"]),
                    icon: o.v3n,
                    trackingArea: c.j_.CLOUD_PLAY,
                    onClick: L,
                };
        }, [L]),
        M = (0, u.G)(l),
        k = i.useMemo(() => (null != D ? D : null != M && N ? M : void 0), [N, D, M]),
        U = !(0, E.Z)(C, m, l.id),
        G = (0, g.dQ)(R, null == (t = m.activity) ? void 0 : t.type, U);
    return U
        ? (0, r.jsx)(O.Z, {
              message: m,
              application: l,
              applicationName: R,
              channel: d,
              header: G,
              currentUserId: f,
              launchableAppId: x,
              isEmbeddedApplication: N,
              tryWithGdnAction: j,
              staticBannerSrc: w,
              onClickContent: k,
              iconSrc: P,
              onView: h,
              presenceActivity: C,
              analyticsLocations: a,
          })
        : (0, r.jsx)(v.Z, {
              message: m,
              application: l,
              applicationName: R,
              channel: d,
              header: G,
              currentUserId: f,
              launchableAppId: x,
              isEmbeddedApplication: N,
              tryWithGdnAction: j,
              staticBannerSrc: w,
              onClickContent: k,
              iconSrc: P,
              onView: h,
              presenceActivity: C,
              currentUserPresenceActivity: p,
              hideParty: _,
              partyStatusElement: A,
              analyticsLocations: a,
          });
}

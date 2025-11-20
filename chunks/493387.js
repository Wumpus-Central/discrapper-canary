n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(783097),
    s = n(914498),
    l = n(515344),
    c = n(810568),
    u = n(168524),
    d = n(171516),
    f = n(81063),
    _ = n(768581),
    p = n(758371),
    h = n(994339),
    m = n(206074),
    g = n(77603),
    E = n(732067),
    b = n(328886),
    y = n(388032);
function O(e, t) {
    let n = (0, d.h)(e);
    return {
        openGameProfileModal: (0, u.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: c.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function v(e, t) {
    var n, r, i, a;
    let { bot: o } = t,
        s =
            (null == (n = e.activity) ? void 0 : n.icon_override) != null
                ? (0, f.xF)(t.id, null == (r = e.activity) ? void 0 : r.icon_override)
                : null;
    return {
        iconSrc:
            null != s
                ? s
                : _.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function I(e) {
    var t, n;
    let {
            analyticsLocations: c,
            application: u,
            channel: d,
            currentUserId: f,
            currentUserPresenceActivity: _,
            hideParty: I,
            message: T,
            onView: S,
            partyStatusElement: A,
            presenceActivity: C,
        } = e,
        N = (0, o.ye)(u),
        { iconSrc: R, name: P } = v(T, u),
        D =
            null !=
            (n = (0, g.v)({
                messageId: T.id,
                presenceActivity: C,
                application: u,
            }))
                ? n
                : void 0,
        { openGameProfileModal: w, launchableAppId: L } = O(u.id, T.author.id),
        x = (0, m.Z)({
            application: u,
            analyticsLocations: c,
        }),
        M = i.useMemo(() => {
            if (null != x)
                return {
                    label: y.intl.string(y.t["jaYS/h"]),
                    icon: a.v3n,
                    trackingArea: s.j_.CLOUD_PLAY,
                    onClick: x,
                };
        }, [x]),
        k = (0, l.G)(u),
        j = i.useMemo(() => (null != w ? w : null != k && N ? k : void 0), [N, w, k]),
        U = !(0, h.Z)(C, T, u.id),
        G = (0, p.dQ)(P, null == (t = T.activity) ? void 0 : t.type, U);
    return U
        ? (0, r.jsx)(E.Z, {
              message: T,
              application: u,
              applicationName: P,
              channel: d,
              header: G,
              currentUserId: f,
              launchableAppId: L,
              isEmbeddedApplication: N,
              tryWithGdnAction: M,
              staticBannerSrc: D,
              onClickContent: j,
              iconSrc: R,
              onView: S,
              presenceActivity: C,
              analyticsLocations: c,
          })
        : (0, r.jsx)(b.Z, {
              message: T,
              application: u,
              applicationName: P,
              channel: d,
              header: G,
              currentUserId: f,
              launchableAppId: L,
              isEmbeddedApplication: N,
              tryWithGdnAction: M,
              staticBannerSrc: D,
              onClickContent: j,
              iconSrc: R,
              onView: S,
              presenceActivity: C,
              currentUserPresenceActivity: _,
              hideParty: I,
              partyStatusElement: A,
              analyticsLocations: c,
          });
}

n.d(t, { Z: () => S });
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
    p = n(768581),
    _ = n(758371),
    m = n(994339),
    h = n(206074),
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
                : p.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function S(e) {
    var t, n;
    let {
            analyticsLocations: c,
            application: u,
            channel: d,
            currentUserId: f,
            currentUserPresenceActivity: p,
            hideParty: S,
            message: I,
            onView: T,
            partyStatusElement: A,
            presenceActivity: C,
        } = e,
        N = (0, o.ye)(u),
        { iconSrc: P, name: R } = v(I, u),
        w =
            null !=
            (n = (0, g.v)({
                messageId: I.id,
                presenceActivity: C,
                application: u,
            }))
                ? n
                : void 0,
        { openGameProfileModal: D, launchableAppId: x } = O(u.id, I.author.id),
        L = (0, h.Z)({
            application: u,
            analyticsLocations: c,
        }),
        j = i.useMemo(() => {
            if (null != L)
                return {
                    label: y.intl.string(y.t["jaYS/h"]),
                    icon: a.v3n,
                    trackingArea: s.j_.CLOUD_PLAY,
                    onClick: L,
                };
        }, [L]),
        M = (0, l.G)(u),
        k = i.useMemo(() => (null != D ? D : null != M && N ? M : void 0), [N, D, M]),
        U = !(0, m.Z)(C, I, u.id),
        G = (0, _.dQ)(R, null == (t = I.activity) ? void 0 : t.type, U);
    return U
        ? (0, r.jsx)(E.Z, {
              message: I,
              application: u,
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
              onView: T,
              presenceActivity: C,
              analyticsLocations: c,
          })
        : (0, r.jsx)(b.Z, {
              message: I,
              application: u,
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
              onView: T,
              presenceActivity: C,
              currentUserPresenceActivity: p,
              hideParty: S,
              partyStatusElement: A,
              analyticsLocations: c,
          });
}

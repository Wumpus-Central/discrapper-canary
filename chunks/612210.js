var l = n(647193);
function i(e) {
    return "string" == typeof e && l.O.includes(e);
}
function s(e) {
    return "string" == typeof e && "" !== e ? e : null;
}
function r(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
n.d(
    t,
    {},
    {
        s: function (e) {
            var t;
            let n;
            if (!Array.isArray(e.views)) return null;
            let l = new Set(),
                r = e.views.flatMap((e) => {
                    let t = (function (e) {
                        if (null == e || "object" != typeof e) return null;
                        let { id: t, name: n, suggested_surfaces: l } = e;
                        return "string" != typeof t || "" === t || "string" != typeof n
                            ? null
                            : {
                                  id: t,
                                  name: "" === n.trim() ? t : n,
                                  suggestedSurfaces: Array.isArray(l) ? l.filter(i) : [],
                              };
                    })(e);
                    return null == t || l.has(t.id) ? [] : (l.add(t.id), [t]);
                }),
                u = Array.isArray(e.missing_views) ? e.missing_views.filter((e) => "string" == typeof e) : [];
            return 0 === r.length && 0 === u.length
                ? null
                : {
                      views: r,
                      mounts: {
                          activity: s((n = null != (t = e.view_mounts) && "object" == typeof t ? t : {}).activity),
                          voiceChannel: s(n.voice_channel),
                          appChannels: Array.isArray(n.app_channels)
                              ? n.app_channels.flatMap(
                                    (e) =>
                                        (function (e) {
                                            if (null == e || "object" != typeof e) return null;
                                            let { id: t, name: n, view: l } = e;
                                            return "string" == typeof t && "string" == typeof n && "string" == typeof l
                                                ? { id: t, name: n, view: l }
                                                : null;
                                        })(e) ?? [],
                                )
                              : [],
                      },
                      placed: !0 === e.view_mounts_placed,
                      missingViews: u,
                  };
        },
        t: function (e, t) {
            return null == e || null == t
                ? e === t
                : e.placed === t.placed &&
                      r(e.missingViews, t.missingViews) &&
                      e.views.length === t.views.length &&
                      e.views.every(
                          (e, n) =>
                              e.id === t.views[n].id &&
                              e.name === t.views[n].name &&
                              r(e.suggestedSurfaces, t.views[n].suggestedSurfaces),
                      ) &&
                      e.mounts.activity === t.mounts.activity &&
                      e.mounts.voiceChannel === t.mounts.voiceChannel &&
                      e.mounts.appChannels.length === t.mounts.appChannels.length &&
                      e.mounts.appChannels.every(
                          (e, n) =>
                              e.id === t.mounts.appChannels[n].id &&
                              e.name === t.mounts.appChannels[n].name &&
                              e.view === t.mounts.appChannels[n].view,
                      );
        },
    },
);

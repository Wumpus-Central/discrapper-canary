t.d(n, {
    S: () => v,
    Z: () => C,
});
var a = t(54381),
    o = t(473749),
    r = t(442837),
    c = t(481060),
    i = t(110924),
    l = t(812206),
    d = t(554370),
    u = t(788983),
    s = t(317381),
    b = t(426419),
    f = t(16609),
    p = t(781780),
    m = t(325749),
    h = t(981631),
    _ = t(350325);
function v(e) {
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: s } = e,
        f = o.useRef(null),
        p = (0, i.Z)(n);
    o.useEffect(() => {
        null != n
            ? clearTimeout(f.current)
            : null != p &&
              null == n &&
              (f.current = window.setTimeout(() => {
                  (0, u.close)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [p, n]);
    let m = (0, r.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
        }),
        v = (0, b.P)();
    return (0, a.jsx)("div", {
        className: _.container,
        children:
            null == n || null == m
                ? (0, a.jsx)(c.$jN, { className: _.iframe })
                : (0, a.jsx)("div", {
                      className: _.loadedContentContainer,
                      children: (0, a.jsxs)("div", {
                          className: _.iframeAndHeaderContainer,
                          children: [
                              (0, a.jsx)("div", {
                                  className: _.headerContainer,
                                  children: t({ application: m }),
                              }),
                              (0, a.jsx)("div", {
                                  className: _.iframeContainer,
                                  children: s({ application: m }),
                              }),
                              v ? (0, a.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null,
                          ],
                      }),
                  }),
    });
}
function C() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
        } = (0, r.cj)([s.ZP], () => {
            let e = s.ZP.getCurrentEmbeddedActivity(),
                n = (0, f.p)(null == e ? void 0 : e.location),
                t = (0, f.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t,
            };
        }),
        c = o.useCallback(
            (e) => {
                let { application: t } = e;
                return (0, a.jsx)(m.Z, {
                    applicationId: t.id,
                    channelId: n,
                });
            },
            [n],
        ),
        i = o.useCallback(
            (o) => {
                let { application: r } = o,
                    c = {};
                if (null != e) {
                    var i, l, d;
                    (c.instance_id = null != (d = null != (l = e.compositeInstanceId) ? l : e.launchId) ? d : ""),
                        (c.location_id = null == (i = e.location) ? void 0 : i.id),
                        (c.launch_id = e.launchId),
                        (c.referrer_id = e.referrerId),
                        (c.custom_id = e.customId),
                        null != t && "" !== t && (c.guild_id = t),
                        null != n && "" !== n && (c.channel_id = n);
                }
                let u = null == e ? void 0 : e.url;
                return (0, a.jsx)(p.Z, {
                    application: r,
                    queryParams: c,
                    url: u,
                });
            },
            [n, t, e],
        );
    return (0, a.jsx)(v, {
        activity: e,
        renderHeader: c,
        renderActivityIFrameWithLoadedData: i,
    });
}

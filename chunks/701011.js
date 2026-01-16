t.d(n, {
    S: () => v,
    Z: () => C,
});
var a = t(54381),
    o = t(473749),
    i = t(442837),
    r = t(481060),
    c = t(110924),
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
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: s, isLoading: f = !1 } = e,
        p = o.useRef(null),
        m = (0, c.Z)(n);
    o.useEffect(() => {
        null != n
            ? clearTimeout(p.current)
            : null != m &&
              null == n &&
              (p.current = window.setTimeout(() => {
                  (0, u.close)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [m, n]);
    let v = (0, i.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
        }),
        C = (0, b.P)();
    return (0, a.jsx)("div", {
        className: _.container,
        children:
            null == n || null == v || f
                ? (0, a.jsx)(r.$jN, { className: _.iframe })
                : (0, a.jsx)("div", {
                      className: _.loadedContentContainer,
                      children: (0, a.jsxs)("div", {
                          className: _.iframeAndHeaderContainer,
                          children: [
                              (0, a.jsx)("div", {
                                  className: _.headerContainer,
                                  children: t({ application: v }),
                              }),
                              (0, a.jsx)("div", {
                                  className: _.iframeContainer,
                                  children: s({ application: v }),
                              }),
                              C ? (0, a.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null,
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
        } = (0, i.cj)([s.ZP], () => {
            let e = s.ZP.getCurrentEmbeddedActivity(),
                n = (0, f.p)(null == e ? void 0 : e.location),
                t = (0, f.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t,
            };
        }),
        r = (0, i.e7)(
            [s.ZP],
            () => (null == e ? void 0 : e.applicationId) != null && s.ZP.isProxyTicketRefreshing(e.applicationId),
            [e],
        ),
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
        l = o.useCallback(
            (o) => {
                let { application: i } = o,
                    r = {};
                if (null != e) {
                    var c, l, d;
                    (r.instance_id = null != (d = null != (l = e.compositeInstanceId) ? l : e.launchId) ? d : ""),
                        (r.location_id = null == (c = e.location) ? void 0 : c.id),
                        (r.launch_id = e.launchId),
                        (r.referrer_id = e.referrerId),
                        (r.custom_id = e.customId),
                        null != t && "" !== t && (r.guild_id = t),
                        null != n && "" !== n && (r.channel_id = n);
                }
                let u = null == e ? void 0 : e.url;
                return (0, a.jsx)(p.Z, {
                    application: i,
                    queryParams: r,
                    url: u,
                });
            },
            [n, t, e],
        );
    return (0, a.jsx)(v, {
        activity: e,
        isLoading: r,
        renderHeader: c,
        renderActivityIFrameWithLoadedData: l,
    });
}

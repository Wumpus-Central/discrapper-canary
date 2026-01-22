a.d(t, {
    A: () => v,
    E: () => A,
});
var c = a(627968),
    n = a(64700),
    l = a(311907),
    d = a(397927),
    r = a(475743),
    o = a(587895),
    i = a(200042),
    f = a(574172),
    b = a(933958),
    s = a(57220),
    u = a(969151),
    p = a(833147),
    _ = a(780376),
    m = a(652215),
    x = a(405429);

function A(e) {
    let { activity: t, renderHeader: a, renderActivityIFrameWithLoadedData: b, isLoading: u = !1 } = e,
        p = n.useRef(null),
        _ = (0, r.A)(t);
    n.useEffect(() => {
        null != t
            ? clearTimeout(p.current)
            : null != _ &&
              null == t &&
              (p.current = window.setTimeout(() => {
                  (0, f.close)(m.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [_, t]);
    let A = (0, l.bG)([o.A], () => {
            let e = null == t ? void 0 : t.applicationId;
            return null == e ? void 0 : o.A.getApplication(e);
        }),
        v = (0, s.V)();
    return (0, c.jsx)("div", {
        className: x.kL,
        children:
            null == t || null == A || u
                ? (0, c.jsx)(d.y$y, {
                      className: x.pU,
                  })
                : (0, c.jsx)("div", {
                      className: x.U$,
                      children: (0, c.jsxs)("div", {
                          className: x.kq,
                          children: [
                              (0, c.jsx)("div", {
                                  className: x.N1,
                                  children: a({
                                      application: A,
                                  }),
                              }),
                              (0, c.jsx)("div", {
                                  className: x.Wc,
                                  children: b({
                                      application: A,
                                  }),
                              }),
                              v
                                  ? (0, c.jsx)(i.A, {
                                        isEmbeddedActivity: !0,
                                    })
                                  : null,
                          ],
                      }),
                  }),
    });
}

function v() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: a,
        } = (0, l.cf)([b.Ay], () => {
            let e = b.Ay.getCurrentEmbeddedActivity(),
                t = (0, u.H)(null == e ? void 0 : e.location),
                a = (0, u.D)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: a,
            };
        }),
        d = (0, l.bG)(
            [b.Ay],
            () => (null == e ? void 0 : e.applicationId) != null && b.Ay.isProxyTicketRefreshing(e.applicationId),
            [e],
        ),
        r = n.useCallback(
            (e) => {
                let { application: a } = e;
                return (0, c.jsx)(_.A, {
                    applicationId: a.id,
                    channelId: t,
                });
            },
            [t],
        ),
        o = n.useCallback(
            (n) => {
                let { application: l } = n,
                    d = {};
                if (null != e) {
                    var r, o, i;
                    (d.instance_id = null != (r = null != (o = e.compositeInstanceId) ? o : e.launchId) ? r : ""),
                        (d.location_id = null == (i = e.location) ? void 0 : i.id),
                        (d.launch_id = e.launchId),
                        (d.referrer_id = e.referrerId),
                        (d.custom_id = e.customId),
                        null != a && "" !== a && (d.guild_id = a),
                        null != t && "" !== t && (d.channel_id = t);
                }
                let f = null == e ? void 0 : e.url;
                return (0, c.jsx)(p.A, {
                    application: l,
                    queryParams: d,
                    url: f,
                });
            },
            [t, a, e],
        );
    return (0, c.jsx)(A, {
        activity: e,
        isLoading: d,
        renderHeader: r,
        renderActivityIFrameWithLoadedData: o,
    });
}

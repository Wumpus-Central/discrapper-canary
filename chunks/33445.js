n.d(t, { A: () => v, E: () => h });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    r = n(475743),
    s = n(587895),
    c = n(200042),
    d = n(574172),
    u = n(933958),
    p = n(57220),
    A = n(969151),
    m = n(833147),
    x = n(780376),
    f = n(652215),
    I = n(405429);
function h(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: u, isLoading: A = !1 } = e,
        m = i.useRef(null),
        x = (0, r.A)(t);
    i.useEffect(() => {
        null != t
            ? clearTimeout(m.current)
            : null != x &&
              null == t &&
              (m.current = window.setTimeout(() => {
                  (0, d.close)(f.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [x, t]);
    let h = (0, a.bG)([s.A], () => {
            let e = t?.applicationId;
            return null == e ? void 0 : s.A.getApplication(e);
        }),
        v = (0, p.V)();
    return (0, l.jsx)("div", {
        className: I.kL,
        children:
            null == t || null == h || A
                ? (0, l.jsx)(o.y$y, { className: I.pU })
                : (0, l.jsx)("div", {
                      className: I.U$,
                      children: (0, l.jsxs)("div", {
                          className: I.kq,
                          children: [
                              (0, l.jsx)("div", { className: I.N1, children: n({ application: h }) }),
                              (0, l.jsx)("div", { className: I.Wc, children: u({ application: h }) }),
                              v ? (0, l.jsx)(c.A, { isEmbeddedActivity: !0 }) : null,
                          ],
                      }),
                  }),
    });
}
function v() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n,
        } = (0, a.cf)([u.Ay], () => {
            let e = u.Ay.getCurrentEmbeddedActivity(),
                t = (0, A.H)(e?.location),
                n = (0, A.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        o = (0, a.bG)([u.Ay], () => e?.applicationId != null && u.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        r = i.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, l.jsx)(x.A, { applicationId: n.id, channelId: t });
            },
            [t],
        ),
        s = i.useCallback(
            (i) => {
                let { application: a } = i,
                    o = {};
                null != e &&
                    ((o.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (o.location_id = e.location?.id),
                    (o.launch_id = e.launchId),
                    (o.referrer_id = e.referrerId),
                    (o.custom_id = e.customId),
                    null != n && "" !== n && (o.guild_id = n),
                    null != t && "" !== t && (o.channel_id = t));
                let r = e?.url;
                return (0, l.jsx)(m.A, { application: a, queryParams: o, url: r });
            },
            [t, n, e],
        );
    return (0, l.jsx)(h, { activity: e, isLoading: o, renderHeader: r, renderActivityIFrameWithLoadedData: s });
}

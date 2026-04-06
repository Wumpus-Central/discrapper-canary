n.d(t, { A: () => C, E: () => f });
var a = n(627968),
    i = n(64700),
    o = n(311907),
    r = n(397927),
    l = n(475743),
    c = n(587895),
    _ = n(200042),
    s = n(574172),
    d = n(473553),
    u = n(933958),
    p = n(57220),
    m = n(969151),
    b = n(833147),
    A = n(780376),
    x = n(652215),
    h = n(823226);
function f(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: u, isLoading: m = !1 } = e,
        b = i.useRef(null),
        A = (0, l.A)(t);
    i.useEffect(() => {
        null != t
            ? clearTimeout(b.current)
            : null != A &&
              null == t &&
              (b.current = window.setTimeout(() => {
                  (0, s.close)(x.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, t]);
    let f = (0, o.bG)([c.A], () => {
            let e = t?.applicationId;
            return null == e ? void 0 : c.A.getApplication(e);
        }),
        C = (0, p.V)();
    return (0, a.jsx)("div", {
        className: h.kL,
        children:
            null == t || null == f || m
                ? (0, a.jsx)(r.y$y, { className: h.pU })
                : (0, a.jsx)("div", {
                      className: h.U$,
                      children: (0, a.jsxs)("div", {
                          className: h.kq,
                          children: [
                              (0, a.jsx)("div", { className: h.N1, children: n({ application: f }) }),
                              (0, a.jsx)(d.A, { applicationId: f.id }),
                              (0, a.jsx)("div", { className: h.Wc, children: u({ application: f }) }),
                              C ? (0, a.jsx)(_.A, { isEmbeddedActivity: !0 }) : null,
                          ],
                      }),
                  }),
    });
}
function C() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n,
        } = (0, o.cf)([u.Ay], () => {
            let e = u.Ay.getCurrentEmbeddedActivity(),
                t = (0, m.H)(e?.location),
                n = (0, m.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        r = (0, o.bG)([u.Ay], () => e?.applicationId != null && u.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        l = i.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, a.jsx)(A.A, { applicationId: n.id, channelId: t });
            },
            [t],
        ),
        c = i.useCallback(
            (i) => {
                let { application: o } = i,
                    r = {};
                null != e &&
                    ((r.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (r.location_id = e.location?.id),
                    (r.launch_id = e.launchId),
                    (r.referrer_id = e.referrerId),
                    (r.custom_id = e.customId),
                    null != n && "" !== n && (r.guild_id = n),
                    null != t && "" !== t && (r.channel_id = t));
                let l = e?.url;
                return (0, a.jsx)(b.A, { application: o, queryParams: r, url: l });
            },
            [t, n, e],
        );
    return (0, a.jsx)(f, { activity: e, isLoading: r, renderHeader: l, renderActivityIFrameWithLoadedData: c });
}

n.d(t, { A: () => f, E: () => v });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(289873),
    o = n(475743),
    s = n(587895),
    c = n(574172),
    d = n(473553),
    u = n(933958),
    p = n(969151),
    A = n(833147),
    m = n(780376),
    h = n(652215),
    x = n(376554);
function v(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: u, isLoading: p = !1 } = e,
        A = i.useRef(null),
        m = (0, o.A)(t);
    i.useEffect(() => {
        null != t
            ? clearTimeout(A.current)
            : null != m &&
              null == t &&
              (A.current = window.setTimeout(() => {
                  (0, c.close)(h.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [m, t]);
    let v = (0, a.bG)([s.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : s.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: x.kL,
        children:
            null == t || null == v || p
                ? (0, l.jsx)(r.y, { className: x.pU })
                : (0, l.jsx)("div", {
                      className: x.U$,
                      children: (0, l.jsxs)("div", {
                          className: x.kq,
                          children: [
                              (0, l.jsx)("div", { className: x.N1, children: n({ application: v }) }),
                              (0, l.jsx)(d.A, { applicationId: v.id }),
                              (0, l.jsx)("div", { className: x.Wc, children: u({ application: v }) }),
                          ],
                      }),
                  }),
    });
}
function f() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n,
        } = (0, a.cf)([u.Ay], () => {
            let e = u.Ay.getCurrentEmbeddedActivity(),
                t = (0, p.H)(e?.location),
                n = (0, p.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        r = (0, a.bG)([u.Ay], () => e?.applicationId != null && u.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        o = i.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, l.jsx)(m.A, { applicationId: n.id, channelId: t });
            },
            [t],
        ),
        s = i.useCallback(
            (i) => {
                let { application: a } = i,
                    r = {};
                null != e &&
                    ((r.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (r.location_id = e.location?.id),
                    (r.launch_id = e.launchId),
                    (r.referrer_id = e.referrerId),
                    (r.custom_id = e.customId),
                    null != n && "" !== n && (r.guild_id = n),
                    null != t && "" !== t && (r.channel_id = t));
                let o = e?.url;
                return (0, l.jsx)(A.A, { application: a, queryParams: r, url: o });
            },
            [t, n, e],
        );
    return (0, l.jsx)(v, { activity: e, isLoading: r, renderHeader: o, renderActivityIFrameWithLoadedData: s });
}

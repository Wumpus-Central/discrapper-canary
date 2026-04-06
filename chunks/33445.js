n.d(t, { A: () => h, E: () => I });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    o = n(475743),
    s = n(587895),
    c = n(574172),
    d = n(473553),
    u = n(933958),
    p = n(969151),
    A = n(833147),
    m = n(780376),
    f = n(652215),
    x = n(823226);
function I(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: u, isLoading: p = !1 } = e,
        A = l.useRef(null),
        m = (0, o.A)(t);
    l.useEffect(() => {
        null != t
            ? clearTimeout(A.current)
            : null != m &&
              null == t &&
              (A.current = window.setTimeout(() => {
                  (0, c.close)(f.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [m, t]);
    let I = (0, a.bG)([s.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : s.A.getApplication(e);
    });
    return (0, i.jsx)("div", {
        className: x.kL,
        children:
            null == t || null == I || p
                ? (0, i.jsx)(r.y$y, { className: x.pU })
                : (0, i.jsx)("div", {
                      className: x.U$,
                      children: (0, i.jsxs)("div", {
                          className: x.kq,
                          children: [
                              (0, i.jsx)("div", { className: x.N1, children: n({ application: I }) }),
                              (0, i.jsx)(d.A, { applicationId: I.id }),
                              (0, i.jsx)("div", { className: x.Wc, children: u({ application: I }) }),
                          ],
                      }),
                  }),
    });
}
function h() {
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
        o = l.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, i.jsx)(m.A, { applicationId: n.id, channelId: t });
            },
            [t],
        ),
        s = l.useCallback(
            (l) => {
                let { application: a } = l,
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
                return (0, i.jsx)(A.A, { application: a, queryParams: r, url: o });
            },
            [t, n, e],
        );
    return (0, i.jsx)(I, { activity: e, isLoading: r, renderHeader: o, renderActivityIFrameWithLoadedData: s });
}

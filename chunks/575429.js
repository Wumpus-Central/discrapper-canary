(r.r(e), r.d(e, { default: () => D }));
var a = r(477900),
    i = r(582128),
    n = r(132500),
    s = r(607399),
    l = r(821609),
    c = r(297264),
    u = r(834730),
    d = r(289873),
    o = r(174459),
    h = r(723702);
(r(323874), r(14289), r(35956));
var f = r(17928),
    _ = r(157559),
    m = r(308528),
    p = r(452295),
    I = r(793574),
    A = r(688810),
    E = r(909338),
    T = r(429913),
    x = r(976860),
    v = r(287809),
    P = r(257269),
    g = r(105292);
function k(t) {
    let { match: e } = t,
        r = (0, x.UC)() ?? [],
        { analyticsLocations: a } = (0, A.Ay)([...r, I.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: n } = e.params,
        [s] = (0, T.A)([n]),
        l = s?.bot?.id,
        c = (0, f.bG)([v.default], () => v.default.getCurrentUser());
    return (
        i.useEffect(() => {
            if (null == n || null == l || null == c) return;
            let t = new URL(location.href);
            (async () => {
                try {
                    await m.A.openPrivateChannel({ recipientIds: l });
                    let e = t.searchParams.get("referrer_id") ?? void 0,
                        { customId: r } = await (0, P.d9)(
                            n,
                            t.searchParams.get("link_id"),
                            t.searchParams.get("custom_id"),
                        );
                    await p.A.launch({
                        applicationId: n,
                        fromLink: !0,
                        linkChannelId: (0, E.D)(t),
                        customId: r,
                        referrerId: e,
                        analyticsLocations: a,
                    });
                } catch (t) {}
            })();
        }, [a, n, l, c]),
        i.useEffect(() => {
            let t = setTimeout(() => {
                null == l && _.A.show({ title: g.intl.string(g.t.PtobXW), body: g.intl.string(g.t["IOy+I5"]) });
            }, 5e3);
            return () => {
                clearTimeout(t);
            };
        }, [l]),
        null
    );
}
var C = r(652215),
    b = r(613057),
    w = r(168071);
function D(t) {
    let { applicationId: e } = t.match.params,
        [f, _] = i.useState(!1),
        m = i.useRef(!1),
        [p, I] = i.useState(null),
        A = !h.isPlatformEmbedded && !s.Fr && !f,
        E = i.useMemo(() => (0, n.A)(), []);
    return (i.useEffect(() => {
        A &&
            !0 !== m.current &&
            (Promise.resolve()
                .then(r.bind(r, 129014))
                .then((t) => {
                    let { default: r } = t;
                    r.request(C.e$_.DEEP_LINK, {
                        type: b.XK.ACTIVITIES,
                        params: { applicationId: e, url: location.href, attemptId: E },
                    })
                        .then((t) => {
                            let r = t ?? !1;
                            (I(r),
                                o.default.track(C.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: r,
                                }));
                        })
                        .catch(() => {
                            (I(!1),
                                o.default.track(C.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: !1,
                                }));
                        })
                        .then(() => r.disconnect());
                }),
            (m.current = !0));
    }, [e, A, E]),
    A && !1 !== p)
        ? !0 === p
            ? (0, a.jsxs)("div", {
                  className: w.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: g.intl.string(g.t.csrAMJ) }),
                      (0, a.jsx)(u.E, { variant: "text-xs/semibold", children: g.intl.string(g.t["m1+IBn"]) }),
                      (0, a.jsx)(l.$, { variant: "primary", text: g.intl.string(g.t.fIv16B), onClick: () => _(!0) }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: w.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: g.intl.string(g.t["Z+hCVU"]) }),
                      (0, a.jsx)(d.y, {}),
                  ],
              })
        : (0, a.jsx)(k, { ...t });
}

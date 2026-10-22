(r.r(e), r.d(e, { default: () => w }));
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
var _ = r(17928),
    f = r(157559),
    m = r(308528),
    p = r(452295),
    A = r(793574),
    E = r(688810),
    I = r(429913),
    T = r(976860),
    x = r(287809),
    v = r(257269),
    P = r(105292);
function g(t) {
    let { match: e } = t,
        r = (0, T.UC)() ?? [],
        { analyticsLocations: a } = (0, E.Ay)([...r, A.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: n } = e.params,
        [s] = (0, I.A)([n]),
        l = s?.bot?.id,
        c = (0, _.bG)([x.default], () => x.default.getCurrentUser());
    return (
        i.useEffect(() => {
            null != n &&
                null != l &&
                null != c &&
                (async () => {
                    try {
                        await m.A.openPrivateChannel({ recipientIds: l });
                        let t = new URL(location.href),
                            e = t.searchParams.get("referrer_id") ?? void 0,
                            { customId: r } = await (0, v.d9)(
                                n,
                                t.searchParams.get("link_id"),
                                t.searchParams.get("custom_id"),
                            );
                        await p.A.launch({
                            applicationId: n,
                            fromLink: !0,
                            customId: r,
                            referrerId: e,
                            analyticsLocations: a,
                        });
                    } catch (t) {}
                })();
        }, [a, n, l, c]),
        i.useEffect(() => {
            let t = setTimeout(() => {
                null == l && f.A.show({ title: P.intl.string(P.t.PtobXW), body: P.intl.string(P.t["IOy+I5"]) });
            }, 5e3);
            return () => {
                clearTimeout(t);
            };
        }, [l]),
        null
    );
}
var b = r(652215),
    k = r(613057),
    C = r(168071);
function w(t) {
    let { applicationId: e } = t.match.params,
        [_, f] = i.useState(!1),
        m = i.useRef(!1),
        [p, A] = i.useState(null),
        E = !h.isPlatformEmbedded && !s.Fr && !_,
        I = i.useMemo(() => (0, n.A)(), []);
    return (i.useEffect(() => {
        E &&
            !0 !== m.current &&
            (Promise.resolve()
                .then(r.bind(r, 129014))
                .then((t) => {
                    let { default: r } = t;
                    r.request(b.e$_.DEEP_LINK, {
                        type: k.XK.ACTIVITIES,
                        params: { applicationId: e, url: location.href, attemptId: I },
                    })
                        .then((t) => {
                            let r = t ?? !1;
                            (A(r),
                                o.default.track(b.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: I,
                                    rpc_success: r,
                                }));
                        })
                        .catch(() => {
                            (A(!1),
                                o.default.track(b.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: I,
                                    rpc_success: !1,
                                }));
                        })
                        .then(() => r.disconnect());
                }),
            (m.current = !0));
    }, [e, E, I]),
    E && !1 !== p)
        ? !0 === p
            ? (0, a.jsxs)("div", {
                  className: C.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: P.intl.string(P.t.csrAMJ) }),
                      (0, a.jsx)(u.E, { variant: "text-xs/semibold", children: P.intl.string(P.t["m1+IBn"]) }),
                      (0, a.jsx)(l.$, { variant: "primary", text: P.intl.string(P.t.fIv16B), onClick: () => f(!0) }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: C.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: P.intl.string(P.t["Z+hCVU"]) }),
                      (0, a.jsx)(d.y, {}),
                  ],
              })
        : (0, a.jsx)(g, { ...t });
}

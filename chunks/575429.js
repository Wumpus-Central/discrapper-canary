(r.r(e), r.d(e, { default: () => y }));
var a = r(477900),
    i = r(582128),
    n = r(132500),
    s = r(607399),
    l = r(821609),
    c = r(534514),
    u = r(834730),
    d = r(289873),
    o = r(174459),
    h = r(723702);
(r(323874), r(14289), r(35956));
var f = r(17928),
    m = r(157559),
    _ = r(308528),
    p = r(691426),
    I = r(793574),
    A = r(688810),
    E = r(909338),
    T = r(429913),
    x = r(976860),
    v = r(287809),
    P = r(257269),
    b = r(105292);
function g(t) {
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
                    await _.A.openPrivateChannel({ recipientIds: l });
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
                null == l && m.A.show({ title: b.intl.string(b.t.PtobXW), body: b.intl.string(b.t["IOy+I5"]) });
            }, 5e3);
            return () => {
                clearTimeout(t);
            };
        }, [l]),
        null
    );
}
var k = r(652215),
    C = r(613057),
    w = r(168071);
function y(t) {
    let { applicationId: e } = t.match.params,
        [f, m] = i.useState(!1),
        _ = i.useRef(!1),
        [p, I] = i.useState(null),
        A = !h.isPlatformEmbedded && !s.Fr && !f,
        E = i.useMemo(() => (0, n.A)(), []);
    return (i.useEffect(() => {
        A &&
            !0 !== _.current &&
            (Promise.resolve()
                .then(r.bind(r, 129014))
                .then((t) => {
                    let { default: r } = t;
                    r.request(k.e$_.DEEP_LINK, {
                        type: C.XK.ACTIVITIES,
                        params: { applicationId: e, url: location.href, attemptId: E },
                    })
                        .then((t) => {
                            let r = t ?? !1;
                            (I(r),
                                o.default.track(k.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: r,
                                }));
                        })
                        .catch(() => {
                            (I(!1),
                                o.default.track(k.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: !1,
                                }));
                        })
                        .then(() => r.disconnect());
                }),
            (_.current = !0));
    }, [e, A, E]),
    A && !1 !== p)
        ? !0 === p
            ? (0, a.jsxs)("div", {
                  className: w.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/semibold", children: b.intl.string(b.t.csrAMJ) }),
                      (0, a.jsx)(u.E, { variant: "body-xs/semibold", children: b.intl.string(b.t["m1+IBn"]) }),
                      (0, a.jsx)(l.$, { variant: "primary", text: b.intl.string(b.t.fIv16B), onClick: () => m(!0) }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: w.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/semibold", children: b.intl.string(b.t["Z+hCVU"]) }),
                      (0, a.jsx)(d.y, {}),
                  ],
              })
        : (0, a.jsx)(g, { ...t });
}

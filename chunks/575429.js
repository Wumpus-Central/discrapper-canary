r.r(e), r.d(e, { default: () => w });
var a = r(627968),
    i = r(64700),
    s = r(132500),
    n = r(607399),
    l = r(821609),
    c = r(534514),
    d = r(834730),
    u = r(289873),
    o = r(954571),
    h = r(723702);
r(323874), r(14289), r(35956);
var _ = r(17928),
    p = r(157559),
    f = r(308528),
    m = r(793574),
    A = r(688810),
    I = r(429913),
    E = r(976860),
    T = r(287809),
    x = r(956549),
    g = r(257269),
    v = r(985018);
function P(t) {
    let { match: e } = t,
        r = (0, E.UC)() ?? [],
        { analyticsLocations: a } = (0, A.Ay)([...r, m.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: s } = e.params,
        [n] = (0, I.A)([s]),
        l = n?.bot?.id,
        c = (0, _.bG)([T.default], () => T.default.getCurrentUser());
    return (
        i.useEffect(() => {
            null != l &&
                null != c &&
                (async () => {
                    try {
                        let t = new URL(location.href),
                            e = await f.A.openPrivateChannel({ recipientIds: l }),
                            r = t.searchParams.get("referrer_id") ?? void 0,
                            { customId: i } = await (0, g.d9)(
                                s,
                                t.searchParams.get("link_id"),
                                t.searchParams.get("custom_id"),
                            );
                        await (0, x.A)({
                            targetApplicationId: s,
                            channelId: e,
                            analyticsLocations: a,
                            customId: i,
                            referrerId: r,
                        });
                    } catch (t) {}
                })();
        }, [a, s, l, c]),
        i.useEffect(() => {
            let t = setTimeout(() => {
                null == l && p.A.show({ title: v.intl.string(v.t.PtobXW), body: v.intl.string(v.t["IOy+I5"]) });
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
    C = r(897152);
function w(t) {
    let { applicationId: e } = t.match.params,
        [_, p] = i.useState(!1),
        f = i.useRef(!1),
        [m, A] = i.useState(null),
        I = !h.isPlatformEmbedded && !n.Fr && !_,
        E = i.useMemo(() => (0, s.A)(), []);
    return (i.useEffect(() => {
        I &&
            !0 !== f.current &&
            (Promise.resolve()
                .then(r.bind(r, 129014))
                .then((t) => {
                    let { default: r } = t;
                    r.request(b.e$_.DEEP_LINK, {
                        type: k.XK.ACTIVITIES,
                        params: { applicationId: e, url: location.href, attemptId: E },
                    })
                        .then((t) => {
                            let r = t ?? !1;
                            A(r),
                                o.default.track(b.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: r,
                                });
                        })
                        .catch(() => {
                            A(!1),
                                o.default.track(b.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: e,
                                    source_url: location.href,
                                    attempt_id: E,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => r.disconnect());
                }),
            (f.current = !0));
    }, [e, I, E]),
    I && !1 !== m)
        ? !0 === m
            ? (0, a.jsxs)("div", {
                  className: C.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: v.intl.string(v.t.csrAMJ) }),
                      (0, a.jsx)(d.E, { variant: "text-xs/semibold", children: v.intl.string(v.t["m1+IBn"]) }),
                      (0, a.jsx)(l.$, { variant: "primary", text: v.intl.string(v.t.fIv16B), onClick: () => p(!0) }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: C.k,
                  children: [
                      (0, a.jsx)(c.D, { variant: "heading-xxl/bold", children: v.intl.string(v.t["Z+hCVU"]) }),
                      (0, a.jsx)(u.y, {}),
                  ],
              })
        : (0, a.jsx)(P, { ...t });
}

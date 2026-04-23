n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(835245),
    l = n(607399),
    s = n(821609),
    o = n(534514),
    d = n(834730),
    u = n(289873),
    c = n(954571),
    A = n(723702),
    h = n(394727),
    _ = n(652215),
    E = n(613057),
    p = n(985018),
    m = n(897152);
function g(e) {
    let { applicationId: t } = e.match.params,
        [g, I] = r.useState(!1),
        C = r.useRef(!1),
        [f, T] = r.useState(null),
        S = !A.isPlatformEmbedded && !l.Fr && !g,
        N = r.useMemo(() => (0, a.A)(), []);
    return (r.useEffect(() => {
        S &&
            !0 !== C.current &&
            (Promise.resolve()
                .then(n.bind(n, 129014))
                .then((e) => {
                    let { default: n } = e;
                    n.request(_.e$_.DEEP_LINK, {
                        type: E.XK.ACTIVITIES,
                        params: { applicationId: t, url: location.href, attemptId: N },
                    })
                        .then((e) => {
                            let n = e ?? !1;
                            T(n),
                                c.default.track(_.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: N,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            T(!1),
                                c.default.track(_.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: N,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (C.current = !0));
    }, [t, S, N]),
    S && !1 !== f)
        ? !0 === f
            ? (0, i.jsxs)("div", {
                  className: m.k,
                  children: [
                      (0, i.jsx)(o.D, { variant: "heading-xxl/bold", children: p.intl.string(p.t.csrAMJ) }),
                      (0, i.jsx)(d.E, { variant: "text-xs/semibold", children: p.intl.string(p.t["m1+IBn"]) }),
                      (0, i.jsx)(s.$, { variant: "primary", text: p.intl.string(p.t.fIv16B), onClick: () => I(!0) }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: m.k,
                  children: [
                      (0, i.jsx)(o.D, { variant: "heading-xxl/bold", children: p.intl.string(p.t["Z+hCVU"]) }),
                      (0, i.jsx)(u.y, {}),
                  ],
              })
        : (0, i.jsx)(h.A, { ...e });
}

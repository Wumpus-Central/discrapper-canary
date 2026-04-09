n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    r = n(835245),
    l = n(607399),
    s = n(732955),
    o = n(397927),
    d = n(954571),
    c = n(723702),
    u = n(394727),
    A = n(652215),
    _ = n(613057),
    h = n(985018),
    m = n(34960);
function g(e) {
    let { applicationId: t } = e.match.params,
        [g, p] = a.useState(!1),
        E = a.useRef(!1),
        [I, f] = a.useState(null),
        C = !c.isPlatformEmbedded && !l.Fr && !g,
        T = a.useMemo(() => (0, r.A)(), []);
    return (a.useEffect(() => {
        C &&
            !0 !== E.current &&
            (Promise.resolve()
                .then(n.bind(n, 129014))
                .then((e) => {
                    let { default: n } = e;
                    n.request(A.e$_.DEEP_LINK, {
                        type: _.XK.ACTIVITIES,
                        params: { applicationId: t, url: location.href, attemptId: T },
                    })
                        .then((e) => {
                            let n = e ?? !1;
                            f(n),
                                d.default.track(A.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: T,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            f(!1),
                                d.default.track(A.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: T,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (E.current = !0));
    }, [t, C, T]),
    C && !1 !== I)
        ? !0 === I
            ? (0, i.jsxs)("div", {
                  className: m.k,
                  children: [
                      (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: h.intl.string(h.t.csrAMJ) }),
                      (0, i.jsx)(o.Text, { variant: "text-xs/semibold", children: h.intl.string(h.t["m1+IBn"]) }),
                      (0, i.jsx)(s.$nd, { variant: "primary", text: h.intl.string(h.t.fIv16B), onClick: () => p(!0) }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: m.k,
                  children: [
                      (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: h.intl.string(h.t["Z+hCVU"]) }),
                      (0, i.jsx)(o.y$y, {}),
                  ],
              })
        : (0, i.jsx)(u.A, { ...e });
}

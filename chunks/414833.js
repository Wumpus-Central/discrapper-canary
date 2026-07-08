r.d(t, { default: () => j });
var s = r(627968),
    i = r(64700),
    n = r(224640),
    l = r(20742),
    a = r(430993),
    d = r(364840),
    o = r(821609),
    c = r(834730),
    u = r(289873),
    h = r(17928),
    k = r(964486),
    x = r(899847),
    p = r(695515),
    A = r(453322),
    f = r(22071),
    C = r(375708),
    g = r(602339),
    m = r(149173);
function j(e) {
    let { transitionState: t, onClose: r, onLoadError: j } = e,
        L = (function () {
            let { linkCode: e, expiresAt: t } = (0, h.cf)([p.A], () => ({
                    linkCode: p.A.getLinkCode(),
                    expiresAt: p.A.getLinkCodeExpiresAt(),
                })),
                [r, s] = i.useState(!1),
                [n, l] = i.useState(() => {
                    let e = p.A.getLinkCodeExpiresAt();
                    return null != p.A.getLinkCode() && null != e && e > Date.now();
                }),
                a = i.useRef(0),
                d = i.useCallback(() => {
                    let e = ++a.current;
                    s(!1),
                        (0, x.HB)()
                            .then(() => {
                                e === a.current && (s(!1), l(!0));
                            })
                            .catch(() => {
                                if (e !== a.current) return;
                                let t = p.A.getLinkCodeExpiresAt();
                                null != p.A.getLinkCode() && null != t && t > Date.now() ? l(!0) : s(!0);
                            });
                }, []);
            return ((0, k.Ay)(d), r)
                ? { state: "error" }
                : n
                  ? null != e && null != t
                      ? { state: "gate", linkCode: e, expiresAt: t, refresh: d }
                      : { state: "error" }
                  : { state: "loading" };
        })();
    return (
        (0, A.A)(r),
        i.useEffect(() => {
            "error" === L.state && (j?.(), r());
        }, [L.state, r, j]),
        (0, s.jsxs)(n.d, {
            transitionState: t,
            onClose: r,
            size: "md",
            dismissable: !1,
            "aria-label": C.intl.string(g.default.vELYWk),
            children: [
                (0, s.jsx)(l.rQ, { alignCenter: !0, title: C.intl.string(g.default.vELYWk) }),
                (0, s.jsx)(a.c, {
                    children:
                        "gate" === L.state
                            ? (0, s.jsxs)("div", {
                                  className: m.kL,
                                  children: [
                                      (0, s.jsx)(c.E, {
                                          className: m.h_,
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: C.intl.format(g.default.pDByAB, {
                                              link: "https://support.discord.com/hc/articles/14155060633623",
                                          }),
                                      }),
                                      (0, s.jsx)(f.r, {
                                          linkCode: L.linkCode,
                                          expiresAt: L.expiresAt,
                                          onRefresh: L.refresh,
                                      }),
                                  ],
                              })
                            : (0, s.jsx)("div", { className: m.Lq, children: (0, s.jsx)(u.y, {}) }),
                }),
                "gate" === L.state &&
                    (0, s.jsx)(d.j, {
                        children: (0, s.jsx)(o.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: C.intl.string(C.t["3PatSz"]),
                            onClick: () => void r(),
                        }),
                    }),
            ],
        })
    );
}

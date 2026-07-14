r.d(t, { default: () => g });
var s = r(627968),
    n = r(64700),
    l = r(224640),
    i = r(20742),
    a = r(430993),
    d = r(834730),
    o = r(289873),
    u = r(17928),
    c = r(964486),
    k = r(899847),
    h = r(695515),
    p = r(453322),
    x = r(22071),
    A = r(375708),
    f = r(602339),
    C = r(149173);
function g(e) {
    let { transitionState: t, onClose: r, onLoadError: g } = e,
        L = (function () {
            let { linkCode: e, expiresAt: t } = (0, u.cf)([h.A], () => ({
                    linkCode: h.A.getLinkCode(),
                    expiresAt: h.A.getLinkCodeExpiresAt(),
                })),
                [r, s] = n.useState(!1),
                [l, i] = n.useState(() => {
                    let e = h.A.getLinkCodeExpiresAt();
                    return null != h.A.getLinkCode() && null != e && e > Date.now();
                }),
                a = n.useRef(0),
                d = n.useCallback(() => {
                    let e = ++a.current;
                    s(!1),
                        (0, k.HB)()
                            .then(() => {
                                e === a.current && (s(!1), i(!0));
                            })
                            .catch(() => {
                                if (e !== a.current) return;
                                let t = h.A.getLinkCodeExpiresAt();
                                null != h.A.getLinkCode() && null != t && t > Date.now() ? i(!0) : s(!0);
                            });
                }, []);
            return ((0, c.Ay)(d), r)
                ? { state: "error" }
                : l
                  ? null != e && null != t
                      ? { state: "gate", linkCode: e, expiresAt: t, refresh: d }
                      : { state: "error" }
                  : { state: "loading" };
        })();
    return (
        (0, p.A)(r),
        n.useEffect(() => {
            "error" === L.state && (g?.(), r());
        }, [L.state, r, g]),
        (0, s.jsxs)(l.d, {
            transitionState: t,
            onClose: r,
            size: "md",
            "aria-label": A.intl.string(f.default.vELYWk),
            children: [
                (0, s.jsx)(i.rQ, { alignCenter: !0, title: A.intl.string(f.default.vELYWk) }),
                (0, s.jsx)(a.c, {
                    children:
                        "gate" === L.state
                            ? (0, s.jsxs)("div", {
                                  className: C.kL,
                                  children: [
                                      (0, s.jsx)(d.E, {
                                          className: C.h_,
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: A.intl.format(f.default.pDByAB, {
                                              link: "https://support.discord.com/hc/articles/14155060633623",
                                          }),
                                      }),
                                      (0, s.jsx)(x.r, {
                                          linkCode: L.linkCode,
                                          expiresAt: L.expiresAt,
                                          onRefresh: L.refresh,
                                      }),
                                  ],
                              })
                            : (0, s.jsx)("div", { className: C.Lq, children: (0, s.jsx)(o.y, {}) }),
                }),
            ],
        })
    );
}

r.d(t, { default: () => m });
var s = r(627968),
    n = r(64700),
    i = r(224640),
    l = r(20742),
    a = r(430993),
    d = r(364840),
    c = r(821609),
    u = r(834730),
    o = r(289873),
    k = r(17928),
    A = r(964486),
    f = r(899847),
    h = r(695515),
    x = r(834981),
    p = r(22071),
    g = r(375708),
    C = r(602339),
    L = r(149173);
function m(e) {
    let t,
        r,
        m,
        { transitionState: j, onClose: v, onLoadError: E } = e,
        b = (function () {
            let { linkCode: e, expiresAt: t } = (0, k.cf)([h.A], () => ({
                    linkCode: h.A.getLinkCode(),
                    expiresAt: h.A.getLinkCodeExpiresAt(),
                })),
                [r, s] = n.useState(!1),
                [i, l] = n.useState(() => {
                    let e = h.A.getLinkCodeExpiresAt();
                    return null != h.A.getLinkCode() && null != e && e > Date.now();
                }),
                a = n.useRef(0),
                d = n.useCallback(() => {
                    let e = ++a.current;
                    s(!1),
                        (0, f.HB)()
                            .then(() => {
                                e === a.current && (s(!1), l(!0));
                            })
                            .catch(() => {
                                if (e !== a.current) return;
                                let t = h.A.getLinkCodeExpiresAt();
                                null != h.A.getLinkCode() && null != t && t > Date.now() ? l(!0) : s(!0);
                            });
                }, []);
            return ((0, A.Ay)(d), r)
                ? { state: "error" }
                : i
                  ? null != e && null != t
                      ? { state: "gate", linkCode: e, expiresAt: t, refresh: d }
                      : { state: "error" }
                  : { state: "loading" };
        })();
    return (
        (t = (0, x.VT)()),
        (r = (0, k.bG)([h.A], () => h.A.getAreLinkedUsersProcessed())),
        (0, A.Ay)(() => {
            h.A.getAreLinkedUsersProcessed() || f.Ay.fetchLinkedUsers().catch(() => {});
        }),
        (m = n.useRef(null)),
        n.useEffect(() => {
            if (r) {
                if (null == m.current) {
                    m.current = t;
                    return;
                }
                t > m.current && v();
            }
        }, [r, t, v]),
        n.useEffect(() => {
            "error" === b.state && (E?.(), v());
        }, [b.state, v, E]),
        (0, s.jsxs)(i.d, {
            transitionState: j,
            onClose: v,
            size: "md",
            dismissable: !1,
            "aria-label": g.intl.string(C.default.vELYWk),
            children: [
                (0, s.jsx)(l.rQ, { alignCenter: !0, title: g.intl.string(C.default.vELYWk) }),
                (0, s.jsx)(a.c, {
                    children:
                        "gate" === b.state
                            ? (0, s.jsxs)("div", {
                                  className: L.kL,
                                  children: [
                                      (0, s.jsx)(u.E, {
                                          className: L.h_,
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: g.intl.format(C.default.pDByAB, {
                                              link: "https://support.discord.com/hc/articles/14155060633623",
                                          }),
                                      }),
                                      (0, s.jsx)(p.r, {
                                          linkCode: b.linkCode,
                                          expiresAt: b.expiresAt,
                                          onRefresh: b.refresh,
                                      }),
                                  ],
                              })
                            : (0, s.jsx)("div", { className: L.Lq, children: (0, s.jsx)(o.y, {}) }),
                }),
                "gate" === b.state &&
                    (0, s.jsx)(d.j, {
                        children: (0, s.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: g.intl.string(g.t["3PatSz"]),
                            onClick: () => void v(),
                        }),
                    }),
            ],
        })
    );
}

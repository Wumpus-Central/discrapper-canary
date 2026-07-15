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
    h = r(899847),
    p = r(695515),
    k = r(453322),
    x = r(22071),
    A = r(375708),
    C = r(602339),
    f = r(149173);
function g(e) {
    let { transitionState: t, onClose: r, onLoadError: g, title: m, body: j } = e,
        L = (function () {
            let { linkCode: e, expiresAt: t } = (0, u.cf)([p.A], () => ({
                    linkCode: p.A.getLinkCode(),
                    expiresAt: p.A.getLinkCodeExpiresAt(),
                })),
                [r, s] = n.useState(!1),
                [l, i] = n.useState(() => {
                    let e = p.A.getLinkCodeExpiresAt();
                    return null != p.A.getLinkCode() && null != e && e > Date.now();
                }),
                a = n.useRef(0),
                d = n.useCallback(() => {
                    let e = ++a.current;
                    s(!1),
                        (0, h.HB)()
                            .then(() => {
                                e === a.current && (s(!1), i(!0));
                            })
                            .catch(() => {
                                if (e !== a.current) return;
                                let t = p.A.getLinkCodeExpiresAt();
                                null != p.A.getLinkCode() && null != t && t > Date.now() ? i(!0) : s(!0);
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
    (0, k.A)(r),
        n.useEffect(() => {
            "error" === L.state && (g?.(), r());
        }, [L.state, r, g]);
    let b = m ?? A.intl.string(C.default.ITlV6p),
        v = j ?? A.intl.format(C.default.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    return (0, s.jsxs)(l.d, {
        transitionState: t,
        onClose: r,
        size: "md",
        "aria-label": b,
        children: [
            (0, s.jsx)(i.rQ, {
                alignCenter: !0,
                title: b,
                subtitle:
                    "gate" === L.state
                        ? (0, s.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              className: f.h_,
                              children: v,
                          })
                        : void 0,
            }),
            (0, s.jsx)(a.c, {
                children:
                    "gate" === L.state
                        ? (0, s.jsx)("div", {
                              className: f.kL,
                              children: (0, s.jsx)(x.r, {
                                  linkCode: L.linkCode,
                                  expiresAt: L.expiresAt,
                                  onRefresh: L.refresh,
                              }),
                          })
                        : (0, s.jsx)("div", { className: f.Lq, children: (0, s.jsx)(o.y, {}) }),
            }),
        ],
    });
}

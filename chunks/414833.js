s.d(e, { default: () => g });
var r = s(627968),
    i = s(64700),
    a = s(224640),
    n = s(20742),
    l = s(430993),
    d = s(364840),
    c = s(821609),
    o = s(834730),
    u = s(289873),
    h = s(17928),
    x = s(964486),
    p = s(899847),
    k = s(695515),
    f = s(916590),
    m = s(375708),
    j = s(602339),
    C = s(149173);
function g(t) {
    let { transitionState: e, onClose: s } = t,
        g = (function () {
            let { linkCode: t, expiresAt: e } = (0, h.cf)([k.A], () => ({
                    linkCode: k.A.getLinkCode(),
                    expiresAt: k.A.getLinkCodeExpiresAt(),
                })),
                [s, r] = i.useState(!1),
                [a, n] = i.useState(!1),
                l = i.useRef(0),
                d = i.useCallback(() => {
                    let t = ++l.current;
                    r(!1),
                        (0, p.HB)()
                            .then(() => {
                                t === l.current && (r(!1), n(!0));
                            })
                            .catch(() => {
                                t === l.current && r(!0);
                            });
                }, []);
            return ((0, x.Ay)(d), s)
                ? { state: "error" }
                : a
                  ? null != t && null != e
                      ? { state: "gate", linkCode: t, expiresAt: e, refresh: d }
                      : { state: "error" }
                  : { state: "loading" };
        })();
    return (
        i.useEffect(() => {
            "error" === g.state && s();
        }, [g.state, s]),
        (0, r.jsxs)(a.d, {
            transitionState: e,
            onClose: s,
            size: "md",
            dismissable: !1,
            "aria-label": m.intl.string(j.default.vELYWk),
            children: [
                (0, r.jsx)(n.rQ, { alignCenter: !0, title: m.intl.string(j.default.vELYWk) }),
                (0, r.jsx)(l.c, {
                    children:
                        "gate" === g.state
                            ? (0, r.jsxs)("div", {
                                  className: C.kL,
                                  children: [
                                      (0, r.jsx)(o.E, {
                                          className: C.h_,
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: m.intl.format(j.default.pDByAB, {
                                              link: "https://support.discord.com/hc/articles/14155060633623",
                                          }),
                                      }),
                                      (0, r.jsx)(f.r, {
                                          linkCode: g.linkCode,
                                          expiresAt: g.expiresAt,
                                          onRefresh: g.refresh,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", { className: C.Lq, children: (0, r.jsx)(u.y, {}) }),
                }),
                "gate" === g.state &&
                    (0, r.jsx)(d.j, {
                        children: (0, r.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: m.intl.string(m.t["3PatSz"]),
                            onClick: () => void s(),
                        }),
                    }),
            ],
        })
    );
}

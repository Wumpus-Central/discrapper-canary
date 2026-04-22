"use strict";
n.d(t, { A: () => b }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(80703),
    a = n(311907),
    o = n(562465),
    c = n(506774),
    d = n(834730),
    u = n(821609),
    _ = n(73153),
    h = n(830215),
    m = n(961350),
    g = n(954571),
    p = n(927813),
    A = n(104798),
    f = n(652215),
    x = n(985018),
    E = n(14695);
let I = "mweb_handoff_nonce",
    v = "mweb_handoff_nonce_expiration",
    N = +p.A.Millis.MINUTE,
    j = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    C = new Set(["deep_link_failed"]),
    T = () => {
        c.w.remove(I), c.w.remove(v);
    },
    b = () => {
        let e = (0, a.bG)([m.default], () => m.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, r.parse)(window.location.search),
            p = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            b = p ?? (null !== e ? e : void 0);
        s.useEffect(() => {
            null !== p && e !== p && _.h.dispatch({ type: "FINGERPRINT", fingerprint: p });
        }, [p, e]);
        let [y, S] = s.useState(null),
            R = s.useCallback(
                (e) => {
                    S(e),
                        g.default.track(
                            f.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, l.v)(b) },
                            { fingerprint: b },
                        );
                },
                [S, b],
            ),
            w = c.w.get(I);
        if (
            ("null" === n && null === y && R("deep_link_failed"),
            null != n && "null" !== n && null == w && null === y && R("nonce_missing"),
            s.useEffect(() => {
                if (null != w) {
                    let e = c.w.get(v);
                    (null == e || Date.now() >= e) && (R("nonce_expired"), T());
                }
            }, [w, R]),
            s.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != w &&
                    null == y &&
                    o.Bo.post({ url: f.Rsh.HANDOFF_EXCHANGE, body: { key: w, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => h.A.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(f.HAw.LOGIN_SUCCESSFUL, {
                                source: f.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.v)(b),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            R("handoff_exchange");
                        })
                        .finally(() => {
                            T();
                        });
            }, [n, w, y, b, R]),
            null == b)
        )
            return null;
        let O =
            null == y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [x.intl.string(x.t.uJ1JsY), (0, i.jsx)("br", {}), x.intl.string(x.t.GHVWAs)],
                  })
                : C.has(y)
                  ? x.intl.string(x.t.EPt55r)
                  : j.has(y)
                    ? x.intl.string(x.t.g87kTp)
                    : void 0;
        return null != y && C.has(y)
            ? (0, i.jsx)("div", {
                  className: E.Un,
                  children: (0, i.jsx)(d.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: O,
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: E.kL,
                  children: [
                      (0, i.jsx)(d.E, { variant: "text-sm/semibold", children: O }),
                      (0, i.jsx)(u.$, {
                          variant: "overlay-primary",
                          text: x.intl.string(x.t.NcC759),
                          onClick: () => {
                              let e = A.A.generateNonce();
                              c.w.set(I, e), c.w.set(v, Date.now() + N);
                              let t = new URL(f.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", b),
                                  (t.search = i.toString()),
                                  g.default.track(
                                      f.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, l.v)(b), source: "mobile_web_handoff", destination: f.J$u },
                                      { fingerprint: b, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };

n.d(t, {
    A: () => I,
}),
    n(896048),
    n(747238),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(492834);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(80703),
    a = n(311907),
    o = n(562465),
    c = n(506774),
    u = n(397927),
    d = n(73153),
    h = n(830215),
    p = n(961350),
    g = n(954571),
    m = n(927813),
    f = n(104798),
    _ = n(652215),
    A = n(985018),
    x = n(654626);
let E = "mweb_handoff_nonce",
    v = "mweb_handoff_nonce_expiration",
    j = +m.A.Millis.MINUTE,
    y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    b = new Set(["deep_link_failed"]),
    S = () => {
        c.w.remove(E), c.w.remove(v);
    },
    I = () => {
        let e = (0, a.bG)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            m = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            I = null != m ? m : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== m &&
                e !== m &&
                d.h.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: m,
                });
        }, [m, e]);
        let [N, O] = i.useState(null),
            C = i.useCallback(
                (e) => {
                    O(e),
                        g.default.track(
                            _.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.v)(I),
                            },
                            {
                                fingerprint: I,
                            },
                        );
                },
                [O, I],
            ),
            T = c.w.get(E);
        if (
            ("null" === n && null === N && C("deep_link_failed"),
            null != n && "null" !== n && null == T && null === N && C("nonce_missing"),
            i.useEffect(() => {
                if (null != T) {
                    let e = c.w.get(v);
                    (null == e || Date.now() >= e) && (C("nonce_expired"), S());
                }
            }, [T, C]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != T &&
                    null == N &&
                    o.Bo.post({
                        url: _.Rsh.HANDOFF_EXCHANGE,
                        body: {
                            key: T,
                            handoff_token: n,
                        },
                        rejectWithError: !0,
                    })
                        .then((e) => h.A.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(_.HAw.LOGIN_SUCCESSFUL, {
                                source: _.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.v)(I),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            C("handoff_exchange");
                        })
                        .finally(() => {
                            S();
                        });
            }, [n, T, N, I, C]),
            null == I)
        )
            return null;
        let R =
            null == N
                ? (0, r.jsxs)(r.Fragment, {
                      children: [A.intl.string(A.t.uJ1JsY), (0, r.jsx)("br", {}), A.intl.string(A.t.GHVWAs)],
                  })
                : b.has(N)
                  ? A.intl.string(A.t.EPt55r)
                  : y.has(N)
                    ? A.intl.string(A.t.g87kTp)
                    : void 0;
        return null != N && b.has(N)
            ? (0, r.jsx)("div", {
                  className: x.Un,
                  children: (0, r.jsx)(u.Text, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: R,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: x.kL,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: "text-sm/semibold",
                          children: R,
                      }),
                      (0, r.jsx)(u.Button, {
                          variant: "overlay-primary",
                          text: A.intl.string(A.t.NcC759),
                          onClick: () => {
                              let e = f.A.generateNonce();
                              c.w.set(E, e), c.w.set(v, Date.now() + j);
                              let t = new URL(_.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", I),
                                  (t.search = r.toString()),
                                  g.default.track(
                                      _.HAw.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.v)(I),
                                          source: "mobile_web_handoff",
                                          destination: _.J$u,
                                      },
                                      {
                                          fingerprint: I,
                                          flush: !0,
                                      },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };

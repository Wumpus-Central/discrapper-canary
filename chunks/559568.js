n.d(t, {
    A: () => O,
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
    u = n(421380),
    d = n(397927),
    h = n(73153),
    f = n(830215),
    p = n(961350),
    g = n(954571),
    m = n(927813),
    A = n(104798),
    x = n(652215),
    _ = n(985018),
    E = n(654626);
let b = "mweb_handoff_nonce",
    v = "mweb_handoff_nonce_expiration",
    j = +m.A.Millis.MINUTE,
    y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    S = new Set(["deep_link_failed"]),
    N = () => {
        c.w.remove(b), c.w.remove(v);
    },
    O = () => {
        let e = (0, a.bG)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            m = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            O = null != m ? m : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== m &&
                e !== m &&
                h.h.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: m,
                });
        }, [m, e]);
        let [I, T] = i.useState(null),
            C = i.useCallback(
                (e) => {
                    T(e),
                        g.default.track(
                            x.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.v)(O),
                            },
                            {
                                fingerprint: O,
                            },
                        );
                },
                [T, O],
            ),
            R = c.w.get(b);
        if (
            ("null" === n && null === I && C("deep_link_failed"),
            null != n && "null" !== n && null == R && null === I && C("nonce_missing"),
            i.useEffect(() => {
                if (null != R) {
                    let e = c.w.get(v);
                    (null == e || Date.now() >= e) && (C("nonce_expired"), N());
                }
            }, [R, C]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != R &&
                    null == I &&
                    o.Bo.post({
                        url: x.Rsh.HANDOFF_EXCHANGE,
                        body: {
                            key: R,
                            handoff_token: n,
                        },
                        rejectWithError: !0,
                    })
                        .then((e) => f.A.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(x.HAw.LOGIN_SUCCESSFUL, {
                                source: x.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.v)(O),
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
                            N();
                        });
            }, [n, R, I, O, C]),
            null == O)
        )
            return null;
        let w =
            null == I
                ? (0, r.jsxs)(r.Fragment, {
                      children: [_.intl.string(_.t.uJ1JsY), (0, r.jsx)("br", {}), _.intl.string(_.t.GHVWAs)],
                  })
                : S.has(I)
                  ? _.intl.string(_.t.EPt55r)
                  : y.has(I)
                    ? _.intl.string(_.t.g87kTp)
                    : void 0;
        return null != I && S.has(I)
            ? (0, r.jsx)("div", {
                  className: E.Un,
                  children: (0, r.jsx)(d.Text, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: w,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: E.kL,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-sm/semibold",
                          children: w,
                      }),
                      (0, r.jsx)(u.$n, {
                          color: u.$n.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = A.A.generateNonce();
                              c.w.set(b, e), c.w.set(v, Date.now() + j);
                              let t = new URL(x.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", O),
                                  (t.search = r.toString()),
                                  g.default.track(
                                      x.HAw.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.v)(O),
                                          source: "mobile_web_handoff",
                                          destination: x.J$u,
                                      },
                                      {
                                          fingerprint: O,
                                          flush: !0,
                                      },
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: E._d,
                              variant: "text-sm/semibold",
                              children: _.intl.string(_.t.NcC759),
                          }),
                      }),
                  ],
              });
    };

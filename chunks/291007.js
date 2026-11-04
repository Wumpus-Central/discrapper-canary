(r.r(t), r.d(t, { VerifyAccountDeekLink: () => g, VerifyAccountLoading: () => h, default: () => A }));
var n,
    l = r(477900),
    i = r(582128),
    a = r(806163),
    c = r(607399),
    o =
        (((n = {})[(n.HANDOFF_AUTHORIZED = 0)] = "HANDOFF_AUTHORIZED"),
        (n[(n.HANDOFF_ERROR = 1)] = "HANDOFF_ERROR"),
        (n[(n.HANDOFF_SUCCESS = 2)] = "HANDOFF_SUCCESS"),
        n),
    u = r(862482),
    s = r(289873),
    d = r(939249),
    f = r(77468);
let N = function () {
    let e = i.useRef(!0);
    return (
        i.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        i.useCallback(() => e.current, [])
    );
};
var p = r(458518),
    O = r(573648),
    C = r(129014),
    S = r(998218),
    E = r(950198),
    R = r(652215),
    m = r(792996),
    y = r(249078);
let _ = null != window.opener;
function A() {
    let e = (0, a.W6)(),
        t = (0, p.o)(),
        r = t.get("code"),
        n = t.get("oauth_verifier"),
        u = t.get("state") ?? "",
        s = t.get("loading"),
        d = t.get("iss") ?? void 0,
        { type: m } = (0, a.g)(),
        y = (0, E.mw)(m),
        [A, w] = i.useState(!1),
        [F, T] = i.useState(!1),
        x = N(),
        D = null == n ? (r ?? "") : n;
    (i.useEffect(() => {
        let r;
        if (null != s) return;
        for (let e of t.keys()) e.startsWith("openid.") && (null == r && (r = {}), (r[e] = t.get(e) ?? void 0));
        let n = (0, E.mw)(m);
        !(async function () {
            if (null == n || !O.A.isSupported(n)) return;
            function l(r) {
                let { status: l, body: i } = r;
                if (null != n) {
                    if (i?.redirect) {
                        window.location = i.redirect;
                        return;
                    }
                    if ([200, 204].includes(l)) {
                        (e.replace(R.BVt.CONNECTIONS_SUCCESS(n)), _ && window.close());
                        return;
                    }
                    (i?.code != null && t.append("error-code", i.code),
                        e.replace(`${R.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`));
                }
            }
            if (
                await (async function (e) {
                    let { platformType: t, code: r, state: n, openidParams: l, iss: i, handleCallbackResponse: a } = e;
                    if (c.Fr || _) return !1;
                    try {
                        let e;
                        try {
                            e = await C.default.request(R.e$_.CONNECTIONS_CALLBACK, {
                                code: r,
                                openid_params: l,
                                iss: i,
                                state: n,
                                providerType: t,
                            });
                        } finally {
                            C.default.disconnect();
                        }
                        return (a(e), !0);
                    } catch (e) {
                        return !1;
                    }
                })({ platformType: n, code: D, state: u, openidParams: r, iss: d, handleCallbackResponse: l })
            )
                return;
            let i = await (async function (e, t, r, n, l) {
                try {
                    return (await f.A.sessionHandoff(e, t, r, n, l), 0);
                } catch (e) {
                    if (e?.body?.code === 10020) return 2;
                    if (e?.body?.code === 40001) return 3;
                    return 1;
                }
            })(n, u, D, r, d);
            0 === i
                ? w(!0)
                : 1 === i
                  ? e.replace(`${R.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                  : 3 === i
                    ? c.Fr
                        ? T(!0)
                        : e.replace(`${R.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`)
                    : (async function (e) {
                          let {
                              platformType: t,
                              state: r,
                              handleCallbackResponse: n,
                              handleCallbackError: l,
                              openidParams: i,
                              code: a,
                              iss: c,
                          } = e;
                          try {
                              let e = await f.A.callback(t, { code: a, openid_params: i, state: r, iss: c }, !_);
                              return (n(e), !0);
                          } catch (e) {
                              return (l(e), !0);
                          }
                      })({
                          platformType: n,
                          state: u,
                          handleCallbackResponse: l,
                          handleCallbackError: (r) => {
                              (r?.body?.code != null && t.append("error-code", r.body.code),
                                  e.replace(`${R.BVt.CONNECTIONS_ERROR(n)}?${t.toString()}`));
                          },
                          openidParams: r,
                          code: D,
                          iss: d,
                      });
        })();
    }, [D, e, s, m, t, u, d]),
        i.useEffect(() => {
            let t;
            if (!A) return;
            let r = 0;
            return (
                !(async function n() {
                    if (null == y) return;
                    let { handoff_status: l, success_redirect: i } = (await f.A.getHandoffStatus(y, u)).body;
                    if (l === o.HANDOFF_SUCCESS)
                        if (null == S.A.toURLSafe(i)) return e.replace(R.BVt.CONNECTIONS_SUCCESS(y));
                        else {
                            window.location = i;
                            return;
                        }
                    if (l === o.HANDOFF_ERROR || r >= 10) return e.replace(R.BVt.CONNECTIONS_ERROR(y));
                    t = setTimeout(() => {
                        x() && ((r += 1), n());
                    }, 1e3);
                })(),
                () => {
                    null != t && clearTimeout(t);
                }
            );
        }, [x, e, y, A, u]));
    let H = i.useMemo(() => {
        if (null != y) return `discord://${R.BVt.CONNECTIONS(y)}/?${t.toString()}`;
    }, [y, t]);
    return null != y && O.A.isSupported(y)
        ? F
            ? (0, l.jsx)(g, {
                  platformType: y,
                  deeplink: H,
                  onClick: () => {
                      (T(!1), w(!0));
                  },
              })
            : (0, l.jsx)(h, { platformType: y })
        : null;
}
function h(e) {
    let { platformType: t } = e,
        r = O.A.get(t);
    return (0, l.jsxs)(E.mP, {
        platformType: t,
        children: [
            (0, l.jsx)("div", { className: y.iU, children: m.intl.format(m.t.AOKOe7, { name: r.name }) }),
            (0, l.jsx)("div", {
                className: y.UD,
                children: (0, l.jsx)(u.$n, {
                    className: y.HM,
                    disabled: !0,
                    children: (0, l.jsx)(s.y, { itemClassName: y.$N }),
                }),
            }),
        ],
    });
}
function g(e) {
    let { deeplink: t, onClick: r, platformType: n } = e,
        i = O.A.get(n);
    return (0, l.jsx)(E.mP, {
        platformType: n,
        children: (0, l.jsxs)("div", {
            className: y.UD,
            children: [
                (0, l.jsx)("div", {
                    className: y.iU,
                    children: m.intl.format(m.t["6ig6i5"], { connectionName: i.name }),
                }),
                (0, l.jsx)(d.D, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, l.jsx)(u.$n, { className: y.HM, children: m.intl.string(m.t.flvacA) }),
                }),
            ],
        }),
    });
}

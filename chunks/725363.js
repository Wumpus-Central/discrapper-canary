n.d(a, { default: () => el });
var t = n(627968),
    l = n(64700),
    i = n(224640),
    r = n(20742),
    s = n(364522),
    d = n(430690),
    o = n(688810),
    c = n(208039),
    u = n(397400),
    _ = n(187549),
    m = n(18365),
    x = n(503698),
    g = n.n(x),
    p = n(17928),
    h = n(843282),
    f = n(990078),
    j = n(104510),
    b = n(661531),
    N = n(834730),
    v = n(289873),
    S = n(534514),
    E = n(290136),
    C = n(292666),
    I = n(939249),
    G = n(663417),
    k = n(975571),
    R = n(76843),
    T = n(665171),
    w = n(228366);
let A = {},
    M = [];
function O() {
    A = {};
}
class L extends p.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return A[e];
    }
    getRegionState() {
        return A;
    }
    getRegions() {
        return M;
    }
}
let P = new L(w.h, {
    LOGOUT: O,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: a, state: n } = e;
        A = { ...A, [a]: n };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: O,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: a } = e;
        M = a;
    },
});
var U = n(165655),
    V = n(752975),
    y = n(509790),
    K = n(225180),
    D = n(740950);
function H() {
    let { currentGame: e, planId: a } = (0, y.bv)(),
        n = (0, K.A)(e?.gameId, "cover");
    if (null == e) return null;
    let i = e?.plans.find((e) => e.id === a);
    return (0, t.jsxs)("div", {
        className: D.kL,
        children: [
            (0, t.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, t.jsxs)("div", {
                        className: D.N1,
                        children: [
                            (0, t.jsx)("img", { src: n ?? "", className: D.Sl, alt: e.name }),
                            (0, t.jsxs)("div", {
                                className: D.wx,
                                children: [
                                    (0, t.jsx)(S.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, t.jsx)(N.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: i?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != i &&
                        (0, t.jsx)("div", {
                            className: D.wL,
                            children: i.specifications.map((e, a) =>
                                (0, t.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: D._Y,
                                                children: [
                                                    (0, t.jsx)(S.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, t.jsx)(N.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            a !== (i?.specifications.length ?? 0) - 1 &&
                                                (0, t.jsx)("div", { className: D.yF }),
                                        ],
                                    },
                                    a,
                                ),
                            ),
                        }),
                    (0, t.jsx)("div", { className: D.UK, children: (0, t.jsx)(V.A, {}) }),
                ],
            }),
            (0, t.jsx)("div", { className: D.uV, children: (0, t.jsx)(U.T, { imageUrl: n ?? "" }) }),
        ],
    });
}
var F = n(548392),
    W = n(576709),
    z = n(985018);
let q = ["/", "\\\\"];
n(321073);
var Q = n(919481),
    B = n(390544);
let J = new Set([B.M.SLEEPING, B.M.OFFLINE, B.M.ONLINE]);
var Y = n(285286),
    X = n(800007),
    Z = n(652215);
function $(e) {
    let { plan: a, selected: n, className: l } = e;
    return null == a
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: g()(Q.NV, l),
                      children: [
                          (0, t.jsx)("span", { children: a.name }),
                          (0, t.jsxs)("div", {
                              className: Q._A,
                              children: [
                                  (0, t.jsx)(j._, { size: "xs", color: b.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, t.jsx)(N.E, {
                                      variant: "text-xs/medium",
                                      children: z.intl.format(W.default.kOMlHs, { boostCount: a.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !n && (0, t.jsx)("div", { className: Q.S6 }),
              ],
          });
}
function ee(e) {
    var a;
    let n,
        i,
        r,
        s,
        { region: d, selected: o, disabled: c, className: u } = e,
        { pingText: _, pingCircleStyle: m } =
            ((a = d.pingUrl),
            (n = (0, p.bG)([P], () => P.getRegionStateForPingUrl(a))),
            (i = l.useRef(null)),
            (r = l.useCallback(
                async (e) => {
                    if ("" === a) return;
                    let n = [],
                        t = !1;
                    try {
                        if (
                            (await new Promise((a, l) => {
                                let i = () => {
                                        e.readyState === WebSocket.OPEN && e.close();
                                    },
                                    r = setTimeout(() => {
                                        t || ((t = !0), i(), l(Error("WebSocket timeout")));
                                    }, 5e3);
                                (e.onopen = () => {
                                    if (e.readyState === WebSocket.OPEN)
                                        for (let a = 0; a < 3; a++) {
                                            let a = performance.now();
                                            e.send(a.toString());
                                        }
                                }),
                                    (e.onmessage = (e) => {
                                        if (t) return;
                                        let l = parseFloat(e.data);
                                        if (!isNaN(l)) {
                                            let e = performance.now(),
                                                s = Math.round(e - l);
                                            n.push(s), n.length >= 3 && ((t = !0), clearTimeout(r), i(), a());
                                        }
                                    }),
                                    (e.onerror = () => {
                                        t || ((t = !0), clearTimeout(r), i(), l(Error("WebSocket error")));
                                    }),
                                    (e.onclose = () => {
                                        t || ((t = !0), clearTimeout(r), l(Error("WebSocket closed")));
                                    });
                            }),
                            n.length > 0)
                        ) {
                            let e = Math.round(n.reduce((e, a) => e + a, 0) / n.length);
                            (0, T.QK)(a, { rtt: e, loading: !1, error: !1 });
                        } else throw Error("No successful pings");
                    } catch (e) {
                        (0, T.QK)(a, { rtt: null, loading: !1, error: !0 });
                    } finally {
                        i.current === e && (i.current = null);
                    }
                },
                [a, i],
            )),
            l.useEffect(
                () => () => {
                    null != i.current && (i.current.close(), (i.current = null));
                },
                [],
            ),
            (s = null != n),
            l.useEffect(() => {
                if ("" === a || s) return;
                let e = P.getRegionStateForPingUrl(a);
                if (e?.rtt != null || e?.loading === !0) return;
                (0, T.QK)(a, { rtt: null, loading: !0, error: !1 });
                let n = new WebSocket(`wss://${a}`);
                (i.current = n), r(n);
            }, [a, r, s]),
            {
                pingText: l.useMemo(
                    () => (null == n || n.loading ? "—" : n.error ? "Error" : null !== n.rtt ? `${n.rtt}ms` : "—"),
                    [n],
                ),
                pingCircleStyle: l.useMemo(() => {
                    if (null == n || n.loading) return Q.N5;
                    if (n.error) return Q.ZK;
                    if (null !== n.rtt)
                        if (n.rtt < 50) return Q.n5;
                        else if (n.rtt < 100) return Q.mM;
                        else if (n.rtt < 200) return Q.d9;
                        else return Q.Rg;
                }, [n]),
            });
    return null == d
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: g()(Q.NV, { [Q.r9]: c }, u),
                      children: [
                          (0, t.jsx)("span", { children: d.name }),
                          (0, t.jsx)("div", {
                              className: Q._A,
                              children: c
                                  ? (0, t.jsx)("span", { children: z.intl.string(W.default.aCyHe2) })
                                  : "" !== d.pingUrl
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)("div", { className: g()(Q.Jg, m) }),
                                              (0, t.jsx)(N.E, { variant: "text-xs/medium", children: _ }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !o && (0, t.jsx)("div", { className: Q.S6 }),
              ],
          });
}
function ea() {
    let e,
        {
            guildId: a,
            currentGame: n,
            regionId: i,
            gameServerInstance: r,
            setRegionId: s,
            name: d,
            setName: o,
            planId: _,
            setPlanId: m,
            planCost: x,
            stepLoading: g,
            error: j,
            gameProvider: b,
        } = (0, y.bv)();
    (0, u.SX)(a, r?.id, null == r ? "create" : "edit"),
        l.useEffect(() => {
            (0, T.Jr)(a);
        }, [a]);
    let w = (0, p.bG)([P], () => P.getRegions()),
        A = (0, p.bG)([P], () => P.getRegionState()),
        M = l.useMemo(
            () =>
                w
                    .sort((e, a) => {
                        let n, t;
                        return (
                            (n = A[e.pingUrl]),
                            (t = A[a.pingUrl]),
                            n?.rtt != null && t?.rtt != null
                                ? n.rtt - t.rtt
                                : n?.rtt != null && t?.rtt == null
                                  ? -1
                                  : n?.rtt == null && t?.rtt != null
                                    ? 1
                                    : n?.loading && !t?.loading
                                      ? -1
                                      : (!n?.loading && t?.loading) || (n?.error && !t?.error)
                                        ? 1
                                        : !n?.error && t?.error
                                          ? -1
                                          : 0
                        );
                    })
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [A, w],
        ),
        O = l.useMemo(() => w.some((e) => "" !== e.pingUrl), [w]),
        L = l.useMemo(() => n?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [n]),
        U = (function () {
            let { regionId: e, gameServerInstance: a, name: n, planId: t } = (0, y.bv)(),
                l = "" !== n && "" !== e && void 0 !== t;
            return null != a ? l && (a.name !== n || a.regionId !== e || a.planId !== t) : l;
        })(),
        { isValid: V, errors: K } = {
            isValid: !(e = l.useMemo(() => q.some((e) => (d ?? "").includes(e)), [d])),
            errors: {
                name: e ? z.intl.formatToPlainString(W.default.jYZD44, { forbiddenCharacters: q.join(", ") }) : void 0,
            },
        },
        D = null != r,
        B = null == r || (null != r.status && J.has(r.status)),
        ea = (0, Y.A)(b),
        en = null != b && null != X.eh[b] ? X.eh[b] : "";
    return null == n
        ? (0, t.jsx)("div", { className: Q.dc, children: (0, t.jsx)(v.y, { type: v.t.SPINNING_CIRCLE }) })
        : (0, t.jsxs)("div", {
              className: Q.kL,
              children: [
                  (0, t.jsxs)("div", {
                      className: Q.hQ,
                      children: [
                          (0, t.jsxs)("div", {
                              className: Q.V1,
                              children: [
                                  (0, t.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, t.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default.rOMEZd),
                                                  }),
                                                  (0, t.jsx)(f.m, {
                                                      position: "top",
                                                      text: z.intl.string(W.default.THJY1n),
                                                      children: (0, t.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, t.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, t.jsx)(C.k, {
                                              value: d,
                                              onChange: o,
                                              placeholder: z.intl.string(W.default.ElVYr3),
                                              maxLength: X.XF,
                                              disabled: g || !B,
                                              error: K.name,
                                          }),
                                      ],
                                  }),
                                  (0, t.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, t.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default.nB5OZ4),
                                                  }),
                                                  (0, t.jsx)(f.m, {
                                                      position: "top",
                                                      text: z.intl.string(
                                                          null != r ? W.default["7mX0gE"] : W.default["61N+P6"],
                                                      ),
                                                      children: (0, t.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, t.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !D &&
                                                      O &&
                                                      (0, t.jsx)("div", {
                                                          className: Q.Ow,
                                                          children: (0, t.jsx)(f.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: z.intl.string(W.default.kGkE7a),
                                                              children: (0, t.jsx)(I.D, {
                                                                  className: Q.GI,
                                                                  onClick: () => (0, T.KH)(),
                                                                  children: (0, t.jsx)(G.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          D
                                              ? (0, t.jsx)(C.k, {
                                                    value: r?.regionName,
                                                    disabled: !0,
                                                    placeholder: z.intl.string(W.default["k+RTIm"]),
                                                })
                                              : (0, t.jsx)(h.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === i,
                                                    isDisabled: g || !B,
                                                    options: M,
                                                    optionClassName: Q.uK,
                                                    select: (e) => s(e.id),
                                                    placeholder: z.intl.string(W.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, t.jsx)(ee, {
                                                            region: e.value,
                                                            selected: e.value.id === i,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, t.jsx)(ee, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === i,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: Q.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, t.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, t.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default["K+zMYp"]),
                                                  }),
                                                  (0, t.jsx)(f.m, {
                                                      position: "top",
                                                      text: z.intl.string(W.default["/wD5IM"]),
                                                      children: (0, t.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, t.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, t.jsx)(h.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === _,
                                              isDisabled: g || !B,
                                              options: L,
                                              optionClassName: Q.uK,
                                              select: (e) => m(e.id),
                                              placeholder: z.intl.string(W.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, t.jsx)($, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === _,
                                                      className: Q.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, t.jsx)($, { plan: e.value, selected: e.value.id === _ }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, t.jsx)("div", { className: Q.sA, children: (0, t.jsx)(H, {}) }),
                      ],
                  }),
                  null != r &&
                      0 !== x &&
                      r.planId !== _ &&
                      (0, t.jsx)(c.A, {
                          className: Q.et,
                          children: (0, t.jsx)(N.E, {
                              variant: "text-xs/medium",
                              children:
                                  x < 0
                                      ? z.intl.format(W.default.SorKas, { boostCount: Math.abs(x) })
                                      : z.intl.format(W.default.n2wpym, { boostCount: x }),
                          }),
                      }),
                  !B &&
                      (0, t.jsx)(c.A, {
                          className: Q.et,
                          look: c.k.WARNING,
                          children: (0, t.jsx)(N.E, {
                              variant: "text-xs/medium",
                              children: z.intl.string(W.default["/JNPWb"]),
                          }),
                      }),
                  n?.early_access === !0 &&
                      !D &&
                      (0, t.jsx)(c.A, {
                          className: Q.et,
                          look: c.k.INFO,
                          children: (0, t.jsx)(N.E, {
                              variant: "text-xs/medium",
                              children: z.intl.format(W.default.TnoBGX, { gameName: n.name }),
                          }),
                      }),
                  (0, t.jsx)(N.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != b &&
                          z.intl.format(D ? W.default.num0a6 : W.default.p5KZDr, {
                              provider: ea,
                              termsOfServiceUrl: () => (0, R.h)({ href: en }),
                              helpCenterUrl: k.A.getArticleURL(Z.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != j &&
                      (0, t.jsx)(N.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: j }),
                  (0, t.jsxs)(F.N4, {
                      step: X.HS.SERVER_SETTINGS,
                      className: Q.xQ,
                      children: [(0, t.jsx)(F.AI, {}), (0, t.jsx)(F.cp, { disabled: !U || !V })],
                  }),
              ],
          });
}
var en = n(460790);
function et(e) {
    let { step: a, setFooterNode: n } = (0, y.bv)(),
        l = (0, _.U)("GameServerSetupModal"),
        { title: o, subtitle: u } = (function (e) {
            switch (e) {
                case X.HS.SELECT_GAME:
                    return { title: z.intl.string(W.default["3vWDMz"]), subtitle: z.intl.string(W.default.Az5bjs) };
                case X.HS.SERVER_SETTINGS:
                    return { title: z.intl.string(W.default.RLGW9z) };
            }
        })(a);
    return (0, t.jsxs)(i.d, {
        ...e,
        size: "lg",
        children: [
            (0, t.jsx)(r.rQ, { title: o, subtitle: u }),
            l &&
                (0, t.jsx)("div", {
                    className: en.M,
                    children: (0, t.jsx)(c.A, { look: c.k.WARNING, children: z.intl.format(W.default.XzXjK2, {}) }),
                }),
            (0, t.jsx)(s.Ip, {
                className: en.j,
                style: { width: X.ST },
                children: (0, t.jsx)("div", {
                    style: { padding: X.by },
                    children: (0, t.jsxs)(d.t, {
                        width: X.U$,
                        activeSlide: a,
                        children: [
                            (0, t.jsx)(d.q, { id: X.HS.SELECT_GAME, children: (0, t.jsx)(m.A, {}) }, X.HS.SELECT_GAME),
                            (0, t.jsx)(
                                d.q,
                                { id: X.HS.SERVER_SETTINGS, children: (0, t.jsx)(ea, {}) },
                                X.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, t.jsx)("div", { ref: (e) => n(e) }),
        ],
    });
}
function el(e) {
    let { analyticsLocations: a } = (0, o.Ay)();
    return (
        (0, u.wN)(e.guildId, a, e.analyticsLocation),
        (0, t.jsx)(o.f5, { value: a, children: (0, t.jsx)(y.mf, { ...e, children: (0, t.jsx)(et, { ...e }) }) })
    );
}

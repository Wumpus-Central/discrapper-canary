n.d(t, { default: () => er });
var l = n(627968),
    r = n(64700),
    a = n(224640),
    i = n(20742),
    s = n(364522),
    d = n(430690),
    o = n(688810),
    c = n(208039),
    u = n(397400),
    m = n(187549),
    x = n(18365),
    _ = n(503698),
    g = n.n(_),
    h = n(17928),
    f = n(843282),
    j = n(990078),
    p = n(104510),
    N = n(661531),
    v = n(834730),
    b = n(289873),
    S = n(534514),
    E = n(290136),
    C = n(292666),
    I = n(939249),
    G = n(663417),
    T = n(975571),
    R = n(76843),
    k = n(665171),
    A = n(228366);
let w = {},
    M = [];
function O() {
    w = {};
}
class U extends h.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return w[e];
    }
    getRegionState() {
        return w;
    }
    getRegions() {
        return M;
    }
}
let L = new U(A.h, {
    LOGOUT: O,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: t, state: n } = e;
        w = { ...w, [t]: n };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: O,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: t } = e;
        M = t;
    },
});
var y = n(165655),
    V = n(752975),
    K = n(509790),
    P = n(225180),
    F = n(740950);
function H() {
    let { currentGame: e, planId: t } = (0, K.bv)(),
        n = (0, P.A)(e?.gameId, "cover");
    if (null == e) return null;
    let a = e?.plans.find((e) => e.id === t);
    return (0, l.jsxs)("div", {
        className: F.kL,
        children: [
            (0, l.jsxs)("div", {
                className: F.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.N1,
                        children: [
                            (0, l.jsx)("img", { src: n ?? "", className: F.Sl, alt: e.name }),
                            (0, l.jsxs)("div", {
                                className: F.wx,
                                children: [
                                    (0, l.jsx)(S.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, l.jsx)(v.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: a?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != a &&
                        (0, l.jsx)("div", {
                            className: F.wL,
                            children: a.specifications.map((e, t) =>
                                (0, l.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: F._Y,
                                                children: [
                                                    (0, l.jsx)(S.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, l.jsx)(v.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            t !== (a?.specifications.length ?? 0) - 1 &&
                                                (0, l.jsx)("div", { className: F.yF }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                    (0, l.jsx)("div", { className: F.UK, children: (0, l.jsx)(V.A, {}) }),
                ],
            }),
            (0, l.jsx)("div", { className: F.uV, children: (0, l.jsx)(y.T, { imageUrl: n ?? "" }) }),
        ],
    });
}
var D = n(548392),
    W = n(576709),
    z = n(985018);
let B = ["/", "\\\\"];
n(321073);
var Q = n(919481),
    q = n(390544);
let Y = new Set([q.M.SLEEPING, q.M.OFFLINE, q.M.ONLINE]);
var J = n(285286),
    X = n(800007),
    Z = n(652215);
function $(e) {
    let { plan: t, selected: n, className: r } = e;
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: g()(Q.NV, r),
                      children: [
                          (0, l.jsx)("span", { children: t.name }),
                          (0, l.jsxs)("div", {
                              className: Q._A,
                              children: [
                                  (0, l.jsx)(p._, { size: "xs", color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      children: z.intl.format(W.default.kOMlHs, { boostCount: t.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !n && (0, l.jsx)("div", { className: Q.S6 }),
              ],
          });
}
function ee(e) {
    var t;
    let n,
        a,
        i,
        s,
        { region: d, selected: o, disabled: c, className: u } = e,
        { pingText: m, pingCircleStyle: x } =
            ((t = d.pingUrl),
            (n = (0, h.bG)([L], () => L.getRegionStateForPingUrl(t))),
            (a = r.useRef(null)),
            (i = r.useCallback(
                async (e) => {
                    if ("" === t) return;
                    let n = [],
                        l = !1;
                    try {
                        if (
                            (await new Promise((t, r) => {
                                let a = () => {
                                        e.readyState === WebSocket.OPEN && e.close();
                                    },
                                    i = setTimeout(() => {
                                        l || ((l = !0), a(), r(Error("WebSocket timeout")));
                                    }, 5e3);
                                (e.onopen = () => {
                                    if (e.readyState === WebSocket.OPEN)
                                        for (let t = 0; t < 3; t++) {
                                            let t = performance.now();
                                            e.send(t.toString());
                                        }
                                }),
                                    (e.onmessage = (e) => {
                                        if (l) return;
                                        let r = parseFloat(e.data);
                                        if (!isNaN(r)) {
                                            let e = performance.now(),
                                                s = Math.round(e - r);
                                            n.push(s), n.length >= 3 && ((l = !0), clearTimeout(i), a(), t());
                                        }
                                    }),
                                    (e.onerror = () => {
                                        l || ((l = !0), clearTimeout(i), a(), r(Error("WebSocket error")));
                                    }),
                                    (e.onclose = () => {
                                        l || ((l = !0), clearTimeout(i), r(Error("WebSocket closed")));
                                    });
                            }),
                            n.length > 0)
                        ) {
                            let e = Math.round(n.reduce((e, t) => e + t, 0) / n.length);
                            (0, k.QK)(t, { rtt: e, loading: !1, error: !1 });
                        } else throw Error("No successful pings");
                    } catch (e) {
                        (0, k.QK)(t, { rtt: null, loading: !1, error: !0 });
                    } finally {
                        a.current === e && (a.current = null);
                    }
                },
                [t, a],
            )),
            r.useEffect(
                () => () => {
                    null != a.current && (a.current.close(), (a.current = null));
                },
                [],
            ),
            (s = null != n),
            r.useEffect(() => {
                if ("" === t || s) return;
                let e = L.getRegionStateForPingUrl(t);
                if (e?.rtt != null || e?.loading === !0) return;
                (0, k.QK)(t, { rtt: null, loading: !0, error: !1 });
                let n = new WebSocket(`wss://${t}`);
                (a.current = n), i(n);
            }, [t, i, s]),
            {
                pingText: r.useMemo(
                    () => (null == n || n.loading ? "—" : n.error ? "Error" : null !== n.rtt ? `${n.rtt}ms` : "—"),
                    [n],
                ),
                pingCircleStyle: r.useMemo(() => {
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
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: g()(Q.NV, { [Q.r9]: c }, u),
                      children: [
                          (0, l.jsx)("span", { children: d.name }),
                          (0, l.jsx)("div", {
                              className: Q._A,
                              children: c
                                  ? (0, l.jsx)("span", { children: z.intl.string(W.default.aCyHe2) })
                                  : "" !== d.pingUrl
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: g()(Q.Jg, x) }),
                                              (0, l.jsx)(v.E, { variant: "text-xs/medium", children: m }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !o && (0, l.jsx)("div", { className: Q.S6 }),
              ],
          });
}
function et() {
    let e,
        {
            guildId: t,
            currentGame: n,
            regionId: a,
            gameServerInstance: i,
            setRegionId: s,
            name: d,
            setName: o,
            planId: m,
            setPlanId: x,
            planCost: _,
            stepLoading: g,
            error: p,
            gameProvider: N,
        } = (0, K.bv)();
    (0, u.SX)(t, i?.id, null == i ? "create" : "edit"),
        r.useEffect(() => {
            (0, k.Jr)(t);
        }, [t]);
    let A = (0, h.bG)([L], () => L.getRegions()),
        w = (0, h.bG)([L], () => L.getRegionState()),
        M = r.useMemo(
            () =>
                A.sort((e, t) => {
                    let n, l;
                    return (
                        (n = w[e.pingUrl]),
                        (l = w[t.pingUrl]),
                        n?.rtt != null && l?.rtt != null
                            ? n.rtt - l.rtt
                            : n?.rtt != null && l?.rtt == null
                              ? -1
                              : n?.rtt == null && l?.rtt != null
                                ? 1
                                : n?.loading && !l?.loading
                                  ? -1
                                  : (!n?.loading && l?.loading) || (n?.error && !l?.error)
                                    ? 1
                                    : !n?.error && l?.error
                                      ? -1
                                      : 0
                    );
                }).map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [w, A],
        ),
        O = r.useMemo(() => A.some((e) => "" !== e.pingUrl), [A]),
        U = r.useMemo(() => n?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [n]),
        y = (function () {
            let { regionId: e, gameServerInstance: t, name: n, planId: l } = (0, K.bv)(),
                r = "" !== n && "" !== e && void 0 !== l;
            return null != t ? r && (t.name !== n || t.regionId !== e || t.planId !== l) : r;
        })(),
        { isValid: V, errors: P } = {
            isValid: !(e = r.useMemo(() => B.some((e) => (d ?? "").includes(e)), [d])),
            errors: {
                name: e ? z.intl.formatToPlainString(W.default.jYZD44, { forbiddenCharacters: B.join(", ") }) : void 0,
            },
        },
        F = null != i,
        q = null == i || (null != i.status && Y.has(i.status)),
        et = (0, J.A)(N),
        en = null != N && null != X.eh[N] ? X.eh[N] : "";
    return null == n
        ? (0, l.jsx)("div", { className: Q.dc, children: (0, l.jsx)(b.y, { type: b.t.SPINNING_CIRCLE }) })
        : (0, l.jsxs)("div", {
              className: Q.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: Q.hQ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: Q.V1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, l.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default.rOMEZd),
                                                  }),
                                                  (0, l.jsx)(j.m, {
                                                      position: "top",
                                                      text: z.intl.string(W.default.THJY1n),
                                                      children: (0, l.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(C.k, {
                                              value: d,
                                              onChange: o,
                                              placeholder: z.intl.string(W.default.ElVYr3),
                                              maxLength: X.XF,
                                              disabled: g || !q,
                                              error: P.name,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, l.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default.nB5OZ4),
                                                  }),
                                                  (0, l.jsx)(j.m, {
                                                      position: "top",
                                                      text: z.intl.string(
                                                          null != i ? W.default["7mX0gE"] : W.default["61N+P6"],
                                                      ),
                                                      children: (0, l.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !F &&
                                                      O &&
                                                      (0, l.jsx)("div", {
                                                          className: Q.Ow,
                                                          children: (0, l.jsx)(j.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: z.intl.string(W.default.kGkE7a),
                                                              children: (0, l.jsx)(I.D, {
                                                                  className: Q.GI,
                                                                  onClick: () => (0, k.KH)(),
                                                                  children: (0, l.jsx)(G.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          F
                                              ? (0, l.jsx)(C.k, {
                                                    value: i?.regionName,
                                                    disabled: !0,
                                                    placeholder: z.intl.string(W.default["k+RTIm"]),
                                                })
                                              : (0, l.jsx)(f.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === a,
                                                    isDisabled: g || !q,
                                                    options: M,
                                                    optionClassName: Q.uK,
                                                    select: (e) => s(e.id),
                                                    placeholder: z.intl.string(W.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, l.jsx)(ee, {
                                                            region: e.value,
                                                            selected: e.value.id === a,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, l.jsx)(ee, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === a,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: Q.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: Q.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: Q.bV,
                                              children: [
                                                  (0, l.jsx)(S.D, {
                                                      className: Q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: z.intl.string(W.default["K+zMYp"]),
                                                  }),
                                                  (0, l.jsx)(j.m, {
                                                      position: "top",
                                                      text: z.intl.string(W.default["/wD5IM"]),
                                                      children: (0, l.jsx)("span", {
                                                          className: Q.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(E.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(f.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === m,
                                              isDisabled: g || !q,
                                              options: U,
                                              optionClassName: Q.uK,
                                              select: (e) => x(e.id),
                                              placeholder: z.intl.string(W.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, l.jsx)($, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === m,
                                                      className: Q.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, l.jsx)($, { plan: e.value, selected: e.value.id === m }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", { className: Q.sA, children: (0, l.jsx)(H, {}) }),
                      ],
                  }),
                  null != i &&
                      0 !== _ &&
                      i.planId !== m &&
                      (0, l.jsx)(c.A, {
                          className: Q.et,
                          children: (0, l.jsx)(v.E, {
                              variant: "text-xs/medium",
                              children:
                                  _ < 0
                                      ? z.intl.format(W.default.SorKas, { boostCount: Math.abs(_) })
                                      : z.intl.format(W.default.n2wpym, { boostCount: _ }),
                          }),
                      }),
                  !q &&
                      (0, l.jsx)(c.A, {
                          className: Q.et,
                          look: c.k.WARNING,
                          children: (0, l.jsx)(v.E, {
                              variant: "text-xs/medium",
                              children: z.intl.string(W.default["/JNPWb"]),
                          }),
                      }),
                  n?.early_access === !0 &&
                      !F &&
                      (0, l.jsx)(c.A, {
                          className: Q.et,
                          look: c.k.INFO,
                          children: (0, l.jsx)(v.E, {
                              variant: "text-xs/medium",
                              children: z.intl.format(W.default.TnoBGX, { gameName: n.name }),
                          }),
                      }),
                  (0, l.jsx)(v.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != N &&
                          z.intl.format(F ? W.default.num0a6 : W.default.p5KZDr, {
                              provider: et,
                              termsOfServiceUrl: () => (0, R.h)({ href: en }),
                              helpCenterUrl: T.A.getArticleURL(Z.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != p &&
                      (0, l.jsx)(v.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: p }),
                  (0, l.jsxs)(D.N4, {
                      step: X.HS.SERVER_SETTINGS,
                      className: Q.xQ,
                      children: [(0, l.jsx)(D.AI, {}), (0, l.jsx)(D.cp, { disabled: !y || !V })],
                  }),
              ],
          });
}
var en = n(460790);
function el(e) {
    let { step: t, setFooterNode: n } = (0, K.bv)(),
        r = (0, m.U)("GameServerSetupModal"),
        { title: o, subtitle: u } = (function (e) {
            switch (e) {
                case X.HS.SELECT_GAME:
                    return { title: z.intl.string(W.default["3vWDMz"]), subtitle: z.intl.string(W.default.Az5bjs) };
                case X.HS.SERVER_SETTINGS:
                    return { title: z.intl.string(W.default.RLGW9z) };
            }
        })(t);
    return (0, l.jsxs)(a.d, {
        ...e,
        size: "lg",
        children: [
            (0, l.jsx)(i.rQ, { title: o, subtitle: u }),
            r &&
                (0, l.jsx)("div", {
                    className: en.M,
                    children: (0, l.jsx)(c.A, { look: c.k.WARNING, children: z.intl.format(W.default.XzXjK2, {}) }),
                }),
            (0, l.jsx)(s.Ip, {
                className: en.j,
                style: { width: X.ST },
                children: (0, l.jsx)("div", {
                    style: { padding: X.by },
                    children: (0, l.jsxs)(d.t, {
                        width: X.U$,
                        activeSlide: t,
                        children: [
                            (0, l.jsx)(d.q, { id: X.HS.SELECT_GAME, children: (0, l.jsx)(x.A, {}) }, X.HS.SELECT_GAME),
                            (0, l.jsx)(
                                d.q,
                                { id: X.HS.SERVER_SETTINGS, children: (0, l.jsx)(et, {}) },
                                X.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)("div", { ref: (e) => n(e) }),
        ],
    });
}
function er(e) {
    let { analyticsLocations: t } = (0, o.Ay)();
    return (
        (0, u.wN)(e.guildId, t, e.analyticsLocation),
        (0, l.jsx)(o.f5, { value: t, children: (0, l.jsx)(K.mf, { ...e, children: (0, l.jsx)(el, { ...e }) }) })
    );
}

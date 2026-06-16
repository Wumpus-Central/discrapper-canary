t.d(l, { default: () => en });
var s = t(627968),
    n = t(64700),
    r = t(224640),
    i = t(20742),
    a = t(364522),
    d = t(430690),
    c = t(688810),
    o = t(546385),
    u = t(397400),
    m = t(187549),
    x = t(18365),
    h = t(503698),
    j = t.n(h),
    g = t(17928),
    N = t(843282),
    f = t(990078),
    v = t(104510),
    p = t(661531),
    E = t(834730),
    S = t(289873),
    b = t(534514),
    I = t(290136),
    R = t(292666),
    G = t(939249),
    T = t(663417),
    _ = t(975571),
    A = t(123917),
    M = t(396748),
    k = t(228366);
let C = {},
    w = [];
function O() {
    C = {};
}
class U extends g.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return C[e];
    }
    getRegionState() {
        return C;
    }
    getRegions() {
        return w;
    }
}
let V = new U(k.h, {
    LOGOUT: O,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: l, state: t } = e;
        C = { ...C, [l]: t };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: O,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: l } = e;
        w = l;
    },
});
var y = t(165655),
    L = t(752975),
    P = t(509790),
    K = t(225180),
    z = t(740950);
function D() {
    let { currentGame: e, planId: l } = (0, P.bv)(),
        t = (0, K.A)(e?.gameId, "cover");
    if (null == e) return null;
    let r = e?.plans.find((e) => e.id === l);
    return (0, s.jsxs)("div", {
        className: z.kL,
        children: [
            (0, s.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: z.N1,
                        children: [
                            (0, s.jsx)("img", { src: t ?? "", className: z.Sl, alt: e.name }),
                            (0, s.jsxs)("div", {
                                className: z.wx,
                                children: [
                                    (0, s.jsx)(b.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, s.jsx)(E.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: r?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != r &&
                        (0, s.jsx)("div", {
                            className: z.wL,
                            children: r.specifications.map((e, l) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: z._Y,
                                                children: [
                                                    (0, s.jsx)(b.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, s.jsx)(E.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            l !== (r?.specifications.length ?? 0) - 1 &&
                                                (0, s.jsx)("div", { className: z.yF }),
                                        ],
                                    },
                                    l,
                                ),
                            ),
                        }),
                    (0, s.jsx)("div", { className: z.UK, children: (0, s.jsx)(L.A, {}) }),
                ],
            }),
            (0, s.jsx)("div", { className: z.uV, children: (0, s.jsx)(y.T, { imageUrl: t ?? "" }) }),
        ],
    });
}
var F = t(548392),
    H = t(576709),
    W = t(375708);
let Q = ["/", "\\\\"];
t(321073);
var X = t(919481),
    J = t(390544);
let Y = new Set([J.M.SLEEPING, J.M.OFFLINE, J.M.ONLINE]);
var Z = t(285286),
    q = t(800007),
    B = t(652215);
function $(e) {
    let { plan: l, selected: t, className: n } = e;
    return null == l
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: j()(X.NV, n),
                      children: [
                          (0, s.jsx)("span", { children: l.name }),
                          (0, s.jsxs)("div", {
                              className: X._A,
                              children: [
                                  (0, s.jsx)(v._, { size: "xs", color: p.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, s.jsx)(E.E, {
                                      variant: "text-xs/medium",
                                      children: W.intl.format(H.default.kOMlHs, { boostCount: l.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, s.jsx)("div", { className: X.S6 }),
              ],
          });
}
function ee(e) {
    var l;
    let t,
        r,
        i,
        a,
        { region: d, selected: c, disabled: o, className: u } = e,
        { pingText: m, pingCircleStyle: x } =
            ((l = d.pingUrl),
            (t = (0, g.bG)([V], () => V.getRegionStateForPingUrl(l))),
            (r = n.useRef(null)),
            (i = n.useCallback(
                async (e) => {
                    if ("" === l) return;
                    let t = [],
                        s = !1;
                    try {
                        if (
                            (await new Promise((l, n) => {
                                let r = () => {
                                        e.readyState === WebSocket.OPEN && e.close();
                                    },
                                    i = setTimeout(() => {
                                        s || ((s = !0), r(), n(Error("WebSocket timeout")));
                                    }, 5e3);
                                (e.onopen = () => {
                                    if (e.readyState === WebSocket.OPEN)
                                        for (let l = 0; l < 3; l++) {
                                            let l = performance.now();
                                            e.send(l.toString());
                                        }
                                }),
                                    (e.onmessage = (e) => {
                                        if (s) return;
                                        let n = parseFloat(e.data);
                                        if (!isNaN(n)) {
                                            let e = performance.now(),
                                                a = Math.round(e - n);
                                            t.push(a), t.length >= 3 && ((s = !0), clearTimeout(i), r(), l());
                                        }
                                    }),
                                    (e.onerror = () => {
                                        s || ((s = !0), clearTimeout(i), r(), n(Error("WebSocket error")));
                                    }),
                                    (e.onclose = () => {
                                        s || ((s = !0), clearTimeout(i), n(Error("WebSocket closed")));
                                    });
                            }),
                            t.length > 0)
                        ) {
                            let e = Math.round(t.reduce((e, l) => e + l, 0) / t.length);
                            (0, M.QK)(l, { rtt: e, loading: !1, error: !1 });
                        } else throw Error("No successful pings");
                    } catch (e) {
                        (0, M.QK)(l, { rtt: null, loading: !1, error: !0 });
                    } finally {
                        r.current === e && (r.current = null);
                    }
                },
                [l, r],
            )),
            n.useEffect(
                () => () => {
                    null != r.current && (r.current.close(), (r.current = null));
                },
                [],
            ),
            (a = null != t),
            n.useEffect(() => {
                if ("" === l || a) return;
                let e = V.getRegionStateForPingUrl(l);
                if (e?.rtt != null || e?.loading === !0) return;
                (0, M.QK)(l, { rtt: null, loading: !0, error: !1 });
                let t = new WebSocket(`wss://${l}`);
                (r.current = t), i(t);
            }, [l, i, a]),
            {
                pingText: n.useMemo(
                    () =>
                        null == t || t.loading
                            ? "\u2014"
                            : t.error
                              ? "Error"
                              : null !== t.rtt
                                ? `${t.rtt}ms`
                                : "\u2014",
                    [t],
                ),
                pingCircleStyle: n.useMemo(() => {
                    if (null == t || t.loading) return X.N5;
                    if (t.error) return X.ZK;
                    if (null !== t.rtt)
                        if (t.rtt < 50) return X.n5;
                        else if (t.rtt < 100) return X.mM;
                        else if (t.rtt < 200) return X.d9;
                        else return X.Rg;
                }, [t]),
            });
    return null == d
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: j()(X.NV, { [X.r9]: o }, u),
                      children: [
                          (0, s.jsx)("span", { children: d.name }),
                          (0, s.jsx)("div", {
                              className: X._A,
                              children: o
                                  ? (0, s.jsx)("span", { children: W.intl.string(H.default.aCyHe2) })
                                  : "" !== d.pingUrl
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", { className: j()(X.Jg, x) }),
                                              (0, s.jsx)(E.E, { variant: "text-xs/medium", children: m }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !c && (0, s.jsx)("div", { className: X.S6 }),
              ],
          });
}
function el() {
    let e,
        {
            guildId: l,
            currentGame: t,
            regionId: r,
            gameServerInstance: i,
            setRegionId: a,
            name: d,
            setName: c,
            planId: m,
            setPlanId: x,
            planCost: h,
            stepLoading: j,
            error: v,
            gameProvider: p,
        } = (0, P.bv)();
    (0, u.SX)(l, i?.id, null == i ? "create" : "edit"),
        n.useEffect(() => {
            (0, M.Jr)(l);
        }, [l]);
    let k = (0, g.bG)([V], () => V.getRegions()),
        C = (0, g.bG)([V], () => V.getRegionState()),
        w = n.useMemo(
            () =>
                k
                    .sort((e, l) => {
                        let t, s;
                        return (
                            (t = C[e.pingUrl]),
                            (s = C[l.pingUrl]),
                            t?.rtt != null && s?.rtt != null
                                ? t.rtt - s.rtt
                                : t?.rtt != null && s?.rtt == null
                                  ? -1
                                  : t?.rtt == null && s?.rtt != null
                                    ? 1
                                    : t?.loading && !s?.loading
                                      ? -1
                                      : (!t?.loading && s?.loading) || (t?.error && !s?.error)
                                        ? 1
                                        : !t?.error && s?.error
                                          ? -1
                                          : 0
                        );
                    })
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [C, k],
        ),
        O = n.useMemo(() => k.some((e) => "" !== e.pingUrl), [k]),
        U = n.useMemo(() => t?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [t]),
        y = (function () {
            let { regionId: e, gameServerInstance: l, name: t, planId: s } = (0, P.bv)(),
                n = "" !== t && "" !== e && void 0 !== s;
            return null != l ? n && (l.name !== t || l.regionId !== e || l.planId !== s) : n;
        })(),
        { isValid: L, errors: K } = {
            isValid: !(e = n.useMemo(() => Q.some((e) => (d ?? "").includes(e)), [d])),
            errors: {
                name: e ? W.intl.formatToPlainString(H.default.jYZD44, { forbiddenCharacters: Q.join(", ") }) : void 0,
            },
        },
        z = null != i,
        J = null == i || (null != i.status && Y.has(i.status)),
        el = (0, Z.A)(p),
        et = null != p && null != q.eh[p] ? q.eh[p] : "";
    return null == t
        ? (0, s.jsx)("div", { className: X.dc, children: (0, s.jsx)(S.y, { type: S.t.SPINNING_CIRCLE }) })
        : (0, s.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: X.hQ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: X.V1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, s.jsx)(b.D, {
                                                      className: X.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: W.intl.string(H.default.rOMEZd),
                                                  }),
                                                  (0, s.jsx)(f.m, {
                                                      position: "top",
                                                      text: W.intl.string(H.default.THJY1n),
                                                      children: (0, s.jsx)("span", {
                                                          className: X.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(R.k, {
                                              value: d,
                                              onChange: c,
                                              placeholder: W.intl.string(H.default.ElVYr3),
                                              maxLength: q.XF,
                                              disabled: j || !J,
                                              error: K.name,
                                          }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, s.jsx)(b.D, {
                                                      className: X.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: W.intl.string(H.default.nB5OZ4),
                                                  }),
                                                  (0, s.jsx)(f.m, {
                                                      position: "top",
                                                      text: W.intl.string(
                                                          null != i ? H.default["7mX0gE"] : H.default["61N+P6"],
                                                      ),
                                                      children: (0, s.jsx)("span", {
                                                          className: X.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !z &&
                                                      O &&
                                                      (0, s.jsx)("div", {
                                                          className: X.Ow,
                                                          children: (0, s.jsx)(f.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: W.intl.string(H.default.kGkE7a),
                                                              children: (0, s.jsx)(G.D, {
                                                                  className: X.GI,
                                                                  onClick: () => (0, M.KH)(),
                                                                  children: (0, s.jsx)(T.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          z
                                              ? (0, s.jsx)(R.k, {
                                                    value: i?.regionName,
                                                    disabled: !0,
                                                    placeholder: W.intl.string(H.default["k+RTIm"]),
                                                })
                                              : (0, s.jsx)(N.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === r,
                                                    isDisabled: j || !J,
                                                    options: w,
                                                    optionClassName: X.uK,
                                                    select: (e) => a(e.id),
                                                    placeholder: W.intl.string(H.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, s.jsx)(ee, {
                                                            region: e.value,
                                                            selected: e.value.id === r,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, s.jsx)(ee, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === r,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: X.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, s.jsx)(b.D, {
                                                      className: X.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: W.intl.string(H.default["K+zMYp"]),
                                                  }),
                                                  (0, s.jsx)(f.m, {
                                                      position: "top",
                                                      text: W.intl.string(H.default["/wD5IM"]),
                                                      children: (0, s.jsx)("span", {
                                                          className: X.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(N.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === m,
                                              isDisabled: j || !J,
                                              options: U,
                                              optionClassName: X.uK,
                                              select: (e) => x(e.id),
                                              placeholder: W.intl.string(H.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, s.jsx)($, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === m,
                                                      className: X.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, s.jsx)($, { plan: e.value, selected: e.value.id === m }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", { className: X.sA, children: (0, s.jsx)(D, {}) }),
                      ],
                  }),
                  null != i &&
                      0 !== h &&
                      i.planId !== m &&
                      (0, s.jsx)(o.A, {
                          className: X.et,
                          children: (0, s.jsx)(E.E, {
                              variant: "text-xs/medium",
                              children:
                                  h < 0
                                      ? W.intl.format(H.default.SorKas, { boostCount: Math.abs(h) })
                                      : W.intl.format(H.default.n2wpym, { boostCount: h }),
                          }),
                      }),
                  !J &&
                      (0, s.jsx)(o.A, {
                          className: X.et,
                          look: o.k.WARNING,
                          children: (0, s.jsx)(E.E, {
                              variant: "text-xs/medium",
                              children: W.intl.string(H.default["/JNPWb"]),
                          }),
                      }),
                  t?.early_access === !0 &&
                      !z &&
                      (0, s.jsx)(o.A, {
                          className: X.et,
                          look: o.k.INFO,
                          children: (0, s.jsx)(E.E, {
                              variant: "text-xs/medium",
                              children: W.intl.format(H.default.TnoBGX, { gameName: t.name }),
                          }),
                      }),
                  (0, s.jsx)(E.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != p &&
                          W.intl.format(z ? H.default.num0a6 : H.default.p5KZDr, {
                              provider: el,
                              termsOfServiceUrl: () => (0, A.h)({ href: et }),
                              helpCenterUrl: _.A.getArticleURL(B.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != v &&
                      (0, s.jsx)(E.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: v }),
                  (0, s.jsxs)(F.N4, {
                      step: q.HS.SERVER_SETTINGS,
                      className: X.xQ,
                      children: [(0, s.jsx)(F.AI, {}), (0, s.jsx)(F.cp, { disabled: !y || !L })],
                  }),
              ],
          });
}
var et = t(460790);
function es(e) {
    let { step: l, setFooterNode: t } = (0, P.bv)(),
        n = (0, m.U)("GameServerSetupModal"),
        { title: c, subtitle: u } = (function (e) {
            switch (e) {
                case q.HS.SELECT_GAME:
                    return { title: W.intl.string(H.default["3vWDMz"]), subtitle: W.intl.string(H.default.Az5bjs) };
                case q.HS.SERVER_SETTINGS:
                    return { title: W.intl.string(H.default.RLGW9z) };
            }
        })(l);
    return (0, s.jsxs)(r.d, {
        ...e,
        size: "lg",
        "aria-label": c,
        children: [
            (0, s.jsx)(i.rQ, { title: c, subtitle: u }),
            n &&
                (0, s.jsx)("div", {
                    className: et.M,
                    children: (0, s.jsx)(o.A, { look: o.k.WARNING, children: W.intl.format(H.default.XzXjK2, {}) }),
                }),
            (0, s.jsx)(a.Ip, {
                className: et.j,
                style: { width: q.ST },
                children: (0, s.jsx)("div", {
                    style: { padding: q.by },
                    children: (0, s.jsxs)(d.t, {
                        width: q.U$,
                        activeSlide: l,
                        children: [
                            (0, s.jsx)(d.q, { id: q.HS.SELECT_GAME, children: (0, s.jsx)(x.A, {}) }, q.HS.SELECT_GAME),
                            (0, s.jsx)(
                                d.q,
                                { id: q.HS.SERVER_SETTINGS, children: (0, s.jsx)(el, {}) },
                                q.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("div", { ref: (e) => t(e) }),
        ],
    });
}
function en(e) {
    let { analyticsLocations: l } = (0, c.Ay)();
    return (
        (0, u.wN)(e.guildId, l, e.analyticsLocation),
        (0, s.jsx)(c.f5, { value: l, children: (0, s.jsx)(P.mf, { ...e, children: (0, s.jsx)(es, { ...e }) }) })
    );
}

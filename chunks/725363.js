t.d(l, { default: () => ei });
var s = t(627968),
    n = t(64700),
    i = t(224640),
    r = t(20742),
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
    f = t(104510),
    v = t(661531),
    p = t(834730),
    E = t(289873),
    S = t(297264),
    b = t(866665),
    I = t(290136),
    R = t(292666),
    G = t(939249),
    T = t(663417),
    _ = t(975571),
    A = t(123917),
    M = t(469014),
    k = t(228366);
let C = {},
    w = [],
    O = !1;
function U() {
    C = {};
}
class V extends g.Ay.Store {
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
    isCreationDisabled() {
        return O;
    }
}
let y = new V(k.h, {
    LOGOUT: U,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        let { pingUrl: l, state: t } = e;
        C = { ...C, [l]: t };
    },
    GAME_SERVER_REGION_PING_STATE_RESET: U,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: l, creationDisabled: t } = e;
        (w = l), null != t && (O = t);
    },
});
var L = t(165655),
    P = t(752975),
    D = t(509790),
    K = t(225180),
    z = t(330510);
function F() {
    let { currentGame: e, planId: l } = (0, D.bv)(),
        t = (0, K.A)(e?.gameId, "cover");
    if (null == e) return null;
    let i = e?.plans.find((e) => e.id === l);
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
                                    (0, s.jsx)(S.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, s.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: i?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != i &&
                        (0, s.jsx)("div", {
                            className: z.wL,
                            children: i.specifications.map((e, l) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: z._Y,
                                                children: [
                                                    (0, s.jsx)(S.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, s.jsx)(p.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            l !== (i?.specifications.length ?? 0) - 1 &&
                                                (0, s.jsx)("div", { className: z.yF }),
                                        ],
                                    },
                                    l,
                                ),
                            ),
                        }),
                    (0, s.jsx)("div", { className: z.UK, children: (0, s.jsx)(P.A, {}) }),
                ],
            }),
            (0, s.jsx)("div", { className: z.uV, children: (0, s.jsx)(L.T, { imageUrl: t ?? "" }) }),
        ],
    });
}
var H = t(548392),
    W = t(576709),
    Q = t(375708);
let X = ["/", "\\\\"];
t(321073);
var J = t(573009),
    Y = t(390544);
let Z = new Set([Y.M.SLEEPING, Y.M.OFFLINE, Y.M.ONLINE]);
var q = t(285286),
    B = t(800007),
    $ = t(652215);
function ee(e) {
    let { plan: l, selected: t, className: n } = e;
    return null == l
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: j()(J.NV, n),
                      children: [
                          (0, s.jsx)("span", { children: l.name }),
                          (0, s.jsxs)("div", {
                              className: J._A,
                              children: [
                                  (0, s.jsx)(f._, { size: "xs", color: v.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, s.jsx)(p.E, {
                                      variant: "text-xs/medium",
                                      children: Q.intl.format(W.default.kOMlHs, { boostCount: l.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, s.jsx)("div", { className: J.S6 }),
              ],
          });
}
function el(e) {
    var l;
    let t,
        i,
        r,
        a,
        { region: d, selected: c, disabled: o, className: u } = e,
        { pingText: m, pingCircleStyle: x } =
            ((l = d.pingUrl),
            (t = (0, g.bG)([y], () => y.getRegionStateForPingUrl(l))),
            (i = n.useRef(null)),
            (r = n.useCallback(
                async (e) => {
                    if ("" === l) return;
                    let t = [],
                        s = !1;
                    try {
                        if (
                            (await new Promise((l, n) => {
                                function i() {
                                    e.readyState === WebSocket.OPEN && e.close();
                                }
                                let r = setTimeout(() => {
                                    s || ((s = !0), i(), n(Error("WebSocket timeout")));
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
                                            t.push(a), t.length >= 3 && ((s = !0), clearTimeout(r), i(), l());
                                        }
                                    }),
                                    (e.onerror = () => {
                                        s || ((s = !0), clearTimeout(r), i(), n(Error("WebSocket error")));
                                    }),
                                    (e.onclose = () => {
                                        s || ((s = !0), clearTimeout(r), n(Error("WebSocket closed")));
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
                        i.current === e && (i.current = null);
                    }
                },
                [l, i],
            )),
            n.useEffect(
                () => () => {
                    null != i.current && (i.current.close(), (i.current = null));
                },
                [],
            ),
            (a = null != t),
            n.useEffect(() => {
                if ("" === l || a) return;
                let e = y.getRegionStateForPingUrl(l);
                if (e?.rtt != null || e?.loading === !0) return;
                (0, M.QK)(l, { rtt: null, loading: !0, error: !1 });
                let t = new WebSocket(`wss://${l}`);
                (i.current = t), r(t);
            }, [l, r, a]),
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
                    if (null == t || t.loading) return J.N5;
                    if (t.error) return J.ZK;
                    if (null !== t.rtt)
                        if (t.rtt < 50) return J.n5;
                        else if (t.rtt < 100) return J.mM;
                        else if (t.rtt < 200) return J.d9;
                        else return J.Rg;
                }, [t]),
            });
    return null == d
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: j()(J.NV, { [J.r9]: o }, u),
                      children: [
                          (0, s.jsx)("span", { children: d.name }),
                          (0, s.jsx)("div", {
                              className: J._A,
                              children: o
                                  ? (0, s.jsx)("span", { children: Q.intl.string(W.default.aCyHe2) })
                                  : "" !== d.pingUrl
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", { className: j()(J.Jg, x) }),
                                              (0, s.jsx)(p.E, { variant: "text-xs/medium", children: m }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !c && (0, s.jsx)("div", { className: J.S6 }),
              ],
          });
}
function et() {
    let e,
        {
            guildId: l,
            currentGame: t,
            regionId: i,
            gameServerInstance: r,
            setRegionId: a,
            name: d,
            setName: c,
            planId: m,
            setPlanId: x,
            planCost: h,
            stepLoading: j,
            error: f,
            gameProvider: v,
        } = (0, D.bv)();
    (0, u.SX)(l, r?.id, null == r ? "create" : "edit"),
        n.useEffect(() => {
            (0, M.Jr)(l);
        }, [l]);
    let k = (0, g.bG)([y], () => y.getRegions()),
        C = (0, g.bG)([y], () => y.getRegionState()),
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
        V = (function () {
            let { regionId: e, gameServerInstance: l, name: t, planId: s } = (0, D.bv)(),
                n = "" !== t && "" !== e && void 0 !== s;
            return null != l ? n && (l.name !== t || l.regionId !== e || l.planId !== s) : n;
        })(),
        { isValid: L, errors: P } = {
            isValid: !(e = n.useMemo(() => X.some((e) => (d ?? "").includes(e)), [d])),
            errors: {
                name: e ? Q.intl.formatToPlainString(W.default.jYZD44, { forbiddenCharacters: X.join(", ") }) : void 0,
            },
        },
        K = null != r,
        z = null == r || (null != r.status && Z.has(r.status)),
        Y = (0, q.A)(v),
        et = null != v && null != B.eh[v] ? B.eh[v] : "";
    return null == t
        ? (0, s.jsx)("div", { className: J.dc, children: (0, s.jsx)(E.y, { type: E.t.SPINNING_CIRCLE }) })
        : (0, s.jsxs)("div", {
              className: J.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: J.hQ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: J.V1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, s.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: Q.intl.string(W.default.rOMEZd),
                                                  }),
                                                  (0, s.jsx)(b.m, {
                                                      position: "top",
                                                      text: Q.intl.string(W.default.THJY1n),
                                                      children: (0, s.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(R.k, {
                                              value: d,
                                              onChange: c,
                                              placeholder: Q.intl.string(W.default.ElVYr3),
                                              maxLength: B.XF,
                                              disabled: j || !z,
                                              error: P.name,
                                          }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, s.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: Q.intl.string(W.default.nB5OZ4),
                                                  }),
                                                  (0, s.jsx)(b.m, {
                                                      position: "top",
                                                      text: Q.intl.string(
                                                          null != r ? W.default["7mX0gE"] : W.default["61N+P6"],
                                                      ),
                                                      children: (0, s.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !K &&
                                                      O &&
                                                      (0, s.jsx)("div", {
                                                          className: J.Ow,
                                                          children: (0, s.jsx)(b.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: Q.intl.string(W.default.kGkE7a),
                                                              children: (0, s.jsx)(G.D, {
                                                                  className: J.GI,
                                                                  onClick: () => (0, M.KH)(),
                                                                  children: (0, s.jsx)(T.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          K
                                              ? (0, s.jsx)(R.k, {
                                                    value: r?.regionName,
                                                    disabled: !0,
                                                    placeholder: Q.intl.string(W.default["k+RTIm"]),
                                                })
                                              : (0, s.jsx)(N.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === i,
                                                    isDisabled: j || !z,
                                                    options: w,
                                                    optionClassName: J.uK,
                                                    select: (e) => a(e.id),
                                                    placeholder: Q.intl.string(W.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, s.jsx)(el, {
                                                            region: e.value,
                                                            selected: e.value.id === i,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, s.jsx)(el, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === i,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: J.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, s.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: Q.intl.string(W.default["K+zMYp"]),
                                                  }),
                                                  (0, s.jsx)(b.m, {
                                                      position: "top",
                                                      text: Q.intl.string(W.default["/wD5IM"]),
                                                      children: (0, s.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, s.jsx)(I.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsx)(N.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === m,
                                              isDisabled: j || !z,
                                              options: U,
                                              optionClassName: J.uK,
                                              select: (e) => x(e.id),
                                              placeholder: Q.intl.string(W.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, s.jsx)(ee, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === m,
                                                      className: J.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, s.jsx)(ee, { plan: e.value, selected: e.value.id === m }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", { className: J.sA, children: (0, s.jsx)(F, {}) }),
                      ],
                  }),
                  null != r &&
                      0 !== h &&
                      r.planId !== m &&
                      (0, s.jsx)(o.A, {
                          className: J.et,
                          children: (0, s.jsx)(p.E, {
                              variant: "text-xs/medium",
                              children:
                                  h < 0
                                      ? Q.intl.format(W.default.SorKas, { boostCount: Math.abs(h) })
                                      : Q.intl.format(W.default.n2wpym, { boostCount: h }),
                          }),
                      }),
                  !z &&
                      (0, s.jsx)(o.A, {
                          className: J.et,
                          look: o.k.WARNING,
                          children: (0, s.jsx)(p.E, {
                              variant: "text-xs/medium",
                              children: Q.intl.string(W.default["/JNPWb"]),
                          }),
                      }),
                  t?.early_access === !0 &&
                      !K &&
                      (0, s.jsx)(o.A, {
                          className: J.et,
                          look: o.k.INFO,
                          children: (0, s.jsx)(p.E, {
                              variant: "text-xs/medium",
                              children: Q.intl.format(W.default.TnoBGX, { gameName: t.name }),
                          }),
                      }),
                  (0, s.jsx)(p.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != v &&
                          Q.intl.format(K ? W.default.num0a6 : W.default.p5KZDr, {
                              provider: Y,
                              termsOfServiceUrl: () => (0, A.h)({ href: et }),
                              helpCenterUrl: _.A.getArticleURL($.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != f &&
                      (0, s.jsx)(p.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: f }),
                  (0, s.jsxs)(H.N4, {
                      step: B.HS.SERVER_SETTINGS,
                      className: J.xQ,
                      children: [(0, s.jsx)(H.AI, {}), (0, s.jsx)(H.cp, { disabled: !V || !L })],
                  }),
              ],
          });
}
var es = t(59518);
function en(e) {
    let { step: l, setFooterNode: t } = (0, D.bv)(),
        n = (0, m.U)("GameServerSetupModal"),
        { title: c, subtitle: u } = (function (e) {
            switch (e) {
                case B.HS.SELECT_GAME:
                    return { title: Q.intl.string(W.default["3vWDMz"]), subtitle: Q.intl.string(W.default.Az5bjs) };
                case B.HS.SERVER_SETTINGS:
                    return { title: Q.intl.string(W.default.RLGW9z) };
            }
        })(l);
    return (0, s.jsxs)(i.d, {
        ...e,
        size: "lg",
        "aria-label": c,
        children: [
            (0, s.jsx)(r.rQ, { title: c, subtitle: u }),
            n &&
                (0, s.jsx)("div", {
                    className: es.M,
                    children: (0, s.jsx)(o.A, { look: o.k.WARNING, children: Q.intl.format(W.default.XzXjK2, {}) }),
                }),
            (0, s.jsx)(a.Ip, {
                className: es.j,
                style: { width: B.ST },
                children: (0, s.jsx)("div", {
                    style: { padding: B.by },
                    children: (0, s.jsxs)(d.t, {
                        width: B.U$,
                        activeSlide: l,
                        children: [
                            (0, s.jsx)(d.q, { id: B.HS.SELECT_GAME, children: (0, s.jsx)(x.A, {}) }, B.HS.SELECT_GAME),
                            (0, s.jsx)(
                                d.q,
                                { id: B.HS.SERVER_SETTINGS, children: (0, s.jsx)(et, {}) },
                                B.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, s.jsx)("div", { ref: (e) => t(e) }),
        ],
    });
}
function ei(e) {
    let { analyticsLocations: l } = (0, c.Ay)();
    return (
        (0, u.wN)(e.guildId, l, e.analyticsLocation),
        (0, s.jsx)(c.f5, { value: l, children: (0, s.jsx)(D.mf, { ...e, children: (0, s.jsx)(en, { ...e }) }) })
    );
}

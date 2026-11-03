n.d(t, { default: () => A });
var l = n(477900),
    a = n(189213),
    i = n(331322),
    r = n(834730),
    d = n(584454),
    s = n(691885),
    u = n(123292),
    o = n(150934),
    c = n(47167),
    f = n(582128),
    g = n(17928),
    m = n(734057),
    h = n(576705),
    b = n(573163),
    y = n(181079),
    v = n(16236),
    x = n(266599),
    S = n(93055);
function p(e, t) {
    return e.length === t.length && e.every((e, n) => e.id === t[n].id && e.name === t[n].name);
}
var j = n(826767),
    w = n(927813),
    C = n(760658),
    k = n(105292);
function A(e) {
    let { onClose: t, transitionState: n } = e,
        o = (function (e) {
            let t = (0, g.bG)([y.A], () => (0, S.m_)(y.A.getFavoriteChannels()), [], p),
                [n, l] = f.useState("30"),
                [a, i] = f.useState(null),
                [r, d] = f.useState("filter"),
                [s, u] = f.useState(!1),
                [o, c] = f.useState(!1),
                [j, w] = f.useState(0),
                [C, k] = f.useState(new Set()),
                [A, F] = f.useState([]),
                E = f.useRef(!1),
                I = f.useRef(!0);
            f.useEffect(
                () => (
                    (I.current = !0),
                    () => {
                        I.current = !1;
                    }
                ),
                [],
            );
            let M = Number(n),
                P = /^\d+$/.test(n) && Number.isSafeInteger(M) && M >= 1 && M <= 36500,
                D = (0, g.yK)(
                    [y.A, m.A, h.A, b.Ay],
                    () => ("filter" === r ? [] : (0, x.wm)({ days: M, categoryId: a }).filter((e) => C.has(e.id))),
                    [r, M, a, C],
                ),
                T = D.filter((e) => A.includes(e.id)),
                Y = D.length > 0 && T.length === D.length;
            async function z() {
                if (P && !E.current) {
                    ((E.current = !0), u(!0), c(!1));
                    try {
                        if ((await (0, x.FT)(a), !I.current)) return;
                        let e = (0, x.wm)({ days: M, categoryId: a }).map((e) => e.id);
                        (k(new Set(e)),
                            F(e),
                            w((0, x.UY)(a).filter((e) => m.A.getChannel(e)?.threadMetadata == null).length),
                            d("review"));
                    } catch {
                        I.current && c(!0);
                    } finally {
                        ((E.current = !1), I.current && u(!1));
                    }
                }
            }
            async function B() {
                if (!E.current && 0 !== T.length) {
                    ((E.current = !0), u(!0), c(!1));
                    try {
                        (await (0, v.pq)(
                            T.map((e) => e.id),
                            { days: M, categoryId: a },
                        ),
                            I.current && e());
                    } catch {
                        I.current && c(!0);
                    } finally {
                        ((E.current = !1), I.current && u(!1));
                    }
                }
            }
            return {
                categories: t.flatMap((e) => (null == e.id ? [] : [{ id: e.id, name: e.name }])),
                days: n,
                setDays: l,
                validDays: P,
                categoryId: a,
                setCategoryId: i,
                stage: r,
                setStage: d,
                loading: s,
                error: o,
                unknownCount: j,
                candidates: D,
                selectedIds: A,
                setSelectedIds: F,
                selectedThreads: T,
                allSelected: Y,
                toggleSelection: function () {
                    F(Y ? [] : D.map((e) => e.id));
                },
                review: z,
                remove: B,
            };
        })(t),
        { stage: c, loading: j, candidates: w, selectedThreads: A } = o,
        E = A.length;
    return (0, l.jsx)(a.a, {
        title: k.intl.string(C.default["b081B+"]),
        transitionState: n,
        onClose: t,
        actions: [
            {
                text: k.intl.string("filter" === c ? k.t["ETE/oC"] : k.t["13/7kX"]),
                variant: "secondary",
                disabled: j,
                onClick: () => {
                    "filter" === c ? t() : o.setStage("filter");
                },
            },
            {
                text:
                    "filter" === c
                        ? k.intl.string(C.default.zAljrZ)
                        : k.intl.formatToPlainString(C.default.jiqJtj, { count: E }),
                variant: "review" === c ? "critical-primary" : "primary",
                disabled: j || ("filter" === c ? !o.validDays : 0 === E),
                loading: j,
                onClick: () => {
                    "filter" === c ? o.review() : o.remove();
                },
            },
        ],
        children: (0, l.jsxs)(i.B, {
            gap: 16,
            children: [
                (0, l.jsx)(r.E, { variant: "body-md/normal", children: k.intl.string(C.default.DbeF7Y) }),
                "filter" === c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Q, {
                                  label: k.intl.string(C.default.VheZQr),
                                  value: "" === o.days ? void 0 : Number(o.days),
                                  onChange: (e) => o.setDays(e?.toString() ?? ""),
                                  min: 1,
                                  max: 36500,
                                  disabled: j,
                                  autoFocus: !0,
                              }),
                              (0, l.jsx)(s.l, {
                                  label: k.intl.string(C.default.KIzpqi),
                                  selectionMode: "single",
                                  clearable: !1,
                                  value: o.categoryId ?? "all",
                                  onSelectionChange: (e) => o.setCategoryId("all" === e ? null : e),
                                  disabled: j,
                                  options: [
                                      { id: "all", value: "all", label: k.intl.string(C.default["gOUr+P"]) },
                                      ...o.categories.map((e) => ({ id: e.id, value: e.id, label: e.name })),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.E, {
                                  variant: "body-sm/medium",
                                  "aria-live": "polite",
                                  role: "status",
                                  children: k.intl.format(C.default.kdvwuo, { count: E }),
                              }),
                              w.length > 0
                                  ? (0, l.jsxs)(i.B, {
                                        role: "group",
                                        "aria-label": k.intl.string(C.default.wPednI),
                                        children: [
                                            (0, l.jsx)(r.E, {
                                                variant: "body-sm/medium",
                                                children: k.intl.string(C.default.wPednI),
                                            }),
                                            (0, l.jsx)(i.B, {
                                                direction: "horizontal",
                                                align: "start",
                                                children: (0, l.jsx)(u.Q, {
                                                    text: k.intl.string(
                                                        o.allSelected ? C.default.AX7Fmc : C.default.ZuaHVJ,
                                                    ),
                                                    textVariant: "body-sm/medium",
                                                    disabled: j,
                                                    onClick: o.toggleSelection,
                                                }),
                                            }),
                                            w.map((e) =>
                                                (0, l.jsx)(
                                                    F,
                                                    {
                                                        channel: e,
                                                        checked: o.selectedIds.includes(e.id),
                                                        disabled: j,
                                                        onChange: (t) =>
                                                            o.setSelectedIds((n) =>
                                                                t ? [...n, e.id] : n.filter((t) => t !== e.id),
                                                            ),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        ],
                                    })
                                  : (0, l.jsx)(r.E, {
                                        variant: "body-md/normal",
                                        children: k.intl.string(C.default["4KOdCv"]),
                                    }),
                              o.unknownCount > 0
                                  ? (0, l.jsx)(r.E, {
                                        variant: "body-sm/normal",
                                        children: k.intl.format(C.default["rM/wWh"], { count: o.unknownCount }),
                                    })
                                  : null,
                          ],
                      }),
                o.error
                    ? (0, l.jsx)(r.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: k.intl.string(C.default.toOYQw),
                      })
                    : null,
            ],
        }),
    });
}
function F(e) {
    let { channel: t, checked: n, disabled: a, onChange: i } = e,
        r = (0, c.Ay)(t),
        d = (function (e) {
            let [t] = f.useState(Date.now),
                n = (0, g.bG)([b.Ay], () => (0, j.F)(e), [e]),
                l =
                    Number.isFinite(n) && n > 0
                        ? k.intl.formatToPlainString(C.default.IzxPdG, {
                              days: Math.max(0, Math.floor((t - n) / w.A.Millis.DAY)),
                          })
                        : k.intl.string(C.default.rYws6y);
            return e.threadMetadata?.archived ? k.intl.formatToPlainString(C.default.Dr1FWM, { activity: l }) : l;
        })(t);
    return (0, l.jsx)(o.S, { label: r ?? "", description: d, checked: n, disabled: a, onChange: i });
}

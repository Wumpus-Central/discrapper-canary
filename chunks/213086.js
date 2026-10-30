n.d(e, { default: () => A });
var l = n(477900),
    a = n(189213),
    i = n(331322),
    r = n(834730),
    d = n(584454),
    s = n(691885),
    u = n(123292),
    c = n(150934),
    o = n(47167),
    f = n(582128),
    g = n(17928),
    m = n(734057),
    h = n(576705),
    x = n(573163),
    v = n(181079),
    b = n(16236),
    y = n(266599),
    S = n(93055);
function p(t, e) {
    return t.length === e.length && t.every((t, n) => t.id === e[n].id && t.name === e[n].name);
}
var j = n(826767),
    w = n(927813),
    C = n(760658),
    k = n(105292);
function A(t) {
    let { onClose: e, transitionState: n } = t,
        c = (function (t) {
            let e = (0, g.bG)([v.A], () => (0, S.m_)(v.A.getFavoriteChannels()), [], p),
                [n, l] = f.useState("30"),
                [a, i] = f.useState(null),
                [r, d] = f.useState("filter"),
                [s, u] = f.useState(!1),
                [c, o] = f.useState(!1),
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
                    [v.A, m.A, h.A, x.Ay],
                    () => ("filter" === r ? [] : (0, y.wm)({ days: M, categoryId: a }).filter((t) => C.has(t.id))),
                    [r, M, a, C],
                ),
                T = D.filter((t) => A.includes(t.id)),
                Y = D.length > 0 && T.length === D.length;
            async function z() {
                if (P && !E.current) {
                    ((E.current = !0), u(!0), o(!1));
                    try {
                        if ((await (0, y.FT)(a), !I.current)) return;
                        let t = (0, y.wm)({ days: M, categoryId: a }).map((t) => t.id);
                        (k(new Set(t)),
                            F(t),
                            w((0, y.UY)(a).filter((t) => m.A.getChannel(t)?.threadMetadata == null).length),
                            d("review"));
                    } catch {
                        I.current && o(!0);
                    } finally {
                        ((E.current = !1), I.current && u(!1));
                    }
                }
            }
            async function B() {
                if (!E.current && 0 !== T.length) {
                    ((E.current = !0), u(!0), o(!1));
                    try {
                        (await (0, b.pq)(
                            T.map((t) => t.id),
                            { days: M, categoryId: a },
                        ),
                            I.current && t());
                    } catch {
                        I.current && o(!0);
                    } finally {
                        ((E.current = !1), I.current && u(!1));
                    }
                }
            }
            return {
                categories: e.flatMap((t) => (null == t.id ? [] : [{ id: t.id, name: t.name }])),
                days: n,
                setDays: l,
                validDays: P,
                categoryId: a,
                setCategoryId: i,
                stage: r,
                setStage: d,
                loading: s,
                error: c,
                unknownCount: j,
                candidates: D,
                selectedIds: A,
                setSelectedIds: F,
                selectedThreads: T,
                allSelected: Y,
                toggleSelection: function () {
                    F(Y ? [] : D.map((t) => t.id));
                },
                review: z,
                remove: B,
            };
        })(e),
        { stage: o, loading: j, candidates: w, selectedThreads: A } = c,
        E = A.length;
    return (0, l.jsx)(a.a, {
        title: k.intl.string(C.default["b081B+"]),
        transitionState: n,
        onClose: e,
        actions: [
            {
                text: k.intl.string("filter" === o ? k.t["ETE/oC"] : k.t["13/7kX"]),
                variant: "secondary",
                disabled: j,
                onClick: () => {
                    "filter" === o ? e() : c.setStage("filter");
                },
            },
            {
                text:
                    "filter" === o
                        ? k.intl.string(C.default.zAljrZ)
                        : k.intl.formatToPlainString(C.default.jiqJtj, { count: E }),
                variant: "review" === o ? "critical-primary" : "primary",
                disabled: j || ("filter" === o ? !c.validDays : 0 === E),
                loading: j,
                onClick: () => {
                    "filter" === o ? c.review() : c.remove();
                },
            },
        ],
        children: (0, l.jsxs)(i.B, {
            gap: 16,
            children: [
                (0, l.jsx)(r.E, { variant: "text-md/normal", children: k.intl.string(C.default.DbeF7Y) }),
                "filter" === o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Q, {
                                  label: k.intl.string(C.default.VheZQr),
                                  value: "" === c.days ? void 0 : Number(c.days),
                                  onChange: (t) => c.setDays(t?.toString() ?? ""),
                                  min: 1,
                                  max: 36500,
                                  disabled: j,
                                  autoFocus: !0,
                              }),
                              (0, l.jsx)(s.l, {
                                  label: k.intl.string(C.default.KIzpqi),
                                  selectionMode: "single",
                                  clearable: !1,
                                  value: c.categoryId ?? "all",
                                  onSelectionChange: (t) => c.setCategoryId("all" === t ? null : t),
                                  disabled: j,
                                  options: [
                                      { id: "all", value: "all", label: k.intl.string(C.default["gOUr+P"]) },
                                      ...c.categories.map((t) => ({ id: t.id, value: t.id, label: t.name })),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.E, {
                                  variant: "text-sm/medium",
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
                                                variant: "text-sm/medium",
                                                children: k.intl.string(C.default.wPednI),
                                            }),
                                            (0, l.jsx)(i.B, {
                                                direction: "horizontal",
                                                align: "start",
                                                children: (0, l.jsx)(u.Q, {
                                                    text: k.intl.string(
                                                        c.allSelected ? C.default.AX7Fmc : C.default.ZuaHVJ,
                                                    ),
                                                    textVariant: "text-sm/medium",
                                                    disabled: j,
                                                    onClick: c.toggleSelection,
                                                }),
                                            }),
                                            w.map((t) =>
                                                (0, l.jsx)(
                                                    F,
                                                    {
                                                        channel: t,
                                                        checked: c.selectedIds.includes(t.id),
                                                        disabled: j,
                                                        onChange: (e) =>
                                                            c.setSelectedIds((n) =>
                                                                e ? [...n, t.id] : n.filter((e) => e !== t.id),
                                                            ),
                                                    },
                                                    t.id,
                                                ),
                                            ),
                                        ],
                                    })
                                  : (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: k.intl.string(C.default["4KOdCv"]),
                                    }),
                              c.unknownCount > 0
                                  ? (0, l.jsx)(r.E, {
                                        variant: "text-sm/normal",
                                        children: k.intl.format(C.default["rM/wWh"], { count: c.unknownCount }),
                                    })
                                  : null,
                          ],
                      }),
                c.error
                    ? (0, l.jsx)(r.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: k.intl.string(C.default.toOYQw),
                      })
                    : null,
            ],
        }),
    });
}
function F(t) {
    let { channel: e, checked: n, disabled: a, onChange: i } = t,
        r = (0, o.Ay)(e),
        d = (function (t) {
            let [e] = f.useState(Date.now),
                n = (0, g.bG)([x.Ay], () => (0, j.F)(t), [t]),
                l =
                    Number.isFinite(n) && n > 0
                        ? k.intl.formatToPlainString(C.default.IzxPdG, {
                              days: Math.max(0, Math.floor((e - n) / w.A.Millis.DAY)),
                          })
                        : k.intl.string(C.default.rYws6y);
            return t.threadMetadata?.archived ? k.intl.formatToPlainString(C.default.Dr1FWM, { activity: l }) : l;
        })(e);
    return (0, l.jsx)(c.S, { label: r ?? "", description: d, checked: n, disabled: a, onChange: i });
}

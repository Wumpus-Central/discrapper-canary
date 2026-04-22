t.d(l, { default: () => k });
var n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(131346),
    c = t(744818),
    o = t(827734),
    d = t(292666),
    u = t(408278),
    h = t(285796),
    m = t(772838),
    g = t(939249),
    x = t(245604),
    p = t(834730),
    _ = t(198982),
    C = t(44234),
    b = t(513461),
    f = t(242273),
    v = t(260197),
    j = t(985018),
    y = t(201015);
let I = "MULTIPLE_CHOICE",
    E = (e) => {
        let { choice: l, index: t, onChange: r, onClear: o, onReorder: g, isDropHovered: x } = e,
            p = i.useRef(null),
            _ = i.useRef(null),
            [, b, f] = (0, s.i)({
                type: I,
                item: { choice: l, index: t },
                end: (e, l) => {
                    null == e || l.didDrop() || g(e.choice, null, !0);
                },
            }),
            [, v] = (0, c.H)({
                accept: I,
                hover: (e, l) => {
                    let { index: n } = e,
                        i = p.current?.getBoundingClientRect(),
                        r = l.getClientOffset();
                    if (null == i || null == r) return;
                    let a = (i.bottom - i.top) / 2,
                        s = r.y - i.top;
                    (n < t && s < a) || (n > t && s > a) || g(e.choice, t, !1);
                },
                drop: (e) => {
                    g(e.choice, t, !0);
                },
            });
        return (
            i.useLayoutEffect(
                () => (
                    b(_),
                    f(v(p)),
                    () => {
                        b(null), v(null);
                    }
                ),
                [b, v, f],
            ),
            (0, n.jsxs)("div", {
                ref: p,
                className: a()(y.XQ, { [y.cB]: x }),
                "data-dnd-name": l,
                children: [
                    (0, n.jsx)("div", {
                        className: y.R6,
                        children: (0, n.jsx)(C.A, { height: 20, width: 20, className: y.IC }),
                    }),
                    (0, n.jsxs)("div", {
                        className: y.I6,
                        children: [
                            (0, n.jsx)(d.k, {
                                autoFocus: !0,
                                onChange: (e) => r(e),
                                placeholder: j.intl.formatToPlainString(j.t["Ep/pbH"], { index: t + 1 }),
                                value: l,
                            }),
                            (0, n.jsx)("div", {
                                className: y.mt,
                                children: (0, n.jsx)(u.K, {
                                    icon: h.a,
                                    size: "sm",
                                    "aria-label": j.intl.string(j.t.VkKicb),
                                    variant: "icon-only",
                                    onClick: o,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        ref: _,
                        className: y.cK,
                        "data-dnd-name": l,
                        children: (0, n.jsx)(m.W, { size: "xs", color: "currentColor", className: y.co }),
                    }),
                ],
            })
        );
    },
    k = function (e) {
        let { field: l, onSave: t, onClose: r } = e,
            [a, s] = i.useState(l?.label ?? ""),
            [c, u] = i.useState(l?.choices ?? [""]),
            [h, m] = i.useState(null),
            [C, I] = i.useState(null),
            k = (e, l, t) => {
                if (null == c) return;
                null != h && m(null);
                let n = c.indexOf(e),
                    i = [...c];
                null != l && l !== n && (i.splice(n, 1), i.splice(l, 0, e), u(i)),
                    t ? null !== l && I(null) : l !== C && I(l);
            },
            N = async () => {
                null != h && m(null);
                let e = a.trim();
                if ("" === e) return void m(j.intl.string(j.t["G+TI44"]));
                if (0 === c.map((e) => e.trim()).filter((e) => "" !== e).length)
                    return void m(j.intl.string(j.t.jZoHgI));
                let l = { field_type: b.rX.MULTIPLE_CHOICE, label: e, choices: c, required: !0 };
                try {
                    await t(l), r();
                } catch (e) {
                    m(new _.LG(e).getAnyErrorMessage());
                }
            };
        return (0, n.jsxs)(f.A, {
            ...e,
            errorText: h,
            title: j.intl.string(j.t.ooKh3m),
            onConfirm: N,
            onCancel: r,
            children: [
                (0, n.jsx)("div", {
                    className: y.Ef,
                    children: (0, n.jsx)(d.k, {
                        autoFocus: !0,
                        onChange: (e) => {
                            null != h && m(null);
                            let l = e.replace(/(\r\n|\n|\r)/g, " ");
                            l.length > v.Ty && (l = e.slice(0, v.Ty)), s(l);
                        },
                        placeholder: j.intl.string(j.t.fqVmbL),
                        value: a,
                    }),
                }),
                (0, n.jsx)("div", { className: y.yF }),
                c.map((e, l) =>
                    (0, n.jsx)(
                        E,
                        {
                            choice: e,
                            index: l,
                            onChange: (e) => {
                                let t, n;
                                return (
                                    null != h && m(null),
                                    (t = e.replace(/(\r\n|\n|\r)/g, " ")).length > v.yR && (t = t.slice(0, v.yR)),
                                    void (((n = [...c])[l] = t), u(n))
                                );
                            },
                            onClear: () => {
                                let e;
                                return (
                                    null != h && m(null),
                                    void u(0 === (e = [...c.slice(0, l), ...c.slice(l + 1)]).length ? [""] : e)
                                );
                            },
                            onReorder: k,
                            isDropHovered: l === C,
                        },
                        `choice-${l}`,
                    ),
                ),
                c.length !== v.Hz &&
                    (0, n.jsx)("div", {
                        className: y.C5,
                        children: (0, n.jsxs)(g.D, {
                            className: y.bK,
                            onClick: () => {
                                null != h && m(null), c.length !== v.Hz && u([...c, ""]);
                            },
                            children: [
                                (0, n.jsx)(x.U, {
                                    size: "custom",
                                    height: 17,
                                    width: 17,
                                    color: o.A.unsafe_rawColors.BLUE_345.css,
                                }),
                                (0, n.jsx)(p.E, {
                                    color: "text-link",
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.sVfx9r),
                                }),
                            ],
                        }),
                    }),
            ],
        });
    };

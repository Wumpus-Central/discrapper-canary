t.d(l, { default: () => f });
var n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(131346),
    c = t(522437),
    o = t(827734),
    d = t(397927),
    u = t(198982),
    h = t(44234),
    x = t(513461),
    m = t(242273),
    g = t(260197),
    p = t(985018),
    _ = t(285553);
let C = "MULTIPLE_CHOICE",
    b = (e) => {
        let { choice: l, index: t, onChange: r, onClear: o, onReorder: u, isDropHovered: x } = e,
            m = i.useRef(null),
            g = i.useRef(null),
            [, b, f] = (0, s.i)({
                type: C,
                item: { choice: l, index: t },
                end: (e, l) => {
                    null == e || l.didDrop() || u(e.choice, null, !0);
                },
            }),
            [, v] = (0, c.H)({
                accept: C,
                hover: (e, l) => {
                    let { index: n } = e,
                        i = m.current?.getBoundingClientRect(),
                        r = l.getClientOffset();
                    if (null == i || null == r) return;
                    let a = (i.bottom - i.top) / 2,
                        s = r.y - i.top;
                    (n < t && s < a) || (n > t && s > a) || u(e.choice, t, !1);
                },
                drop: (e) => {
                    u(e.choice, t, !0);
                },
            });
        return (
            i.useLayoutEffect(
                () => (
                    b(g),
                    f(v(m)),
                    () => {
                        b(null), v(null);
                    }
                ),
                [b, v, f],
            ),
            (0, n.jsxs)("div", {
                ref: m,
                className: a()(_.XQ, { [_.cB]: x }),
                "data-dnd-name": l,
                children: [
                    (0, n.jsx)("div", {
                        className: _.R6,
                        children: (0, n.jsx)(h.A, { height: 20, width: 20, className: _.IC }),
                    }),
                    (0, n.jsxs)("div", {
                        className: _.I6,
                        children: [
                            (0, n.jsx)(d.ksK, {
                                autoFocus: !0,
                                onChange: (e) => r(e),
                                placeholder: p.intl.formatToPlainString(p.t["Ep/pbH"], { index: t + 1 }),
                                value: l,
                            }),
                            (0, n.jsx)("div", {
                                className: _.mt,
                                children: (0, n.jsx)(d.K0, {
                                    icon: d.aXh,
                                    size: "sm",
                                    "aria-label": p.intl.string(p.t.VkKicb),
                                    variant: "icon-only",
                                    onClick: o,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        ref: g,
                        className: _.cK,
                        "data-dnd-name": l,
                        children: (0, n.jsx)(d.WP0, { size: "xs", color: "currentColor", className: _.co }),
                    }),
                ],
            })
        );
    },
    f = function (e) {
        let { field: l, onSave: t, onClose: r } = e,
            [a, s] = i.useState(l?.label ?? ""),
            [c, h] = i.useState(l?.choices ?? [""]),
            [C, f] = i.useState(null),
            [v, j] = i.useState(null),
            y = (e, l, t) => {
                if (null == c) return;
                null != C && f(null);
                let n = c.indexOf(e),
                    i = [...c];
                null != l && l !== n && (i.splice(n, 1), i.splice(l, 0, e), h(i)),
                    t ? null !== l && j(null) : l !== v && j(l);
            },
            I = async () => {
                null != C && f(null);
                let e = a.trim();
                if ("" === e) return void f(p.intl.string(p.t["G+TI44"]));
                if (0 === c.map((e) => e.trim()).filter((e) => "" !== e).length)
                    return void f(p.intl.string(p.t.jZoHgI));
                let l = { field_type: x.rX.MULTIPLE_CHOICE, label: e, choices: c, required: !0 };
                try {
                    await t(l), r();
                } catch (e) {
                    f(new u.LG(e).getAnyErrorMessage());
                }
            };
        return (0, n.jsxs)(m.A, {
            ...e,
            errorText: C,
            title: p.intl.string(p.t.ooKh3m),
            onConfirm: I,
            onCancel: r,
            children: [
                (0, n.jsx)("div", {
                    className: _.Ef,
                    children: (0, n.jsx)(d.ksK, {
                        autoFocus: !0,
                        onChange: (e) => {
                            null != C && f(null);
                            let l = e.replace(/(\r\n|\n|\r)/g, " ");
                            l.length > g.Ty && (l = e.slice(0, g.Ty)), s(l);
                        },
                        placeholder: p.intl.string(p.t.fqVmbL),
                        value: a,
                    }),
                }),
                (0, n.jsx)("div", { className: _.yF }),
                c.map((e, l) =>
                    (0, n.jsx)(
                        b,
                        {
                            choice: e,
                            index: l,
                            onChange: (e) => {
                                let t, n;
                                return (
                                    null != C && f(null),
                                    (t = e.replace(/(\r\n|\n|\r)/g, " ")).length > g.yR && (t = t.slice(0, g.yR)),
                                    void (((n = [...c])[l] = t), h(n))
                                );
                            },
                            onClear: () => {
                                let e;
                                return (
                                    null != C && f(null),
                                    void h(0 === (e = [...c.slice(0, l), ...c.slice(l + 1)]).length ? [""] : e)
                                );
                            },
                            onReorder: y,
                            isDropHovered: l === v,
                        },
                        `choice-${l}`,
                    ),
                ),
                c.length !== g.Hz &&
                    (0, n.jsx)("div", {
                        className: _.C5,
                        children: (0, n.jsxs)(d.DUT, {
                            className: _.bK,
                            onClick: () => {
                                null != C && f(null), c.length !== g.Hz && h([...c, ""]);
                            },
                            children: [
                                (0, n.jsx)(d.U1e, {
                                    size: "custom",
                                    height: 17,
                                    width: 17,
                                    color: o.A.unsafe_rawColors.BLUE_345.css,
                                }),
                                (0, n.jsx)(d.Text, {
                                    color: "text-link",
                                    variant: "text-md/normal",
                                    children: p.intl.string(p.t.sVfx9r),
                                }),
                            ],
                        }),
                    }),
            ],
        });
    };

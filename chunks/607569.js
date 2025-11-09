n.d(t, { default: () => j }), n(388685), n(704826), n(35282), n(781311);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(100568),
    c = n(417865),
    s = n(692547),
    d = n(481060),
    u = n(881052),
    p = n(186523),
    g = n(246364),
    m = n(915509),
    b = n(592286),
    h = n(388032),
    f = n(567147);
let x = "MULTIPLE_CHOICE",
    y = (e) => {
        let { choice: t, index: n, onChange: i, onClear: s, onReorder: u, isDropHovered: g } = e,
            m = l.useRef(null),
            b = l.useRef(null),
            [, y, j] = (0, o.c)({
                type: x,
                item: {
                    choice: t,
                    index: n,
                },
                end: (e, t) => {
                    null == e || t.didDrop() || u(e.choice, null, !0);
                },
            }),
            [, v] = (0, c.L)({
                accept: x,
                hover: (e, t) => {
                    var r;
                    let { index: l } = e,
                        i = null == (r = m.current) ? void 0 : r.getBoundingClientRect(),
                        a = t.getClientOffset();
                    if (null == i || null == a) return;
                    let o = (i.bottom - i.top) / 2,
                        c = a.y - i.top;
                    (l < n && c < o) || (l > n && c > o) || u(e.choice, n, !1);
                },
                drop: (e) => {
                    u(e.choice, n, !0);
                },
            });
        return (
            l.useLayoutEffect(
                () => (
                    y(b),
                    j(v(m)),
                    () => {
                        y(null), v(null);
                    }
                ),
                [y, v, j],
            ),
            (0, r.jsxs)("div", {
                ref: m,
                className: a()(f.draggableInputContainer, { [f.dragging]: g }),
                "data-dnd-name": t,
                children: [
                    (0, r.jsx)("div", {
                        className: f.radioIconEmptyContainer,
                        children: (0, r.jsx)(p.Z, {
                            height: 20,
                            width: 20,
                            className: f.radioIconEmpty,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: f.inputWrapper,
                        children: [
                            (0, r.jsx)(d.oil, {
                                autoFocus: !0,
                                onChange: (e) => i(e),
                                placeholder: h.intl.formatToPlainString(h.t["Ep/pbH"], { index: n + 1 }),
                                value: t,
                            }),
                            (0, r.jsx)("div", {
                                className: f.clearButton,
                                children: (0, r.jsx)(d.hU, {
                                    icon: d.k$p,
                                    size: "sm",
                                    "aria-label": h.intl.string(h.t.VkKicb),
                                    variant: "icon-only",
                                    onClick: s,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        ref: b,
                        className: f.dragContainer,
                        "data-dnd-name": t,
                        children: (0, r.jsx)(d.Vni, {
                            size: "xs",
                            color: "currentColor",
                            className: f.dragIcon,
                        }),
                    }),
                ],
            })
        );
    },
    j = function (e) {
        var t, n, i, a;
        let { field: o, onSave: c, onClose: p } = e,
            [x, j] = l.useState(null != (t = null == o ? void 0 : o.label) ? t : ""),
            [v, C] = l.useState(null != (n = null == o ? void 0 : o.choices) ? n : [""]),
            [_, I] = l.useState(null),
            [O, w] = l.useState(null),
            E = (e, t, n) => {
                if (null == v) return;
                null != _ && I(null);
                let r = v.indexOf(e),
                    l = [...v];
                null != t && t !== r && (l.splice(r, 1), l.splice(t, 0, e), C(l)),
                    n ? null !== t && w(null) : t !== O && w(t);
            },
            P = async () => {
                null != _ && I(null);
                let e = x.trim();
                if ("" === e) return void I(h.intl.string(h.t["G+TI44"]));
                if (0 === v.map((e) => e.trim()).filter((e) => "" !== e).length)
                    return void I(h.intl.string(h.t.jZoHgI));
                let t = {
                    field_type: g.QJ.MULTIPLE_CHOICE,
                    label: e,
                    choices: v,
                    required: !0,
                };
                try {
                    await c(t), p();
                } catch (e) {
                    I(new u.Hx(e).getAnyErrorMessage());
                }
            };
        return (0, r.jsxs)(
            m.Z,
            ((i = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (a = a =
                {
                    errorText: _,
                    title: h.intl.string(h.t.ooKh3m),
                    onConfirm: P,
                    onCancel: p,
                    children: [
                        (0, r.jsx)("div", {
                            className: f.spacedItem,
                            children: (0, r.jsx)(d.oil, {
                                autoFocus: !0,
                                onChange: (e) => {
                                    null != _ && I(null);
                                    let t = e.replace(/(\r\n|\n|\r)/g, " ");
                                    t.length > b.XN && (t = e.slice(0, b.XN)), j(t);
                                },
                                placeholder: h.intl.string(h.t.fqVmbL),
                                value: x,
                            }),
                        }),
                        (0, r.jsx)("div", { className: f.divider }),
                        v.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    choice: e,
                                    index: t,
                                    onChange: (e) =>
                                        ((e, t) => {
                                            null != _ && I(null);
                                            let n = e.replace(/(\r\n|\n|\r)/g, " ");
                                            n.length > b.au && (n = n.slice(0, b.au));
                                            let r = [...v];
                                            (r[t] = n), C(r);
                                        })(e, t),
                                    onClear: () =>
                                        ((e) => {
                                            null != _ && I(null);
                                            let t = [...v.slice(0, e), ...v.slice(e + 1)];
                                            C(0 === t.length ? [""] : t);
                                        })(t),
                                    onReorder: E,
                                    isDropHovered: t === O,
                                },
                                "choice-".concat(t),
                            ),
                        ),
                        v.length !== b.mb &&
                            (0, r.jsx)("div", {
                                className: f.addItemContainer,
                                children: (0, r.jsxs)(d.P3F, {
                                    className: f.addItemButton,
                                    onClick: () => {
                                        null != _ && I(null), v.length !== b.mb && C([...v, ""]);
                                    },
                                    children: [
                                        (0, r.jsx)(d.oFk, {
                                            size: "custom",
                                            height: 17,
                                            width: 17,
                                            color: s.Z.unsafe_rawColors.BLUE_345.css,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            color: "text-link",
                                            variant: "text-md/normal",
                                            children: h.intl.string(h.t.sVfx9r),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            i),
        );
    };

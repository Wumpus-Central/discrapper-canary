n.d(t, { P: () => C }), n(49124), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(753187),
    c = n(993517),
    u = n(635041),
    d = n(793030),
    f = n(74655),
    _ = n(816529),
    p = n(35916),
    h = n(490340),
    m = n(388032),
    g = n(680765),
    E = n(987150);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e, t) {
    return "object" == typeof e ? JSON.stringify(e) === JSON.stringify(t) : e === t;
}
function A(e, t) {
    return null != t && (t instanceof Set ? t.has(e) : S(e, t));
}
function C(e) {
    var { id: t, hideLabel: n, description: i, helperText: a, errorMessage: o, successMessage: s } = e,
        c = I(e, ["id", "hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
    let { required: u, label: d } = c;
    return (0, r.jsx)(l.N, {
        id: t,
        required: u,
        label: d,
        hideLabel: n,
        description: i,
        helperText: a,
        errorMessage: o,
        successMessage: s,
        children: (0, r.jsx)(N, y({}, c)),
    });
}
function N(e) {
    let {
            selectionMode: t,
            required: n,
            disabled: a,
            readOnly: l,
            loading: E,
            autoFocus: b,
            clearable: O,
            fullWidth: I,
            closeOnSelect: T = !0,
            shouldFocusWrap: S,
            placeholder: C = m.intl.string(h.default["A+pfVV"]),
            label: N,
            name: x,
            form: j,
            autoComplete: M,
            maxOptionsVisible: k = 5,
            options: U,
            renderOption: G,
            onSelectionChange: B,
            value: Z,
            defaultValue: F,
        } = e,
        V = void 0 !== Z,
        H = i.useId(),
        [Y, W] = i.useState({
            initialized: !1,
            isOpen: !1,
            listItems: [],
            selectedItems: new Set(),
            longestLabelCharCount: 5,
            width: "0px",
            dropDownHeight: "auto",
        }),
        K = i.useContext(c.U),
        z = i.useRef(null),
        q = i.useRef(null),
        X = null != T ? T : "multiple" !== t,
        Q = Y.selectedItems.size > 0,
        J = Y.listItems.length > k,
        $ = !Y.initialized || a || l || E,
        ee = i.useCallback(() => {
            $ || W((e) => v(y({}, e), { isOpen: !e.isOpen }));
        }, [$]),
        et = i.useCallback(() => {
            var e;
            W((e) => v(y({}, e), { isOpen: !1 })), null == (e = z.current) || e.focus();
        }, []),
        en = i.useCallback(() => {
            var e;
            W((e) => v(y({}, e), { selectedItems: new Set() })), B(null), null == (e = z.current) || e.focus();
        }, [B]),
        er = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "ArrowDown":
                        e.preventDefault(), W((e) => v(y({}, e), { isOpen: !0 }));
                        break;
                    case "Escape":
                        Q && (e.preventDefault(), e.stopPropagation(), en());
                }
            },
            [en, Q],
        ),
        ei = i.useCallback((e) => (null != G ? G(e) : e), [G]);
    i.useLayoutEffect(() => {
        let e = new Set(),
            t = 6,
            n = U.map((n) => {
                let r = ei(n);
                return (
                    (t = Math.max(t, r.label.length)),
                    !Y.initialized && (null != Z || null != F) && A(r.value, null != Z ? Z : F) && e.add(r),
                    r
                );
            });
        W((r) =>
            v(y({}, r), {
                listItems: n,
                initialized: !0,
                longestLabelCharCount: t,
                selectedItems: r.initialized ? r.selectedItems : e,
            }),
        );
    }, [U, ei]),
        i.useEffect(() => {
            !$ &&
                V &&
                (null == Z
                    ? W((e) => v(y({}, e), { selectedItems: new Set() }))
                    : W((e) => v(y({}, e), { selectedItems: new Set(e.listItems.filter((e) => A(e.value, Z))) })));
        }, [Z, $, V]),
        i.useLayoutEffect(() => {
            if (null == q.current) return;
            let e = new ResizeObserver(
                (0, s.throttle)(() => {
                    var e, n, r, i;
                    let a = "",
                        o = "auto";
                    if (I)
                        a = "".concat(
                            null != (n = null == (e = q.current) ? void 0 : e.getBoundingClientRect().width) ? n : 0,
                            "px",
                        );
                    else {
                        let e = "multiple" === t ? 1.5 : 1;
                        a = "calc((".concat(Y.longestLabelCharCount, "ch + 20px + 24px + 36px) * ").concat(e, ")");
                    }
                    J &&
                        (o =
                            (null != (i = null == (r = q.current) ? void 0 : r.getBoundingClientRect().height)
                                ? i
                                : 40) * k),
                        W((e) =>
                            v(y({}, e), {
                                width: a,
                                dropDownHeight: o,
                            }),
                        );
                }, 500),
            );
            return e.observe(q.current), () => e.disconnect();
        }, [I, t, k, J, Y.longestLabelCharCount]);
    let ea = i.useCallback(
        (e) => {
            if ($) return;
            let n = Array.from(e);
            if ("multiple" === t) {
                if (n.length < 1) return void B(null);
                B(new Set(n.map((e) => e.value)));
            } else {
                var r, i;
                B(null != (i = null == (r = n[0]) ? void 0 : r.value) ? i : null);
            }
            X && Y.isOpen && et(), W((t) => v(y({}, t), { selectedItems: e }));
        },
        [$, t, B, X, et, Y.isOpen],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.U, {
                ref: q,
                containerClassName: o()(g.selectFieldContainer, { [g.fullWidth]: I }),
                className: o()(g.selectField, {
                    [g.isFocused]: Y.isOpen,
                    [g.isInert]: $,
                }),
                style: I ? void 0 : { width: "min(".concat(Y.width, ", 100%)") },
                disabled: a,
                readOnly: l,
                fullWidth: I,
                children: [
                    (0, r.jsx)(d.tEY, {
                        ringTarget: q,
                        children: (0, r.jsxs)("button", {
                            ref: z,
                            autoFocus: b,
                            className: g.selectButton,
                            onClick: ee,
                            onKeyDown: er,
                            disabled: a || l,
                            "aria-expanded": Y.isOpen,
                            "aria-busy": E,
                            "aria-haspopup": "listbox",
                            "aria-controls": H,
                            "aria-describedby": "".concat(null == K ? void 0 : K.describedById),
                            "aria-errormessage": null == K ? void 0 : K.errorMessageId,
                            "aria-invalid": (null == K ? void 0 : K.errorMessageId) != null,
                            children: [
                                (0, r.jsxs)(u.n, {
                                    children: [N, ", "],
                                }),
                                (0, r.jsx)(R, {
                                    placeholder: C,
                                    selectedItems: Y.selectedItems,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(w, {
                        show: !0 === O && !$ && Q,
                        onClick: en,
                    }),
                    (0, r.jsx)(D, {
                        isOpen: Y.isOpen,
                        loading: E,
                        onClick: ee,
                    }),
                ],
            }),
            (0, r.jsx)(L, {
                name: x,
                form: j,
                disabled: $,
                autoComplete: M,
                selectionMode: t,
                selectedItems: Y.selectedItems,
                onSelectionChange: ea,
                listItems: Y.listItems,
            }),
            !$ &&
                (0, r.jsx)(_.L, {
                    targetElementRef: z,
                    isOpen: Y.isOpen,
                    onRequestClose: et,
                    width: Y.width,
                    height: Y.dropDownHeight,
                    children: (0, r.jsx)(p.w, {
                        id: H,
                        required: n,
                        items: Y.listItems,
                        selectionMode: t,
                        selectedItems: Y.selectedItems,
                        onSelectionChange: ea,
                        shouldFocusWrap: S,
                        renderListItem: (e) => (0, r.jsx)(P, { item: e }),
                    }),
                }),
        ],
    });
}
function R(e) {
    let { placeholder: t, selectedItems: n } = e;
    if (null == n || 0 === n.size)
        return (0, r.jsx)("div", {
            className: g.placeholder,
            children: (0, r.jsx)(d.xvT, {
                variant: "text-md/normal",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
        });
    let i = Array.from(n);
    return i.length > 1
        ? (0, r.jsx)("div", {
              className: g.multipleValues,
              children: (0, r.jsx)(d.xvT, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: i.map((e) => e.label).join(", "),
              }),
          })
        : (0, r.jsx)(P, { item: i[0] });
}
function P(e) {
    let { item: t } = e;
    return (0, r.jsx)("div", {
        className: E.listBoxItemContent,
        children: (0, r.jsx)(d.xvT, {
            variant: "text-md/medium",
            color: "currentColor",
            children: t.label,
        }),
    });
}
function w(e) {
    let { show: t, onClick: n } = e;
    return t
        ? (0, r.jsx)(d.tEY, {
              children: (0, r.jsx)("button", {
                  className: g.clearButton,
                  "aria-label": m.intl.string(h.default.JA5C7O),
                  onClick: n,
                  children: (0, r.jsx)(d.k$p, {
                      size: "xs",
                      color: "currentColor",
                  }),
              }),
          })
        : (0, r.jsx)("span", {});
}
function D(e) {
    let { isOpen: t, loading: n, onClick: i } = e;
    return (0, r.jsx)("button", {
        "aria-hidden": !0,
        tabIndex: -1,
        className: g.chevronButton,
        onClick: i,
        children: n
            ? (0, r.jsx)(d.$jN, { type: d.RAz.PULSING_ELLIPSIS })
            : (0, r.jsx)("span", {
                  className: o()(g.chevronIcon, { [g.isOpen]: t }),
                  children: (0, r.jsx)(d.hic, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
    });
}
function L(e) {
    let {
        name: t,
        form: n,
        disabled: i,
        autoComplete: a,
        selectionMode: o,
        selectedItems: s,
        onSelectionChange: l,
        listItems: c,
    } = e;
    if (null == t && (null == a || "off" === a)) return null;
    function d(e) {
        let t = Array.from(e.target.selectedOptions).map((e) => e.dataset.id);
        l(new Set(c.filter((e) => t.includes(e.id))));
    }
    return (0, r.jsx)(u.n, {
        children: (0, r.jsx)("select", {
            "aria-hidden": !0,
            tabIndex: -1,
            disabled: i,
            name: t,
            form: n,
            multiple: "multiple" === o,
            autoComplete: a,
            onChange: d,
            children:
                null == c
                    ? void 0
                    : c.map((e) => {
                          let t = "object" == typeof e.value ? JSON.stringify(e.value) : String(e.value);
                          return (0, r.jsx)(
                              "option",
                              {
                                  "data-id": e.id,
                                  value: t,
                                  selected: s.has(e),
                                  children: e.label,
                              },
                              e.id,
                          );
                      }),
        }),
    });
}

n.d(t, { P: () => C }), n(953529), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(61247),
    o = n(753187),
    s = n(993517),
    l = n(635041),
    c = n(448814),
    u = n(793030),
    d = n(393238),
    f = n(199823),
    _ = n(713072),
    p = n(626921),
    h = n(483753),
    m = n(490340),
    g = n(388032),
    E = n(680765);
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
let S = 24,
    A = 36;
function C(e) {
    var { hideLabel: t, description: n, helperText: i, errorMessage: a, successMessage: s } = e,
        l = I(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
    let { id: c, required: u, label: d } = l;
    return (0, r.jsx)(o.N, {
        id: c,
        required: u,
        label: d,
        hideLabel: t,
        description: n,
        helperText: i,
        errorMessage: a,
        successMessage: s,
        "data-mana-component": "select",
        children: (0, r.jsx)(N, y({}, l)),
    });
}
function N(e) {
    let {
            selectionMode: t,
            id: n,
            required: o,
            disabled: d,
            readOnly: b,
            loading: O,
            autoFocus: I,
            clearable: T,
            fullWidth: C,
            closeOnSelect: N = !0,
            shouldFocusWrap: w,
            placeholder: D = g.intl.string(m.default["A+pfVV"]),
            label: L,
            name: x,
            form: M,
            autoComplete: j,
            maxOptionsVisible: k = 5,
            options: U,
            renderOption: G,
            onSelectionChange: B,
            value: Z,
            defaultValue: F,
        } = e,
        V = void 0 !== Z,
        {
            isOpen: H,
            setIsOpen: Y,
            refs: W,
            floatingStyles: K,
            getReferenceProps: z,
            getFloatingProps: q,
        } = (0, u.ON0)({
            placement: "bottom",
            matchReferenceWidth: !0,
        }),
        X = i.useId(),
        [Q, J] = i.useState({
            isInitialized: !1,
            activeDescendantIndex: null,
            listItems: [],
            filteredItems: [],
            selectedItems: [],
            longestLabelCharCount: 5,
            width: "200px",
        }),
        $ = i.useContext(s.U),
        ee = i.useRef(null),
        et = i.useRef(null),
        en = null != N ? N : "multiple" !== t,
        er = Q.selectedItems.length > 0,
        ei = !Q.isInitialized || d || b || O,
        { measuredWidth: ea, itemsForMeasurement: eo } = R(Q.listItems, t),
        es = i.useCallback(() => {
            ei || Y(!H);
        }, [ei, Y, H]),
        el = i.useCallback(() => {
            var e;
            Y(!1), null == (e = ee.current) || e.focus();
        }, [Y]),
        ec = i.useCallback(() => {
            var e;
            J((e) => v(y({}, e), { selectedItems: [] })), B(null), null == (e = ee.current) || e.focus();
        }, [B]),
        eu = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "ArrowDown":
                        e.preventDefault(), Y(!0);
                        break;
                    case "Escape":
                        er && T && (e.preventDefault(), e.stopPropagation(), ec());
                }
            },
            [ec, er, T, Y],
        ),
        ed = i.useCallback((e) => (null != G ? G(e) : e), [G]);
    i.useLayoutEffect(() => {
        let e = [],
            t = 6,
            n = U.map((n) => {
                let r = ed(n);
                return (
                    (t = Math.max(t, r.label.length)),
                    !Q.isInitialized && (null != Z || null != F) && (0, h._s)(r.value, null != Z ? Z : F) && e.push(r),
                    r
                );
            });
        J((r) =>
            v(y({}, r), {
                listItems: n,
                isInitialized: !0,
                longestLabelCharCount: t,
                selectedItems: r.isInitialized ? r.selectedItems : e,
            }),
        );
    }, [U, ed]),
        i.useEffect(() => {
            !ei &&
                V &&
                (null == Z
                    ? J((e) => v(y({}, e), { selectedItems: [] }))
                    : J((e) => v(y({}, e), { selectedItems: e.listItems.filter((e) => (0, h._s)(e.value, Z)) })));
        }, [Z, ei, V]);
    let ef = i.useMemo(() => {
            if (!C) return "".concat((null != ea ? ea : 200) * ("multiple" === t ? 1.5 : 1) + !!T * S + A + 8, "px");
        }, [C, ea, t, T]),
        e_ = i.useCallback(
            (e) => {
                if (ei) return;
                let n = Array.from(e);
                if ("multiple" === t && n.length < 1) B(null);
                else if ("multiple" === t) B(n.map((e) => e.value));
                else {
                    var r, i;
                    B(null != (i = null == (r = n[0]) ? void 0 : r.value) ? i : null);
                }
                en && H && el(), J((t) => v(y({}, t), { selectedItems: e }));
            },
            [ei, t, B, en, el, H],
        ),
        ep = (0, a.Z)(et, W.setReference);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(
                p.q,
                v(
                    y(
                        {
                            ref: ep,
                            disabled: d,
                            readOnly: b,
                            loading: O,
                            clearable: T,
                            fullWidth: C,
                            isOpen: H,
                            isInert: ei,
                            hasValue: er,
                            width: ef,
                            handleToggle: es,
                            handleClear: ec,
                        },
                        z(),
                    ),
                    {
                        children: (0, r.jsx)(u.tEY, {
                            ringTarget: et,
                            children: (0, r.jsxs)("button", {
                                id: n,
                                ref: ee,
                                autoFocus: I,
                                className: E.selectButton,
                                onClick: es,
                                onKeyDown: eu,
                                disabled: d || b,
                                "aria-expanded": H,
                                "aria-busy": O,
                                "aria-haspopup": "listbox",
                                "aria-controls": X,
                                "aria-describedby": "".concat(null == $ ? void 0 : $.describedById),
                                "aria-errormessage": null == $ ? void 0 : $.errorMessageId,
                                "aria-invalid": (null == $ ? void 0 : $.errorMessageId) != null,
                                children: [
                                    (0, r.jsxs)(l.n, {
                                        children: [L, ", "],
                                    }),
                                    (0, r.jsx)(P, {
                                        placeholder: D,
                                        selectedItems: Q.selectedItems,
                                    }),
                                ],
                            }),
                        }),
                    },
                ),
            ),
            (0, r.jsx)(f.M, {
                name: x,
                form: M,
                disabled: ei,
                autoComplete: j,
                selectionMode: t,
                selectedItems: Q.selectedItems,
                onSelectionChange: e_,
                listItems: Q.listItems,
            }),
            !C && eo,
            !ei &&
                H &&
                (0, r.jsx)(
                    "div",
                    v(
                        y(
                            {
                                ref: W.setFloating,
                                className: E.selectDropdown,
                            },
                            q(),
                        ),
                        {
                            style: K,
                            children: (0, r.jsx)(u.VqE, {
                                children: (0, r.jsx)(c.w, {
                                    id: X,
                                    required: o,
                                    items: Q.listItems,
                                    selectionMode: t,
                                    selectedItems: Q.selectedItems,
                                    onSelectionChange: e_,
                                    shouldFocusWrap: w,
                                    renderListItem: (e) => (0, r.jsx)(_.W, y({}, e)),
                                    maxVisibleItems: k,
                                }),
                            }),
                        },
                    ),
                ),
        ],
    });
}
function R(e, t) {
    let { ref: n, width: a } = (0, d.ZP)(),
        o = i.useId();
    return {
        measuredWidth: a,
        itemsForMeasurement: i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    ref: n,
                    style: {
                        position: "absolute",
                        visibility: "hidden",
                        pointerEvents: "none",
                        width: "max-content",
                    },
                    "aria-hidden": "true",
                    children: (0, r.jsx)(c.w, {
                        id: "measurement-".concat(o),
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(_.W, y({}, e)),
                    }),
                }),
            [e, t, o, n],
        ),
    };
}
function P(e) {
    let { placeholder: t, selectedItems: n } = e;
    return null == n || 0 === n.length
        ? (0, r.jsx)("div", {
              className: E.placeholder,
              children: (0, r.jsx)(u.xvT, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : n.length > 1
          ? (0, r.jsx)("div", {
                className: E.multipleValues,
                children: (0, r.jsx)(u.xvT, {
                    variant: "text-md/normal",
                    color: "currentColor",
                    lineClamp: 1,
                    children: n.map((e) => e.label).join(", "),
                }),
            })
          : (0, r.jsx)(_.W, y({}, n[0]));
}

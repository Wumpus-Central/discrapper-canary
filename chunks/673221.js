n.d(t, { P: () => R });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(61247),
    l = n(483566),
    c = n(635041),
    u = n(448814),
    d = n(793030),
    f = n(393238),
    p = n(199823),
    _ = n(713072),
    m = n(626921),
    h = n(415540),
    g = n(345729),
    E = n(483753),
    b = n(298200),
    y = n(388032),
    O = n(680765);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = 24,
    P = 36;
function R(e) {
    var {
            selectionMode: t,
            readOnly: n,
            autoFocus: a,
            clearable: f,
            fullWidth: v,
            closeOnSelect: I = !0,
            shouldFocusWrap: C,
            placeholder: R = y.intl.string(b.default["A+pfVR"]),
            name: x,
            form: L,
            autoComplete: j,
            maxOptionsVisible: M = 5,
            options: k,
            formatOption: U,
            onSelectionChange: G,
            value: Z,
            wrapTags: B = !1,
        } = e,
        F = A(e, [
            "selectionMode",
            "readOnly",
            "autoFocus",
            "clearable",
            "fullWidth",
            "closeOnSelect",
            "shouldFocusWrap",
            "placeholder",
            "name",
            "form",
            "autoComplete",
            "maxOptionsVisible",
            "options",
            "formatOption",
            "onSelectionChange",
            "value",
            "wrapTags",
        ]);
    let V = i.useRef(null),
        { fieldProps: H } = (0, l.X)(F),
        { id: Y, required: W, label: K, disabled: z } = H,
        {
            isOpen: q,
            setIsOpen: Q,
            refs: X,
            floatingStyles: J,
            getReferenceProps: $,
            getFloatingProps: ee,
            transitionStyles: et,
        } = (0, g.C)(),
        en = i.useId(),
        { options: er, loading: ei } = (0, h.U)({
            active: q,
            options: k,
            renderOption: U,
        }),
        ea = i.useRef(null),
        eo = i.useRef(null),
        es = null != I ? I : "multiple" !== t,
        el = Array.isArray(Z) ? Z.length > 0 : null != Z,
        ec = z || n,
        { measuredWidth: eu, itemsForMeasurement: ed } = w(er, t),
        ef = i.useCallback(() => {
            ec || Q(!q);
        }, [ec, Q, q]),
        ep = i.useCallback(() => {
            var e;
            Q(!1), null == (e = ea.current) || e.focus();
        }, [Q]),
        e_ = i.useCallback(() => {
            var e;
            "multiple" === t ? G([]) : G(null), null == (e = ea.current) || e.focus();
        }, [G, t]);
    i.useEffect(() => {
        if (a) {
            var e;
            null == (e = ea.current) || e.focus();
        }
    }, [a]);
    let em = i.useCallback(
            (e) => {
                var t, n, r, i, a, o;
                if (!ec)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), Q(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), null == (n = V.current) || null == (t = n.firstChild) || t.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), null == (i = V.current) || null == (r = i.lastChild) || r.focus();
                            break;
                        case "Backspace":
                            el &&
                                (e.preventDefault(), null == (o = V.current) || null == (a = o.lastChild) || a.focus());
                            break;
                        case "Escape":
                            el && f && (e.preventDefault(), e.stopPropagation(), e_());
                    }
            },
            [e_, el, f, Q, ec],
        ),
        eh = i.useMemo(() => {
            let e = Array.isArray(Z) ? Z : [Z];
            return er.filter((t) => (0, E._s)(t.value, e));
        }, [Z, er]),
        eg = i.useMemo(() => {
            if (!v)
                return "".concat(
                    Math.max(null != eu ? eu : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!f * N + P + 12,
                    "px",
                );
        }, [v, eu, t, f]),
        eE = i.useCallback(
            (e) => {
                if (ec) return;
                let n = Array.from(e);
                if ("multiple" === t && n.length < 1) G([]);
                else if ("multiple" === t) G(n.map((e) => e.value));
                else {
                    var r, i;
                    G(null != (i = null == (r = n[0]) ? void 0 : r.value) ? i : null);
                }
                es && q && ep();
            },
            [ec, t, G, es, ep, q],
        ),
        eb = "multiple" === t && eh.length > 0,
        ey = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(ey.current),
            eb &&
                !B &&
                (ey.current = setTimeout(() => {
                    var e, t;
                    null == (t = V.current) ||
                        null == (e = t.lastElementChild) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            inline: "end",
                            block: "end",
                        });
                }, 10));
    }, [eh, eb, B]);
    let eO = (0, s.Z)(eo, X.setReference),
        ev = i.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e)[0],
                    n = eh.filter((e) => e.id !== t);
                if ((eE(n), 0 === n.length)) {
                    var r;
                    null == (r = ea.current) || r.focus();
                }
            },
            [eE, eh, ec],
        ),
        eS = i.useRef(null);
    return (
        i.useEffect(
            () => (
                !ei &&
                    q &&
                    (eS.current = setTimeout(() => {
                        var e;
                        return null == (e = document.getElementById((0, E.cA)(en, 0))) ? void 0 : e.focus();
                    }, 10)),
                () => {
                    null != eS.current && clearTimeout(eS.current);
                }
            ),
            [ei, en, q],
        ),
        (0, r.jsx)(
            l.g,
            T(S({}, H), {
                "data-mana-component": "select",
                layoutConfig: { horizontalControlColumnWidth: "min(".concat(eg, ", 50%)") },
                children: (e) =>
                    (0, r.jsxs)("div", {
                        style: { width: v ? "100%" : "min(".concat(eg, ", 100%)") },
                        children: [
                            (0, r.jsx)(
                                m.q,
                                T(
                                    S(
                                        {
                                            ref: eO,
                                            disabled: z,
                                            readOnly: n,
                                            loading: ei,
                                            clearable: f,
                                            fullWidth: v,
                                            isOpen: q,
                                            isInert: ec,
                                            hasValue: el,
                                            hasError: (null == e ? void 0 : e.errorMessageId) != null,
                                            handleToggle: ef,
                                            handleClear: e_,
                                        },
                                        $(),
                                    ),
                                    {
                                        children: (0, r.jsxs)(d.kL8, {
                                            "aria-label": K,
                                            buttonRef: ea,
                                            buttonProps: T(S({}, null != Y ? { id: Y } : {}), {
                                                style: { marginLeft: -4 },
                                            }),
                                            focusProps: { ringTarget: eo },
                                            className: o()(O.selectButton, {
                                                [O.wrapTags]: B,
                                                [O.multiSelect]: "multiple" === t,
                                            }),
                                            onClick: ef,
                                            onKeyDown: em,
                                            "aria-expanded": q,
                                            "aria-busy": ei,
                                            "aria-haspopup": "listbox",
                                            "aria-controls": en,
                                            "aria-describedby": null == e ? void 0 : e.describedById,
                                            "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                            "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                            children: [
                                                (0, r.jsxs)(c.n, {
                                                    children: [K, ", "],
                                                }),
                                                (0, r.jsx)(D, {
                                                    tagGroupRef: V,
                                                    placeholder: R,
                                                    selectionMode: t,
                                                    selectedItems: eh,
                                                    onRemove: ev,
                                                }),
                                            ],
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsx)(p.M, {
                                name: x,
                                form: L,
                                disabled: ec,
                                autoComplete: j,
                                selectionMode: t,
                                selectedItems: eh,
                                onSelectionChange: eE,
                                listItems: er,
                            }),
                            !v && ed,
                            !ec &&
                                q &&
                                (0, r.jsx)(
                                    "div",
                                    T(
                                        S(
                                            {
                                                ref: X.setFloating,
                                                className: O.selectDropdown,
                                            },
                                            ee(),
                                        ),
                                        {
                                            style: S({}, J, et),
                                            children: (0, r.jsx)(d.VqE, {
                                                children: (0, r.jsx)(u.w, {
                                                    id: en,
                                                    required: W,
                                                    items: er,
                                                    selectionMode: t,
                                                    selectedItems: eh,
                                                    onSelectionChange: eE,
                                                    shouldFocusWrap: C,
                                                    renderListItem: (e) => (0, r.jsx)(_.W, S({}, e)),
                                                    maxVisibleItems: M,
                                                    loading: ei,
                                                    typeahead: !0,
                                                }),
                                            }),
                                        },
                                    ),
                                ),
                        ],
                    }),
            }),
        )
    );
}
function w(e, t) {
    let { ref: n, width: a } = (0, f.ZP)(),
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
                    children: (0, r.jsx)(u.w, {
                        id: "measurement-".concat(o),
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(_.W, S({}, e)),
                    }),
                }),
            [e, t, o, n],
        ),
    };
}
function D(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: a, tagGroupRef: o } = e;
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: O.placeholder,
              children: (0, r.jsx)(d.xvT, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(d.QSK, {
                listRef: o,
                label: y.intl.string(b.default.VMNfsY),
                items: i,
                layout: "inline",
                onRemove: a,
            })
          : (0, r.jsx)(_.W, T(S({}, i[0]), { inInput: !0 }));
}

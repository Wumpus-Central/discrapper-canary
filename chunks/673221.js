n.d(t, { P: () => R });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(61247),
    l = n(483566),
    c = n(590154),
    u = n(635041),
    d = n(448814),
    f = n(793030),
    _ = n(393238),
    p = n(199823),
    h = n(713072),
    m = n(626921),
    g = n(415540),
    E = n(345729),
    b = n(483753),
    y = n(982519),
    O = n(388032),
    v = n(680765);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 24,
    N = 36;
function R(e) {
    let { fieldProps: t, props: n } = (0, l.X)(e),
        { id: i, required: a, label: o } = t;
    return (0, r.jsx)(
        l.g,
        A(T({}, t), {
            "data-mana-component": "select",
            children: (0, r.jsx)(
                P,
                A(T({}, n), {
                    id: i,
                    required: a,
                    label: o,
                }),
            ),
        }),
    );
}
function P(e) {
    let {
            selectionMode: t,
            id: n,
            required: a,
            disabled: l,
            readOnly: _,
            autoFocus: I,
            clearable: S,
            fullWidth: R,
            closeOnSelect: P = !0,
            shouldFocusWrap: x,
            placeholder: L = O.intl.string(y.default["A+pfVR"]),
            label: M,
            name: j,
            form: k,
            autoComplete: U,
            maxOptionsVisible: G = 5,
            options: B,
            formatOption: Z,
            onSelectionChange: F,
            value: V,
            wrapTags: H = !1,
        } = e,
        Y = i.useRef(null),
        {
            isOpen: W,
            setIsOpen: K,
            refs: z,
            floatingStyles: q,
            getReferenceProps: X,
            getFloatingProps: Q,
            transitionStyles: J,
        } = (0, E.C)(),
        $ = i.useId(),
        { options: ee, loading: et } = (0, g.U)({
            active: W,
            options: B,
            renderOption: Z,
        }),
        en = i.useContext(c.z),
        er = i.useRef(null),
        ei = i.useRef(null),
        ea = null != P ? P : "multiple" !== t,
        eo = Array.isArray(V) ? V.length > 0 : null != V,
        es = l || _,
        { measuredWidth: el, itemsForMeasurement: ec } = w(ee, t),
        eu = i.useCallback(() => {
            es || K(!W);
        }, [es, K, W]),
        ed = i.useCallback(() => {
            var e;
            K(!1), null == (e = er.current) || e.focus();
        }, [K]),
        ef = i.useCallback(() => {
            var e;
            "multiple" === t ? F([]) : F(null), null == (e = er.current) || e.focus();
        }, [F, t]);
    i.useEffect(() => {
        if (I) {
            var e;
            null == (e = er.current) || e.focus();
        }
    }, [I]);
    let e_ = i.useCallback(
            (e) => {
                var t, n, r, i, a, o;
                if (!es)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), K(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), null == (n = Y.current) || null == (t = n.firstChild) || t.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), null == (i = Y.current) || null == (r = i.lastChild) || r.focus();
                            break;
                        case "Backspace":
                            eo &&
                                (e.preventDefault(), null == (o = Y.current) || null == (a = o.lastChild) || a.focus());
                            break;
                        case "Escape":
                            eo && S && (e.preventDefault(), e.stopPropagation(), ef());
                    }
            },
            [ef, eo, S, K, es],
        ),
        ep = i.useMemo(() => {
            let e = Array.isArray(V) ? V : [V];
            return ee.filter((t) => (0, b._s)(t.value, e));
        }, [V, ee]),
        eh = i.useMemo(() => {
            if (!R)
                return "".concat(
                    Math.max(null != el ? el : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!S * C + N + 8,
                    "px",
                );
        }, [R, el, t, S]),
        em = i.useCallback(
            (e) => {
                if (es) return;
                let n = Array.from(e);
                if ("multiple" === t && n.length < 1) F([]);
                else if ("multiple" === t) F(n.map((e) => e.value));
                else {
                    var r, i;
                    F(null != (i = null == (r = n[0]) ? void 0 : r.value) ? i : null);
                }
                ea && W && ed();
            },
            [es, t, F, ea, ed, W],
        ),
        eg = "multiple" === t && ep.length > 0,
        eE = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eE.current),
            eg &&
                !H &&
                (eE.current = setTimeout(() => {
                    var e, t;
                    null == (t = Y.current) ||
                        null == (e = t.lastElementChild) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            inline: "end",
                            block: "end",
                        });
                }, 10));
    }, [ep, eg, H]);
    let eb = (0, s.Z)(ei, z.setReference),
        ey = i.useCallback(
            (e) => {
                if (es) return;
                let t = Array.from(e)[0],
                    n = ep.filter((e) => e.id !== t);
                if ((em(n), 0 === n.length)) {
                    var r;
                    null == (r = er.current) || r.focus();
                }
            },
            [em, ep, es],
        ),
        eO = i.useRef(null);
    return (
        i.useEffect(
            () => (
                !et &&
                    W &&
                    (eO.current = setTimeout(() => {
                        var e;
                        return null == (e = document.getElementById((0, b.cA)($, 0))) ? void 0 : e.focus();
                    }, 10)),
                () => {
                    null != eO.current && clearTimeout(eO.current);
                }
            ),
            [et, $, W],
        ),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(
                    m.q,
                    A(
                        T(
                            {
                                ref: eb,
                                disabled: l,
                                readOnly: _,
                                loading: et,
                                clearable: S,
                                fullWidth: R,
                                isOpen: W,
                                isInert: es,
                                hasValue: eo,
                                hasError: (null == en ? void 0 : en.errorMessageId) != null,
                                width: eh,
                                handleToggle: eu,
                                handleClear: ef,
                            },
                            X(),
                        ),
                        {
                            children: (0, r.jsxs)(f.kL8, {
                                "aria-label": M,
                                buttonRef: er,
                                buttonProps: A(T({}, null != n ? { id: n } : {}), { style: { marginLeft: -4 } }),
                                focusProps: { ringTarget: ei },
                                className: o()(v.selectButton, {
                                    [v.wrapTags]: H,
                                    [v.multiSelect]: "multiple" === t,
                                }),
                                onClick: eu,
                                onKeyDown: e_,
                                "aria-expanded": W,
                                "aria-busy": et,
                                "aria-haspopup": "listbox",
                                "aria-controls": $,
                                "aria-describedby": null == en ? void 0 : en.describedById,
                                "aria-errormessage": null == en ? void 0 : en.errorMessageId,
                                "aria-invalid": (null == en ? void 0 : en.errorMessageId) != null,
                                children: [
                                    (0, r.jsxs)(u.n, {
                                        children: [M, ", "],
                                    }),
                                    (0, r.jsx)(D, {
                                        tagGroupRef: Y,
                                        placeholder: L,
                                        selectionMode: t,
                                        selectedItems: ep,
                                        onRemove: ey,
                                    }),
                                ],
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(p.M, {
                    name: j,
                    form: k,
                    disabled: es,
                    autoComplete: U,
                    selectionMode: t,
                    selectedItems: ep,
                    onSelectionChange: em,
                    listItems: ee,
                }),
                !R && ec,
                !es &&
                    W &&
                    (0, r.jsx)(
                        "div",
                        A(
                            T(
                                {
                                    ref: z.setFloating,
                                    className: v.selectDropdown,
                                },
                                Q(),
                            ),
                            {
                                style: T({}, q, J),
                                children: (0, r.jsx)(f.VqE, {
                                    children: (0, r.jsx)(d.w, {
                                        id: $,
                                        required: a,
                                        items: ee,
                                        selectionMode: t,
                                        selectedItems: ep,
                                        onSelectionChange: em,
                                        shouldFocusWrap: x,
                                        renderListItem: (e) => (0, r.jsx)(h.W, T({}, e)),
                                        maxVisibleItems: G,
                                        loading: et,
                                        typeahead: !0,
                                    }),
                                }),
                            },
                        ),
                    ),
            ],
        })
    );
}
function w(e, t) {
    let { ref: n, width: a } = (0, _.ZP)(),
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
                    children: (0, r.jsx)(d.w, {
                        id: "measurement-".concat(o),
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(h.W, T({}, e)),
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
              className: v.placeholder,
              children: (0, r.jsx)(f.xvT, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(f.QSK, {
                listRef: o,
                label: O.intl.string(y.default.VMNfsY),
                items: i,
                layout: "inline",
                onRemove: a,
            })
          : (0, r.jsx)(h.W, A(T({}, i[0]), { inInput: !0 }));
}

n.d(t, { l: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(612324),
    l = n(452027),
    c = n(140735),
    u = n(540637),
    d = n(158954),
    f = n(827734),
    p = n(397927),
    _ = n(765671),
    h = n(296898),
    m = n(332661),
    g = n(430858),
    E = n(376811),
    b = n(700713),
    y = n(641487),
    O = n(763600),
    A = n(985018),
    v = n(526008);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = 24,
    P = 36;
function D(e) {
    let {
            selectionMode: t,
            readOnly: n,
            autoFocus: a,
            clearable: _,
            fullWidth: S,
            closeOnSelect: T = !0,
            shouldFocusWrap: R,
            placeholder: D = A.intl.string(O.default["A+pfVR"]),
            name: j,
            form: M,
            autoComplete: k,
            maxOptionsVisible: U = 5,
            options: G,
            formatOption: V,
            onSelectionChange: F,
            value: B,
            wrapTags: H = !1,
        } = e,
        Y = N(e, [
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
        ]),
        W = i.useRef(null),
        { fieldProps: K } = (0, l.n)(Y),
        { id: z, required: q, label: X, disabled: Z } = K,
        {
            isOpen: Q,
            setIsOpen: $,
            refs: J,
            floatingStyles: ee,
            getReferenceProps: et,
            getFloatingProps: en,
            transitionStyles: er,
        } = (0, b.G)(),
        ei = i.useId(),
        { options: ea, loading: es } = (0, E.K)({
            active: Q,
            options: G,
            renderOption: V,
        }),
        eo = i.useRef(null),
        el = i.useRef(null),
        ec = null != T ? T : "multiple" !== t,
        eu = Array.isArray(B) ? B.length > 0 : null != B,
        ed = Z || n,
        { measuredWidth: ef, itemsForMeasurement: ep } = x(ea, t),
        e_ = i.useCallback(() => {
            ed || $(!Q);
        }, [ed, $, Q]),
        eh = i.useCallback(() => {
            var e;
            $(!1), null == (e = eo.current) || e.focus();
        }, [$]),
        em = i.useCallback(() => {
            var e;
            !1 !== _ && ("multiple" === t ? F([]) : F(null), null == (e = eo.current) || e.focus());
        }, [F, t, _]);
    i.useEffect(() => {
        if (a) {
            var e;
            null == (e = eo.current) || e.focus();
        }
    }, [a]);
    let eg = i.useCallback(
            (e) => {
                var t, n, r, i, a, s;
                if (!ed)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), $(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), null == (n = W.current) || null == (t = n.firstChild) || t.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), null == (i = W.current) || null == (r = i.lastChild) || r.focus();
                            break;
                        case "Backspace":
                            eu &&
                                (e.preventDefault(), null == (s = W.current) || null == (a = s.lastChild) || a.focus());
                            break;
                        case "Escape":
                            eu && _ && (e.preventDefault(), e.stopPropagation(), em());
                    }
            },
            [em, eu, _, $, ed],
        ),
        eE = i.useMemo(() => {
            let e = Array.isArray(B) ? B : [B];
            return ea.filter((t) => (0, y.fI)(t.value, e));
        }, [B, ea]),
        eb = i.useMemo(() => {
            if (!S)
                return "".concat(
                    Math.max(null != ef ? ef : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!_ * w + P + 12,
                    "px",
                );
        }, [S, ef, t, _]),
        ey = i.useCallback(
            (e) => {
                if (ed) return;
                let n = Array.from(e);
                if ("multiple" === t && n.length < 1) F([]);
                else if ("multiple" === t) F(n.map((e) => e.value));
                else {
                    var r;
                    F(null == (r = n[0]) ? void 0 : r.value);
                }
                ec && Q && eh();
            },
            [ed, t, F, ec, eh, Q],
        ),
        eO = "multiple" === t && eE.length > 0,
        eA = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eA.current),
            eO &&
                !H &&
                (eA.current = setTimeout(() => {
                    var e, t;
                    null == (t = W.current) ||
                        null == (e = t.lastElementChild) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            inline: "end",
                            block: "end",
                        });
                }, 10));
    }, [eE, eO, H]);
    let ev = (0, o.A)(el, J.setReference),
        eS = i.useCallback(
            (e) => {
                if (ed) return;
                let t = Array.from(e)[0],
                    n = eE.filter((e) => e.id !== t);
                if ((ey(n), 0 === n.length)) {
                    var r;
                    null == (r = eo.current) || r.focus();
                }
            },
            [ey, eE, ed],
        ),
        eI = Math.max(
            ea.findIndex((e) => {
                var t;
                return e.id === (null == (t = eE[eE.length - 1]) ? void 0 : t.id);
            }),
            0,
        ),
        eT = i.useRef(null);
    i.useEffect(
        () => (
            !es &&
                Q &&
                (eT.current = setTimeout(() => {
                    var e;
                    return null == (e = document.getElementById((0, y.ZN)(ei, eI))) ? void 0 : e.focus();
                }, 10)),
            () => {
                null != eT.current && clearTimeout(eT.current);
            }
        ),
        [es, ei, Q, eI],
    );
    let eC = (0, p.rdh)(f.A.modules.select.MAX_WIDTH),
        eN = i.useMemo(() => ({ horizontalControlColumnWidth: "min(".concat(eC, "px, auto)") }), [eC]);
    function eR(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    g.p,
                    C(
                        I(
                            {
                                ref: ev,
                                disabled: Z,
                                readOnly: n,
                                loading: es,
                                clearable: _,
                                fullWidth: S,
                                isOpen: Q,
                                isInert: ed,
                                hasValue: eu,
                                hasError: (null == e ? void 0 : e.errorMessageId) != null,
                                handleToggle: e_,
                                handleClear: em,
                            },
                            et(),
                        ),
                        {
                            children: (0, r.jsxs)(d.sqX, {
                                "aria-label": X,
                                buttonRef: eo,
                                buttonProps: C(I({}, null != z ? { id: z } : {}), { style: { marginLeft: -4 } }),
                                focusProps: { ringTarget: el },
                                className: s()(v.L5, {
                                    [v.kj]: H,
                                    [v.M8]: "multiple" === t,
                                }),
                                onClick: e_,
                                onKeyDown: eg,
                                "aria-expanded": Q,
                                "aria-busy": es,
                                "aria-haspopup": "listbox",
                                "aria-controls": ei,
                                "aria-describedby": null == e ? void 0 : e.describedById,
                                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                children: [
                                    (0, r.jsxs)(c.A, {
                                        children: [X, ", "],
                                    }),
                                    (0, r.jsx)(L, {
                                        tagGroupRef: W,
                                        placeholder: D,
                                        selectionMode: t,
                                        selectedItems: eE,
                                        onRemove: eS,
                                    }),
                                ],
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(h.H, {
                    name: j,
                    form: M,
                    disabled: ed,
                    autoComplete: k,
                    selectionMode: t,
                    selectedItems: eE,
                    onSelectionChange: ey,
                    listItems: ea,
                }),
                !S && ep,
                !ed &&
                    Q &&
                    (0, r.jsx)(
                        "div",
                        C(
                            I(
                                {
                                    ref: J.setFloating,
                                    className: v.S_,
                                },
                                en(),
                            ),
                            {
                                style: I({}, ee, er),
                                children: (0, r.jsx)(d.lGe, {
                                    children: (0, r.jsx)(u.q, {
                                        id: ei,
                                        required: q,
                                        items: ea,
                                        selectionMode: t,
                                        selectedItems: eE,
                                        onSelectionChange: ey,
                                        shouldFocusWrap: R,
                                        renderListItem: (e) => (0, r.jsx)(m.c, I({}, e)),
                                        maxVisibleItems: U,
                                        loading: es,
                                        typeahead: !0,
                                    }),
                                }),
                            },
                        ),
                    ),
            ],
        });
    }
    return (0, r.jsx)(
        l.D,
        C(I({}, K), {
            "data-mana-component": "select",
            layoutConfig: eN,
            children: (e) =>
                (0, r.jsx)("div", {
                    style: { width: S ? "100%" : "minmax(".concat(eb, "px, 100%)") },
                    children: eR(e),
                }),
        }),
    );
}
function x(e, t) {
    let { ref: n, width: a } = (0, _.Ay)(),
        s = i.useId();
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
                    children: (0, r.jsx)(u.q, {
                        id: "measurement-".concat(s),
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(m.c, I({}, e)),
                    }),
                }),
            [e, t, s, n],
        ),
    };
}
function L(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: a, tagGroupRef: s } = e;
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: v.qf,
              children: (0, r.jsx)(d.EYj, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(d.CR_, {
                listRef: s,
                label: A.intl.string(O.default.VMNfsY),
                items: i,
                layout: "inline",
                onRemove: a,
            })
          : (0, r.jsx)(m.c, C(I({}, i[0]), { inInput: !0 }));
}

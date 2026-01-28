n.d(t, {
    l: () => x,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(494012),
    l = n(612324),
    c = n(827734),
    u = n(603392),
    d = n(890856),
    f = n(113325),
    p = n(452027),
    _ = n(140735),
    h = n(540637),
    m = n(460890),
    g = n(866711),
    E = n(834730),
    y = n(991957),
    b = n(44482),
    O = n(601973),
    v = n(483084),
    A = n(641668),
    I = n(715022),
    S = n(594597);

function T(e, t, n) {
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

function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
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

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function R(e, t) {
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
    if (((a = P(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let D = 24,
    L = 36;

function x(e) {
    let { i18n: t } = (0, m.G9)(),
        {
            selectionMode: n,
            readOnly: a,
            autoFocus: s,
            clearable: g,
            fullWidth: E,
            closeOnSelect: T = !0,
            shouldFocusWrap: N,
            placeholder: P = t.SELECT_PLACEHOLDER,
            name: x,
            form: k,
            autoComplete: U,
            maxOptionsVisible: G = 5,
            options: F,
            formatOption: V,
            onSelectionChange: B,
            value: H,
            wrapTags: Y = !1,
        } = e,
        W = R(e, [
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
        K = i.useRef(null),
        { fieldProps: z } = (0, p.n)(W),
        { id: q, required: Z, label: Q, disabled: X } = z,
        {
            isOpen: J,
            setIsOpen: $,
            refs: ee,
            floatingStyles: et,
            getReferenceProps: en,
            getFloatingProps: er,
            transitionStyles: ei,
        } = (0, A.G)(),
        ea = i.useId(),
        { options: eo, loading: es } = (0, v.K)({
            active: J,
            options: F,
            renderOption: V,
        }),
        el = i.useRef(null),
        ec = i.useRef(null),
        eu = null != T ? T : "multiple" !== n,
        ed = Array.isArray(H) ? H.length > 0 : null != H,
        ef = X || a,
        { measuredWidth: ep, itemsForMeasurement: e_ } = M(eo, n),
        eh = i.useCallback(() => {
            ef || $(!J);
        }, [ef, $, J]),
        em = i.useCallback(() => {
            var e;
            $(!1), null == (e = el.current) || e.focus();
        }, [$]),
        eg = i.useCallback(() => {
            var e;
            !1 !== g && ("multiple" === n ? B([]) : B(null), null == (e = el.current) || e.focus());
        }, [B, n, g]);
    i.useEffect(() => {
        if (s) {
            var e;
            null == (e = el.current) || e.focus();
        }
    }, [s]);
    let eE = i.useCallback(
            (e) => {
                var t, n, r, i, a, o;
                if (!ef)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), $(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), null == (n = K.current) || null == (t = n.firstChild) || t.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), null == (i = K.current) || null == (r = i.lastChild) || r.focus();
                            break;
                        case "Backspace":
                            ed &&
                                (e.preventDefault(), null == (o = K.current) || null == (a = o.lastChild) || a.focus());
                            break;
                        case "Escape":
                            ed && g && (e.preventDefault(), e.stopPropagation(), eg());
                    }
            },
            [eg, ed, g, $, ef],
        ),
        ey = i.useMemo(() => {
            let e = Array.isArray(H) ? H : [H];
            return eo.filter((t) => (0, I.fI)(t.value, e));
        }, [H, eo]),
        eb = i.useMemo(() => {
            if (!E)
                return "".concat(
                    Math.max(null != ep ? ep : 200, 200) * ("multiple" === n ? 1.5 : 1) + !!g * D + L + 12,
                    "px",
                );
        }, [E, ep, n, g]),
        eO = i.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e);
                if ("multiple" === n && t.length < 1) B([]);
                else if ("multiple" === n) B(t.map((e) => e.value));
                else {
                    var r;
                    B(null == (r = t[0]) ? void 0 : r.value);
                }
                eu && J && em();
            },
            [ef, n, B, eu, em, J],
        ),
        ev = "multiple" === n && ey.length > 0,
        eA = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eA.current),
            ev &&
                !Y &&
                (eA.current = setTimeout(() => {
                    var e, t;
                    null == (t = K.current) ||
                        null == (e = t.lastElementChild) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            inline: "end",
                            block: "end",
                        });
                }, 10));
    }, [ey, ev, Y]);
    let eI = (0, l.A)(ec, ee.setReference),
        eS = i.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e)[0],
                    n = ey.filter((e) => e.id !== t);
                if ((eO(n), 0 === n.length)) {
                    var r;
                    null == (r = el.current) || r.focus();
                }
            },
            [eO, ey, ef],
        ),
        eT = Math.max(
            eo.findIndex((e) => {
                var t;
                return e.id === (null == (t = ey[ey.length - 1]) ? void 0 : t.id);
            }),
            0,
        ),
        eC = i.useRef(null);
    i.useEffect(
        () => (
            !es &&
                J &&
                (eC.current = setTimeout(() => {
                    var e;
                    return null == (e = document.getElementById((0, I.ZN)(ea, eT))) ? void 0 : e.focus();
                }, 10)),
            () => {
                null != eC.current && clearTimeout(eC.current);
            }
        ),
        [es, ea, J, eT],
    );
    let eN = (0, u.r)(c.A.modules.select.MAX_WIDTH),
        ew = i.useMemo(
            () => ({
                horizontalControlColumnWidth: "min(".concat(eN, "px, auto)"),
            }),
            [eN],
        );

    function eR(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    O.p,
                    w(
                        C(
                            {
                                ref: eI,
                                disabled: X,
                                readOnly: a,
                                loading: es,
                                clearable: g,
                                fullWidth: E,
                                isOpen: J,
                                isInert: ef,
                                hasValue: ed,
                                hasError: (null == e ? void 0 : e.errorMessageId) != null,
                                handleToggle: eh,
                                handleClear: eg,
                            },
                            en(),
                        ),
                        {
                            children: (0, r.jsxs)(d.s, {
                                "aria-label": Q,
                                buttonRef: el,
                                buttonProps: w(
                                    C(
                                        {},
                                        null != q
                                            ? {
                                                  id: q,
                                              }
                                            : {},
                                    ),
                                    {
                                        style: {
                                            marginLeft: -4,
                                        },
                                    },
                                ),
                                focusProps: {
                                    ringTarget: ec,
                                },
                                className: o()(S.L5, {
                                    [S.kj]: Y,
                                    [S.M8]: "multiple" === n,
                                }),
                                onClick: eh,
                                onKeyDown: eE,
                                "aria-expanded": J,
                                "aria-busy": es,
                                "aria-haspopup": "listbox",
                                "aria-controls": ea,
                                "aria-describedby": null == e ? void 0 : e.describedById,
                                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                children: [
                                    (0, r.jsxs)(_.A, {
                                        children: [Q, ", "],
                                    }),
                                    (0, r.jsx)(j, {
                                        tagGroupRef: K,
                                        placeholder: P,
                                        selectionMode: n,
                                        selectedItems: ey,
                                        onRemove: eS,
                                    }),
                                ],
                            }),
                        },
                    ),
                ),
                (0, r.jsx)(y.H, {
                    name: x,
                    form: k,
                    disabled: ef,
                    autoComplete: U,
                    selectionMode: n,
                    selectedItems: ey,
                    onSelectionChange: eO,
                    listItems: eo,
                }),
                !E && e_,
                !ef &&
                    J &&
                    (0, r.jsx)(
                        "div",
                        w(
                            C(
                                {
                                    ref: ee.setFloating,
                                    className: S.S_,
                                },
                                er(),
                            ),
                            {
                                style: C({}, et, ei),
                                children: (0, r.jsx)(f.l, {
                                    children: (0, r.jsx)(h.q, {
                                        id: ea,
                                        required: Z,
                                        items: eo,
                                        selectionMode: n,
                                        selectedItems: ey,
                                        onSelectionChange: eO,
                                        shouldFocusWrap: N,
                                        renderListItem: (e) => (0, r.jsx)(b.c, C({}, e)),
                                        maxVisibleItems: G,
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
        p.D,
        w(C({}, z), {
            "data-mana-component": "select",
            layoutConfig: ew,
            children: (e) =>
                (0, r.jsx)("div", {
                    style: {
                        width: E ? "100%" : "minmax(".concat(eb, "px, 100%)"),
                    },
                    children: eR(e),
                }),
        }),
    );
}

function M(e, t) {
    let { ref: n, width: a } = (0, s.Ay)(),
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
                    children: (0, r.jsx)(h.q, {
                        id: "measurement-".concat(o),
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(b.c, C({}, e)),
                    }),
                }),
            [e, t, o, n],
        ),
    };
}

function j(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: a, tagGroupRef: o } = e,
        { i18n: s } = (0, m.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: S.qf,
              children: (0, r.jsx)(E.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(g.C, {
                listRef: o,
                label: s.SELECTED_TAGS_HEADING,
                items: i,
                layout: "inline",
                onRemove: a,
            })
          : (0, r.jsx)(
                b.c,
                w(C({}, i[0]), {
                    inInput: !0,
                }),
            );
}

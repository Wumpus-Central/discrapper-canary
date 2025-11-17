n.d(t, {
    PS: () => C,
    QS: () => S,
    Vp: () => R,
});
var r = n(23893),
    i = n(110294),
    a = n(595707),
    o = n(937397),
    s = n(644528),
    l = n(900090),
    c = n(913074),
    u = n(156748),
    d = n(819851),
    f = n(523902),
    _ = n(984940),
    p = n(106325),
    h = n(69771),
    m = n(406581),
    g = n(557635),
    E = n(880016),
    b = n(158821),
    y = n(413565),
    O = n(596218),
    v = n(473749);
let I = (0, v.createContext)(null),
    T = (0, v.createContext)(null),
    S = (0, v.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, a.pE)(e, t, I)),
            v.createElement(
                s.a$.Provider,
                { value: null },
                v.createElement(m.yF, { content: e.children }, (n) =>
                    v.createElement(A, {
                        props: e,
                        forwardedRef: t,
                        collection: n,
                    }),
                ),
            )
        );
    });
function A({ props: e, forwardedRef: t, collection: n }) {
    var r;
    let i = (0, v.useRef)(null),
        { id: c, ...u } = e;
    [u, i] = (0, a.pE)(u, i, l.lU);
    let { filter: _, shouldUseVirtualFocus: p, ...h } = u,
        [m, g] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]),
        b = (0, O.n)({
            ...h,
            children: void 0,
            collection: n,
        }),
        y = (0, O.d)(b, _),
        I = (0, E.z)(u, { global: !0 }),
        S = Object.fromEntries(Object.entries(I).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: A,
            labelProps: C,
            descriptionProps: N,
            errorMessageProps: R,
        } = (0, f.H)(
            {
                ...h,
                ...S,
                label: g,
            },
            y,
            i,
        );
    return v.createElement(
        "div",
        {
            ...I,
            id: c,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        v.createElement(
            a.zt,
            {
                values: [
                    [
                        o.n,
                        {
                            ...C,
                            elementType: "span",
                            ref: m,
                        },
                    ],
                    [
                        T,
                        {
                            ...A,
                            ref: i,
                        },
                    ],
                    [s.a$, y],
                    [
                        d.j,
                        {
                            slots: {
                                description: N,
                                errorMessage: R,
                            },
                        },
                    ],
                ],
            },
            e.children,
        ),
    );
}
let C = (0, v.forwardRef)(function (e, t) {
    return (0, v.useContext)(s.a$)
        ? v.createElement(N, {
              props: e,
              forwardedRef: t,
          })
        : v.createElement(m.FE, e);
});
function N({ props: e, forwardedRef: t }) {
    let n = (0, v.useContext)(s.a$),
        { CollectionRoot: r } = (0, v.useContext)(i.Qk),
        [o, l] = (0, a.pE)({}, t, T),
        { focusProps: c, isFocused: d, isFocusVisible: f } = (0, _.F)(),
        p = {
            isEmpty: 0 === n.collection.size,
            isFocused: d,
            isFocusVisible: f,
            state: n,
        },
        h = (0, a.aX)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-TagList",
            values: p,
        }),
        m = (0, i.pd)(n.selectionManager.focusedKey),
        g = (0, E.z)(e, { global: !0 });
    return v.createElement(
        "div",
        {
            ...(0, b.d)(g, h, o, c),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": f || void 0,
        },
        v.createElement(
            u.y,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(p)
                : v.createElement(r, {
                      collection: n.collection,
                      persistedKeys: m,
                  }),
        ),
    );
}
let R = (0, m.G5)(g.s$, (e, t, n) => {
    let o = (0, v.useContext)(s.a$),
        l = (0, y.B)(t),
        { focusProps: u, isFocusVisible: d } = (0, _.F)({ within: !1 }),
        { rowProps: f, gridCellProps: m, removeButtonProps: g, ...O } = (0, p.E)({ item: n }, o, l),
        { hoverProps: I, isHovered: T } = (0, h.X)({
            isDisabled: !O.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        S = (0, a.aX)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...O,
                isFocusVisible: d,
                isHovered: T,
                selectionMode: o.selectionManager.selectionMode,
                selectionBehavior: o.selectionManager.selectionBehavior,
            },
        });
    (0, v.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let A = (0, E.z)(e, { global: !0 });
    return (
        delete A.id,
        delete A.onClick,
        v.createElement(
            "div",
            {
                ref: l,
                ...(0, b.d)(A, S, f, u, I),
                "data-selected": O.isSelected || void 0,
                "data-disabled": O.isDisabled || void 0,
                "data-hovered": T || void 0,
                "data-focused": O.isFocused || void 0,
                "data-focus-visible": d || void 0,
                "data-pressed": O.isPressed || void 0,
                "data-allows-removing": O.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === o.selectionManager.selectionMode ? void 0 : o.selectionManager.selectionMode,
            },
            v.createElement(
                "div",
                {
                    ...m,
                    style: { display: "contents" },
                },
                v.createElement(
                    a.zt,
                    {
                        values: [
                            [r.b, { slots: { remove: g } }],
                            [i.Qk, i.Uu],
                            [c.p, { isSelected: O.isSelected }],
                        ],
                    },
                    S.children,
                ),
            ),
        )
    );
});

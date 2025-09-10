n.d(t, {
    PS: () => I,
    QS: () => O,
    Vp: () => S,
});
var r = n(267603),
    i = n(134387),
    a = n(477831),
    o = n(499339),
    s = n(834349),
    l = n(286468),
    c = n(525187),
    u = n(769175),
    d = n(235123),
    f = n(1334),
    _ = n(873954),
    p = n(436773),
    h = n(933492),
    m = n(158573),
    g = n(102851),
    E = n(647438);
let b = (0, E.createContext)(null),
    y = (0, E.createContext)(null),
    O = (0, E.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, a.pE)(e, t, b)),
            E.createElement(_.yF, { content: e.children }, (n) =>
                E.createElement(v, {
                    props: e,
                    forwardedRef: t,
                    collection: n,
                }),
            )
        );
    });
function v({ props: e, forwardedRef: t, collection: n }) {
    var r;
    let i = (0, E.useRef)(null),
        [u, d] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]),
        f = (0, g.n)({
            ...e,
            children: void 0,
            collection: n,
        }),
        _ = (0, p.z)(e, { global: !0 }),
        h = Object.fromEntries(Object.entries(_).map(([e]) => [e, void 0])),
        {
            gridProps: m,
            labelProps: b,
            descriptionProps: O,
            errorMessageProps: v,
        } = (0, c.H)(
            {
                ...e,
                ...h,
                label: d,
            },
            f,
            i,
        );
    return E.createElement(
        "div",
        {
            ..._,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        E.createElement(
            a.zt,
            {
                values: [
                    [
                        o.n,
                        {
                            ...b,
                            elementType: "span",
                            ref: u,
                        },
                    ],
                    [
                        y,
                        {
                            ...m,
                            ref: i,
                        },
                    ],
                    [s.a$, f],
                    [
                        l.j,
                        {
                            slots: {
                                description: O,
                                errorMessage: v,
                            },
                        },
                    ],
                ],
            },
            e.children,
        ),
    );
}
let I = (0, E.forwardRef)(function (e, t) {
    return (0, E.useContext)(s.a$)
        ? E.createElement(T, {
              props: e,
              forwardedRef: t,
          })
        : E.createElement(_.FE, e);
});
function T({ props: e, forwardedRef: t }) {
    let n = (0, E.useContext)(s.a$),
        { CollectionRoot: r } = (0, E.useContext)(i.Qk),
        [o, l] = (0, a.pE)({}, t, y),
        { focusProps: c, isFocused: d, isFocusVisible: f } = (0, u.F)(),
        _ = {
            isEmpty: 0 === n.collection.size,
            isFocused: d,
            isFocusVisible: f,
            state: n,
        },
        m = (0, a.aX)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-TagList",
            values: _,
        }),
        g = (0, i.pd)(n.selectionManager.focusedKey),
        b = (0, p.z)(e, { global: !0 });
    return E.createElement(
        "div",
        {
            ...(0, h.d)(b, m, o, c),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": f || void 0,
        },
        0 === n.collection.size && e.renderEmptyState
            ? e.renderEmptyState(_)
            : E.createElement(r, {
                  collection: n.collection,
                  persistedKeys: g,
              }),
    );
}
let S = (0, _.G5)("item", (e, t, n) => {
    let o = (0, E.useContext)(s.a$),
        l = (0, m.B)(t),
        { focusProps: c, isFocusVisible: _ } = (0, u.F)({ within: !1 }),
        { rowProps: g, gridCellProps: b, removeButtonProps: y, ...O } = (0, d.E)({ item: n }, o, l),
        { hoverProps: v, isHovered: I } = (0, f.X)({
            isDisabled: !O.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        T = (0, a.aX)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...O,
                isFocusVisible: _,
                isHovered: I,
                selectionMode: o.selectionManager.selectionMode,
                selectionBehavior: o.selectionManager.selectionBehavior,
            },
        });
    (0, E.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let S = (0, p.z)(e, { global: !0 });
    return (
        delete S.id,
        delete S.onClick,
        E.createElement(
            "div",
            {
                ref: l,
                ...(0, h.d)(S, T, g, c, v),
                "data-selected": O.isSelected || void 0,
                "data-disabled": O.isDisabled || void 0,
                "data-hovered": I || void 0,
                "data-focused": O.isFocused || void 0,
                "data-focus-visible": _ || void 0,
                "data-pressed": O.isPressed || void 0,
                "data-allows-removing": O.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === o.selectionManager.selectionMode ? void 0 : o.selectionManager.selectionMode,
            },
            E.createElement(
                "div",
                {
                    ...b,
                    style: { display: "contents" },
                },
                E.createElement(
                    a.zt,
                    {
                        values: [
                            [r.b, { slots: { remove: y } }],
                            [i.Qk, i.Uu],
                        ],
                    },
                    T.children,
                ),
            ),
        )
    );
});

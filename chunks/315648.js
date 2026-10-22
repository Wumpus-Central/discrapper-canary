n.d(t, { T2: () => $, Kp: () => X, oz: () => N, wb: () => U, tU: () => L });
var r = n(407815),
    i = n(866007),
    l = n(353509),
    a = n(986664),
    o = n(184093);
let s = new WeakMap();
function u(e, t, n) {
    if (!e) return "";
    "string" == typeof t && (t = t.replace(/\s+/g, ""));
    let r = s.get(e);
    return `${r}-${n}-${t}`;
}
class c {
    constructor(e, t, n, r = new Set()) {
        ((this.collection = e),
            (this.flipDirection = "rtl" === t && "horizontal" === n),
            (this.disabledKeys = r),
            (this.tabDirection = "horizontal" === n));
    }
    getKeyLeftOf(e) {
        return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
    }
    getKeyRightOf(e) {
        return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    isDisabled(e) {
        return this.disabledKeys.has(e) || !!this.collection.getItem(e)?.props?.isDisabled;
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        return (null != e && this.isDisabled(e) && (e = this.getNextKey(e)), e);
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return (null != e && this.isDisabled(e) && (e = this.getPreviousKey(e)), e);
    }
    getKeyAbove(e) {
        return this.tabDirection ? null : this.getPreviousKey(e);
    }
    getKeyBelow(e) {
        return this.tabDirection ? null : this.getNextKey(e);
    }
    getNextKey(e) {
        let t = e;
        do null == (t = this.collection.getKeyAfter(t)) && (t = this.collection.getFirstKey());
        while (null != t && this.isDisabled(t) && t !== e);
        return t;
    }
    getPreviousKey(e) {
        let t = e;
        do null == (t = this.collection.getKeyBefore(t)) && (t = this.collection.getLastKey());
        while (null != t && this.isDisabled(t) && t !== e);
        return t;
    }
}
var d = n(295551),
    h = n(268678),
    b = n(366632),
    p = n(916769),
    g = n(582128),
    f = n(961082),
    m = n(957397),
    y = n(993558),
    v = n(872236),
    K = n(827341),
    P = n(516046),
    T = n(886721),
    w = n(215510),
    D = n(253365),
    S = n(270651),
    M = n(526739);
function C(e, t) {
    let n = null;
    if (e) {
        for (n = e.getFirstKey(); null != n && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n !== e.getLastKey();)
            n = e.getKeyAfter(n);
        null != n && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n === e.getLastKey() && (n = e.getFirstKey());
    }
    return n;
}
var x = n(361854),
    E = n(333007);
function k(e, t, n) {
    (0, x.N)(() => {
        if (t && e.current) {
            if (!("getAnimations" in e.current)) return void n();
            let t = e.current.getAnimations();
            if (0 === t.length) return void n();
            let r = !1;
            return (
                Promise.allSettled(t.map((e) => e.finished)).then(() => {
                    r ||
                        (0, E.flushSync)(() => {
                            n();
                        });
                }),
                () => {
                    r = !0;
                }
            );
        }
    }, [e, t, n]);
}
var R = n(288378),
    F = n(500731),
    V = n(475921);
let I = (0, g.createContext)(null),
    A = (0, g.createContext)(null),
    L = (0, g.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, I);
        let { children: n, orientation: i = "horizontal" } = e;
        return (
            (n = (0, g.useMemo)(
                () => ("function" == typeof n ? n({ orientation: i, defaultChildren: null }) : n),
                [n, i],
            )),
            g.createElement(P.GQ, { content: n }, (n) => g.createElement(B, { props: e, collection: n, tabsRef: t }))
        );
    });
function B({ props: e, tabsRef: t, collection: n }) {
    let { orientation: i = "horizontal" } = e,
        l = (function (e) {
            let t = (function (e) {
                    let [t, n] = (0, M.P)(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange),
                        r = (0, g.useMemo)(() => (null != t ? [t] : []), [t]),
                        {
                            collection: i,
                            disabledKeys: l,
                            selectionManager: a,
                        } = (0, S.p)({
                            ...e,
                            selectionMode: "single",
                            disallowEmptySelection: !0,
                            allowDuplicateSelectionEvents: !0,
                            selectedKeys: r,
                            onSelectionChange: (r) => {
                                if ("all" === r) return;
                                let i = r.values().next().value ?? null;
                                (i === t && e.onSelectionChange && e.onSelectionChange(i), n(i));
                            },
                        }),
                        o = null != t ? i.getItem(t) : null;
                    return {
                        collection: i,
                        disabledKeys: l,
                        selectionManager: a,
                        selectedKey: t,
                        setSelectedKey: n,
                        selectedItem: o,
                    };
                })({
                    ...e,
                    onSelectionChange: e.onSelectionChange
                        ? (t) => {
                              null != t && e.onSelectionChange?.(t);
                          }
                        : void 0,
                    suppressTextValueWarning: !0,
                    defaultSelectedKey:
                        e.defaultSelectedKey ??
                        C(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set()) ??
                        void 0,
                }),
                { selectionManager: n, collection: r, selectedKey: i } = t,
                l = (0, g.useRef)(i);
            return (
                (0, g.useEffect)(() => {
                    let a = i;
                    (null == e.selectedKey &&
                        (n.isEmpty || null == a || !r.getItem(a)) &&
                        null != (a = C(r, t.disabledKeys)) &&
                        n.setSelectedKeys([a]),
                        ((null == a || null != n.focusedKey) && (n.isFocused || a === l.current)) || n.setFocusedKey(a),
                        (l.current = a));
                }),
                { ...t, isDisabled: e.isDisabled || !1 }
            );
        })({ ...e, collection: n, children: void 0 }),
        { focusProps: a, isFocused: s, isFocusVisible: u } = (0, R.o)({ within: !0 }),
        c = (0, g.useMemo)(() => ({ orientation: i, isFocusWithin: s, isFocusVisible: u }), [i, s, u]),
        d = (0, r.Sl)({ ...e, defaultClassName: "react-aria-Tabs", values: c }),
        h = (0, f.$)(e, { global: !0 });
    return g.createElement(
        r.tT.div,
        {
            ...(0, o.v)(h, d, a),
            ref: t,
            slot: e.slot || void 0,
            "data-focused": s || void 0,
            "data-orientation": i,
            "data-focus-visible": u || void 0,
            "data-disabled": l.isDisabled || void 0,
        },
        g.createElement(
            r.Kq,
            {
                values: [
                    [I, e],
                    [A, l],
                ],
            },
            d.children,
        ),
    );
}
let U = (0, g.forwardRef)(function (e, t) {
    return (0, g.useContext)(A) ? g.createElement(z, { props: e, forwardedRef: t }) : g.createElement(P.pM, e);
});
function z({ props: e, forwardedRef: t }) {
    let n = (0, g.useContext)(A),
        { CollectionRoot: l } = (0, g.useContext)(i.zL),
        { orientation: u = "horizontal", keyboardActivation: m = "automatic" } = (0, r.CC)(I),
        y = (0, V.U)(t),
        { tabListProps: v } = (function (e, t, n) {
            let { orientation: r = "horizontal", keyboardActivation: i = "automatic" } = e,
                { collection: l, selectionManager: a, disabledKeys: u } = t,
                { direction: f } = (0, b.Y)(),
                m = (0, g.useMemo)(() => new c(l, f, r, u), [l, u, r, f]),
                { collectionProps: y } = (0, p.y)({
                    ref: n,
                    selectionManager: a,
                    keyboardDelegate: m,
                    selectOnFocus: "automatic" === i,
                    disallowEmptySelection: !0,
                    scrollRef: n,
                    linkBehavior: "selection",
                }),
                v = (0, d.Bi)();
            s.set(t, v);
            let K = (0, h.b)({ ...e, id: v });
            return { tabListProps: { ...(0, o.v)(y, K), role: "tablist", "aria-orientation": r, tabIndex: void 0 } };
        })({ ...e, orientation: u, keyboardActivation: m }, n, y),
        K = (0, r.Sl)({
            ...e,
            children: null,
            defaultClassName: "react-aria-TabList",
            values: { orientation: u, state: n },
        }),
        P = (0, f.$)(e, { global: !0 });
    return (
        delete P.id,
        g.createElement(
            r.tT.div,
            { ...(0, o.v)(P, K, v), ref: y, "data-orientation": u || void 0 },
            g.createElement(
                a.D,
                null,
                g.createElement(l, {
                    collection: n.collection,
                    persistedKeys: (0, i.l2)(n.selectionManager.focusedKey),
                }),
            ),
        )
    );
}
class Y extends T.Pt {
    static {
        this.type = "item";
    }
}
let N = (0, P.KU)(Y, (e, t, n) => {
        let i = (0, g.useContext)(A),
            a = (0, V.U)(t),
            {
                tabProps: s,
                isSelected: c,
                isDisabled: d,
                isPressed: h,
            } = (function (e, t, n) {
                let { key: r, isDisabled: i, shouldSelectOnPressUp: l } = e,
                    { selectionManager: a, selectedKey: s } = t,
                    c = r === s,
                    d = i || t.isDisabled || t.selectionManager.isDisabled(r),
                    h = t.collection.getItem(r),
                    { itemProps: b, isPressed: p } = (0, v.p)({
                        selectionManager: a,
                        key: r,
                        ref: n,
                        isDisabled: d,
                        shouldSelectOnPressUp: l ?? h?.props.href != null,
                        linkBehavior: "selection",
                    }),
                    g = u(t, r, "tab"),
                    K = u(t, r, "tabpanel"),
                    { tabIndex: P } = b,
                    T = (0, f.$)(h?.props, { labelable: !0 });
                delete T.id;
                let w = (0, y._h)(h?.props),
                    { focusableProps: D } = (0, m.Wc)({ ...h?.props, isDisabled: d }, n);
                return {
                    tabProps: (0, o.v)(T, D, w, b, {
                        id: g,
                        "aria-selected": c,
                        "aria-disabled": d || void 0,
                        "aria-controls": c ? K : void 0,
                        tabIndex: d ? void 0 : P,
                        role: "tab",
                    }),
                    isSelected: c,
                    isDisabled: d,
                    isPressed: p,
                };
            })({ key: n.key, ...e }, i, a),
            { focusProps: b, isFocused: p, isFocusVisible: K } = (0, R.o)(),
            { hoverProps: P, isHovered: T } = (0, F.M)({
                isDisabled: d,
                onHoverStart: e.onHoverStart,
                onHoverEnd: e.onHoverEnd,
                onHoverChange: e.onHoverChange,
            }),
            w = (0, r.Sl)({
                ...e,
                id: void 0,
                children: n.rendered,
                defaultClassName: "react-aria-Tab",
                values: { isSelected: c, isDisabled: d, isFocused: p, isFocusVisible: K, isPressed: h, isHovered: T },
            }),
            D = n.props.href ? r.tT.a : r.tT.div,
            S = (0, f.$)(e, { global: !0 });
        return (
            delete S.id,
            delete S.onClick,
            g.createElement(
                D,
                {
                    ...(0, o.v)(S, w, s, b, P),
                    ref: a,
                    "data-selected": c || void 0,
                    "data-disabled": d || void 0,
                    "data-focused": p || void 0,
                    "data-focus-visible": K || void 0,
                    "data-pressed": h || void 0,
                    "data-hovered": T || void 0,
                },
                g.createElement(l.r.Provider, { value: { isSelected: c } }, w.children),
            )
        );
    }),
    $ = (0, w.U7)(function (e, t) {
        let n = (0, g.useContext)(A),
            i = (0, V.U)(t),
            l = (0, g.useRef)(n.selectedKey),
            a = (0, g.useRef)(null),
            o = (0, g.useRef)(null);
        ((0, x.N)(() => {
            let e = i.current;
            if (e) {
                if (
                    (null == o.current &&
                        (o.current = /width|height|block-size|inline-size|all/.test(
                            window.getComputedStyle(e).transition,
                        )),
                    o.current && null != l.current && l.current !== n.selectedKey)
                ) {
                    (e.style.setProperty("--tab-panel-width", "auto"),
                        e.style.setProperty("--tab-panel-height", "auto"));
                    let { width: t, height: n } = e.getBoundingClientRect();
                    a.current &&
                        (a.current.width !== t || a.current.height !== n) &&
                        (e.style.setProperty("--tab-panel-width", a.current.width + "px"),
                        e.style.setProperty("--tab-panel-height", a.current.height + "px"),
                        window.getComputedStyle(e).height,
                        e.style.setProperty("--tab-panel-width", t + "px"),
                        e.style.setProperty("--tab-panel-height", n + "px"),
                        Promise.all(e.getAnimations().map((e) => e.finished))
                            .then(() => {
                                (e.style.setProperty("--tab-panel-width", "auto"),
                                    e.style.setProperty("--tab-panel-height", "auto"));
                            })
                            .catch(() => {}));
                }
                l.current = n.selectedKey;
            }
        }, [i, n.selectedKey]),
            null != n.selectedKey &&
                n.selectedKey !== l.current &&
                i.current &&
                o.current &&
                (a.current = i.current.getBoundingClientRect()));
        let s = (0, f.$)(e, { labelable: !0, global: !0 });
        return (
            delete s.id,
            g.createElement(
                r.tT.div,
                { render: e.render, ...s, ref: i, style: e.style, className: e.className || "react-aria-TabPanels" },
                g.createElement(P.pM, e),
            )
        );
    }),
    X = (0, w.U7)(function (e, t) {
        let n = (0, g.useContext)(A),
            r = (0, V.U)(t),
            i = n.selectedKey === e.id,
            [l, a] = (0, g.useState)(null != n.selectedKey ? i : null);
        null == l && null != n.selectedKey ? a(i) : !i && l && a(!1);
        let o = (function (e, t) {
            let [n, r] = (0, g.useState)(t ? "open" : "closed");
            switch (n) {
                case "open":
                    t || r("exiting");
                    break;
                case "closed":
                case "exiting":
                    t && r("open");
            }
            let i = "exiting" === n;
            return (
                k(
                    e,
                    i,
                    (0, g.useCallback)(() => {
                        r((e) => ("exiting" === e ? "closed" : e));
                    }, []),
                ),
                i
            );
        })(r, i);
        return i || e.shouldForceMount || o
            ? g.createElement(H, { ...e, tabPanelRef: r, isInitiallySelected: l || !1, isExiting: o })
            : null;
    });
function H(e) {
    let t,
        n,
        l,
        a = (0, g.useContext)(A),
        { id: s, tabPanelRef: c, isInitiallySelected: d, isExiting: b, ...p } = e,
        { tabPanelProps: m } =
            ((t = (0, K.$)(c) ? void 0 : 0),
            (n = u(a, e.id ?? a?.selectedKey, "tabpanel")),
            (l = (0, h.b)({ ...e, id: n, "aria-labelledby": u(a, a?.selectedKey, "tab") })),
            {
                tabPanelProps: (0, o.v)(l, {
                    tabIndex: t,
                    role: "tabpanel",
                    "aria-describedby": e["aria-describedby"],
                    "aria-details": e["aria-details"],
                }),
            }),
        { focusProps: y, isFocused: v, isFocusVisible: P } = (0, R.o)(),
        T = a.selectedKey === e.id,
        w =
            (function (e, t = !0) {
                let [n, r] = (0, g.useState)(!0),
                    i = n && t;
                return (
                    (0, x.N)(() => {
                        if (i && e.current && "getAnimations" in e.current)
                            for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
                    }, [e, i]),
                    k(
                        e,
                        i,
                        (0, g.useCallback)(() => r(!1), []),
                    ),
                    i
                );
            })(c) && !d,
        S = (0, r.Sl)({
            ...e,
            defaultClassName: "react-aria-TabPanel",
            values: { isFocused: v, isFocusVisible: P, isInert: (0, D.Y)(!T), isEntering: w, isExiting: b, state: a },
        }),
        M = (0, f.$)(p, { global: !0 });
    delete M.id;
    let C = T ? (0, o.v)(M, m, y, S) : (0, o.v)(M, S);
    return g.createElement(
        r.tT.div,
        {
            ...C,
            ref: c,
            "data-focused": v || void 0,
            "data-focus-visible": P || void 0,
            inert: (0, D.Y)(!T || e.inert),
            "data-inert": T ? void 0 : "true",
            "data-entering": w || void 0,
            "data-exiting": b || void 0,
        },
        g.createElement(
            r.Kq,
            {
                values: [
                    [I, null],
                    [A, null],
                ],
            },
            g.createElement(i.zL.Provider, { value: i.N }, S.children),
        ),
    );
}

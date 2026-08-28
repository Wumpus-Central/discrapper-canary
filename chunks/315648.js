"use strict";
i.d(t, { T2: () => O, Kp: () => V, oz: () => B, wb: () => U, tU: () => A });
var l = i(407815),
    n = i(866007),
    s = i(353509),
    r = i(986664),
    o = i(184093);
let a = new WeakMap();
function c(e, t, i) {
    if (!e) return "";
    "string" == typeof t && (t = t.replace(/\s+/g, ""));
    let l = a.get(e);
    return `${l}-${i}-${t}`;
}
class d {
    constructor(e, t, i, l = new Set()) {
        (this.collection = e),
            (this.flipDirection = "rtl" === t && "horizontal" === i),
            (this.disabledKeys = l),
            (this.tabDirection = "horizontal" === i);
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
        return null != e && this.isDisabled(e) && (e = this.getNextKey(e)), e;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return null != e && this.isDisabled(e) && (e = this.getPreviousKey(e)), e;
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
var u = i(295551),
    h = i(268678),
    b = i(366632),
    y = i(916769),
    p = i(582128),
    f = i(961082),
    g = i(957397),
    v = i(993558),
    K = i(872236),
    m = i(827341),
    P = i(516046),
    S = i(886721),
    C = i(215510),
    x = i(253365),
    w = i(270651),
    D = i(526739);
function E(e, t) {
    let i = null;
    if (e) {
        for (i = e.getFirstKey(); null != i && (t.has(i) || e.getItem(i)?.props?.isDisabled) && i !== e.getLastKey(); )
            i = e.getKeyAfter(i);
        null != i && (t.has(i) || e.getItem(i)?.props?.isDisabled) && i === e.getLastKey() && (i = e.getFirstKey());
    }
    return i;
}
var F = i(361854),
    k = i(333007);
function M(e, t, i) {
    (0, F.N)(() => {
        if (t && e.current) {
            if (!("getAnimations" in e.current)) return void i();
            let t = e.current.getAnimations();
            if (0 === t.length) return void i();
            let l = !1;
            return (
                Promise.allSettled(t.map((e) => e.finished)).then(() => {
                    l ||
                        (0, k.flushSync)(() => {
                            i();
                        });
                }),
                () => {
                    l = !0;
                }
            );
        }
    }, [e, t, i]);
}
var R = i(288378),
    N = i(500731),
    T = i(475921);
let I = (0, p.createContext)(null),
    z = (0, p.createContext)(null),
    A = (0, p.forwardRef)(function (e, t) {
        [e, t] = (0, l.JT)(e, t, I);
        let { children: i, orientation: n = "horizontal" } = e;
        return (
            (i = (0, p.useMemo)(
                () => ("function" == typeof i ? i({ orientation: n, defaultChildren: null }) : i),
                [i, n],
            )),
            p.createElement(P.GQ, { content: i }, (i) => p.createElement(L, { props: e, collection: i, tabsRef: t }))
        );
    });
function L({ props: e, tabsRef: t, collection: i }) {
    let { orientation: n = "horizontal" } = e,
        s = (function (e) {
            let t = (function (e) {
                    let [t, i] = (0, D.P)(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange),
                        l = (0, p.useMemo)(() => (null != t ? [t] : []), [t]),
                        {
                            collection: n,
                            disabledKeys: s,
                            selectionManager: r,
                        } = (0, w.p)({
                            ...e,
                            selectionMode: "single",
                            disallowEmptySelection: !0,
                            allowDuplicateSelectionEvents: !0,
                            selectedKeys: l,
                            onSelectionChange: (l) => {
                                if ("all" === l) return;
                                let n = l.values().next().value ?? null;
                                n === t && e.onSelectionChange && e.onSelectionChange(n), i(n);
                            },
                        }),
                        o = null != t ? n.getItem(t) : null;
                    return {
                        collection: n,
                        disabledKeys: s,
                        selectionManager: r,
                        selectedKey: t,
                        setSelectedKey: i,
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
                        E(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set()) ??
                        void 0,
                }),
                { selectionManager: i, collection: l, selectedKey: n } = t,
                s = (0, p.useRef)(n);
            return (
                (0, p.useEffect)(() => {
                    let r = n;
                    null == e.selectedKey &&
                        (i.isEmpty || null == r || !l.getItem(r)) &&
                        null != (r = E(l, t.disabledKeys)) &&
                        i.setSelectedKeys([r]),
                        ((null == r || null != i.focusedKey) && (i.isFocused || r === s.current)) || i.setFocusedKey(r),
                        (s.current = r);
                }),
                { ...t, isDisabled: e.isDisabled || !1 }
            );
        })({ ...e, collection: i, children: void 0 }),
        { focusProps: r, isFocused: a, isFocusVisible: c } = (0, R.o)({ within: !0 }),
        d = (0, p.useMemo)(() => ({ orientation: n, isFocusWithin: a, isFocusVisible: c }), [n, a, c]),
        u = (0, l.Sl)({ ...e, defaultClassName: "react-aria-Tabs", values: d }),
        h = (0, f.$)(e, { global: !0 });
    return p.createElement(
        l.tT.div,
        {
            ...(0, o.v)(h, u, r),
            ref: t,
            slot: e.slot || void 0,
            "data-focused": a || void 0,
            "data-orientation": n,
            "data-focus-visible": c || void 0,
            "data-disabled": s.isDisabled || void 0,
        },
        p.createElement(
            l.Kq,
            {
                values: [
                    [I, e],
                    [z, s],
                ],
            },
            u.children,
        ),
    );
}
let U = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(z) ? p.createElement($, { props: e, forwardedRef: t }) : p.createElement(P.pM, e);
});
function $({ props: e, forwardedRef: t }) {
    let i = (0, p.useContext)(z),
        { CollectionRoot: s } = (0, p.useContext)(n.zL),
        { orientation: c = "horizontal", keyboardActivation: g = "automatic" } = (0, l.CC)(I),
        v = (0, T.U)(t),
        { tabListProps: K } = (function (e, t, i) {
            let { orientation: l = "horizontal", keyboardActivation: n = "automatic" } = e,
                { collection: s, selectionManager: r, disabledKeys: c } = t,
                { direction: f } = (0, b.Y)(),
                g = (0, p.useMemo)(() => new d(s, f, l, c), [s, c, l, f]),
                { collectionProps: v } = (0, y.y)({
                    ref: i,
                    selectionManager: r,
                    keyboardDelegate: g,
                    selectOnFocus: "automatic" === n,
                    disallowEmptySelection: !0,
                    scrollRef: i,
                    linkBehavior: "selection",
                }),
                K = (0, u.Bi)();
            a.set(t, K);
            let m = (0, h.b)({ ...e, id: K });
            return { tabListProps: { ...(0, o.v)(v, m), role: "tablist", "aria-orientation": l, tabIndex: void 0 } };
        })({ ...e, orientation: c, keyboardActivation: g }, i, v),
        m = (0, l.Sl)({
            ...e,
            children: null,
            defaultClassName: "react-aria-TabList",
            values: { orientation: c, state: i },
        }),
        P = (0, f.$)(e, { global: !0 });
    return (
        delete P.id,
        p.createElement(
            l.tT.div,
            { ...(0, o.v)(P, m, K), ref: v, "data-orientation": c || void 0 },
            p.createElement(
                r.D,
                null,
                p.createElement(s, {
                    collection: i.collection,
                    persistedKeys: (0, n.l2)(i.selectionManager.focusedKey),
                }),
            ),
        )
    );
}
class H extends S.Pt {
    static {
        this.type = "item";
    }
}
let B = (0, P.KU)(H, (e, t, i) => {
        let n = (0, p.useContext)(z),
            r = (0, T.U)(t),
            {
                tabProps: a,
                isSelected: d,
                isDisabled: u,
                isPressed: h,
            } = (function (e, t, i) {
                let { key: l, isDisabled: n, shouldSelectOnPressUp: s } = e,
                    { selectionManager: r, selectedKey: a } = t,
                    d = l === a,
                    u = n || t.isDisabled || t.selectionManager.isDisabled(l),
                    h = t.collection.getItem(l),
                    { itemProps: b, isPressed: y } = (0, K.p)({
                        selectionManager: r,
                        key: l,
                        ref: i,
                        isDisabled: u,
                        shouldSelectOnPressUp: s ?? h?.props.href != null,
                        linkBehavior: "selection",
                    }),
                    p = c(t, l, "tab"),
                    m = c(t, l, "tabpanel"),
                    { tabIndex: P } = b,
                    S = (0, f.$)(h?.props, { labelable: !0 });
                delete S.id;
                let C = (0, v._h)(h?.props),
                    { focusableProps: x } = (0, g.Wc)({ ...h?.props, isDisabled: u }, i);
                return {
                    tabProps: (0, o.v)(S, x, C, b, {
                        id: p,
                        "aria-selected": d,
                        "aria-disabled": u || void 0,
                        "aria-controls": d ? m : void 0,
                        tabIndex: u ? void 0 : P,
                        role: "tab",
                    }),
                    isSelected: d,
                    isDisabled: u,
                    isPressed: y,
                };
            })({ key: i.key, ...e }, n, r),
            { focusProps: b, isFocused: y, isFocusVisible: m } = (0, R.o)(),
            { hoverProps: P, isHovered: S } = (0, N.M)({
                isDisabled: u,
                onHoverStart: e.onHoverStart,
                onHoverEnd: e.onHoverEnd,
                onHoverChange: e.onHoverChange,
            }),
            C = (0, l.Sl)({
                ...e,
                id: void 0,
                children: i.rendered,
                defaultClassName: "react-aria-Tab",
                values: { isSelected: d, isDisabled: u, isFocused: y, isFocusVisible: m, isPressed: h, isHovered: S },
            }),
            x = i.props.href ? l.tT.a : l.tT.div,
            w = (0, f.$)(e, { global: !0 });
        return (
            delete w.id,
            delete w.onClick,
            p.createElement(
                x,
                {
                    ...(0, o.v)(w, C, a, b, P),
                    ref: r,
                    "data-selected": d || void 0,
                    "data-disabled": u || void 0,
                    "data-focused": y || void 0,
                    "data-focus-visible": m || void 0,
                    "data-pressed": h || void 0,
                    "data-hovered": S || void 0,
                },
                p.createElement(s.r.Provider, { value: { isSelected: d } }, C.children),
            )
        );
    }),
    O = (0, C.U7)(function (e, t) {
        let i = (0, p.useContext)(z),
            n = (0, T.U)(t),
            s = (0, p.useRef)(i.selectedKey),
            r = (0, p.useRef)(null),
            o = (0, p.useRef)(null);
        (0, F.N)(() => {
            let e = n.current;
            if (e) {
                if (
                    (null == o.current &&
                        (o.current = /width|height|block-size|inline-size|all/.test(
                            window.getComputedStyle(e).transition,
                        )),
                    o.current && null != s.current && s.current !== i.selectedKey)
                ) {
                    e.style.setProperty("--tab-panel-width", "auto"), e.style.setProperty("--tab-panel-height", "auto");
                    let { width: t, height: i } = e.getBoundingClientRect();
                    r.current &&
                        (r.current.width !== t || r.current.height !== i) &&
                        (e.style.setProperty("--tab-panel-width", r.current.width + "px"),
                        e.style.setProperty("--tab-panel-height", r.current.height + "px"),
                        window.getComputedStyle(e).height,
                        e.style.setProperty("--tab-panel-width", t + "px"),
                        e.style.setProperty("--tab-panel-height", i + "px"),
                        Promise.all(e.getAnimations().map((e) => e.finished))
                            .then(() => {
                                e.style.setProperty("--tab-panel-width", "auto"),
                                    e.style.setProperty("--tab-panel-height", "auto");
                            })
                            .catch(() => {}));
                }
                s.current = i.selectedKey;
            }
        }, [n, i.selectedKey]),
            null != i.selectedKey &&
                i.selectedKey !== s.current &&
                n.current &&
                o.current &&
                (r.current = n.current.getBoundingClientRect());
        let a = (0, f.$)(e, { labelable: !0, global: !0 });
        return (
            delete a.id,
            p.createElement(
                l.tT.div,
                { render: e.render, ...a, ref: n, style: e.style, className: e.className || "react-aria-TabPanels" },
                p.createElement(P.pM, e),
            )
        );
    }),
    V = (0, C.U7)(function (e, t) {
        let i = (0, p.useContext)(z),
            l = (0, T.U)(t),
            n = i.selectedKey === e.id,
            [s, r] = (0, p.useState)(null != i.selectedKey ? n : null);
        null == s && null != i.selectedKey ? r(n) : !n && s && r(!1);
        let o = (function (e, t) {
            let [i, l] = (0, p.useState)(t ? "open" : "closed");
            switch (i) {
                case "open":
                    t || l("exiting");
                    break;
                case "closed":
                case "exiting":
                    t && l("open");
            }
            let n = "exiting" === i;
            return (
                M(
                    e,
                    n,
                    (0, p.useCallback)(() => {
                        l((e) => ("exiting" === e ? "closed" : e));
                    }, []),
                ),
                n
            );
        })(l, n);
        return n || e.shouldForceMount || o
            ? p.createElement(W, { ...e, tabPanelRef: l, isInitiallySelected: s || !1, isExiting: o })
            : null;
    });
function W(e) {
    let t,
        i,
        s,
        r = (0, p.useContext)(z),
        { id: a, tabPanelRef: d, isInitiallySelected: u, isExiting: b, ...y } = e,
        { tabPanelProps: g } =
            ((t = (0, m.$)(d) ? void 0 : 0),
            (i = c(r, e.id ?? r?.selectedKey, "tabpanel")),
            (s = (0, h.b)({ ...e, id: i, "aria-labelledby": c(r, r?.selectedKey, "tab") })),
            {
                tabPanelProps: (0, o.v)(s, {
                    tabIndex: t,
                    role: "tabpanel",
                    "aria-describedby": e["aria-describedby"],
                    "aria-details": e["aria-details"],
                }),
            }),
        { focusProps: v, isFocused: K, isFocusVisible: P } = (0, R.o)(),
        S = r.selectedKey === e.id,
        C =
            (function (e, t = !0) {
                let [i, l] = (0, p.useState)(!0),
                    n = i && t;
                return (
                    (0, F.N)(() => {
                        if (n && e.current && "getAnimations" in e.current)
                            for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
                    }, [e, n]),
                    M(
                        e,
                        n,
                        (0, p.useCallback)(() => l(!1), []),
                    ),
                    n
                );
            })(d) && !u,
        w = (0, l.Sl)({
            ...e,
            defaultClassName: "react-aria-TabPanel",
            values: { isFocused: K, isFocusVisible: P, isInert: (0, x.Y)(!S), isEntering: C, isExiting: b, state: r },
        }),
        D = (0, f.$)(y, { global: !0 });
    delete D.id;
    let E = S ? (0, o.v)(D, g, v, w) : (0, o.v)(D, w);
    return p.createElement(
        l.tT.div,
        {
            ...E,
            ref: d,
            "data-focused": K || void 0,
            "data-focus-visible": P || void 0,
            inert: (0, x.Y)(!S || e.inert),
            "data-inert": S ? void 0 : "true",
            "data-entering": C || void 0,
            "data-exiting": b || void 0,
        },
        p.createElement(
            l.Kq,
            {
                values: [
                    [I, null],
                    [z, null],
                ],
            },
            p.createElement(n.zL.Provider, { value: n.N }, w.children),
        ),
    );
}

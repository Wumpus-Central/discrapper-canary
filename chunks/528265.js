"use strict";
n.d(t, { C: () => em });
var i = n(627968),
    r = n(64700),
    s = n(197867),
    a = n(241634),
    o = n(825913),
    l = n(129844),
    u = n(318473),
    c = n(507254),
    d = n(178375),
    _ = n(784113),
    f = n(216055),
    h = n(290424);
let p = (0, r.createContext)(null);
(0, c.KU)(d.OJ, function (e, t, n) {
    let i = (0, r.useContext)(p),
        { isLoading: s, onLoadMore: a, scrollOffset: l, ...c } = e,
        d = (0, r.useRef)(null),
        E = (0, r.useMemo)(
            () => ({ onLoadMore: a, collection: null == i ? void 0 : i.collection, sentinelRef: d, scrollOffset: l }),
            [a, l, null == i ? void 0 : i.collection],
        );
    (0, _.n)(E, d);
    let m = (0, o.Sl)({
        ...c,
        id: void 0,
        children: n.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: null,
    });
    return r.createElement(
        r.Fragment,
        null,
        r.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, f.Y)(!0) },
            r.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: d,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        s &&
            m.children &&
            r.createElement(
                "div",
                { ...(0, u.v)((0, h.$)(e, { global: !0 }), { tabIndex: -1 }), ...m, role: "option", ref: t },
                m.children,
            ),
    );
});
var E = n(257537),
    m = n(123375),
    g = n(357710),
    A = n(193523);
let I = new WeakMap();
function T(e, t) {
    var n, i;
    let { id: r } = null != (n = I.get(e)) ? n : {};
    if (!r) throw Error("Unknown list");
    return `${r}-${"string" == typeof (i = t) ? i.replace(/\s*/g, "") : "" + i}`;
}
var S = n(985620),
    N = n(406985),
    y = n(227510),
    C = n(510281),
    v = n(977283),
    O = n(138026),
    R = n(74172),
    b = n(986960),
    D = n(744493),
    L = n(402112);
let w = new WeakMap();
var M = n(498430),
    P = {};
P = {
    "ar-AE": {
        removeButtonLabel: "\u0625\u0632\u0627\u0644\u0629",
        removeDescription:
            "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D DELETE \u0644\u0625\u0632\u0627\u0644\u0629 \u0639\u0644\u0627\u0645\u0629.",
    },
    "bg-BG": {
        removeButtonLabel: "\u041F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435",
        removeDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Delete, \u0437\u0430 \u0434\u0430 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0435\u0442\u0435 \u043C\u0430\u0440\u043A\u0435\u0440\u0430.",
    },
    "cs-CZ": {
        removeButtonLabel: "Odebrat",
        removeDescription: "Stisknut\xedm kl\xe1vesy Delete odeberete zna\u010Dku.",
    },
    "da-DK": { removeButtonLabel: "Fjern", removeDescription: "Tryk p\xe5 Slet for at fjerne tag." },
    "de-DE": {
        removeButtonLabel: "Entfernen",
        removeDescription: "Auf \u201EL\xf6schen\u201C dr\xfccken, um das Tag zu entfernen.",
    },
    "el-GR": {
        removeButtonLabel: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7",
        removeDescription:
            "\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1.",
    },
    "en-US": { removeDescription: "Press Delete to remove tag.", removeButtonLabel: "Remove" },
    "es-ES": { removeButtonLabel: "Quitar", removeDescription: "Pulse Eliminar para quitar la etiqueta." },
    "et-EE": { removeButtonLabel: "Eemalda", removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete." },
    "fi-FI": { removeButtonLabel: "Poista", removeDescription: "Poista tunniste painamalla Poista-painiketta." },
    "fr-FR": {
        removeButtonLabel: "Supprimer",
        removeDescription: "Appuyez sur Supprimer pour supprimer l\u2019\xe9tiquette.",
    },
    "he-IL": {
        removeButtonLabel: "\u05D4\u05E1\u05E8",
        removeDescription:
            "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05D7\u05E7 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E1\u05D9\u05E8 \u05EA\u05D2.",
    },
    "hr-HR": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Delete za uklanjanje oznake." },
    "hu-HU": {
        removeButtonLabel: "Elt\xe1vol\xedt\xe1s",
        removeDescription: "Nyomja meg a Delete billenty\u0171t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.",
    },
    "it-IT": { removeButtonLabel: "Rimuovi", removeDescription: "Premi Elimina per rimuovere il tag." },
    "ja-JP": {
        removeButtonLabel: "\u524A\u9664",
        removeDescription:
            "\u30BF\u30B0\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001Delete \u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002",
    },
    "ko-KR": {
        removeButtonLabel: "\uC81C\uAC70",
        removeDescription:
            "\uD0DC\uADF8\uB97C \uC81C\uAC70\uD558\uB824\uBA74 Delete \uD0A4\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.",
    },
    "lt-LT": {
        removeButtonLabel: "Pa\u0161alinti",
        removeDescription:
            "Nor\u0117dami pa\u0161alinti \u017Eym\u0105, paspauskite \u201EDelete\u201C klavi\u0161\u0105.",
    },
    "lv-LV": {
        removeButtonLabel: "No\u0146emt",
        removeDescription: "Nospiediet Delete [Dz\u0113st], lai no\u0146emtu tagu.",
    },
    "nb-NO": { removeButtonLabel: "Fjern", removeDescription: "Trykk p\xe5 Slett for \xe5 fjerne taggen." },
    "nl-NL": { removeButtonLabel: "Verwijderen", removeDescription: "Druk op Verwijderen om de tag te verwijderen." },
    "pl-PL": {
        removeButtonLabel: "Usu\u0144",
        removeDescription: "Naci\u015Bnij Usu\u0144, aby usun\u0105\u0107 znacznik.",
    },
    "pt-BR": { removeButtonLabel: "Remover", removeDescription: "Pressione Delete para remover a tag." },
    "pt-PT": { removeButtonLabel: "Eliminar", removeDescription: "Prima Delete para eliminar a tag." },
    "ro-RO": {
        removeButtonLabel: "\xcendep\u0103rta\u0163i",
        removeDescription: "Ap\u0103sa\u021Bi pe Delete (\u0218tergere) pentru a elimina eticheta.",
    },
    "ru-RU": {
        removeButtonLabel: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        removeDescription:
            "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 DELETE, \u0447\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433.",
    },
    "sk-SK": {
        removeButtonLabel: "Odstr\xe1ni\u0165",
        removeDescription: "Ak chcete odstr\xe1ni\u0165 zna\u010Dku, stla\u010Dte kl\xe1ves Delete.",
    },
    "sl-SI": { removeButtonLabel: "Odstrani", removeDescription: "Pritisnite Delete, da odstranite oznako." },
    "sr-SP": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Obri\u0161i da biste uklonili oznaku." },
    "sv-SE": { removeButtonLabel: "Ta bort", removeDescription: "Tryck p\xe5 Radera f\xf6r att ta bort taggen." },
    "tr-TR": {
        removeButtonLabel: "Kald\u0131r",
        removeDescription: "Etiketi kald\u0131rmak i\xe7in Sil tu\u015Funa bas\u0131n.",
    },
    "uk-UA": {
        removeButtonLabel: "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438",
        removeDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Delete, \u0449\u043E\u0431 \u0432\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0442\u0435\u0433.",
    },
    "zh-CN": {
        removeButtonLabel: "\u5220\u9664",
        removeDescription: "\u6309\u4E0B\u201C\u5220\u9664\u201D\u4EE5\u5220\u9664\u6807\u8BB0\u3002",
    },
    "zh-TW": {
        removeButtonLabel: "\u79FB\u9664",
        removeDescription: "\u6309 Delete \u9375\u4EE5\u79FB\u9664\u6A19\u8A18\u3002",
    },
};
var x = n(807177),
    U = n(132716),
    k = n(885714),
    G = n(877247),
    F = n(260431),
    V = n(518665),
    B = n(150047),
    H = n(805447),
    j = n(693321),
    Y = n(364643);
let W = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    K = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function z(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
var $ = n(47276),
    q = n(967158),
    Z = n(533715);
class X {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.nextKey) ? t : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        var t;
        (this.keyMap = new Map()), (this.firstKey = null), (this.lastKey = null), (this.iterable = e);
        let n = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let t of e.childNodes) n(t);
        };
        for (let t of e) n(t);
        let i = null,
            r = 0,
            s = 0;
        for (let [e, t] of this.keyMap)
            i ? ((i.nextKey = e), (t.prevKey = i.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = r++),
                ("section" === t.type || "item" === t.type) && s++,
                ((i = t).nextKey = void 0);
        (this._size = s), (this.lastKey = null != (t = null == i ? void 0 : i.key) ? t : null);
    }
}
var Q = n(36310),
    J = n(74733),
    ee = n(330722);
function et(e, t) {
    let n = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
            var i, r, s, a, o, l, u;
            let c = n.current.getItem(t.focusedKey),
                d = [...n.current.getKeys()]
                    .map((e) => {
                        let t = n.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                _ = [...e.getKeys()]
                    .map((t) => {
                        let n = e.getItem(t);
                        return (null == n ? void 0 : n.type) === "item" ? n : null;
                    })
                    .filter((e) => null !== e),
                f =
                    (null != (i = null == d ? void 0 : d.length) ? i : 0) -
                    (null != (r = null == _ ? void 0 : _.length) ? r : 0),
                h = Math.min(
                    f > 1
                        ? Math.max((null != (s = null == c ? void 0 : c.index) ? s : 0) - f + 1, 0)
                        : null != (a = null == c ? void 0 : c.index)
                          ? a
                          : 0,
                    (null != (o = null == _ ? void 0 : _.length) ? o : 0) - 1,
                ),
                p = null,
                E = !1;
            for (; h >= 0; ) {
                if (!t.isDisabled(_[h].key)) {
                    p = _[h];
                    break;
                }
                h < _.length - 1 && !E
                    ? h++
                    : ((E = !0),
                      h > (null != (l = null == c ? void 0 : c.index) ? l : 0) &&
                          (h = null != (u = null == c ? void 0 : c.index) ? u : 0),
                      h--);
            }
            t.setFocusedKey(p ? p.key : null);
        }
        n.current = e;
    }, [e, t]);
}
let en = (0, r.createContext)(null),
    ei = (0, r.createContext)(null),
    er = (0, r.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, o.JT)(e, t, en)),
            r.createElement(
                p.Provider,
                { value: null },
                r.createElement(c.GQ, { content: e.children }, (n) =>
                    r.createElement(es, { props: e, forwardedRef: t, collection: n }),
                ),
            )
        );
    });
function es({ props: e, forwardedRef: t, collection: n }) {
    var i, s;
    let a,
        c,
        d = (0, r.useRef)(null),
        { id: _, ...f } = e;
    [f, d] = (0, o.JT)(f, d, E.Co);
    let { filter: m, shouldUseVirtualFocus: g, ...T } = f,
        [M, P] = (0, o._E)(!e["aria-label"] && !e["aria-labelledby"]),
        x =
            ((s = (function (e) {
                let { filter: t, layoutDelegate: n } = e,
                    i = (0, Q.R)(e),
                    s = (0, r.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                    a = (0, r.useCallback)((e) => new X(t ? t(e) : e), [t]),
                    o = (0, r.useMemo)(
                        () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
                        [e.suppressTextValueWarning],
                    ),
                    l = (0, ee.G)(e, a, o),
                    u = (0, r.useMemo)(() => new (0, J.Y)(l, i, { layoutDelegate: n }), [l, i, n]);
                return et(l, u), { collection: l, disabledKeys: s, selectionManager: u };
            })({ ...T, children: void 0, collection: n })),
            (a = (0, r.useMemo)(() => (m ? s.collection.filter(m) : s.collection), [s.collection, m])),
            (c = s.selectionManager.withCollection(a)),
            et(a, c),
            { collection: a, selectionManager: c, disabledKeys: s.disabledKeys }),
        U = (0, h.$)(f, { global: !0 }),
        k = Object.fromEntries(Object.entries(U).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: G,
            labelProps: F,
            descriptionProps: V,
            errorMessageProps: B,
        } = (function (e, t, n) {
            let { direction: i } = (0, L.Y)(),
                s =
                    e.keyboardDelegate ||
                    new (0, O.n)({
                        collection: t.collection,
                        ref: n,
                        orientation: "horizontal",
                        direction: i,
                        disabledKeys: t.disabledKeys,
                        disabledBehavior: t.selectionManager.disabledBehavior,
                    }),
                {
                    labelProps: a,
                    fieldProps: o,
                    descriptionProps: l,
                    errorMessageProps: c,
                } = (0, b.M)({ ...e, labelElementType: "span" }),
                { gridProps: d } = (function (e, t, n) {
                    let {
                        isVirtualized: i,
                        keyboardDelegate: s,
                        layoutDelegate: a,
                        onAction: o,
                        disallowTypeAhead: l,
                        linkBehavior: c = "action",
                        keyboardNavigationBehavior: d = "arrow",
                        escapeKeyBehavior: _ = "clearSelection",
                        shouldSelectOnPressUp: f,
                    } = e;
                    e["aria-label"] ||
                        e["aria-labelledby"] ||
                        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                    let { listProps: p } = (function (e) {
                            let {
                                    selectionManager: t,
                                    collection: n,
                                    disabledKeys: i,
                                    ref: s,
                                    keyboardDelegate: a,
                                    layoutDelegate: o,
                                } = e,
                                l = (0, R.Q)({ usage: "search", sensitivity: "base" }),
                                u = t.disabledBehavior,
                                c = (0, r.useMemo)(
                                    () =>
                                        a ||
                                        new (0, O.n)({
                                            collection: n,
                                            disabledKeys: i,
                                            disabledBehavior: u,
                                            ref: s,
                                            collator: l,
                                            layoutDelegate: o,
                                        }),
                                    [a, o, n, i, s, l, u],
                                ),
                                { collectionProps: d } = (0, v.y)({
                                    ...e,
                                    ref: s,
                                    selectionManager: t,
                                    keyboardDelegate: c,
                                });
                            return { listProps: d };
                        })({
                            selectionManager: t.selectionManager,
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            ref: n,
                            keyboardDelegate: s,
                            layoutDelegate: a,
                            isVirtualized: i,
                            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                            shouldFocusWrap: e.shouldFocusWrap,
                            linkBehavior: c,
                            disallowTypeAhead: l,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: _,
                        }),
                        E = (0, S.Bi)(e.id);
                    I.set(t, {
                        id: E,
                        onAction: o,
                        linkBehavior: c,
                        keyboardNavigationBehavior: d,
                        shouldSelectOnPressUp: f,
                    });
                    let m = (0, N.m)({ selectionManager: t.selectionManager, hasItemActions: !!o }),
                        g = (0, C.$)(n, { isDisabled: 0 !== t.collection.size }),
                        A = (0, h.$)(e, { labelable: !0 }),
                        T = (0, u.v)(
                            A,
                            {
                                role: "grid",
                                id: E,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: g ? -1 : 0 } : p,
                            m,
                        );
                    return (
                        i && ((T["aria-rowcount"] = t.collection.size), (T["aria-colcount"] = 1)),
                        (0, y.H)({}, t),
                        { gridProps: T }
                    );
                })(
                    {
                        ...e,
                        ...o,
                        keyboardDelegate: s,
                        shouldFocusWrap: !0,
                        linkBehavior: "override",
                        keyboardNavigationBehavior: "tab",
                    },
                    t,
                    n,
                ),
                [_, f] = (0, r.useState)(!1),
                { focusWithinProps: p } = (0, D.R)({ onFocusWithinChange: f }),
                E = (0, h.$)(e),
                m = (0, r.useRef)(t.collection.size);
            return (
                (0, r.useEffect)(() => {
                    n.current && m.current > 0 && 0 === t.collection.size && _ && n.current.focus(),
                        (m.current = t.collection.size);
                }, [t.collection.size, _, n]),
                w.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, u.v)(d, E, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": _ ? "polite" : "off",
                        ...p,
                        ...o,
                    }),
                    labelProps: a,
                    descriptionProps: l,
                    errorMessageProps: c,
                }
            );
        })({ ...T, ...k, label: P }, x, d);
    return r.createElement(
        "div",
        {
            ...U,
            id: _,
            ref: t,
            slot: e.slot || void 0,
            className: null != (i = e.className) ? i : "react-aria-TagGroup",
            style: e.style,
        },
        r.createElement(
            o.Kq,
            {
                values: [
                    [l.I, { ...F, elementType: "span", ref: M }],
                    [ei, { ...G, ref: d }],
                    [p, x],
                    [A.h, { slots: { description: V, errorMessage: B } }],
                ],
            },
            e.children,
        ),
    );
}
let ea = (0, r.forwardRef)(function (e, t) {
    return (0, r.useContext)(p) ? r.createElement(eo, { props: e, forwardedRef: t }) : r.createElement(c.pM, e);
});
function eo({ props: e, forwardedRef: t }) {
    let n = (0, r.useContext)(p),
        { CollectionRoot: i } = (0, r.useContext)(a.zL),
        [s, l] = (0, o.JT)({}, t, ei),
        { focusProps: c, isFocused: d, isFocusVisible: _ } = (0, M.o)(),
        f = { isEmpty: 0 === n.collection.size, isFocused: d, isFocusVisible: _, state: n },
        E = (0, o.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: f }),
        m = (0, a.l2)(n.selectionManager.focusedKey),
        A = (0, h.$)(e, { global: !0 });
    return r.createElement(
        "div",
        {
            ...(0, u.v)(A, E, s, c),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": _ || void 0,
        },
        r.createElement(
            g.D,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(f)
                : r.createElement(i, { collection: n.collection, persistedKeys: m }),
        ),
    );
}
let el = (0, c.KU)(d._B, (e, t, n) => {
    let i = (0, r.useContext)(p),
        l = (0, Z.U)(t),
        { focusProps: c, isFocusVisible: d } = (0, M.o)({ within: !1 }),
        {
            rowProps: _,
            gridCellProps: f,
            removeButtonProps: E,
            ...g
        } = (function (e, t, n) {
            var i;
            let { item: s } = e,
                a = (0, $.o)((i = P) && i.__esModule ? i.default : i, "@react-aria/tag"),
                o = (0, S.Bi)(),
                { onRemove: l } = w.get(t) || {},
                {
                    rowProps: c,
                    gridCellProps: d,
                    ..._
                } = (function (e, t, n) {
                    var i, s, a, o, l, c;
                    let { node: d, isVirtualized: _ } = e,
                        { direction: f } = (0, L.Y)(),
                        {
                            onAction: h,
                            linkBehavior: p,
                            keyboardNavigationBehavior: E,
                            shouldSelectOnPressUp: m,
                        } = I.get(t),
                        g = (0, S.X1)(),
                        A = (0, r.useRef)(null),
                        N = {},
                        y = e.hasChildItems,
                        C = t.selectionManager.isLink(d.key);
                    if (null != d && "expandedKeys" in t) {
                        let e = null == (a = (o = t.collection).getChildren) ? void 0 : a.call(o, d.key);
                        (y = y || [...(null != e ? e : [])].length > 1),
                            null == h &&
                                !C &&
                                "none" === t.selectionManager.selectionMode &&
                                y &&
                                (h = () => t.toggleKey(d.key));
                        let n = y ? t.expandedKeys.has(d.key) : void 0,
                            i = 1;
                        if (d.level > 0 && (null == d ? void 0 : d.parentKey) != null) {
                            let e = t.collection.getItem(d.parentKey);
                            e &&
                                (i = [
                                    ...(null == (l = (c = t.collection).getChildren) ? void 0 : l.call(c, e.key)),
                                ].filter((e) => "item" === e.type).length);
                        } else i = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        N = {
                            "aria-expanded": n,
                            "aria-level": d.level + 1,
                            "aria-posinset": (null == d ? void 0 : d.index) + 1,
                            "aria-setsize": i,
                        };
                    }
                    let { itemProps: v, ...O } = (0, Y.p)({
                            selectionManager: t.selectionManager,
                            key: d.key,
                            ref: n,
                            isVirtualized: _,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || m,
                            onAction:
                                h || (null == (i = d.props) ? void 0 : i.onAction)
                                    ? (0, F.c)(null == (s = d.props) ? void 0 : s.onAction, h ? () => h(d.key) : void 0)
                                    : void 0,
                            focus: () => {
                                var e;
                                null === n.current ||
                                    ((null == A.current || d.key === A.current) &&
                                        (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                                    (0, H.l)(n.current);
                            },
                            linkBehavior: p,
                        }),
                        R = (0, U.HI)(d.props),
                        b = O.hasAction ? R : {},
                        D = (0, u.v)(v, b, {
                            role: "row",
                            onKeyDownCapture: (e) => {
                                if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement)
                                    return;
                                let i = (0, j.N$)(n.current);
                                if (
                                    ((i.currentNode = document.activeElement),
                                    "expandedKeys" in t && document.activeElement === n.current)
                                ) {
                                    if (
                                        e.key === W[f] &&
                                        t.selectionManager.focusedKey === d.key &&
                                        y &&
                                        !t.expandedKeys.has(d.key)
                                    ) {
                                        t.toggleKey(d.key), e.stopPropagation();
                                        return;
                                    } else if (
                                        e.key === K[f] &&
                                        t.selectionManager.focusedKey === d.key &&
                                        y &&
                                        t.expandedKeys.has(d.key)
                                    ) {
                                        t.toggleKey(d.key), e.stopPropagation();
                                        return;
                                    }
                                }
                                switch (e.key) {
                                    case "ArrowLeft":
                                        if ("arrow" === E) {
                                            let t = "rtl" === f ? i.nextNode() : i.previousNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, H.l)(t),
                                                    (0, V.o)(t, { containingElement: (0, B.m)(n.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === f))
                                                (0, H.l)(n.current),
                                                    (0, V.o)(n.current, { containingElement: (0, B.m)(n.current) });
                                            else {
                                                i.currentNode = n.current;
                                                let e = z(i);
                                                e &&
                                                    ((0, H.l)(e),
                                                    (0, V.o)(e, { containingElement: (0, B.m)(n.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowRight":
                                        if ("arrow" === E) {
                                            let t = "rtl" === f ? i.previousNode() : i.nextNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, H.l)(t),
                                                    (0, V.o)(t, { containingElement: (0, B.m)(n.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === f))
                                                (0, H.l)(n.current),
                                                    (0, V.o)(n.current, { containingElement: (0, B.m)(n.current) });
                                            else {
                                                i.currentNode = n.current;
                                                let e = z(i);
                                                e &&
                                                    ((0, H.l)(e),
                                                    (0, V.o)(e, { containingElement: (0, B.m)(n.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        if (!e.altKey && n.current.contains(e.target)) {
                                            var r;
                                            e.stopPropagation(),
                                                e.preventDefault(),
                                                null == (r = n.current.parentElement) ||
                                                    r.dispatchEvent(
                                                        new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                                    );
                                        }
                                }
                            },
                            onKeyDown: (e) => {
                                if (
                                    e.currentTarget.contains(e.target) &&
                                    n.current &&
                                    document.activeElement &&
                                    "Tab" === e.key &&
                                    "tab" === E
                                ) {
                                    let t = (0, j.N$)(n.current, { tabbable: !0 });
                                    (t.currentNode = document.activeElement),
                                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                                }
                            },
                            onFocus: (e) => {
                                if (((A.current = d.key), e.target !== n.current)) {
                                    (0, k.pP)() || t.selectionManager.setFocusedKey(d.key);
                                    return;
                                }
                            },
                            "aria-label": d.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(d.key)
                                ? t.selectionManager.isSelected(d.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(d.key) || void 0,
                            "aria-labelledby": g && d.textValue ? `${T(t, d.key)} ${g}` : void 0,
                            id: T(t, d.key),
                        });
                    if (_) {
                        let { collection: e } = t,
                            n = [...e];
                        D["aria-rowindex"] = n.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => {
                                      var n;
                                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                                  })
                                  .findIndex((e) => e === d.key) + 1
                            : d.index + 1;
                    }
                    return {
                        rowProps: { ...(0, u.v)(D, N) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: g },
                        ...O,
                    };
                })({ node: s }, t, n),
                { descriptionProps: f, ...p } = _,
                E = t.disabledKeys.has(s.key) || s.props.isDisabled,
                m = (0, k.lb)();
            "virtual" === m && "u" > typeof window && "ontouchstart" in window && (m = "pointer");
            let g = l && ("keyboard" === m || "virtual" === m) ? a.format("removeDescription") : "",
                A = (0, x.I)(g),
                N = s.key === t.selectionManager.focusedKey,
                y = null != t.selectionManager.focusedKey,
                C = -1;
            E || (!N && y) || (C = 0);
            let v = (0, h.$)(s.props),
                O = (0, U.HI)(s.props),
                { focusableProps: R } = (0, G.Wc)({ isDisabled: E }, n);
            return {
                removeButtonProps: {
                    "aria-label": a.format("removeButtonLabel"),
                    "aria-labelledby": `${o} ${c.id}`,
                    isDisabled: E,
                    id: o,
                    onPress: () => (l ? l(new Set([s.key])) : null),
                },
                rowProps: (0, u.v)(R, c, v, O, {
                    tabIndex: C,
                    onKeyDown: l
                        ? (e) => {
                              ("Delete" === e.key || "Backspace" === e.key) &&
                                  (E ||
                                      (e.preventDefault(),
                                      t.selectionManager.isSelected(s.key)
                                          ? null == l || l(new Set(t.selectionManager.selectedKeys))
                                          : null == l || l(new Set([s.key]))));
                          }
                        : void 0,
                    "aria-describedby": A["aria-describedby"],
                }),
                gridCellProps: (0, u.v)(d, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...p,
                allowsRemoving: !!l,
            };
        })({ item: n }, i, l),
        { hoverProps: A, isHovered: N } = (0, q.M)({
            isDisabled: !g.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        y = (0, o.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...g,
                isFocusVisible: d,
                isHovered: N,
                selectionMode: i.selectionManager.selectionMode,
                selectionBehavior: i.selectionManager.selectionBehavior,
            },
        });
    (0, r.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let C = (0, h.$)(e, { global: !0 });
    return (
        delete C.id,
        delete C.onClick,
        r.createElement(
            "div",
            {
                ref: l,
                ...(0, u.v)(C, y, _, c, A),
                "data-selected": g.isSelected || void 0,
                "data-disabled": g.isDisabled || void 0,
                "data-hovered": N || void 0,
                "data-focused": g.isFocused || void 0,
                "data-focus-visible": d || void 0,
                "data-pressed": g.isPressed || void 0,
                "data-allows-removing": g.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === i.selectionManager.selectionMode ? void 0 : i.selectionManager.selectionMode,
            },
            r.createElement(
                "div",
                { ...f, style: { display: "contents" } },
                r.createElement(
                    o.Kq,
                    {
                        values: [
                            [s.k, { slots: { remove: E } }],
                            [a.zL, a.N],
                            [m.r, { isSelected: g.isSelected }],
                        ],
                    },
                    y.children,
                ),
            ),
        )
    );
});
var eu = n(15626),
    ec = n(661531),
    ed = n(789645),
    e_ = n(834730),
    ef = n(543893);
function eh(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: ef.m4, style: { backgroundColor: r } });
            case "avatar":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: ef.my, src: s, alt: "" });
            case "image":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: ef.Sl, src: a, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: "inline" === n ? "xs" : "sm" });
}
var ep = n(659046);
function eE(e) {
    let { label: t, layout: n, isDisabled: r, icon: a, accessibilityHint: o, ...l } = e,
        u = [t, o].filter(Boolean).join(", ");
    return (0, i.jsx)(el, {
        ...l,
        className: ep.Tc,
        textValue: u,
        isDisabled: r,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != a && (0, i.jsx)(eh, { graphic: a, layout: n }),
                    (0, i.jsx)(e_.E, { variant: "inline" === n ? "text-sm/normal" : "text-md/normal", children: t }),
                    r &&
                        (0, i.jsx)(s.$, {
                            slot: "remove",
                            children: (0, i.jsx)(ed.P, {
                                size: "inline" === n ? "xs" : "sm",
                                color: ec.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
function em(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: s,
            selectionMode: a = "none",
            layout: o = "default",
            items: l,
            onRemove: u,
            children: c,
        } = e,
        [d, _] = r.useState(() => new Set()),
        f = r.useContext(eu._);
    return (0, i.jsxs)(er, {
        "aria-label": n,
        id: f?.controlId,
        "aria-describedby": f?.describedById,
        "data-layout": o,
        className: ep.WD,
        selectionMode: a,
        selectedKeys: d,
        onSelectionChange: _,
        disabledKeys: s,
        onRemove: u,
        children: [
            (0, i.jsx)(ea, {
                ref: t,
                className: ep.Tw,
                children: l.map((e) =>
                    (0, r.createElement)(eE, { ...e, key: e.id, layout: o, accessibilityHint: e.accessibilityHint }),
                ),
            }),
            c,
        ],
    });
}

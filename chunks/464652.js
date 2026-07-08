"use strict";
r.d(t, { vw: () => es, LY: () => eo, CR: () => en });
var n = r(650682),
    i = r(241634),
    o = r(825913),
    a = r(129844),
    s = r(318473),
    l = r(507254),
    u = r(178375),
    c = r(784113),
    f = r(216055),
    d = r(290424),
    p = r(64700);
let h = (0, p.createContext)(null);
(0, l.KU)(u.OJ, function (e, t, r) {
    let n = (0, p.useContext)(h),
        { isLoading: i, onLoadMore: a, scrollOffset: l, ...u } = e,
        m = (0, p.useRef)(null),
        g = (0, p.useMemo)(
            () => ({ onLoadMore: a, collection: null == n ? void 0 : n.collection, sentinelRef: m, scrollOffset: l }),
            [a, l, null == n ? void 0 : n.collection],
        );
    (0, c.n)(g, m);
    let v = (0, o.Sl)({
        ...u,
        id: void 0,
        children: r.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: null,
    });
    return p.createElement(
        p.Fragment,
        null,
        p.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, f.Y)(!0) },
            p.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        i &&
            v.children &&
            p.createElement(
                "div",
                { ...(0, s.v)((0, d.$)(e, { global: !0 }), { tabIndex: -1 }), ...v, role: "option", ref: t },
                v.children,
            ),
    );
});
var m = r(257537),
    g = r(123375),
    v = r(357710),
    y = r(193523);
let b = new WeakMap();
function w(e, t) {
    var r, n;
    let { id: i } = null != (r = b.get(e)) ? r : {};
    if (!i) throw Error("Unknown list");
    return `${i}-${"string" == typeof (n = t) ? n.replace(/\s*/g, "") : "" + n}`;
}
var _ = r(985620),
    x = r(406985),
    E = r(227510),
    S = r(510281),
    k = r(977283),
    T = r(138026),
    C = r(74172),
    P = r(447432),
    A = r(744493),
    O = r(402112);
let M = new WeakMap();
var I = r(498430),
    R = {};
R = {
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
var D = r(807177),
    L = r(132716),
    F = r(885714),
    N = r(877247),
    j = r(260431),
    V = r(518665),
    B = r(150047),
    U = r(805447),
    K = r(693321),
    $ = r(364643);
let z = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    W = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function H(e) {
    let t = null,
        r = null;
    do (r = e.lastChild()) && (t = r);
    while (r);
    return t;
}
var G = r(47276),
    q = r(967158),
    Y = r(533715);
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
        let r = this.keyMap.get(e);
        return r && null != (t = r.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let r = this.keyMap.get(e);
        return r && null != (t = r.nextKey) ? t : null;
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
        let r = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let t of e.childNodes) r(t);
        };
        for (let t of e) r(t);
        let n = null,
            i = 0,
            o = 0;
        for (let [e, t] of this.keyMap)
            n ? ((n.nextKey = e), (t.prevKey = n.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = i++),
                ("section" === t.type || "item" === t.type) && o++,
                ((n = t).nextKey = void 0);
        (this._size = o), (this.lastKey = null != (t = null == n ? void 0 : n.key) ? t : null);
    }
}
var J = r(36310),
    Q = r(74733),
    Z = r(330722);
function ee(e, t) {
    let r = (0, p.useRef)(null);
    (0, p.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && r.current) {
            var n, i, o, a, s, l, u;
            let c = r.current.getItem(t.focusedKey),
                f = [...r.current.getKeys()]
                    .map((e) => {
                        let t = r.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                d = [...e.getKeys()]
                    .map((t) => {
                        let r = e.getItem(t);
                        return (null == r ? void 0 : r.type) === "item" ? r : null;
                    })
                    .filter((e) => null !== e),
                p =
                    (null != (n = null == f ? void 0 : f.length) ? n : 0) -
                    (null != (i = null == d ? void 0 : d.length) ? i : 0),
                h = Math.min(
                    p > 1
                        ? Math.max((null != (o = null == c ? void 0 : c.index) ? o : 0) - p + 1, 0)
                        : null != (a = null == c ? void 0 : c.index)
                          ? a
                          : 0,
                    (null != (s = null == d ? void 0 : d.length) ? s : 0) - 1,
                ),
                m = null,
                g = !1;
            for (; h >= 0; ) {
                if (!t.isDisabled(d[h].key)) {
                    m = d[h];
                    break;
                }
                h < d.length - 1 && !g
                    ? h++
                    : ((g = !0),
                      h > (null != (l = null == c ? void 0 : c.index) ? l : 0) &&
                          (h = null != (u = null == c ? void 0 : c.index) ? u : 0),
                      h--);
            }
            t.setFocusedKey(m ? m.key : null);
        }
        r.current = e;
    }, [e, t]);
}
let et = (0, p.createContext)(null),
    er = (0, p.createContext)(null),
    en = (0, p.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, o.JT)(e, t, et)),
            p.createElement(
                h.Provider,
                { value: null },
                p.createElement(l.GQ, { content: e.children }, (r) =>
                    p.createElement(ei, { props: e, forwardedRef: t, collection: r }),
                ),
            )
        );
    });
function ei({ props: e, forwardedRef: t, collection: r }) {
    var n, i;
    let l,
        u,
        c = (0, p.useRef)(null),
        { id: f, ...g } = e;
    [g, c] = (0, o.JT)(g, c, m.Co);
    let { filter: v, shouldUseVirtualFocus: w, ...I } = g,
        [R, D] = (0, o._E)(!e["aria-label"] && !e["aria-labelledby"]),
        L =
            ((i = (function (e) {
                let { filter: t, layoutDelegate: r } = e,
                    n = (0, J.R)(e),
                    i = (0, p.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                    o = (0, p.useCallback)((e) => new X(t ? t(e) : e), [t]),
                    a = (0, p.useMemo)(
                        () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
                        [e.suppressTextValueWarning],
                    ),
                    s = (0, Z.G)(e, o, a),
                    l = (0, p.useMemo)(() => new (0, Q.Y)(s, n, { layoutDelegate: r }), [s, n, r]);
                return ee(s, l), { collection: s, disabledKeys: i, selectionManager: l };
            })({ ...I, children: void 0, collection: r })),
            (l = (0, p.useMemo)(() => (v ? i.collection.filter(v) : i.collection), [i.collection, v])),
            (u = i.selectionManager.withCollection(l)),
            ee(l, u),
            { collection: l, selectionManager: u, disabledKeys: i.disabledKeys }),
        F = (0, d.$)(g, { global: !0 }),
        N = Object.fromEntries(Object.entries(F).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: j,
            labelProps: V,
            descriptionProps: B,
            errorMessageProps: U,
        } = (function (e, t, r) {
            let { direction: n } = (0, O.Y)(),
                i =
                    e.keyboardDelegate ||
                    new (0, T.n)({
                        collection: t.collection,
                        ref: r,
                        orientation: "horizontal",
                        direction: n,
                        disabledKeys: t.disabledKeys,
                        disabledBehavior: t.selectionManager.disabledBehavior,
                    }),
                {
                    labelProps: o,
                    fieldProps: a,
                    descriptionProps: l,
                    errorMessageProps: u,
                } = (0, P.M)({ ...e, labelElementType: "span" }),
                { gridProps: c } = (function (e, t, r) {
                    let {
                        isVirtualized: n,
                        keyboardDelegate: i,
                        layoutDelegate: o,
                        onAction: a,
                        disallowTypeAhead: l,
                        linkBehavior: u = "action",
                        keyboardNavigationBehavior: c = "arrow",
                        escapeKeyBehavior: f = "clearSelection",
                        shouldSelectOnPressUp: h,
                    } = e;
                    e["aria-label"] ||
                        e["aria-labelledby"] ||
                        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                    let { listProps: m } = (function (e) {
                            let {
                                    selectionManager: t,
                                    collection: r,
                                    disabledKeys: n,
                                    ref: i,
                                    keyboardDelegate: o,
                                    layoutDelegate: a,
                                } = e,
                                s = (0, C.Q)({ usage: "search", sensitivity: "base" }),
                                l = t.disabledBehavior,
                                u = (0, p.useMemo)(
                                    () =>
                                        o ||
                                        new (0, T.n)({
                                            collection: r,
                                            disabledKeys: n,
                                            disabledBehavior: l,
                                            ref: i,
                                            collator: s,
                                            layoutDelegate: a,
                                        }),
                                    [o, a, r, n, i, s, l],
                                ),
                                { collectionProps: c } = (0, k.y)({
                                    ...e,
                                    ref: i,
                                    selectionManager: t,
                                    keyboardDelegate: u,
                                });
                            return { listProps: c };
                        })({
                            selectionManager: t.selectionManager,
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            ref: r,
                            keyboardDelegate: i,
                            layoutDelegate: o,
                            isVirtualized: n,
                            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                            shouldFocusWrap: e.shouldFocusWrap,
                            linkBehavior: u,
                            disallowTypeAhead: l,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: f,
                        }),
                        g = (0, _.Bi)(e.id);
                    b.set(t, {
                        id: g,
                        onAction: a,
                        linkBehavior: u,
                        keyboardNavigationBehavior: c,
                        shouldSelectOnPressUp: h,
                    });
                    let v = (0, x.m)({ selectionManager: t.selectionManager, hasItemActions: !!a }),
                        y = (0, S.$)(r, { isDisabled: 0 !== t.collection.size }),
                        w = (0, d.$)(e, { labelable: !0 }),
                        P = (0, s.v)(
                            w,
                            {
                                role: "grid",
                                id: g,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: y ? -1 : 0 } : m,
                            v,
                        );
                    return (
                        n && ((P["aria-rowcount"] = t.collection.size), (P["aria-colcount"] = 1)),
                        (0, E.H)({}, t),
                        { gridProps: P }
                    );
                })(
                    {
                        ...e,
                        ...a,
                        keyboardDelegate: i,
                        shouldFocusWrap: !0,
                        linkBehavior: "override",
                        keyboardNavigationBehavior: "tab",
                    },
                    t,
                    r,
                ),
                [f, h] = (0, p.useState)(!1),
                { focusWithinProps: m } = (0, A.R)({ onFocusWithinChange: h }),
                g = (0, d.$)(e),
                v = (0, p.useRef)(t.collection.size);
            return (
                (0, p.useEffect)(() => {
                    r.current && v.current > 0 && 0 === t.collection.size && f && r.current.focus(),
                        (v.current = t.collection.size);
                }, [t.collection.size, f, r]),
                M.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, s.v)(c, g, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": f ? "polite" : "off",
                        ...m,
                        ...a,
                    }),
                    labelProps: o,
                    descriptionProps: l,
                    errorMessageProps: u,
                }
            );
        })({ ...I, ...N, label: D }, L, c);
    return p.createElement(
        "div",
        {
            ...F,
            id: f,
            ref: t,
            slot: e.slot || void 0,
            className: null != (n = e.className) ? n : "react-aria-TagGroup",
            style: e.style,
        },
        p.createElement(
            o.Kq,
            {
                values: [
                    [a.I, { ...V, elementType: "span", ref: R }],
                    [er, { ...j, ref: c }],
                    [h, L],
                    [y.h, { slots: { description: B, errorMessage: U } }],
                ],
            },
            e.children,
        ),
    );
}
let eo = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(h) ? p.createElement(ea, { props: e, forwardedRef: t }) : p.createElement(l.pM, e);
});
function ea({ props: e, forwardedRef: t }) {
    let r = (0, p.useContext)(h),
        { CollectionRoot: n } = (0, p.useContext)(i.zL),
        [a, l] = (0, o.JT)({}, t, er),
        { focusProps: u, isFocused: c, isFocusVisible: f } = (0, I.o)(),
        m = { isEmpty: 0 === r.collection.size, isFocused: c, isFocusVisible: f, state: r },
        g = (0, o.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: m }),
        y = (0, i.l2)(r.selectionManager.focusedKey),
        b = (0, d.$)(e, { global: !0 });
    return p.createElement(
        "div",
        {
            ...(0, s.v)(b, g, a, u),
            ref: l,
            "data-empty": 0 === r.collection.size || void 0,
            "data-focused": c || void 0,
            "data-focus-visible": f || void 0,
        },
        p.createElement(
            v.D,
            null,
            0 === r.collection.size && e.renderEmptyState
                ? e.renderEmptyState(m)
                : p.createElement(n, { collection: r.collection, persistedKeys: y }),
        ),
    );
}
let es = (0, l.KU)(u._B, (e, t, r) => {
    let a = (0, p.useContext)(h),
        l = (0, Y.U)(t),
        { focusProps: u, isFocusVisible: c } = (0, I.o)({ within: !1 }),
        {
            rowProps: f,
            gridCellProps: m,
            removeButtonProps: v,
            ...y
        } = (function (e, t, r) {
            var n;
            let { item: i } = e,
                o = (0, G.o)((n = R) && n.__esModule ? n.default : n, "@react-aria/tag"),
                a = (0, _.Bi)(),
                { onRemove: l } = M.get(t) || {},
                {
                    rowProps: u,
                    gridCellProps: c,
                    ...f
                } = (function (e, t, r) {
                    var n, i, o, a, l, u;
                    let { node: c, isVirtualized: f } = e,
                        { direction: d } = (0, O.Y)(),
                        {
                            onAction: h,
                            linkBehavior: m,
                            keyboardNavigationBehavior: g,
                            shouldSelectOnPressUp: v,
                        } = b.get(t),
                        y = (0, _.X1)(),
                        x = (0, p.useRef)(null),
                        E = {},
                        S = e.hasChildItems,
                        k = t.selectionManager.isLink(c.key);
                    if (null != c && "expandedKeys" in t) {
                        let e = null == (o = (a = t.collection).getChildren) ? void 0 : o.call(a, c.key);
                        (S = S || [...(null != e ? e : [])].length > 1),
                            null == h &&
                                !k &&
                                "none" === t.selectionManager.selectionMode &&
                                S &&
                                (h = () => t.toggleKey(c.key));
                        let r = S ? t.expandedKeys.has(c.key) : void 0,
                            n = 1;
                        if (c.level > 0 && (null == c ? void 0 : c.parentKey) != null) {
                            let e = t.collection.getItem(c.parentKey);
                            e &&
                                (n = [
                                    ...(null == (l = (u = t.collection).getChildren) ? void 0 : l.call(u, e.key)),
                                ].filter((e) => "item" === e.type).length);
                        } else n = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        E = {
                            "aria-expanded": r,
                            "aria-level": c.level + 1,
                            "aria-posinset": (null == c ? void 0 : c.index) + 1,
                            "aria-setsize": n,
                        };
                    }
                    let { itemProps: T, ...C } = (0, $.p)({
                            selectionManager: t.selectionManager,
                            key: c.key,
                            ref: r,
                            isVirtualized: f,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || v,
                            onAction:
                                h || (null == (n = c.props) ? void 0 : n.onAction)
                                    ? (0, j.c)(null == (i = c.props) ? void 0 : i.onAction, h ? () => h(c.key) : void 0)
                                    : void 0,
                            focus: () => {
                                var e;
                                null === r.current ||
                                    ((null == x.current || c.key === x.current) &&
                                        (null == (e = r.current) ? void 0 : e.contains(document.activeElement))) ||
                                    (0, U.l)(r.current);
                            },
                            linkBehavior: m,
                        }),
                        P = (0, L.HI)(c.props),
                        A = C.hasAction ? P : {},
                        M = (0, s.v)(T, A, {
                            role: "row",
                            onKeyDownCapture: (e) => {
                                if (!e.currentTarget.contains(e.target) || !r.current || !document.activeElement)
                                    return;
                                let n = (0, K.N$)(r.current);
                                if (
                                    ((n.currentNode = document.activeElement),
                                    "expandedKeys" in t && document.activeElement === r.current)
                                ) {
                                    if (
                                        e.key === z[d] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        S &&
                                        !t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    } else if (
                                        e.key === W[d] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        S &&
                                        t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    }
                                }
                                switch (e.key) {
                                    case "ArrowLeft":
                                        if ("arrow" === g) {
                                            let t = "rtl" === d ? n.nextNode() : n.previousNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, U.l)(t),
                                                    (0, V.o)(t, { containingElement: (0, B.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === d))
                                                (0, U.l)(r.current),
                                                    (0, V.o)(r.current, { containingElement: (0, B.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = H(n);
                                                e &&
                                                    ((0, U.l)(e),
                                                    (0, V.o)(e, { containingElement: (0, B.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowRight":
                                        if ("arrow" === g) {
                                            let t = "rtl" === d ? n.previousNode() : n.nextNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, U.l)(t),
                                                    (0, V.o)(t, { containingElement: (0, B.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === d))
                                                (0, U.l)(r.current),
                                                    (0, V.o)(r.current, { containingElement: (0, B.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = H(n);
                                                e &&
                                                    ((0, U.l)(e),
                                                    (0, V.o)(e, { containingElement: (0, B.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        if (!e.altKey && r.current.contains(e.target)) {
                                            var i;
                                            e.stopPropagation(),
                                                e.preventDefault(),
                                                null == (i = r.current.parentElement) ||
                                                    i.dispatchEvent(
                                                        new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                                    );
                                        }
                                }
                            },
                            onKeyDown: (e) => {
                                if (
                                    e.currentTarget.contains(e.target) &&
                                    r.current &&
                                    document.activeElement &&
                                    "Tab" === e.key &&
                                    "tab" === g
                                ) {
                                    let t = (0, K.N$)(r.current, { tabbable: !0 });
                                    (t.currentNode = document.activeElement),
                                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                                }
                            },
                            onFocus: (e) => {
                                if (((x.current = c.key), e.target !== r.current)) {
                                    (0, F.pP)() || t.selectionManager.setFocusedKey(c.key);
                                    return;
                                }
                            },
                            "aria-label": c.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(c.key)
                                ? t.selectionManager.isSelected(c.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(c.key) || void 0,
                            "aria-labelledby": y && c.textValue ? `${w(t, c.key)} ${y}` : void 0,
                            id: w(t, c.key),
                        });
                    if (f) {
                        let { collection: e } = t,
                            r = [...e];
                        M["aria-rowindex"] = r.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => {
                                      var r;
                                      return (null == (r = e.getItem(t)) ? void 0 : r.type) !== "section";
                                  })
                                  .findIndex((e) => e === c.key) + 1
                            : c.index + 1;
                    }
                    return {
                        rowProps: { ...(0, s.v)(M, E) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: y },
                        ...C,
                    };
                })({ node: i }, t, r),
                { descriptionProps: h, ...m } = f,
                g = t.disabledKeys.has(i.key) || i.props.isDisabled,
                v = (0, F.lb)();
            "virtual" === v && "u" > typeof window && "ontouchstart" in window && (v = "pointer");
            let y = l && ("keyboard" === v || "virtual" === v) ? o.format("removeDescription") : "",
                x = (0, D.I)(y),
                E = i.key === t.selectionManager.focusedKey,
                S = null != t.selectionManager.focusedKey,
                k = -1;
            g || (!E && S) || (k = 0);
            let T = (0, d.$)(i.props),
                C = (0, L.HI)(i.props),
                { focusableProps: P } = (0, N.Wc)({ isDisabled: g }, r);
            return {
                removeButtonProps: {
                    "aria-label": o.format("removeButtonLabel"),
                    "aria-labelledby": `${a} ${u.id}`,
                    isDisabled: g,
                    id: a,
                    onPress: () => (l ? l(new Set([i.key])) : null),
                },
                rowProps: (0, s.v)(P, u, T, C, {
                    tabIndex: k,
                    onKeyDown: l
                        ? (e) => {
                              ("Delete" === e.key || "Backspace" === e.key) &&
                                  (g ||
                                      (e.preventDefault(),
                                      t.selectionManager.isSelected(i.key)
                                          ? null == l || l(new Set(t.selectionManager.selectedKeys))
                                          : null == l || l(new Set([i.key]))));
                          }
                        : void 0,
                    "aria-describedby": x["aria-describedby"],
                }),
                gridCellProps: (0, s.v)(c, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...m,
                allowsRemoving: !!l,
            };
        })({ item: r }, a, l),
        { hoverProps: x, isHovered: E } = (0, q.M)({
            isDisabled: !y.allowsSelection,
            onHoverStart: r.props.onHoverStart,
            onHoverChange: r.props.onHoverChange,
            onHoverEnd: r.props.onHoverEnd,
        }),
        S = (0, o.Sl)({
            ...e,
            id: void 0,
            children: r.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...y,
                isFocusVisible: c,
                isHovered: E,
                selectionMode: a.selectionManager.selectionMode,
                selectionBehavior: a.selectionManager.selectionBehavior,
            },
        });
    (0, p.useEffect)(() => {
        r.textValue;
    }, [r.textValue]);
    let k = (0, d.$)(e, { global: !0 });
    return (
        delete k.id,
        delete k.onClick,
        p.createElement(
            "div",
            {
                ref: l,
                ...(0, s.v)(k, S, f, u, x),
                "data-selected": y.isSelected || void 0,
                "data-disabled": y.isDisabled || void 0,
                "data-hovered": E || void 0,
                "data-focused": y.isFocused || void 0,
                "data-focus-visible": c || void 0,
                "data-pressed": y.isPressed || void 0,
                "data-allows-removing": y.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === a.selectionManager.selectionMode ? void 0 : a.selectionManager.selectionMode,
            },
            p.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                p.createElement(
                    o.Kq,
                    {
                        values: [
                            [n.k, { slots: { remove: v } }],
                            [i.zL, i.N],
                            [g.r, { isSelected: y.isSelected }],
                        ],
                    },
                    S.children,
                ),
            ),
        )
    );
});

"use strict";
r.d(t, { vw: () => ei, LY: () => ea, CR: () => en });
var n = r(197867),
    s = r(241634),
    a = r(825913),
    o = r(129844),
    i = r(318473),
    u = r(507254),
    c = r(178375),
    l = r(784113),
    d = r(216055),
    f = r(290424),
    p = r(64700);
let h = (0, p.createContext)(null);
(0, u.KU)(c.OJ, function (e, t, r) {
    let n = (0, p.useContext)(h),
        { isLoading: s, onLoadMore: o, scrollOffset: u, ...c } = e,
        m = (0, p.useRef)(null),
        v = (0, p.useMemo)(
            () => ({ onLoadMore: o, collection: null == n ? void 0 : n.collection, sentinelRef: m, scrollOffset: u }),
            [o, u, null == n ? void 0 : n.collection],
        );
    (0, l.n)(v, m);
    let g = (0, a.Sl)({
        ...c,
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
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, d.Y)(!0) },
            p.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        s &&
            g.children &&
            p.createElement(
                "div",
                { ...(0, i.v)((0, f.$)(e, { global: !0 }), { tabIndex: -1 }), ...g, role: "option", ref: t },
                g.children,
            ),
    );
});
var m = r(257537),
    v = r(123375),
    g = r(357710),
    y = r(193523);
let b = new WeakMap();
function _(e, t) {
    var r, n;
    let { id: s } = null != (r = b.get(e)) ? r : {};
    if (!s) throw Error("Unknown list");
    return `${s}-${"string" == typeof (n = t) ? n.replace(/\s*/g, "") : "" + n}`;
}
var x = r(985620),
    w = r(406985),
    k = r(227510),
    M = r(510281),
    S = r(977283),
    L = r(138026),
    T = r(74172),
    E = r(986960),
    D = r(744493),
    C = r(402112);
let O = new WeakMap();
var P = r(498430),
    A = {};
A = {
    "ar-AE": { removeButtonLabel: "إزالة", removeDescription: "اضغط على مفتاح DELETE لإزالة علامة." },
    "bg-BG": { removeButtonLabel: "Премахване", removeDescription: "Натиснете Delete, за да премахнете маркера." },
    "cs-CZ": { removeButtonLabel: "Odebrat", removeDescription: "Stisknut\xedm kl\xe1vesy Delete odeberete značku." },
    "da-DK": { removeButtonLabel: "Fjern", removeDescription: "Tryk p\xe5 Slet for at fjerne tag." },
    "de-DE": {
        removeButtonLabel: "Entfernen",
        removeDescription: "Auf „L\xf6schen“ dr\xfccken, um das Tag zu entfernen.",
    },
    "el-GR": { removeButtonLabel: "Κατάργηση", removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα." },
    "en-US": { removeDescription: "Press Delete to remove tag.", removeButtonLabel: "Remove" },
    "es-ES": { removeButtonLabel: "Quitar", removeDescription: "Pulse Eliminar para quitar la etiqueta." },
    "et-EE": { removeButtonLabel: "Eemalda", removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete." },
    "fi-FI": { removeButtonLabel: "Poista", removeDescription: "Poista tunniste painamalla Poista-painiketta." },
    "fr-FR": {
        removeButtonLabel: "Supprimer",
        removeDescription: "Appuyez sur Supprimer pour supprimer l’\xe9tiquette.",
    },
    "he-IL": { removeButtonLabel: "הסר", removeDescription: "לחץ על מחק כדי להסיר תג." },
    "hr-HR": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Delete za uklanjanje oznake." },
    "hu-HU": {
        removeButtonLabel: "Elt\xe1vol\xedt\xe1s",
        removeDescription: "Nyomja meg a Delete billentyűt a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.",
    },
    "it-IT": { removeButtonLabel: "Rimuovi", removeDescription: "Premi Elimina per rimuovere il tag." },
    "ja-JP": { removeButtonLabel: "削除", removeDescription: "タグを削除するには、Delete キーを押します。" },
    "ko-KR": { removeButtonLabel: "제거", removeDescription: "태그를 제거하려면 Delete 키를 누르십시오." },
    "lt-LT": {
        removeButtonLabel: "Pašalinti",
        removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą.",
    },
    "lv-LV": { removeButtonLabel: "Noņemt", removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu." },
    "nb-NO": { removeButtonLabel: "Fjern", removeDescription: "Trykk p\xe5 Slett for \xe5 fjerne taggen." },
    "nl-NL": { removeButtonLabel: "Verwijderen", removeDescription: "Druk op Verwijderen om de tag te verwijderen." },
    "pl-PL": { removeButtonLabel: "Usuń", removeDescription: "Naciśnij Usuń, aby usunąć znacznik." },
    "pt-BR": { removeButtonLabel: "Remover", removeDescription: "Pressione Delete para remover a tag." },
    "pt-PT": { removeButtonLabel: "Eliminar", removeDescription: "Prima Delete para eliminar a tag." },
    "ro-RO": {
        removeButtonLabel: "\xcendepărtaţi",
        removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta.",
    },
    "ru-RU": { removeButtonLabel: "Удалить", removeDescription: "Нажмите DELETE, чтобы удалить тег." },
    "sk-SK": {
        removeButtonLabel: "Odstr\xe1niť",
        removeDescription: "Ak chcete odstr\xe1niť značku, stlačte kl\xe1ves Delete.",
    },
    "sl-SI": { removeButtonLabel: "Odstrani", removeDescription: "Pritisnite Delete, da odstranite oznako." },
    "sr-SP": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Obriši da biste uklonili oznaku." },
    "sv-SE": { removeButtonLabel: "Ta bort", removeDescription: "Tryck p\xe5 Radera f\xf6r att ta bort taggen." },
    "tr-TR": { removeButtonLabel: "Kaldır", removeDescription: "Etiketi kaldırmak i\xe7in Sil tuşuna basın." },
    "uk-UA": { removeButtonLabel: "Вилучити", removeDescription: "Натисніть Delete, щоб вилучити тег." },
    "zh-CN": { removeButtonLabel: "删除", removeDescription: "按下“删除”以删除标记。" },
    "zh-TW": { removeButtonLabel: "移除", removeDescription: "按 Delete 鍵以移除標記。" },
};
var j = r(807177),
    R = r(132716),
    I = r(885714),
    Y = r(877247),
    N = r(260431),
    F = r(518665),
    H = r(150047),
    z = r(805447),
    B = r(693321),
    U = r(364643);
let W = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    $ = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function V(e) {
    let t = null,
        r = null;
    do (r = e.lastChild()) && (t = r);
    while (r);
    return t;
}
var K = r(47276),
    q = r(967158),
    G = r(533715);
class J {
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
            s = 0,
            a = 0;
        for (let [e, t] of this.keyMap)
            n ? ((n.nextKey = e), (t.prevKey = n.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = s++),
                ("section" === t.type || "item" === t.type) && a++,
                ((n = t).nextKey = void 0);
        (this._size = a), (this.lastKey = null != (t = null == n ? void 0 : n.key) ? t : null);
    }
}
var X = r(36310),
    Z = r(74733),
    Q = r(330722);
function ee(e, t) {
    let r = (0, p.useRef)(null);
    (0, p.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && r.current) {
            var n, s, a, o, i, u, c;
            let l = r.current.getItem(t.focusedKey),
                d = [...r.current.getKeys()]
                    .map((e) => {
                        let t = r.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                f = [...e.getKeys()]
                    .map((t) => {
                        let r = e.getItem(t);
                        return (null == r ? void 0 : r.type) === "item" ? r : null;
                    })
                    .filter((e) => null !== e),
                p =
                    (null != (n = null == d ? void 0 : d.length) ? n : 0) -
                    (null != (s = null == f ? void 0 : f.length) ? s : 0),
                h = Math.min(
                    p > 1
                        ? Math.max((null != (a = null == l ? void 0 : l.index) ? a : 0) - p + 1, 0)
                        : null != (o = null == l ? void 0 : l.index)
                          ? o
                          : 0,
                    (null != (i = null == f ? void 0 : f.length) ? i : 0) - 1,
                ),
                m = null,
                v = !1;
            for (; h >= 0; ) {
                if (!t.isDisabled(f[h].key)) {
                    m = f[h];
                    break;
                }
                h < f.length - 1 && !v
                    ? h++
                    : ((v = !0),
                      h > (null != (u = null == l ? void 0 : l.index) ? u : 0) &&
                          (h = null != (c = null == l ? void 0 : l.index) ? c : 0),
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
            ([e, t] = (0, a.JT)(e, t, et)),
            p.createElement(
                h.Provider,
                { value: null },
                p.createElement(u.GQ, { content: e.children }, (r) =>
                    p.createElement(es, { props: e, forwardedRef: t, collection: r }),
                ),
            )
        );
    });
function es({ props: e, forwardedRef: t, collection: r }) {
    var n, s;
    let u,
        c,
        l = (0, p.useRef)(null),
        { id: d, ...v } = e;
    [v, l] = (0, a.JT)(v, l, m.Co);
    let { filter: g, shouldUseVirtualFocus: _, ...P } = v,
        [A, j] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
        R =
            ((s = (function (e) {
                let { filter: t, layoutDelegate: r } = e,
                    n = (0, X.R)(e),
                    s = (0, p.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                    a = (0, p.useCallback)((e) => new J(t ? t(e) : e), [t]),
                    o = (0, p.useMemo)(
                        () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
                        [e.suppressTextValueWarning],
                    ),
                    i = (0, Q.G)(e, a, o),
                    u = (0, p.useMemo)(() => new (0, Z.Y)(i, n, { layoutDelegate: r }), [i, n, r]);
                return ee(i, u), { collection: i, disabledKeys: s, selectionManager: u };
            })({ ...P, children: void 0, collection: r })),
            (u = (0, p.useMemo)(() => (g ? s.collection.filter(g) : s.collection), [s.collection, g])),
            (c = s.selectionManager.withCollection(u)),
            ee(u, c),
            { collection: u, selectionManager: c, disabledKeys: s.disabledKeys }),
        I = (0, f.$)(v, { global: !0 }),
        Y = Object.fromEntries(Object.entries(I).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: N,
            labelProps: F,
            descriptionProps: H,
            errorMessageProps: z,
        } = (function (e, t, r) {
            let { direction: n } = (0, C.Y)(),
                s =
                    e.keyboardDelegate ||
                    new (0, L.n)({
                        collection: t.collection,
                        ref: r,
                        orientation: "horizontal",
                        direction: n,
                        disabledKeys: t.disabledKeys,
                        disabledBehavior: t.selectionManager.disabledBehavior,
                    }),
                {
                    labelProps: a,
                    fieldProps: o,
                    descriptionProps: u,
                    errorMessageProps: c,
                } = (0, E.M)({ ...e, labelElementType: "span" }),
                { gridProps: l } = (function (e, t, r) {
                    let {
                        isVirtualized: n,
                        keyboardDelegate: s,
                        layoutDelegate: a,
                        onAction: o,
                        disallowTypeAhead: u,
                        linkBehavior: c = "action",
                        keyboardNavigationBehavior: l = "arrow",
                        escapeKeyBehavior: d = "clearSelection",
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
                                    ref: s,
                                    keyboardDelegate: a,
                                    layoutDelegate: o,
                                } = e,
                                i = (0, T.Q)({ usage: "search", sensitivity: "base" }),
                                u = t.disabledBehavior,
                                c = (0, p.useMemo)(
                                    () =>
                                        a ||
                                        new (0, L.n)({
                                            collection: r,
                                            disabledKeys: n,
                                            disabledBehavior: u,
                                            ref: s,
                                            collator: i,
                                            layoutDelegate: o,
                                        }),
                                    [a, o, r, n, s, i, u],
                                ),
                                { collectionProps: l } = (0, S.y)({
                                    ...e,
                                    ref: s,
                                    selectionManager: t,
                                    keyboardDelegate: c,
                                });
                            return { listProps: l };
                        })({
                            selectionManager: t.selectionManager,
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            ref: r,
                            keyboardDelegate: s,
                            layoutDelegate: a,
                            isVirtualized: n,
                            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                            shouldFocusWrap: e.shouldFocusWrap,
                            linkBehavior: c,
                            disallowTypeAhead: u,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: d,
                        }),
                        v = (0, x.Bi)(e.id);
                    b.set(t, {
                        id: v,
                        onAction: o,
                        linkBehavior: c,
                        keyboardNavigationBehavior: l,
                        shouldSelectOnPressUp: h,
                    });
                    let g = (0, w.m)({ selectionManager: t.selectionManager, hasItemActions: !!o }),
                        y = (0, M.$)(r, { isDisabled: 0 !== t.collection.size }),
                        _ = (0, f.$)(e, { labelable: !0 }),
                        E = (0, i.v)(
                            _,
                            {
                                role: "grid",
                                id: v,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: y ? -1 : 0 } : m,
                            g,
                        );
                    return (
                        n && ((E["aria-rowcount"] = t.collection.size), (E["aria-colcount"] = 1)),
                        (0, k.H)({}, t),
                        { gridProps: E }
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
                    r,
                ),
                [d, h] = (0, p.useState)(!1),
                { focusWithinProps: m } = (0, D.R)({ onFocusWithinChange: h }),
                v = (0, f.$)(e),
                g = (0, p.useRef)(t.collection.size);
            return (
                (0, p.useEffect)(() => {
                    r.current && g.current > 0 && 0 === t.collection.size && d && r.current.focus(),
                        (g.current = t.collection.size);
                }, [t.collection.size, d, r]),
                O.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, i.v)(l, v, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": d ? "polite" : "off",
                        ...m,
                        ...o,
                    }),
                    labelProps: a,
                    descriptionProps: u,
                    errorMessageProps: c,
                }
            );
        })({ ...P, ...Y, label: j }, R, l);
    return p.createElement(
        "div",
        {
            ...I,
            id: d,
            ref: t,
            slot: e.slot || void 0,
            className: null != (n = e.className) ? n : "react-aria-TagGroup",
            style: e.style,
        },
        p.createElement(
            a.Kq,
            {
                values: [
                    [o.I, { ...F, elementType: "span", ref: A }],
                    [er, { ...N, ref: l }],
                    [h, R],
                    [y.h, { slots: { description: H, errorMessage: z } }],
                ],
            },
            e.children,
        ),
    );
}
let ea = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(h) ? p.createElement(eo, { props: e, forwardedRef: t }) : p.createElement(u.pM, e);
});
function eo({ props: e, forwardedRef: t }) {
    let r = (0, p.useContext)(h),
        { CollectionRoot: n } = (0, p.useContext)(s.zL),
        [o, u] = (0, a.JT)({}, t, er),
        { focusProps: c, isFocused: l, isFocusVisible: d } = (0, P.o)(),
        m = { isEmpty: 0 === r.collection.size, isFocused: l, isFocusVisible: d, state: r },
        v = (0, a.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: m }),
        y = (0, s.l2)(r.selectionManager.focusedKey),
        b = (0, f.$)(e, { global: !0 });
    return p.createElement(
        "div",
        {
            ...(0, i.v)(b, v, o, c),
            ref: u,
            "data-empty": 0 === r.collection.size || void 0,
            "data-focused": l || void 0,
            "data-focus-visible": d || void 0,
        },
        p.createElement(
            g.D,
            null,
            0 === r.collection.size && e.renderEmptyState
                ? e.renderEmptyState(m)
                : p.createElement(n, { collection: r.collection, persistedKeys: y }),
        ),
    );
}
let ei = (0, u.KU)(c._B, (e, t, r) => {
    let o = (0, p.useContext)(h),
        u = (0, G.U)(t),
        { focusProps: c, isFocusVisible: l } = (0, P.o)({ within: !1 }),
        {
            rowProps: d,
            gridCellProps: m,
            removeButtonProps: g,
            ...y
        } = (function (e, t, r) {
            var n;
            let { item: s } = e,
                a = (0, K.o)((n = A) && n.__esModule ? n.default : n, "@react-aria/tag"),
                o = (0, x.Bi)(),
                { onRemove: u } = O.get(t) || {},
                {
                    rowProps: c,
                    gridCellProps: l,
                    ...d
                } = (function (e, t, r) {
                    var n, s, a, o, u, c;
                    let { node: l, isVirtualized: d } = e,
                        { direction: f } = (0, C.Y)(),
                        {
                            onAction: h,
                            linkBehavior: m,
                            keyboardNavigationBehavior: v,
                            shouldSelectOnPressUp: g,
                        } = b.get(t),
                        y = (0, x.X1)(),
                        w = (0, p.useRef)(null),
                        k = {},
                        M = e.hasChildItems,
                        S = t.selectionManager.isLink(l.key);
                    if (null != l && "expandedKeys" in t) {
                        let e = null == (a = (o = t.collection).getChildren) ? void 0 : a.call(o, l.key);
                        (M = M || [...(null != e ? e : [])].length > 1),
                            null == h &&
                                !S &&
                                "none" === t.selectionManager.selectionMode &&
                                M &&
                                (h = () => t.toggleKey(l.key));
                        let r = M ? t.expandedKeys.has(l.key) : void 0,
                            n = 1;
                        if (l.level > 0 && (null == l ? void 0 : l.parentKey) != null) {
                            let e = t.collection.getItem(l.parentKey);
                            e &&
                                (n = [
                                    ...(null == (u = (c = t.collection).getChildren) ? void 0 : u.call(c, e.key)),
                                ].filter((e) => "item" === e.type).length);
                        } else n = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        k = {
                            "aria-expanded": r,
                            "aria-level": l.level + 1,
                            "aria-posinset": (null == l ? void 0 : l.index) + 1,
                            "aria-setsize": n,
                        };
                    }
                    let { itemProps: L, ...T } = (0, U.p)({
                            selectionManager: t.selectionManager,
                            key: l.key,
                            ref: r,
                            isVirtualized: d,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || g,
                            onAction:
                                h || (null == (n = l.props) ? void 0 : n.onAction)
                                    ? (0, N.c)(null == (s = l.props) ? void 0 : s.onAction, h ? () => h(l.key) : void 0)
                                    : void 0,
                            focus: () => {
                                var e;
                                null === r.current ||
                                    ((null == w.current || l.key === w.current) &&
                                        (null == (e = r.current) ? void 0 : e.contains(document.activeElement))) ||
                                    (0, z.l)(r.current);
                            },
                            linkBehavior: m,
                        }),
                        E = (0, R.HI)(l.props),
                        D = T.hasAction ? E : {},
                        O = (0, i.v)(L, D, {
                            role: "row",
                            onKeyDownCapture: (e) => {
                                if (!e.currentTarget.contains(e.target) || !r.current || !document.activeElement)
                                    return;
                                let n = (0, B.N$)(r.current);
                                if (
                                    ((n.currentNode = document.activeElement),
                                    "expandedKeys" in t && document.activeElement === r.current)
                                ) {
                                    if (
                                        e.key === W[f] &&
                                        t.selectionManager.focusedKey === l.key &&
                                        M &&
                                        !t.expandedKeys.has(l.key)
                                    ) {
                                        t.toggleKey(l.key), e.stopPropagation();
                                        return;
                                    } else if (
                                        e.key === $[f] &&
                                        t.selectionManager.focusedKey === l.key &&
                                        M &&
                                        t.expandedKeys.has(l.key)
                                    ) {
                                        t.toggleKey(l.key), e.stopPropagation();
                                        return;
                                    }
                                }
                                switch (e.key) {
                                    case "ArrowLeft":
                                        if ("arrow" === v) {
                                            let t = "rtl" === f ? n.nextNode() : n.previousNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, z.l)(t),
                                                    (0, F.o)(t, { containingElement: (0, H.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === f))
                                                (0, z.l)(r.current),
                                                    (0, F.o)(r.current, { containingElement: (0, H.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = V(n);
                                                e &&
                                                    ((0, z.l)(e),
                                                    (0, F.o)(e, { containingElement: (0, H.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowRight":
                                        if ("arrow" === v) {
                                            let t = "rtl" === f ? n.previousNode() : n.nextNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, z.l)(t),
                                                    (0, F.o)(t, { containingElement: (0, H.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === f))
                                                (0, z.l)(r.current),
                                                    (0, F.o)(r.current, { containingElement: (0, H.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = V(n);
                                                e &&
                                                    ((0, z.l)(e),
                                                    (0, F.o)(e, { containingElement: (0, H.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        if (!e.altKey && r.current.contains(e.target)) {
                                            var s;
                                            e.stopPropagation(),
                                                e.preventDefault(),
                                                null == (s = r.current.parentElement) ||
                                                    s.dispatchEvent(
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
                                    "tab" === v
                                ) {
                                    let t = (0, B.N$)(r.current, { tabbable: !0 });
                                    (t.currentNode = document.activeElement),
                                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                                }
                            },
                            onFocus: (e) => {
                                if (((w.current = l.key), e.target !== r.current)) {
                                    (0, I.pP)() || t.selectionManager.setFocusedKey(l.key);
                                    return;
                                }
                            },
                            "aria-label": l.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(l.key)
                                ? t.selectionManager.isSelected(l.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(l.key) || void 0,
                            "aria-labelledby": y && l.textValue ? `${_(t, l.key)} ${y}` : void 0,
                            id: _(t, l.key),
                        });
                    if (d) {
                        let { collection: e } = t,
                            r = [...e];
                        O["aria-rowindex"] = r.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => {
                                      var r;
                                      return (null == (r = e.getItem(t)) ? void 0 : r.type) !== "section";
                                  })
                                  .findIndex((e) => e === l.key) + 1
                            : l.index + 1;
                    }
                    return {
                        rowProps: { ...(0, i.v)(O, k) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: y },
                        ...T,
                    };
                })({ node: s }, t, r),
                { descriptionProps: h, ...m } = d,
                v = t.disabledKeys.has(s.key) || s.props.isDisabled,
                g = (0, I.lb)();
            "virtual" === g && "u" > typeof window && "ontouchstart" in window && (g = "pointer");
            let y = u && ("keyboard" === g || "virtual" === g) ? a.format("removeDescription") : "",
                w = (0, j.I)(y),
                k = s.key === t.selectionManager.focusedKey,
                M = null != t.selectionManager.focusedKey,
                S = -1;
            v || (!k && M) || (S = 0);
            let L = (0, f.$)(s.props),
                T = (0, R.HI)(s.props),
                { focusableProps: E } = (0, Y.Wc)({ isDisabled: v }, r);
            return {
                removeButtonProps: {
                    "aria-label": a.format("removeButtonLabel"),
                    "aria-labelledby": `${o} ${c.id}`,
                    isDisabled: v,
                    id: o,
                    onPress: () => (u ? u(new Set([s.key])) : null),
                },
                rowProps: (0, i.v)(E, c, L, T, {
                    tabIndex: S,
                    onKeyDown: u
                        ? (e) => {
                              ("Delete" === e.key || "Backspace" === e.key) &&
                                  (v ||
                                      (e.preventDefault(),
                                      t.selectionManager.isSelected(s.key)
                                          ? null == u || u(new Set(t.selectionManager.selectedKeys))
                                          : null == u || u(new Set([s.key]))));
                          }
                        : void 0,
                    "aria-describedby": w["aria-describedby"],
                }),
                gridCellProps: (0, i.v)(l, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...m,
                allowsRemoving: !!u,
            };
        })({ item: r }, o, u),
        { hoverProps: w, isHovered: k } = (0, q.M)({
            isDisabled: !y.allowsSelection,
            onHoverStart: r.props.onHoverStart,
            onHoverChange: r.props.onHoverChange,
            onHoverEnd: r.props.onHoverEnd,
        }),
        M = (0, a.Sl)({
            ...e,
            id: void 0,
            children: r.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...y,
                isFocusVisible: l,
                isHovered: k,
                selectionMode: o.selectionManager.selectionMode,
                selectionBehavior: o.selectionManager.selectionBehavior,
            },
        });
    (0, p.useEffect)(() => {
        r.textValue;
    }, [r.textValue]);
    let S = (0, f.$)(e, { global: !0 });
    return (
        delete S.id,
        delete S.onClick,
        p.createElement(
            "div",
            {
                ref: u,
                ...(0, i.v)(S, M, d, c, w),
                "data-selected": y.isSelected || void 0,
                "data-disabled": y.isDisabled || void 0,
                "data-hovered": k || void 0,
                "data-focused": y.isFocused || void 0,
                "data-focus-visible": l || void 0,
                "data-pressed": y.isPressed || void 0,
                "data-allows-removing": y.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === o.selectionManager.selectionMode ? void 0 : o.selectionManager.selectionMode,
            },
            p.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                p.createElement(
                    a.Kq,
                    {
                        values: [
                            [n.k, { slots: { remove: g } }],
                            [s.zL, s.N],
                            [v.r, { isSelected: y.isSelected }],
                        ],
                    },
                    M.children,
                ),
            ),
        )
    );
});

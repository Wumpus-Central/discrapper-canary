"use strict";
r.d(t, { vw: () => eo, LY: () => es, CR: () => en });
var n = r(197867),
    a = r(241634),
    s = r(825913),
    i = r(129844),
    o = r(318473),
    l = r(507254),
    u = r(178375),
    c = r(784113),
    d = r(216055),
    f = r(290424),
    p = r(64700);
let h = (0, p.createContext)(null);
(0, l.KU)(u.OJ, function (e, t, r) {
    let n = (0, p.useContext)(h),
        { isLoading: a, onLoadMore: i, scrollOffset: l, ...u } = e,
        m = (0, p.useRef)(null),
        _ = (0, p.useMemo)(
            () => ({ onLoadMore: i, collection: null == n ? void 0 : n.collection, sentinelRef: m, scrollOffset: l }),
            [i, l, null == n ? void 0 : n.collection],
        );
    (0, c.n)(_, m);
    let g = (0, s.Sl)({
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
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, d.Y)(!0) },
            p.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        a &&
            g.children &&
            p.createElement(
                "div",
                { ...(0, o.v)((0, f.$)(e, { global: !0 }), { tabIndex: -1 }), ...g, role: "option", ref: t },
                g.children,
            ),
    );
});
var m = r(257537),
    _ = r(123375),
    g = r(357710),
    v = r(193523);
let b = new WeakMap();
function y(e, t) {
    var r, n;
    let { id: a } = null != (r = b.get(e)) ? r : {};
    if (!a) throw Error("Unknown list");
    return `${a}-${"string" == typeof (n = t) ? n.replace(/\s*/g, "") : "" + n}`;
}
var E = r(985620),
    S = r(406985),
    T = r(227510),
    x = r(510281),
    w = r(977283),
    C = r(138026),
    D = r(74172),
    O = r(986960),
    A = r(744493),
    M = r(402112);
let R = new WeakMap();
var k = r(498430),
    N = {};
N = {
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
var L = r(807177),
    I = r(132716),
    P = r(885714),
    F = r(877247),
    B = r(260431),
    Y = r(518665),
    U = r(150047),
    j = r(805447),
    V = r(693321),
    H = r(364643);
let G = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    z = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function W(e) {
    let t = null,
        r = null;
    do (r = e.lastChild()) && (t = r);
    while (r);
    return t;
}
var q = r(47276),
    $ = r(967158),
    K = r(533715);
class Q {
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
            a = 0,
            s = 0;
        for (let [e, t] of this.keyMap)
            n ? ((n.nextKey = e), (t.prevKey = n.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = a++),
                ("section" === t.type || "item" === t.type) && s++,
                ((n = t).nextKey = void 0);
        (this._size = s), (this.lastKey = null != (t = null == n ? void 0 : n.key) ? t : null);
    }
}
var X = r(36310),
    Z = r(74733),
    J = r(330722);
function ee(e, t) {
    let r = (0, p.useRef)(null);
    (0, p.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && r.current) {
            var n, a, s, i, o, l, u;
            let c = r.current.getItem(t.focusedKey),
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
                    (null != (a = null == f ? void 0 : f.length) ? a : 0),
                h = Math.min(
                    p > 1
                        ? Math.max((null != (s = null == c ? void 0 : c.index) ? s : 0) - p + 1, 0)
                        : null != (i = null == c ? void 0 : c.index)
                          ? i
                          : 0,
                    (null != (o = null == f ? void 0 : f.length) ? o : 0) - 1,
                ),
                m = null,
                _ = !1;
            for (; h >= 0; ) {
                if (!t.isDisabled(f[h].key)) {
                    m = f[h];
                    break;
                }
                h < f.length - 1 && !_
                    ? h++
                    : ((_ = !0),
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
            ([e, t] = (0, s.JT)(e, t, et)),
            p.createElement(
                h.Provider,
                { value: null },
                p.createElement(l.GQ, { content: e.children }, (r) =>
                    p.createElement(ea, { props: e, forwardedRef: t, collection: r }),
                ),
            )
        );
    });
function ea({ props: e, forwardedRef: t, collection: r }) {
    var n, a;
    let l,
        u,
        c = (0, p.useRef)(null),
        { id: d, ..._ } = e;
    [_, c] = (0, s.JT)(_, c, m.Co);
    let { filter: g, shouldUseVirtualFocus: y, ...k } = _,
        [N, L] = (0, s._E)(!e["aria-label"] && !e["aria-labelledby"]),
        I =
            ((a = (function (e) {
                let { filter: t, layoutDelegate: r } = e,
                    n = (0, X.R)(e),
                    a = (0, p.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                    s = (0, p.useCallback)((e) => new Q(t ? t(e) : e), [t]),
                    i = (0, p.useMemo)(
                        () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
                        [e.suppressTextValueWarning],
                    ),
                    o = (0, J.G)(e, s, i),
                    l = (0, p.useMemo)(() => new (0, Z.Y)(o, n, { layoutDelegate: r }), [o, n, r]);
                return ee(o, l), { collection: o, disabledKeys: a, selectionManager: l };
            })({ ...k, children: void 0, collection: r })),
            (l = (0, p.useMemo)(() => (g ? a.collection.filter(g) : a.collection), [a.collection, g])),
            (u = a.selectionManager.withCollection(l)),
            ee(l, u),
            { collection: l, selectionManager: u, disabledKeys: a.disabledKeys }),
        P = (0, f.$)(_, { global: !0 }),
        F = Object.fromEntries(Object.entries(P).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: B,
            labelProps: Y,
            descriptionProps: U,
            errorMessageProps: j,
        } = (function (e, t, r) {
            let { direction: n } = (0, M.Y)(),
                a =
                    e.keyboardDelegate ||
                    new (0, C.n)({
                        collection: t.collection,
                        ref: r,
                        orientation: "horizontal",
                        direction: n,
                        disabledKeys: t.disabledKeys,
                        disabledBehavior: t.selectionManager.disabledBehavior,
                    }),
                {
                    labelProps: s,
                    fieldProps: i,
                    descriptionProps: l,
                    errorMessageProps: u,
                } = (0, O.M)({ ...e, labelElementType: "span" }),
                { gridProps: c } = (function (e, t, r) {
                    let {
                        isVirtualized: n,
                        keyboardDelegate: a,
                        layoutDelegate: s,
                        onAction: i,
                        disallowTypeAhead: l,
                        linkBehavior: u = "action",
                        keyboardNavigationBehavior: c = "arrow",
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
                                    ref: a,
                                    keyboardDelegate: s,
                                    layoutDelegate: i,
                                } = e,
                                o = (0, D.Q)({ usage: "search", sensitivity: "base" }),
                                l = t.disabledBehavior,
                                u = (0, p.useMemo)(
                                    () =>
                                        s ||
                                        new (0, C.n)({
                                            collection: r,
                                            disabledKeys: n,
                                            disabledBehavior: l,
                                            ref: a,
                                            collator: o,
                                            layoutDelegate: i,
                                        }),
                                    [s, i, r, n, a, o, l],
                                ),
                                { collectionProps: c } = (0, w.y)({
                                    ...e,
                                    ref: a,
                                    selectionManager: t,
                                    keyboardDelegate: u,
                                });
                            return { listProps: c };
                        })({
                            selectionManager: t.selectionManager,
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            ref: r,
                            keyboardDelegate: a,
                            layoutDelegate: s,
                            isVirtualized: n,
                            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                            shouldFocusWrap: e.shouldFocusWrap,
                            linkBehavior: u,
                            disallowTypeAhead: l,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: d,
                        }),
                        _ = (0, E.Bi)(e.id);
                    b.set(t, {
                        id: _,
                        onAction: i,
                        linkBehavior: u,
                        keyboardNavigationBehavior: c,
                        shouldSelectOnPressUp: h,
                    });
                    let g = (0, S.m)({ selectionManager: t.selectionManager, hasItemActions: !!i }),
                        v = (0, x.$)(r, { isDisabled: 0 !== t.collection.size }),
                        y = (0, f.$)(e, { labelable: !0 }),
                        O = (0, o.v)(
                            y,
                            {
                                role: "grid",
                                id: _,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: v ? -1 : 0 } : m,
                            g,
                        );
                    return (
                        n && ((O["aria-rowcount"] = t.collection.size), (O["aria-colcount"] = 1)),
                        (0, T.H)({}, t),
                        { gridProps: O }
                    );
                })(
                    {
                        ...e,
                        ...i,
                        keyboardDelegate: a,
                        shouldFocusWrap: !0,
                        linkBehavior: "override",
                        keyboardNavigationBehavior: "tab",
                    },
                    t,
                    r,
                ),
                [d, h] = (0, p.useState)(!1),
                { focusWithinProps: m } = (0, A.R)({ onFocusWithinChange: h }),
                _ = (0, f.$)(e),
                g = (0, p.useRef)(t.collection.size);
            return (
                (0, p.useEffect)(() => {
                    r.current && g.current > 0 && 0 === t.collection.size && d && r.current.focus(),
                        (g.current = t.collection.size);
                }, [t.collection.size, d, r]),
                R.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, o.v)(c, _, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": d ? "polite" : "off",
                        ...m,
                        ...i,
                    }),
                    labelProps: s,
                    descriptionProps: l,
                    errorMessageProps: u,
                }
            );
        })({ ...k, ...F, label: L }, I, c);
    return p.createElement(
        "div",
        {
            ...P,
            id: d,
            ref: t,
            slot: e.slot || void 0,
            className: null != (n = e.className) ? n : "react-aria-TagGroup",
            style: e.style,
        },
        p.createElement(
            s.Kq,
            {
                values: [
                    [i.I, { ...Y, elementType: "span", ref: N }],
                    [er, { ...B, ref: c }],
                    [h, I],
                    [v.h, { slots: { description: U, errorMessage: j } }],
                ],
            },
            e.children,
        ),
    );
}
let es = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(h) ? p.createElement(ei, { props: e, forwardedRef: t }) : p.createElement(l.pM, e);
});
function ei({ props: e, forwardedRef: t }) {
    let r = (0, p.useContext)(h),
        { CollectionRoot: n } = (0, p.useContext)(a.zL),
        [i, l] = (0, s.JT)({}, t, er),
        { focusProps: u, isFocused: c, isFocusVisible: d } = (0, k.o)(),
        m = { isEmpty: 0 === r.collection.size, isFocused: c, isFocusVisible: d, state: r },
        _ = (0, s.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: m }),
        v = (0, a.l2)(r.selectionManager.focusedKey),
        b = (0, f.$)(e, { global: !0 });
    return p.createElement(
        "div",
        {
            ...(0, o.v)(b, _, i, u),
            ref: l,
            "data-empty": 0 === r.collection.size || void 0,
            "data-focused": c || void 0,
            "data-focus-visible": d || void 0,
        },
        p.createElement(
            g.D,
            null,
            0 === r.collection.size && e.renderEmptyState
                ? e.renderEmptyState(m)
                : p.createElement(n, { collection: r.collection, persistedKeys: v }),
        ),
    );
}
let eo = (0, l.KU)(u._B, (e, t, r) => {
    let i = (0, p.useContext)(h),
        l = (0, K.U)(t),
        { focusProps: u, isFocusVisible: c } = (0, k.o)({ within: !1 }),
        {
            rowProps: d,
            gridCellProps: m,
            removeButtonProps: g,
            ...v
        } = (function (e, t, r) {
            var n;
            let { item: a } = e,
                s = (0, q.o)((n = N) && n.__esModule ? n.default : n, "@react-aria/tag"),
                i = (0, E.Bi)(),
                { onRemove: l } = R.get(t) || {},
                {
                    rowProps: u,
                    gridCellProps: c,
                    ...d
                } = (function (e, t, r) {
                    var n, a, s, i, l, u;
                    let { node: c, isVirtualized: d } = e,
                        { direction: f } = (0, M.Y)(),
                        {
                            onAction: h,
                            linkBehavior: m,
                            keyboardNavigationBehavior: _,
                            shouldSelectOnPressUp: g,
                        } = b.get(t),
                        v = (0, E.X1)(),
                        S = (0, p.useRef)(null),
                        T = {},
                        x = e.hasChildItems,
                        w = t.selectionManager.isLink(c.key);
                    if (null != c && "expandedKeys" in t) {
                        let e = null == (s = (i = t.collection).getChildren) ? void 0 : s.call(i, c.key);
                        (x = x || [...(null != e ? e : [])].length > 1),
                            null == h &&
                                !w &&
                                "none" === t.selectionManager.selectionMode &&
                                x &&
                                (h = () => t.toggleKey(c.key));
                        let r = x ? t.expandedKeys.has(c.key) : void 0,
                            n = 1;
                        if (c.level > 0 && (null == c ? void 0 : c.parentKey) != null) {
                            let e = t.collection.getItem(c.parentKey);
                            e &&
                                (n = [
                                    ...(null == (l = (u = t.collection).getChildren) ? void 0 : l.call(u, e.key)),
                                ].filter((e) => "item" === e.type).length);
                        } else n = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        T = {
                            "aria-expanded": r,
                            "aria-level": c.level + 1,
                            "aria-posinset": (null == c ? void 0 : c.index) + 1,
                            "aria-setsize": n,
                        };
                    }
                    let { itemProps: C, ...D } = (0, H.p)({
                            selectionManager: t.selectionManager,
                            key: c.key,
                            ref: r,
                            isVirtualized: d,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || g,
                            onAction:
                                h || (null == (n = c.props) ? void 0 : n.onAction)
                                    ? (0, B.c)(null == (a = c.props) ? void 0 : a.onAction, h ? () => h(c.key) : void 0)
                                    : void 0,
                            focus: () => {
                                var e;
                                null === r.current ||
                                    ((null == S.current || c.key === S.current) &&
                                        (null == (e = r.current) ? void 0 : e.contains(document.activeElement))) ||
                                    (0, j.l)(r.current);
                            },
                            linkBehavior: m,
                        }),
                        O = (0, I.HI)(c.props),
                        A = D.hasAction ? O : {},
                        R = (0, o.v)(C, A, {
                            role: "row",
                            onKeyDownCapture: (e) => {
                                if (!e.currentTarget.contains(e.target) || !r.current || !document.activeElement)
                                    return;
                                let n = (0, V.N$)(r.current);
                                if (
                                    ((n.currentNode = document.activeElement),
                                    "expandedKeys" in t && document.activeElement === r.current)
                                ) {
                                    if (
                                        e.key === G[f] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        x &&
                                        !t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    } else if (
                                        e.key === z[f] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        x &&
                                        t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    }
                                }
                                switch (e.key) {
                                    case "ArrowLeft":
                                        if ("arrow" === _) {
                                            let t = "rtl" === f ? n.nextNode() : n.previousNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, j.l)(t),
                                                    (0, Y.o)(t, { containingElement: (0, U.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === f))
                                                (0, j.l)(r.current),
                                                    (0, Y.o)(r.current, { containingElement: (0, U.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = W(n);
                                                e &&
                                                    ((0, j.l)(e),
                                                    (0, Y.o)(e, { containingElement: (0, U.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowRight":
                                        if ("arrow" === _) {
                                            let t = "rtl" === f ? n.previousNode() : n.nextNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, j.l)(t),
                                                    (0, Y.o)(t, { containingElement: (0, U.m)(r.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === f))
                                                (0, j.l)(r.current),
                                                    (0, Y.o)(r.current, { containingElement: (0, U.m)(r.current) });
                                            else {
                                                n.currentNode = r.current;
                                                let e = W(n);
                                                e &&
                                                    ((0, j.l)(e),
                                                    (0, Y.o)(e, { containingElement: (0, U.m)(r.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        if (!e.altKey && r.current.contains(e.target)) {
                                            var a;
                                            e.stopPropagation(),
                                                e.preventDefault(),
                                                null == (a = r.current.parentElement) ||
                                                    a.dispatchEvent(
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
                                    "tab" === _
                                ) {
                                    let t = (0, V.N$)(r.current, { tabbable: !0 });
                                    (t.currentNode = document.activeElement),
                                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                                }
                            },
                            onFocus: (e) => {
                                if (((S.current = c.key), e.target !== r.current)) {
                                    (0, P.pP)() || t.selectionManager.setFocusedKey(c.key);
                                    return;
                                }
                            },
                            "aria-label": c.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(c.key)
                                ? t.selectionManager.isSelected(c.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(c.key) || void 0,
                            "aria-labelledby": v && c.textValue ? `${y(t, c.key)} ${v}` : void 0,
                            id: y(t, c.key),
                        });
                    if (d) {
                        let { collection: e } = t,
                            r = [...e];
                        R["aria-rowindex"] = r.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => {
                                      var r;
                                      return (null == (r = e.getItem(t)) ? void 0 : r.type) !== "section";
                                  })
                                  .findIndex((e) => e === c.key) + 1
                            : c.index + 1;
                    }
                    return {
                        rowProps: { ...(0, o.v)(R, T) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: v },
                        ...D,
                    };
                })({ node: a }, t, r),
                { descriptionProps: h, ...m } = d,
                _ = t.disabledKeys.has(a.key) || a.props.isDisabled,
                g = (0, P.lb)();
            "virtual" === g && "u" > typeof window && "ontouchstart" in window && (g = "pointer");
            let v = l && ("keyboard" === g || "virtual" === g) ? s.format("removeDescription") : "",
                S = (0, L.I)(v),
                T = a.key === t.selectionManager.focusedKey,
                x = null != t.selectionManager.focusedKey,
                w = -1;
            _ || (!T && x) || (w = 0);
            let C = (0, f.$)(a.props),
                D = (0, I.HI)(a.props),
                { focusableProps: O } = (0, F.Wc)({ isDisabled: _ }, r);
            return {
                removeButtonProps: {
                    "aria-label": s.format("removeButtonLabel"),
                    "aria-labelledby": `${i} ${u.id}`,
                    isDisabled: _,
                    id: i,
                    onPress: () => (l ? l(new Set([a.key])) : null),
                },
                rowProps: (0, o.v)(O, u, C, D, {
                    tabIndex: w,
                    onKeyDown: l
                        ? (e) => {
                              ("Delete" === e.key || "Backspace" === e.key) &&
                                  (_ ||
                                      (e.preventDefault(),
                                      t.selectionManager.isSelected(a.key)
                                          ? null == l || l(new Set(t.selectionManager.selectedKeys))
                                          : null == l || l(new Set([a.key]))));
                          }
                        : void 0,
                    "aria-describedby": S["aria-describedby"],
                }),
                gridCellProps: (0, o.v)(c, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...m,
                allowsRemoving: !!l,
            };
        })({ item: r }, i, l),
        { hoverProps: S, isHovered: T } = (0, $.M)({
            isDisabled: !v.allowsSelection,
            onHoverStart: r.props.onHoverStart,
            onHoverChange: r.props.onHoverChange,
            onHoverEnd: r.props.onHoverEnd,
        }),
        x = (0, s.Sl)({
            ...e,
            id: void 0,
            children: r.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...v,
                isFocusVisible: c,
                isHovered: T,
                selectionMode: i.selectionManager.selectionMode,
                selectionBehavior: i.selectionManager.selectionBehavior,
            },
        });
    (0, p.useEffect)(() => {
        r.textValue;
    }, [r.textValue]);
    let w = (0, f.$)(e, { global: !0 });
    return (
        delete w.id,
        delete w.onClick,
        p.createElement(
            "div",
            {
                ref: l,
                ...(0, o.v)(w, x, d, u, S),
                "data-selected": v.isSelected || void 0,
                "data-disabled": v.isDisabled || void 0,
                "data-hovered": T || void 0,
                "data-focused": v.isFocused || void 0,
                "data-focus-visible": c || void 0,
                "data-pressed": v.isPressed || void 0,
                "data-allows-removing": v.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === i.selectionManager.selectionMode ? void 0 : i.selectionManager.selectionMode,
            },
            p.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                p.createElement(
                    s.Kq,
                    {
                        values: [
                            [n.k, { slots: { remove: g } }],
                            [a.zL, a.N],
                            [_.r, { isSelected: v.isSelected }],
                        ],
                    },
                    x.children,
                ),
            ),
        )
    );
});

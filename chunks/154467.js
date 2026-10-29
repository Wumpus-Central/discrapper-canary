r.d(t, { vw: () => es, LY: () => eo, CR: () => en });
var n = r(51340),
    i = r(980807),
    o = r(640324),
    a = r(24322),
    s = r(88910),
    l = r(892730),
    u = r(212277),
    c = r(959681),
    f = r(523816),
    d = r(519837),
    p = r(582128);
let h = (0, p.createContext)(null);
(0, s.KU)(c.OJ, function (e, t, r) {
    let n = (0, p.useContext)(h),
        { isLoading: o, onLoadMore: a, scrollOffset: s, ...c } = e,
        m = (0, p.useRef)(null),
        v = (0, p.useMemo)(
            () => ({ onLoadMore: a, collection: n?.collection, sentinelRef: m, scrollOffset: s }),
            [a, s, n?.collection],
        );
    (0, f.n)(v, m);
    let y = (0, i.Sl)({
        ...c,
        id: void 0,
        children: r.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: void 0,
    });
    return p.createElement(
        p.Fragment,
        null,
        p.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, u.Y)(!0) },
            p.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        o &&
            y.children &&
            p.createElement(
                p.Fragment,
                null,
                p.createElement(
                    i.tT.div,
                    { ...(0, d.v)((0, l.$)(e, { global: !0 }), { tabIndex: -1 }), ...y, role: "option", ref: t },
                    y.children,
                ),
            ),
    );
});
var m = r(387308),
    v = r(527717),
    y = r(3112),
    g = r(301153);
let b = new WeakMap();
function w(e, t) {
    var r;
    let { id: n } = b.get(e) ?? {};
    if (!n) throw Error("Unknown list");
    return `${n}-${"string" == typeof (r = t) ? r.replace(/\s*/g, "") : "" + r}`;
}
var _ = r(72779),
    S = r(279117),
    E = r(38652),
    x = r(834559),
    C = r(316449),
    k = r(605327),
    T = r(168538),
    M = r(795094),
    P = r(371716),
    A = r(379880);
let I = new WeakMap();
var O = {};
O = {
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
var R = r(23619),
    D = r(994965),
    L = r(685485),
    F = r(494112),
    N = r(518206),
    j = r(610138),
    B = r(809297),
    K = r(547993),
    V = r(478793),
    U = r(390471),
    $ = r(132076),
    H = r(62998);
let z = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    G = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function W(e, t, r, n, i, o, a, s) {
    if (!("expandedKeys" in t) || (!s && o !== a)) return !1;
    if (e.key === z[i] && t.selectionManager.focusedKey === r.key && n && !t.expandedKeys.has(r.key))
        return (t.toggleKey(r.key), e.stopPropagation(), !0);
    if (e.key === G[i] && t.selectionManager.focusedKey === r.key) {
        if (n && t.expandedKeys.has(r.key)) return (t.toggleKey(r.key), e.stopPropagation(), !0);
        else if (!t.expandedKeys.has(r.key) && r.parentKey && t.collection.getItem(r.parentKey)?.type === "item")
            return (t.selectionManager.setFocusedKey(r.parentKey), e.stopPropagation(), !0);
    }
    return !1;
}
function q(e) {
    let t = null,
        r = null;
    do (r = e.lastChild()) && (t = r);
    while (r);
    return t;
}
var Y = r(499798),
    X = r(95638),
    J = r(371515),
    Z = r(736570),
    Q = r(599291),
    ee = r(808529);
let et = (0, p.createContext)(null),
    er = (0, p.createContext)(null),
    en = (0, p.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, i.JT)(e, t, et)),
            p.createElement(
                h.Provider,
                { value: null },
                p.createElement(s.GQ, { content: e.children }, (r) =>
                    p.createElement(ei, { props: e, forwardedRef: t, collection: r }),
                ),
            )
        );
    });
function ei(e) {
    let { props: t, forwardedRef: r, collection: n } = e,
        o = (0, p.useRef)(null),
        { id: s, ...u } = t;
    [u, o] = (0, i.JT)(u, o, m.Co);
    let { filter: c, shouldUseVirtualFocus: f, ...v } = u,
        [y, w] = (0, i._E)(!t["aria-label"] && !t["aria-labelledby"]),
        O = (0, J.p)({ ...v, children: void 0, collection: n }),
        R = (0, J.Z)(O, c),
        D = (0, l.$)(u, { global: !0 }),
        L = Object.fromEntries(
            Object.entries(D).map((e) => {
                let [t, r] = e;
                return [t, "id" === t ? r : void 0];
            }),
        ),
        {
            gridProps: F,
            labelProps: N,
            descriptionProps: j,
            errorMessageProps: B,
        } = (function (e, t, r) {
            let { direction: n } = (0, A.Y)(),
                i =
                    e.keyboardDelegate ||
                    new (0, k.n)({
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
                    descriptionProps: s,
                    errorMessageProps: u,
                } = (0, M.M)({ ...e, labelElementType: "span" }),
                { gridProps: c } = (function (e, t, r) {
                    let {
                        isVirtualized: n,
                        keyboardDelegate: i,
                        layoutDelegate: o,
                        onAction: a,
                        disallowTypeAhead: s,
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
                                    orientation: s,
                                } = e,
                                l = (0, T.Q)({ usage: "search", sensitivity: "base" }),
                                u = t.disabledBehavior,
                                c = (0, p.useMemo)(
                                    () =>
                                        o ||
                                        new (0, k.n)({
                                            collection: r,
                                            disabledKeys: n,
                                            disabledBehavior: u,
                                            ref: i,
                                            collator: l,
                                            layoutDelegate: a,
                                            orientation: s,
                                        }),
                                    [o, a, r, n, i, l, u, s],
                                ),
                                { collectionProps: f } = (0, C.y)({
                                    ...e,
                                    ref: i,
                                    selectionManager: t,
                                    keyboardDelegate: c,
                                });
                            return { listProps: f };
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
                            disallowTypeAhead: s,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: f,
                            UNSTABLE_focusOnEntry: e.UNSTABLE_focusOnEntry,
                        }),
                        v = (0, x.Bi)(e.id);
                    b.set(t, {
                        id: v,
                        onAction: a,
                        linkBehavior: u,
                        keyboardNavigationBehavior: c,
                        shouldSelectOnPressUp: h,
                    });
                    let y = (0, E.m)({ selectionManager: t.selectionManager, hasItemActions: !!a }),
                        g = (0, S.$)(r, { isDisabled: 0 !== t.collection.size }),
                        w = (0, l.$)(e, { labelable: !0 }),
                        M = (0, d.v)(
                            w,
                            {
                                role: "grid",
                                id: v,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: g ? -1 : 0 } : m,
                            y,
                        );
                    return (
                        n && ((M["aria-rowcount"] = t.collection.size), (M["aria-colcount"] = 1)),
                        (0, _.H)({}, t),
                        { gridProps: M }
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
                { focusWithinProps: m } = (0, P.R)({ onFocusWithinChange: h }),
                v = (0, l.$)(e),
                y = (0, p.useRef)(t.collection.size);
            return (
                (0, p.useEffect)(() => {
                    (r.current && y.current > 0 && 0 === t.collection.size && f && r.current.focus(),
                        (y.current = t.collection.size));
                }, [t.collection.size, f, r]),
                I.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, d.v)(c, v, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": f ? "polite" : "off",
                        ...m,
                        ...a,
                    }),
                    labelProps: o,
                    descriptionProps: s,
                    errorMessageProps: u,
                }
            );
        })({ ...v, ...L, label: w }, R, o);
    return p.createElement(
        i.tT.div,
        {
            render: t.render,
            ...D,
            id: s,
            ref: r,
            slot: t.slot || void 0,
            className: t.className ?? "react-aria-TagGroup",
            style: t.style,
        },
        p.createElement(
            i.Kq,
            {
                values: [
                    [a.I, { ...N, elementType: "span", ref: y }],
                    [er, { ...F, ref: o }],
                    [h, R],
                    [g.h, { slots: { description: j, errorMessage: B } }],
                ],
            },
            t.children,
        ),
    );
}
let eo = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(h) ? p.createElement(ea, { props: e, forwardedRef: t }) : p.createElement(s.pM, e);
});
function ea(e) {
    let { props: t, forwardedRef: r } = e,
        n = (0, p.useContext)(h),
        { CollectionRoot: a } = (0, p.useContext)(o.zL),
        [s, u] = (0, i.JT)({}, r, er),
        { focusProps: c, isFocused: f, isFocusVisible: m } = (0, Z.o)(),
        v = { isEmpty: 0 === n.collection.size, isFocused: f, isFocusVisible: m, state: n },
        g = (0, i.Sl)({ ...t, children: void 0, defaultClassName: "react-aria-TagList", values: v }),
        b = (0, o.l2)(n.selectionManager.focusedKey),
        w = (0, l.$)(t, { global: !0 });
    return p.createElement(
        i.tT.div,
        {
            ...(0, d.v)(w, g, s, c),
            ref: u,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": f || void 0,
            "data-focus-visible": m || void 0,
        },
        p.createElement(
            y.D,
            null,
            0 === n.collection.size && t.renderEmptyState
                ? t.renderEmptyState(v)
                : p.createElement(a, { collection: n.collection, persistedKeys: b }),
        ),
    );
}
let es = (0, s.KU)(c._B, (e, t, r) => {
    let a = (0, p.useContext)(h),
        s = (0, ee.U)(t),
        { focusProps: u, isFocusVisible: c } = (0, Z.o)({ within: !1 }),
        {
            rowProps: f,
            gridCellProps: m,
            removeButtonProps: y,
            ...g
        } = (function (e, t, r) {
            var n;
            let { item: i } = e,
                o = (0, X.o)((n = O) && n.__esModule ? n.default : n, "@react-aria/tag"),
                a = (0, x.Bi)(),
                { onRemove: s } = I.get(t) || {},
                {
                    rowProps: u,
                    gridCellProps: c,
                    ...f
                } = (function (e, t, r) {
                    let { node: n, isVirtualized: i, focusMode: o = "row", allowsArrowNavigation: a } = e,
                        { direction: s } = (0, A.Y)(),
                        {
                            onAction: l,
                            linkBehavior: u,
                            keyboardNavigationBehavior: c,
                            shouldSelectOnPressUp: f,
                        } = b.get(t),
                        h = (0, x.X1)(),
                        m = (0, p.useRef)(null),
                        v = () => {
                            if (null !== r.current) {
                                if ("child" === o) {
                                    if ((0, N.ae)(r.current) && r.current !== (0, N.bq)((0, B.TW)(r.current))) return;
                                    let e = (0, j.N$)(r.current, { tabbable: !0 }).firstChild();
                                    if (e) {
                                        ((0, F.l)(e), (0, U.o)(e, { containingElement: (0, K.m)(e) }));
                                        return;
                                    }
                                }
                                ((null == m.current || n.key === m.current) && (0, N.ae)(r.current)) ||
                                    (0, F.l)(r.current);
                            }
                        },
                        y = {},
                        g = e.hasChildItems,
                        _ = t.selectionManager.isLink(n.key);
                    if (null != n && "expandedKeys" in t) {
                        let e = t.collection.getChildren?.(n.key);
                        ((g = g || [...(e ?? [])].length > 1),
                            null == l &&
                                !_ &&
                                "none" === t.selectionManager.selectionMode &&
                                g &&
                                (l = () => t.toggleKey(n.key)));
                        let r = g ? t.expandedKeys.has(n.key) : void 0,
                            i = 1,
                            o = n.index;
                        if (n.level >= 0 && n?.parentKey != null) {
                            let e = t.collection.getItem(n.parentKey);
                            if (e) {
                                let r = (function (e, t) {
                                    let r = t.getChildren?.(e.key),
                                        n = r ? Array.from(r) : [],
                                        i = n.length > 0 ? n[0] : null,
                                        o = [];
                                    for (; i;) (o.push(i), (i = null != i.nextKey ? t.getItem(i.nextKey) : null));
                                    return o;
                                })(e, t.collection);
                                ((i = [...r].filter((e) => "item" === e.type).length),
                                    o > 0 && "item" !== r[0].type && (o -= 1));
                            }
                        } else i = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        y = {
                            "aria-expanded": r,
                            "aria-level": n.level + 1,
                            "aria-posinset": o + 1,
                            "aria-setsize": i,
                        };
                    }
                    let { itemProps: S, ...E } = (0, $.p)({
                            selectionManager: t.selectionManager,
                            key: n.key,
                            ref: r,
                            isVirtualized: i,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || f,
                            onAction:
                                l || n.props?.onAction
                                    ? (0, L.c)(n.props?.onAction, l ? () => l(n.key) : void 0)
                                    : void 0,
                            focus: v,
                            linkBehavior: u,
                        }),
                        C = (0, H.HI)(n.props),
                        k = E.hasAction ? C : {},
                        T = (0, d.v)(S, k, {
                            role: "row",
                            onKeyDownCapture:
                                "arrow" === c || a
                                    ? (e) => {
                                          let i = (0, N.bq)((0, B.TW)(r.current));
                                          if (!(0, N.sD)(e.currentTarget, (0, N.wt)(e)) || !r.current || !i) return;
                                          let o = (0, j.N$)(r.current);
                                          if (((o.currentNode = i), !W(e, t, n, g, s, i, r.current, a)))
                                              switch (e.key) {
                                                  case "ArrowLeft":
                                                      if ("arrow" === c) {
                                                          let t = "rtl" === s ? o.nextNode() : o.previousNode();
                                                          if (t)
                                                              (e.preventDefault(),
                                                                  e.stopPropagation(),
                                                                  (0, F.l)(t),
                                                                  (0, U.o)(t, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          else if (
                                                              (e.preventDefault(), e.stopPropagation(), "rtl" === s)
                                                          )
                                                              ((0, F.l)(r.current),
                                                                  (0, U.o)(r.current, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          else {
                                                              o.currentNode = r.current;
                                                              let e = q(o);
                                                              e &&
                                                                  ((0, F.l)(e),
                                                                  (0, U.o)(e, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          }
                                                      }
                                                      break;
                                                  case "ArrowRight":
                                                      if ("arrow" === c) {
                                                          let t = "rtl" === s ? o.previousNode() : o.nextNode();
                                                          if (t)
                                                              (e.preventDefault(),
                                                                  e.stopPropagation(),
                                                                  (0, F.l)(t),
                                                                  (0, U.o)(t, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          else if (
                                                              (e.preventDefault(), e.stopPropagation(), "ltr" === s)
                                                          )
                                                              ((0, F.l)(r.current),
                                                                  (0, U.o)(r.current, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          else {
                                                              o.currentNode = r.current;
                                                              let e = q(o);
                                                              e &&
                                                                  ((0, F.l)(e),
                                                                  (0, U.o)(e, {
                                                                      containingElement: (0, K.m)(r.current),
                                                                  }));
                                                          }
                                                      }
                                                      break;
                                                  case "ArrowUp":
                                                  case "ArrowDown":
                                                      !e.altKey &&
                                                          (0, N.sD)(r.current, (0, N.wt)(e)) &&
                                                          (e.stopPropagation(),
                                                          e.preventDefault(),
                                                          r.current.parentElement?.dispatchEvent(
                                                              new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                                          ));
                                              }
                                      }
                                    : void 0,
                            onFocus: (e) => {
                                if (((m.current = n.key), (0, N.wt)(e) !== r.current)) {
                                    (0, V.pP)() || t.selectionManager.setFocusedKey(n.key);
                                    return;
                                }
                                ("child" === o && e.relatedTarget && (0, N.sD)(r.current, e.relatedTarget)) ||
                                    requestAnimationFrame(() => {
                                        "child" === o && (0, N.bq)((0, B.TW)(r.current)) === r.current && v();
                                    });
                            },
                            "aria-label": n["aria-label"] || n.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(n.key)
                                ? t.selectionManager.isSelected(n.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(n.key) || void 0,
                            "aria-labelledby": h && (n["aria-label"] || n.textValue) ? `${w(t, n.key)} ${h}` : void 0,
                            id: w(t, n.key),
                        });
                    "child" === o && a && "tab" === c && (T.tabIndex = -1);
                    let M = T.onKeyDown;
                    if (
                        ((T.onKeyDown = (e) => {
                            (((e) => {
                                let i = (0, N.bq)((0, B.TW)(r.current));
                                if ((0, N.sD)(e.currentTarget, (0, N.wt)(e)) && r.current && i) {
                                    if ("tab" === c) {
                                        if ((0, N.wt)(e) !== r.current && "Tab" !== e.key) return e.stopPropagation();
                                        if (W(e, t, n, g, s, i, r.current, a)) return;
                                    }
                                    if ("Tab" === e.key && "tab" === c) {
                                        let t = (0, j.N$)(r.current, { tabbable: !0 });
                                        ((t.currentNode = i),
                                            (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation());
                                    }
                                }
                            })(e),
                                e.isPropagationStopped() || M?.(e));
                        }),
                        i)
                    ) {
                        let { collection: e } = t,
                            r = [...e];
                        T["aria-rowindex"] = r.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => e.getItem(t)?.type !== "section")
                                  .findIndex((e) => e === n.key) + 1
                            : n.index + 1;
                    }
                    return {
                        rowProps: { ...(0, d.v)(T, y) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: h },
                        ...E,
                    };
                })({ node: i }, t, r),
                { descriptionProps: h, ...m } = f,
                v = t.disabledKeys.has(i.key) || i.props.isDisabled,
                { keyboardProps: y } = (0, Y.d)({
                    isDisabled: v,
                    shortcuts: {
                        Delete: () => {
                            t.selectionManager.isSelected(i.key)
                                ? s?.(new Set(t.selectionManager.selectedKeys))
                                : s?.(new Set([i.key]));
                        },
                        Backspace: () => {
                            t.selectionManager.isSelected(i.key)
                                ? s?.(new Set(t.selectionManager.selectedKeys))
                                : s?.(new Set([i.key]));
                        },
                    },
                    allowRepeats: !0,
                }),
                g = (0, V.lb)();
            "virtual" === g && "u" > typeof window && "ontouchstart" in window && (g = "pointer");
            let _ = s && ("keyboard" === g || "virtual" === g) ? o.format("removeDescription") : "",
                S = (0, R.I)(_),
                E = i.key === t.selectionManager.focusedKey,
                C = null != t.selectionManager.focusedKey,
                k = -1;
            v || (!E && C) || (k = 0);
            let T = (0, l.$)(i.props),
                M = (0, H.HI)(i.props),
                { focusableProps: P } = (0, D.Wc)({ ...i.props, isDisabled: v }, r);
            return {
                removeButtonProps: {
                    "aria-label": o.format("removeButtonLabel"),
                    "aria-labelledby": `${a} ${u.id}`,
                    isDisabled: v,
                    id: a,
                    onPress: () => (s ? s(new Set([i.key])) : null),
                },
                rowProps: (0, d.v)(P, u, T, M, {
                    tabIndex: k,
                    ...(s ? y : {}),
                    "aria-describedby": S["aria-describedby"],
                }),
                gridCellProps: (0, d.v)(c, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...m,
                allowsRemoving: !!s,
            };
        })({ item: r }, a, s),
        { hoverProps: _, isHovered: S } = (0, Q.M)({
            isDisabled: !g.allowsSelection && !g.hasAction,
            onHoverStart: r.props.onHoverStart,
            onHoverChange: r.props.onHoverChange,
            onHoverEnd: r.props.onHoverEnd,
        }),
        E = (0, i.Sl)({
            ...e,
            id: void 0,
            children: r.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...g,
                isFocusVisible: c,
                isHovered: S,
                selectionMode: a.selectionManager.selectionMode,
                selectionBehavior: a.selectionManager.selectionBehavior,
            },
        });
    (0, p.useEffect)(() => {
        r.textValue;
    }, [r.textValue]);
    let C = (0, l.$)(e, { global: !0 });
    return (
        delete C.id,
        delete C.onClick,
        p.createElement(
            i.tT.div,
            {
                ref: s,
                ...(0, d.v)(C, E, f, u, _),
                "data-selected": g.isSelected || void 0,
                "data-disabled": g.isDisabled || void 0,
                "data-hovered": S || void 0,
                "data-focused": g.isFocused || void 0,
                "data-focus-visible": c || void 0,
                "data-pressed": g.isPressed || void 0,
                "data-allows-removing": g.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === a.selectionManager.selectionMode ? void 0 : a.selectionManager.selectionMode,
            },
            p.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                p.createElement(
                    i.Kq,
                    {
                        values: [
                            [n.k, { slots: { remove: y } }],
                            [o.zL, o.N],
                            [v.r, { isSelected: g.isSelected }],
                        ],
                    },
                    E.children,
                ),
            ),
        )
    );
});

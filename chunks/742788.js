l.d(t, { A: () => Q, E: () => M }), l(321073);
var r = l(627968),
    n = l(64700),
    a = l(503698),
    u = l.n(a),
    s = l(719442),
    i = l(253018),
    o = l(17928),
    c = l(765178),
    f = l(922016),
    g = l(187322),
    h = l(884496),
    d = l(955572),
    E = l(915089),
    L = l(734057),
    p = l(309010),
    R = l(625494),
    T = l(256796),
    A = l(822382),
    _ = l(408730),
    b = l(304578),
    I = l(616252),
    S = l(753806),
    y = l(65600),
    k = l(145331),
    F = l(618989),
    N = l(494606),
    C = l(768570),
    W = l(652215),
    m = l(375708),
    v = l(207958),
    O = l(858753);
let M = 512,
    P = (0, E.Ld)();
function D(e, t) {
    return { path: [0, 0], offset: Math.min(Math.max(t, 0), s.bP.string(e).length) };
}
function x(e) {
    return y.A.getQueryText(e) ?? "";
}
function j(e, t) {
    let { selection: l } = e;
    if (null == l || !s.Q6.isCollapsed(l)) return !1;
    let r = s.Q6.start(l).offset;
    for (let l of (0, A._o)(s.bP.string(e))) {
        let n = b.Ay[l.type];
        if (null != n && !0 !== n.mutable && (t ? r >= l.start && r < l.end : r > l.start && r <= l.end))
            return s.gB.delete(e, { at: { anchor: D(e, l.start), focus: D(e, l.end) } }), !0;
    }
    return !1;
}
let U = { whiteSpace: "pre", wordWrap: "normal" };
function w(e) {
    let [t, l] = e,
        r = [];
    if (!s.EY.isText(t) || 0 === t.text.length) return r;
    for (let e of (0, A._o)(t.text)) {
        let t = b.Ay[e.type];
        null != t &&
            r.push({ anchor: { path: l, offset: e.start }, focus: { path: l, offset: e.end }, [N.Q]: t.componentType });
    }
    return r;
}
function $(e) {
    return (0, r.jsx)(N.A, { ...e });
}
function H(e) {
    let { children: t, attributes: l } = e;
    return (0, r.jsx)("span", { ...l, style: { ...l.style, opacity: 1 }, children: t });
}
let B = n.memo(function (e) {
    let {
        editor: t,
        initialValue: l,
        placeholder: n,
        navId: a,
        isShown: u,
        onChange: s,
        onKeyDown: o,
        onFocus: c,
        onBlur: f,
    } = e;
    return (0, r.jsx)(i.A, {
        editor: t,
        value: l,
        onChange: s,
        children: (0, r.jsx)(i.Fo, {
            className: O.E,
            style: U,
            placeholder: n,
            decorate: w,
            renderLeaf: $,
            renderPlaceholder: H,
            onKeyDown: o,
            onFocus: c,
            onBlur: f,
            onPasteCapture: function (e) {
                t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation();
            },
            role: "combobox",
            "aria-expanded": u,
            "aria-controls": u ? a : void 0,
            "aria-label": n,
            "aria-autocomplete": "list",
            autoCorrect: "off",
            spellCheck: !1,
        }),
    });
});
function Q(e) {
    let {
            className: t,
            searchContext: l,
            isSearching: a,
            hasResults: E,
            keyboardModeEnabled: N,
            onSearch: U,
            placeholder: w,
        } = e,
        $ = (0, A.bS)(l),
        H = x($),
        [Q] = n.useState(() => {
            let e = (function (e) {
                let { insertText: t, deleteBackward: l, deleteForward: r } = e;
                return (
                    (e.insertBreak = () => {}),
                    (e.deleteBackward = (t) => {
                        j(e, !1) || l(t);
                    }),
                    (e.deleteForward = (t) => {
                        j(e, !0) || r(t);
                    }),
                    (e.insertText = (l) => {
                        let { selection: r } = e,
                            n = null != r ? s.KE.string(e, r).length : 0,
                            a = M - (s.bP.string(e).length - n);
                        if (a <= 0) return;
                        let u = l.replace(/\n/g, "");
                        t(u.length > a ? u.slice(0, a) : u);
                    }),
                    (e.insertData = (t) => {
                        let l = t.getData("text/plain");
                        "" !== l && e.insertText(l);
                    }),
                    e
                );
            })((0, i.o$)((0, s.ie)()));
            return (e.children = [{ type: "line", children: [{ text: H }] }]), (e.selection = null), e;
        }),
        [q] = n.useState(() => [...Q.children]),
        [Y, K] = n.useState(!1),
        [z, Z] = n.useState(() => H.length > 0),
        X = n.useRef(null),
        G = n.useRef(null),
        J = n.useRef(null),
        V = n.useRef(!0);
    n.useEffect(() => () => void (V.current = !1), []);
    let ee = n.useCallback(() => s.bP.string(Q), [Q]),
        et = n.useCallback(() => {
            Promise.resolve().then(() => i.rL.focus(Q));
        }, [Q]),
        el = n.useCallback(() => {
            Promise.resolve().then(() => i.rL.blur(Q));
        }, [Q]),
        er = n.useCallback(() => {
            S.A.cleanUpSearchState(l);
        }, [l]),
        en = n.useCallback(
            (e) => {
                if (!V.current) return;
                let t = e?.relatedTarget,
                    r = document.getElementById(P);
                (null != t && null != r && r.contains(t)) || (_.A.setFocused(l, !1), K(!1), 0 === x($).length && er());
            },
            [er, $, l],
        ),
        ea = n.useCallback(
            (e) => {
                s.KE.withoutNormalizing(Q, () => {
                    s.gB.select(Q, { anchor: s.KE.start(Q, []), focus: s.KE.end(Q, []) }),
                        s.gB.delete(Q),
                        s.gB.insertText(Q, e.replace(/\n/g, "").slice(0, M));
                }),
                    s.gB.select(Q, s.KE.end(Q, []));
            },
            [Q],
        ),
        eu = n.useCallback(
            (e) => {
                if (a) return !1;
                let { queryString: t, searchEverywhere: l, searchQuerySource: r } = e ?? {};
                (null == t || "" === t) && (t = ee());
                let n = (0, A._o)(t),
                    u = (0, A.Zf)(n);
                for (let e = 0; e < n.length; e++)
                    (0, A.Zh)(n[e], n[e + 1]) || (t = t.substring(0, n[e].start) + t.substring(n[e].end));
                return (
                    0 !== n.length &&
                    0 !== Object.keys(u).length &&
                    (U({
                        queryString: t,
                        query: u,
                        searchEverywhere: l ?? !1,
                        searchQuerySource: r ?? C.Q_.SEARCH_TEXT_INPUT,
                    }),
                    c.O.announce(m.intl.string(m.t.pKCxWP)),
                    en(),
                    !0)
                );
            },
            [ee, en, a, U],
        ),
        es = n.useCallback(() => {
            if (!V.current) return;
            i.rL.isFocused(Q) && K(!0);
            let e = ee();
            Z(e.length > 0), I.A.updateSearchQueryText(l, e);
            let t = (0, A._o)(e),
                { selection: r } = Q,
                n = null != r ? s.Q6.end(r).offset : e.length,
                a = null != r ? s.Q6.start(r).offset : e.length,
                u = (0, A.zZ)(t, n, a);
            T.A.updateAutocompleteQuery({ searchContext: l, tokens: t, cursorScope: u, queryString: e }),
                (function (e) {
                    let t;
                    try {
                        t = i.rL.toDOMNode(e, e);
                    } catch {
                        return;
                    }
                    requestAnimationFrame(() => {
                        let e = t.ownerDocument.getSelection();
                        if (null == e || "Caret" !== e.type || 0 === e.rangeCount) return;
                        let l = e.getRangeAt(0);
                        if (!t.contains(l.commonAncestorContainer)) return;
                        let r = l.getClientRects()[0],
                            n = t.getClientRects()[0];
                        if (null == r || null == n) return;
                        let a = r.left - n.left + t.scrollLeft;
                        a < t.scrollLeft
                            ? (t.scrollLeft = a - 10)
                            : a > t.scrollLeft + t.offsetWidth && (t.scrollLeft = a - t.offsetWidth + 3);
                    });
                })(Q);
        }, [Q, ee, l]),
        ei = n.useCallback(() => {
            !0 !== J.current?.selectOption({ searchAutocompleteSelectAction: C.oi.KEY_PRESS }) &&
                eu({ searchQuerySource: C.Q_.SEARCH_TEXT_INPUT });
        }, [eu]),
        eo = n.useCallback(
            (e) => {
                switch (e.key) {
                    case "Enter":
                        e.preventDefault(), ei();
                        return;
                    case "Escape":
                        e.preventDefault(), e.stopPropagation(), 0 === ee().length ? el() : (ea(""), K(!0));
                        return;
                    case "ArrowUp":
                        e.preventDefault(), e.stopPropagation(), J.current?.focusPreviousOption();
                        return;
                    case "ArrowDown":
                        e.preventDefault(), e.stopPropagation(), J.current?.focusNextOption();
                        return;
                    case "Tab":
                        if (N) return;
                        e.stopPropagation(), (0, d.uS)();
                        return;
                }
            },
            [el, ee, ei, N, ea],
        ),
        ec = n.useCallback(
            (e) => {
                let { query: t, anchor: l, focus: r, performSearch: n, replace: a, searchQuerySource: u } = e,
                    o = ee();
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != l && 0 !== l && " " !== o.charAt(l - 1) && " " !== t.charAt(0) && (t = " " + t),
                    (t = t.replace(/\n/g, "")),
                    i.rL.focus(Q),
                    !0 === a
                        ? ea(t)
                        : null != l
                          ? (s.gB.select(Q, { anchor: D(Q, l), focus: D(Q, r ?? l) }),
                            s.gB.insertText(Q, t.slice(0, M)))
                          : s.gB.insertText(Q, t),
                    K(!0),
                    !0 === n && eu({ queryString: ee(), searchQuerySource: u });
            },
            [Q, ee, ea, eu],
        ),
        ef = n.useCallback(
            (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!0 !== t) return void et();
                let r = L.A.getChannel(p.Ay.getChannelId()),
                    n = null != r ? (0, A.Rt)(r) : null;
                null == r || (r.isPrivate() && l.type !== W.I4_.DMS) || r.isObfuscated() || null == n
                    ? et()
                    : ((0, k.Tf)({ searchContext: l }),
                      Promise.resolve().then(() => {
                          i.rL.focus(Q),
                              ec({
                                  query: b.Ay[W.LWr.FILTER_IN].key + `${n} `,
                                  replace: !0,
                                  searchQuerySource: C.Q_.SEARCH_TEXT_INPUT,
                              });
                      }));
            },
            [Q, et, ec, l],
        );
    n.useEffect(() => {
        (0, A.Pe)();
    }, [l]);
    let eg = (0, o.bG)([y.A], () => y.A.getQueryText($) ?? "");
    n.useEffect(() => {
        s.bP.string(Q) !== eg && ea(eg);
    }, [eg, Q, ea]);
    let eh = (0, o.bG)([y.A], () => y.A.getIsSearchTokensInitialized());
    n.useEffect(() => {
        eh && Q.onChange();
    }, [Q, eh]),
        n.useEffect(
            () => (
                R._.subscribe(W.jej.PERFORM_SEARCH, eu),
                R._.subscribe(W.jej.SET_SEARCH_QUERY, ec),
                R._.subscribe(W.jej.FOCUS_SEARCH, ef),
                () => {
                    R._.unsubscribe(W.jej.PERFORM_SEARCH, eu),
                        R._.unsubscribe(W.jej.SET_SEARCH_QUERY, ec),
                        R._.unsubscribe(W.jej.FOCUS_SEARCH, ef);
                }
            ),
            [ef, ec, eu],
        );
    let ed = n.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), 0 === ee().length)
                    ? et()
                    : (ea(""), (0, k.iK)({ searchContext: l }), Y || el());
            },
            [el, Y, et, ee, ea, l],
        ),
        eE = n.useCallback(
            (e) => {
                let t = i.rL.toDOMNode(Q, Q);
                null != e
                    ? t.setAttribute("aria-activedescendant", `${P}-${e}`)
                    : t.removeAttribute("aria-activedescendant");
            },
            [Q],
        ),
        eL = n.useCallback(
            (e) => {
                let t = e.relatedTarget;
                if (null != t) {
                    let e = document.getElementById(P);
                    if ((null != e && e.contains(t)) || (null != G.current && G.current.contains(t))) return;
                }
                en();
            },
            [en],
        ),
        ep = n.useCallback(
            () =>
                (0, r.jsx)("div", {
                    onBlur: eL,
                    children: (0, r.jsx)(F.A, { ref: J, searchContext: l, navId: P, onSelectedIndexChanged: eE }),
                }),
            [eL, eE, l],
        ),
        eR = n.useCallback(() => {
            i.rL.toDOMNode(Q, Q).removeAttribute("aria-activedescendant"),
                K(!0),
                _.A.setFocused(l, !0),
                c.O.announce(m.intl.string(m.t["5h0QOP"]));
        }, [Q, l]),
        eT = w ?? m.intl.string(m.t["5h0QOP"]);
    return (0, r.jsx)(f.Y, {
        targetElementRef: X,
        renderPopout: ep,
        position: "bottom",
        animation: f.Y.Animation.NONE,
        shouldShow: Y,
        autoInvert: !1,
        children: (e, n) => {
            let { isShown: a } = n;
            return (0, r.jsx)("div", {
                className: t,
                ref: X,
                children: (0, r.jsx)("div", {
                    className: u()(v.$P, { [v.ho]: z || Y, [v.in]: Y }),
                    children: (0, r.jsx)(g.vN, {
                        ringTarget: G,
                        children: (0, r.jsxs)(
                            "div",
                            {
                                className: u()(v.ON, O.O),
                                ref: G,
                                children: [
                                    (0, r.jsx)(B, {
                                        editor: Q,
                                        initialValue: q,
                                        placeholder: eT,
                                        navId: P,
                                        isShown: a,
                                        onChange: es,
                                        onKeyDown: eo,
                                        onFocus: eR,
                                        onBlur: en,
                                    }),
                                    (0, r.jsx)(h.B, {
                                        onClear: ed,
                                        hasContent: z || E,
                                        className: v.Kk,
                                        isLoading: !1,
                                    }),
                                ],
                            },
                            (0, A.bS)(l),
                        ),
                    }),
                }),
            });
        },
    });
}

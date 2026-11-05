t.d(n, { A: () => C });
var s = t(477900),
    i = t(582128),
    l = t(192308),
    a = t(866665),
    r = t(442433),
    o = t(442247),
    c = t(60465),
    d = t(409626),
    u = t(106191),
    m = t(332173),
    h = t(936755),
    x = t(827669);
let j = 0,
    g = "data-mention-game-id",
    p = new Set([
        "DIV",
        "P",
        "LI",
        "BLOCKQUOTE",
        "PRE",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "OL",
        "UL",
        "TABLE",
        "TR",
        "ARTICLE",
        "SECTION",
    ]);
function b(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest('[contenteditable="true"]') != null;
}
function N(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest(`[${g}]`) ?? null;
}
function I(e) {
    let n;
    if (null == e.clipboardData) return;
    let t = window.getSelection();
    if (null == t || 0 === t.rangeCount) return;
    try {
        n = t.getRangeAt(0);
    } catch {
        return;
    }
    if (n.collapsed || b(n.startContainer) || b(n.endContainer)) return;
    let s = n.cloneContents(),
        i = null != s.querySelector(`[${g}]`),
        l = N(n.startContainer),
        a = N(n.endContainer),
        r = !i && null != l && l === a;
    if (i || r) {
        let n, t;
        if (r) {
            let n = l.getAttribute(g);
            if (null == n || "" === n) return;
            (e.preventDefault(), e.clipboardData.setData("text/plain", (0, x.KW)(n)));
            return;
        }
        (e.preventDefault(),
            e.clipboardData.setData(
                "text/plain",
                (function (e) {
                    let n = "";
                    for (let t = 0; t < e.childNodes.length; t++)
                        n += (function e(n) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            if (t > 200) return "";
                            if (n.nodeType === Node.TEXT_NODE) return n.textContent ?? "";
                            if (n.nodeType !== Node.ELEMENT_NODE) return "";
                            let s = n.getAttribute(g);
                            if (null != s) return (0, x.KW)(s);
                            let i = n.tagName.toUpperCase();
                            if ("IMG" === i) {
                                let e = n.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof n.className ? n.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === i) return "\n";
                            let l = "";
                            for (let s = 0; s < n.childNodes.length; s++) l += e(n.childNodes[s], t + 1);
                            return (p.has(i) && "" !== l && !l.endsWith("\n") && (l += "\n"), l);
                        })(e.childNodes[t]);
                    return n.endsWith("\n") ? n.slice(0, -1) : n;
                })(s),
            ),
            e.clipboardData.setData(
                "text/html",
                ((n = s.cloneNode(!0)).querySelectorAll(`[${g}]`).forEach((e) => {
                    let n = e.getAttribute(g);
                    if (null == n || "" === n) return;
                    let t = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(t.createTextNode((0, x.KW)(n)), e);
                }),
                (t = document.createElement("div")).appendChild(n),
                t.innerHTML),
            ));
    }
}
var f = t(792996),
    v = t(379961);
let C = function (e) {
    let { gameId: n, authorId: x, onKeyDown: g } = e,
        p = (0, o.K)(n),
        b = null != p,
        N = p?.gameName ?? f.intl.string(f.t["11pdXZ"]),
        C = p?.gameIcon;
    i.useEffect(
        () => (
            1 === (j += 1) && document.addEventListener("copy", I),
            () => {
                0 == (j -= 1) && document.removeEventListener("copy", I);
            }
        ),
        [],
    );
    let A = i.useCallback(
            (e) => {
                b &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e(476662),
                            t.e(253044),
                            t.e(311913),
                            t.e(881717),
                            t.e(363269),
                            t.e(474172),
                            t.e(926132),
                            t.e(489218),
                            t.e(146652),
                            t.e(912875),
                            t.e(862782),
                            t.e(55348),
                            t.e(638221),
                            t.e(482861),
                            t.e(821198),
                            t.e(466322),
                            t.e(180657),
                            t.e(951811),
                            t.e(331927),
                        ]).then(t.bind(t, 641290));
                        return (t) => (0, s.jsx)(e, { ...t, gameId: n, gameName: N, authorId: x });
                    });
            },
            [b, n, N, x],
        ),
        E = i.useCallback(() => {
            (0, l.mM)(async () => {
                let { default: e } = await t.e(256466).then(t.bind(t, 188841));
                return (n) => (0, s.jsx)(e, { ...n });
            });
        }, []),
        S = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), b)
                    ? c.default.openGameProfileModal({
                          gameId: n,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: n },
                          source: d.GameProfileSources.GameMention,
                          sourceUserId: x,
                      })
                    : E();
            },
            [n, b, E, x],
        ),
        y = b ? `@game ${N}` : void 0;
    return (0, s.jsx)(a.m, {
        asContainer: !0,
        tag: "span",
        text: y,
        "aria-label": y,
        delay: 750,
        children: (0, s.jsxs)(m.A, {
            "data-mention-game-id": n,
            onContextMenu: A,
            onClick: S,
            onKeyDown: g,
            children: [
                (0, s.jsx)(h.A, {
                    children: (0, s.jsx)("span", {
                        "aria-hidden": "true",
                        className: v.P0,
                        children: (0, s.jsx)(u.A, { game: { id: n, icon: C }, iconClassName: v.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, s.jsx)("span", { className: v.UU, children: N }),
            ],
        }),
    });
};

t.d(n, { A: () => A });
var s = t(477900),
    i = t(582128),
    l = t(192308),
    a = t(866665),
    r = t(442433),
    o = t(374846),
    c = t(442247),
    d = t(60465),
    u = t(409626),
    m = t(106191),
    h = t(332173),
    x = t(936755),
    g = t(827669);
let j = 0,
    p = "data-mention-game-id",
    b = new Set([
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
function N(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest('[contenteditable="true"]') != null;
}
function I(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest(`[${p}]`) ?? null;
}
function f(e) {
    let n;
    if (null == e.clipboardData) return;
    let t = window.getSelection();
    if (null == t || 0 === t.rangeCount) return;
    try {
        n = t.getRangeAt(0);
    } catch {
        return;
    }
    if (n.collapsed || N(n.startContainer) || N(n.endContainer)) return;
    let s = n.cloneContents(),
        i = null != s.querySelector(`[${p}]`),
        l = I(n.startContainer),
        a = I(n.endContainer),
        r = !i && null != l && l === a;
    if (i || r) {
        let n, t;
        if (r) {
            let n = l.getAttribute(p);
            if (null == n || "" === n) return;
            (e.preventDefault(), e.clipboardData.setData("text/plain", (0, g.KW)(n)));
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
                            let s = n.getAttribute(p);
                            if (null != s) return (0, g.KW)(s);
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
                            return (b.has(i) && "" !== l && !l.endsWith("\n") && (l += "\n"), l);
                        })(e.childNodes[t]);
                    return n.endsWith("\n") ? n.slice(0, -1) : n;
                })(s),
            ),
            e.clipboardData.setData(
                "text/html",
                ((n = s.cloneNode(!0)).querySelectorAll(`[${p}]`).forEach((e) => {
                    let n = e.getAttribute(p);
                    if (null == n || "" === n) return;
                    let t = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(t.createTextNode((0, g.KW)(n)), e);
                }),
                (t = document.createElement("div")).appendChild(n),
                t.innerHTML),
            ));
    }
}
var v = t(792996),
    C = t(379961);
let A = function (e) {
    let { gameId: n, authorId: g, onKeyDown: p } = e,
        b = (0, o.I)(),
        N = (0, c.K)(n),
        I = null != N,
        A = N?.gameName ?? v.intl.string(v.t["11pdXZ"]),
        E = N?.gameIcon;
    i.useEffect(
        () => (
            1 === (j += 1) && document.addEventListener("copy", f),
            () => {
                0 == (j -= 1) && document.removeEventListener("copy", f);
            }
        ),
        [],
    );
    let y = i.useCallback(
            (e) => {
                let i = (0, c.v)(n);
                null != i &&
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
                            t.e(912875),
                            t.e(55348),
                            t.e(146652),
                            t.e(862782),
                            t.e(638221),
                            t.e(302008),
                            t.e(951811),
                            t.e(482861),
                            t.e(530943),
                            t.e(466322),
                            t.e(851515),
                            t.e(518103),
                        ]).then(t.bind(t, 368970));
                        return (t) =>
                            (0, s.jsx)(e, { composerChannelId: b, ...t, gameId: n, gameName: i.gameName, authorId: g });
                    });
            },
            [n, g, b],
        ),
        S = i.useCallback(() => {
            (0, l.mM)(async () => {
                let { default: e } = await t.e(256466).then(t.bind(t, 188841));
                return (n) => (0, s.jsx)(e, { ...n });
            });
        }, []),
        O = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), I)
                    ? d.default.openGameProfileModal({
                          gameId: n,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: n },
                          source: u.GameProfileSources.GameMention,
                          sourceUserId: g,
                      })
                    : S();
            },
            [n, I, S, g],
        ),
        T = I ? `@game ${A}` : void 0;
    return (0, s.jsx)(a.m, {
        asContainer: !0,
        tag: "span",
        text: T,
        "aria-label": T,
        delay: 750,
        children: (0, s.jsxs)(h.A, {
            "data-mention-game-id": n,
            onContextMenu: y,
            onClick: O,
            onKeyDown: p,
            children: [
                (0, s.jsx)(x.A, {
                    children: (0, s.jsx)("span", {
                        "aria-hidden": "true",
                        className: C.P0,
                        children: (0, s.jsx)(m.A, { game: { id: n, icon: E }, iconClassName: C.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, s.jsx)("span", { className: C.UU, children: A }),
            ],
        }),
    });
};

n.d(t, { A: () => E });
var i = n(477900),
    s = n(582128),
    l = n(192308),
    a = n(866665),
    r = n(442433),
    o = n(442247),
    d = n(60465),
    u = n(409626),
    c = n(106191),
    m = n(332173),
    x = n(936755),
    h = n(827669);
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
function N(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
}
function f(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${g}]`) ?? null;
}
function b(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
        t = n.getRangeAt(0);
    } catch {
        return;
    }
    if (t.collapsed || N(t.startContainer) || N(t.endContainer)) return;
    let i = t.cloneContents(),
        s = null != i.querySelector(`[${g}]`),
        l = f(t.startContainer),
        a = f(t.endContainer),
        r = !s && null != l && l === a;
    if (s || r) {
        let t, n;
        if (r) {
            let t = l.getAttribute(g);
            if (null == t || "" === t) return;
            (e.preventDefault(), e.clipboardData.setData("text/plain", (0, h.KW)(t)));
            return;
        }
        (e.preventDefault(),
            e.clipboardData.setData(
                "text/plain",
                (function (e) {
                    let t = "";
                    for (let n = 0; n < e.childNodes.length; n++)
                        t += (function e(t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            if (n > 200) return "";
                            if (t.nodeType === Node.TEXT_NODE) return t.textContent ?? "";
                            if (t.nodeType !== Node.ELEMENT_NODE) return "";
                            let i = t.getAttribute(g);
                            if (null != i) return (0, h.KW)(i);
                            let s = t.tagName.toUpperCase();
                            if ("IMG" === s) {
                                let e = t.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof t.className ? t.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === s) return "\n";
                            let l = "";
                            for (let i = 0; i < t.childNodes.length; i++) l += e(t.childNodes[i], n + 1);
                            return (p.has(s) && "" !== l && !l.endsWith("\n") && (l += "\n"), l);
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(i),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = i.cloneNode(!0)).querySelectorAll(`[${g}]`).forEach((e) => {
                    let t = e.getAttribute(g);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, h.KW)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            ));
    }
}
var I = n(105292),
    v = n(379961);
let E = function (e) {
    let { gameId: t, authorId: h, onKeyDown: g } = e,
        p = (0, o.K)(t),
        N = null != p,
        f = p?.gameName ?? I.intl.string(I.t["11pdXZ"]),
        E = p?.gameIcon;
    s.useEffect(
        () => (
            1 === (j += 1) && document.addEventListener("copy", b),
            () => {
                0 == (j -= 1) && document.removeEventListener("copy", b);
            }
        ),
        [],
    );
    let A = s.useCallback(
            (e) => {
                N &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("146652"),
                            n.e("638221"),
                            n.e("482861"),
                            n.e("821198"),
                            n.e("466322"),
                            n.e("180657"),
                            n.e("951811"),
                            n.e("738392"),
                        ]).then(n.bind(n, 55947));
                        return (n) => (0, i.jsx)(e, { ...n, gameId: t, gameName: f, authorId: h });
                    });
            },
            [N, t, f, h],
        ),
        C = s.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("256466").then(n.bind(n, 188841));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        S = s.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), N)
                    ? d.default.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: u.GameProfileSources.GameMention,
                          sourceUserId: h,
                      })
                    : C();
            },
            [t, N, C, h],
        ),
        O = N ? `@game ${f}` : void 0;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        tag: "span",
        text: O,
        "aria-label": O,
        delay: 750,
        children: (0, i.jsxs)(m.A, {
            "data-mention-game-id": t,
            onContextMenu: A,
            onClick: S,
            onKeyDown: g,
            children: [
                (0, i.jsx)(x.A, {
                    children: (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        className: v.P0,
                        children: (0, i.jsx)(c.A, { game: { id: t, icon: E }, iconClassName: v.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, i.jsx)("span", { className: v.UU, children: f }),
            ],
        }),
    });
};

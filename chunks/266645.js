t.d(n, { A: () => I });
var l = t(477900),
    a = t(582128),
    i = t(192308),
    r = t(866665),
    s = t(442433),
    o = t(442247),
    c = t(60465),
    u = t(409626),
    d = t(106191),
    m = t(332173),
    h = t(936755),
    p = t(827669);
let g = 0,
    f = "data-mention-game-id",
    x = new Set([
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
function j(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest('[contenteditable="true"]') != null;
}
function A(e) {
    let n = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return n?.closest(`[${f}]`) ?? null;
}
function y(e) {
    let n;
    if (null == e.clipboardData) return;
    let t = window.getSelection();
    if (null == t || 0 === t.rangeCount) return;
    try {
        n = t.getRangeAt(0);
    } catch {
        return;
    }
    if (n.collapsed || j(n.startContainer) || j(n.endContainer)) return;
    let l = n.cloneContents(),
        a = null != l.querySelector(`[${f}]`),
        i = A(n.startContainer),
        r = A(n.endContainer),
        s = !a && null != i && i === r;
    if (a || s) {
        let n, t;
        if (s) {
            let n = i.getAttribute(f);
            if (null == n || "" === n) return;
            (e.preventDefault(), e.clipboardData.setData("text/plain", (0, p.KW)(n)));
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
                            let l = n.getAttribute(f);
                            if (null != l) return (0, p.KW)(l);
                            let a = n.tagName.toUpperCase();
                            if ("IMG" === a) {
                                let e = n.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof n.className ? n.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === a) return "\n";
                            let i = "";
                            for (let l = 0; l < n.childNodes.length; l++) i += e(n.childNodes[l], t + 1);
                            return (x.has(a) && "" !== i && !i.endsWith("\n") && (i += "\n"), i);
                        })(e.childNodes[t]);
                    return n.endsWith("\n") ? n.slice(0, -1) : n;
                })(l),
            ),
            e.clipboardData.setData(
                "text/html",
                ((n = l.cloneNode(!0)).querySelectorAll(`[${f}]`).forEach((e) => {
                    let n = e.getAttribute(f);
                    if (null == n || "" === n) return;
                    let t = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(t.createTextNode((0, p.KW)(n)), e);
                }),
                (t = document.createElement("div")).appendChild(n),
                t.innerHTML),
            ));
    }
}
var C = t(105292),
    E = t(379961);
let I = function (e) {
    let { gameId: n, authorId: p } = e,
        f = (0, o.K)(n),
        x = null != f,
        j = f?.gameName ?? C.intl.string(C.t["11pdXZ"]),
        A = f?.gameIcon;
    a.useEffect(
        () => (
            1 === (g += 1) && document.addEventListener("copy", y),
            () => {
                0 == (g -= 1) && document.removeEventListener("copy", y);
            }
        ),
        [],
    );
    let I = a.useCallback(
            (e) => {
                x &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e("926132"),
                            t.e("146652"),
                            t.e("638221"),
                            t.e("482861"),
                            t.e("466322"),
                            t.e("951811"),
                            t.e("738392"),
                        ]).then(t.bind(t, 55947));
                        return (t) => (0, l.jsx)(e, { ...t, gameId: n, gameName: j, authorId: p });
                    });
            },
            [x, n, j, p],
        ),
        k = a.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await t.e("256466").then(t.bind(t, 188841));
                return (n) => (0, l.jsx)(e, { ...n });
            });
        }, []),
        N = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), x)
                    ? c.default.openGameProfileModal({
                          gameId: n,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: n },
                          source: u.GameProfileSources.GameMention,
                          sourceUserId: p,
                      })
                    : k();
            },
            [n, x, k, p],
        ),
        v = x ? `@game ${j}` : void 0;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        tag: "span",
        text: v,
        "aria-label": v,
        delay: 750,
        children: (0, l.jsxs)(m.A, {
            "data-mention-game-id": n,
            onContextMenu: I,
            onClick: N,
            children: [
                (0, l.jsx)(h.A, {
                    children: (0, l.jsx)("span", {
                        "aria-hidden": "true",
                        className: E.P0,
                        children: (0, l.jsx)(d.A, { game: { id: n, icon: A }, iconClassName: E.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, l.jsx)("span", { className: E.UU, children: j }),
            ],
        }),
    });
};

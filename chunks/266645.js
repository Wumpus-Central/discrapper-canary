"use strict";
n.d(t, { A: () => v });
var l = n(477900),
    i = n(582128),
    s = n(192308),
    r = n(866665),
    a = n(442433),
    o = n(442247),
    u = n(60465),
    c = n(409626),
    d = n(106191),
    h = n(332173),
    m = n(936755),
    f = n(827669);
let p = 0,
    g = "data-mention-game-id",
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
function A(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
}
function C(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${g}]`) ?? null;
}
function E(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
        t = n.getRangeAt(0);
    } catch {
        return;
    }
    if (t.collapsed || A(t.startContainer) || A(t.endContainer)) return;
    let l = t.cloneContents(),
        i = null != l.querySelector(`[${g}]`),
        s = C(t.startContainer),
        r = C(t.endContainer),
        a = !i && null != s && s === r;
    if (i || a) {
        let t, n;
        if (a) {
            let t = s.getAttribute(g);
            if (null == t || "" === t) return;
            e.preventDefault(), e.clipboardData.setData("text/plain", (0, f.KW)(t));
            return;
        }
        e.preventDefault(),
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
                            let l = t.getAttribute(g);
                            if (null != l) return (0, f.KW)(l);
                            let i = t.tagName.toUpperCase();
                            if ("IMG" === i) {
                                let e = t.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof t.className ? t.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === i) return "\n";
                            let s = "";
                            for (let l = 0; l < t.childNodes.length; l++) s += e(t.childNodes[l], n + 1);
                            return x.has(i) && "" !== s && !s.endsWith("\n") && (s += "\n"), s;
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(l),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = l.cloneNode(!0)).querySelectorAll(`[${g}]`).forEach((e) => {
                    let t = e.getAttribute(g);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, f.KW)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            );
    }
}
var I = n(375708),
    y = n(156452);
let v = function (e) {
    let { gameId: t, authorId: f } = e,
        g = (0, o.K)(t),
        x = null != g,
        A = g?.gameName ?? I.intl.string(I.t["11pdXZ"]),
        C = g?.gameIcon;
    i.useEffect(
        () => (
            1 === (p += 1) && document.addEventListener("copy", E),
            () => {
                0 == (p -= 1) && document.removeEventListener("copy", E);
            }
        ),
        [],
    );
    let v = i.useCallback(
            (e) => {
                x &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("926132"), n.e("146652"), n.e("738392")]).then(
                            n.bind(n, 55947),
                        );
                        return (n) => (0, l.jsx)(e, { ...n, gameId: t, gameName: A, authorId: f });
                    });
            },
            [x, t, A, f],
        ),
        S = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("256466").then(n.bind(n, 188841));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        }, []),
        N = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), x)
                    ? u.default.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: c.GameProfileSources.GameMention,
                          sourceUserId: f,
                      })
                    : S();
            },
            [t, x, S, f],
        ),
        _ = x ? `@game ${A}` : void 0;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        tag: "span",
        text: _,
        "aria-label": _,
        delay: 750,
        children: (0, l.jsxs)(h.A, {
            "data-mention-game-id": t,
            onContextMenu: v,
            onClick: N,
            children: [
                (0, l.jsx)(m.A, {
                    children: (0, l.jsx)("span", {
                        "aria-hidden": "true",
                        className: y.P0,
                        children: (0, l.jsx)(d.A, { game: { id: t, icon: C }, iconClassName: y.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, l.jsx)("span", { className: y.UU, children: A }),
            ],
        }),
    });
};

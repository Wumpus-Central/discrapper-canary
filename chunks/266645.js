"use strict";
n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    s = n(192308),
    r = n(866665),
    a = n(442433),
    o = n(442247),
    u = n(60465),
    c = n(409626),
    d = n(569926),
    h = n(106191),
    m = n(332173),
    f = n(936755),
    p = n(827669);
let g = 0,
    x = "data-mention-game-id",
    A = new Set([
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
function C(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
}
function E(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${x}]`) ?? null;
}
function I(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
        t = n.getRangeAt(0);
    } catch {
        return;
    }
    if (t.collapsed || C(t.startContainer) || C(t.endContainer)) return;
    let l = t.cloneContents(),
        i = null != l.querySelector(`[${x}]`),
        s = E(t.startContainer),
        r = E(t.endContainer),
        a = !i && null != s && s === r;
    if (i || a) {
        let t, n;
        if (a) {
            let t = s.getAttribute(x);
            if (null == t || "" === t) return;
            e.preventDefault(), e.clipboardData.setData("text/plain", (0, p.KW)(t));
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
                            let l = t.getAttribute(x);
                            if (null != l) return (0, p.KW)(l);
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
                            return A.has(i) && "" !== s && !s.endsWith("\n") && (s += "\n"), s;
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(l),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = l.cloneNode(!0)).querySelectorAll(`[${x}]`).forEach((e) => {
                    let t = e.getAttribute(x);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, p.KW)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            );
    }
}
var y = n(375708),
    v = n(379961);
let S = function (e) {
    let { gameId: t, authorId: p, shouldFetchGameMentionData: x } = e,
        A = (0, o.K)(t);
    (0, d.I)(!0 === x ? t : void 0);
    let C = null != A,
        E = A?.gameName ?? y.intl.string(y.t["11pdXZ"]),
        S = A?.gameIcon;
    i.useEffect(
        () => (
            1 === (g += 1) && document.addEventListener("copy", I),
            () => {
                0 == (g -= 1) && document.removeEventListener("copy", I);
            }
        ),
        [],
    );
    let N = i.useCallback(
            (e) => {
                C &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("926132"), n.e("146652"), n.e("738392")]).then(
                            n.bind(n, 55947),
                        );
                        return (n) => (0, l.jsx)(e, { ...n, gameId: t, gameName: E, authorId: p });
                    });
            },
            [C, t, E, p],
        ),
        _ = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("256466").then(n.bind(n, 188841));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        }, []),
        T = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), C)
                    ? u.default.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: c.GameProfileSources.GameMention,
                          sourceUserId: p,
                      })
                    : _();
            },
            [t, C, _, p],
        ),
        j = C ? `@game ${E}` : void 0;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        tag: "span",
        text: j,
        "aria-label": j,
        delay: 750,
        children: (0, l.jsxs)(m.A, {
            "data-mention-game-id": t,
            onContextMenu: N,
            onClick: T,
            children: [
                (0, l.jsx)(f.A, {
                    children: (0, l.jsx)("span", {
                        "aria-hidden": "true",
                        className: v.P0,
                        children: (0, l.jsx)(h.A, { game: { id: t, icon: S }, iconClassName: v.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, l.jsx)("span", { className: v.UU, children: E }),
            ],
        }),
    });
};

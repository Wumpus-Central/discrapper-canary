"use strict";
n.d(t, { A: () => O });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(192308),
    l = n(866665),
    o = n(442433),
    d = n(442247),
    c = n(60465),
    u = n(409626),
    _ = n(106191),
    E = n(734057),
    A = n(332173),
    h = n(936755),
    I = n(827669);
let f = 0,
    p = "data-mention-game-id",
    T = new Set([
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
function m(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
}
function g(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${p}]`) ?? null;
}
function S(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
        t = n.getRangeAt(0);
    } catch {
        return;
    }
    if (t.collapsed || m(t.startContainer) || m(t.endContainer)) return;
    let i = t.cloneContents(),
        r = null != i.querySelector(`[${p}]`),
        a = g(t.startContainer),
        s = g(t.endContainer),
        l = !r && null != a && a === s;
    if (r || l) {
        let t, n;
        if (l) {
            let t = a.getAttribute(p);
            if (null == t || "" === t) return;
            e.preventDefault(), e.clipboardData.setData("text/plain", (0, I.KW)(t));
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
                            let i = t.getAttribute(p);
                            if (null != i) return (0, I.KW)(i);
                            let r = t.tagName.toUpperCase();
                            if ("IMG" === r) {
                                let e = t.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof t.className ? t.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === r) return "\n";
                            let a = "";
                            for (let i = 0; i < t.childNodes.length; i++) a += e(t.childNodes[i], n + 1);
                            return T.has(r) && "" !== a && !a.endsWith("\n") && (a += "\n"), a;
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(i),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = i.cloneNode(!0)).querySelectorAll(`[${p}]`).forEach((e) => {
                    let t = e.getAttribute(p);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, I.KW)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            );
    }
}
var N = n(375708),
    C = n(156452);
let O = function (e) {
    let { gameId: t, channelId: I, authorId: p } = e,
        T = (0, a.bG)([E.A], () => E.A.getChannel(I)),
        m = null != T ? T.getGuildId() : null,
        g = (0, d.K)(t),
        O = null != g,
        R = g?.gameName ?? N.intl.string(N.t["11pdXZ"]),
        L = g?.gameIcon;
    r.useEffect(
        () => (
            1 === (f += 1) && document.addEventListener("copy", S),
            () => {
                0 == (f -= 1) && document.removeEventListener("copy", S);
            }
        ),
        [],
    );
    let D = r.useCallback(
            (e) => {
                O &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("26132"), n.e("46652"), n.e("38392")]).then(
                            n.bind(n, 55947),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, gameId: t, gameName: R, guildId: m, authorId: p });
                    });
            },
            [O, t, R, m, p],
        ),
        y = r.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        v = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), O)
                    ? c.default.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: u.GameProfileSources.GameMention,
                          sourceUserId: p,
                      })
                    : y();
            },
            [t, O, y, p],
        ),
        b = O ? `@game ${R}` : void 0;
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        tag: "span",
        text: b,
        "aria-label": b,
        delay: 750,
        children: (0, i.jsxs)(A.A, {
            "data-mention-game-id": t,
            onContextMenu: D,
            onClick: v,
            children: [
                (0, i.jsx)(h.A, {
                    children: (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        className: C.P0,
                        children: (0, i.jsx)(_.A, { game: { id: t, icon: L }, iconClassName: C.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, i.jsx)("span", { className: C.UU, children: R }),
            ],
        }),
    });
};

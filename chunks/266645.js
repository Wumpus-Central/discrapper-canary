"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(990078),
    l = n(192308),
    o = n(442433),
    d = n(60465),
    c = n(409626),
    u = n(106191),
    _ = n(734057),
    E = n(332173),
    A = n(936755),
    h = n(827669);
let I = 0,
    f = "data-mention-game-id",
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
function T(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest('[contenteditable="true"]') != null;
}
function m(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${f}]`) ?? null;
}
function g(e) {
    let t;
    if (null == e.clipboardData) return;
    let n = window.getSelection();
    if (null == n || 0 === n.rangeCount) return;
    try {
        t = n.getRangeAt(0);
    } catch {
        return;
    }
    if (t.collapsed || T(t.startContainer) || T(t.endContainer)) return;
    let i = t.cloneContents(),
        r = null != i.querySelector(`[${f}]`),
        a = m(t.startContainer),
        s = m(t.endContainer),
        l = !r && null != a && a === s;
    if (r || l) {
        let t, n;
        if (l) {
            let t = a.getAttribute(f);
            if (null == t || "" === t) return;
            e.preventDefault(), e.clipboardData.setData("text/plain", (0, h.KW)(t));
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
                            let i = t.getAttribute(f);
                            if (null != i) return (0, h.KW)(i);
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
                            return p.has(r) && "" !== a && !a.endsWith("\n") && (a += "\n"), a;
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(i),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = i.cloneNode(!0)).querySelectorAll(`[${f}]`).forEach((e) => {
                    let t = e.getAttribute(f);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, h.KW)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            );
    }
}
var S = n(679621),
    N = n(412460);
let C = function (e) {
    let { gameId: t, channelId: h, authorId: f, gameName: p, gameIcon: T } = e,
        m = (0, a.bG)([_.A], () => _.A.getChannel(h)),
        C = null != m ? m.getGuildId() : null,
        { name: R, hasName: O } = (0, S.V)({ gameName: p, gameId: t });
    r.useEffect(
        () => (
            1 === (I += 1) && document.addEventListener("copy", g),
            () => {
                0 == (I -= 1) && document.removeEventListener("copy", g);
            }
        ),
        [],
    );
    let L = r.useCallback(
            (e) => {
                O &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("26132"), n.e("46652"), n.e("38392")]).then(
                            n.bind(n, 55947),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, gameId: t, gameName: R, guildId: C, authorId: f });
                    });
            },
            [O, t, R, C, f],
        ),
        D = r.useCallback(() => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        y = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), O)
                    ? d.default.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: c.GameProfileSources.GameMention,
                          sourceUserId: f,
                      })
                    : D();
            },
            [t, O, D, f],
        ),
        v = O ? `@game ${R}` : void 0;
    return (0, i.jsx)(s.m, {
        asContainer: !0,
        tag: "span",
        text: v,
        "aria-label": v,
        delay: 750,
        children: (0, i.jsxs)(E.A, {
            "data-mention-game-id": t,
            onContextMenu: L,
            onClick: y,
            children: [
                (0, i.jsx)(A.A, {
                    children: (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        className: N.P0,
                        children: (0, i.jsx)(u.A, { game: { id: t, icon: T }, iconClassName: N.Kk }),
                    }),
                }),
                (0, i.jsx)("span", { className: N.UU, children: R }),
            ],
        }),
    });
};

"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(990078),
    o = n(192308),
    l = n(442433),
    u = n(60465),
    c = n(409626),
    d = n(106191),
    _ = n(734057),
    h = n(332173),
    f = n(936755),
    p = n(827669);
let E = 0,
    m = "data-mention-game-id",
    g = new Set([
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
function I(e) {
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    return t?.closest(`[${m}]`) ?? null;
}
function T(e) {
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
    let i = t.cloneContents(),
        r = null != i.querySelector(`[${m}]`),
        s = I(t.startContainer),
        a = I(t.endContainer),
        o = !r && null != s && s === a;
    if (r || o) {
        let t, n;
        if (o) {
            let t = s.getAttribute(m);
            if (null == t || "" === t) return;
            e.preventDefault(), e.clipboardData.setData("text/plain", (0, p.K)(t));
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
                            let i = t.getAttribute(m);
                            if (null != i) return (0, p.K)(i);
                            let r = t.tagName.toUpperCase();
                            if ("IMG" === r) {
                                let e = t.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof t.className ? t.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === r) return "\n";
                            let s = "";
                            for (let i = 0; i < t.childNodes.length; i++) s += e(t.childNodes[i], n + 1);
                            return g.has(r) && "" !== s && !s.endsWith("\n") && (s += "\n"), s;
                        })(e.childNodes[n]);
                    return t.endsWith("\n") ? t.slice(0, -1) : t;
                })(i),
            ),
            e.clipboardData.setData(
                "text/html",
                ((t = i.cloneNode(!0)).querySelectorAll(`[${m}]`).forEach((e) => {
                    let t = e.getAttribute(m);
                    if (null == t || "" === t) return;
                    let n = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(n.createTextNode((0, p.K)(t)), e);
                }),
                (n = document.createElement("div")).appendChild(t),
                n.innerHTML),
            );
    }
}
var S = n(679621),
    y = n(412460);
let C = function (e) {
    let { gameId: t, channelId: p, authorId: m, gameName: g, gameIconHash: A } = e,
        I = (0, s.bG)([_.A], () => _.A.getChannel(p)),
        C = null != I ? I.getGuildId() : null,
        { name: N, hasName: v } = (0, S.V)({ gameName: g, gameId: t });
    r.useEffect(
        () => (
            1 === (E += 1) && document.addEventListener("copy", T),
            () => {
                0 == (E -= 1) && document.removeEventListener("copy", T);
            }
        ),
        [],
    );
    let R = r.useCallback(
            (e) => {
                v &&
                    (0, l.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("26132"), n.e("46652"), n.e("38392")]).then(
                            n.bind(n, 55947),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, gameId: t, gameName: N, guildId: C, authorId: m });
                    });
            },
            [v, t, N, C, m],
        ),
        O = r.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        b = r.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), v)
                    ? u.A.openGameProfileModal({
                          gameId: t,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: t },
                          source: c.Ob.GameMention,
                          sourceUserId: m,
                      })
                    : O();
            },
            [t, v, O, m],
        ),
        D = v ? `@game ${N}` : void 0;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        tag: "span",
        text: D,
        "aria-label": D,
        delay: 750,
        children: (0, i.jsxs)(h.A, {
            "data-mention-game-id": t,
            onContextMenu: R,
            onClick: b,
            children: [
                (0, i.jsx)(f.A, {
                    children: (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        className: y.P0,
                        children: (0, i.jsx)(d.A, { game: { id: t, icon_hash: A }, iconClassName: y.Kk }),
                    }),
                }),
                (0, i.jsx)("span", { className: y.UU, children: N }),
            ],
        }),
    });
};

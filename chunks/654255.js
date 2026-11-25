t.d(n, { A: () => A });
var l = t(477900),
    s = t(582128),
    a = t(192308),
    i = t(866665),
    r = t(442433),
    o = t(374846),
    u = t(442247),
    c = t(60465),
    d = t(409626),
    m = t(106191),
    x = t(332173),
    h = t(936755),
    p = t(827669);
let j = 0,
    g = "data-mention-game-id",
    f = new Set([
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
function v(e) {
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
    if (n.collapsed || v(n.startContainer) || v(n.endContainer)) return;
    let l = n.cloneContents(),
        s = null != l.querySelector(`[${g}]`),
        a = N(n.startContainer),
        i = N(n.endContainer),
        r = !s && null != a && a === i;
    if (s || r) {
        let n, t;
        if (r) {
            let n = a.getAttribute(g);
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
                            let l = n.getAttribute(g);
                            if (null != l) return (0, p.KW)(l);
                            let s = n.tagName.toUpperCase();
                            if ("IMG" === s) {
                                let e = n.getAttribute("alt");
                                return null != e && "" !== e ? e : "";
                            }
                            if (("string" == typeof n.className ? n.className : "").includes("hiddenVisually"))
                                return "";
                            if ("BR" === s) return "\n";
                            let a = "";
                            for (let l = 0; l < n.childNodes.length; l++) a += e(n.childNodes[l], t + 1);
                            return (f.has(s) && "" !== a && !a.endsWith("\n") && (a += "\n"), a);
                        })(e.childNodes[t]);
                    return n.endsWith("\n") ? n.slice(0, -1) : n;
                })(l),
            ),
            e.clipboardData.setData(
                "text/html",
                ((n = l.cloneNode(!0)).querySelectorAll(`[${g}]`).forEach((e) => {
                    let n = e.getAttribute(g);
                    if (null == n || "" === n) return;
                    let t = e.ownerDocument ?? document;
                    e.parentNode?.replaceChild(t.createTextNode((0, p.KW)(n)), e);
                }),
                (t = document.createElement("div")).appendChild(n),
                t.innerHTML),
            ));
    }
}
var b = t(792996),
    E = t(379961);
let A = function (e) {
    let { gameId: n, authorId: p, onKeyDown: g } = e,
        f = (0, o.I)(),
        v = (0, u.K)(n),
        N = null != v,
        A = v?.gameName ?? b.intl.string(b.t["11pdXZ"]),
        C = v?.gameIcon;
    s.useEffect(
        () => (
            1 === (j += 1) && document.addEventListener("copy", I),
            () => {
                0 == (j -= 1) && document.removeEventListener("copy", I);
            }
        ),
        [],
    );
    let T = s.useCallback(
            (e) => {
                let s = (0, u.v)(n);
                null != s &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e(926132),
                            t.e(146652),
                            t.e(638221),
                            t.e(302008),
                            t.e(951811),
                            t.e(482861),
                            t.e(851515),
                            t.e(518103),
                        ]).then(t.bind(t, 368970));
                        return (t) =>
                            (0, l.jsx)(e, { composerChannelId: f, ...t, gameId: n, gameName: s.gameName, authorId: p });
                    });
            },
            [n, p, f],
        ),
        y = s.useCallback(() => {
            (0, a.mM)(async () => {
                let { default: e } = await t.e(256466).then(t.bind(t, 188841));
                return (n) => (0, l.jsx)(e, { ...n });
            });
        }, []),
        _ = s.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), N)
                    ? c.default.openGameProfileModal({
                          gameId: n,
                          gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: n },
                          source: d.GameProfileSources.GameMention,
                          sourceUserId: p,
                      })
                    : y();
            },
            [n, N, y, p],
        ),
        S = N ? `@game ${A}` : void 0;
    return (0, l.jsx)(i.m, {
        asContainer: !0,
        tag: "span",
        text: S,
        "aria-label": S,
        delay: 750,
        children: (0, l.jsxs)(x.A, {
            "data-mention-game-id": n,
            onContextMenu: T,
            onClick: _,
            onKeyDown: g,
            children: [
                (0, l.jsx)(h.A, {
                    children: (0, l.jsx)("span", {
                        "aria-hidden": "true",
                        className: E.P0,
                        children: (0, l.jsx)(m.A, { game: { id: n, icon: C }, iconClassName: E.Kk, allowFetch: !1 }),
                    }),
                }),
                (0, l.jsx)("span", { className: E.UU, children: A }),
            ],
        }),
    });
};

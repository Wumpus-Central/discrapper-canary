l.d(t, { A: () => p });
var n = l(477900),
    r = l(582128),
    u = l(922016),
    s = l(613373),
    a = l(584669);
l(321073);
let i = String.raw`(?:\d{2,}:)?\d{2}:\d{2}\.\d{3}`,
    o = new RegExp(String.raw`^\s*(${i})\s*-->\s*(${i})`);
function c(e) {
    let t = 0;
    for (let l of e.split(":")) t = 60 * t + parseFloat(l);
    return t;
}
let h = [];
var f = l(562756);
let d = { innerRef: null, onMouseEnter: () => {}, onMouseLeave: () => {} };
function p(e) {
    let { attachment: t, timestampMs: l, children: r } = e,
        u = t?.spritesheet_vtt_url;
    return null == u || 0 === u.length ? r(d) : (0, n.jsx)(g, { vttUrl: u, timestampMs: l, children: r });
}
function g(e) {
    let { vttUrl: t, timestampMs: l, children: i } = e,
        d = r.useRef(null),
        [p, g] = r.useState(!1),
        m = (function (e, t) {
            let [l, n] = r.useState(null);
            return (
                r.useEffect(() => {
                    if (!e || null == t || 0 === t.length || l?.url === t) return;
                    let r = new AbortController();
                    return (
                        (async () => {
                            try {
                                let e = await fetch(t, { signal: r.signal });
                                if (!e.ok) throw Error(`Sprite sheet VTT fetch failed: ${e.status}`);
                                let l = await e.text();
                                n({
                                    url: t,
                                    cues: (function (e) {
                                        let t = [],
                                            l = e.split(/\r?\n/);
                                        for (let e = 0; e < l.length; e++) {
                                            let n = l[e].match(o);
                                            if (null == n) continue;
                                            let r = [];
                                            for (let t = e + 1; t < l.length && l[t].trim().length > 0; t++)
                                                r.push(l[t].trim());
                                            let u = (0, s.xx)(r.join("\n"));
                                            null != u && t.push({ startSec: c(n[1]), endSec: c(n[2]), ...u });
                                        }
                                        return (t.sort((e, t) => e.startSec - t.startSec), t);
                                    })(l),
                                });
                            } catch {}
                        })(),
                        () => r.abort()
                    );
                }, [e, t, l?.url]),
                null != l && l.url === t ? l.cues : h
            );
        })(p, t),
        w = (0, s.B8)(m, l / 1e3),
        S = w?.imageUrl,
        [b, k] = r.useState(null);
    r.useEffect(() => {
        if (null == S) return;
        let e = new Image();
        return (
            (e.onload = () => k(S)),
            (e.src = S),
            () => {
                e.onload = null;
            }
        );
    }, [S]);
    let v = r.useCallback(() => g(!0), []),
        E = r.useCallback(() => g(!1), []),
        x = r.useCallback(
            (e) => {
                let { setPopoutRef: t } = e;
                return null == w || w.w <= 0 || w.h <= 0
                    ? null
                    : (0, n.jsx)("div", { ref: t, className: f.F, style: (0, a.u)(w), "aria-hidden": !0 });
            },
            [w],
        ),
        C = { innerRef: d, onMouseEnter: v, onMouseLeave: E },
        M = null != w && w.w > 0 && w.h > 0 && b === w.imageUrl;
    return (0, n.jsx)(u.Y, {
        targetElementRef: d,
        renderPopout: x,
        animationPosition: "bottom",
        shouldShow: p && M,
        position: "top",
        align: "center",
        disablePointerEvents: !0,
        children: () => i(C),
    });
}

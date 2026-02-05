"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(397927),
    c = n(7584),
    d = n(336615),
    _ = n(486020),
    f = n(690521),
    p = n(307731),
    h = n(803386);
let m = l().memoize(
        (e) =>
            `${e * p.he.NonDiversityPerRow}px ${e * Math.ceil(c.Ay.numNonDiversitySprites / p.he.NonDiversityPerRow)}px`,
    ),
    g = l().memoize(
        (e) => `${e * p.he.DiversityPerRow}px ${e * Math.ceil(c.Ay.numDiversitySprites / p.he.DiversityPerRow)}px`,
    ),
    E = (e, t, r) => {
        let i, a, s;
        if (!e.useSpriteSheet) return;
        let o = null != e.index ? e.index : 0;
        e.hasDiversity
            ? ((i = n(983660)(`./spritesheet-${t}-${r}.png`)), (a = g(r)), (s = p.he.DiversityPerRow))
            : ((i = n(883740)(`./spritesheet-emoji-${r}.png`)), (a = m(r)), (s = p.he.NonDiversityPerRow));
        let l = (-o % s) * r,
            u = -Math.floor(o / s) * r;
        return {
            backgroundImage: `url('${i}')`,
            backgroundPosition: `${l}px ${u}px`,
            backgroundSize: a,
            height: r,
            width: r,
        };
    },
    A = i.memo(function (e) {
        let { emoji: t, size: n, surrogateCodePoint: a, allowAnimatedEmoji: o, "aria-label": l, isLocked: c } = e,
            p = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : _.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: 48 });
                    return null != e
                        ? (0, r.jsx)(d.A, { className: h.N1, "aria-label": l, src: e, size: n, alt: (0, f.N)(t) ?? "" })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: s()(h.xA, { [h.N1]: c }),
                    style: E(t, a, n),
                    children: (0, r.jsx)(u.AC4, { children: l }),
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                p,
                c
                    ? (0, r.jsx)("div", {
                          className: h.iD,
                          children: (0, r.jsx)(u.XAi, { size: "xs", color: "currentColor", className: h.fi }),
                      })
                    : null,
            ],
        });
    });

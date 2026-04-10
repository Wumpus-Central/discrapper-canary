"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(397927),
    c = n(7584),
    d = n(336615),
    _ = n(486020),
    f = n(690521),
    p = n(307731),
    h = n(795144);
let m = l().memoize(
        (e) =>
            `${e * p.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(c.Ay.numNonDiversitySprites / p.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    E = l().memoize(
        (e) =>
            `${e * p.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(c.Ay.numDiversitySprites / p.EmojiSprites.DiversityPerRow)}px`,
    ),
    g = (e, t, r) => {
        let i, s, a;
        if (!e.useSpriteSheet) return;
        let o = null != e.index ? e.index : 0;
        e.hasDiversity
            ? ((i = n(983660)(`./spritesheet-${t}-${r}.png`)), (s = E(r)), (a = p.EmojiSprites.DiversityPerRow))
            : ((i = n(883740)(`./spritesheet-emoji-${r}.png`)), (s = m(r)), (a = p.EmojiSprites.NonDiversityPerRow));
        let l = (-o % a) * r,
            u = -Math.floor(o / a) * r;
        return {
            backgroundImage: `url('${i}')`,
            backgroundPosition: `${l}px ${u}px`,
            backgroundSize: s,
            height: r,
            width: r,
        };
    },
    A = i.memo(function (e) {
        let { emoji: t, size: n, surrogateCodePoint: s, allowAnimatedEmoji: o, "aria-label": l, isLocked: c } = e,
            m = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : _.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: p.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, r.jsx)(d.A, { className: h.N1, "aria-label": l, src: e, size: n, alt: (0, f.N)(t) ?? "" })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: a()(h.xA, { [h.N1]: c }),
                    style: g(t, s, n),
                    children: (0, r.jsx)(u.AC4, { children: l }),
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                m,
                c
                    ? (0, r.jsx)("div", {
                          className: h.iD,
                          children: (0, r.jsx)(u.XAi, { size: "xs", color: "currentColor", className: h.fi }),
                      })
                    : null,
            ],
        });
    });

"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(140735),
    c = n(194261),
    d = n(7584),
    _ = n(336615),
    f = n(486020),
    p = n(690521),
    h = n(307731),
    E = n(297547);
let m = l().memoize(
        (e) =>
            `${e * h.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(d.Ay.numNonDiversitySprites / h.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    g = l().memoize(
        (e) =>
            `${e * h.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(d.Ay.numDiversitySprites / h.EmojiSprites.DiversityPerRow)}px`,
    ),
    A = i.memo(function (e) {
        let { emoji: t, size: s, surrogateCodePoint: o, allowAnimatedEmoji: l, "aria-label": d, isLocked: A } = e,
            I = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : f.Ay.getEmojiURL({ id: t.id, animated: l && t.animated, size: h.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, r.jsx)(_.A, { className: E.N1, "aria-label": d, src: e, size: s, alt: (0, p.N)(t) ?? "" })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: a()(E.xA, { [E.N1]: A }),
                    style: ((e, t, r) => {
                        let i, s, a;
                        if (!e.useSpriteSheet) return;
                        let o = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(983660)(`./spritesheet-${t}-${r}.png`)),
                              (s = g(r)),
                              (a = h.EmojiSprites.DiversityPerRow))
                            : ((i = n(883740)(`./spritesheet-emoji-${r}.png`)),
                              (s = m(r)),
                              (a = h.EmojiSprites.NonDiversityPerRow));
                        let l = (-o % a) * r,
                            u = -Math.floor(o / a) * r;
                        return {
                            backgroundImage: `url('${i}')`,
                            backgroundPosition: `${l}px ${u}px`,
                            backgroundSize: s,
                            height: r,
                            width: r,
                        };
                    })(t, o, s),
                    children: (0, r.jsx)(u.A, { children: d }),
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                I,
                A
                    ? (0, r.jsx)("div", {
                          className: E.iD,
                          children: (0, r.jsx)(c.X, { size: "xs", color: "currentColor", className: E.fi }),
                      })
                    : null,
            ],
        });
    });

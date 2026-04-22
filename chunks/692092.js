"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(140735),
    u = n(194261),
    d = n(7584),
    h = n(336615),
    m = n(486020),
    p = n(690521),
    f = n(307731),
    g = n(297547);
let _ = o().memoize(
        (e) =>
            `${e * f.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(d.Ay.numNonDiversitySprites / f.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    x = o().memoize(
        (e) =>
            `${e * f.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(d.Ay.numDiversitySprites / f.EmojiSprites.DiversityPerRow)}px`,
    ),
    A = l.memo(function (e) {
        let { emoji: t, size: s, surrogateCodePoint: a, allowAnimatedEmoji: o, "aria-label": d, isLocked: A } = e,
            C = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : m.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: f.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, i.jsx)(h.A, { className: g.N1, "aria-label": d, src: e, size: s, alt: (0, p.N)(t) ?? "" })
                        : null;
                }
                return (0, i.jsx)("div", {
                    className: r()(g.xA, { [g.N1]: A }),
                    style: ((e, t, i) => {
                        let l, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((l = n(983660)(`./spritesheet-${t}-${i}.png`)),
                              (s = x(i)),
                              (r = f.EmojiSprites.DiversityPerRow))
                            : ((l = n(883740)(`./spritesheet-emoji-${i}.png`)),
                              (s = _(i)),
                              (r = f.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * i,
                            c = -Math.floor(a / r) * i;
                        return {
                            backgroundImage: `url('${l}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: s,
                            height: i,
                            width: i,
                        };
                    })(t, a, s),
                    children: (0, i.jsx)(c.A, { children: d }),
                });
            })();
        return (0, i.jsxs)(l.Fragment, {
            children: [
                C,
                A
                    ? (0, i.jsx)("div", {
                          className: g.iD,
                          children: (0, i.jsx)(u.X, { size: "xs", color: "currentColor", className: g.fi }),
                      })
                    : null,
            ],
        });
    });

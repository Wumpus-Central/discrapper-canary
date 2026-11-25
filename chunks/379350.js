n.d(t, { A: () => _ });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(435558),
    o = n.n(a),
    c = n(140735),
    u = n(194261),
    d = n(7584),
    m = n(703413);
let f = (e) => {
    let { src: t, alt: n, size: l, "aria-label": a, className: o } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        d = u.current ? m.S : m.Y;
    return (0, i.jsx)("img", {
        className: r()(d, o),
        alt: n,
        src: t,
        ref: c,
        "aria-label": a,
        style: { backgroundSize: l, height: l, width: l },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((u.current = !0), c.current.classList.remove(m.Y), c.current.classList.add(m.S));
                  });
              },
    });
};
var E = n(486020),
    I = n(690521),
    h = n(307731),
    g = n(955388);
let A = o().memoize(
        (e) =>
            `${e * h.he.NonDiversityPerRow}px ${e * Math.ceil(d.Ay.numNonDiversitySprites / h.he.NonDiversityPerRow)}px`,
    ),
    p = o().memoize(
        (e) => `${e * h.he.DiversityPerRow}px ${e * Math.ceil(d.Ay.numDiversitySprites / h.he.DiversityPerRow)}px`,
    ),
    _ = s.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: a, allowAnimatedEmoji: o, "aria-label": d, isLocked: m } = e,
            _ = (() => {
                if (!t.useSpriteSheet) {
                    let e = null == t.id ? t.url : E.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: 48 });
                    return null != e
                        ? (0, i.jsx)(f, { className: g.N1, "aria-label": d, src: e, size: l, alt: (0, I.N)(t) ?? "" })
                        : null;
                }
                return (0, i.jsx)("div", {
                    className: r()(g.xA, { [g.N1]: m }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = p(i)),
                              (r = h.he.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = A(i)),
                              (r = h.he.NonDiversityPerRow));
                        let o = (-a % r) * i,
                            c = -Math.floor(a / r) * i;
                        return {
                            backgroundImage: `url('${s}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: l,
                            height: i,
                            width: i,
                        };
                    })(t, a, l),
                    children: (0, i.jsx)(c.A, { children: d }),
                });
            })();
        return (0, i.jsxs)(s.Fragment, {
            children: [
                _,
                m
                    ? (0, i.jsx)("div", {
                          className: g.iD,
                          style: { width: l, height: l },
                          children: (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor", className: g.fi }),
                      })
                    : null,
            ],
        });
    });

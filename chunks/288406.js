n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(481060),
    u = n(633302),
    d = n(334920),
    f = n(768581),
    p = n(176354),
    _ = n(185923),
    m = n(74066);
let h = l().memoize((e) =>
        ""
            .concat(e * _.DC.NonDiversityPerRow, "px ")
            .concat(e * Math.ceil(u.ZP.numNonDiversitySprites / _.DC.NonDiversityPerRow), "px"),
    ),
    g = l().memoize((e) =>
        ""
            .concat(e * _.DC.DiversityPerRow, "px ")
            .concat(e * Math.ceil(u.ZP.numDiversitySprites / _.DC.DiversityPerRow), "px"),
    ),
    E = (e, t, r) => {
        let i, a, o;
        if (!e.useSpriteSheet) return;
        let s = null != e.index ? e.index : 0;
        e.hasDiversity
            ? ((i = n(735800)("./spritesheet-".concat(t, "-").concat(r, ".png"))),
              (a = g(r)),
              (o = _.DC.DiversityPerRow))
            : ((i = n(604901)("./spritesheet-emoji-".concat(r, ".png"))), (a = h(r)), (o = _.DC.NonDiversityPerRow));
        let l = (-s % o) * r,
            c = -Math.floor(s / o) * r;
        return {
            backgroundImage: "url('".concat(i, "')"),
            backgroundPosition: "".concat(l, "px ").concat(c, "px"),
            backgroundSize: a,
            height: r,
            width: r,
        };
    },
    b = i.memo(function (e) {
        let { emoji: t, size: n, surrogateCodePoint: a, allowAnimatedEmoji: s, "aria-label": l, isLocked: u } = e,
            h = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let i =
                        null == t.id
                            ? t.url
                            : f.ZP.getEmojiURL({
                                  id: t.id,
                                  animated: s && t.animated,
                                  size: _.$U,
                              });
                    return null != i
                        ? (0, r.jsx)(d.Z, {
                              className: m.lockedEmoji,
                              "aria-label": l,
                              src: i,
                              size: n,
                              alt: null != (e = (0, p.nY)(t)) ? e : "",
                          })
                        : null;
                }
                return (0, r.jsx)("div", {
                    className: o()(m.emojiSpriteImage, { [m.lockedEmoji]: u }),
                    style: E(t, a, n),
                    children: (0, r.jsx)(c.nn4, { children: l }),
                });
            })();
        return (0, r.jsxs)(i.Fragment, {
            children: [
                h,
                u
                    ? (0, r.jsx)("div", {
                          className: m.emojiLockIconContainer,
                          children: (0, r.jsx)(c.mBM, {
                              size: "xs",
                              color: "currentColor",
                              className: m.emojiLockIcon,
                          }),
                      })
                    : null,
            ],
        });
    });

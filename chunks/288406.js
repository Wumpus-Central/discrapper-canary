var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(392711),
    u = r.n(l),
    c = r(481060),
    d = r(633302),
    f = r(334920),
    _ = r(768581),
    h = r(185923),
    p = r(154949);
let m = u().memoize((e) => ''.concat(e * h.DC.NonDiversityPerRow, 'px ').concat(e * Math.ceil(d.ZP.numNonDiversitySprites / h.DC.NonDiversityPerRow), 'px')),
    g = u().memoize((e) => ''.concat(e * h.DC.DiversityPerRow, 'px ').concat(e * Math.ceil(d.ZP.numDiversitySprites / h.DC.DiversityPerRow), 'px')),
    E = (e, n, i) => {
        let a, s, o;
        if (!e.useSpriteSheet) return;
        let l = null != e.index ? e.index : 0;
        e.hasDiversity ? ((a = r(735800)('./spritesheet-'.concat(n, '-').concat(i, '.png'))), (s = g(i)), (o = h.DC.DiversityPerRow)) : ((a = r(604901)('./spritesheet-emoji-'.concat(i, '.png'))), (s = m(i)), (o = h.DC.NonDiversityPerRow));
        let u = (-l % o) * i,
            c = -Math.floor(l / o) * i;
        return {
            backgroundImage: "url('".concat(a, "')"),
            backgroundPosition: ''.concat(u, 'px ').concat(c, 'px'),
            backgroundSize: s,
            height: i,
            width: i
        };
    },
    v = a.memo(function (e) {
        let { emoji: n, size: r, surrogateCodePoint: s, allowAnimatedEmoji: l, 'aria-label': u, isLocked: d } = e,
            m = (() => {
                if (!n.useSpriteSheet) {
                    var e;
                    let a =
                        null == n.id
                            ? n.url
                            : _.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: l && n.animated,
                                  size: h.$U
                              });
                    return null != a
                        ? (0, i.jsx)(f.Z, {
                              className: p.lockedEmoji,
                              'aria-label': u,
                              src: a,
                              size: r,
                              alt: null !== (e = n.allNamesString) && void 0 !== e ? e : ''
                          })
                        : null;
                }
                return (0, i.jsx)('div', {
                    className: o()(p.emojiSpriteImage, { [p.lockedEmoji]: d }),
                    style: E(n, s, r),
                    children: (0, i.jsx)(c.HiddenVisually, { children: u })
                });
            })();
        return (0, i.jsxs)(a.Fragment, {
            children: [
                m,
                d
                    ? (0, i.jsx)('div', {
                          className: p.emojiLockIconContainer,
                          children: (0, i.jsx)(c.LockIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p.emojiLockIcon
                          })
                      })
                    : null
            ]
        });
    });
n.Z = v;

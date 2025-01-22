var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(392711),
    u = r.n(l),
    c = r(481060),
    d = r(633302),
    f = r(334920),
    p = r(768581),
    h = r(185923),
    _ = r(154949);
let m = u().memoize((e) => ''.concat(e * h.DC.NonDiversityPerRow, 'px ').concat(e * Math.ceil(d.ZP.numNonDiversitySprites / h.DC.NonDiversityPerRow), 'px')),
    g = u().memoize((e) => ''.concat(e * h.DC.DiversityPerRow, 'px ').concat(e * Math.ceil(d.ZP.numDiversitySprites / h.DC.DiversityPerRow), 'px')),
    E = (e, n, i) => {
        let a, o, s;
        if (!e.useSpriteSheet) return;
        let l = null != e.index ? e.index : 0;
        e.hasDiversity ? ((a = r(735800)('./spritesheet-'.concat(n, '-').concat(i, '.png'))), (o = g(i)), (s = h.DC.DiversityPerRow)) : ((a = r(604901)('./spritesheet-emoji-'.concat(i, '.png'))), (o = m(i)), (s = h.DC.NonDiversityPerRow));
        let u = (-l % s) * i,
            c = -Math.floor(l / s) * i;
        return {
            backgroundImage: "url('".concat(a, "')"),
            backgroundPosition: ''.concat(u, 'px ').concat(c, 'px'),
            backgroundSize: o,
            height: i,
            width: i
        };
    },
    v = a.memo(function (e) {
        let { emoji: n, size: r, surrogateCodePoint: o, allowAnimatedEmoji: l, 'aria-label': u, isLocked: d } = e,
            m = (() => {
                if (!n.useSpriteSheet) {
                    var e;
                    let a =
                        null == n.id
                            ? n.url
                            : p.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: l && n.animated,
                                  size: h.$U
                              });
                    return null != a
                        ? (0, i.jsx)(f.Z, {
                              className: _.lockedEmoji,
                              'aria-label': u,
                              src: a,
                              size: r,
                              alt: null !== (e = n.allNamesString) && void 0 !== e ? e : ''
                          })
                        : null;
                }
                return (0, i.jsx)('div', {
                    className: s()(_.emojiSpriteImage, { [_.lockedEmoji]: d }),
                    style: E(n, o, r),
                    children: (0, i.jsx)(c.HiddenVisually, { children: u })
                });
            })();
        return (0, i.jsxs)(a.Fragment, {
            children: [
                m,
                d
                    ? (0, i.jsx)('div', {
                          className: _.emojiLockIconContainer,
                          children: (0, i.jsx)(c.LockIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.emojiLockIcon
                          })
                      })
                    : null
            ]
        });
    });
n.Z = v;

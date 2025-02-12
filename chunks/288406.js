n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(481060),
    c = n(633302),
    d = n(334920),
    f = n(768581),
    _ = n(185923),
    p = n(306011);
let h = l().memoize((e) => ''.concat(e * _.DC.NonDiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numNonDiversitySprites / _.DC.NonDiversityPerRow), 'px')),
    m = l().memoize((e) => ''.concat(e * _.DC.DiversityPerRow, 'px ').concat(e * Math.ceil(c.ZP.numDiversitySprites / _.DC.DiversityPerRow), 'px')),
    g = (e, t, i) => {
        let r, a, s;
        if (!e.useSpriteSheet) return;
        let o = null != e.index ? e.index : 0;
        e.hasDiversity ? ((r = n(735800)('./spritesheet-'.concat(t, '-').concat(i, '.png'))), (a = m(i)), (s = _.DC.DiversityPerRow)) : ((r = n(604901)('./spritesheet-emoji-'.concat(i, '.png'))), (a = h(i)), (s = _.DC.NonDiversityPerRow));
        let l = (-o % s) * i,
            u = -Math.floor(o / s) * i;
        return {
            backgroundImage: "url('".concat(r, "')"),
            backgroundPosition: ''.concat(l, 'px ').concat(u, 'px'),
            backgroundSize: a,
            height: i,
            width: i
        };
    },
    E = r.memo(function (e) {
        let { emoji: t, size: n, surrogateCodePoint: a, allowAnimatedEmoji: o, 'aria-label': l, isLocked: c } = e,
            h = (() => {
                if (!t.useSpriteSheet) {
                    var e;
                    let r =
                        null == t.id
                            ? t.url
                            : f.ZP.getEmojiURL({
                                  id: t.id,
                                  animated: o && t.animated,
                                  size: _.$U
                              });
                    return null != r
                        ? (0, i.jsx)(d.Z, {
                              className: p.lockedEmoji,
                              'aria-label': l,
                              src: r,
                              size: n,
                              alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ''
                          })
                        : null;
                }
                return (0, i.jsx)('div', {
                    className: s()(p.emojiSpriteImage, { [p.lockedEmoji]: c }),
                    style: g(t, a, n),
                    children: (0, i.jsx)(u.nn4, { children: l })
                });
            })();
        return (0, i.jsxs)(r.Fragment, {
            children: [
                h,
                c
                    ? (0, i.jsx)('div', {
                          className: p.emojiLockIconContainer,
                          children: (0, i.jsx)(u.mBM, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p.emojiLockIcon
                          })
                      })
                    : null
            ]
        });
    });

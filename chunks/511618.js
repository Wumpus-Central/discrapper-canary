var i = r(200651),
    a = r(192379),
    s = r(906732),
    o = r(965386),
    l = r(686546),
    u = r(626135),
    c = r(768581),
    d = r(981631),
    f = r(185923),
    _ = r(474936),
    h = r(388032),
    p = r(316639);
let m = 3,
    g = (e) => {
        let { emojis: n } = e,
            { analyticsLocations: r } = (0, s.ZP)();
        a.useEffect(() => {
            u.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: r
            });
        }, [r]);
        let g = (0, i.jsx)('div', {
            className: p.emojis,
            children: n.slice(0, m).map((e, n) => {
                if (null == e.id) return null;
                let r = 2 === n,
                    a = (0, i.jsx)(
                        'div',
                        {
                            className: p.emojiBackground,
                            children: (0, i.jsx)('img', {
                                alt: e.name,
                                className: p.emoji,
                                src: c.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated,
                                    size: f.$U
                                })
                            })
                        },
                        e.id
                    );
                return r
                    ? a
                    : (0, i.jsx)(
                          l.ZP,
                          {
                              className: p.emojiMask,
                              mask: l.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                              children: a
                          },
                          e.id
                      );
            })
        });
        return (0, i.jsxs)(o.RX, {
            className: p.upsell,
            children: [(0, i.jsx)(o.z5, { children: (0, i.jsx)(o.BR, { children: h.intl.format(h.t['uEky4+'], { count: n.length }) }) }), (0, i.jsx)(o.dY, { children: g })]
        });
    };
n.Z = g;

n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    a = n(906732),
    s = n(965386),
    o = n(686546),
    l = n(626135),
    u = n(768581),
    c = n(981631),
    d = n(185923),
    f = n(474936),
    _ = n(388032),
    p = n(73977);
let h = 3,
    m = (e) => {
        let { emojis: t } = e,
            { analyticsLocations: n } = (0, a.ZP)();
        r.useEffect(() => {
            l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n
            });
        }, [n]);
        let m = (0, i.jsx)('div', {
            className: p.emojis,
            children: t.slice(0, h).map((e, t) => {
                if (null == e.id) return null;
                let n = 2 === t,
                    r = (0, i.jsx)(
                        'div',
                        {
                            className: p.emojiBackground,
                            children: (0, i.jsx)('img', {
                                alt: e.name,
                                className: p.emoji,
                                src: u.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated,
                                    size: d.$U
                                })
                            })
                        },
                        e.id
                    );
                return n
                    ? r
                    : (0, i.jsx)(
                          o.ZP,
                          {
                              className: p.emojiMask,
                              mask: o.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                              children: r
                          },
                          e.id
                      );
            })
        });
        return (0, i.jsxs)(s.RX, {
            className: p.upsell,
            children: [(0, i.jsx)(s.z5, { children: (0, i.jsx)(s.BR, { children: _.intl.format(_.t['uEky4+'], { count: t.length }) }) }), (0, i.jsx)(s.dY, { children: m })]
        });
    };

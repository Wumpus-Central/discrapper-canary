n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    o = n(906732),
    a = n(965386),
    s = n(686546),
    l = n(626135),
    c = n(768581),
    u = n(981631),
    d = n(185923),
    f = n(474936),
    p = n(388032),
    _ = n(11079);
let m = 3,
    h = (e) => {
        let { emojis: t } = e,
            { analyticsLocations: n } = (0, o.ZP)();
        i.useEffect(() => {
            l.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
                type: f.cd.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n,
            });
        }, [n]);
        let h = (0, r.jsx)("div", {
            className: _.emojis,
            children: t.slice(0, m).map((e, t) => {
                if (null == e.id) return null;
                let n = 2 === t,
                    i = (0, r.jsx)(
                        "div",
                        {
                            className: _.emojiBackground,
                            children: (0, r.jsx)("img", {
                                alt: e.name,
                                className: _.emoji,
                                src: c.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated,
                                    size: d.$U,
                                }),
                            }),
                        },
                        e.id,
                    );
                return n
                    ? i
                    : (0, r.jsx)(
                          s.ZP,
                          {
                              className: _.emojiMask,
                              mask: s.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                              children: i,
                          },
                          e.id,
                      );
            }),
        });
        return (0, r.jsxs)(a.RX, {
            className: _.upsell,
            children: [
                (0, r.jsx)(a.z5, {
                    children: (0, r.jsx)(a.BR, { children: p.intl.format(p.t.uEky42, { count: t.length }) }),
                }),
                (0, r.jsx)(a.dY, { children: h }),
            ],
        });
    };

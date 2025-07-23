n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(646574),
    s = n(543241),
    l = n(912648),
    c = n(747613),
    u = n(533432),
    d = n(149203),
    _ = n(185923),
    f = n(539490);
let p = (e) => {
    let { channel: t, accessory: n, pickerIntention: i, headerClassName: p, emojiListRef: h, onKeyDown: m, onFocus: g, autoFocus: E, searchBarRef: b, diversitySurrogate: y, isBurstReaction: O, onBurstReactionToggle: v, renderHeader: I, showAddEmojiButton: T } = e,
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    emojiListRef: h,
                    gridNavigatorId: d.Vr,
                    onKeyDown: m,
                    className: f.searchBar,
                    ref: b,
                    isFullRow: !1,
                    onFocus: g,
                    autoFocus: E,
                    defaultSearchPlaceholder: (0, s.nV)(i, O)
                }),
                T && (0, r.jsx)(l.Z, { channel: t }),
                i === _.Hz.REACTION
                    ? (0, r.jsx)(o.Z, {
                          checked: O,
                          onClick: v
                      })
                    : null,
                null != n
                    ? n
                    : (0, r.jsx)(c.Z, {
                          searchBarRef: b,
                          className: f.diversitySelector,
                          selectedSurrogate: y
                      })
            ]
        });
    return (0, r.jsx)('div', {
        className: a()(f.header, p),
        children: null != I ? I(S) : S
    });
};

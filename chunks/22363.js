n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(646574),
    s = n(543241),
    l = n(747613),
    c = n(533432),
    u = n(149203),
    d = n(185923),
    f = n(82845);
let p = (e) => {
    let { accessory: t, pickerIntention: n, headerClassName: i, emojiListRef: p, onKeyDown: _, onFocus: h, autoFocus: m, searchBarRef: g, hasTabWrapper: E, diversitySurrogate: v, isBurstReaction: b, onBurstReactionToggle: y, renderHeader: O } = e,
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Z, {
                    emojiListRef: p,
                    gridNavigatorId: u.Vr,
                    onKeyDown: _,
                    className: f.searchBar,
                    ref: g,
                    isFullRow: !1,
                    onFocus: h,
                    autoFocus: m,
                    defaultSearchPlaceholder: (0, s.nV)(n, b)
                }),
                n === d.Hz.REACTION
                    ? (0, r.jsx)('div', {
                          className: f.burstToggle,
                          children: (0, r.jsx)(a.Z, {
                              checked: b,
                              onClick: y
                          })
                      })
                    : null,
                null != t
                    ? t
                    : (0, r.jsx)(l.Z, {
                          searchBarRef: g,
                          className: f.diversitySelector,
                          hasTabWrapper: E,
                          selectedSurrogate: v
                      })
            ]
        });
    return (0, r.jsx)('div', {
        className: o()(f.header, i),
        children: null != O ? O(S) : S
    });
};

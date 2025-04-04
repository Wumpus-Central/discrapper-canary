n.d(t, { Z: () => _ });
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
    f = n(539490);
let _ = (e) => {
    let { accessory: t, pickerIntention: n, headerClassName: i, emojiListRef: _, onKeyDown: p, onFocus: h, autoFocus: m, searchBarRef: g, hasTabWrapper: E, diversitySurrogate: b, isBurstReaction: y, onBurstReactionToggle: v, renderHeader: O } = e,
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Z, {
                    emojiListRef: _,
                    gridNavigatorId: u.Vr,
                    onKeyDown: p,
                    className: f.searchBar,
                    ref: g,
                    isFullRow: !1,
                    onFocus: h,
                    autoFocus: m,
                    defaultSearchPlaceholder: (0, s.nV)(n, y)
                }),
                n === d.Hz.REACTION
                    ? (0, r.jsx)('div', {
                          className: f.burstToggle,
                          children: (0, r.jsx)(a.Z, {
                              checked: y,
                              onClick: v
                          })
                      })
                    : null,
                null != t
                    ? t
                    : (0, r.jsx)(l.Z, {
                          searchBarRef: g,
                          className: f.diversitySelector,
                          hasTabWrapper: E,
                          selectedSurrogate: b
                      })
            ]
        });
    return (0, r.jsx)('div', {
        className: o()(f.header, i),
        children: null != O ? O(I) : I
    });
};

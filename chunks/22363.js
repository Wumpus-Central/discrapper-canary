n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(646574),
    o = n(543241),
    l = n(747613),
    u = n(533432),
    c = n(149203),
    d = n(185923),
    f = n(754595);
let _ = (e) => {
    let { accessory: t, pickerIntention: n, headerClassName: r, emojiListRef: _, onKeyDown: p, onFocus: h, autoFocus: m, searchBarRef: g, hasTabWrapper: E, diversitySurrogate: v, isBurstReaction: y, onBurstReactionToggle: I, renderHeader: T } = e,
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    emojiListRef: _,
                    gridNavigatorId: c.Vr,
                    onKeyDown: p,
                    className: f.searchBar,
                    ref: g,
                    isFullRow: !1,
                    onFocus: h,
                    autoFocus: m,
                    defaultSearchPlaceholder: (0, o.nV)(n, y)
                }),
                n === d.Hz.REACTION
                    ? (0, i.jsx)('div', {
                          className: f.burstToggle,
                          children: (0, i.jsx)(s.Z, {
                              checked: y,
                              onClick: I
                          })
                      })
                    : null,
                null != t
                    ? t
                    : (0, i.jsx)(l.Z, {
                          searchBarRef: g,
                          className: f.diversitySelector,
                          hasTabWrapper: E,
                          selectedSurrogate: v
                      })
            ]
        });
    return (0, i.jsx)('div', {
        className: a()(f.header, r),
        children: null != T ? T(b) : b
    });
};

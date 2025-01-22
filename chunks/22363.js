var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(646574),
    l = r(543241),
    u = r(747613),
    c = r(533432),
    d = r(149203),
    f = r(185923),
    p = r(405156);
let h = (e) => {
    let { accessory: n, pickerIntention: r, headerClassName: a, emojiListRef: h, onKeyDown: _, onFocus: m, autoFocus: g, searchBarRef: E, hasTabWrapper: v, diversitySurrogate: y, isBurstReaction: b, onBurstReactionToggle: I, renderHeader: T } = e,
        S = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Z, {
                    emojiListRef: h,
                    gridNavigatorId: d.Vr,
                    onKeyDown: _,
                    className: p.searchBar,
                    ref: E,
                    isFullRow: !1,
                    onFocus: m,
                    autoFocus: g,
                    defaultSearchPlaceholder: (0, l.nV)(r, b)
                }),
                r === f.Hz.REACTION
                    ? (0, i.jsx)('div', {
                          className: p.burstToggle,
                          children: (0, i.jsx)(s.Z, {
                              checked: b,
                              onClick: I
                          })
                      })
                    : null,
                null != n
                    ? n
                    : (0, i.jsx)(u.Z, {
                          searchBarRef: E,
                          className: p.diversitySelector,
                          hasTabWrapper: v,
                          selectedSurrogate: y
                      })
            ]
        });
    return (0, i.jsx)('div', {
        className: o()(p.header, a),
        children: null != T ? T(S) : S
    });
};
n.Z = h;

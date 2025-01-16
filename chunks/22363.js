var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(646574),
    l = r(543241),
    u = r(747613),
    c = r(533432),
    d = r(149203),
    f = r(185923),
    _ = r(405156);
let h = (e) => {
    let { accessory: n, pickerIntention: r, headerClassName: a, emojiListRef: h, onKeyDown: p, onFocus: m, autoFocus: g, searchBarRef: E, hasTabWrapper: v, diversitySurrogate: I, isBurstReaction: T, onBurstReactionToggle: b, renderHeader: y } = e,
        S = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Z, {
                    emojiListRef: h,
                    gridNavigatorId: d.Vr,
                    onKeyDown: p,
                    className: _.searchBar,
                    ref: E,
                    isFullRow: !1,
                    onFocus: m,
                    autoFocus: g,
                    defaultSearchPlaceholder: (0, l.nV)(r, T)
                }),
                r === f.Hz.REACTION
                    ? (0, i.jsx)('div', {
                          className: _.burstToggle,
                          children: (0, i.jsx)(o.Z, {
                              checked: T,
                              onClick: b
                          })
                      })
                    : null,
                null != n
                    ? n
                    : (0, i.jsx)(u.Z, {
                          searchBarRef: E,
                          className: _.diversitySelector,
                          hasTabWrapper: v,
                          selectedSurrogate: I
                      })
            ]
        });
    return (0, i.jsx)('div', {
        className: s()(_.header, a),
        children: null != y ? y(S) : S
    });
};
n.Z = h;

n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(646574),
    s = n(543241),
    l = n(912648),
    c = n(747613),
    u = n(533432),
    d = n(149203),
    f = n(185923),
    p = n(101972);
let _ = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: _,
            emojiListRef: m,
            onKeyDown: h,
            onFocus: g,
            autoFocus: E,
            searchBarRef: b,
            diversitySurrogate: y,
            isBurstReaction: O,
            onBurstReactionToggle: v,
            renderHeader: S,
        } = e,
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    emojiListRef: m,
                    gridNavigatorId: d.Vr,
                    onKeyDown: h,
                    ref: b,
                    onFocus: g,
                    autoFocus: E,
                    defaultSearchPlaceholder: (0, s.nV)(i, O),
                }),
                i === f.Hz.REACTION
                    ? (0, r.jsx)(o.Z, {
                          checked: O,
                          onClick: v,
                      })
                    : null,
                null != n
                    ? n
                    : (0, r.jsx)(c.Z, {
                          searchBarRef: b,
                          className: p.diversitySelector,
                          selectedSurrogate: y,
                      }),
                (0, r.jsx)(l.Z, { channel: t }),
            ],
        });
    return (0, r.jsx)("div", {
        className: a()(p.header, _),
        children: null != S ? S(I) : I,
    });
};

n.d(t, { Z: () => p });
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
    _ = n(593391);
let p = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: p,
            emojiListRef: h,
            onKeyDown: m,
            onFocus: g,
            autoFocus: E,
            searchBarRef: b,
            diversitySurrogate: y,
            isBurstReaction: O,
            onBurstReactionToggle: v,
            renderHeader: I,
            showAddEmojiButton: T = !1,
        } = e,
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Z, {
                    emojiListRef: h,
                    gridNavigatorId: d.Vr,
                    onKeyDown: m,
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
                          className: _.diversitySelector,
                          selectedSurrogate: y,
                      }),
                T && (0, r.jsx)(l.Z, { channel: t }),
            ],
        });
    return (0, r.jsx)("div", {
        className: a()(_.header, p),
        children: null != I ? I(S) : S,
    });
};

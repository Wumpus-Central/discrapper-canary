t.d(a, { default: () => d });
var n = t(627968),
    i = t(64700),
    c = t(732955),
    s = t(397927),
    l = t(321563),
    r = t(782997),
    _ = t(652215),
    o = t(670455),
    m = t(985018);
function d(e) {
    let { onClose: a, transitionState: d } = e,
        [u, b] = i.useState(null);
    return (0, n.jsx)(c.aFV, {
        title: m.intl.string(m.t.BIbnR2),
        subtitle: m.intl.string(m.t.j2kf2m),
        onClose: a,
        actions: [],
        transitionState: d,
        children: (0, n.jsxs)(s.BJc, {
            gap: 16,
            children: [
                (0, n.jsx)(l.A, {
                    ratingOptions: [o.P0.GOOD, o.P0.BAD],
                    emojiKind: "thumb",
                    selectedRating: u,
                    onChangeRating: function (e) {
                        b(e),
                            null != e &&
                                ((0, r.A)({ rating: e }),
                                a(),
                                (0, s.mMO)(async () => {
                                    let { default: e } = await t.e("37836").then(t.bind(t, 845671));
                                    return (a) => (0, n.jsx)(e, { body: m.intl.string(m.t.IuPjpE), ...a });
                                }));
                    },
                }),
                (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t.zru1K0, { safetyCenterUrl: _.X7G.SAFETY_CENTER }),
                }),
            ],
        }),
    });
}

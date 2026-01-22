n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(966327),
    s = n(937008),
    o = n(427262),
    l = n(985018);
let c = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: c, recipients: u } = e,
        { giftRecipient: d, setGiftRecipient: f } = (0, s.Pv)();
    if (null == t) return null;
    let p = (e) => {
        n(e, t), f(e);
    };
    return (0, r.jsx)("div", {
        className: c,
        children: (0, r.jsx)(i.ZiE, {
            selectionMode: "single",
            label: l.intl.string(l.t.xFn72s),
            placeholder: l.intl.string(l.t.R0vK0N),
            value: d,
            onSelectionChange: p,
            options: u.map((e) => ({
                id: e.id,
                value: e,
                label: "".concat(o.Ay.getUserTag(e)),
                leading: (0, r.jsx)(a.A, {
                    user: e,
                    size: i._3J.SIZE_20,
                }),
            })),
        }),
    });
};

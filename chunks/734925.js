"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(966327),
    s = n(937008),
    o = n(427262),
    l = n(985018);
let u = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: u, recipients: c } = e,
        { giftRecipient: d, setGiftRecipient: _ } = (0, s.Pv)();
    if (null == t) return null;
    let f = (e) => {
        n(e, t), _(e);
    };
    return (0, r.jsx)("div", {
        className: u,
        children: (0, r.jsx)(i.ZiE, {
            selectionMode: "single",
            label: l.intl.string(l.t.xFn72s),
            placeholder: l.intl.string(l.t.R0vK0N),
            value: d,
            onSelectionChange: f,
            options: c.map((e) => ({
                id: e.id,
                value: e,
                label: `${o.Ay.getUserTag(e)}`,
                leading: (0, r.jsx)(a.A, { user: e, size: i._3J.SIZE_20 }),
            })),
        }),
    });
};

n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(700582),
    o = n(987209),
    s = n(51144),
    l = n(388032);
let c = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: c, recipients: u } = e,
        { giftRecipient: d, setGiftRecipient: f } = (0, o.wD)();
    if (null == t) return null;
    let p = (e) => {
        n(e, t), f(e);
    };
    return (0, r.jsx)("div", {
        className: c,
        children: (0, r.jsx)(i.VcW, {
            selectionMode: "single",
            label: l.intl.string(l.t.xFn72s),
            placeholder: l.intl.string(l.t.R0vK0N),
            value: d,
            onSelectionChange: p,
            options: u.map((e) => ({
                id: e.id,
                value: e,
                label: "".concat(s.ZP.getUserTag(e)),
                leading: (0, r.jsx)(a.Z, {
                    user: e,
                    size: i.EFr.SIZE_20,
                }),
            })),
        }),
    });
};

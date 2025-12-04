n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(668339),
    a = n(481060),
    o = n(700582),
    s = n(987209),
    l = n(51144),
    c = n(388032);
let u = (e) => {
    let {
            selectedSkuId: t,
            validateSelectedGift: n,
            className: u,
            searchableSelectWrapperClassName: d,
            recipients: f,
        } = e,
        { giftRecipient: p, setGiftRecipient: _ } = (0, s.wD)();
    if (null == t) return null;
    let m = (e) => {
        n(e, t), _(e);
    };
    return (0, r.jsx)("div", {
        className: u,
        children: (0, r.jsx)(i.d, {
            wrapperClassName: d,
            label: c.intl.string(c.t.xFn72s),
            placeholder: c.intl.string(c.t.R0vK0N),
            renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, r.jsx)(o.Z, {
                          user: e.value,
                          size: a.EFr.SIZE_20,
                      }),
            value: p,
            onChange: m,
            options: f.map((e) => ({
                value: e,
                label: "".concat(l.ZP.getUserTag(e)),
            })),
        }),
    });
};

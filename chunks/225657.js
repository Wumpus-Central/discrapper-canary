n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(700582),
    o = n(987209),
    s = n(51144),
    l = n(388032);
let c = (e) => {
    let {
            selectedSkuId: t,
            validateSelectedGift: n,
            className: c,
            searchableSelectWrapperClassName: u,
            recipients: d,
        } = e,
        { giftRecipient: f, setGiftRecipient: p } = (0, o.wD)();
    if (null == t) return null;
    let _ = (e) => {
        n(e, t), p(e);
    };
    return (0, r.jsx)("div", {
        className: c,
        children: (0, r.jsx)(i.VcW, {
            wrapperClassName: u,
            label: l.intl.string(l.t.xFn72s),
            placeholder: l.intl.string(l.t.R0vK0N),
            renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, r.jsx)(a.Z, {
                          user: e.value,
                          size: i.EFr.SIZE_20,
                      }),
            value: f,
            onChange: _,
            options: d.map((e) => ({
                value: e,
                label: "".concat(s.ZP.getUserTag(e)),
            })),
        }),
    });
};

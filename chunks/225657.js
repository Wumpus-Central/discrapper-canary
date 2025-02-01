n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(700582),
    o = n(987209),
    l = n(699516),
    u = n(594174),
    c = n(51144),
    d = n(388032);
let f = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: f } = e,
        _ = (0, r.Wu)([l.Z], () => l.Z.getFriendIDs()),
        p = (0, r.Wu)([u.default], () => u.default.filter((e) => _.includes(e.id) && !e.bot), [_]),
        { giftRecipient: h, setGiftRecipient: m } = (0, o.wD)();
    if (null == t) return null;
    let g = (e) => {
        n(e, t), m(e);
    };
    return (0, i.jsxs)('div', {
        className: f,
        children: [
            (0, i.jsx)(a.vwX, { children: d.intl.string(d.t.xFn72t) }),
            (0, i.jsx)(a.VcW, {
                placeholder: d.intl.string(d.t.R0vK0N),
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, i.jsx)(s.Z, {
                              user: e.value,
                              size: a.EFr.SIZE_20
                          }),
                value: h,
                onChange: g,
                options: p.map((e) => ({
                    value: e,
                    label: ''.concat(c.ZP.getUserTag(e))
                }))
            })
        ]
    });
};

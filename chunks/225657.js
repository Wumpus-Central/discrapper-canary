n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(700582),
    s = n(987209),
    l = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(388032);
let f = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: f } = e,
        _ = (0, i.Wu)([l.Z], () => l.Z.getFriendIDs()),
        p = (0, i.Wu)([c.default], () => c.default.filter((e) => _.includes(e.id) && !e.bot), [_]),
        { giftRecipient: h, setGiftRecipient: m } = (0, s.wD)();
    if (null == t) return null;
    let g = (e) => {
        n(e, t), m(e);
    };
    return (0, r.jsxs)('div', {
        className: f,
        children: [
            (0, r.jsx)(o.vwX, { children: d.NW.string(d.t.xFn72t) }),
            (0, r.jsx)(o.VcW, {
                placeholder: d.NW.string(d.t.R0vK0N),
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, r.jsx)(a.Z, {
                              user: e.value,
                              size: o.EFr.SIZE_20
                          }),
                value: h,
                onChange: g,
                options: p.map((e) => ({
                    value: e,
                    label: ''.concat(u.ZP.getUserTag(e))
                }))
            })
        ]
    });
};

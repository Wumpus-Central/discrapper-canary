n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(700582),
    s = n(987209),
    l = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(388032);
let _ = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: _ } = e,
        f = (0, i.Wu)([l.Z], () => l.Z.getFriendIDs()),
        p = (0, i.Wu)([c.default], () => c.default.filter((e) => f.includes(e.id) && !e.bot), [f]),
        { giftRecipient: h, setGiftRecipient: m } = (0, s.wD)();
    if (null == t) return null;
    let g = (e) => {
        (n(e, t), m(e));
    };
    return (0, r.jsxs)('div', {
        className: _,
        children: [
            (0, r.jsx)(a.vwX, { children: d.intl.string(d.t.xFn72t) }),
            (0, r.jsx)(a.VcW, {
                placeholder: d.intl.string(d.t.R0vK0N),
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, r.jsx)(o.Z, {
                              user: e.value,
                              size: a.EFr.SIZE_20
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

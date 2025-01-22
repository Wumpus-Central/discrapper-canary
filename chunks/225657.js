var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(700582),
    l = r(987209),
    u = r(699516),
    c = r(594174),
    d = r(51144),
    f = r(388032);
let p = (e) => {
    let { selectedSkuId: n, validateSelectedGift: r, className: p } = e,
        h = (0, a.Wu)([u.Z], () => u.Z.getFriendIDs()),
        _ = (0, a.Wu)([c.default], () => c.default.filter((e) => h.includes(e.id) && !e.bot), [h]),
        { giftRecipient: m, setGiftRecipient: g } = (0, l.wD)();
    if (null == n) return null;
    let E = (e) => {
        r(e, n), g(e);
    };
    return (0, i.jsxs)('div', {
        className: p,
        children: [
            (0, i.jsx)(o.FormTitle, { children: f.intl.string(f.t.xFn72t) }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: f.intl.string(f.t.R0vK0N),
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, i.jsx)(s.Z, {
                              user: e.value,
                              size: o.AvatarSizes.SIZE_20
                          }),
                value: m,
                onChange: E,
                options: _.map((e) => ({
                    value: e,
                    label: ''.concat(d.ZP.getUserTag(e))
                }))
            })
        ]
    });
};
n.Z = p;

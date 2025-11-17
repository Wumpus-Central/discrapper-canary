n.d(t, { Z: () => f });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(700582),
    s = n(987209),
    l = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(388032);
let f = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: f, searchableSelectWrapperClassName: _ } = e,
        p = (0, i.Wu)([l.Z], () => l.Z.getFriendIDs()),
        h = (0, i.Wu)([c.default], () => c.default.filter((e) => p.includes(e.id) && !e.bot), [p]),
        { giftRecipient: m, setGiftRecipient: g } = (0, s.wD)();
    if (null == t) return null;
    let E = (e) => {
        n(e, t), g(e);
    };
    return (0, r.jsx)("div", {
        className: f,
        children: (0, r.jsx)(a.VcW, {
            wrapperClassName: _,
            label: d.intl.string(d.t.xFn72s),
            placeholder: d.intl.string(d.t.R0vK0N),
            renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, r.jsx)(o.Z, {
                          user: e.value,
                          size: a.EFr.SIZE_20,
                      }),
            value: m,
            onChange: E,
            options: h.map((e) => ({
                value: e,
                label: "".concat(u.ZP.getUserTag(e)),
            })),
        }),
    });
};

n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(700582),
    s = n(987209),
    l = n(752048),
    c = n(699516),
    u = n(594174),
    d = n(51144),
    f = n(69143),
    _ = n(388032);
let p = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: p, searchableSelectWrapperClassName: h } = e,
        { affineGiftingEnabled: m, affinityThreshold: g } = f.Z.useConfig({
            location: "Collectibles Gift Recipient Picker",
        }),
        E = (0, i.Wu)([c.Z], () => c.Z.getFriendIDs()),
        b = (0, i.Wu)([l.Z], () =>
            l.Z.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r } = e;
                    return !t && (n >= g || r > g);
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        y = [...E, ...(m ? b : [])],
        O = (0, i.Wu)([u.default], () => u.default.filter((e) => y.includes(e.id) && !e.bot), [y]),
        { giftRecipient: v, setGiftRecipient: I } = (0, s.wD)();
    if (null == t) return null;
    let T = (e) => {
        n(e, t), I(e);
    };
    return (0, r.jsx)("div", {
        className: p,
        children: (0, r.jsx)(a.VcW, {
            wrapperClassName: h,
            label: _.intl.string(_.t.xFn72s),
            placeholder: _.intl.string(_.t.R0vK0N),
            renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, r.jsx)(o.Z, {
                          user: e.value,
                          size: a.EFr.SIZE_20,
                      }),
            value: v,
            onChange: T,
            options: O.map((e) => ({
                value: e,
                label: "".concat(d.ZP.getUserTag(e)),
            })),
        }),
    });
};

n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(700582),
    s = n(987209),
    l = n(752048),
    c = n(837411),
    u = n(699516),
    d = n(594174),
    f = n(51144),
    _ = n(69143),
    p = n(388032);
let h = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: h, searchableSelectWrapperClassName: m } = e,
        { affineGiftingEnabled: g, affinityThreshold: E } = _.Z.useConfig({
            location: "Collectibles Gift Recipient Picker",
        }),
        b = (0, i.Wu)([u.Z], () => u.Z.getFriendIDs()),
        y = (0, i.Wu)([l.Z], () =>
            l.Z.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: i } = e,
                        a = !t && (n >= E || r >= E),
                        o = (0, c.n)(i);
                    return a && o;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        O = [...b, ...(g ? y : [])],
        v = (0, i.Wu)([d.default], () => d.default.filter((e) => O.includes(e.id) && !e.bot), [O]),
        { giftRecipient: I, setGiftRecipient: T } = (0, s.wD)();
    if (null == t) return null;
    let S = (e) => {
        n(e, t), T(e);
    };
    return (0, r.jsx)("div", {
        className: h,
        children: (0, r.jsx)(a.VcW, {
            wrapperClassName: m,
            label: p.intl.string(p.t.xFn72s),
            placeholder: p.intl.string(p.t.R0vK0N),
            renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, r.jsx)(o.Z, {
                          user: e.value,
                          size: a.EFr.SIZE_20,
                      }),
            value: I,
            onChange: S,
            options: v.map((e) => ({
                value: e,
                label: "".concat(f.ZP.getUserTag(e)),
            })),
        }),
    });
};

n.d(t, { x: () => d });
var i = n(442837),
    l = n(594174),
    r = n(359119),
    s = n(237292),
    a = n(13279);
let d = (e) => {
    let t = (0, s.y0)({ location: 'context-menu-item' }),
        n = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        d = (0, a.z)(e.id, 'context-menu-item');
    return (null == n ? void 0 : n.isStaff()) === !0 && t && e.isDM()
        ? {
              isTier1: (null == d ? void 0 : d.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == d ? void 0 : d.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2
          }
        : null;
};

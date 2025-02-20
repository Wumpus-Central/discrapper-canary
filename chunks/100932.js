n.d(t, { x: () => s });
var r = n(442837),
    i = n(594174),
    l = n(359119),
    a = n(237292),
    o = n(13279);
let s = (e) => {
    let t = (0, a.y0)({ location: 'context-menu-item' }),
        n = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        s = (0, o.z)(e.id, 'context-menu-item');
    return (null == n ? void 0 : n.isStaff()) === !0 && t && e.isDM()
        ? {
              isTier1: (null == s ? void 0 : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == s ? void 0 : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
          }
        : null;
};

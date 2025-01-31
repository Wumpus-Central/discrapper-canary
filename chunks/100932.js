e.d(t, { x: () => d });
var i = e(442837),
    l = e(594174),
    r = e(359119),
    a = e(237292),
    s = e(13279);
let d = (n) => {
    let t = (0, a.y0)({ location: 'context-menu-item' }),
        e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        d = (0, s.z)(n.id, 'context-menu-item');
    return (null == e ? void 0 : e.isStaff()) === !0 && t && n.isDM()
        ? {
              isTier1: (null == d ? void 0 : d.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == d ? void 0 : d.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2
          }
        : null;
};

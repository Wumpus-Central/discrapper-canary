t.d(e, { x: () => a });
var i = t(442837),
    l = t(594174),
    r = t(359119),
    d = t(237292),
    s = t(13279);
let a = (n) => {
    let e = (0, d.y0)({ location: 'context-menu-item' }),
        t = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        a = (0, s.z)(n.id, 'context-menu-item');
    return (null == t ? void 0 : t.isStaff()) === !0 && e && n.isDM()
        ? {
              isTier1: (null == a ? void 0 : a.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == a ? void 0 : a.type) === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2
          }
        : null;
};

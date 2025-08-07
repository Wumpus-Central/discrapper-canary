e.d(n, { x: () => d });
var i = e(442837),
    r = e(594174),
    l = e(359119),
    s = e(237292),
    a = e(13279);
let d = (t) => {
    let n = (0, s.y0)({ location: "context-menu-item" }),
        e = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        d = (0, a.z)(t.id, "context-menu-item");
    return (null == e ? void 0 : e.isStaff()) === !0 && n && t.isDM()
        ? {
              isTier1: (null == d ? void 0 : d.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == d ? void 0 : d.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
          }
        : null;
};

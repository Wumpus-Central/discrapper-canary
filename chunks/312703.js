n.d(t, { n3: () => r });
var i = n(823379),
    l = n(44136),
    a = n(354459);
function r(e, t, n) {
    return null == t || t.type === a.fO.ACTIVITY ? [] : [t.type === a.fO.STREAM ? e.find((e) => e.type === a.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, l.ZP)(e)) : null, t.type === a.fO.USER ? e.find((e) => e.type === a.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find((e) => e.type === a.fO.USER && e.id === n && (0, l.ZP)(e)) : null].filter(i.lm);
}

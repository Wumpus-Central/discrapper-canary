n.d(t, { n3: () => a });
var r = n(823379),
    i = n(44136),
    o = n(354459);
function a(e, t, n) {
    return null == t || t.type === o.fO.ACTIVITY ? [] : [t.type === o.fO.STREAM ? e.find((e) => e.type === o.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, i.ZP)(e)) : null, t.type === o.fO.USER ? e.find((e) => e.type === o.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find((e) => e.type === o.fO.USER && e.id === n && (0, i.ZP)(e)) : null].filter(r.lm);
}

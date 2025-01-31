n.d(t, { s: () => r });
var i = n(314897);
function r(e) {
    var t, n;
    let r = i.default.getId();
    return null != r && !!((null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(r)) || (null === (n = e.addedMembers) || void 0 === n ? void 0 : n.some((e) => e.userId === r)));
}

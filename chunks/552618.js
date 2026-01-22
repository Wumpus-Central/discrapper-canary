n.d(t, {
    J: () => c,
    c: () => l,
});
var r = n(95701),
    i = n(734057),
    a = n(576705),
    s = n(652215);
let o = s.hVb.VIEW_CHANNEL | s.hVb.READ_MESSAGE_HISTORY;

function l(e) {
    return (
        null != e &&
        (e.type === s.rbe.DM || e.type === s.rbe.GROUP_DM || ((0, r.pQ)(e.type) && a.A.canBasicChannel(o, e)))
    );
}

function c(e) {
    return null != e && l(i.A.getBasicChannel(e));
}

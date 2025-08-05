n.d(t, {
    a: () => i,
    g: () => a
});
var r = n(911969);
function i(e) {
    return null != e.interactionMetadata;
}
function a(e) {
    var t, n;
    return (null == (t = e.interactionMetadata) ? void 0 : t.type) === r.B8.APPLICATION_COMMAND && (null == (n = e.interactionMetadata) ? void 0 : n.command_type) === r.yU.PRIMARY_ENTRY_POINT;
}

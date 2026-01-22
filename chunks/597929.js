n.d(t, {
    V: () => a,
    _: () => i,
});
var r = n(155718);

function i(e) {
    return null != e.interactionMetadata;
}

function a(e) {
    var t, n;
    return (
        (null == (t = e.interactionMetadata) ? void 0 : t.type) === r.G4.APPLICATION_COMMAND &&
        (null == (n = e.interactionMetadata) ? void 0 : n.command_type) === r.kc.PRIMARY_ENTRY_POINT
    );
}

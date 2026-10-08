n.d(t, { V: () => a, _: () => l });
var i = n(127258),
    s = n(155718);
function l(e) {
    return null != e.interactionMetadata;
}
function a(e) {
    return (
        e.interactionMetadata?.type === i.G.APPLICATION_COMMAND &&
        e.interactionMetadata?.command_type === s.kc.PRIMARY_ENTRY_POINT
    );
}

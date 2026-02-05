n.d(t, { V: () => a, _: () => l });
var i = n(155718);
function l(e) {
    return null != e.interactionMetadata;
}
function a(e) {
    return (
        e.interactionMetadata?.type === i.G4.APPLICATION_COMMAND &&
        e.interactionMetadata?.command_type === i.kc.PRIMARY_ENTRY_POINT
    );
}

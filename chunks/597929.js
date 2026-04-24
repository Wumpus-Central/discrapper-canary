n.d(t, { V: () => l, _: () => s });
var i = n(155718);
function s(e) {
    return null != e.interactionMetadata;
}
function l(e) {
    return (
        e.interactionMetadata?.type === i.G4.APPLICATION_COMMAND &&
        e.interactionMetadata?.command_type === i.kc.PRIMARY_ENTRY_POINT
    );
}

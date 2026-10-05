n.d(t, { V: () => a, _: () => s });
var i = n(127258),
    l = n(155718);
function s(e) {
    return null != e.interactionMetadata;
}
function a(e) {
    return (
        e.interactionMetadata?.type === i.G.APPLICATION_COMMAND &&
        e.interactionMetadata?.command_type === l.kc.PRIMARY_ENTRY_POINT
    );
}

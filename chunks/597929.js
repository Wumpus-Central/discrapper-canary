"use strict";
n.d(t, { V: () => s, _: () => r });
var i = n(155718);
function r(e) {
    return null != e.interactionMetadata;
}
function s(e) {
    return (
        e.interactionMetadata?.type === i.G4.APPLICATION_COMMAND &&
        e.interactionMetadata?.command_type === i.kc.PRIMARY_ENTRY_POINT
    );
}

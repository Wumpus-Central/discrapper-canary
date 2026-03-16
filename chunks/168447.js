"use strict";
n.d(t, { Y: () => s });
var r = n(311907),
    i = n(349435);
function s(e) {
    return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e]).filter(
        (e) => e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2,
    );
}

"use strict";
n.d(t, { Y: () => s });
var i = n(17928),
    r = n(349435);
function s(e) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e]).filter(
        (e) => e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_2,
    );
}

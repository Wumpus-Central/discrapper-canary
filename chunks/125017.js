"use strict";
function i(e) {
    if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2)
        return { partySize: -1, maxPartySize: -1 };
    let [t, n] = e.party.size;
    return { partySize: t, maxPartySize: n };
}
n.d(t, { _: () => i });

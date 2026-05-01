"use strict";
n.d(t, { V: () => r });
var i = n(328153);
function r() {
    let e = i.Ay.getCurrentGameForAnalytics();
    return { game_name: null != e ? e.name : null, game_id: null != e ? e.id : null };
}

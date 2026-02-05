"use strict";
n.d(t, { V: () => i });
var r = n(15285);
function i() {
    let e = r.Ay.getCurrentGameForAnalytics();
    return { game_name: null != e ? e.name : null, game_id: null != e ? e.id : null };
}

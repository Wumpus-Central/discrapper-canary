"use strict";
n.d(t, { A: () => i });
var r = n(652215);
function i(e) {
    return (
        (e.type === r.$pd.LISTENING || e.type === r.$pd.WATCHING) &&
        e.timestamps?.start != null &&
        null != e.timestamps.end
    );
}

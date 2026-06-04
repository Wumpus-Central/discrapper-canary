"use strict";
n.d(t, { A: () => r });
var i = n(652215);
function r(e) {
    return (
        (e.type === i.$pd.LISTENING || e.type === i.$pd.WATCHING) &&
        e.timestamps?.start != null &&
        null != e.timestamps.end
    );
}

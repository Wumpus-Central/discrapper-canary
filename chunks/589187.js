"use strict";
n.d(t, { v: () => s });
var i = n(155718),
    r = n(587895);
function s(e, t) {
    if (null === e.id || void 0 === e.id) return !1;
    let n = r.A.getApplication(e.id);
    return (
        null != n &&
        null != n.linkedGames &&
        n.linkedGames.length > 0 &&
        void 0 !==
            n.linkedGames.find((e) => {
                var n;
                return e.type === i.Mh.LINKED && ((n = e.id), null != t.find((e) => e.application_id === n));
            })
    );
}

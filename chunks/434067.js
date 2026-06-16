"use strict";
n.d(t, { w: () => r });
var i = n(3388);
function r(e, t) {
    (0, i.N)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}

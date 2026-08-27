"use strict";
function n(...e) {
    return (...t) => {
        for (let r of e) "function" == typeof r && r(...t);
    };
}
r.d(t, { c: () => n });

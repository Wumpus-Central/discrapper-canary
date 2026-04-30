"use strict";
function i(e) {
    let [, , t, n] = e.split("/");
    return { collection: t ?? null, story: n ?? null };
}
n.r(t), n.d(t, { parsePlaygroundUrl: () => i });

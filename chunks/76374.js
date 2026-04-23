"use strict";
n.d(t, { a: () => a });
var r = n(562465),
    i = n(198982),
    s = n(652215);
async function a(e, t) {
    try {
        await r.Bo.patch({ url: s.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e), body: t, rejectWithError: !1 });
    } catch (e) {
        throw new i.LG(e);
    }
}

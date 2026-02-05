"use strict";
n.d(t, { cf: () => o });
var r = n(626584);
n(585211);
var i = n(824606);
let a = new r.A("GifProviderConfig"),
    s = "tenor";
function o() {
    try {
        return i.q.getConfig({ location: "gif_picker" }).provider;
    } catch (e) {
        return a.warn("Error getting provider for API request:", e), s;
    }
}

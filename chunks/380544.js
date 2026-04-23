"use strict";
n.d(t, { cf: () => a });
var r = n(626584);
n(585211);
var i = n(824606);
let s = new r.A("GifProviderConfig");
function a() {
    try {
        return i.q.getConfig({ location: "gif_picker" }).provider;
    } catch (e) {
        return s.warn("Error getting provider for API request:", e), "tenor";
    }
}

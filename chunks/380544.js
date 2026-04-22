r.d(t, { cf: () => i });
var s = r(626584);
r(585211);
var l = r(824606);
let n = new s.A("GifProviderConfig");
function i() {
    try {
        return l.q.getConfig({ location: "gif_picker" }).provider;
    } catch (e) {
        return n.warn("Error getting provider for API request:", e), "tenor";
    }
}

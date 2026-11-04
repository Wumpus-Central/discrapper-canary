let i = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]),
    r = new Set([".heic", ".heif", ".hif"]),
    a = /\.(heic|heif|hif)$/i,
    s = new Set(["image/jxr", "image/vnd.ms-photo"]),
    l = new Set([".jxr", ".wdp", ".hdp"]),
    o = /\.(jxr|wdp|hdp)$/i;
function d(e) {
    let t = "string" == typeof e.name ? e.name : "",
        n = t.lastIndexOf(".");
    return n < 0 ? null : t.slice(n).toLowerCase();
}
n.d(
    t,
    {},
    {
        DP: function (e) {
            return a.test(e) ? e.replace(a, ".jpg") : o.test(e) ? e.replace(o, ".jpg") : `${e}.jpg`;
        },
        E5: function (e) {
            if (i.has(e.type)) return !0;
            let t = d(e);
            return null != t && r.has(t);
        },
        II: function (e) {
            return "" !== e.type
                ? e.type
                : ("string" == typeof e.name ? e.name : "").toLowerCase().endsWith(".heic")
                  ? "image/heic"
                  : "image/heif";
        },
        NX: function (e) {
            return "" !== e.type ? e.type : "image/jxr";
        },
        Tn: function (e) {
            if (s.has(e.type)) return !0;
            let t = d(e);
            return null != t && l.has(t);
        },
    },
);

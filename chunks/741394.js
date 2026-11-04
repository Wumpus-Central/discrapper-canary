var i = n(723702);
function r(e, t) {
    let n = e.split(/[/\\]/),
        i = "" !== n[n.length - 1] ? n[n.length - 1] : e;
    return (null != t && i.endsWith(t) && (i = i.slice(0, -t.length)), i);
}
n.d(
    t,
    {},
    {
        CN: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let r = (0, i.uF)() ? "\\" : "/";
            return t.filter((e) => e.length > 0).join(r);
        },
        kh: function (e) {
            let t = r(e),
                n = t.lastIndexOf(".");
            return n <= 0 ? t : t.slice(0, n);
        },
        uk: r,
    },
);

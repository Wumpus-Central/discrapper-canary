var r = n(581079),
    i = /\.textClipping$/,
    a = {
        "text/plain": !0,
        "text/html": !0,
        "text/rtf": !0,
    },
    o = 5000;
function s(e, t) {
    if (!n.g.FileReader || (e.type && !(e.type in a))) return void t("");
    if ("" === e.type) {
        var o = "";
        i.test(e.name) && (o = e.name.replace(i, "")), t(o);
        return;
    }
    var s = new FileReader();
    (s.onload = function () {
        var e = s.result;
        "string" != typeof e && r(!1), t(e);
    }),
        (s.onerror = function () {
            t("");
        }),
        s.readAsText(e);
}
e.exports = function (e, t) {
    var n = 0,
        r = [];
    e.forEach(function (i) {
        s(i, function (i) {
            n++, i && r.push(i.slice(0, o)), n == e.length && t(r.join("\r"));
        });
    });
};

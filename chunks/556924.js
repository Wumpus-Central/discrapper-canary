var n = r(946258),
    i = r(102736),
    o = r(780661),
    a = r(398448);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = e.getStartOffset(),
                i = e.getStartKey(),
                a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
            return o(t, n.getForward(a).length || 1);
        },
        "forward",
    );
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
};

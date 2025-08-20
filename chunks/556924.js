var r = n(946258),
    i = n(102736),
    a = n(780661),
    o = n(398448);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset(),
                i = t.getStartKey(),
                o = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
            return a(e, r.getForward(o).length || 1);
        },
        "forward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};

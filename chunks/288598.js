var n = r(668413),
    o = r(869639),
    a = r(126331),
    c = r(418227);
e.exports = function (e) {
    var t = c(
        e,
        function (e) {
            var t = e.getSelection(),
                r = t.getStartOffset(),
                o = t.getStartKey(),
                c = e.getCurrentContent().getBlockForKey(o).getText().slice(r);
            return a(e, n.getForward(c).length || 1);
        },
        "forward",
    );
    return t === e.getCurrentContent() ? e : o.push(e, t, "remove-range");
};

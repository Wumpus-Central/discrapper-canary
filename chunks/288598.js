var r = n(668413),
    i = n(869639),
    a = n(126331),
    s = n(418227);
e.exports = function (e) {
    var t = s(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset(),
                i = t.getStartKey(),
                s = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
            return a(e, r.getForward(s).length || 1);
        },
        "forward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};

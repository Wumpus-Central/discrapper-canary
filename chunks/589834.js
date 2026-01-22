var r = n(668413),
    i = n(869639),
    a = n(181621),
    s = n(418227);
e.exports = function (e) {
    var t = s(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset();
            if (0 === n) return a(e, 1);
            var i = t.getStartKey(),
                s = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
            return a(e, r.getBackward(s).length || 1);
        },
        "backward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};

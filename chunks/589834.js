var n = r(668413),
    o = r(869639),
    a = r(181621),
    c = r(418227);
e.exports = function (e) {
    var t = c(
        e,
        function (e) {
            var t = e.getSelection(),
                r = t.getStartOffset();
            if (0 === r) return a(e, 1);
            var o = t.getStartKey(),
                c = e.getCurrentContent().getBlockForKey(o).getText().slice(0, r);
            return a(e, n.getBackward(c).length || 1);
        },
        "backward",
    );
    return t === e.getCurrentContent() ? e : o.push(e, t, "remove-range");
};

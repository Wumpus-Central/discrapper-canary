var r = n(172367),
    i = n(733359),
    o = n(802801),
    a = n(473297);
e.exports = function (e) {
    var t = a(
        e,
        function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getAnchorKey(),
                a = t.getAnchorOffset(),
                s = n.getBlockForKey(r).getText()[a];
            return o(e, s ? i.getUTF16Length(s, 0) : 1);
        },
        "forward",
    );
    if (t === e.getCurrentContent()) return e;
    var n = e.getSelection();
    return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range");
};

var r = n(869639),
    i = n(1140),
    a = n(126331),
    s = n(418227);
e.exports = function (e) {
    var t = s(
        e,
        function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getAnchorKey(),
                s = t.getAnchorOffset(),
                o = n.getBlockForKey(r).getText()[s];
            return a(e, o ? i.getUTF16Length(o, 0) : 1);
        },
        "forward",
    );
    if (t === e.getCurrentContent()) return e;
    var n = e.getSelection();
    return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range");
};

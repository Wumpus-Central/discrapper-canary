e.exports = function (e) {
    var t = e.getSelection(),
        n = t.getAnchorKey(),
        r = e.getBlockTree(n),
        i = t.getStartOffset(),
        a = !1;
    return (
        r.some(function (e) {
            return i === e.get("start")
                ? ((a = !0), !0)
                : i < e.get("end") &&
                      e.get("leaves").some(function (e) {
                          return i === e.get("start") && ((a = !0), !0);
                      });
        }),
        a
    );
};

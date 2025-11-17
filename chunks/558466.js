n.d(t, { j: () => c });
var r = n(806262),
    i = n(645537),
    a = n(981166),
    o = n(218769),
    s = n(473749);
function l(e) {
    return e && e.__esModule ? e.default : e;
}
function c(e) {
    let t = (0, o.q)(l(r.Z), "@react-aria/grid"),
        n = (0, a.Kf)(),
        c =
            ("pointer" === n || "virtual" === n || null == n) &&
            "undefined" != typeof window &&
            "ontouchstart" in window,
        u = (0, s.useMemo)(() => {
            let n,
                r = e.selectionManager.selectionMode,
                i = e.selectionManager.selectionBehavior;
            return (
                c && (n = t.format("longPressToSelect")),
                "replace" === i && "none" !== r && e.hasItemActions ? n : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, c]);
    return (0, i.P)(u);
}

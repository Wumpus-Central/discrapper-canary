n.d(t, {
    m: () => c,
});
var r = n(199407),
    i = n(807177),
    a = n(885714),
    s = n(47276),
    o = n(64700);

function l(e) {
    return e && e.__esModule ? e.default : e;
}

function c(e) {
    let t = (0, s.o)(l(r.A), "@react-aria/grid"),
        n = (0, a.lb)(),
        c = ("pointer" === n || "virtual" === n || null == n) && "u" > typeof window && "ontouchstart" in window,
        u = (0, o.useMemo)(() => {
            let n,
                r = e.selectionManager.selectionMode,
                i = e.selectionManager.selectionBehavior;
            return (
                c && (n = t.format("longPressToSelect")),
                "replace" === i && "none" !== r && e.hasItemActions ? n : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, c]);
    return (0, i.I)(u);
}

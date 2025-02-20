n.d(t, { Z: () => o });
var r = n(192379),
    i = n(887490);
function o(e, t, n) {
    let o = r.useCallback(
            (e) => {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let r = n(e);
                return r && (e.preventDefault(), e.stopPropagation()), r;
            },
            [t, n]
        ),
        a = r.useCallback(
            (t) => {
                let { event: n } = t;
                o(n) || (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.bN.focus(e)));
            },
            [e, o]
        );
    return {
        handlePaste: o,
        handleGlobalPaste: a
    };
}

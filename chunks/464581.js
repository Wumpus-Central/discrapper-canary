n.d(t, { Z: () => a });
var i = n(192379),
    r = n(887490);
function a(e, t, n) {
    let a = i.useCallback(
            (e) => {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let i = n(e);
                return i && (e.preventDefault(), e.stopPropagation()), i;
            },
            [t, n]
        ),
        s = i.useCallback(
            (t) => {
                let { event: n } = t;
                a(n) || (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), r.bN.focus(e)));
            },
            [e, a]
        );
    return {
        handlePaste: a,
        handleGlobalPaste: s
    };
}

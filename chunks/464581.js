r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(887490);
function o(e, n, r) {
    let o = i.useCallback(
            (e) => {
                if (n) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let i = r(e);
                return i && (e.preventDefault(), e.stopPropagation()), i;
            },
            [n, r]
        ),
        s = i.useCallback(
            (n) => {
                let { event: r } = n;
                !o(r) && (r.preventDefault(), r.stopPropagation(), null != r.clipboardData && (e.insertData(r.clipboardData), a.bN.focus(e)));
            },
            [e, o]
        );
    return {
        handlePaste: o,
        handleGlobalPaste: s
    };
}

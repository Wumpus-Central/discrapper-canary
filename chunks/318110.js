n.d(t, { p: () => s });
var r = n(192379),
    i = n(410030),
    o = n(4242);
function a(e, t, n, r) {
    let i = (0, o.wE)(e, t, n, r);
    if (null != i) return 'linear-gradient(90deg, '.concat(i.left, ' 0%, ').concat(i.right, ' 100%)');
}
function s(e, t, n) {
    let s = (0, i.ZP)();
    return (0, r.useMemo)(
        () =>
            null == e
                ? {}
                : {
                      borderColor: (0, o.bt)(e.borderColor, t, n),
                      background: a(e.palette, s, t, n)
                  },
        [e, t, n, s]
    );
}

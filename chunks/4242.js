n.d(t, { p: () => l });
var r = n(192379),
    i = n(410030),
    o = n(231338);
function a(e, t, n) {
    return null == e ? void 0 : ('#' !== e.charAt(0) && (e = '#' + e), 7 !== e.length) ? void 0 : n ? e + 'FF' : t ? e + '99' : e + '4D';
}
function s(e, t, n, r) {
    if (null == e) return;
    let i = t === o.BR.LIGHT ? e.lightBackground : e.darkBackground,
        a = n || r,
        s = ''.concat(i).concat(a ? '1A' : '00'),
        l = ''.concat(i).concat(a ? '80' : '4D');
    return 'linear-gradient(90deg, '.concat(s, ' 0%, ').concat(l, ' 100%)');
}
function l(e, t, n) {
    let o = (0, i.ZP)();
    return (0, r.useMemo)(
        () =>
            null == e
                ? {}
                : {
                      borderColor: a(e.borderColor, t, n),
                      background: s(e.palette, o, t, n)
                  },
        [e, t, n, o]
    );
}

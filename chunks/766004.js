n.d(t, { M: () => l });
var i = n(192379),
    r = n(410030),
    a = n(231338);
function s(e, t, n) {
    return null == e ? void 0 : ('#' !== e.charAt(0) && (e = '#' + e), 7 !== e.length) ? void 0 : n ? e + 'FF' : t ? e + '99' : e + '4D';
}
function o(e, t, n, i) {
    if (null == e) return;
    let r = t === a.BR.LIGHT ? e.lightBackground : e.darkBackground,
        s = n || i,
        o = ''.concat(r).concat(s ? '1A' : '00'),
        l = ''.concat(r).concat(s ? '80' : '4D');
    return 'linear-gradient(90deg, '.concat(o, ' 0%, ').concat(l, ' 100%)');
}
function l(e, t, n) {
    let a = (0, r.ZP)();
    return (0, i.useMemo)(
        () =>
            null == e
                ? {}
                : {
                      borderColor: s(e.borderColor, t, n),
                      background: o(e.palette, a, t, n)
                  },
        [e, t, n, a]
    );
}

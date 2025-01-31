function i(e, t, n) {
    return null == e ? null : ('#' !== e.charAt(0) && (e = '#' + e), 7 !== e.length) ? null : n ? e + 'FF' : t ? e + '99' : e + '4D';
}
n.d(t, { b: () => i });

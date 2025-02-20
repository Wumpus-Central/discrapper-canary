function r() {
    var e, t;
    return 'undefined' == typeof platform ? 0 : parseInt(null !== (t = null === (e = platform) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : '0', 10);
}
n.d(t, { n: () => r });

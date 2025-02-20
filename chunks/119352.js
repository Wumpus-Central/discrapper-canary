function r(e, t) {
    for (var n = e < 0 ? '-' : '', r = Math.abs(e).toString(); r.length < t; ) r = '0' + r;
    return n + r;
}
n.d(t, { Z: () => r });

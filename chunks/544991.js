function r(e, t) {
    if (null == e) throw TypeError('assign requires that input parameter not be null or undefined');
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
}
n.d(t, { Z: () => r });

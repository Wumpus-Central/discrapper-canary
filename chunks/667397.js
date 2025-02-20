function r(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < t.length && n < e.length; n++) if (!Object.is(e[n], t[n])) return !1;
    return !0;
}
n.d(t, { Z: () => r });

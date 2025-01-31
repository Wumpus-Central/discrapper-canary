function r(t) {
    let e;
    let a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            o = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = o(a))) : ('call' === n || 'optionalCall' === n) && ((a = o((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
a.d(e, { x: () => r });

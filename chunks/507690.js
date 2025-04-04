function r(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let n = t[r],
            _ = t[r + 1];
        if (((r += 2), ('optionalAccess' === n || 'optionalCall' === n) && null == a)) return;
        'access' === n || 'optionalAccess' === n ? ((e = a), (a = _(a))) : ('call' === n || 'optionalCall' === n) && ((a = _((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
a.d(e, { x: () => r });

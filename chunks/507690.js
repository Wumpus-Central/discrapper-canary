function r(t) {
    let e,
        a = t[0],
        r = 1;
    for (; r < t.length; ) {
        let _ = t[r],
            n = t[r + 1];
        if (((r += 2), ('optionalAccess' === _ || 'optionalCall' === _) && null == a)) return;
        'access' === _ || 'optionalAccess' === _ ? ((e = a), (a = n(a))) : ('call' === _ || 'optionalCall' === _) && ((a = n((...t) => a.call(e, ...t))), (e = void 0));
    }
    return a;
}
a.d(e, { x: () => r });

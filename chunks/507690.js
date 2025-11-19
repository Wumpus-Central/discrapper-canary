function a(t) {
    let e,
        _ = t[0],
        a = 1;
    for (; a < t.length; ) {
        let r = t[a],
            n = t[a + 1];
        if (((a += 2), ("optionalAccess" === r || "optionalCall" === r) && null == _)) return;
        "access" === r || "optionalAccess" === r
            ? ((e = _), (_ = n(_)))
            : ("call" === r || "optionalCall" === r) && ((_ = n((...t) => _.call(e, ...t))), (e = void 0));
    }
    return _;
}
_.d(e, { x: () => a });

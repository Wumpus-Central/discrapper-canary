n.d(t, { Z: () => l }), n(539854);
var r = n(473749),
    i = n(442837),
    a = n(835473),
    o = n(541099),
    s = n(695676);
function l() {
    let e = (0, i.e7)([o.Z], () => o.Z.initialState(), []),
        t = (0, a.q)(null == e ? void 0 : e.applicationId);
    return r.useMemo(() => {
        if (null == e) return;
        let n = [{ type: s.gc.HOME }];
        return (
            null != e.applicationId &&
                null != t &&
                n.push({
                    type: s.gc.APPLICATION,
                    application: t,
                }),
            n
        );
    }, [e, t]);
}

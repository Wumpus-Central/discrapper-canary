n.d(t, { Z: () => s }), n(539854);
var l = n(73800),
    i = n(442837),
    r = n(835473),
    a = n(541099),
    o = n(695676);
function s() {
    let e = (0, i.e7)([a.Z], () => a.Z.initialState(), []),
        t = (0, r.q)(null == e ? void 0 : e.applicationId);
    return l.useMemo(() => {
        if (null == e) return;
        let n = [{ type: o.gc.HOME }];
        return (
            null != e.applicationId &&
                null != t &&
                n.push({
                    type: o.gc.APPLICATION,
                    application: t
                }),
            n
        );
    }, [e, t]);
}

n.d(t, { Z: () => s }), n(539854);
var i = n(73800),
    r = n(442837),
    l = n(835473),
    o = n(541099),
    a = n(695676);
function s() {
    let e = (0, r.e7)([o.Z], () => o.Z.initialState(), []),
        t = (0, l.q)(null == e ? void 0 : e.applicationId);
    return i.useMemo(() => {
        if (null == e) return;
        let n = [{ type: a.gc.HOME }];
        return (
            null != e.applicationId &&
                null != t &&
                n.push({
                    type: a.gc.APPLICATION,
                    application: t
                }),
            n
        );
    }, [e, t]);
}

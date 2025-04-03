n.d(t, { Z: () => c }), n(653041);
var i = n(192379),
    r = n(442837),
    l = n(835473),
    a = n(541099),
    o = n(695676);
function c() {
    let e = (0, r.e7)([a.Z], () => a.Z.initialState(), []),
        t = (0, l.q)(null == e ? void 0 : e.applicationId);
    return i.useMemo(() => {
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

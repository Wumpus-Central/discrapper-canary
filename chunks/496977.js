n.d(t, { Z: () => s }), n(653041);
var i = n(192379),
    l = n(442837),
    r = n(835473),
    o = n(541099),
    a = n(695676);
function s() {
    let e = (0, l.e7)([o.Z], () => o.Z.initialState(), []),
        t = (0, r.q)(null == e ? void 0 : e.applicationId);
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

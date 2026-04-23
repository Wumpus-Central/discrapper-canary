n.d(t, { j: () => c });
var a = n(64700),
    l = n(284009),
    r = n.n(l),
    i = n(155718),
    s = n(31717),
    o = n(522602),
    d = n(207963);
function c(e) {
    let t = (0, d.jc)();
    r()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
    let n = t.channelId;
    r()(null != n, "useFileUploadComponentState must be used inside a channel");
    let { state: l, executeStateUpdate: c, error: u } = t.useComponentState(e),
        m = a.useMemo(() => (l?.type === i.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
        _ = o.A.getUploads(n, s.C.InteractionModal),
        p = a.useMemo(() => m.map((e) => _.find((t) => t.id === e)).filter((e) => null != e), [m, _]),
        h = a.useCallback((e) => c({ type: i.I5.FILE_UPLOAD, uploadIds: e }), [c]);
    return (
        a.useEffect(() => {
            m.length > p.length && h(m.filter((e) => p.some((t) => t.id === e)));
        }, [m, p, h]),
        { uploadIds: m, setUploadIds: h, currentUploads: p, error: u }
    );
}

n.d(t, { j: () => c });
var l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(155718),
    i = n(31717),
    o = n(522602),
    d = n(207963);
function c(e) {
    let t = (0, d.jc)();
    r()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
    let n = t.channelId;
    r()(null != n, "useFileUploadComponentState must be used inside a channel");
    let { state: a, executeStateUpdate: c, error: u } = t.useComponentState(e),
        m = l.useMemo(() => (a?.type === s.I5.FILE_UPLOAD ? a.uploadIds : []), [a]),
        p = o.A.getUploads(n, i.C.InteractionModal),
        A = l.useMemo(() => m.map((e) => p.find((t) => t.id === e)).filter((e) => null != e), [m, p]),
        h = l.useCallback((e) => c({ type: s.I5.FILE_UPLOAD, uploadIds: e }), [c]);
    return (
        l.useEffect(() => {
            m.length > A.length && h(m.filter((e) => A.some((t) => t.id === e)));
        }, [m, A, h]),
        { uploadIds: m, setUploadIds: h, currentUploads: A, error: u }
    );
}

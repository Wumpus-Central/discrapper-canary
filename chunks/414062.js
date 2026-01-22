n.d(t, { j: () => u });
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(155718),
    o = n(31717),
    l = n(522602),
    c = n(207963);
function u(e) {
    let t = (0, c.jc)();
    a()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
    let n = t.channelId;
    a()(null != n, "useFileUploadComponentState must be used inside a channel");
    let { state: i, executeStateUpdate: u, error: d } = t.useComponentState(e),
        f = r.useMemo(() => ((null == i ? void 0 : i.type) === s.I5.FILE_UPLOAD ? i.uploadIds : []), [i]),
        p = l.A.getUploads(n, o.C.InteractionModal),
        _ = r.useMemo(() => f.map((e) => p.find((t) => t.id === e)).filter((e) => null != e), [f, p]),
        h = r.useCallback(
            (e) =>
                u({
                    type: s.I5.FILE_UPLOAD,
                    uploadIds: e,
                }),
            [u],
        );
    return (
        r.useEffect(() => {
            f.length > _.length && h(f.filter((e) => _.some((t) => t.id === e)));
        }, [f, _, h]),
        {
            uploadIds: f,
            setUploadIds: h,
            currentUploads: _,
            error: d,
        }
    );
}

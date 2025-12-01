n.d(t, { t: () => u });
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(911969),
    s = n(703558),
    l = n(117530),
    c = n(970184);
function u(e) {
    let t = (0, c.CJ)();
    a()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
    let n = t.channelId;
    a()(null != n, "useFileUploadComponentState must be used inside a channel");
    let { state: i, executeStateUpdate: u, error: d } = t.useComponentState(e),
        f = r.useMemo(() => ((null == i ? void 0 : i.type) === o.re.FILE_UPLOAD ? i.uploadIds : []), [i]),
        p = l.Z.getUploads(n, s.d.InteractionModal),
        _ = r.useMemo(() => f.map((e) => p.find((t) => t.id === e)).filter((e) => null != e), [f, p]),
        m = r.useCallback(
            (e) =>
                u({
                    type: o.re.FILE_UPLOAD,
                    uploadIds: e,
                }),
            [u],
        );
    return (
        r.useEffect(() => {
            f.length > _.length && m(f.filter((e) => _.some((t) => t.id === e)));
        }, [f, _, m]),
        {
            uploadIds: f,
            setUploadIds: m,
            currentUploads: _,
            error: d,
        }
    );
}

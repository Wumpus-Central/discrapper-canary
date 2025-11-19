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
        _ = l.Z.getUploads(n, s.d.InteractionModal),
        p = r.useMemo(() => f.map((e) => _.find((t) => t.id === e)).filter((e) => null != e), [f, _]),
        h = r.useCallback(
            (e) =>
                u({
                    type: o.re.FILE_UPLOAD,
                    uploadIds: e,
                }),
            [u],
        );
    return (
        r.useEffect(() => {
            f.length > p.length && h(f.filter((e) => p.some((t) => t.id === e)));
        }, [f, p, h]),
        {
            uploadIds: f,
            setUploadIds: h,
            currentUploads: p,
            error: d,
        }
    );
}

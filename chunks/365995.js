a.d(t, { A: () => r });
var c = a(64700),
    n = a(311907),
    l = a(87001),
    d = a(652215);
function r() {
    let e = (0, n.bG)([l.A], () => l.A.getWindow(d.MLl.ACTIVITY_POPOUT)),
        t = c.useMemo(() => (null == e ? void 0 : e.window.document), [e]),
        a = c.useMemo(() => (null == t ? void 0 : t.getElementById("app-mount")), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: a,
    };
}

n.d(t, { A: () => o });
var l = n(64700),
    i = n(311907),
    a = n(87001),
    r = n(652215);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.getWindow(r.MLl.ACTIVITY_POPOUT)),
        t = l.useMemo(() => e?.window.document, [e]),
        n = l.useMemo(() => t?.getElementById("app-mount"), [t]);
    return { popoutWindow: e, currentDocument: t, rootNode: n };
}

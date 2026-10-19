t.d(e, { A: () => I });
var l = t(477900),
    r = t(582128),
    u = t(17928),
    i = t(12470),
    a = t(811893),
    c = t(47294),
    o = t(16961),
    s = t(58736),
    d = t(869146),
    m = t(91242),
    f = t(73153),
    p = t(494126),
    A = t(5867);
async function b(n) {
    null == m.A.getFrame(n) ||
        ((await (0, p.refreshProxyTicket)(n)) &&
            ((0, p.promoteFrame)(n),
            (0, p.updateFramePanelMode)(n, A.Gd.ACTIVITY_POPOUT_WINDOW),
            f.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var C = t(567245),
    O = t(165610),
    P = t(652215),
    k = t(105292);
function I(n) {
    let { frame: e } = n,
        t = (0, o.G)(),
        f = (0, u.bG)(
            [d.A, m.A],
            () => d.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT) && null != e && m.A.getMainFrame()?.id === e.id,
            [e],
        ),
        p = r.useCallback(() => {
            null != e && (0, c.A)({ onConfirm: () => b(e.id) });
        }, [e]),
        A = r.useCallback(() => {
            (0, c.A)({ onConfirm: () => (0, C.E)() });
        }, []);
    return (0, O.x1)(e)
        ? f
            ? (0, l.jsx)(s.In, {
                  icon: i._,
                  tooltip: k.intl.string(k.t["NKV/MO"]),
                  "aria-label": k.intl.string(k.t["NKV/MO"]),
                  onClick: A,
              })
            : t
              ? (0, l.jsx)(s.In, {
                    icon: a.t,
                    tooltip: k.intl.string(k.t["3Zypbv"]),
                    "aria-label": k.intl.string(k.t["3Zypbv"]),
                    onClick: p,
                })
              : null
        : null;
}

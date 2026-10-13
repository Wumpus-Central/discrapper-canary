i.d(t, { A: () => _ });
var l = i(477900),
    a = i(582128),
    e = i(17928),
    r = i(12470),
    o = i(811893),
    u = i(47294),
    c = i(16961),
    s = i(58736),
    p = i(869146),
    d = i(91242),
    A = i(73153),
    O = i(494126),
    C = i(5867);
async function b(n) {
    null == d.A.getFrame(n) ||
        ((await (0, O.refreshProxyTicket)(n)) &&
            ((0, O.promoteFrame)(n),
            (0, O.updateFramePanelMode)(n, C.Gd.ACTIVITY_POPOUT_WINDOW),
            A.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var I = i(567245),
    T = i(165610),
    k = i(652215),
    P = i(660183);
function _(n) {
    let { frame: t } = n,
        i = (0, c.G)(),
        A = (0, e.bG)(
            [p.A, d.A],
            () => p.A.getWindowOpen(k.MLl.ACTIVITY_POPOUT) && null != t && d.A.getMainFrame()?.id === t.id,
            [t],
        ),
        O = a.useCallback(() => {
            null != t && (0, u.A)({ onConfirm: () => b(t.id) });
        }, [t]),
        C = a.useCallback(() => {
            (0, u.A)({ onConfirm: () => (0, I.E)() });
        }, []);
    return (0, T.x1)(t)
        ? A
            ? (0, l.jsx)(s.In, {
                  icon: r._,
                  tooltip: P.intl.string(P.t["NKV/MO"]),
                  "aria-label": P.intl.string(P.t["NKV/MO"]),
                  onClick: C,
              })
            : i
              ? (0, l.jsx)(s.In, {
                    icon: o.t,
                    tooltip: P.intl.string(P.t["3Zypbv"]),
                    "aria-label": P.intl.string(P.t["3Zypbv"]),
                    onClick: O,
                })
              : null
        : null;
}

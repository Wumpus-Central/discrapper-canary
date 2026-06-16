i.d(a, { A: () => o });
var n = i(627968),
    e = i(64700),
    l = i(189213),
    s = i(834730),
    r = i(375708),
    c = i(423396);
function o(t) {
    let { errorText: a, title: i, description: o, transitionState: d, onCancel: u, onConfirm: h, children: k } = t,
        [p, x] = e.useState(!1),
        C = e.useCallback(async () => {
            x(!0);
            try {
                await h();
            } catch (t) {
                throw t;
            } finally {
                x(!1);
            }
        }, [h]);
    return (0, n.jsxs)(l.Modal, {
        transitionState: d,
        onClose: u,
        title: i,
        subtitle: o,
        actions: [
            { text: r.intl.string(r.t["ETE/oC"]), variant: "secondary", onClick: u },
            { text: r.intl.string(r.t["R3BPH+"]), onClick: C, variant: "primary", loading: p },
        ],
        children: [
            k,
            null != a && "" !== a
                ? (0, n.jsx)(s.E, {
                      className: c.kc,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: a,
                  })
                : null,
        ],
    });
}

i.d(a, { A: () => o });
var n = i(477900),
    e = i(582128),
    s = i(189213),
    l = i(834730),
    r = i(375708),
    c = i(94499);
function o(t) {
    let { errorText: a, title: i, description: o, transitionState: u, onCancel: d, onConfirm: h, children: k } = t,
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
    return (0, n.jsxs)(s.a, {
        transitionState: u,
        onClose: d,
        title: i,
        subtitle: o,
        actions: [
            { text: r.intl.string(r.t["ETE/oC"]), variant: "secondary", onClick: d },
            { text: r.intl.string(r.t["R3BPH+"]), onClick: C, variant: "primary", loading: p },
        ],
        children: [
            k,
            null != a && "" !== a
                ? (0, n.jsx)(l.E, {
                      className: c.kc,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: a,
                  })
                : null,
        ],
    });
}

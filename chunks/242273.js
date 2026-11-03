i.d(a, { A: () => o });
var n = i(477900),
    s = i(582128),
    e = i(189213),
    l = i(834730),
    r = i(105292),
    c = i(94499);
function o(t) {
    let { errorText: a, title: i, description: o, transitionState: d, onCancel: u, onConfirm: h, children: k } = t,
        [p, b] = s.useState(!1),
        x = s.useCallback(async () => {
            b(!0);
            try {
                await h();
            } catch (t) {
                throw t;
            } finally {
                b(!1);
            }
        }, [h]);
    return (0, n.jsxs)(e.a, {
        transitionState: d,
        onClose: u,
        title: i,
        subtitle: o,
        actions: [
            { text: r.intl.string(r.t["ETE/oC"]), variant: "secondary", onClick: u },
            { text: r.intl.string(r.t["R3BPH+"]), onClick: x, variant: "primary", loading: p },
        ],
        children: [
            k,
            null != a && "" !== a
                ? (0, n.jsx)(l.E, {
                      className: c.kc,
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: a,
                  })
                : null,
        ],
    });
}

t.d(l, { A: () => o });
var n = t(627968),
    i = t(64700),
    r = t(158954),
    a = t(397927),
    s = t(985018),
    c = t(33855);
function o(e) {
    let { errorText: l, title: t, description: o, transitionState: d, onCancel: u, onConfirm: h, children: x } = e,
        [m, g] = i.useState(!1),
        p = i.useCallback(async () => {
            g(!0);
            try {
                await h();
            } catch (e) {
                throw e;
            } finally {
                g(!1);
            }
        }, [h]);
    return (0, n.jsxs)(r.Modal, {
        transitionState: d,
        onClose: u,
        title: t,
        subtitle: o,
        actions: [
            { text: s.intl.string(s.t["ETE/oC"]), variant: "secondary", onClick: u },
            { text: s.intl.string(s.t["R3BPH+"]), onClick: p, variant: "primary", loading: m },
        ],
        children: [
            x,
            null != l && "" !== l
                ? (0, n.jsx)(a.Text, {
                      className: c.kc,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: l,
                  })
                : null,
        ],
    });
}

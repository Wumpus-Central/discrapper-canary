l.d(t, { A: () => u });
var n = l(627968),
    i = l(64700),
    a = l(158954),
    r = l(397927),
    s = l(985018),
    o = l(285553);
function u(e) {
    let { errorText: t, title: l, description: u, transitionState: c, onCancel: d, onConfirm: x, children: p } = e,
        [g, _] = i.useState(!1),
        h = i.useCallback(async () => {
            _(!0);
            try {
                await x();
            } catch (e) {
                throw e;
            } finally {
                _(!1);
            }
        }, [x]);
    return (0, n.jsxs)(a.Modal, {
        transitionState: c,
        onClose: d,
        title: l,
        subtitle: u,
        actions: [
            { text: s.intl.string(s.t["ETE/oC"]), variant: "secondary", onClick: d },
            { text: s.intl.string(s.t["R3BPH+"]), onClick: h, variant: "primary", loading: g },
        ],
        children: [
            p,
            null != t && "" !== t
                ? (0, n.jsx)(r.Text, {
                      className: o.kc,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
        ],
    });
}

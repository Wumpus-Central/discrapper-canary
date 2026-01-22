l.d(t, {
    A: () => o,
}),
    l(228524),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(158954),
    c = l(397927),
    a = l(985018),
    s = l(285553);

function o(e) {
    let { errorText: t, title: l, description: o, transitionState: u, onCancel: d, onConfirm: f, children: b } = e,
        [h, p] = r.useState(!1),
        g = r.useCallback(async () => {
            p(!0);
            try {
                await f();
            } catch (e) {
                throw e;
            } finally {
                p(!1);
            }
        }, [f]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: u,
        onClose: d,
        title: l,
        subtitle: o,
        actions: [
            {
                text: a.intl.string(a.t["ETE/oC"]),
                variant: "secondary",
                onClick: d,
            },
            {
                text: a.intl.string(a.t["R3BPH+"]),
                onClick: g,
                variant: "primary",
                loading: h,
            },
        ],
        children: [
            b,
            null != t && "" !== t
                ? (0, n.jsx)(c.Text, {
                      className: s.kc,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: t,
                  })
                : null,
        ],
    });
}

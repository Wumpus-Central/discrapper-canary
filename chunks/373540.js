a.d(n, { A: () => c });
var i = a(477900);
a(582128);
var e = a(189213),
    o = a(192308),
    r = a(516288);
function s(t) {
    let { reason: n, message: a, onConfirm: o, transitionState: s, onClose: c } = t,
        l = (0, r.t)(n, a);
    return (0, i.jsx)(e.a, {
        transitionState: s,
        onClose: c,
        title: l.title,
        subtitle: l.body,
        size: "sm",
        actions:
            null == l.cancel
                ? [{ text: l.action, variant: "primary", onClick: c }]
                : [
                      { text: l.cancel, variant: "secondary", onClick: c },
                      {
                          text: l.action,
                          variant: "primary",
                          onClick: () => {
                              (c(), o?.());
                          },
                      },
                  ],
    });
}
function c(t, n, a, e) {
    function r(e) {
        return (0, i.jsx)(s, { ...e, reason: t, message: n, onConfirm: a });
    }
    null != e && (0, o.hasModalOpen)(e) ? (0, o.updateModal)(e, r) : (0, o.openModal)(r, { modalKey: e });
}

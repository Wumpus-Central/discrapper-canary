n.d(e, { A: () => u });
var a = n(627968),
    r = n(397927),
    i = n(230913),
    s = n(954571),
    l = n(652215),
    o = n(87404),
    c = n(985018),
    E = n(222872);
function u(t) {
    let { onNext: e, onClose: n, reason: u, onReasonChange: A, transitionState: _ } = t,
        C = o.FL.map((t) => ({ value: t, name: (0, i.u)(t) }));
    return (0, a.jsx)(r.kpP, {
        graphic: { type: "image", src: E },
        title: c.intl.string(c.t["41NIIh"]),
        onClose: n,
        transitionState: _,
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: c.intl.string(c.t["3PatSz"]), disabled: null == u, onClick: e },
        ],
        children: (0, a.jsx)(r.z6M, {
            value: u,
            options: C,
            onChange: (t) => {
                s.default.track(l.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), A(t);
            },
        }),
    });
}

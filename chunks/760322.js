i.d(e, { A: () => o });
var l = i(627968);
i(64700);
var a = i(189213),
    n = i(123292),
    r = i(330936),
    s = i(985018);
let o = (t) => {
    let { school: e, setStep: i, ...o } = t;
    return (0, l.jsx)(a.Modal, {
        ...o,
        title: s.intl.string(s.t.OaloU5),
        subtitle: s.intl.format(s.t.Rs7MXJ, { school: e }),
        actions: [],
        children: (0, l.jsx)(n.Q, {
            variant: "primary",
            size: "sm",
            text: s.intl.string(s.t.Zg63h4),
            onClick: () => {
                i(r.Di.VERIFY_EMAIL);
            },
        }),
    });
};

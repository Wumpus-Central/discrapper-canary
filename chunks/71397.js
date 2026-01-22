n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(268761),
    s = n(985018),
    a = n(338497);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o, helperText: c } = e,
        d = (0, r.Gk)();
    return (0, l.jsx)("div", {
        className: a.gy,
        children: (0, l.jsx)(i.ZiE, {
            selectionMode: "single",
            label: s.intl.string(s.t.FGjMZS),
            helperText: c,
            disabled: o,
            options: d,
            value: t,
            onSelectionChange: n,
        }),
    });
};

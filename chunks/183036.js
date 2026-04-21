e.d(n, { default: () => p });
var l = e(627968),
    i = e(64700),
    s = e(189213),
    a = e(732955),
    r = e(397927),
    o = e(98278),
    u = e(985018),
    c = e(499963);
function p(t) {
    let { transitionState: n, onClose: e, existingTransform: p } = t,
        [g, h] = i.useState(p?.name ?? ""),
        [d, m] = i.useState(p?.prompt ?? ""),
        f = i.useRef(null);
    i.useEffect(() => {
        n === r.ip4.ENTERED && f.current?.focus();
    }, [n]);
    let x = null != p,
        C = g.trim().length > 0 && d.trim().length > 0;
    return (0, l.jsx)(s.Modal, {
        transitionState: n,
        title: u.intl.string(x ? u.t.qnClOB : u.t["Zz9Nf/"]),
        onClose: e,
        input: (0, l.jsxs)("div", {
            className: c.O,
            children: [
                (0, l.jsx)(r.ksK, {
                    label: u.intl.string(u.t["2sob7O"]),
                    inputRef: f,
                    "aria-label": u.intl.string(u.t["2sob7O"]),
                    placeholder: u.intl.string(u.t["7solMC"]),
                    value: g,
                    maxLength: 50,
                    onChange: h,
                    autoFocus: !0,
                }),
                (0, l.jsx)(a.fs1, {
                    label: u.intl.string(u.t["ml/eYE"]),
                    placeholder: u.intl.string(u.t.TGBWxJ),
                    value: d,
                    maxLength: 500,
                    rows: 3,
                    onChange: m,
                }),
            ],
        }),
        actions: [
            { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: e },
            {
                variant: "primary",
                text: u.intl.string(u.t.MglOyG),
                disabled: !C,
                onClick: function () {
                    let t = g.trim(),
                        n = d.trim();
                    0 !== t.length &&
                        0 !== n.length &&
                        (null != p ? (0, o.Gk)({ ...p, name: t, prompt: n }) : (0, o.Sy)(t, n), e());
                },
            },
        ],
    });
}

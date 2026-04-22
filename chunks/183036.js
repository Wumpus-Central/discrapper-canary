r.d(t, { default: () => c });
var l = r(627968),
    n = r(64700),
    a = r(189213),
    o = r(260598),
    i = r(231723),
    s = r(292666),
    u = r(98278),
    d = r(985018),
    g = r(499963);
function c(e) {
    let { transitionState: t, onClose: r, existingTransform: c } = e,
        [p, h] = n.useState(c?.name ?? ""),
        [b, m] = n.useState(c?.prompt ?? ""),
        x = n.useRef(null);
    n.useEffect(() => {
        t === i.ip.ENTERED && x.current?.focus();
    }, [t]);
    let f = null != c,
        y = p.trim().length > 0 && b.trim().length > 0;
    return (0, l.jsx)(a.Modal, {
        transitionState: t,
        title: d.intl.string(f ? d.t.qnClOB : d.t["Zz9Nf/"]),
        onClose: r,
        input: (0, l.jsxs)("div", {
            className: g.O,
            children: [
                (0, l.jsx)(s.k, {
                    label: d.intl.string(d.t["2sob7O"]),
                    inputRef: x,
                    "aria-label": d.intl.string(d.t["2sob7O"]),
                    placeholder: d.intl.string(d.t["7solMC"]),
                    value: p,
                    maxLength: 50,
                    onChange: h,
                    autoFocus: !0,
                }),
                (0, l.jsx)(o.f, {
                    label: d.intl.string(d.t["ml/eYE"]),
                    placeholder: d.intl.string(d.t.TGBWxJ),
                    value: b,
                    maxLength: 500,
                    rows: 3,
                    onChange: m,
                }),
            ],
        }),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: r },
            {
                variant: "primary",
                text: d.intl.string(d.t.MglOyG),
                disabled: !y,
                onClick: function () {
                    let e = p.trim(),
                        t = b.trim();
                    0 !== e.length &&
                        0 !== t.length &&
                        (null != c ? (0, u.Gk)({ ...c, name: e, prompt: t }) : (0, u.Sy)(e, t), r());
                },
            },
        ],
    });
}

e.d(n, { default: () => p });
var l = e(627968),
    i = e(64700),
    a = e(189213),
    s = e(260598),
    r = e(231723),
    o = e(292666),
    u = e(98278),
    c = e(375708),
    g = e(499963);
function p(t) {
    let { transitionState: n, onClose: e, existingTransform: p } = t,
        [h, d] = i.useState(p?.name ?? ""),
        [m, f] = i.useState(p?.prompt ?? ""),
        C = i.useRef(null);
    i.useEffect(() => {
        n === r.ip.ENTERED && C.current?.focus();
    }, [n]);
    let x = null != p,
        b = h.trim().length > 0 && m.trim().length > 0;
    return (0, l.jsx)(a.Modal, {
        transitionState: n,
        title: c.intl.string(x ? c.t.qnClOB : c.t["Zz9Nf/"]),
        onClose: e,
        input: (0, l.jsxs)("div", {
            className: g.O,
            children: [
                (0, l.jsx)(o.k, {
                    label: c.intl.string(c.t["2sob7O"]),
                    inputRef: C,
                    "aria-label": c.intl.string(c.t["2sob7O"]),
                    placeholder: c.intl.string(c.t["7solMC"]),
                    value: h,
                    maxLength: 50,
                    onChange: d,
                    autoFocus: !0,
                }),
                (0, l.jsx)(s.f, {
                    label: c.intl.string(c.t["ml/eYE"]),
                    placeholder: c.intl.string(c.t.TGBWxJ),
                    value: m,
                    maxLength: 500,
                    rows: 3,
                    onChange: f,
                }),
            ],
        }),
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: e },
            {
                variant: "primary",
                text: c.intl.string(c.t.MglOyG),
                disabled: !b,
                onClick: function () {
                    let t = h.trim(),
                        n = m.trim();
                    0 !== t.length &&
                        0 !== n.length &&
                        (null != p ? (0, u.Gk)({ ...p, name: t, prompt: n }) : (0, u.Sy)(t, n), e());
                },
            },
        ],
    });
}

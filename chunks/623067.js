a.d(n, { default: () => d });
var e = a(627968),
    i = a(64700),
    l = a(189213),
    r = a(292666),
    o = a(573648),
    s = a(777574),
    c = a(738104),
    u = a(985018);
function d(t) {
    let { onClose: n, transitionState: a, location: d, successRedirect: g, platformType: h } = t,
        [m, p] = i.useState(""),
        [f, b] = i.useState(null),
        [x, S] = i.useState(!1),
        k = o.A.get(h)?.name ?? u.intl.string(u.t["bU/GZm"]),
        y = async () => {
            S(!0), b(null);
            try {
                let t = await (0, c.d)(h, { location: d, successRedirect: g, handle: m });
                if (null == t) throw Error();
                n();
            } catch {
                b(u.intl.string(u.t["7wbPNl"])), S(!1);
            }
        },
        C = (0, s.X)(h),
        T = (0, s.x)(m, h);
    return (0, e.jsx)(l.Modal, {
        transitionState: a,
        title: u.intl.formatToPlainString(u.t["ImMhq+"], { serviceName: k }),
        subtitle: u.intl.formatToPlainString(u.t["7TByKh"], { serviceName: k }),
        onClose: n,
        actions: [
            { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: u.intl.string(u.t.PDTjLN), onClick: y, loading: x, disabled: !T },
        ],
        children: (0, e.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), T && !x && y();
            },
            children: (0, e.jsx)(r.k, {
                label: u.intl.string(u.t.tZ9QFR),
                error: f,
                onChange: p,
                placeholder: C,
                value: m,
                disabled: x,
                autoFocus: !0,
            }),
        }),
    });
}

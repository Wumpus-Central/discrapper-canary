a.d(n, { default: () => d }), a(896048), a(65821);
var e = a(627968),
    i = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(573648),
    o = a(777574),
    u = a(738104),
    c = a(985018);
function d(t) {
    var n, a;
    let { onClose: d, transitionState: g, location: h, successRedirect: m, platformType: p } = t,
        [f, b] = i.useState(""),
        [x, S] = i.useState(null),
        [k, v] = i.useState(!1),
        y = null != (n = null == (a = s.A.get(p)) ? void 0 : a.name) ? n : c.intl.string(c.t["bU/GZm"]),
        C = async () => {
            v(!0), S(null);
            try {
                let t = await (0, u.d)(p, {
                    location: h,
                    successRedirect: m,
                    handle: f,
                });
                if (null == t) throw Error();
                d();
            } catch (t) {
                S(c.intl.string(c.t["7wbPNl"])), v(!1);
            }
        },
        T = (0, o.X)(p),
        w = (0, o.x)(f, p);
    return (0, e.jsx)(l.Modal, {
        transitionState: g,
        title: c.intl.formatToPlainString(c.t["ImMhq+"], { serviceName: y }),
        subtitle: c.intl.formatToPlainString(c.t["7TByKh"], { serviceName: y }),
        onClose: d,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: d,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t.PDTjLN),
                onClick: C,
                loading: k,
                disabled: !w,
            },
        ],
        children: (0, e.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), C();
            },
            children: (0, e.jsx)(r.ksK, {
                label: c.intl.string(c.t.tZ9QFR),
                error: x,
                onChange: b,
                placeholder: T,
                value: f,
                disabled: k,
                autoFocus: !0,
            }),
        }),
    });
}

i.d(n, { default: () => d }), i(388685), i(415506);
var a = i(54381),
    l = i(473749),
    e = i(793030),
    r = i(481060),
    o = i(726542),
    s = i(823985),
    u = i(202120),
    c = i(388032);
function d(t) {
    var n, i;
    let { onClose: d, transitionState: h, location: m, successRedirect: p, platformType: f } = t,
        [b, g] = l.useState(""),
        [S, v] = l.useState(null),
        [x, k] = l.useState(!1),
        y = null != (i = null == (n = o.Z.get(f)) ? void 0 : n.name) ? i : c.intl.string(c.t["bU/GZm"]),
        C = async () => {
            k(!0), v(null);
            try {
                let t = await (0, u.H)(f, {
                    location: m,
                    successRedirect: p,
                    handle: b,
                });
                if (null == t) throw Error();
                d();
            } catch (t) {
                v(c.intl.string(c.t["7wbPNl"])), k(!1);
            }
        },
        T = (0, s.r)(f),
        j = (0, s.j)(b, f);
    return (0, a.jsx)(e.Modal, {
        transitionState: h,
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
                loading: x,
                disabled: !j,
            },
        ],
        children: (0, a.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), C();
            },
            children: (0, a.jsx)(r.oil, {
                label: c.intl.string(c.t.tZ9QFR),
                error: S,
                onChange: g,
                placeholder: T,
                value: b,
                disabled: x,
                autoFocus: !0,
            }),
        }),
    });
}

i.d(n, { default: () => d }), i(388685), i(415506);
var e = i(951288),
    a = i(647438),
    l = i(82659),
    r = i(481060),
    o = i(726542),
    s = i(823985),
    u = i(202120),
    c = i(388032);
function d(t) {
    var n, i;
    let { onClose: d, transitionState: h, location: m, successRedirect: p, platformType: f } = t,
        [g, x] = a.useState(""),
        [S, b] = a.useState(null),
        [j, v] = a.useState(!1),
        k = null != (i = null == (n = o.Z.get(f)) ? void 0 : n.name) ? i : c.intl.string(c.t["bU/GZm"]),
        y = async () => {
            v(!0), b(null);
            try {
                let t = await (0, u.H)(f, {
                    location: m,
                    successRedirect: p,
                    handle: g,
                });
                if (null == t) throw Error();
                d();
            } catch (t) {
                b(c.intl.string(c.t["7wbPNj"])), v(!1);
            }
        },
        C = (0, s.r)(f),
        T = (0, s.j)(g, f);
    return (0, e.jsx)(l.Modal, {
        transitionState: h,
        title: c.intl.formatToPlainString(c.t.ImMhq6, { serviceName: k }),
        subtitle: c.intl.formatToPlainString(c.t["7TByKi"], { serviceName: k }),
        onClose: d,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oK"]),
                onClick: d,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t.PDTjLC),
                onClick: y,
                loading: j,
                disabled: !T,
            },
        ],
        children: (0, e.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), y();
            },
            children: (0, e.jsx)(r.xJW, {
                title: c.intl.string(c.t.tZ9QFR),
                error: S,
                children: (0, e.jsx)(r.oil, {
                    onChange: x,
                    placeholder: C,
                    value: g,
                    disabled: j,
                    autoFocus: !0,
                }),
            }),
        }),
    });
}

i.d(n, { default: () => d }), i(388685), i(415506);
var a = i(951288),
    e = i(647438),
    l = i(793030),
    r = i(481060),
    o = i(726542),
    s = i(823985),
    u = i(202120),
    c = i(388032);
function d(t) {
    var n, i;
    let { onClose: d, transitionState: m, location: p, successRedirect: h, platformType: f } = t,
        [b, g] = e.useState(""),
        [S, v] = e.useState(null),
        [x, j] = e.useState(!1),
        k = null != (i = null == (n = o.Z.get(f)) ? void 0 : n.name) ? i : c.intl.string(c.t["bU/GZm"]),
        y = async () => {
            j(!0), v(null);
            try {
                let t = await (0, u.H)(f, {
                    location: p,
                    successRedirect: h,
                    handle: b,
                });
                if (null == t) throw Error();
                d();
            } catch (t) {
                v(c.intl.string(c.t["7wbPNj"])), j(!1);
            }
        },
        C = (0, s.r)(f),
        T = (0, s.j)(b, f);
    return (0, a.jsx)(l.Modal, {
        transitionState: m,
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
                loading: x,
                disabled: !T,
            },
        ],
        children: (0, a.jsx)("form", {
            onSubmit: (t) => {
                t.preventDefault(), y();
            },
            children: (0, a.jsx)(r.oil, {
                label: c.intl.string(c.t.tZ9QFR),
                error: S,
                onChange: g,
                placeholder: C,
                value: b,
                disabled: x,
                autoFocus: !0,
            }),
        }),
    });
}

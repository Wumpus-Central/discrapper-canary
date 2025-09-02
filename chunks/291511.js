n.d(t, { P: () => _ }), n(388685);
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(249996),
    s = n(838436),
    l = n(800651),
    c = n(915009),
    u = n(652262),
    d = n(388032),
    f = n(460982);
function _() {
    let e = (0, u.M)(),
        t = (0, c.xf)(),
        n = [
            {
                value: i.Q4.BLUR,
                label: d.intl.string(d.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: d.intl.string(d.t["D/157e"]),
            },
        ];
    if (null == t || null == e) return null;
    let _ = (t) => {
            (0, l.zj)(e, t);
        },
        { explicitContentFriendDm: p, explicitContentNonFriendDm: h } = t;
    return (0, r.jsx)(s.U, {
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: f.selectItemRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: d.intl.string(d.t["+uI23N"]),
                        }),
                        (0, r.jsx)(a.q4e, {
                            variant: "text-only",
                            className: f.select,
                            options: n,
                            value: p,
                            onChange: (e) => _({ explicitContentFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, r.jsx)(o.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, r.jsx)(o.Z, { option: e }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.selectItemRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: d.intl.string(d.t["Yh+HX1"]),
                        }),
                        (0, r.jsx)(a.q4e, {
                            variant: "text-only",
                            className: f.select,
                            options: n,
                            value: h,
                            onChange: (e) => _({ explicitContentNonFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, r.jsx)(o.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, r.jsx)(o.Z, { option: e }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t.Wnojv7),
                }),
            ],
        }),
    });
}

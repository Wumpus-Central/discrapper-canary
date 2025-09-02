n.d(t, { I: () => _ }), n(388685);
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
        t = (0, c.T3)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: _ } = t,
        p = (t) => {
            (0, l.Jr)(e, t);
        },
        h = [
            {
                value: i.Q4.BLUR,
                label: d.intl.string(d.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: d.intl.string(d.t["D/157e"]),
            },
        ];
    return (0, r.jsxs)(s.U, {
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
                        options: h,
                        value: n,
                        onChange: (e) => p({ goreContentFriendDm: e }),
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
                        options: h,
                        value: _,
                        onChange: (e) => p({ goreContentNonFriendDm: e }),
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
                children: d.intl.string(d.t.XgH9en),
            }),
        ],
    });
}

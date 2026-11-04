var r = e(477900);
e(582128);
var i = e(529689),
    o = e(696986),
    t = e(834730),
    l = e(625189);
e.d(
    a,
    {},
    {
        A: function (s) {
            let { attachment: a } = s,
                e = Math.round(((a.size ?? 0) / 1024 / 1024) * 100) / 100;
            return (0, r.jsxs)("div", {
                className: l.kL,
                children: [
                    (0, r.jsx)(i.D, { size: "xs", color: "currentColor", className: l.Yg }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(t.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: l.Md,
                        children: a.filename,
                    }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsx)("div", { className: l.Om }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsxs)(t.E, { variant: "body-sm/normal", color: "text-muted", children: [e, "MB"] }),
                ],
            });
        },
    },
);

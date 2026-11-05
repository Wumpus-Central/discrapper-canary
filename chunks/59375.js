var r = e(477900);
e(582128);
var i = e(529689),
    o = e(696986),
    l = e(834730),
    t = e(625189);
e.d(
    a,
    {},
    {
        A: function (s) {
            let { attachment: a } = s,
                e = Math.round(((a.size ?? 0) / 1024 / 1024) * 100) / 100;
            return (0, r.jsxs)("div", {
                className: t.kL,
                children: [
                    (0, r.jsx)(i.ImageFileIcon, { size: "xs", color: "currentColor", className: t.Yg }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsx)(l.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: t.Md,
                        children: a.filename,
                    }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsx)("div", { className: t.Om }),
                    (0, r.jsx)(o.h, { size: 8, horizontal: !0 }),
                    (0, r.jsxs)(l.E, { variant: "body-sm/normal", color: "text-muted", children: [e, "MB"] }),
                ],
            });
        },
    },
);

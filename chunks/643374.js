var t = s(477900),
    i = s(582128),
    r = s(503698),
    a = s.n(r),
    l = s(559106),
    d = s(862301),
    c = s(95635),
    u = s(834730),
    o = s(821609),
    h = s(307955),
    p = s(18218);
s.d(
    n,
    {},
    {
        A: function (e) {
            let { filename: n, className: s, filters: r, buttonText: x, placeholder: f, onFileSelect: m } = e,
                j = i.useRef(null),
                b = i.useRef(null);
            return (0, t.jsx)(l.vN, {
                ringTarget: j,
                within: !0,
                children: (0, t.jsxs)(d.F, {
                    ref: j,
                    className: a()(s, p.U),
                    children: [
                        (0, t.jsx)(c.UploadIcon, { size: "sm" }),
                        (0, t.jsx)(u.E, {
                            variant: "body-md/normal",
                            color: "" !== n ? "text-default" : "text-muted",
                            lineClamp: 1,
                            children: "" !== n ? n : f,
                        }),
                        (0, t.jsx)(o.$, { "aria-hidden": !0, variant: "secondary", size: "sm", text: x, tabIndex: -1 }),
                        (0, t.jsx)(h.A, {
                            ref: b,
                            onChange: function (e) {
                                m(e.currentTarget.files?.[0]);
                            },
                            multiple: !1,
                            filters: r,
                        }),
                    ],
                }),
            });
        },
    },
);

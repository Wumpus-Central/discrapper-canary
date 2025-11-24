n.d(t, { Z: () => h });
var r = n(54381),
    i = n(793030),
    a = n(481060),
    o = n(834129),
    s = n(594174),
    l = n(537363),
    c = n(606097),
    u = n(388032),
    d = n(887819),
    f = n(617842);
let _ = () => {
        let e = () => {};
        return (0, r.jsx)(a.Button, {
            variant: "expressive",
            size: "md",
            text: u.intl.string(c.default.rjuKse),
            icon: i.SrA,
            onClick: e,
        });
    },
    p = () => {
        let e = () => {};
        return (0, r.jsx)(a.Button, {
            variant: "expressive",
            size: "md",
            text: u.intl.string(c.default["eYHh+z"]),
            onClick: e,
        });
    },
    h = (e) => {
        let { message: t, channel: n, compact: c } = e,
            u = s.default.getCurrentUser();
        if (null == u) return null;
        let h = t.author,
            m = u.id === h.id,
            g = m ? (0, l.c)(h, n) : (0, l.l)(h, !1);
        if (null == g) return null;
        let { message: E, header: b, body: y } = g;
        return (0, r.jsxs)(o.Z, {
            className: d.systemMessageContainer,
            compact: c,
            iconNode: (0, r.jsx)(i.SrA, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: E,
                }),
                (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    className: d.embedContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: f,
                            alt: "",
                            className: d.image,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.content,
                            children: [
                                (0, r.jsx)(a.Cts, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: d.title,
                                    children: b,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: y,
                                }),
                                (0, r.jsx)("div", {
                                    className: d.buttonContainer,
                                    children: m ? (0, r.jsx)(p, {}) : (0, r.jsx)(_, {}),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };

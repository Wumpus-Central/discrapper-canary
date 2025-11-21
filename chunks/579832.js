n.d(t, { Z: () => E });
var r = n(54381),
    i = n(793030),
    a = n(481060),
    o = n(834129),
    s = n(594174),
    l = n(51144),
    c = n(282793),
    u = n(606097),
    d = n(388032),
    f = n(887819),
    _ = n(617842);
let p = () => {
        let e = () => {};
        return (0, r.jsx)(a.Button, {
            variant: "expressive",
            size: "md",
            text: d.intl.string(u.default.rjuKse),
            icon: i.SrA,
            onClick: e,
        });
    },
    h = () => {
        let e = () => {};
        return (0, r.jsx)(a.Button, {
            variant: "expressive",
            size: "md",
            text: d.intl.string(u.default["eYHh+z"]),
            onClick: e,
        });
    },
    m = (e, t) => {
        var n;
        let r = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            i = s.default.getUser(r);
        if (null == i) return null;
        let a = (0, l.XM)(i),
            o = (0, c.sO)(),
            f = d.intl.format(u.default["5uwv8J"], {
                receiverName: a,
                premiumGroupProductName: o,
            });
        return {
            header: f,
            title: d.intl.format(u.default.DkycE7, { premiumGroupProductName: o }),
            body: d.intl.format(u.default["AmE0B/"], { receiverName: a }),
        };
    },
    g = (e) => {
        let t = (0, l.XM)(e),
            n = (0, c.sO)(),
            r = d.intl.format(u.default.ssge1y, {
                senderName: t,
                premiumGroupProductName: n,
                helpCenterLink: c.j3,
            });
        return {
            header: r,
            title: d.intl.string(u.default.SdOQ6w),
            body: d.intl.format(u.default.MkcdX8, { senderName: t }),
        };
    },
    E = (e) => {
        let { message: t, channel: n, compact: l } = e,
            c = s.default.getCurrentUser();
        if (null == c) return null;
        let u = t.author,
            d = c.id === u.id,
            E = d ? m(u, n) : g(u);
        if (null == E) return null;
        let { header: b, title: y, body: O } = E;
        return (0, r.jsxs)(o.Z, {
            className: f.systemMessageContainer,
            compact: l,
            iconNode: (0, r.jsx)(i.SrA, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: b,
                }),
                (0, r.jsxs)(a.Kqy, {
                    direction: "horizontal",
                    className: f.embedContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: _,
                            alt: "",
                            className: f.image,
                        }),
                        (0, r.jsxs)("div", {
                            className: f.content,
                            children: [
                                (0, r.jsx)(a.Cts, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: f.title,
                                    children: y,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: O,
                                }),
                                (0, r.jsx)("div", {
                                    className: f.buttonContainer,
                                    children: d ? (0, r.jsx)(h, {}) : (0, r.jsx)(p, {}),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };

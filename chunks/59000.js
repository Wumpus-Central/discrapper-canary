"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(582754),
    r = n(397927),
    a = n(736653),
    o = n(58149),
    c = n(742589),
    d = n(652215),
    u = n(985018),
    h = n(3628),
    A = n(745652),
    p = n(855324);
let g = () => {
    let e = (0, a.Ay)();
    s.useEffect(() => {
        o.Ay.trackWithMetadata(d.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, l.Mw)(e) ? A : p;
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsxs)(c.A, {
                toolbar: (0, i.jsx)(s.Fragment, {}),
                children: [
                    (0, i.jsx)(c.A.Icon, { icon: r.N$i, "aria-hidden": !0 }),
                    (0, i.jsx)(c.A.Title, { children: u.intl.string(u.t["8LKchl"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: h.Qs,
                children: [
                    (0, i.jsx)("img", { alt: "", className: h.j0, src: t }),
                    (0, i.jsx)(r.Heading, {
                        className: h.Zd,
                        variant: "heading-lg/medium",
                        children: u.intl.string(u.t.m9gRVN),
                    }),
                    (0, i.jsx)(r.Text, {
                        className: h.fh,
                        variant: "text-md/normal",
                        children: u.intl.string(u.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};

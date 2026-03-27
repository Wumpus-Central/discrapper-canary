"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(825244),
    a = n(652215),
    o = n(985018),
    c = n(3580);
let d = (e) => {
    let { guild: t, onAddGuild: d } = e,
        u = s.useCallback(() => {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("71281")]).then(n.bind(n, 234355));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        source: a.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: a.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: c.h2,
        children: [
            (0, i.jsx)("img", { className: c.hd, alt: "", src: n(668778) }),
            (0, i.jsx)(l.Heading, {
                className: c._U,
                variant: "heading-xl/semibold",
                children: o.intl.format(o.t.vyvrpC, { guildName: t.name }),
            }),
            (0, i.jsx)(l.Text, { variant: "text-md/normal", className: c.YI, children: o.intl.string(o.t.WypE0i) }),
            null != d
                ? (0, i.jsx)(r.E, {
                      className: c.c5,
                      iconUrl: n(928202),
                      header: o.intl.string(o.t.hyK15i),
                      completed: !1,
                      onClick: d,
                  })
                : null,
            (0, i.jsx)(r.E, {
                className: c.c5,
                iconUrl: n(799258),
                header: o.intl.string(o.t.L4bwJ9),
                completed: !1,
                onClick: u,
            }),
        ],
    });
};

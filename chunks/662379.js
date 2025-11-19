n.d(t, { Z: () => g }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(293810),
    a = n(388032),
    s = n(948234),
    o = n(961618),
    c = n(217684),
    d = n(174618);
function u(e) {
    let { imageSrc: t, description: n } = e;
    return (0, r.jsxs)("div", {
        className: s.howItWorksCard,
        children: [
            (0, r.jsx)("div", {
                className: s.howItWorksImageContainer,
                children: (0, r.jsx)("img", {
                    className: s.howItWorksImage,
                    src: t,
                    alt: "",
                }),
            }),
            (0, r.jsx)("div", {
                className: s.howItWorksDescription,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "header-primary",
                    children: n,
                }),
            }),
        ],
    });
}
function g() {
    let e = [
        {
            imageSrc: d,
            description: a.intl.string(a.t.lT0ZNS),
        },
        {
            imageSrc: o,
            description: a.intl.string(a.t.ihN2Wb),
        },
        {
            imageSrc: c,
            description: a.intl.string(a.t.c8krDQ),
        },
    ];
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: a.intl.string(a.t.R9rNIk),
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)("div", {
                className: s.howItWorksContainer,
                children: e.map((e) =>
                    (0, r.jsx)(
                        u,
                        {
                            imageSrc: e.imageSrc,
                            description: e.description,
                        },
                        e.imageSrc,
                    ),
                ),
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: a.intl.format(a.t.oxW30N, { creatorPortalUrl: l.C5 }),
            }),
        ],
    });
}

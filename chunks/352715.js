a.d(t, { t: () => c });
var i = a(248702),
    s = a(517e3),
    d = a(727571),
    n = a(542075),
    c = ({ variant: e, icon: t, title: a, subtitle: c, titleRef: r, hideFooterBranding: o }) =>
        (0, i.v)(d.t, {
            className: `IncodeStatusPage IncodeStatusPage--${e}`,
            hideFooterBranding: o,
            children: (0, i.v)("div", {
                class: "IncodeStatusPageContainer",
                children: [
                    t,
                    (0, i.v)(s.r, { size: 16 }),
                    (0, i.v)(n.t, {
                        ref: r,
                        className: "IncodeStatusPageTitle",
                        tabIndex: r ? -1 : void 0,
                        children: a,
                    }),
                    c && (0, i.v)("p", { class: "IncodeStatusPageSubtitle", children: c }),
                ],
            }),
        });

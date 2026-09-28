t.d(e, { t: () => l });
var s = t(768611),
    i = t(242268),
    d = t(326144),
    c = t(538289),
    l = ({ variant: a, icon: e, title: t, subtitle: l, hideFooterBranding: n }) =>
        (0, s.v)(d.t, {
            className: `IncodeStatusPage IncodeStatusPage--${a}`,
            hideFooterBranding: n,
            children: (0, s.v)("div", {
                class: "IncodeStatusPageContainer",
                role: "loading" === a ? "status" : void 0,
                "aria-live": "loading" === a ? "polite" : void 0,
                children: [
                    e,
                    (0, s.v)(i.r, { size: 16 }),
                    (0, s.v)(c.t, { className: "IncodeStatusPageTitle", children: t }, a),
                    l && (0, s.v)("p", { class: "IncodeStatusPageSubtitle", children: l }),
                ],
            }),
        });

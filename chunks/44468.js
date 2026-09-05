t.d(e, { t: () => l });
var s = t(252422),
    i = t(313209),
    d = t(487171),
    c = t(418906),
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

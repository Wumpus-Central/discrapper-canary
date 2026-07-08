i.d(t, { t: () => s });
var r = i(248702),
    n = i(517e3),
    o = i(136847),
    a = i(573133),
    s = ({
        title: e,
        titleId: t,
        subtitle: i,
        titleTopSlot: s,
        className: l,
        logo: c,
        children: d,
        hideHeader: u,
        hideFooterBranding: h,
        "data-testid": p,
        "data-permission-status": f,
    }) => {
        let m = (0, r.l)(null);
        (0, r._)(() => {
            m.current?.focus();
        }, []);
        let g = (0, a.n)({ hideHeader: u, hideFooterBranding: h, logo: c, defaultLogoSrc: o.t }),
            v = e || i || s;
        return (0, r.v)("div", {
            class: `IncodePageContainer ${l ?? ""}`,
            "data-testid": p,
            "data-permission-status": f,
            children: (0, r.v)("main", {
                class: "IncodePageInner",
                children: [
                    !g.hideHeader &&
                        (0, r.v)("header", {
                            class: "IncodePageHeader",
                            children: (0, r.v)("img", {
                                src: g.logoSrc,
                                height: g.logoHeightPx,
                                class: "IncodePageLogo",
                                "aria-hidden": "true",
                            }),
                        }),
                    v
                        ? (0, r.v)(r.S, {
                              children: [
                                  (0, r.v)(n.r, { size: g.hideHeader ? 40 : 24 }),
                                  (0, r.v)("div", {
                                      class: "IncodePageTitleContainer",
                                      children: [
                                          s
                                              ? (0, r.v)(r.S, {
                                                    children: [
                                                        (0, r.v)("div", {
                                                            class: "IncodePageTitleTopSlot",
                                                            children: s,
                                                        }),
                                                        (0, r.v)(n.r, { size: 12 }),
                                                    ],
                                                })
                                              : null,
                                          e
                                              ? (0, r.v)("h2", {
                                                    ref: m,
                                                    id: t,
                                                    class: "IncodePageTitle",
                                                    tabIndex: -1,
                                                    children: e,
                                                })
                                              : null,
                                          i
                                              ? (0, r.v)(r.S, {
                                                    children: [
                                                        (0, r.v)(n.r, { size: 12 }),
                                                        (0, r.v)("p", { class: "IncodePageSubtitle", children: i }),
                                                    ],
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          })
                        : null,
                    (0, r.v)("div", { class: "IncodePageContent", children: d }),
                    g.hideFooterBranding
                        ? null
                        : (0, r.v)("div", {
                              class: "IncodePageFooter",
                              children: (0, r.v)("div", {
                                  class: "IncodePageFooterInner",
                                  children: (0, r.v)(a.t, {}),
                              }),
                          }),
                ],
            }),
        });
    };

e.d(t, { WatchlistForBusiness: () => p });
var i = e(529058),
    n = e(287822),
    a = e(748922),
    u = e(898159),
    o = e(898369),
    l = e(188043),
    r = e(787146),
    c = e(430671),
    d = e(96798),
    h = e(296767),
    m = e(13287),
    b = e(317660),
    v = e(786414),
    f = ({ onFinish: s }) => {
        let { t } = (0, i.n)(),
            [e, u] = (0, a.u)(() => (0, v.E)());
        if (
            ((0, n._)(() => {
                u.load();
            }, [u]),
            (0, a.c)({ status: "finished" === e.status ? "finished" : "loading", onFinish: s }),
            "finished" === e.status)
        )
            return null;
        if ("submitting" === e.status)
            return (0, n.v)(b.t, {
                variant: "loading",
                icon: (0, n.v)(o.t, { size: 64 }),
                title: t("watchlistForBusiness.processing"),
                subtitle: t("common.wontTakeLong"),
            });
        if ("success" === e.status)
            return (0, n.v)(b.t, { variant: "success", icon: (0, n.v)(c.t, { size: 64 }), title: t("common.done") });
        if ("form" === e.status || "idle" === e.status) {
            let s = "form" === e.status ? e : null;
            return (0, n.v)(l.t, {
                className: "IncodeWatchlistForBusinessPage",
                title: t("watchlistForBusiness.title"),
                hideFooterBranding: !0,
                children: (0, n.v)("form", {
                    class: "IncodeWatchlistForBusinessForm",
                    onSubmit: (s) => {
                        s.preventDefault(), u.submit();
                    },
                    autoComplete: "off",
                    children: [
                        (0, n.v)(m.t, {
                            id: "watchlist-for-business-country",
                            label: t("watchlistForBusiness.country"),
                            value: s?.country ?? "US",
                            onChange: (s) => u.setCountry(s),
                            "data-testid": "watchlist-for-business-country-selector",
                        }),
                        (0, n.v)(d.t, {
                            id: "businessName",
                            name: "businessName",
                            label: t("watchlistForBusiness.businessName"),
                            value: s?.businessName ?? "",
                            onInput: (s) => u.setBusinessName(s.target.value),
                        }),
                        (0, n.v)(r.t, {
                            type: "submit",
                            disabled: !s?.isValid,
                            "data-testid": "watchlist-for-business-submit",
                            children: t("watchlistForBusiness.continue"),
                        }),
                    ],
                }),
            });
        }
        return null;
    },
    p = ({ onFinish: s }) => (0, n.v)(u.t, { children: (0, n.v)(f, { onFinish: s }) });
(0, h.t)(p, "incode-watchlist-for-business");

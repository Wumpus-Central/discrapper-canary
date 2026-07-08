e.d(t, { WatchlistForBusiness: () => F });
var i = e(31144),
    n = e(248702),
    u = e(899656),
    a = e(458741),
    o = e(517e3),
    l = e(727571),
    r = e(242003),
    c = e(886567),
    d = e(489771),
    h = e(868282),
    m = e(111332),
    b = e(352715),
    f = e(984441),
    v = ({ onFinish: s }) => {
        let { t: t } = (0, i.n)(),
            [e, a] = (0, u.o)(() => (0, f.E)()),
            h = (0, n.l)(null);
        if (
            ((0, n._)(() => {
                a.load();
            }, [a]),
            (0, n._)(() => {
                "finished" === e.status && s?.();
            }, [e.status, s]),
            (0, n._)(() => {
                "success" === e.status && h.current?.focus();
            }, [e.status]),
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
            return (0, n.v)(b.t, {
                variant: "success",
                icon: (0, n.v)(c.t, { size: 64 }),
                title: t("common.done"),
                titleRef: h,
            });
        if ("form" === e.status || "idle" === e.status) {
            let s = "form" === e.status ? e : null;
            return (0, n.v)(l.t, {
                className: "IncodeWatchlistForBusinessPage",
                title: t("watchlistForBusiness.title"),
                hideFooterBranding: !0,
                children: (0, n.v)("form", {
                    class: "IncodeWatchlistForBusinessForm",
                    onSubmit: (s) => {
                        s.preventDefault(), a.submit();
                    },
                    autoComplete: "off",
                    children: [
                        (0, n.v)(m.t, {
                            id: "watchlist-for-business-country",
                            label: t("watchlistForBusiness.country"),
                            value: s?.country ?? "US",
                            onChange: (s) => a.setCountry(s),
                            "data-testid": "watchlist-for-business-country-selector",
                        }),
                        (0, n.v)(d.t, {
                            id: "businessName",
                            name: "businessName",
                            label: t("watchlistForBusiness.businessName"),
                            value: s?.businessName ?? "",
                            onInput: (s) => a.setBusinessName(s.target.value),
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
    F = ({ onFinish: s }) => (0, n.v)(a.t, { children: (0, n.v)(v, { onFinish: s }) });
(0, h.t)(F, "incode-watchlist-for-business");

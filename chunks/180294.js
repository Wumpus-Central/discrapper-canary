n.d(t, { A: () => x, P: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(817281),
    o = n(915193),
    d = n(419954),
    c = n(723702),
    u = n(964404),
    m = n(780964),
    g = n(355097),
    _ = n(985018);
let x = (0, d.Qx)(m.X.ADVANCED_SEARCH_PROVIDER, {
        useTitle: () => _.intl.string(_.t.k96Iu0),
        useSubtitle: () => _.intl.string(_.t.D1anhN),
        usePredicate: () => c.isPlatformEmbedded,
        useOptions: function () {
            return s.useMemo(
                () => [
                    { name: "Google", value: g.YL.GOOGLE },
                    { name: "Bing", value: g.YL.BING },
                    { name: "DuckDuckGo", value: g.YL.DUCKDUCKGO },
                    { name: "Custom", value: g.YL.CUSTOM },
                ],
                [],
            );
        },
        useValue: () => (0, l.bG)([u.Ay], () => u.Ay.searchProvider),
        setValue: (e) => {
            a.Ay.updatedUnsyncedSettings({ searchProvider: e });
        },
        useSearchTerms: () => [_.intl.string(_.t.k96Iu0), _.intl.string(_.t.D1anhN)],
    }),
    A = (0, d.E2)(m.X.ADVANCED_CUSTOM_SEARCH_URL, {
        usePredicate: () => {
            let e = (0, l.bG)([u.Ay], () => u.Ay.searchProvider);
            return c.isPlatformEmbedded && e === g.YL.CUSTOM;
        },
        useSearchTerms: () => [_.intl.string(_.t["++cFdM"]), _.intl.string(_.t.dowJDx)],
        Component: function () {
            let e = (0, l.bG)([u.Ay], () => u.Ay.customSearchUrl),
                t = e.length > 0 && !(0, o.P)(e);
            return (0, i.jsx)(r.ksK, {
                label: _.intl.string(_.t["++cFdM"]),
                description: _.intl.string(_.t.dowJDx),
                placeholder: _.intl.string(_.t.SI0yvX),
                value: e,
                error: t ? _.intl.string(_.t.dPVuGy) : void 0,
                onChange: (e) => {
                    a.Ay.updatedUnsyncedSettings({ customSearchUrl: e });
                },
            });
        },
    });

i.d(e, { r: () => _ });
var n = i(311907),
    l = i(964486),
    s = i(839214),
    r = i(955572),
    u = i(775602),
    a = i(502229),
    o = i(419954),
    T = i(975571),
    A = i(780964),
    S = i(652215),
    E = i(985018);
let d = (0, s.D)(() => ({
        syncEnabled: null,
        updateTimeout: null,
    })),
    _ = (0, o.zD)(A.X.SYNC_FORCED_COLORS, {
        useTitle: () => E.intl.string(E.t.cguiec),
        useSubtitle: () => E.intl.format(E.t.GwEVE2, { learnMoreLink: T.A.getArticleURL(S.MVz.FORCED_COLORS) }),
        useValue: () => {
            var t;
            let e = (0, n.bG)([u.A], () => u.A.syncForcedColors);
            return (
                (0, l.Ay)(() => {
                    d.setState({ syncEnabled: u.A.syncForcedColors });
                }),
                null != (t = d.useState((t) => t.syncEnabled)) ? t : e
            );
        },
        setValue: (t) => {
            let { updateTimeout: e } = d.getState();
            if (null != e) {
                clearTimeout(e),
                    d.setState({
                        syncEnabled: t,
                        updateTimeout: null,
                    });
                return;
            }
            if (t === u.A.syncForcedColors) return void d.setState({ syncEnabled: t });
            let i = setTimeout(() => {
                (0, r.D3)(t), d.setState({ updateTimeout: null });
            }, 150);
            d.setState({
                syncEnabled: t,
                updateTimeout: i,
            });
        },
        usePredicate: () => (0, a.D)(),
    });

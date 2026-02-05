i.d(e, { r: () => g });
var n = i(311907),
    l = i(964486),
    s = i(839214),
    r = i(955572),
    a = i(775602),
    u = i(502229),
    o = i(419954),
    d = i(975571),
    T = i(780964),
    A = i(652215),
    S = i(985018);
let E = (0, s.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    g = (0, o.zD)(T.X.SYNC_FORCED_COLORS, {
        useTitle: () => S.intl.string(S.t.cguiec),
        useSubtitle: () => S.intl.format(S.t.GwEVE2, { learnMoreLink: d.A.getArticleURL(A.MVz.FORCED_COLORS) }),
        useValue: () => {
            let t = (0, n.bG)([a.A], () => a.A.syncForcedColors);
            return (
                (0, l.Ay)(() => {
                    E.setState({ syncEnabled: a.A.syncForcedColors });
                }),
                E.useState((t) => t.syncEnabled) ?? t
            );
        },
        setValue: (t) => {
            let { updateTimeout: e } = E.getState();
            if (null != e) {
                clearTimeout(e), E.setState({ syncEnabled: t, updateTimeout: null });
                return;
            }
            if (t === a.A.syncForcedColors) return void E.setState({ syncEnabled: t });
            let i = setTimeout(() => {
                (0, r.D3)(t), E.setState({ updateTimeout: null });
            }, 150);
            E.setState({ syncEnabled: t, updateTimeout: i });
        },
        usePredicate: () => (0, u.D)(),
    });

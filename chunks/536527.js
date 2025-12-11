n.d(e, { r: () => E });
var i = n(442837),
    l = n(493773),
    s = n(972959),
    u = n(857595),
    r = n(607070),
    a = n(627845),
    o = n(509613),
    c = n(63063),
    T = n(313789),
    d = n(981631),
    S = n(388032);
let g = (0, s.H)(() => ({
        syncEnabled: null,
        updateTimeout: null,
    })),
    E = (0, o.qs)(T.n.SYNC_FORCED_COLORS, {
        useTitle: () => S.intl.string(S.t.cguiec),
        useSubtitle: () => S.intl.format(S.t.GwEVE2, { learnMoreLink: c.Z.getArticleURL(d.BhN.FORCED_COLORS) }),
        useValue: () => {
            var t;
            let e = (0, i.e7)([r.Z], () => r.Z.syncForcedColors);
            return (
                (0, l.ZP)(() => {
                    g.setState({ syncEnabled: r.Z.syncForcedColors });
                }),
                null != (t = g.useState((t) => t.syncEnabled)) ? t : e
            );
        },
        setValue: (t) => {
            let { updateTimeout: e } = g.getState();
            if (null != e) {
                clearTimeout(e),
                    g.setState({
                        syncEnabled: t,
                        updateTimeout: null,
                    });
                return;
            }
            if (t === r.Z.syncForcedColors) return void g.setState({ syncEnabled: t });
            let n = setTimeout(() => {
                (0, u.qz)(t), g.setState({ updateTimeout: null });
            }, 150);
            g.setState({
                syncEnabled: t,
                updateTimeout: n,
            });
        },
        usePredicate: () => (0, a.b)(),
    });

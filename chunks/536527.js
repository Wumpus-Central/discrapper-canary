n.d(e, { r: () => g });
var i = n(442837),
    l = n(493773),
    s = n(972959),
    u = n(857595),
    r = n(607070),
    a = n(627845),
    o = n(509613),
    S = n(63063),
    T = n(313789),
    c = n(981631),
    E = n(388032);
let d = (0, s.H)(() => ({
        syncEnabled: null,
        updateTimeout: null,
    })),
    g = (0, o.qs)(T.n.SYNC_FORCED_COLORS, {
        useTitle: () => E.intl.string(E.t.cguiec),
        useSubtitle: () => E.intl.format(E.t.GwEVE2, { learnMoreLink: S.Z.getArticleURL(c.BhN.FORCED_COLORS) }),
        useValue: () => {
            var t;
            let e = (0, i.e7)([r.Z], () => r.Z.syncForcedColors);
            return (
                (0, l.ZP)(() => {
                    d.setState({ syncEnabled: r.Z.syncForcedColors });
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
            if (t === r.Z.syncForcedColors) return void d.setState({ syncEnabled: t });
            let n = setTimeout(() => {
                (0, u.qz)(t), d.setState({ updateTimeout: null });
            }, 150);
            d.setState({
                syncEnabled: t,
                updateTimeout: n,
            });
        },
        usePredicate: () => (0, a.b)(),
    });

i.d(n, { Z: () => s });
var t = i(200651),
    a = i(192379),
    r = i(481060);
function s(e) {
    let n = a.useCallback(
        (n) => {
            n.stopPropagation(),
                (0, r.ZDy)(async () => {
                    let { default: n } = await i.e('13965').then(i.bind(i, 666083));
                    return (i) =>
                        (0, t.jsx)(n, {
                            powerup: e,
                            ...i
                        });
                });
        },
        [e]
    );
    return {
        onActivate: n,
        onDeactivate: a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        onShowMore: a.useCallback(() => {
            (0, r.ZDy)(async () => {
                let { default: n } = await i.e('78718').then(i.bind(i, 640139));
                return (i) =>
                    (0, t.jsx)(n, {
                        powerup: e,
                        ...i
                    });
            });
        }, [e])
    };
}

i.d(e, { Z: () => o });
var t = i(200651),
    a = i(192379),
    r = i(481060);
function o(n) {
    return {
        activatePowerup: a.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, r.ZDy)(async () => {
                        let { default: e } = await i.e('13965').then(i.bind(i, 666083));
                        return (i) =>
                            (0, t.jsx)(e, {
                                powerup: n,
                                ...i
                            });
                    });
            },
            [n]
        ),
        deactivatePowerup: a.useCallback((n) => {
            n.stopPropagation();
        }, [])
    };
}

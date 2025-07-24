n.d(t, { V: () => d });
var r = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(695346),
    a = n(885110),
    s = n(626135),
    c = n(316496),
    u = n(981631);
function d() {
    let { variantName: e } = (0, c.D)('not sharing link'),
        t = o.G6.useSetting(),
        n = (0, i.e7)([a.Z], () => a.Z.getStatus());
    (0, r.useEffect)(() => {
        s.default.track(u.rMx.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: t,
            status: n,
            rtc_popout_available: 'treatment_2' === e || !t || n === l.Skl.INVISIBLE
        });
    }, [t, n, e]);
}

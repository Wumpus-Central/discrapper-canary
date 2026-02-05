n.d(t, { z: () => c });
var i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(253932),
    r = n(461213),
    o = n(954571),
    d = n(652215);
function c() {
    let e = a.tz.useSetting(),
        t = (0, l.bG)([r.A], () => r.A.getStatus());
    (0, i.useEffect)(() => {
        o.default.track(d.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === s.clD.INVISIBLE,
        });
    }, [e, t]);
}

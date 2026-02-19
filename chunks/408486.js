"use strict";
n.d(t, { z: () => d });
var i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(253932),
    a = n(461213),
    o = n(954571),
    c = n(652215);
function d() {
    let e = r.tz.useSetting(),
        t = (0, s.bG)([a.A], () => a.A.getStatus());
    (0, i.useEffect)(() => {
        o.default.track(c.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === l.clD.INVISIBLE,
        });
    }, [e, t]);
}

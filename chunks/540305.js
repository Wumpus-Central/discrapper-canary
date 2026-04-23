"use strict";
n.d(t, { A: () => i });
var r = n(15285);
function i(e) {
    let t, n;
    if (null == e) return {};
    let i = e.sourcePid;
    if (null != i) {
        let e = r.Ay.getGameForPID(i);
        (t = e?.name), (n = e?.id);
    }
    return { soundshare_session: e.soundshareSession, share_game_name: t, share_game_id: n };
}

"use strict";
n.d(t, { A: () => r });
var i = n(328153);
function r(e) {
    let t, n;
    if (null == e) return {};
    let r = e.sourcePid;
    if (null != r) {
        let e = i.Ay.getGameForPID(r);
        (t = e?.name), (n = e?.id);
    }
    return { soundshare_session: e.soundshareSession, share_game_name: t, share_game_id: n };
}

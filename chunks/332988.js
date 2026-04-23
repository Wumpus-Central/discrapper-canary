"use strict";
n.d(t, { s: () => a, u: () => o });
var r = n(652215);
let i = window.GLOBAL_ENV.CDN_HOST;
function s(e, t) {
    return null != i ? `https://${i}${e}` : t;
}
let a = s("/detectables/games.json", r.Rsh.GAMES_DETECTABLE),
    o = s("/detectables/non-games.json", r.Rsh.NON_GAMES_DETECTABLE);

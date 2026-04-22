"use strict";
let r;
n.d(t, { A: () => E, v: () => f }), n(321073);
var i = n(735438),
    s = n.n(i),
    a = n(77729),
    o = n(626584),
    l = n(723702),
    u = n(837921);
let d = [];
function c(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e;
}
function _(e) {
    null != e &&
        "" !== e &&
        ((e = c(e)).endsWith("/") || (e += "/"), d.push(e), (0, l.isLinux)() && d.push("/var" + e));
}
function f(e) {
    e = c(e);
    let t = !1;
    if (
        (d.forEach((n) => {
            !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
        }),
        !t)
    )
        return null;
    if ((0, l.isMac)()) {
        let t = e.lastIndexOf(".app/");
        -1 !== t && (e = e.substr(0, t + 4));
    }
    return (e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/"));
}
async function E() {
    if (null != r) return r;
    try {
        await u.Ay.ensureModule("discord_game_utils"), (r = await u.Ay.requireModule("discord_game_utils"));
    } catch (e) {
        new o.A("GamesActionCreators").error("could not load discord_game_utils", e);
    }
    if ((0, l.isWindows)()) {
        let e = a.A.process.env;
        _(e.LOCALAPPDATA),
            _(e["PROGRAMFILES(X86)"]),
            _(e.PROGRAMFILES),
            _(e.PROGRAMW6432),
            _(e.PROGRAMDATA),
            _("/games/"),
            _("/steamlibrary/steamapps/common/");
    } else
        (0, l.isMac)() ? _("/Applications") : (0, l.isLinux)() && (_("/app/bin"), _("/usr/bin"), _("/usr/local/bin"));
    let e = a.A.app.getPath;
    return (
        _(await e("home")),
        _(await e("appData")),
        _(await e("desktop")),
        _(await e("documents")),
        _(await e("downloads")),
        (d = s().uniq(d)).sort((e, t) => t.length - e.length),
        r
    );
}

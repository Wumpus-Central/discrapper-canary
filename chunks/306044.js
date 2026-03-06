"use strict";
let r;
n.d(t, { A: () => h, v: () => p }), n(321073);
var i = n(735438),
    s = n.n(i),
    a = n(77729),
    o = n(626584),
    l = n(723702),
    u = n(837921);
let c = [],
    d = "dosbox.exe";
function _(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e;
}
function f(e) {
    null != e &&
        "" !== e &&
        ((e = _(e)).endsWith("/") || (e += "/"), c.push(e), (0, l.isLinux)() && c.push("/var" + e));
}
function p(e) {
    e = _(e);
    let t = !1;
    if (
        (c.forEach((n) => {
            !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
        }),
        !t)
    )
        return null;
    if ((0, l.isMac)()) {
        let t = e.lastIndexOf(".app/");
        -1 !== t && (e = e.substr(0, t + 4));
    }
    return (e = e.includes(d) ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/"));
}
async function h() {
    if (null != r) return r;
    try {
        await u.Ay.ensureModule("discord_game_utils"), (r = await u.Ay.requireModule("discord_game_utils"));
    } catch (e) {
        new o.A("GamesActionCreators").error("could not load discord_game_utils", e);
    }
    if ((0, l.isWindows)()) {
        let e = a.A.process.env;
        f(e.LOCALAPPDATA),
            f(e["PROGRAMFILES(X86)"]),
            f(e.PROGRAMFILES),
            f(e.PROGRAMW6432),
            f(e.PROGRAMDATA),
            f("/games/"),
            f("/steamlibrary/steamapps/common/");
    } else
        (0, l.isMac)() ? f("/Applications") : (0, l.isLinux)() && (f("/app/bin"), f("/usr/bin"), f("/usr/local/bin"));
    let e = a.A.app.getPath;
    return (
        f(await e("home")),
        f(await e("appData")),
        f(await e("desktop")),
        f(await e("documents")),
        f(await e("downloads")),
        (c = s().uniq(c)).sort((e, t) => t.length - e.length),
        r
    );
}

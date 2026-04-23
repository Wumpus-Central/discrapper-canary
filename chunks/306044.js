"use strict";
let i;
n.d(t, { A: () => h, v: () => E }), n(321073);
var r = n(735438),
    s = n.n(r),
    a = n(77729),
    o = n(626584),
    l = n(723702),
    d = n(19575);
let _ = [];
function u(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e;
}
function c(e) {
    null != e &&
        "" !== e &&
        ((e = u(e)).endsWith("/") || (e += "/"), _.push(e), (0, l.isLinux)() && _.push("/var" + e));
}
function E(e) {
    e = u(e);
    let t = !1;
    if (
        (_.forEach((n) => {
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
async function h() {
    if (null != i) return i;
    try {
        await d.Ay.ensureModule("discord_game_utils"), (i = await d.Ay.requireModule("discord_game_utils"));
    } catch (e) {
        new o.A("GamesActionCreators").error("could not load discord_game_utils", e);
    }
    if ((0, l.isWindows)()) {
        let e = a.A.process.env;
        c(e.LOCALAPPDATA),
            c(e["PROGRAMFILES(X86)"]),
            c(e.PROGRAMFILES),
            c(e.PROGRAMW6432),
            c(e.PROGRAMDATA),
            c("/games/"),
            c("/steamlibrary/steamapps/common/");
    } else
        (0, l.isMac)() ? c("/Applications") : (0, l.isLinux)() && (c("/app/bin"), c("/usr/bin"), c("/usr/local/bin"));
    let e = a.A.app.getPath;
    return (
        c(await e("home")),
        c(await e("appData")),
        c(await e("desktop")),
        c(await e("documents")),
        c(await e("downloads")),
        (_ = s().uniq(_)).sort((e, t) => t.length - e.length),
        i
    );
}

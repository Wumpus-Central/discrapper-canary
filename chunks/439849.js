let r;
n.d(t, {
    F: () => _,
    Z: () => m,
}),
    n(704826),
    n(35282),
    n(539854),
    n(642613);
var i = n(392711),
    a = n.n(i),
    o = n(579806),
    s = n(710845),
    l = n(358085),
    c = n(998502);
let u = [],
    d = "dosbox.exe";
function f(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e;
}
function p(e) {
    null != e &&
        "" !== e &&
        ((e = f(e)).endsWith("/") || (e += "/"), u.push(e), (0, l.isLinux)() && u.push("/var" + e));
}
function _(e) {
    e = f(e);
    let t = !1;
    if (
        (u.forEach((n) => {
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
async function m() {
    if (null != r) return r;
    try {
        await c.ZP.ensureModule("discord_game_utils"), (r = await c.ZP.requireModule("discord_game_utils"));
    } catch (e) {
        new s.Z("GamesActionCreators").error("could not load discord_game_utils", e);
    }
    if ((0, l.isWindows)()) {
        let e = o.Z.process.env;
        p(e.LOCALAPPDATA),
            p(e["PROGRAMFILES(X86)"]),
            p(e.PROGRAMFILES),
            p(e.PROGRAMW6432),
            p(e.PROGRAMDATA),
            p("/games/"),
            p("/steamlibrary/steamapps/common/");
    } else
        (0, l.isMac)() ? p("/Applications") : (0, l.isLinux)() && (p("/app/bin"), p("/usr/bin"), p("/usr/local/bin"));
    let e = o.Z.remoteApp.getPath;
    return (
        p(await e("home")),
        p(await e("appData")),
        p(await e("desktop")),
        p(await e("documents")),
        p(await e("downloads")),
        (u = a().uniq(u)).sort((e, t) => t.length - e.length),
        r
    );
}

let i;
n.d(t, { A: () => A, v: () => E }), n(321073);
var r = n(435558),
    a = n.n(r),
    s = n(77729),
    l = n(626584),
    o = n(723702),
    d = n(19575);
let c = [];
function u(e) {
    return (e = e.toLowerCase()), (0, o.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e;
}
function _(e) {
    null != e &&
        "" !== e &&
        ((e = u(e)).endsWith("/") || (e += "/"), c.push(e), (0, o.isLinux)() && c.push("/var" + e));
}
function E(e) {
    e = u(e);
    let t = !1;
    if (
        (c.forEach((n) => {
            !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
        }),
        !t)
    )
        return null;
    if ((0, o.isMac)()) {
        let t = e.lastIndexOf(".app/");
        -1 !== t && (e = e.substr(0, t + 4));
    }
    return (e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/"));
}
async function A() {
    if (null != i) return i;
    try {
        await d.Ay.ensureModule("discord_game_utils"), (i = await d.Ay.requireModule("discord_game_utils"));
    } catch (e) {
        new l.A("GamesActionCreators").error("could not load discord_game_utils", e);
    }
    if ((0, o.isWindows)()) {
        let e = s.A.process.env;
        _(e.LOCALAPPDATA),
            _(e["PROGRAMFILES(X86)"]),
            _(e.PROGRAMFILES),
            _(e.PROGRAMW6432),
            _(e.PROGRAMDATA),
            _("/games/"),
            _("/steamlibrary/steamapps/common/");
    } else
        (0, o.isMac)() ? _("/Applications") : (0, o.isLinux)() && (_("/app/bin"), _("/usr/bin"), _("/usr/local/bin"));
    let e = s.A.app.getPath;
    return (
        _(await e("home")),
        _(await e("appData")),
        _(await e("desktop")),
        _(await e("documents")),
        _(await e("downloads")),
        (c = a().uniq(c)).sort((e, t) => t.length - e.length),
        i
    );
}

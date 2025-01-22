let i;
r.d(n, {
    F: function () {
        return g;
    },
    Z: function () {
        return E;
    }
});
var a = r(757143);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(579806),
    c = r(710845),
    d = r(358085),
    f = r(998502);
let p = [],
    h = 'dosbox.exe';
function _(e) {
    return (e = e.toLowerCase()), (0, d.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}
function m(e) {
    null != e && '' !== e && (!(e = _(e)).endsWith('/') && (e += '/'), p.push(e));
}
function g(e) {
    e = _(e);
    let n = !1;
    return (p.forEach((r) => {
        !n && e.startsWith(r) && ((e = e.substr(r.length)), (n = !0));
    }),
    n)
        ? (e = e.includes(h) ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/'))
        : null;
}
async function E() {
    if (null != i) return i;
    try {
        await f.ZP.ensureModule('discord_game_utils'), (i = await f.ZP.requireModule('discord_game_utils'));
    } catch (e) {
        new c.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, d.isWindows)()) {
        let e = u.Z.process.env;
        m(e.LOCALAPPDATA), m(e['PROGRAMFILES(X86)']), m(e.PROGRAMFILES), m(e.PROGRAMW6432), m(e.PROGRAMDATA), m('/games/'), m('/steamlibrary/steamapps/common/');
    }
    let e = u.Z.remoteApp.getPath;
    return m(await e('home')), m(await e('appData')), m(await e('desktop')), m(await e('documents')), m(await e('downloads')), (p = l().uniq(p)).sort((e, n) => n.length - e.length), i;
}

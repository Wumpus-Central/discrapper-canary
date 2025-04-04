let r;
n.d(t, {
    F: () => p,
    Z: () => h
}),
    n(757143),
    n(301563),
    n(653041),
    n(230036);
var i = n(392711),
    o = n.n(i),
    a = n(579806),
    s = n(710845),
    l = n(358085),
    c = n(998502);
let u = [],
    d = 'dosbox.exe';
function f(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}
function _(e) {
    null != e && '' !== e && ((e = f(e)).endsWith('/') || (e += '/'), u.push(e));
}
function p(e) {
    e = f(e);
    let t = !1;
    return (u.forEach((n) => {
        !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
    }),
    t)
        ? (e = e.includes(d) ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/'))
        : null;
}
async function h() {
    if (null != r) return r;
    try {
        await c.ZP.ensureModule('discord_game_utils'), (r = await c.ZP.requireModule('discord_game_utils'));
    } catch (e) {
        new s.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, l.isWindows)()) {
        let e = a.Z.process.env;
        _(e.LOCALAPPDATA), _(e['PROGRAMFILES(X86)']), _(e.PROGRAMFILES), _(e.PROGRAMW6432), _(e.PROGRAMDATA), _('/games/'), _('/steamlibrary/steamapps/common/');
    }
    let e = a.Z.remoteApp.getPath;
    return _(await e('home')), _(await e('appData')), _(await e('desktop')), _(await e('documents')), _(await e('downloads')), (u = o().uniq(u)).sort((e, t) => t.length - e.length), r;
}

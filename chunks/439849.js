let r;
(n.d(t, {
    F: () => p,
    Z: () => h
}),
    n(704826),
    n(35282),
    n(539854),
    n(642613));
var i = n(392711),
    a = n.n(i),
    o = n(579806),
    s = n(710845),
    l = n(358085),
    c = n(998502);
let u = [],
    d = 'dosbox.exe';
function _(e) {
    return ((e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e);
}
function f(e) {
    null != e && '' !== e && ((e = _(e)).endsWith('/') || (e += '/'), u.push(e));
}
function p(e) {
    e = _(e);
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
        (await c.ZP.ensureModule('discord_game_utils'), (r = await c.ZP.requireModule('discord_game_utils')));
    } catch (e) {
        new s.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, l.isWindows)()) {
        let e = o.Z.process.env;
        (f(e.LOCALAPPDATA), f(e['PROGRAMFILES(X86)']), f(e.PROGRAMFILES), f(e.PROGRAMW6432), f(e.PROGRAMDATA), f('/games/'), f('/steamlibrary/steamapps/common/'));
    }
    let e = o.Z.remoteApp.getPath;
    return (f(await e('home')), f(await e('appData')), f(await e('desktop')), f(await e('documents')), f(await e('downloads')), (u = a().uniq(u)).sort((e, t) => t.length - e.length), r);
}

let i;
n.d(t, {
    F: () => p,
    Z: () => h
}),
    n(757143),
    n(653041);
var r = n(392711),
    a = n.n(r),
    s = n(579806),
    o = n(710845),
    l = n(358085),
    u = n(998502);
let c = [],
    d = 'dosbox.exe';
function f(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}
function _(e) {
    null != e && '' !== e && ((e = f(e)).endsWith('/') || (e += '/'), c.push(e));
}
function p(e) {
    e = f(e);
    let t = !1;
    return (c.forEach((n) => {
        !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
    }),
    t)
        ? (e = e.includes(d) ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/'))
        : null;
}
async function h() {
    if (null != i) return i;
    try {
        await u.ZP.ensureModule('discord_game_utils'), (i = await u.ZP.requireModule('discord_game_utils'));
    } catch (e) {
        new o.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, l.isWindows)()) {
        let e = s.Z.process.env;
        _(e.LOCALAPPDATA), _(e['PROGRAMFILES(X86)']), _(e.PROGRAMFILES), _(e.PROGRAMW6432), _(e.PROGRAMDATA), _('/games/'), _('/steamlibrary/steamapps/common/');
    }
    let e = s.Z.remoteApp.getPath;
    return _(await e('home')), _(await e('appData')), _(await e('desktop')), _(await e('documents')), _(await e('downloads')), (c = a().uniq(c)).sort((e, t) => t.length - e.length), i;
}

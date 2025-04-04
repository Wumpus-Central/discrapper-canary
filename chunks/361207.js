n.d(t, {
    DW: () => y,
    Gn: () => O,
    t3: () => v,
    w4: () => E
});
var r = n(525654),
    i = n.n(r),
    o = n(271579),
    a = n(314897),
    s = n(981631);
let l = 'Ubuntu',
    c = 'Debian',
    u = 'Fedora',
    d = 'Red Hat',
    f = 'SuSE',
    _ = 'Linux',
    p = 'OS X',
    h = 'win',
    m = 'osx',
    g = 'linux';
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = t ? '/ptb' : '',
        i = null != n ? '&format='.concat(n) : '';
    return ''.concat(s.fzT.DESKTOP).concat(r, '?platform=').concat(e).concat(i);
}
function b() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (() => {
                  var e;
                  return null == (e = i().os) ? void 0 : e.family;
              })();
    return null == e ? h : -1 !== e.indexOf(l) || -1 !== e.indexOf(c) || -1 !== e.indexOf(u) || -1 !== e.indexOf(d) || -1 !== e.indexOf(f) || -1 !== e.indexOf(_) ? g : -1 !== e.indexOf(p) ? m : h;
}
function y(e) {
    return {
        [h]: 'Windows',
        [m]: 'Mac',
        [g]: 'Linux'
    }[b(e)];
}
function v() {
    let e = b(),
        t = e === g ? 'tar.gz' : null;
    return E(e, !1, t);
}
function O(e, t, n) {
    let r = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, o.ZP)(null != r ? r : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, o.WS)()
            });
        case 'Android':
            return (0, o.ZP)(null != r ? r : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, o.WS)()
            });
        default:
            return null != r ? r : 'https://www.discord.com';
    }
}

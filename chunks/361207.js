n.d(t, {
    DW: () => y,
    Gn: () => T,
    t3: () => I,
    w4: () => E
});
var i = n(525654),
    r = n.n(i),
    a = n(271579),
    s = n(314897),
    o = n(981631);
let l = 'Ubuntu',
    u = 'Debian',
    c = 'Fedora',
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
        i = t ? '/ptb' : '',
        r = null != n ? '&format='.concat(n) : '';
    return ''.concat(o.fzT.DESKTOP).concat(i, '?platform=').concat(e).concat(r);
}
function v() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (() => {
                  var e;
                  return null === (e = r().os) || void 0 === e ? void 0 : e.family;
              })();
    return null == e ? h : -1 !== e.indexOf(l) || -1 !== e.indexOf(u) || -1 !== e.indexOf(c) || -1 !== e.indexOf(d) || -1 !== e.indexOf(f) || -1 !== e.indexOf(_) ? g : -1 !== e.indexOf(p) ? m : h;
}
function y(e) {
    return {
        [h]: 'Windows',
        [m]: 'Mac',
        [g]: 'Linux'
    }[v(e)];
}
function I() {
    let e = v(),
        t = e === g ? 'tar.gz' : null;
    return E(e, !1, t);
}
function T(e, t, n) {
    let i = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, a.ZP)(null != i ? i : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        case 'Android':
            return (0, a.ZP)(null != i ? i : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        default:
            return null != i ? i : 'https://www.discord.com';
    }
}

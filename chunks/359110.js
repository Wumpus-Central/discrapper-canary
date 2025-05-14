n.d(t, {
    Kh: () => _,
    ad: () => p
});
var r = n(512722),
    i = n.n(r),
    o = n(493683),
    a = n(475179),
    s = n(727429),
    l = n(592125),
    c = n(703656),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    let n = l.Z.getChannel(e);
    if (null == n) return;
    let r = (0, s.e)(n);
    o.Z.preload(n.guild_id, n.id), (0, c.uL)(u.Z5c.CHANNEL(r, n.id), f({ openChannel: !0 }, t)), (null == t ? void 0 : t.openTextInVoiceIfVoiceChannel) && n.isGuildVocal() && a.Z.updateChatOpen(n.id, !0);
}
function p(e, t) {
    i()(null != e.parent_id, 'Thread must have a parent ID.');
    let n = (0, s.e)(e);
    (0, c.uL)(u.Z5c.CHANNEL(n, e.id), f({ openChannel: !0 }, t));
}

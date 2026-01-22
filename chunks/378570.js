n.d(t, {
    N9: () => _,
    ci: () => h,
    iN: () => p,
});
var r = n(284009),
    i = n.n(r),
    a = n(308528),
    s = n(367513),
    o = n(584682),
    l = n(734057),
    c = n(976860),
    u = n(652215);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    let n = l.A.getChannel(e);
    if (null == n) return;
    let r = (0, o.j)(n);
    a.A.preload(n.guild_id, n.id),
        (0, c.pX)(
            u.BVt.CHANNEL(r, n.id),
            f(
                {
                    openChannel: !0,
                },
                t,
            ),
        ),
        (null == t ? void 0 : t.openTextInVoiceIfVoiceChannel) && n.isGuildVocal() && s.A.updateChatOpen(n.id, !0);
}

function _(e, t) {
    i()(null != e.parent_id, "Thread must have a parent ID.");
    let n = (0, o.j)(e);
    (0, c.pX)(
        u.BVt.CHANNEL(n, e.id),
        f(
            {
                openChannel: !0,
            },
            t,
        ),
    );
}

function h(e, t, n) {
    let r = l.A.getChannel(e);
    if (null == r) return;
    let i = (0, o.j)(r);
    (0, c.pX)(
        u.BVt.CHANNEL(i, r.id, t),
        f(
            {
                openChannel: !0,
            },
            n,
        ),
    );
}

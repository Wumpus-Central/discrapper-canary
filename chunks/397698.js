n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(776862),
    a = n(306680),
    s = n(626135),
    l = n(499254),
    c = n(827498),
    u = n(314734),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { context: t, openInPopout: f, analyticsLocation: p, initialState: h } = e;
    f && (0, o.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let m = f ? i.u1M : i.z1l;
    (0, l.yT)(c.ti.DISMISSED), (0, l.__)(c._b.VOICE, void 0, h);
    let g = 'contextless' !== t.type && (a.ZP.hasUnread(t.channel.id) || a.ZP.getMentionCount(t.channel.id) > 0);
    return (
        s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: p,
            source: c._b.VOICE,
            is_chat_badged: g
        }),
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('6208'), n.e('35755'), n.e('35794')]).then(n.bind(n, 743161));
                return (n) => (0, r.jsx)(e, _({ context: t }, n));
            },
            {
                modalKey: u.e9,
                contextKey: m
            }
        )
    );
}

n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(776862),
    o = n(306680),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { context: t, openInPopout: f, analyticsLocation: _ = "open-activity-shelf", initialState: m } = e;
    f && (0, a.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let h = f ? i.u1M : i.z1l;
    (0, l.y)(c.ti.DISMISSED), (0, l._)(c._b.VOICE, void 0, m, "channel" === t.type ? t.channel.id : void 0);
    let g = "contextless" !== t.type && (o.ZP.hasUnread(t.channel.id) || o.ZP.getMentionCount(t.channel.id) > 0);
    return (
        s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: _,
            source: c._b.VOICE,
            is_chat_badged: g,
        }),
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("81056").then(n.bind(n, 743161));
                return (n) => (0, r.jsx)(e, p({ context: t }, n));
            },
            {
                modalKey: u.e9,
                contextKey: h,
            },
        )
    );
}

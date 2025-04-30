n.d(t, {
    K: () => p,
    Q: () => _
});
var r = n(200651),
    i = n(481060),
    o = n(592125),
    a = n(626135),
    s = n(254109),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = 'Media Viewer Modal';
function p(e) {
    var t,
        c,
        f,
        { location: p, contextKey: h } = e,
        m = d(e, ['location', 'contextKey']);
    let g = null == (c = m.items[null != (f = m.startingIndex) ? f : 0]) || null == (t = c.sourceMetadata) ? void 0 : t.message,
        E = o.Z.getChannel(null == g ? void 0 : g.channel_id);
    (0, s.fS)({
        guildId: null == E ? void 0 : E.guild_id,
        channelId: null == E ? void 0 : E.id,
        channelType: null == E ? void 0 : E.type,
        numMediaItems: m.items.length,
        source: p,
        hasMediaOptions: !m.shouldHideMediaOptions
    }),
        a.default.track(l.rMx.OPEN_MODAL, {
            type: l.jXE.MEDIA_VIEWER,
            source: p,
            guild_id: null == E ? void 0 : E.guild_id,
            channel_id: null == E ? void 0 : E.id,
            channel_type: null == E ? void 0 : E.type
        }),
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('95477'), n.e('58593')]).then(n.bind(n, 97594));
                return (t) => (0, r.jsx)(e, u({}, t, m));
            },
            {
                modalKey: _,
                contextKey: h,
                onCloseCallback: s.VO,
                backdropStyle: i.fCB.LIGHTBOX
            }
        );
}

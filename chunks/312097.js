n.d(t, { K: () => h });
var r = n(200651),
    i = n(481060),
    o = n(982330),
    a = n(592125),
    s = n(626135),
    l = n(254109),
    c = n(981631),
    u = n(701865);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var t,
        d,
        _,
        { location: h, contextKey: m } = e,
        g = p(e, ['location', 'contextKey']);
    let E = (0, o.Kc)(h),
        v = null === (d = g.items[null !== (_ = g.startingIndex) && void 0 !== _ ? _ : 0]) || void 0 === d ? void 0 : null === (t = d.sourceMetadata) || void 0 === t ? void 0 : t.message,
        b = a.Z.getChannel(null == v ? void 0 : v.channel_id);
    (0, l.fS)({
        guildId: null == b ? void 0 : b.guild_id,
        channelId: null == b ? void 0 : b.id,
        channelType: null == b ? void 0 : b.type,
        numMediaItems: g.items.length,
        source: h,
        hasMediaOptions: !g.shouldHideMediaOptions
    }),
        s.default.track(c.rMx.OPEN_MODAL, {
            type: c.jXE.MEDIA_VIEWER,
            source: h,
            guild_id: null == b ? void 0 : b.guild_id,
            channel_id: null == b ? void 0 : b.id,
            channel_type: null == b ? void 0 : b.type
        }),
        (0, i.ZDy)(
            async () => {
                let { default: e } = E ? await Promise.all([n.e('95477'), n.e('79005')]).then(n.bind(n, 97594)) : await n.e('87267').then(n.bind(n, 950120));
                return (t) => (0, r.jsx)(e, f({}, t, g));
            },
            {
                modalKey: u.U,
                contextKey: m,
                onCloseCallback: l.VO,
                backdropStyle: i.fCB.LIGHTBOX
            }
        );
}

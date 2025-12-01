n.d(t, {
    K: () => _,
    Q: () => p,
});
var r = n(54381),
    i = n(481060),
    a = n(592125),
    o = n(626135),
    s = n(254109),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = "Media Viewer Modal";
function _(e, t) {
    var c,
        f,
        _,
        { location: m, contextKey: h } = e,
        g = d(e, ["location", "contextKey"]);
    let E =
            null == (f = g.items[null != (_ = g.startingIndex) ? _ : 0]) || null == (c = f.sourceMetadata)
                ? void 0
                : c.message,
        b = a.Z.getChannel(null == E ? void 0 : E.channel_id);
    (0, s.fS)({
        guildId: null == b ? void 0 : b.guild_id,
        channelId: null == b ? void 0 : b.id,
        channelType: null == b ? void 0 : b.type,
        numMediaItems: g.items.length,
        source: m,
        hasMediaOptions: !g.shouldHideMediaOptions,
    }),
        o.default.track(l.rMx.OPEN_MODAL, {
            type: l.jXE.MEDIA_VIEWER,
            source: m,
            guild_id: null == b ? void 0 : b.guild_id,
            channel_id: null == b ? void 0 : b.id,
            channel_type: null == b ? void 0 : b.type,
        }),
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("39476").then(n.bind(n, 97594));
                return (t) => (0, r.jsx)(e, u({}, t, g));
            },
            {
                modalKey: p,
                contextKey: h,
                onCloseCallback: s.VO,
                backdropStyle: i.fCB.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}

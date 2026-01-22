n.d(t, {
    K: () => p,
    R: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(397927),
    a = n(734057),
    s = n(954571),
    o = n(793367),
    l = n(652215);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = "Media Viewer Modal";

function _(e, t) {
    var c, f, _;
    let [h, ...m] = [e, t],
        { location: g, contextKey: E } = h,
        b = d(h, ["location", "contextKey"]),
        [y] = m,
        O =
            null == (_ = b.items[null != (c = b.startingIndex) ? c : 0]) || null == (f = _.sourceMetadata)
                ? void 0
                : f.message,
        A = a.A.getChannel(null == O ? void 0 : O.channel_id);
    (0, o.H9)({
        guildId: null == A ? void 0 : A.guild_id,
        channelId: null == A ? void 0 : A.id,
        channelType: null == A ? void 0 : A.type,
        numMediaItems: b.items.length,
        source: g,
        hasMediaOptions: !b.shouldHideMediaOptions,
    }),
        s.default.track(l.HAw.OPEN_MODAL, {
            type: l.JJy.MEDIA_VIEWER,
            source: g,
            guild_id: null == A ? void 0 : A.guild_id,
            channel_id: null == A ? void 0 : A.id,
            channel_type: null == A ? void 0 : A.type,
        }),
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("48654").then(n.bind(n, 321565));
                return (t) => (0, r.jsx)(e, u({}, t, b));
            },
            {
                modalKey: p,
                contextKey: E,
                onCloseCallback: o.a2,
                backdropStyle: i.F2Z.LIGHTBOX,
                stackingBehavior: y,
            },
        );
}

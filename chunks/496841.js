n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(956793),
    o = n(688810),
    l = n(384059),
    c = n(203982),
    u = n(709562),
    d = n(652215),
    f = n(985018);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e, t) {
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
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function b(e) {
    let { channel: t, centerButton: n = !1, onCallJoined: p } = e,
        h = g(e, ["channel", "centerButton", "onCallJoined"]),
        { parentAnalyticsLocation: E } = (0, o.Ay)(),
        b = n ? u.l : u.A,
        y = t.isManaged() || !t.isPrivate() ? f.intl.string(f.t.S0W8Z5) : f.intl.string(f.t["0D/6Rz"]),
        O = i.useCallback(() => {
            null == p || p(), (0, l.X)(E, l.O.JOIN_CALL), s.default.selectVoiceChannel(t.id);
        }, [t.id, p, E]);
    return (
        i.useEffect(
            () => (
                c._.subscribe(d.jej.CALL_ACCEPT, O),
                () => {
                    c._.unsubscribe(d.jej.CALL_ACCEPT, O);
                }
            ),
            [O],
        ),
        (0, r.jsx)(
            b,
            m(_({}, h), {
                iconComponent: a._jp,
                label: y,
                onClick: O,
                isTrayButton: !1,
            }),
        )
    );
}

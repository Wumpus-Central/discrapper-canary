n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(956793),
    o = n(806246),
    l = n(378570),
    c = n(383501),
    u = n(954571),
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
    let { variant: t = "active", size: n = "sm", hangStatusChannel: p, onAction: h, userId: E } = e,
        b = g(e, ["variant", "size", "hangStatusChannel", "onAction", "userId"]),
        y = (0, i.bG)([c.A], () => c.A.getChannelId() === p.id),
        O = () => {
            null == h || h(),
                s.default.selectVoiceChannel(p.id),
                (0, l.iN)(p.id),
                u.default.track(
                    d.HAw.HANG_STATUS_CTA_CLICKED,
                    m(
                        _(
                            {
                                source: "UserProfilePopout",
                            },
                            (0, o.A)(p.id),
                        ),
                        {
                            other_user_id: E,
                            cta_type: y ? "open" : "join",
                        },
                    ),
                );
        };
    return (0, r.jsx)(
        a.Button,
        _(
            {
                text: y ? f.intl.string(f.t.BXxdl7) : f.intl.string(f.t["9C444m"]),
                onClick: O,
                variant: t,
                size: n,
                fullWidth: !0,
            },
            b,
        ),
    );
}

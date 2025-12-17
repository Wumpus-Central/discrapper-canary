n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(194359),
    s = n(699516),
    l = n(594174),
    c = n(981631),
    u = n(388032),
    d = n(343442);
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let {
            user: t,
            guildId: f,
            channelId: _,
            onBlock: h,
            onIgnore: g,
            onUnignore: E,
            location: b = "ContextMenu",
            appContext: y = c.IlC.APP,
        } = e,
        { id: O } = t,
        v = (0, i.e7)([l.default], () => {
            var e;
            return (null == (e = l.default.getCurrentUser()) ? void 0 : e.id) === O;
        }, [O]),
        { isIgnored: S, isBlocked: I } = (0, i.cj)(
            [s.Z],
            () => ({
                isIgnored: s.Z.isIgnored(O),
                isBlocked: s.Z.isBlocked(O),
            }),
            [O],
        );
    return v || I
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "ignore",
              color: "default",
              label: S
                  ? u.intl.string(u.t["8wXU9B"])
                  : (0, r.jsx)("div", {
                        className: d.label,
                        children: u.intl.string(u.t.ytCpKs),
                    }),
              action: S
                  ? () => {
                        null == E || E(),
                            o.Z.unignoreUser(O, null != b ? b : "use-ignore-user-item-web", null != _ ? _ : void 0);
                    }
                  : () => {
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("97652"), n.e("66089")]).then(
                                    n.bind(n, 240515),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        m(p({}, n), {
                                            guildId: f,
                                            channelId: _,
                                            user: t,
                                            onIgnore: g,
                                            onBlock: h,
                                            location: b,
                                        }),
                                    );
                            },
                            { contextKey: (0, a.VnL)(y) },
                        );
                    },
          });
}

n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(49229),
    o = n(994500),
    l = n(287809),
    c = n(652215),
    u = n(985018),
    d = n(533110);

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

function h(e, t) {
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

function m(e) {
    let {
            user: t,
            guildId: f,
            channelId: _,
            onBlock: m,
            onIgnore: g,
            onUnignore: E,
            location: b = "ContextMenu",
            appContext: y = c.BRT.APP,
        } = e,
        { id: O } = t,
        A = (0, i.bG)([l.default], () => {
            var e;
            return (null == (e = l.default.getCurrentUser()) ? void 0 : e.id) === O;
        }, [O]),
        { isIgnored: v, isBlocked: S } = (0, i.cf)(
            [o.A],
            () => ({
                isIgnored: o.A.isIgnored(O),
                isBlocked: o.A.isBlocked(O),
            }),
            [O],
        );
    return A || S
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "ignore",
              color: "default",
              label: v
                  ? u.intl.string(u.t["8wXU9B"])
                  : (0, r.jsx)("div", {
                        className: d.P,
                        children: u.intl.string(u.t.ytCpKs),
                    }),
              action: v
                  ? () => {
                        null == E || E(),
                            s.A.unignoreUser(O, null != b ? b : "use-ignore-user-item-web", null != _ ? _ : void 0);
                    }
                  : () => {
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("28969"), n.e("45714")]).then(
                                    n.bind(n, 143547),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        h(p({}, n), {
                                            guildId: f,
                                            channelId: _,
                                            user: t,
                                            onIgnore: g,
                                            onBlock: m,
                                            location: b,
                                        }),
                                    );
                            },
                            {
                                contextKey: (0, a.TId)(y),
                            },
                        );
                    },
          });
}

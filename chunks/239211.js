n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(49229),
    o = n(662502),
    l = n(994500),
    c = n(287809),
    u = n(652215),
    d = n(985018);
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
            onUnblock: E,
            location: b = "ContextMenu",
            appContext: y = u.BRT.APP,
        } = e,
        { id: O } = t,
        A = (0, i.bG)([c.default], () => {
            var e;
            return (null == (e = c.default.getCurrentUser()) ? void 0 : e.id) === O;
        }, [O]),
        v = (0, i.bG)([l.A], () => l.A.isBlocked(O), [O]),
        S = v ? "default" : "danger";
    return A
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "block",
              color: null != S ? S : "default",
              label: v ? d.intl.string(d.t.XyHpKH) : d.intl.string(d.t.l4Emac),
              action: v
                  ? () => {
                        null == E || E(),
                            s.A.unblockUser(O, { location: b }),
                            o.A.showUnblockSuccessToast(O, null != _ ? _ : void 0);
                    }
                  : () => {
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("28969"), n.e("45714")]).then(
                                    n.bind(n, 994288),
                                );
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        h(p({}, n), {
                                            user: t,
                                            guildId: f,
                                            channelId: _,
                                            onBlock: m,
                                            onIgnore: g,
                                            location: b,
                                        }),
                                    );
                            },
                            { contextKey: (0, a.TId)(y) },
                        );
                    },
          });
}

n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(159691),
    a = n(481060),
    o = n(726521),
    s = n(138201),
    l = n(728345),
    c = n(812206),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function p(e, t) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = "useReportAppItemModal";
function E(e) {
    var { applicationId: t } = e,
        n = h(e, ["applicationId"]);
    return null == t
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "report-app",
              color: n.color,
              label: u.intl.string(u.t.NgA5vp),
              action: () => b(t, n),
          });
}
function b(e, t) {
    let n = () => {
        var e;
        (0, a.Mr3)(g), null == (e = t.onSubmit) || e.call(t);
    };
    (0, a.ZDy)(
        async () => {
            await l.ZP.fetchApplication(e);
            let d = c.Z.getApplication(e);
            return (e) =>
                (0, r.jsx)(
                    i.u_l,
                    p(
                        f(
                            {
                                title: u.intl.string(u.t.Bd10bR),
                                actions: [],
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsxs)(a.Kqy, {
                                children: [
                                    (0, r.jsx)(s.JZ, {
                                        variant: "clickable",
                                        title: u.intl.string(u.t.eyEkG1),
                                        description: u.intl.string(u.t.ptItsj),
                                        onButtonPress: () => (0, o.pX)(t.user, t.guildId, n, t.appContext),
                                    }),
                                    (0, r.jsx)(s.JZ, {
                                        variant: "clickable",
                                        title: u.intl.string(u.t.atP0yX),
                                        description: u.intl.string(u.t.UGg603),
                                        onButtonPress: () => {
                                            var e;
                                            (0, o.uu)({
                                                application: d,
                                                entrypoint: null != (e = t.entrypoint) ? e : "user_profile",
                                                contextualGuildId: t.guildId,
                                                contextualChannelId: t.channelId,
                                                onSubmit: n,
                                                appContext: t.appContext,
                                            });
                                        },
                                    }),
                                ],
                            }),
                        },
                    ),
                );
        },
        { modalKey: g },
    );
}

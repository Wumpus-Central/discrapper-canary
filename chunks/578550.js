n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(928658),
    o = n(632738),
    l = n(627363),
    c = n(587895),
    u = n(985018);

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

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = "useReportAppItemModal";

function E(e) {
    let { applicationId: t } = e,
        n = h(e, ["applicationId"]);
    return null == t
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "report-app",
              color: n.color,
              label: u.intl.string(u.t.NgA5vp),
              action: () => b(t, n),
          });
}

function b(e, t) {
    let n = () => {
        var e;
        (0, a.OoC)(g), null == (e = t.onSubmit) || e.call(t);
    };
    (0, a.mMO)(
        async () => {
            await l.Ay.fetchApplication(e);
            let d = c.A.getApplication(e);
            return (e) =>
                (0, r.jsx)(
                    i.aFV,
                    _(
                        f(
                            {
                                title: u.intl.string(u.t.Bd10bR),
                                actions: [],
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsxs)(a.BJc, {
                                children: [
                                    (0, r.jsx)(o.PQ, {
                                        variant: "clickable",
                                        title: u.intl.string(u.t.eyEkG1),
                                        description: u.intl.string(u.t.ptItsj),
                                        onButtonPress: () => (0, s.NW)(t.user, t.guildId, n, t.appContext),
                                    }),
                                    (0, r.jsx)(o.PQ, {
                                        variant: "clickable",
                                        title: u.intl.string(u.t.atP0yX),
                                        description: u.intl.string(u.t.UGg603),
                                        onButtonPress: () => {
                                            var e;
                                            (0, s.r3)({
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
        {
            modalKey: g,
        },
    );
}

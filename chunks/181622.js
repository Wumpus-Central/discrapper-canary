r.d(t, {
    ForwardFailedAlertModal: () => j,
});
var n = r(627968),
    l = r(64700),
    i = r(158954),
    a = r(311907),
    s = r(397927),
    c = r(966327),
    o = r(47167),
    u = r(598104),
    A = r(255266),
    _ = r(734057),
    f = r(71393),
    h = r(290863),
    p = r(994500),
    I = r(287809),
    d = r(427262),
    O = r(294454),
    y = r(985018),
    b = r(655412);

function E(e) {
    let { icon: t, label: r } = e;
    return (0, n.jsxs)("div", {
        className: b.us,
        children: [
            t,
            (0, n.jsx)(s.Text, {
                className: b.Pf,
                variant: "text-md/medium",
                lineClamp: 1,
                children: r,
            }),
        ],
    });
}

function L(e) {
    let { channel: t } = e,
        r = (0, o.Ay)(t);
    return (0, n.jsx)(E, {
        icon: (0, n.jsx)(u.A, {
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            channel: t,
        }),
        label: r,
    });
}

function g(e) {
    let { user: t } = e,
        r = d.Ay.useName(t),
        l = (0, a.bG)([p.A], () => p.A.getNickname(t.id)),
        i = (0, a.bG)([h.A], () => h.A.getStatus(t.id));
    return (0, n.jsx)(E, {
        icon: (0, n.jsx)(c.A, {
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            user: t,
            status: i,
        }),
        label: null != l ? l : r,
    });
}

function P(e) {
    let { channel: t } = e,
        r = (0, a.bG)([f.A], () => f.A.getGuild(null == t ? void 0 : t.guild_id)),
        l = (0, o.Ay)(t);
    return (0, n.jsx)(E, {
        icon: (0, n.jsx)(A.A, {
            size: A.q.SMALL_32,
            guild: r,
            channel: t,
        }),
        label: l,
    });
}

function N(e) {
    let { destination: t } = e,
        { channel: r, user: l } = (0, a.cf)([_.A, I.default], () => ({
            channel: "channel" === t.type ? _.A.getChannel(t.id) : null,
            user: "user" === t.type ? I.default.getUser(t.id) : null,
        }));
    return (null == r ? void 0 : r.isGroupDM())
        ? (0, n.jsx)(L, {
              channel: r,
          })
        : null != l
          ? (0, n.jsx)(g, {
                user: l,
            })
          : null != r
            ? (0, n.jsx)(P, {
                  channel: r,
              })
            : null;
}

function j(e) {
    var t, r;
    let { message: a, failedDestinations: s, forwardOptions: c } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["message", "failedDestinations", "forwardOptions"]),
        u = l.useCallback(() => {
            (0, O.fO)({
                message: a,
                source: "retry-modal",
                initialSelectedDestinations: s,
                forwardOptions: c,
            });
        }, [s, a, c]);
    return (0, n.jsx)(
        i.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                title: y.intl.string(y.t["/OPIaM"]),
                subtitle: y.intl.format(y.t.cn9vFb, {
                    count: s.length,
                }),
                confirmText: y.intl.string(y.t["5911Lb"]),
                onConfirm: u,
            },
            o,
        )),
        (r = r =
            {
                variant: "primary",
                children: (0, n.jsx)("div", {
                    className: b.Zc,
                    children: s.map((e, t) =>
                        (0, n.jsx)(
                            N,
                            {
                                destination: e,
                            },
                            t,
                        ),
                    ),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}

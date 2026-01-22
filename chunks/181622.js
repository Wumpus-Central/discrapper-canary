n.d(t, {
    ForwardFailedAlertModal: () => P,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    c = n(421380),
    s = n(397927),
    a = n(966327),
    o = n(47167),
    u = n(598104),
    d = n(255266),
    f = n(734057),
    b = n(71393),
    p = n(290863),
    h = n(994500),
    y = n(287809),
    j = n(427262),
    m = n(294454),
    O = n(985018),
    g = n(655412);

function x(e) {
    let { icon: t, label: n } = e;
    return (0, r.jsxs)("div", {
        className: g.us,
        children: [
            t,
            (0, r.jsx)(s.Text, {
                className: g.Pf,
                variant: "text-md/medium",
                lineClamp: 1,
                children: n,
            }),
        ],
    });
}

function A(e) {
    let { channel: t } = e,
        n = (0, o.Ay)(t);
    return (0, r.jsx)(x, {
        icon: (0, r.jsx)(u.A, {
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            channel: t,
        }),
        label: n,
    });
}

function v(e) {
    let { user: t } = e,
        n = j.Ay.useName(t),
        l = (0, i.bG)([h.A], () => h.A.getNickname(t.id)),
        c = (0, i.bG)([p.A], () => p.A.getStatus(t.id));
    return (0, r.jsx)(x, {
        icon: (0, r.jsx)(a.A, {
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            user: t,
            status: c,
        }),
        label: null != l ? l : n,
    });
}

function w(e) {
    let { channel: t } = e,
        n = (0, i.bG)([b.A], () => b.A.getGuild(null == t ? void 0 : t.guild_id)),
        l = (0, o.Ay)(t);
    return (0, r.jsx)(x, {
        icon: (0, r.jsx)(d.A, {
            size: d.q.SMALL_32,
            guild: n,
            channel: t,
        }),
        label: l,
    });
}

function _(e) {
    let { destination: t } = e,
        { channel: n, user: l } = (0, i.cf)([f.A, y.default], () => ({
            channel: "channel" === t.type ? f.A.getChannel(t.id) : null,
            user: "user" === t.type ? y.default.getUser(t.id) : null,
        }));
    return (null == n ? void 0 : n.isGroupDM())
        ? (0, r.jsx)(A, {
              channel: n,
          })
        : null != l
          ? (0, r.jsx)(v, {
                user: l,
            })
          : null != n
            ? (0, r.jsx)(w, {
                  channel: n,
              })
            : null;
}

function P(e) {
    var t, n;
    let { message: i, failedDestinations: a, forwardOptions: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["message", "failedDestinations", "forwardOptions"]),
        d = l.useCallback(() => {
            (0, m.fO)({
                message: i,
                source: "retry-modal",
                initialSelectedDestinations: a,
                forwardOptions: o,
            });
        }, [a, i, o]);
    return (0, r.jsxs)(
        s.VoidConfirmModal,
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                header: O.intl.string(O.t["/OPIaM"]),
                confirmText: O.intl.string(O.t["5911Lb"]),
                cancelText: O.intl.string(O.t["ETE/oC"]),
                confirmButtonColor: c.$n.Colors.BRAND,
                onConfirm: d,
            },
            u,
        )),
        (n = n =
            {
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: O.intl.format(O.t.cn9vFb, {
                            count: a.length,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: g.Zc,
                        children: a.map((e, t) =>
                            (0, r.jsx)(
                                _,
                                {
                                    destination: e,
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}

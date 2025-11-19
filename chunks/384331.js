t.d(n, { ForwardFailedAlertModal: () => S });
var l = t(54381),
    r = t(473749),
    i = t(442837),
    c = t(755721),
    o = t(481060),
    a = t(700582),
    s = t(933557),
    u = t(266076),
    d = t(810123),
    f = t(592125),
    h = t(430824),
    b = t(158776),
    p = t(699516),
    j = t(594174),
    m = t(51144),
    g = t(912332),
    y = t(388032),
    O = t(296719);
function x(e) {
    let { icon: n, label: t } = e;
    return (0, l.jsxs)("div", {
        className: O.failedRow,
        children: [
            n,
            (0, l.jsx)(o.Text, {
                className: O.label,
                variant: "text-md/medium",
                lineClamp: 1,
                children: t,
            }),
        ],
    });
}
function _(e) {
    let { channel: n } = e,
        t = (0, s.ZP)(n);
    return (0, l.jsx)(x, {
        icon: (0, l.jsx)(u.Z, {
            "aria-hidden": !0,
            size: o.EFr.SIZE_32,
            channel: n,
        }),
        label: t,
    });
}
function v(e) {
    let { user: n } = e,
        t = m.ZP.useName(n),
        r = (0, i.e7)([p.Z], () => p.Z.getNickname(n.id)),
        c = (0, i.e7)([b.Z], () => b.Z.getStatus(n.id));
    return (0, l.jsx)(x, {
        icon: (0, l.jsx)(a.Z, {
            "aria-hidden": !0,
            size: o.EFr.SIZE_32,
            user: n,
            status: c,
        }),
        label: null != r ? r : t,
    });
}
function w(e) {
    let { channel: n } = e,
        t = (0, i.e7)([h.Z], () => h.Z.getGuild(null == n ? void 0 : n.guild_id)),
        r = (0, s.ZP)(n);
    return (0, l.jsx)(x, {
        icon: (0, l.jsx)(d.Z, {
            size: d.E.SMALL_32,
            guild: t,
            channel: n,
        }),
        label: r,
    });
}
function P(e) {
    let { destination: n } = e,
        { channel: t, user: r } = (0, i.cj)([f.Z, j.default], () => ({
            channel: "channel" === n.type ? f.Z.getChannel(n.id) : null,
            user: "user" === n.type ? j.default.getUser(n.id) : null,
        }));
    return (null == t ? void 0 : t.isGroupDM())
        ? (0, l.jsx)(_, { channel: t })
        : null != r
          ? (0, l.jsx)(v, { user: r })
          : null != t
            ? (0, l.jsx)(w, { channel: t })
            : null;
}
function S(e) {
    var n,
        t,
        { message: i, failedDestinations: a, forwardOptions: s } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++)
                    (t = i[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["message", "failedDestinations", "forwardOptions"]);
    let d = r.useCallback(() => {
        (0, g.l8)({
            message: i,
            source: "retry-modal",
            initialSelectedDestinations: a,
            forwardOptions: s,
        });
    }, [a, i, s]);
    return (0, l.jsxs)(
        o.ConfirmModal,
        ((n = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })(
            {
                header: y.intl.string(y.t["/OPIaM"]),
                confirmText: y.intl.string(y.t["5911Lb"]),
                cancelText: y.intl.string(y.t["ETE/oC"]),
                confirmButtonColor: c.zx.Colors.BRAND,
                onConfirm: d,
            },
            u,
        )),
        (t = t =
            {
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: y.intl.format(y.t.cn9vFb, { count: a.length }),
                    }),
                    (0, l.jsx)("div", {
                        className: O.failedDestinations,
                        children: a.map((e, n) => (0, l.jsx)(P, { destination: e }, n)),
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        n),
    );
}

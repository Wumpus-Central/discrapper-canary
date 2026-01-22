n.d(t, {
    A: () => S,
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    b = n(442433),
    f = n(392054),
    p = n(168186),
    m = n(713654),
    g = n(201275),
    h = n(657048),
    x = n(734057),
    j = n(696451),
    O = n(317525),
    y = n(351906),
    A = n(287809),
    v = n(427262),
    N = n(652215),
    E = n(985018),
    T = n(393800);

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e) {
    let { guild: t, id: l, type: a, isLocked: s, lockTooltipText: c } = e,
        d = !s || null != c;
    o()(d, "No lockTooltipText provided while isLocked=true");
    let u = r.useCallback(
        (e) => {
            (0, b.L3)(e, async () => {
                let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        C(w({}, t), {
                            id: l,
                            label: E.intl.string(E.t.oJ1Muw),
                        }),
                    );
            });
        },
        [l],
    );
    switch (a) {
        case f.RA.CHANNEL:
            return (0, i.jsx)(_, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
        case f.RA.ROLE:
            return (0, i.jsx)(I, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
        case f.RA.USER:
            return (0, i.jsx)(P, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
    }
}

function _(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: s, openEntryContextMenu: o } = e,
        d = (0, p.Ap)(t.id),
        {
            icon: b,
            name: f,
            categoryName: g,
        } = (0, c.cf)([x.A], () => {
            if (d === n)
                return {
                    name: E.intl.string(E.t["7YqSGx"]),
                    icon: u.N$i,
                };
            let e = x.A.getChannel(n),
                i = (null == e ? void 0 : e.parent_id) != null ? x.A.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, m.gU)(e, t) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
            };
        }, [d, t, n]),
        h = r.useCallback(
            (e) => {
                n !== d && o(e);
            },
            [d, n, o],
        );
    return null == b || null == f
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: T.Cv,
              children: [
                  (0, i.jsx)(b, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(T.p, T.Sl),
                  }),
                  (0, i.jsx)(u.Text, {
                      className: T.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: f,
                  }),
                  null != g
                      ? (0, i.jsxs)(u.Text, {
                            className: T.Tc,
                            variant: "text-sm/normal",
                            children: ["(", g, ")"],
                        })
                      : null,
                  l
                      ? (0, i.jsx)(k, {
                            tooltipText: s,
                        })
                      : null,
              ],
          });
}

function I(e) {
    var t;
    let { guild: l, id: s, isLocked: o, lockTooltipText: d } = e,
        f = (0, c.bG)([O.A], () => O.A.getRole(l.id, s)),
        p = (0, g.$7)({
            guildId: l.id,
            roleId: s,
            size: 24,
        }),
        m = r.useCallback(
            (e) => {
                null != l &&
                    null != f &&
                    (0, b.L3)(e, async () => {
                        let { default: e } = await n.e("41072").then(n.bind(n, 165747));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                C(w({}, t), {
                                    guild: l,
                                    role: f,
                                }),
                            );
                    });
            },
            [l, f],
        );
    return (null == f ? void 0 : f.name) == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: m,
              className: T.Cv,
              children: [
                  null != p
                      ? (0, i.jsx)(
                            h.A,
                            w(
                                {
                                    className: a()(T.__invalid_icon, T.Sl),
                                },
                                p,
                            ),
                        )
                      : (0, i.jsx)(u.iTF, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(T.a, T.Sl),
                            color: null != (t = f.colorString) ? t : N.TpD,
                        }),
                  (0, i.jsx)(u.Text, {
                      className: T.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: f.name,
                  }),
                  o
                      ? (0, i.jsx)(k, {
                            tooltipText: d,
                        })
                      : null,
              ],
          });
}

function P(e) {
    let { guild: t, id: n, isLocked: r, lockTooltipText: l, openEntryContextMenu: a } = e,
        s = (0, c.bG)([A.default], () => A.default.getUser(n)),
        o = (0, c.bG)([j.Ay], () => {
            var e;
            return null == (e = j.Ay.getMember(t.id, n)) ? void 0 : e.nick;
        }, [t.id, n]),
        d = (0, c.bG)([y.A], () => y.A.hidePersonalInformation);
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: T.Cv,
              children: [
                  (0, i.jsx)(u.euF, {
                      className: T.Sl,
                      src: s.getAvatarURL(t.id, 24),
                      "aria-label": s.username,
                      size: u._3J.SIZE_24,
                  }),
                  (0, i.jsx)(u.Text, {
                      className: T.S3,
                      color: "text-strong",
                      variant: "text-md/normal",
                      children: null != o ? o : s.username,
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: T.Tc,
                            variant: "text-sm/normal",
                            children: v.Ay.getUserTag(s),
                        }),
                  r
                      ? (0, i.jsx)(k, {
                            tooltipText: l,
                        })
                      : null,
              ],
          });
}

function k(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(d.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: T.hz,
            children: (0, i.jsx)(u.XAi, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}

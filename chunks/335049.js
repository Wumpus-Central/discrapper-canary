n.d(t, { Z: () => w });
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    p = n(895924),
    m = n(581364),
    b = n(471445),
    g = n(91218),
    f = n(518738),
    h = n(592125),
    x = n(271383),
    j = n(485386),
    v = n(246946),
    y = n(594174),
    O = n(51144),
    _ = n(981631),
    C = n(388032),
    N = n(243226);
function Z(e) {
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
function S(e, t) {
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
function w(e) {
    let { guild: t, id: l, type: a, isLocked: o, lockTooltipText: c } = e,
        d = !o || null != c;
    s()(d, "No lockTooltipText provided while isLocked=true");
    let m = r.useCallback(
        (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        S(Z({}, t), {
                            id: l,
                            label: C.intl.string(C.t.oJ1Mu7),
                        }),
                    );
            });
        },
        [l],
    );
    switch (a) {
        case p.Kw.CHANNEL:
            return (0, i.jsx)(T, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: m,
            });
        case p.Kw.ROLE:
            return (0, i.jsx)(I, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: m,
            });
        case p.Kw.USER:
            return (0, i.jsx)(P, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: m,
            });
    }
}
function T(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: o, openEntryContextMenu: s } = e,
        u = (0, m.bD)(t.id),
        {
            icon: p,
            name: g,
            categoryName: f,
        } = (0, c.cj)([h.Z], () => {
            if (u === n)
                return {
                    name: C.intl.string(C.t["7YqSGx"]),
                    icon: d.VL1,
                };
            let e = h.Z.getChannel(n),
                i = (null == e ? void 0 : e.parent_id) != null ? h.Z.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, b.KS)(e, t) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
            };
        }, [u, t, n]),
        x = r.useCallback(
            (e) => {
                n !== u && s(e);
            },
            [u, n, s],
        );
    return null == p || null == g
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: x,
              className: N.identifier,
              children: [
                  (0, i.jsx)(p, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(N.channelIcon, N.image),
                  }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: g,
                  }),
                  null != f
                      ? (0, i.jsxs)(d.Text, {
                            className: N.tag,
                            variant: "text-sm/normal",
                            children: ["(", f, ")"],
                        })
                      : null,
                  l ? (0, i.jsx)(E, { tooltipText: o }) : null,
              ],
          });
}
function I(e) {
    var t;
    let { guild: l, id: o, isLocked: s, lockTooltipText: p } = e,
        m = (0, c.e7)([j.Z], () => j.Z.getRole(l.id, o)),
        b = (0, f.p9)({
            guildId: l.id,
            roleId: o,
            size: 24,
        }),
        h = r.useCallback(
            (e) => {
                null != l &&
                    null != m &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await n.e("14486").then(n.bind(n, 786746));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                S(Z({}, t), {
                                    guild: l,
                                    role: m,
                                }),
                            );
                    });
            },
            [l, m],
        );
    return (null == m ? void 0 : m.name) == null
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: N.identifier,
              children: [
                  null != b
                      ? (0, i.jsx)(g.Z, Z({ className: a()(N.__invalid_icon, N.image) }, b))
                      : (0, i.jsx)(d.lZ8, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(N.shield, N.image),
                            color: null != (t = m.colorString) ? t : _.Pbq,
                        }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: m.name,
                  }),
                  s ? (0, i.jsx)(E, { tooltipText: p }) : null,
              ],
          });
}
function P(e) {
    let { guild: t, id: n, isLocked: r, lockTooltipText: l, openEntryContextMenu: a } = e,
        o = (0, c.e7)([y.default], () => y.default.getUser(n)),
        s = (0, c.e7)([x.ZP], () => {
            var e;
            return null == (e = x.ZP.getMember(t.id, n)) ? void 0 : e.nick;
        }, [t.id, n]),
        u = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: N.identifier,
              children: [
                  (0, i.jsx)(d.qEK, {
                      className: N.image,
                      src: o.getAvatarURL(t.id, 24),
                      "aria-label": o.username,
                      size: d.EFr.SIZE_24,
                  }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: null != s ? s : o.username,
                  }),
                  u
                      ? null
                      : (0, i.jsx)(d.Text, {
                            className: N.tag,
                            variant: "text-sm/normal",
                            children: O.ZP.getUserTag(o),
                        }),
                  r ? (0, i.jsx)(E, { tooltipText: l }) : null,
              ],
          });
}
function E(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(d.ua7, {
        text: t,
        children: (e) =>
            (0, i.jsx)(
                "div",
                S(Z({ className: N.lockIcon }, e), {
                    children: (0, i.jsx)(d.mBM, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
            ),
    });
}

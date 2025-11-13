n.d(t, { Z: () => I });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    p = n(239091),
    m = n(895924),
    b = n(581364),
    g = n(471445),
    f = n(518738),
    h = n(48950),
    x = n(592125),
    j = n(271383),
    v = n(485386),
    O = n(246946),
    y = n(594174),
    _ = n(51144),
    C = n(981631),
    N = n(388032),
    S = n(243226);
function E(e) {
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
function w(e, t) {
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
function I(e) {
    let { guild: t, id: l, type: a, isLocked: o, lockTooltipText: c } = e,
        d = !o || null != c;
    s()(d, "No lockTooltipText provided while isLocked=true");
    let u = r.useCallback(
        (e) => {
            (0, p.jW)(e, async () => {
                let { default: e } = await n.e("5396").then(n.bind(n, 999588));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        w(E({}, t), {
                            id: l,
                            label: N.intl.string(N.t.oJ1Muw),
                        }),
                    );
            });
        },
        [l],
    );
    switch (a) {
        case m.Kw.CHANNEL:
            return (0, i.jsx)(P, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
        case m.Kw.ROLE:
            return (0, i.jsx)(T, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
        case m.Kw.USER:
            return (0, i.jsx)(Z, {
                guild: t,
                id: l,
                isLocked: o,
                lockTooltipText: c,
                openEntryContextMenu: u,
            });
    }
}
function P(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: o, openEntryContextMenu: s } = e,
        d = (0, b.bD)(t.id),
        {
            icon: p,
            name: m,
            categoryName: f,
        } = (0, c.cj)([x.Z], () => {
            if (d === n)
                return {
                    name: N.intl.string(N.t["7YqSGx"]),
                    icon: u.VL1,
                };
            let e = x.Z.getChannel(n),
                i = (null == e ? void 0 : e.parent_id) != null ? x.Z.getChannel(e.parent_id) : null;
            return {
                icon: null != e ? (0, g.KS)(e, t) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
            };
        }, [d, t, n]),
        h = r.useCallback(
            (e) => {
                n !== d && s(e);
            },
            [d, n, s],
        );
    return null == p || null == m
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: S.identifier,
              children: [
                  (0, i.jsx)(p, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: a()(S.channelIcon, S.image),
                  }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: m,
                  }),
                  null != f
                      ? (0, i.jsxs)(u.Text, {
                            className: S.tag,
                            variant: "text-sm/normal",
                            children: ["(", f, ")"],
                        })
                      : null,
                  l ? (0, i.jsx)(k, { tooltipText: o }) : null,
              ],
          });
}
function T(e) {
    var t;
    let { guild: l, id: o, isLocked: s, lockTooltipText: d } = e,
        m = (0, c.e7)([v.Z], () => v.Z.getRole(l.id, o)),
        b = (0, f.p9)({
            guildId: l.id,
            roleId: o,
            size: 24,
        }),
        g = r.useCallback(
            (e) => {
                null != l &&
                    null != m &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e("14486").then(n.bind(n, 786746));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                w(E({}, t), {
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
              onContextMenu: g,
              className: S.identifier,
              children: [
                  null != b
                      ? (0, i.jsx)(h.Z, E({ className: a()(S.__invalid_icon, S.image) }, b))
                      : (0, i.jsx)(u.lZ8, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            className: a()(S.shield, S.image),
                            color: null != (t = m.colorString) ? t : C.Pbq,
                        }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: m.name,
                  }),
                  s ? (0, i.jsx)(k, { tooltipText: d }) : null,
              ],
          });
}
function Z(e) {
    let { guild: t, id: n, isLocked: r, lockTooltipText: l, openEntryContextMenu: a } = e,
        o = (0, c.e7)([y.default], () => y.default.getUser(n)),
        s = (0, c.e7)([j.ZP], () => {
            var e;
            return null == (e = j.ZP.getMember(t.id, n)) ? void 0 : e.nick;
        }, [t.id, n]),
        d = (0, c.e7)([O.Z], () => O.Z.hidePersonalInformation);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: S.identifier,
              children: [
                  (0, i.jsx)(u.qEK, {
                      className: S.image,
                      src: o.getAvatarURL(t.id, 24),
                      "aria-label": o.username,
                      size: u.EFr.SIZE_24,
                  }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: "header-primary",
                      variant: "text-md/normal",
                      children: null != s ? s : o.username,
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: S.tag,
                            variant: "text-sm/normal",
                            children: _.ZP.getUserTag(o),
                        }),
                  r ? (0, i.jsx)(k, { tooltipText: l }) : null,
              ],
          });
}
function k(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(d.u, {
        text: t,
        children: (0, i.jsx)("div", {
            className: S.lockIcon,
            children: (0, i.jsx)(u.mBM, {
                size: "xs",
                color: "currentColor",
            }),
        }),
    });
}

n.d(t, { Z: () => I });
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    O = n(594174),
    y = n(51144),
    _ = n(981631),
    C = n(388032),
    N = n(555781);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function Z(e, t) {
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
    let { guild: t, id: l, type: o, isLocked: a, lockTooltipText: c } = e,
        d = !a || null != c;
    s()(d, 'No lockTooltipText provided while isLocked=true');
    let m = r.useCallback(
        (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        Z(S({}, t), {
                            id: l,
                            label: C.intl.string(C.t.oJ1Mu7)
                        })
                    );
            });
        },
        [l]
    );
    switch (o) {
        case p.Kw.CHANNEL:
            return (0, i.jsx)(E, {
                guild: t,
                id: l,
                isLocked: a,
                lockTooltipText: c,
                openEntryContextMenu: m
            });
        case p.Kw.ROLE:
            return (0, i.jsx)(w, {
                guild: t,
                id: l,
                isLocked: a,
                lockTooltipText: c,
                openEntryContextMenu: m
            });
        case p.Kw.USER:
            return (0, i.jsx)(T, {
                guild: t,
                id: l,
                isLocked: a,
                lockTooltipText: c,
                openEntryContextMenu: m
            });
    }
}
function E(e) {
    let { guild: t, id: n, isLocked: l, lockTooltipText: a, openEntryContextMenu: s } = e,
        u = (0, m.bD)(t.id),
        {
            icon: p,
            name: g,
            categoryName: f
        } = (0, c.cj)(
            [h.Z],
            () => {
                if (u === n)
                    return {
                        name: C.intl.string(C.t['7YqSGx']),
                        icon: d.VL1
                    };
                let e = h.Z.getChannel(n),
                    i = (null == e ? void 0 : e.parent_id) != null ? h.Z.getChannel(e.parent_id) : null;
                return {
                    icon: null != e ? (0, b.KS)(e, t) : null,
                    name: null == e ? void 0 : e.name,
                    categoryName: null == i ? void 0 : i.name
                };
            },
            [u, t, n]
        ),
        x = r.useCallback(
            (e) => {
                n !== u && s(e);
            },
            [u, n, s]
        );
    return null == p || null == g
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: x,
              className: N.identifier,
              children: [
                  (0, i.jsx)(p, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: o()(N.channelIcon, N.image)
                  }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: g
                  }),
                  null != f
                      ? (0, i.jsxs)(d.Text, {
                            className: N.tag,
                            variant: 'text-sm/normal',
                            children: ['(', f, ')']
                        })
                      : null,
                  l ? (0, i.jsx)(P, { tooltipText: a }) : null
              ]
          });
}
function w(e) {
    var t;
    let { guild: l, id: a, isLocked: s, lockTooltipText: p } = e,
        m = (0, c.e7)([j.Z], () => j.Z.getRole(l.id, a)),
        b = (0, f.p9)({
            guildId: l.id,
            roleId: a,
            size: 24
        }),
        h = r.useCallback(
            (e) => {
                null != l &&
                    null != m &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await n.e('14486').then(n.bind(n, 786746));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                Z(S({}, t), {
                                    guild: l,
                                    role: m
                                })
                            );
                    });
            },
            [l, m]
        );
    return (null == m ? void 0 : m.name) == null
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: h,
              className: N.identifier,
              children: [
                  null != b
                      ? (0, i.jsx)(g.Z, S({ className: o()(N.__invalid_icon, N.image) }, b))
                      : (0, i.jsx)(d.lZ8, {
                            size: 'custom',
                            width: 23,
                            height: 23,
                            className: o()(N.shield, N.image),
                            color: null != (t = m.colorString) ? t : _.Pbq
                        }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: m.name
                  }),
                  s ? (0, i.jsx)(P, { tooltipText: p }) : null
              ]
          });
}
function T(e) {
    let { guild: t, id: n, isLocked: r, lockTooltipText: l, openEntryContextMenu: o } = e,
        a = (0, c.e7)([O.default], () => O.default.getUser(n)),
        s = (0, c.e7)(
            [x.ZP],
            () => {
                var e;
                return null == (e = x.ZP.getMember(t.id, n)) ? void 0 : e.nick;
            },
            [t.id, n]
        ),
        u = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation);
    return null == a
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: o,
              className: N.identifier,
              children: [
                  (0, i.jsx)(d.qEK, {
                      className: N.image,
                      src: a.getAvatarURL(t.id, 24),
                      'aria-label': a.username,
                      size: d.EFr.SIZE_24
                  }),
                  (0, i.jsx)(d.Text, {
                      className: N.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: null != s ? s : a.username
                  }),
                  u
                      ? null
                      : (0, i.jsx)(d.Text, {
                            className: N.tag,
                            variant: 'text-sm/normal',
                            children: y.ZP.getUserTag(a)
                        }),
                  r ? (0, i.jsx)(P, { tooltipText: l }) : null
              ]
          });
}
function P(e) {
    let { tooltipText: t } = e;
    return (0, i.jsx)(d.ua7, {
        text: t,
        children: (e) =>
            (0, i.jsx)(
                'div',
                Z(S({ className: N.lockIcon }, e), {
                    children: (0, i.jsx)(d.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            )
    });
}

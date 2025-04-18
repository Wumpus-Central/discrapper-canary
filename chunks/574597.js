r.d(t, { Z: () => P });
var n = r(200651),
    l = r(192379),
    i = r(866442),
    o = r(481060),
    a = r(129861),
    c = r(91218),
    s = r(829883),
    u = r(518738),
    d = r(14263),
    p = r(592125),
    f = r(430824),
    b = r(158776),
    O = r(594174),
    m = r(970184),
    y = r(280501),
    j = r(811654),
    g = r(344991),
    h = r(981631),
    v = r(92316);
function P(e) {
    var t;
    let r = (0, m.CJ)(),
        P = null == r || null == (t = r.message) ? void 0 : t.getChannelId(),
        x = p.Z.getChannel(P),
        S = f.Z.getGuild(null == x ? void 0 : x.getGuildId()),
        w = (0, d.Z)(null == S ? void 0 : S.id, j.HI),
        C = l.useMemo(() => (0, j.tx)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, n.jsx)(g.ZP, {
        selectActionComponent: e,
        queryOptions: (t) => (0, j._H)(e.type, t, P),
        renderIcon: (e, t) => {
            let r = t === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === y.tM.USER) {
                let l = O.default.getUser(e.value);
                if (null == l) return;
                return (0, n.jsx)(o.qEK, {
                    size: r ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    src: l.getAvatarURL(null == S ? void 0 : S.id, t),
                    status: r ? null : b.Z.getStatus(l.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === y.tM.ROLE) {
                var l;
                let r = null != S ? f.Z.getRole(S.id, e.value) : void 0;
                if (null == r || null == S) return;
                let a = (0, s._b)(S, r) ? (0, u.Kz)(r, t) : null;
                return null != a
                    ? (0, n.jsx)(
                          c.Z,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {},
                                      n = Object.keys(r);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(r).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                          })
                                      )),
                                      n.forEach(function (t) {
                                          var n;
                                          (n = r[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = n);
                                      });
                              }
                              return e;
                          })({}, a)
                      )
                    : (0, n.jsx)(o.lZ8, {
                          size: 'custom',
                          color: null != (l = r.colorString) ? l : (0, i.Rf)(h.p6O),
                          height: t,
                          width: t
                      });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === y.tM.USER) {
                let r = O.default.getUser(e.value);
                null != r &&
                    (t = (0, n.jsx)(a.Z, {
                        className: v.tag,
                        usernameClass: v.username,
                        discriminatorClass: v.discriminator,
                        botClass: v.bot,
                        user: r,
                        forceUsername: !0
                    }));
            } else if (e.type === y.tM.ROLE) {
                let r = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                    l = null == r ? null : null == w ? void 0 : w[r.id];
                null != l &&
                    (t = (0, n.jsxs)('div', {
                        className: v.roleCountContainer,
                        children: [
                            (0, n.jsx)(o.tBG, {
                                size: 'sm',
                                color: 'currentColor',
                                className: v.roleCountIcon
                            }),
                            (0, n.jsx)('span', {
                                className: v.roleCountText,
                                children: l
                            })
                        ]
                    }));
            }
            return (0, n.jsxs)('span', {
                className: v.label,
                children: [
                    (0, n.jsx)('span', {
                        className: v.labelText,
                        children: e.label
                    }),
                    t
                ]
            });
        },
        defaultValues: C
    });
}

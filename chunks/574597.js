r.d(t, { Z: () => P });
var n = r(200651),
    l = r(192379),
    i = r(866442),
    o = r(481060),
    a = r(129861),
    c = r(91218),
    s = r(829883),
    u = r(518738),
    p = r(14263),
    d = r(592125),
    f = r(430824),
    b = r(158776),
    O = r(594174),
    y = r(970184),
    m = r(280501),
    j = r(811654),
    g = r(344991),
    h = r(981631),
    v = r(922127);
function P(e) {
    var t;
    let r = (0, y.CJ)(),
        P = null == r || null == (t = r.message) ? void 0 : t.getChannelId(),
        x = d.Z.getChannel(P),
        w = f.Z.getGuild(null == x ? void 0 : x.getGuildId()),
        S = (0, p.Z)(null == w ? void 0 : w.id, j.HI),
        C = l.useMemo(() => (0, j.tx)(e.defaultValues, null == w ? void 0 : w.id), [e.defaultValues, w]);
    return (0, n.jsx)(g.ZP, {
        selectActionComponent: e,
        queryOptions: (t) => (0, j._H)(e.type, t, P),
        renderIcon: (e, t) => {
            let r = t === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === m.tM.USER) {
                let l = O.default.getUser(e.value);
                if (null == l) return;
                return (0, n.jsx)(o.qEK, {
                    size: r ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    src: l.getAvatarURL(null == w ? void 0 : w.id, t),
                    status: r ? null : b.Z.getStatus(l.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === m.tM.ROLE) {
                var l;
                let r = null != w ? f.Z.getRole(w.id, e.value) : void 0;
                if (null == r || null == w) return;
                let a = (0, s._b)(w, r) ? (0, u.Kz)(r, t) : null;
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
            if (e.type === m.tM.USER) {
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
            } else if (e.type === m.tM.ROLE) {
                let r = null != w ? f.Z.getRole(w.id, e.value) : void 0,
                    l = null == r ? null : null == S ? void 0 : S[r.id];
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

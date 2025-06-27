r.d(t, { Z: () => x });
var n = r(255367),
    l = r(73800),
    i = r(866442),
    o = r(481060),
    a = r(129861),
    c = r(91218),
    s = r(829883),
    u = r(518738),
    d = r(14263),
    p = r(592125),
    f = r(485386),
    b = r(430824),
    m = r(158776),
    O = r(594174),
    y = r(970184),
    j = r(280501),
    g = r(811654),
    h = r(344991),
    v = r(981631),
    P = r(922127);
function x(e) {
    var t;
    let r = (0, y.CJ)(),
        x = null == r || null == (t = r.message) ? void 0 : t.getChannelId(),
        S = p.Z.getChannel(x),
        w = b.Z.getGuild(null == S ? void 0 : S.getGuildId()),
        C = (0, d.Z)(null == w ? void 0 : w.id, g.HI),
        E = l.useMemo(() => (0, g.tx)(e.defaultValues, null == w ? void 0 : w.id), [e.defaultValues, w]);
    return (0, n.jsx)(h.ZP, {
        selectActionComponent: e,
        queryOptions: (t) => (0, g._H)(e.type, t, x),
        renderIcon: (e, t) => {
            let r = t === h.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === j.tM.USER) {
                let l = O.default.getUser(e.value);
                if (null == l) return;
                return (0, n.jsx)(o.qEK, {
                    size: r ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    src: l.getAvatarURL(null == w ? void 0 : w.id, t),
                    status: r ? null : m.Z.getStatus(l.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === j.tM.ROLE) {
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
                          color: null != (l = r.colorString) ? l : (0, i.Rf)(v.p6O),
                          height: t,
                          width: t
                      });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === j.tM.USER) {
                let r = O.default.getUser(e.value);
                null != r &&
                    (t = (0, n.jsx)(a.Z, {
                        className: P.tag,
                        usernameClass: P.username,
                        discriminatorClass: P.discriminator,
                        botClass: P.bot,
                        user: r,
                        forceUsername: !0
                    }));
            } else if (e.type === j.tM.ROLE) {
                let r = null != w ? f.Z.getRole(w.id, e.value) : void 0,
                    l = null == r ? null : null == C ? void 0 : C[r.id];
                null != l &&
                    (t = (0, n.jsxs)('div', {
                        className: P.roleCountContainer,
                        children: [
                            (0, n.jsx)(o.tBG, {
                                size: 'sm',
                                color: 'currentColor',
                                className: P.roleCountIcon
                            }),
                            (0, n.jsx)('span', {
                                className: P.roleCountText,
                                children: l
                            })
                        ]
                    }));
            }
            return (0, n.jsxs)('span', {
                className: P.label,
                children: [
                    (0, n.jsx)('span', {
                        className: P.labelText,
                        children: e.label
                    }),
                    t
                ]
            });
        },
        defaultValues: E
    });
}

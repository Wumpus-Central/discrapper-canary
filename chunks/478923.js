n.d(e, { default: () => v });
var r = n(255367),
    i = n(73800),
    o = n(990547),
    l = n(442837),
    c = n(755721),
    s = n(481060),
    a = n(194359),
    d = n(1596),
    u = n(681678),
    f = n(138201),
    O = n(699516),
    m = n(626135),
    j = n(63063),
    p = n(5192),
    x = n(240515),
    g = n(858380),
    b = n(981631),
    I = n(388032),
    h = n(111627);
function E(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
function y(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function N(t) {
    let { user: e, onBlock: n, onIgnore: i, location: o, disallowIgnore: a, guildId: u, channelId: N } = t,
        v = (0, l.e7)([O.Z], () => O.Z.isIgnored(e.id));
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsxs)('div', {
                className: h.confirmationHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: h.iconContainer,
                        children: [
                            (0, r.jsx)(s.qEK, {
                                size: s.EFr.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                'aria-hidden': !0
                            }),
                            (0, r.jsx)('div', {
                                className: h.icon,
                                children: (0, r.jsx)(s.t6m, {})
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: I.intl.format(I.t.CIbzHR, { username: p.ZP.getName(u, N, e) })
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: I.intl.string(I.t.S70joq)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(d.Z, {}),
            a || v
                ? null
                : (0, r.jsxs)('div', {
                      className: h.otherOptions,
                      children: [
                          (0, r.jsx)(f.rT, {
                              title: I.intl.string(I.t['+BJTcH']),
                              children: (0, r.jsx)(f.ZP, {
                                  title: I.intl.string(I.t.hC8tcX),
                                  description: I.intl.string(I.t.If89rK),
                                  titleVariant: 'text-md/medium',
                                  descriptionVariant: 'text-xs/medium',
                                  buttonText: I.intl.string(I.t.mxJOd3),
                                  buttonColor: c.Tt.PRIMARY,
                                  onButtonPress: () => {
                                      (m.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                                          action: g.l.GOTO_IGNORE,
                                          location: o
                                      }),
                                          (0, s.pTH)(),
                                          (0, s.h7j)((t) =>
                                              (0, r.jsx)(
                                                  x.default,
                                                  y(E({}, t), {
                                                      user: e,
                                                      guildId: u,
                                                      channelId: N,
                                                      onIgnore: i,
                                                      onBlock: n,
                                                      location: o
                                                  })
                                              )
                                          ));
                                  }
                              })
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              className: h.featureGuide,
                              children: I.intl.format(I.t.DJN6eX, { articleLink: j.Z.getArticleURL(b.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                          })
                      ]
                  })
        ]
    });
}
function v(t) {
    var { user: e, onBlock: n, onCancel: l, onIgnore: c, location: d = 'ContextMenu', disallowIgnore: f, guildId: O, channelId: j } = t,
        p = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) ((n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]));
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]));
            }
            return i;
        })(t, ['user', 'onBlock', 'onCancel', 'onIgnore', 'location', 'disallowIgnore', 'guildId', 'channelId']);
    return (
        i.useLayoutEffect(
            () => () => {
                m.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                    action: g.l.DISMISS_BLOCK,
                    location: d
                });
            },
            [d]
        ),
        (0, r.jsx)(
            s.ConfirmModal,
            y(
                E(
                    {
                        confirmText: I.intl.string(I.t.l4EmaW),
                        cancelText: I.intl.string(I.t['ETE/oK']),
                        onCancel: () => {
                            (m.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                                action: g.l.CANCEL_BLOCK,
                                location: d
                            }),
                                null == l || l());
                        },
                        onConfirm: () => {
                            (null == n || n(),
                                a.Z.blockUser(e.id, { location: d }).then(() => {
                                    (m.default.track(b.rMx.BLOCK_USER_CONFIRMED), u.Z.showBlockSuccessToast(e.id, null != j ? j : void 0));
                                }));
                        },
                        impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION }
                    },
                    p
                ),
                {
                    children: (0, r.jsx)(N, {
                        user: e,
                        guildId: O,
                        channelId: j,
                        onBlock: n,
                        onIgnore: c,
                        disallowIgnore: f
                    })
                }
            )
        )
    );
}

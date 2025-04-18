r.d(e, { default: () => y });
var n = r(200651),
    i = r(192379),
    o = r(990547),
    c = r(442837),
    s = r(481060),
    a = r(194359),
    l = r(1596),
    d = r(681678),
    u = r(138201),
    f = r(699516),
    O = r(626135),
    m = r(63063),
    j = r(5192),
    N = r(240515),
    p = r(858380),
    x = r(981631),
    g = r(388032),
    b = r(111627);
function I(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                (n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
function h(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              }),
        t
    );
}
function E(t) {
    let { user: e, onBlock: r, onIgnore: i, location: o, disallowIgnore: a, guildId: d, channelId: E } = t,
        y = (0, c.e7)([f.Z], () => f.Z.isIgnored(e.id));
    return (0, n.jsxs)('div', {
        className: b.container,
        children: [
            (0, n.jsxs)('div', {
                className: b.confirmationHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: b.iconContainer,
                        children: [
                            (0, n.jsx)(s.qEK, {
                                size: s.EFr.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                'aria-hidden': !0
                            }),
                            (0, n.jsx)('div', {
                                className: b.icon,
                                children: (0, n.jsx)(s.t6m, {})
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(s.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: g.NW.format(g.t.CIbzHR, { username: j.ZP.getName(d, E, e) })
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: g.NW.string(g.t.S70joq)
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(l.Z, {}),
            a || y
                ? null
                : (0, n.jsxs)('div', {
                      className: b.otherOptions,
                      children: [
                          (0, n.jsx)(u.rT, {
                              title: g.NW.string(g.t['+BJTcH']),
                              children: (0, n.jsx)(u.ZP, {
                                  title: g.NW.string(g.t.hC8tcX),
                                  description: g.NW.string(g.t.If89rK),
                                  titleVariant: 'text-md/medium',
                                  descriptionVariant: 'text-xs/medium',
                                  buttonText: g.NW.string(g.t.mxJOd3),
                                  buttonColor: s.Ttl.PRIMARY,
                                  onButtonPress: () => {
                                      O.default.track(x.rMx.USER_REMEDIATION_ACTION, {
                                          action: p.l.GOTO_IGNORE,
                                          location: o
                                      }),
                                          (0, s.pTH)(),
                                          (0, s.h7j)((t) =>
                                              (0, n.jsx)(
                                                  N.default,
                                                  h(I({}, t), {
                                                      user: e,
                                                      guildId: d,
                                                      channelId: E,
                                                      onIgnore: i,
                                                      onBlock: r,
                                                      location: o
                                                  })
                                              )
                                          );
                                  }
                              })
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              className: b.featureGuide,
                              children: g.NW.format(g.t.DJN6eX, { articleLink: m.Z.getArticleURL(x.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                          })
                      ]
                  })
        ]
    });
}
function y(t) {
    var { user: e, onBlock: r, onCancel: c, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: f, guildId: m, channelId: j } = t,
        N = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                i = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++) (r = o[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ['user', 'onBlock', 'onCancel', 'onIgnore', 'location', 'disallowIgnore', 'guildId', 'channelId']);
    return (
        i.useLayoutEffect(
            () => () => {
                O.default.track(x.rMx.USER_REMEDIATION_ACTION, {
                    action: p.l.DISMISS_BLOCK,
                    location: u
                });
            },
            [u]
        ),
        (0, n.jsx)(
            s.ConfirmModal,
            h(
                I(
                    {
                        confirmText: g.NW.string(g.t.l4EmaW),
                        cancelText: g.NW.string(g.t['ETE/oK']),
                        onCancel: () => {
                            O.default.track(x.rMx.USER_REMEDIATION_ACTION, {
                                action: p.l.CANCEL_BLOCK,
                                location: u
                            }),
                                null == c || c();
                        },
                        onConfirm: () => {
                            null == r || r(),
                                a.Z.blockUser(e.id, { location: u }).then(() => {
                                    O.default.track(x.rMx.BLOCK_USER_CONFIRMED), d.Z.showBlockSuccessToast(e.id, null != j ? j : void 0);
                                });
                        },
                        impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION }
                    },
                    N
                ),
                {
                    children: (0, n.jsx)(E, {
                        user: e,
                        guildId: m,
                        channelId: j,
                        onBlock: r,
                        onIgnore: l,
                        disallowIgnore: f
                    })
                }
            )
        )
    );
}

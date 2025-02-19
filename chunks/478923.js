r.d(e, { default: () => v });
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
    N = r(5192),
    p = r(922611),
    j = r(240515),
    x = r(858380),
    g = r(981631),
    b = r(388032),
    I = r(863702);
function h(t) {
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
function E(t, e) {
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
function y(t) {
    let { user: e, onBlock: r, onIgnore: i, location: o, disallowIgnore: a, guildId: d, channelId: y } = t,
        v = (0, p.Do)({ location: 'confirm_block_modal_body' }),
        T = (0, c.e7)([f.Z], () => f.Z.isIgnored(e.id));
    return v
        ? (0, n.jsxs)('div', {
              className: I.container,
              children: [
                  (0, n.jsxs)('div', {
                      className: I.confirmationHeader,
                      children: [
                          (0, n.jsxs)('div', {
                              className: I.iconContainer,
                              children: [
                                  (0, n.jsx)(s.qEK, {
                                      size: s.EFr.SIZE_56,
                                      src: e.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, n.jsx)('div', {
                                      className: I.icon,
                                      children: (0, n.jsx)(s.t6m, {})
                                  })
                              ]
                          }),
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)(s.X6q, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: b.NW.format(b.t.CIbzHR, { username: N.ZP.getName(d, y, e) })
                                  }),
                                  (0, n.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: b.NW.string(b.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, n.jsx)(l.Z, {}),
                  a || T
                      ? null
                      : (0, n.jsxs)('div', {
                            className: I.otherOptions,
                            children: [
                                (0, n.jsx)(u.rT, {
                                    title: b.NW.string(b.t['+BJTcH']),
                                    children: (0, n.jsx)(u.ZP, {
                                        title: b.NW.string(b.t.hC8tcX),
                                        description: b.NW.string(b.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: b.NW.string(b.t.mxJOd3),
                                        buttonColor: s.Ttl.PRIMARY,
                                        onButtonPress: () => {
                                            O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                                action: x.l.GOTO_IGNORE,
                                                location: o
                                            }),
                                                (0, s.pTH)(),
                                                (0, s.h7j)((t) =>
                                                    (0, n.jsx)(
                                                        j.default,
                                                        E(h({}, t), {
                                                            user: e,
                                                            guildId: d,
                                                            channelId: y,
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
                                    className: I.featureGuide,
                                    children: b.NW.format(b.t.DJN6eX, { articleLink: m.Z.getArticleURL(g.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, n.jsx)(l.Z, {});
}
function v(t) {
    var { user: e, onBlock: r, onCancel: c, onIgnore: l, location: u = 'ContextMenu', disallowIgnore: f, guildId: m, channelId: N } = t,
        j = (function (t, e) {
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
    let I = (0, p.Do)({ location: 'block-confirm-modal' });
    return (
        i.useLayoutEffect(
            () => () => {
                O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                    action: x.l.DISMISS_BLOCK,
                    location: u
                });
            },
            [u]
        ),
        (0, n.jsx)(
            s.ConfirmModal,
            E(
                h(
                    {
                        header: I ? null : b.NW.formatToPlainString(b.t.x5pOn5, { name: e.username }),
                        confirmText: b.NW.string(b.t.l4EmaW),
                        cancelText: I ? b.NW.string(b.t['ETE/oK']) : b.NW.string(b.t['eN6+rK']),
                        onCancel: () => {
                            O.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                action: x.l.CANCEL_BLOCK,
                                location: u
                            }),
                                null == c || c();
                        },
                        onConfirm: () => {
                            null == r || r(),
                                a.Z.addRelationship({
                                    userId: e.id,
                                    context: { location: u },
                                    type: g.OGo.BLOCKED
                                }),
                                O.default.track(g.rMx.BLOCK_USER_CONFIRMED),
                                d.Z.showBlockSuccessToast(e.id, null != N ? N : void 0);
                        },
                        impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION }
                    },
                    j
                ),
                {
                    children: (0, n.jsx)(y, {
                        user: e,
                        guildId: m,
                        channelId: N,
                        onBlock: r,
                        onIgnore: l,
                        disallowIgnore: f
                    })
                }
            )
        )
    );
}

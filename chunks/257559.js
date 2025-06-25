n.d(t, { Z: () => D }), n(997841), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(82659),
    s = n(481060),
    c = n(332148),
    u = n(904245),
    d = n(933557),
    f = n(576855),
    g = n(724723),
    m = n(372900),
    h = n(726521),
    p = n(294218),
    b = n(501517),
    O = n(699516),
    E = n(594174),
    y = n(630388),
    v = n(970257),
    j = n(981631),
    S = n(388032),
    _ = n(130883),
    P = n(739788);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                N(e, t, n[t]);
            });
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
class x extends r.PureComponent {
    render() {
        let e,
            t,
            n = g.Z.getCurrentConfig({ location: 'DeleteModal' }).enabled,
            { report: r, resolveFlag: l } = this.state,
            a = this.props,
            { channel: c, message: u, showContextMenuHint: d, moderatorReportData: h } = a,
            b = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(a, ['channel', 'message', 'showContextMenuHint', 'moderatorReportData']),
            O = c.type === j.d4z.GUILD_ANNOUNCEMENT && (0, y.yE)(u.flags, j.iLy.CROSSPOSTED);
        d &&
            (e = (0, i.jsx)(f.Z, {
                className: P.spacingTop,
                children: S.intl.format(S.t.IxY7Ex, {})
            })),
            (0, v.vc)(u) &&
                (t = (0, i.jsx)(s.j7V, {
                    value: r,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: P.spacingTop,
                    children: S.intl.string(S.t.x0jzo6)
                }));
        let E = O ? S.intl.string(S.t['2kHABQ']) : S.intl.string(S.t.AMvpS0),
            N = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: P.message,
                        children: (0, i.jsx)(p.Z, {
                            channel: c,
                            message: u,
                            disableInteraction: !0
                        })
                    }),
                    t,
                    e
                ]
            }),
            x = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/medium',
                        className: P.spacing,
                        children: E
                    }),
                    N
                ]
            });
        if ((null == h ? void 0 : h.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = h;
            return (0, i.jsx)(m.Z.Provider, {
                value: c.guild_id,
                children: (0, i.jsxs)(
                    s.Y0X,
                    Z(I({ parentComponent: 'DeleteModal' }, b), {
                        children: [
                            (0, i.jsx)(s.xBx, {
                                separator: !1,
                                children: (0, i.jsxs)(s.Kqy, {
                                    direction: 'vertical',
                                    justify: 'space-between',
                                    children: [
                                        (0, i.jsx)(s.olH, {
                                            className: P.closeButton,
                                            onClick: b.onClose
                                        }),
                                        (0, i.jsx)(s.X6q, {
                                            variant: 'heading-xl/bold',
                                            children: S.intl.string(S.t.MWMcg4)
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(s.hzk, { children: x }),
                            (0, i.jsxs)(s.mzw, {
                                children: [
                                    (0, i.jsx)(s.zxk, {
                                        type: 'submit',
                                        color: s.zxk.Colors.RED,
                                        size: s.zxk.Sizes.SMALL,
                                        onClick: this.handleDelete,
                                        children: S.intl.string(S.t.oyYWHB)
                                    }),
                                    !e &&
                                        (0, i.jsx)(s.XZJ, {
                                            value: l,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: S.intl.string(_.default['8yIKen'])
                                        })
                                ]
                            })
                        ]
                    })
                )
            });
        }
        return (0, i.jsx)(m.Z.Provider, {
            value: c.guild_id,
            children: n
                ? (0, i.jsx)(o.u, {
                      title: O ? S.intl.string(S.t.aIz1oa) : S.intl.string(S.t.MWMcg4),
                      headerBody: E,
                      actions: [
                          {
                              text: S.intl.string(S.t['ETE/oK']),
                              onClick: b.onClose,
                              variant: 'secondary'
                          },
                          {
                              text: S.intl.string(S.t.oyYWHB),
                              onClick: this.handleDeleteMana,
                              variant: 'critical-primary'
                          }
                      ],
                      onClose: b.onClose,
                      transitionState: b.transitionState,
                      children: N
                  })
                : (0, i.jsx)(
                      s.ConfirmModal,
                      Z(
                          I(
                              {
                                  header: O ? S.intl.string(S.t.aIz1oa) : S.intl.string(S.t.MWMcg4),
                                  confirmText: S.intl.string(S.t.oyYWHB),
                                  cancelText: S.intl.string(S.t['ETE/oK']),
                                  onConfirm: this.handleDelete
                              },
                              b
                          ),
                          { children: x }
                      )
                  )
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                report: !1,
                resolveFlag: !1
            }),
            N(this, 'handleDelete', () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: i, moderatorReportData: r } = this.props,
                    { moderatorReportChannelId: l, isFlagResolved: a } = null != r ? r : {};
                e
                    ? (0, h.ak)(i, 'message_delete_alert', () =>
                          u.Z.deleteMessage(n.id, i.id).then(() => {
                              if (null != l) {
                                  var e, n;
                                  t && !a && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                              }
                          })
                      )
                    : u.Z.deleteMessage(n.id, i.id).then(() => {
                          if (null != l) {
                              var e, n;
                              t && !a && b.Z.resolveFlag(l), null == (e = (n = this.props).onClose) || e.call(n);
                          }
                      });
            }),
            N(this, 'handleDeleteMana', () => {
                var e, t;
                this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t);
            }),
            N(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            }),
            N(this, 'handleToggleResolveFlag', (e) => {
                this.setState({ resolveFlag: e });
            });
    }
}
let D = {
    confirmPin: function (e, t) {
        (0, s.h7j)((n) => {
            let r,
                l = (0, d.F6)(e, E.default, O.Z);
            return (
                (r = e.isPrivate() ? S.intl.string(S.t.hMRngI) : S.intl.formatToPlainString(S.t['3IRluL'], { channelName: l })),
                (0, i.jsx)(m.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        s.ConfirmModal,
                        Z(
                            I(
                                {
                                    header: S.intl.string(S.t.bKMaZW),
                                    confirmText: S.intl.string(S.t.rOQ5BQ),
                                    cancelText: S.intl.string(S.t['ETE/oK']),
                                    confirmButtonColor: s.zxk.Colors.BRAND,
                                    onConfirm: () => c.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        className: P.spacing,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
                                        className: P.message,
                                        children: (0, i.jsx)(p.Z, {
                                            channel: e,
                                            message: t,
                                            animateAvatar: !1,
                                            disableInteraction: !0
                                        })
                                    })
                                ]
                            }
                        )
                    )
                })
            );
        });
    },
    confirmUnpin: function (e, t) {
        (0, s.h7j)((n) =>
            (0, i.jsx)(m.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(
                    s.ConfirmModal,
                    Z(
                        I(
                            {
                                header: S.intl.string(S.t.CFF2vL),
                                confirmText: S.intl.string(S.t.lAU5jI),
                                cancelText: S.intl.string(S.t['ETE/oK']),
                                onConfirm: () => c.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    className: P.spacing,
                                    children: S.intl.string(S.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: a()(P.message, P.spacing),
                                    children: (0, i.jsx)(p.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(f.Z, { children: S.intl.format(S.t.oCVB3d, {}) })
                            ]
                        }
                    )
                )
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, s.h7j)((l) =>
            (0, i.jsx)(
                x,
                I(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: r
                    },
                    l
                )
            )
        );
    },
    confirmEdit: function (e, t, n) {
        (0, s.h7j)((r) =>
            (0, i.jsx)(
                s.ConfirmModal,
                Z(
                    I(
                        {
                            header: S.intl.string(S.t.aIz1oa),
                            confirmText: S.intl.string(S.t['cY+Ooa']),
                            cancelText: S.intl.string(S.t['ETE/oK']),
                            confirmButtonColor: s.zxk.Colors.BRAND,
                            onConfirm: () => u.Z.editMessage(e, t, { content: n })
                        },
                        r
                    ),
                    {
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: P.spacing,
                            children: S.intl.string(S.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};

(n.d(t, { Z: () => A }), n(997841), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(82659),
    o = n(481060),
    c = n(332148),
    d = n(904245),
    u = n(933557),
    g = n(576855),
    h = n(724723),
    f = n(372900),
    m = n(726521),
    E = n(294218),
    p = n(501517),
    v = n(699516),
    N = n(594174),
    O = n(630388),
    x = n(970257),
    S = n(981631),
    D = n(388032),
    j = n(130883),
    M = n(739788);
function _(e, t, n) {
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
function b(e) {
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
                _(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
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
class I extends l.PureComponent {
    render() {
        let e,
            t,
            n = h.Z.getCurrentConfig({ location: 'DeleteModal' }).enabled,
            { report: l, resolveFlag: r } = this.state,
            s = this.props,
            { channel: c, message: d, showContextMenuHint: u, moderatorReportData: m } = s,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            l = {},
                            r = Object.keys(e);
                        for (i = 0; i < r.length; i++) ((n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) ((n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                }
                return l;
            })(s, ['channel', 'message', 'showContextMenuHint', 'moderatorReportData']),
            v = c.type === S.d4z.GUILD_ANNOUNCEMENT && (0, O.yE)(d.flags, S.iLy.CROSSPOSTED);
        (u &&
            (e = (0, i.jsx)(g.Z, {
                className: M.spacingTop,
                children: D.intl.format(D.t.IxY7Ex, {})
            })),
            (0, x.vc)(d) &&
                (t = (0, i.jsx)(o.j7V, {
                    value: l,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: M.spacingTop,
                    children: D.intl.string(D.t.x0jzo6)
                })));
        let N = v ? D.intl.string(D.t['2kHABQ']) : D.intl.string(D.t.AMvpS0),
            _ = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: M.message,
                        children: (0, i.jsx)(E.Z, {
                            channel: c,
                            message: d,
                            disableInteraction: !0
                        })
                    }),
                    t,
                    e
                ]
            }),
            I = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        className: M.spacing,
                        children: N
                    }),
                    _
                ]
            });
        if ((null == m ? void 0 : m.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = m;
            return (0, i.jsx)(f.Z.Provider, {
                value: c.guild_id,
                children: (0, i.jsxs)(
                    o.Y0X,
                    y(b({ parentComponent: 'DeleteModal' }, p), {
                        children: [
                            (0, i.jsx)(o.xBx, {
                                separator: !1,
                                children: (0, i.jsxs)(o.Kqy, {
                                    direction: 'vertical',
                                    justify: 'space-between',
                                    children: [
                                        (0, i.jsx)(o.olH, {
                                            className: M.closeButton,
                                            onClick: p.onClose
                                        }),
                                        (0, i.jsx)(o.X6q, {
                                            variant: 'heading-xl/bold',
                                            children: D.intl.string(D.t.MWMcg4)
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(o.hzk, { children: I }),
                            (0, i.jsxs)(o.mzw, {
                                children: [
                                    (0, i.jsx)(o.zxk, {
                                        type: 'submit',
                                        color: o.zxk.Colors.RED,
                                        size: o.zxk.Sizes.SMALL,
                                        onClick: this.handleDelete,
                                        children: D.intl.string(D.t.oyYWHB)
                                    }),
                                    !e &&
                                        (0, i.jsx)(o.XZJ, {
                                            value: r,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: D.intl.string(j.default['8yIKen'])
                                        })
                                ]
                            })
                        ]
                    })
                )
            });
        }
        return (0, i.jsx)(f.Z.Provider, {
            value: c.guild_id,
            children: n
                ? (0, i.jsx)(a.u, {
                      title: v ? D.intl.string(D.t.aIz1oa) : D.intl.string(D.t.MWMcg4),
                      headerBody: N,
                      actions: [
                          {
                              text: D.intl.string(D.t['ETE/oK']),
                              onClick: p.onClose,
                              variant: 'secondary'
                          },
                          {
                              text: D.intl.string(D.t.oyYWHB),
                              onClick: this.handleDeleteMana,
                              variant: 'critical-primary'
                          }
                      ],
                      onClose: p.onClose,
                      transitionState: p.transitionState,
                      children: _
                  })
                : (0, i.jsx)(
                      o.ConfirmModal,
                      y(
                          b(
                              {
                                  header: v ? D.intl.string(D.t.aIz1oa) : D.intl.string(D.t.MWMcg4),
                                  confirmText: D.intl.string(D.t.oyYWHB),
                                  cancelText: D.intl.string(D.t['ETE/oK']),
                                  onConfirm: this.handleDelete
                              },
                              p
                          ),
                          { children: I }
                      )
                  )
        });
    }
    constructor(...e) {
        (super(...e),
            _(this, 'state', {
                report: !1,
                resolveFlag: !1
            }),
            _(this, 'handleDelete', () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: i, moderatorReportData: l } = this.props,
                    { moderatorReportChannelId: r, isFlagResolved: s } = null != l ? l : {};
                e
                    ? (0, m.ak)(i, 'message_delete_alert', () =>
                          d.Z.deleteMessage(n.id, i.id).then(() => {
                              if (null != r) {
                                  var e, n;
                                  (t && !s && p.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n));
                              }
                          })
                      )
                    : d.Z.deleteMessage(n.id, i.id).then(() => {
                          if (null != r) {
                              var e, n;
                              (t && !s && p.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n));
                          }
                      });
            }),
            _(this, 'handleDeleteMana', () => {
                var e, t;
                (this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t));
            }),
            _(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            }),
            _(this, 'handleToggleResolveFlag', (e) => {
                this.setState({ resolveFlag: e });
            }));
    }
}
let A = {
    confirmPin: function (e, t) {
        (0, o.h7j)((n) => {
            let l,
                r = (0, u.F6)(e, N.default, v.Z);
            return (
                (l = e.isPrivate() ? D.intl.string(D.t.hMRngI) : D.intl.formatToPlainString(D.t['3IRluL'], { channelName: r })),
                (0, i.jsx)(f.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        o.ConfirmModal,
                        y(
                            b(
                                {
                                    header: D.intl.string(D.t.bKMaZW),
                                    confirmText: D.intl.string(D.t.rOQ5BQ),
                                    cancelText: D.intl.string(D.t['ETE/oK']),
                                    confirmButtonColor: o.zxk.Colors.BRAND,
                                    onConfirm: () => c.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: M.spacing,
                                        children: l
                                    }),
                                    (0, i.jsx)('div', {
                                        className: M.message,
                                        children: (0, i.jsx)(E.Z, {
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
        (0, o.h7j)((n) =>
            (0, i.jsx)(f.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(
                    o.ConfirmModal,
                    y(
                        b(
                            {
                                header: D.intl.string(D.t.CFF2vL),
                                confirmText: D.intl.string(D.t.lAU5jI),
                                cancelText: D.intl.string(D.t['ETE/oK']),
                                onConfirm: () => c.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: M.spacing,
                                    children: D.intl.string(D.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: s()(M.message, M.spacing),
                                    children: (0, i.jsx)(E.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(g.Z, { children: D.intl.format(D.t.oCVB3d, {}) })
                            ]
                        }
                    )
                )
            })
        );
    },
    confirmDelete: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        (0, o.h7j)((r) =>
            (0, i.jsx)(
                I,
                b(
                    {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        moderatorReportData: l
                    },
                    r
                )
            )
        );
    },
    confirmEdit: function (e, t, n) {
        (0, o.h7j)((l) =>
            (0, i.jsx)(
                o.ConfirmModal,
                y(
                    b(
                        {
                            header: D.intl.string(D.t.aIz1oa),
                            confirmText: D.intl.string(D.t['cY+Ooa']),
                            cancelText: D.intl.string(D.t['ETE/oK']),
                            confirmButtonColor: o.zxk.Colors.BRAND,
                            onConfirm: () => d.Z.editMessage(e, t, { content: n })
                        },
                        l
                    ),
                    {
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: M.spacing,
                            children: D.intl.string(D.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};

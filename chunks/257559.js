(n.d(t, { Z: () => P }), n(997841), n(388685));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(82659),
    o = n(755721),
    c = n(481060),
    d = n(332148),
    u = n(904245),
    g = n(933557),
    h = n(576855),
    f = n(724723),
    m = n(372900),
    E = n(726521),
    p = n(294218),
    v = n(501517),
    N = n(699516),
    O = n(594174),
    S = n(630388),
    x = n(970257),
    D = n(981631),
    _ = n(388032),
    M = n(130883),
    j = n(739788);
function b(e, t, n) {
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
function A(e) {
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
                b(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
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
class y extends l.PureComponent {
    render() {
        let e,
            t,
            n = f.Z.getCurrentConfig({ location: 'DeleteModal' }).enabled,
            { report: l, resolveFlag: r } = this.state,
            s = this.props,
            { channel: o, message: d, showContextMenuHint: u, moderatorReportData: g } = s,
            E = (function (e, t) {
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
            v = o.type === D.d4z.GUILD_ANNOUNCEMENT && (0, S.yE)(d.flags, D.iLy.CROSSPOSTED);
        (u &&
            (e = (0, i.jsx)(h.Z, {
                className: j.spacingTop,
                children: _.intl.format(_.t.IxY7Ex, {})
            })),
            (0, x.vc)(d) &&
                (t = (0, i.jsx)(c.j7V, {
                    value: l,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: j.spacingTop,
                    children: _.intl.string(_.t.x0jzo6)
                })));
        let N = v ? _.intl.string(_.t['2kHABQ']) : _.intl.string(_.t.AMvpS0),
            O = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: j.message,
                        children: (0, i.jsx)(p.Z, {
                            channel: o,
                            message: d,
                            disableInteraction: !0
                        })
                    }),
                    t,
                    e
                ]
            }),
            b = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/medium',
                        className: j.spacing,
                        children: N
                    }),
                    O
                ]
            });
        if ((null == g ? void 0 : g.moderatorReportChannelId) != null) {
            let { isFlagResolved: e } = g;
            return (0, i.jsx)(m.Z.Provider, {
                value: o.guild_id,
                children: (0, i.jsxs)(
                    c.Y0X,
                    I(A({ parentComponent: 'DeleteModal' }, E), {
                        children: [
                            (0, i.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, i.jsxs)(c.Kqy, {
                                    direction: 'vertical',
                                    justify: 'space-between',
                                    children: [
                                        (0, i.jsx)(c.olH, {
                                            className: j.closeButton,
                                            onClick: E.onClose
                                        }),
                                        (0, i.jsx)(c.X6q, {
                                            variant: 'heading-xl/bold',
                                            children: _.intl.string(_.t.MWMcg4)
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(c.hzk, { children: b }),
                            (0, i.jsxs)(c.mzw, {
                                children: [
                                    (0, i.jsx)(c.zxk, {
                                        variant: 'critical-primary',
                                        size: 'sm',
                                        text: _.intl.string(_.t.oyYWHB),
                                        type: 'submit',
                                        onClick: this.handleDelete
                                    }),
                                    !e &&
                                        (0, i.jsx)(c.XZJ, {
                                            value: r,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: _.intl.string(M.default['8yIKen'])
                                        })
                                ]
                            })
                        ]
                    })
                )
            });
        }
        return (0, i.jsx)(m.Z.Provider, {
            value: o.guild_id,
            children: n
                ? (0, i.jsx)(a.u, {
                      title: v ? _.intl.string(_.t.aIz1oa) : _.intl.string(_.t.MWMcg4),
                      subtitle: N,
                      actions: [
                          {
                              text: _.intl.string(_.t['ETE/oK']),
                              onClick: E.onClose,
                              variant: 'secondary'
                          },
                          {
                              text: _.intl.string(_.t.oyYWHB),
                              onClick: this.handleDeleteMana,
                              variant: 'critical-primary'
                          }
                      ],
                      onClose: E.onClose,
                      transitionState: E.transitionState,
                      children: O
                  })
                : (0, i.jsx)(
                      c.ConfirmModal,
                      I(
                          A(
                              {
                                  header: v ? _.intl.string(_.t.aIz1oa) : _.intl.string(_.t.MWMcg4),
                                  confirmText: _.intl.string(_.t.oyYWHB),
                                  cancelText: _.intl.string(_.t['ETE/oK']),
                                  onConfirm: this.handleDelete
                              },
                              E
                          ),
                          { children: b }
                      )
                  )
        });
    }
    constructor(...e) {
        (super(...e),
            b(this, 'state', {
                report: !1,
                resolveFlag: !1
            }),
            b(this, 'handleDelete', () => {
                let { report: e, resolveFlag: t } = this.state,
                    { channel: n, message: i, moderatorReportData: l } = this.props,
                    { moderatorReportChannelId: r, isFlagResolved: s } = null != l ? l : {};
                e
                    ? (0, E.ak)(i, 'message_delete_alert', () =>
                          u.Z.deleteMessage(n.id, i.id).then(() => {
                              if (null != r) {
                                  var e, n;
                                  (t && !s && v.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n));
                              }
                          })
                      )
                    : u.Z.deleteMessage(n.id, i.id).then(() => {
                          if (null != r) {
                              var e, n;
                              (t && !s && v.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n));
                          }
                      });
            }),
            b(this, 'handleDeleteMana', () => {
                var e, t;
                (this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t));
            }),
            b(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            }),
            b(this, 'handleToggleResolveFlag', (e) => {
                this.setState({ resolveFlag: e });
            }));
    }
}
let P = {
    confirmPin: function (e, t) {
        (0, c.h7j)((n) => {
            let l,
                r = (0, g.F6)(e, O.default, N.Z);
            return (
                (l = e.isPrivate() ? _.intl.string(_.t.hMRngI) : _.intl.formatToPlainString(_.t['3IRluL'], { channelName: r })),
                (0, i.jsx)(m.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        c.ConfirmModal,
                        I(
                            A(
                                {
                                    header: _.intl.string(_.t.bKMaZW),
                                    confirmText: _.intl.string(_.t.rOQ5BQ),
                                    cancelText: _.intl.string(_.t['ETE/oK']),
                                    confirmButtonColor: o.zx.Colors.BRAND,
                                    onConfirm: () => d.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        className: j.spacing,
                                        children: l
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j.message,
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
        (0, c.h7j)((n) =>
            (0, i.jsx)(m.Z.Provider, {
                value: e.guild_id,
                children: (0, i.jsxs)(
                    c.ConfirmModal,
                    I(
                        A(
                            {
                                header: _.intl.string(_.t.CFF2vL),
                                confirmText: _.intl.string(_.t.lAU5jI),
                                cancelText: _.intl.string(_.t['ETE/oK']),
                                onConfirm: () => d.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    className: j.spacing,
                                    children: _.intl.string(_.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: s()(j.message, j.spacing),
                                    children: (0, i.jsx)(p.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(h.Z, { children: _.intl.format(_.t.oCVB3d, {}) })
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
        (0, c.h7j)((r) =>
            (0, i.jsx)(
                y,
                A(
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
        (0, c.h7j)((l) =>
            (0, i.jsx)(
                c.ConfirmModal,
                I(
                    A(
                        {
                            header: _.intl.string(_.t.aIz1oa),
                            confirmText: _.intl.string(_.t['cY+Ooa']),
                            cancelText: _.intl.string(_.t['ETE/oK']),
                            confirmButtonColor: o.zx.Colors.BRAND,
                            onConfirm: () => u.Z.editMessage(e, t, { content: n })
                        },
                        l
                    ),
                    {
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            className: j.spacing,
                            children: _.intl.string(_.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};

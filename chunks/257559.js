(n.d(t, { Z: () => C }), n(997841), n(388685));
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
    x = n(630388),
    S = n(970257),
    D = n(981631),
    j = n(388032),
    _ = n(130883),
    b = n(739788);
function M(e, t, n) {
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
function y(e) {
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
                M(e, t, n[t]);
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
class A extends l.PureComponent {
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
            v = o.type === D.d4z.GUILD_ANNOUNCEMENT && (0, x.yE)(d.flags, D.iLy.CROSSPOSTED);
        (u &&
            (e = (0, i.jsx)(h.Z, {
                className: b.spacingTop,
                children: j.intl.format(j.t.IxY7Ex, {})
            })),
            (0, S.vc)(d) &&
                (t = (0, i.jsx)(c.j7V, {
                    value: l,
                    onChange: this.handleToggleReport,
                    hideBorder: !0,
                    className: b.spacingTop,
                    children: j.intl.string(j.t.x0jzo6)
                })));
        let N = v ? j.intl.string(j.t['2kHABQ']) : j.intl.string(j.t.AMvpS0),
            O = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: b.message,
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
            M = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/medium',
                        className: b.spacing,
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
                    I(y({ parentComponent: 'DeleteModal' }, E), {
                        children: [
                            (0, i.jsx)(c.xBx, {
                                separator: !1,
                                children: (0, i.jsxs)(c.Kqy, {
                                    direction: 'vertical',
                                    justify: 'space-between',
                                    children: [
                                        (0, i.jsx)(c.olH, {
                                            className: b.closeButton,
                                            onClick: E.onClose
                                        }),
                                        (0, i.jsx)(c.X6q, {
                                            variant: 'heading-xl/bold',
                                            children: j.intl.string(j.t.MWMcg4)
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(c.hzk, { children: M }),
                            (0, i.jsxs)(c.mzw, {
                                children: [
                                    (0, i.jsx)(c.zxk, {
                                        variant: 'critical-primary',
                                        size: 'sm',
                                        text: j.intl.string(j.t.oyYWHB),
                                        type: 'submit',
                                        onClick: this.handleDelete
                                    }),
                                    !e &&
                                        (0, i.jsx)(c.XZJ, {
                                            value: r,
                                            onChange: (e, t) => this.handleToggleResolveFlag(t),
                                            children: j.intl.string(_.default['8yIKen'])
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
                      title: v ? j.intl.string(j.t.aIz1oa) : j.intl.string(j.t.MWMcg4),
                      subtitle: N,
                      actions: [
                          {
                              text: j.intl.string(j.t['ETE/oK']),
                              onClick: E.onClose,
                              variant: 'secondary'
                          },
                          {
                              text: j.intl.string(j.t.oyYWHB),
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
                          y(
                              {
                                  header: v ? j.intl.string(j.t.aIz1oa) : j.intl.string(j.t.MWMcg4),
                                  confirmText: j.intl.string(j.t.oyYWHB),
                                  cancelText: j.intl.string(j.t['ETE/oK']),
                                  onConfirm: this.handleDelete
                              },
                              E
                          ),
                          { children: M }
                      )
                  )
        });
    }
    constructor(...e) {
        (super(...e),
            M(this, 'state', {
                report: !1,
                resolveFlag: !1
            }),
            M(this, 'handleDelete', () => {
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
            M(this, 'handleDeleteMana', () => {
                var e, t;
                (this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t));
            }),
            M(this, 'handleToggleReport', (e) => {
                this.setState({ report: e });
            }),
            M(this, 'handleToggleResolveFlag', (e) => {
                this.setState({ resolveFlag: e });
            }));
    }
}
let C = {
    confirmPin: function (e, t) {
        (0, c.h7j)((n) => {
            let l,
                r = (0, g.F6)(e, O.default, N.Z);
            return (
                (l = e.isPrivate() ? j.intl.string(j.t.hMRngI) : j.intl.formatToPlainString(j.t['3IRluL'], { channelName: r })),
                (0, i.jsx)(m.Z.Provider, {
                    value: e.guild_id,
                    children: (0, i.jsxs)(
                        c.ConfirmModal,
                        I(
                            y(
                                {
                                    header: j.intl.string(j.t.bKMaZW),
                                    confirmText: j.intl.string(j.t.rOQ5BQ),
                                    cancelText: j.intl.string(j.t['ETE/oK']),
                                    confirmButtonColor: o.zx.Colors.BRAND,
                                    onConfirm: () => d.Z.pinMessage(e, t.id)
                                },
                                n
                            ),
                            {
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        className: b.spacing,
                                        children: l
                                    }),
                                    (0, i.jsx)('div', {
                                        className: b.message,
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
                        y(
                            {
                                header: j.intl.string(j.t.CFF2vL),
                                confirmText: j.intl.string(j.t.lAU5jI),
                                cancelText: j.intl.string(j.t['ETE/oK']),
                                onConfirm: () => d.Z.unpinMessage(e, t.id)
                            },
                            n
                        ),
                        {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    className: b.spacing,
                                    children: j.intl.string(j.t.NjEPp6)
                                }),
                                (0, i.jsx)('div', {
                                    className: s()(b.message, b.spacing),
                                    children: (0, i.jsx)(p.Z, {
                                        channel: e,
                                        message: t,
                                        disableInteraction: !0
                                    })
                                }),
                                (0, i.jsx)(h.Z, { children: j.intl.format(j.t.oCVB3d, {}) })
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
                A,
                y(
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
                    y(
                        {
                            header: j.intl.string(j.t.aIz1oa),
                            confirmText: j.intl.string(j.t['cY+Ooa']),
                            cancelText: j.intl.string(j.t['ETE/oK']),
                            confirmButtonColor: o.zx.Colors.BRAND,
                            onConfirm: () => u.Z.editMessage(e, t, { content: n })
                        },
                        l
                    ),
                    {
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            className: b.spacing,
                            children: j.intl.string(j.t.grBcMz)
                        })
                    }
                )
            )
        );
    }
};

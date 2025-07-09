(n.d(t, { Z: () => N }), n(539854), n(388685));
var l,
    r = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    c = n(215569),
    d = n(481060),
    u = n(600164),
    m = n(777789),
    x = n(78839),
    h = n(709054),
    p = n(388032),
    g = n(304586);
function f(e, t, n) {
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
class j extends s.PureComponent {
    render() {
        let { onClose: e } = this.props;
        return (0, r.jsxs)(d.xBx, {
            separator: !1,
            justify: u.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(d.X6q, {
                    variant: 'heading-md/semibold',
                    children: this.props.text
                }),
                null != e ? (0, r.jsx)(d.olH, { onClick: e }) : null
            ]
        });
    }
}
function C(e) {
    let { imageClass: t, children: n, error: l, onDismissError: s } = e;
    return (0, r.jsxs)('div', {
        className: g.content,
        children: [
            (0, r.jsx)('div', { className: a()(g.image, t) }),
            n,
            (0, r.jsx)(c.W, {
                children:
                    null != l
                        ? (0, r.jsx)(d.oXn, {
                              className: g.error,
                              children: (0, r.jsx)(d.kzN, {
                                  onDismiss: s,
                                  children: l.message
                              })
                          })
                        : null
            })
        ]
    });
}
let v = (e) => {
    let { canceledCount: t } = e,
        n = (0, o.e7)([x.Z], () => x.Z.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: g.pendingCancellation,
              children: [
                  (0, r.jsx)(d.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: g.pendingCancellationIcon
                  }),
                  (0, r.jsx)(d.Text, {
                      variant: 'text-md/normal',
                      className: g.pendingCancellationMessage,
                      children: p.intl.format(p.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: t
                      })
                  })
              ]
          });
};
function b(e) {
    let { imageClass: t, blurb: n, guild: l, warning: s, error: i, onDismissError: a, slotCount: o = 1, canceledCount: c = 0 } = e;
    return (0, r.jsxs)(C, {
        imageClass: t,
        error: i,
        onDismissError: a,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: n
            }),
            (0, r.jsx)(m.Z, {
                className: g.guildCard,
                guild: l,
                subscriptionChange: o
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: s
            }),
            c > 0 ? (0, r.jsx)(v, { canceledCount: c }) : null
        ]
    });
}
class y extends s.PureComponent {
    render() {
        let { confirmation: e, confirmationLabel: t, isModifyingSubscription: n, onConfirm: l, onCancel: s } = this.props;
        return (0, r.jsx)(d.mzw, {
            children: (0, r.jsxs)(d.hE2, {
                direction: 'horizontal-reverse',
                children: [
                    (0, r.jsx)(d.zxk, {
                        variant: 'primary',
                        text: e,
                        onClick: l,
                        loading: n,
                        'aria-label': t
                    }),
                    (0, r.jsx)(d.zxk, {
                        variant: 'secondary',
                        text: p.intl.string(p.t['ETE/oK']),
                        onClick: s,
                        disabled: n
                    })
                ]
            })
        });
    }
}
class S extends (l = s.PureComponent) {
    render() {
        let { guild: e, header: t, blurb: n, warning: l, confirmation: i, confirmationLabel: a, imageClass: o, error: c, isModifyingSubscription: u, onConfirm: m, onCancel: x, onDismissError: h, canceledCount: p } = this.props;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(j, { text: t }),
                (0, r.jsx)(d.hzk, {
                    children: (0, r.jsx)(b, {
                        guild: e,
                        blurb: n,
                        warning: l,
                        imageClass: o,
                        error: c,
                        onDismissError: h,
                        canceledCount: p
                    })
                }),
                (0, r.jsx)(y, {
                    confirmation: i,
                    confirmationLabel: a,
                    isModifyingSubscription: u,
                    onConfirm: m,
                    onCancel: x
                })
            ]
        });
    }
}
(f(S, 'Header', j),
    f(S, 'ApplyBody', b),
    f(S, 'TransferBody', function (e) {
        var t, n;
        let { imageClass: l, blurb: i, fromGuilds: a, toGuild: o, error: c, onDismissError: u, slotCount: x = 1, canceledCount: f = 0 } = e,
            j = s.useRef(a),
            b = null == (t = j.current) ? void 0 : t.length,
            y = null == (n = j.current) ? void 0 : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
        return (0, r.jsxs)(C, {
            imageClass: l,
            error: c,
            onDismissError: u,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/bold',
                    className: g.transferGuildCardHeader,
                    children: p.intl.format(p.t['5zQYEx'], { guildCount: b })
                }),
                null != y
                    ? h.default.keys(y).map((e) =>
                          (0, r.jsx)(
                              m.Z,
                              {
                                  className: g.transferFromGuildCard,
                                  guild: y[e][0],
                                  subscriptionChange: -1 * y[e].length
                              },
                              e
                          )
                      )
                    : null,
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: g.transferGuildCardHeader,
                    children: p.intl.format(p.t.ct6oxM, { slotCount: x })
                }),
                (0, r.jsx)('div', {
                    className: g.activeTransferGuildCardBorder,
                    children: (0, r.jsx)(m.Z, {
                        className: g.transferToGuildCard,
                        guild: o,
                        subscriptionChange: null != a ? a.length : 1
                    })
                }),
                f > 0 ? (0, r.jsx)(v, { canceledCount: f }) : null
            ]
        });
    }),
    f(S, 'Footer', y));
let N = S;

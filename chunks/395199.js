l.d(t, { Z: () => N }), l(539854), l(388685);
var n,
    r = l(200651),
    s = l(192379),
    i = l(120356),
    o = l.n(i),
    a = l(442837),
    c = l(215569),
    d = l(481060),
    u = l(600164),
    m = l(777789),
    x = l(78839),
    h = l(709054),
    g = l(388032),
    f = l(304586);
function p(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
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
    let { imageClass: t, children: l, error: n, onDismissError: s } = e;
    return (0, r.jsxs)('div', {
        className: f.content,
        children: [
            (0, r.jsx)('div', { className: o()(f.image, t) }),
            l,
            (0, r.jsx)(c.W, {
                children:
                    null != n
                        ? (0, r.jsx)(d.oXn, {
                              className: f.error,
                              children: (0, r.jsx)(d.kzN, {
                                  onDismiss: s,
                                  children: n.message
                              })
                          })
                        : null
            })
        ]
    });
}
let v = (e) => {
    let { canceledCount: t } = e,
        l = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, r.jsxs)('div', {
              className: f.pendingCancellation,
              children: [
                  (0, r.jsx)(d.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: f.pendingCancellationIcon
                  }),
                  (0, r.jsx)(d.Text, {
                      variant: 'text-md/normal',
                      className: f.pendingCancellationMessage,
                      children: g.intl.format(g.t.SFpsCA, {
                          date: l.currentPeriodEnd,
                          canceledCount: t
                      })
                  })
              ]
          });
};
function b(e) {
    let { imageClass: t, blurb: l, guild: n, warning: s, error: i, onDismissError: o, slotCount: a = 1, canceledCount: c = 0 } = e;
    return (0, r.jsxs)(C, {
        imageClass: t,
        error: i,
        onDismissError: o,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: l
            }),
            (0, r.jsx)(m.Z, {
                className: f.guildCard,
                guild: n,
                subscriptionChange: a
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
        let { confirmation: e, confirmationLabel: t, isModifyingSubscription: l, onConfirm: n, onCancel: s } = this.props;
        return (0, r.jsxs)(d.mzw, {
            children: [
                (0, r.jsx)(d.zxk, {
                    onClick: n,
                    submitting: l,
                    'aria-label': t,
                    children: e
                }),
                (0, r.jsx)(d.zxk, {
                    look: d.zxk.Looks.LINK,
                    color: d.zxk.Colors.PRIMARY,
                    onClick: s,
                    disabled: l,
                    children: g.intl.string(g.t['ETE/oK'])
                })
            ]
        });
    }
}
class S extends (n = s.PureComponent) {
    render() {
        let { guild: e, header: t, blurb: l, warning: n, confirmation: i, confirmationLabel: o, imageClass: a, error: c, isModifyingSubscription: u, onConfirm: m, onCancel: x, onDismissError: h, canceledCount: g } = this.props;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(j, { text: t }),
                (0, r.jsx)(d.hzk, {
                    children: (0, r.jsx)(b, {
                        guild: e,
                        blurb: l,
                        warning: n,
                        imageClass: a,
                        error: c,
                        onDismissError: h,
                        canceledCount: g
                    })
                }),
                (0, r.jsx)(y, {
                    confirmation: i,
                    confirmationLabel: o,
                    isModifyingSubscription: u,
                    onConfirm: m,
                    onCancel: x
                })
            ]
        });
    }
}
p(S, 'Header', j),
    p(S, 'ApplyBody', b),
    p(S, 'TransferBody', function (e) {
        var t, l;
        let { imageClass: n, blurb: i, fromGuilds: o, toGuild: a, error: c, onDismissError: u, slotCount: x = 1, canceledCount: p = 0 } = e,
            j = s.useRef(o),
            b = null == (t = j.current) ? void 0 : t.length,
            y = null == (l = j.current) ? void 0 : l.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
        return (0, r.jsxs)(C, {
            imageClass: n,
            error: c,
            onDismissError: u,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/bold',
                    className: f.transferGuildCardHeader,
                    children: g.intl.format(g.t['5zQYEx'], { guildCount: b })
                }),
                null != y
                    ? h.default.keys(y).map((e) =>
                          (0, r.jsx)(
                              m.Z,
                              {
                                  className: f.transferFromGuildCard,
                                  guild: y[e][0],
                                  subscriptionChange: -1 * y[e].length
                              },
                              e
                          )
                      )
                    : null,
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: f.transferGuildCardHeader,
                    children: g.intl.format(g.t.ct6oxM, { slotCount: x })
                }),
                (0, r.jsx)('div', {
                    className: f.activeTransferGuildCardBorder,
                    children: (0, r.jsx)(m.Z, {
                        className: f.transferToGuildCard,
                        guild: a,
                        subscriptionChange: null != o ? o.length : 1
                    })
                }),
                p > 0 ? (0, r.jsx)(v, { canceledCount: p }) : null
            ]
        });
    }),
    p(S, 'Footer', y);
let N = S;

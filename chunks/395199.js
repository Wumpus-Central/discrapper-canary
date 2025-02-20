n.d(t, { Z: () => S }), n(653041), n(47120);
var l,
    r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    c = n(215569),
    d = n(481060),
    u = n(600164),
    m = n(238807),
    x = n(78839),
    h = n(709054),
    p = n(388032),
    g = n(451107);
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
            (0, r.jsx)('div', { className: o()(g.image, t) }),
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
        n = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription());
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
                      children: p.NW.format(p.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: t
                      })
                  })
              ]
          });
};
function b(e) {
    let { imageClass: t, blurb: n, guild: l, warning: s, error: i, onDismissError: o, slotCount: a = 1, canceledCount: c = 0 } = e;
    return (0, r.jsxs)(C, {
        imageClass: t,
        error: i,
        onDismissError: o,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: n
            }),
            (0, r.jsx)(m.Z, {
                className: g.guildCard,
                guild: l,
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
class N extends s.PureComponent {
    render() {
        let { confirmation: e, confirmationLabel: t, isModifyingSubscription: n, onConfirm: l, onCancel: s } = this.props;
        return (0, r.jsxs)(d.mzw, {
            children: [
                (0, r.jsx)(d.zxk, {
                    onClick: l,
                    submitting: n,
                    'aria-label': t,
                    children: e
                }),
                (0, r.jsx)(d.zxk, {
                    look: d.zxk.Looks.LINK,
                    color: d.zxk.Colors.PRIMARY,
                    onClick: s,
                    disabled: n,
                    children: p.NW.string(p.t['ETE/oK'])
                })
            ]
        });
    }
}
class y extends (l = s.PureComponent) {
    render() {
        let { guild: e, header: t, blurb: n, warning: l, confirmation: i, confirmationLabel: o, imageClass: a, error: c, isModifyingSubscription: u, onConfirm: m, onCancel: x, onDismissError: h, canceledCount: p } = this.props;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(j, { text: t }),
                (0, r.jsx)(d.hzk, {
                    children: (0, r.jsx)(b, {
                        guild: e,
                        blurb: n,
                        warning: l,
                        imageClass: a,
                        error: c,
                        onDismissError: h,
                        canceledCount: p
                    })
                }),
                (0, r.jsx)(N, {
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
f(y, 'Header', j),
    f(y, 'ApplyBody', b),
    f(y, 'TransferBody', function (e) {
        var t, n;
        let { imageClass: l, blurb: i, fromGuilds: o, toGuild: a, error: c, onDismissError: u, slotCount: x = 1, canceledCount: f = 0 } = e,
            j = s.useRef(o),
            b = null === (t = j.current) || void 0 === t ? void 0 : t.length,
            N = null === (n = j.current) || void 0 === n ? void 0 : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
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
                    children: p.NW.format(p.t['5zQYEx'], { guildCount: b })
                }),
                null != N
                    ? h.default.keys(N).map((e) =>
                          (0, r.jsx)(
                              m.Z,
                              {
                                  className: g.transferFromGuildCard,
                                  guild: N[e][0],
                                  subscriptionChange: -1 * N[e].length
                              },
                              e
                          )
                      )
                    : null,
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: g.transferGuildCardHeader,
                    children: p.NW.format(p.t.ct6oxM, { slotCount: x })
                }),
                (0, r.jsx)('div', {
                    className: g.activeTransferGuildCardBorder,
                    children: (0, r.jsx)(m.Z, {
                        className: g.transferToGuildCard,
                        guild: a,
                        subscriptionChange: null != o ? o.length : 1
                    })
                }),
                f > 0 ? (0, r.jsx)(v, { canceledCount: f }) : null
            ]
        });
    }),
    f(y, 'Footer', N);
let S = y;

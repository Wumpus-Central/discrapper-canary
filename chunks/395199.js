n.d(l, { Z: () => y }), n(724458), n(653041), n(47120);
var t,
    s = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    d = n(215569),
    c = n(481060),
    u = n(600164),
    m = n(777789),
    x = n(78839),
    h = n(709054),
    C = n(388032),
    g = n(17876);
function j(e, l, n) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[l] = n),
        e
    );
}
class p extends i.PureComponent {
    render() {
        let { onClose: e } = this.props;
        return (0, s.jsxs)(c.xBx, {
            separator: !1,
            justify: u.Z.Justify.BETWEEN,
            children: [
                (0, s.jsx)(c.X6q, {
                    variant: 'heading-md/semibold',
                    children: this.props.text
                }),
                null != e ? (0, s.jsx)(c.olH, { onClick: e }) : null
            ]
        });
    }
}
function f(e) {
    let { imageClass: l, children: n, error: t, onDismissError: i } = e;
    return (0, s.jsxs)('div', {
        className: g.content,
        children: [
            (0, s.jsx)('div', { className: a()(g.image, l) }),
            n,
            (0, s.jsx)(d.W, {
                children:
                    null != t
                        ? (0, s.jsx)(c.oXn, {
                              className: g.error,
                              children: (0, s.jsx)(c.kzN, {
                                  onDismiss: i,
                                  children: t.message
                              })
                          })
                        : null
            })
        ]
    });
}
let v = (e) => {
    let { canceledCount: l } = e,
        n = (0, o.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, s.jsxs)('div', {
              className: g.pendingCancellation,
              children: [
                  (0, s.jsx)(c.P4T, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: g.pendingCancellationIcon
                  }),
                  (0, s.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: g.pendingCancellationMessage,
                      children: C.intl.format(C.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: l
                      })
                  })
              ]
          });
};
function S(e) {
    let { imageClass: l, blurb: n, guild: t, warning: i, error: r, onDismissError: a, slotCount: o = 1, canceledCount: d = 0 } = e;
    return (0, s.jsxs)(f, {
        imageClass: l,
        error: r,
        onDismissError: a,
        children: [
            (0, s.jsx)(c.Text, {
                variant: 'text-md/normal',
                children: n
            }),
            (0, s.jsx)(m.Z, {
                className: g.guildCard,
                guild: t,
                subscriptionChange: o
            }),
            (0, s.jsx)(c.Text, {
                variant: 'text-md/normal',
                children: i
            }),
            d > 0 ? (0, s.jsx)(v, { canceledCount: d }) : null
        ]
    });
}
class N extends i.PureComponent {
    render() {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: n, onConfirm: t, onCancel: i } = this.props;
        return (0, s.jsxs)(c.mzw, {
            children: [
                (0, s.jsx)(c.zxk, {
                    onClick: t,
                    submitting: n,
                    'aria-label': l,
                    children: e
                }),
                (0, s.jsx)(c.zxk, {
                    look: c.zxk.Looks.LINK,
                    color: c.zxk.Colors.PRIMARY,
                    onClick: i,
                    disabled: n,
                    children: C.intl.string(C.t['ETE/oK'])
                })
            ]
        });
    }
}
class b extends (t = i.PureComponent) {
    render() {
        let { guild: e, header: l, blurb: n, warning: t, confirmation: r, confirmationLabel: a, imageClass: o, error: d, isModifyingSubscription: u, onConfirm: m, onCancel: x, onDismissError: h, canceledCount: C } = this.props;
        return (0, s.jsxs)(i.Fragment, {
            children: [
                (0, s.jsx)(p, { text: l }),
                (0, s.jsx)(c.hzk, {
                    children: (0, s.jsx)(S, {
                        guild: e,
                        blurb: n,
                        warning: t,
                        imageClass: o,
                        error: d,
                        onDismissError: h,
                        canceledCount: C
                    })
                }),
                (0, s.jsx)(N, {
                    confirmation: r,
                    confirmationLabel: a,
                    isModifyingSubscription: u,
                    onConfirm: m,
                    onCancel: x
                })
            ]
        });
    }
}
j(b, 'Header', p),
    j(b, 'ApplyBody', S),
    j(b, 'TransferBody', function (e) {
        var l, n;
        let { imageClass: t, blurb: r, fromGuilds: a, toGuild: o, error: d, onDismissError: u, slotCount: x = 1, canceledCount: j = 0 } = e,
            p = i.useRef(a),
            S = null === (l = p.current) || void 0 === l ? void 0 : l.length,
            N = null === (n = p.current) || void 0 === n ? void 0 : n.reduce((e, l) => (e.hasOwnProperty(l.id) || (e[l.id] = []), e[l.id].push(l), e), {});
        return (0, s.jsxs)(f, {
            imageClass: t,
            error: d,
            onDismissError: u,
            children: [
                (0, s.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: r
                }),
                (0, s.jsx)(c.Text, {
                    variant: 'text-xs/bold',
                    className: g.transferGuildCardHeader,
                    children: C.intl.format(C.t['5zQYEx'], { guildCount: S })
                }),
                null != N
                    ? h.default.keys(N).map((e) =>
                          (0, s.jsx)(
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
                (0, s.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    className: g.transferGuildCardHeader,
                    children: C.intl.format(C.t.ct6oxM, { slotCount: x })
                }),
                (0, s.jsx)('div', {
                    className: g.activeTransferGuildCardBorder,
                    children: (0, s.jsx)(m.Z, {
                        className: g.transferToGuildCard,
                        guild: o,
                        subscriptionChange: null != a ? a.length : 1
                    })
                }),
                j > 0 ? (0, s.jsx)(v, { canceledCount: j }) : null
            ]
        });
    }),
    j(b, 'Footer', N);
let y = b;

n(724458), n(653041), n(47120);
var t,
    s = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    d = n(215569),
    u = n(481060),
    c = n(600164),
    m = n(777789),
    x = n(78839),
    C = n(709054),
    h = n(388032),
    g = n(688131);
function f(e, l, n) {
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
class p extends r.PureComponent {
    render() {
        let { onClose: e } = this.props;
        return (0, s.jsxs)(u.ModalHeader, {
            separator: !1,
            justify: c.Z.Justify.BETWEEN,
            children: [
                (0, s.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    children: this.props.text
                }),
                null != e ? (0, s.jsx)(u.ModalCloseButton, { onClick: e }) : null
            ]
        });
    }
}
function S(e) {
    let { imageClass: l, children: n, error: t, onDismissError: r } = e;
    return (0, s.jsxs)('div', {
        className: g.content,
        children: [
            (0, s.jsx)('div', { className: o()(g.image, l) }),
            n,
            (0, s.jsx)(d.W, {
                children:
                    null != t
                        ? (0, s.jsx)(u.SlideIn, {
                              className: g.error,
                              children: (0, s.jsx)(u.FormErrorBlock, {
                                  onDismiss: r,
                                  children: t.message
                              })
                          })
                        : null
            })
        ]
    });
}
let j = (e) => {
    let { canceledCount: l } = e,
        n = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, s.jsxs)('div', {
              className: g.pendingCancellation,
              children: [
                  (0, s.jsx)(u.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: g.pendingCancellationIcon
                  }),
                  (0, s.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      className: g.pendingCancellationMessage,
                      children: h.intl.format(h.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: l
                      })
                  })
              ]
          });
};
function v(e) {
    let { imageClass: l, blurb: n, guild: t, warning: r, error: i, onDismissError: o, slotCount: a = 1, canceledCount: d = 0 } = e;
    return (0, s.jsxs)(S, {
        imageClass: l,
        error: i,
        onDismissError: o,
        children: [
            (0, s.jsx)(u.Text, {
                variant: 'text-md/normal',
                children: n
            }),
            (0, s.jsx)(m.Z, {
                className: g.guildCard,
                guild: t,
                subscriptionChange: a
            }),
            (0, s.jsx)(u.Text, {
                variant: 'text-md/normal',
                children: r
            }),
            d > 0 ? (0, s.jsx)(j, { canceledCount: d }) : null
        ]
    });
}
class N extends r.PureComponent {
    render() {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: n, onConfirm: t, onCancel: r } = this.props;
        return (0, s.jsxs)(u.ModalFooter, {
            children: [
                (0, s.jsx)(u.Button, {
                    onClick: t,
                    submitting: n,
                    'aria-label': l,
                    children: e
                }),
                (0, s.jsx)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.PRIMARY,
                    onClick: r,
                    disabled: n,
                    children: h.intl.string(h.t['ETE/oK'])
                })
            ]
        });
    }
}
class b extends (t = r.PureComponent) {
    render() {
        let { guild: e, header: l, blurb: n, warning: t, confirmation: i, confirmationLabel: o, imageClass: a, error: d, isModifyingSubscription: c, onConfirm: m, onCancel: x, onDismissError: C, canceledCount: h } = this.props;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                (0, s.jsx)(p, { text: l }),
                (0, s.jsx)(u.ModalContent, {
                    children: (0, s.jsx)(v, {
                        guild: e,
                        blurb: n,
                        warning: t,
                        imageClass: a,
                        error: d,
                        onDismissError: C,
                        canceledCount: h
                    })
                }),
                (0, s.jsx)(N, {
                    confirmation: i,
                    confirmationLabel: o,
                    isModifyingSubscription: c,
                    onConfirm: m,
                    onCancel: x
                })
            ]
        });
    }
}
f(b, 'Header', p),
    f(b, 'ApplyBody', v),
    f(b, 'TransferBody', function (e) {
        var l, n;
        let { imageClass: t, blurb: i, fromGuilds: o, toGuild: a, error: d, onDismissError: c, slotCount: x = 1, canceledCount: f = 0 } = e,
            p = r.useRef(o),
            v = null === (l = p.current) || void 0 === l ? void 0 : l.length,
            N = null === (n = p.current) || void 0 === n ? void 0 : n.reduce((e, l) => (!e.hasOwnProperty(l.id) && (e[l.id] = []), e[l.id].push(l), e), {});
        return (0, s.jsxs)(S, {
            imageClass: t,
            error: d,
            onDismissError: c,
            children: [
                (0, s.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: i
                }),
                (0, s.jsx)(u.Text, {
                    variant: 'text-xs/bold',
                    className: g.transferGuildCardHeader,
                    children: h.intl.format(h.t['5zQYEx'], { guildCount: v })
                }),
                null != N
                    ? C.default.keys(N).map((e) =>
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
                (0, s.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    className: g.transferGuildCardHeader,
                    children: h.intl.format(h.t.ct6oxM, { slotCount: x })
                }),
                (0, s.jsx)('div', {
                    className: g.activeTransferGuildCardBorder,
                    children: (0, s.jsx)(m.Z, {
                        className: g.transferToGuildCard,
                        guild: a,
                        subscriptionChange: null != o ? o.length : 1
                    })
                }),
                f > 0 ? (0, s.jsx)(j, { canceledCount: f }) : null
            ]
        });
    }),
    f(b, 'Footer', N),
    (l.Z = b);

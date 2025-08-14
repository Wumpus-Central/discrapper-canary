n.d(t, { Z: () => N }), n(539854), n(388685);
var l,
    r = n(255367),
    i = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    d = n(215569),
    c = n(481060),
    u = n(600164),
    m = n(777789),
    x = n(78839),
    h = n(709054),
    p = n(388032),
    g = n(542886);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends i.PureComponent {
    render() {
        let { onClose: e } = this.props;
        return (0, r.jsxs)(c.xBx, {
            separator: !1,
            justify: u.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(c.X6q, {
                    variant: "heading-md/semibold",
                    children: this.props.text,
                }),
                null != e ? (0, r.jsx)(c.olH, { onClick: e }) : null,
            ],
        });
    }
}
function C(e) {
    let { imageClass: t, children: n, error: l, onDismissError: i } = e;
    return (0, r.jsxs)("div", {
        className: g.content,
        children: [
            (0, r.jsx)("div", { className: a()(g.image, t) }),
            n,
            (0, r.jsx)(d.W, {
                children:
                    null != l
                        ? (0, r.jsx)(c.oXn, {
                              className: g.error,
                              children: (0, r.jsx)(c.kzN, {
                                  onDismiss: i,
                                  children: l.message,
                              }),
                          })
                        : null,
            }),
        ],
    });
}
let v = (e) => {
    let { canceledCount: t } = e,
        n = (0, o.e7)([x.Z], () => x.Z.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: g.pendingCancellation,
              children: [
                  (0, r.jsx)(c.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: g.pendingCancellationIcon,
                  }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-md/normal",
                      className: g.pendingCancellationMessage,
                      children: p.intl.format(p.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};
function y(e) {
    let {
        imageClass: t,
        blurb: n,
        guild: l,
        warning: i,
        error: s,
        onDismissError: a,
        slotCount: o = 1,
        canceledCount: d = 0,
    } = e;
    return (0, r.jsxs)(C, {
        imageClass: t,
        error: s,
        onDismissError: a,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                children: n,
            }),
            (0, r.jsx)(m.Z, {
                className: g.guildCard,
                guild: l,
                subscriptionChange: o,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                children: i,
            }),
            d > 0 ? (0, r.jsx)(v, { canceledCount: d }) : null,
        ],
    });
}
class b extends i.PureComponent {
    render() {
        let {
            confirmation: e,
            confirmationLabel: t,
            isModifyingSubscription: n,
            onConfirm: l,
            onCancel: i,
        } = this.props;
        return (0, r.jsx)(c.mzw, {
            children: (0, r.jsxs)(c.hE2, {
                direction: "horizontal-reverse",
                children: [
                    (0, r.jsx)(c.zxk, {
                        variant: "primary",
                        text: e,
                        onClick: l,
                        loading: n,
                        "aria-label": t,
                    }),
                    (0, r.jsx)(c.zxk, {
                        variant: "secondary",
                        text: p.intl.string(p.t["ETE/oK"]),
                        onClick: i,
                        disabled: n,
                    }),
                ],
            }),
        });
    }
}
class S extends (l = i.PureComponent) {
    render() {
        let {
            guild: e,
            header: t,
            blurb: n,
            warning: l,
            confirmation: s,
            confirmationLabel: a,
            imageClass: o,
            error: d,
            isModifyingSubscription: u,
            onConfirm: m,
            onCancel: x,
            onDismissError: h,
            canceledCount: p,
        } = this.props;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f, { text: t }),
                (0, r.jsx)(c.hzk, {
                    children: (0, r.jsx)(y, {
                        guild: e,
                        blurb: n,
                        warning: l,
                        imageClass: o,
                        error: d,
                        onDismissError: h,
                        canceledCount: p,
                    }),
                }),
                (0, r.jsx)(b, {
                    confirmation: s,
                    confirmationLabel: a,
                    isModifyingSubscription: u,
                    onConfirm: m,
                    onCancel: x,
                }),
            ],
        });
    }
}
j(S, "Header", f),
    j(S, "ApplyBody", y),
    j(S, "TransferBody", function (e) {
        var t, n;
        let {
                imageClass: l,
                blurb: s,
                fromGuilds: a,
                toGuild: o,
                error: d,
                onDismissError: u,
                slotCount: x = 1,
                canceledCount: j = 0,
            } = e,
            f = i.useRef(a),
            y = null == (t = f.current) ? void 0 : t.length,
            b =
                null == (n = f.current)
                    ? void 0
                    : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
        return (0, r.jsxs)(C, {
            imageClass: l,
            error: d,
            onDismissError: u,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: s,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/bold",
                    className: g.transferGuildCardHeader,
                    children: p.intl.format(p.t["5zQYEx"], { guildCount: y }),
                }),
                null != b
                    ? h.default.keys(b).map((e) =>
                          (0, r.jsx)(
                              m.Z,
                              {
                                  className: g.transferFromGuildCard,
                                  guild: b[e][0],
                                  subscriptionChange: -1 * b[e].length,
                              },
                              e,
                          ),
                      )
                    : null,
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    className: g.transferGuildCardHeader,
                    children: p.intl.format(p.t.ct6oxM, { slotCount: x }),
                }),
                (0, r.jsx)("div", {
                    className: g.activeTransferGuildCardBorder,
                    children: (0, r.jsx)(m.Z, {
                        className: g.transferToGuildCard,
                        guild: o,
                        subscriptionChange: null != a ? a.length : 1,
                    }),
                }),
                j > 0 ? (0, r.jsx)(v, { canceledCount: j }) : null,
            ],
        });
    }),
    j(S, "Footer", b);
let N = S;

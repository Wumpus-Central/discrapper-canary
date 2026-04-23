n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(465323),
    o = n(311907),
    d = n(821609),
    u = n(404778),
    c = n(834730),
    g = n(289873),
    m = n(192308),
    _ = n(534514),
    A = n(194261),
    h = n(391048),
    p = n(323082),
    x = n(99696),
    E = n(202613),
    T = n(287809),
    S = n(927578),
    f = n(580630),
    b = n(83617),
    C = n(661191),
    v = n(533808),
    N = n(219887),
    I = n(652215),
    y = n(985018),
    j = n(95322);
class O extends s.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            hideDivider: s,
            isForSubscription: l,
            locale: a,
            removing: r,
            submitting: o,
            onSubmit: c,
            onCancel: g,
            onDelete: m,
        } = this.props;
        return n
            ? (0, i.jsx)(v.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: o,
                  locale: a,
                  isForSubscription: l,
                  onSubmit: c,
                  onCancel: g,
                  onDelete: m,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s ? null : (0, i.jsx)(u.c, { className: j.__invalid_sourceDivider }),
                      (0, i.jsxs)("div", {
                          className: j.Yb,
                          children: [
                              (0, i.jsx)(N.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, i.jsx)(d.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: y.intl.string(y.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let R = s.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: l, locale: a, onRedeemClick: m } = e,
        [_, A] = s.useState(null),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        s.useEffect(() => {
            void 0 === t
                ? A({ amount: 0, currency: null != h ? (0, r.TW)(`-${h}`) : (0, S.Rr)() })
                : p.YP(t.id).then((e) => {
                      A(e);
                  });
        }, [t, h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(u.c, { className: j.__invalid_sourceDivider }),
                (0, i.jsxs)("div", {
                    className: j.Yb,
                    children: [
                        void 0 !== t
                            ? (0, i.jsx)(N.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, i.jsx)(c.E, { variant: "text-sm/medium", children: y.intl.string(y.t["6EEgNt"]) }),
                        (0, i.jsxs)("div", {
                            className: j.zy,
                            children: [
                                (0, i.jsx)("div", {
                                    className: j.Tq,
                                    children:
                                        null == _
                                            ? (0, i.jsx)(g.y, { type: g.y.Type.SPINNING_CIRCLE })
                                            : (0, i.jsx)(c.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = _ ?? {},
                                                          n = t ?? (0, S.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          s = (0, f.$g)(e ?? 0, n);
                                                      return `${i} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, i.jsx)(d.$, {
                                    variant: "secondary",
                                    onClick: m,
                                    size: "sm",
                                    text: y.intl.string(y.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class L extends s.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await p.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await p.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await p.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, b.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, m.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, i.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, h.ET)();
                },
                onCloseRequest: I.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: j.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: j.z8,
                          children: [
                              (0, i.jsx)(c.E, { variant: "text-sm/normal", children: y.intl.string(y.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: j.Sv, children: y.intl.string(y.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(d.$, { onClick: this.handleAddPaymentMethod, text: y.intl.string(y.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: s,
                locale: l,
                removing: r,
                submitting: o,
                premiumSubscriptionPaymentSourceId: d,
                showGiftCards: g,
            } = this.props,
            m = a()
                .values(s)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : C.default.compare(e.id, t.id))),
            h = m.filter((e) => !(e instanceof E.LQ)),
            p = m.filter((e) => e instanceof E.LQ),
            T = this.state.editingPayment,
            S = h.findIndex((e) => e.id === T),
            f = h.map((e, t) =>
                (0, i.jsx)(
                    O,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === d,
                        hideDivider: 0 === t || S === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: o,
                        removing: r,
                        isEditing: T === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                p.length > 0
                    ? p.map((e, t) =>
                          (0, i.jsx)(
                              R,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === h.length || S === h.length - 1,
                                  isForSubscription: e.id === d,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, x.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, i.jsx)(R, {
                          hideDivider: 0 === h.length || S === h.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, x.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(_.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, i.jsx)(A.X, { size: "sm", className: j.hz }),
                                          " ",
                                          y.intl.string(y.t.W26xGQ),
                                      ],
                                  }),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: y.intl.string(y.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    f,
                    g && e,
                    S !== h.length - 1 || (g && p.length > 0) ? (0, i.jsx)(u.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
let D = L;

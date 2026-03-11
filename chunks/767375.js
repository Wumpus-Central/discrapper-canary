n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(465323),
    o = n(311907),
    d = n(732955),
    c = n(397927),
    u = n(384904),
    _ = n(391048),
    g = n(99696),
    m = n(202613),
    A = n(287809),
    h = n(927578),
    p = n(580630),
    x = n(83617),
    E = n(661191),
    T = n(533808),
    S = n(219887),
    C = n(652215),
    f = n(985018),
    I = n(228851);
class b extends s.PureComponent {
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
            onSubmit: u,
            onCancel: _,
            onDelete: g,
        } = this.props;
        return n
            ? (0, i.jsx)(T.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: o,
                  locale: a,
                  isForSubscription: l,
                  onSubmit: u,
                  onCancel: _,
                  onDelete: g,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s ? null : (0, i.jsx)(c.cGx, { className: I.__invalid_sourceDivider }),
                      (0, i.jsxs)("div", {
                          className: I.Yb,
                          children: [
                              (0, i.jsx)(S.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: this.handleEditClick,
                                        size: "sm",
                                        text: f.intl.string(f.t.bt75uw),
                                    }),
                          ],
                      }),
                  ],
              });
    }
}
let N = s.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: l, locale: a, onRedeemClick: _ } = e,
        [g, m] = s.useState(null),
        x = (0, o.bG)([A.default], () => A.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        s.useEffect(() => {
            void 0 === t
                ? m({ amount: 0, currency: null != x ? (0, r.TW)(`-${x}`) : (0, h.Rr)() })
                : u.YP(t.id).then((e) => {
                      m(e);
                  });
        }, [t, x]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(c.cGx, { className: I.__invalid_sourceDivider }),
                (0, i.jsxs)("div", {
                    className: I.Yb,
                    children: [
                        void 0 !== t
                            ? (0, i.jsx)(S.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, i.jsx)(c.Text, { variant: "text-sm/medium", children: f.intl.string(f.t["6EEgNt"]) }),
                        (0, i.jsxs)("div", {
                            className: I.zy,
                            children: [
                                (0, i.jsx)("div", {
                                    className: I.Tq,
                                    children:
                                        null == g
                                            ? (0, i.jsx)(c.y$y, { type: c.y$y.Type.SPINNING_CIRCLE })
                                            : (0, i.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = g ?? {},
                                                          n = t ?? (0, h.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          s = (0, p.$g)(e ?? 0, n);
                                                      return `${i} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, i.jsx)(d.$nd, {
                                    variant: "secondary",
                                    onClick: _,
                                    size: "sm",
                                    text: f.intl.string(f.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class v extends s.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await u.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await u.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await u.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, x.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, i.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, _.ET)();
                },
                onCloseRequest: C.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: I.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: I.z8,
                          children: [
                              (0, i.jsx)(c.Text, { variant: "text-sm/normal", children: f.intl.string(f.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: I.Sv, children: f.intl.string(f.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(d.$nd, { onClick: this.handleAddPaymentMethod, text: f.intl.string(f.t.CpOiEO) }),
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
                showGiftCards: u,
            } = this.props,
            _ = a()
                .values(s)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : E.default.compare(e.id, t.id))),
            A = _.filter((e) => !(e instanceof m.LQ)),
            h = _.filter((e) => e instanceof m.LQ),
            p = this.state.editingPayment,
            x = A.findIndex((e) => e.id === p),
            T = A.map((e, t) =>
                (0, i.jsx)(
                    b,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === d,
                        hideDivider: 0 === t || x === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: o,
                        removing: r,
                        isEditing: p === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                h.length > 0
                    ? h.map((e, t) =>
                          (0, i.jsx)(
                              N,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === A.length || x === A.length - 1,
                                  isForSubscription: e.id === d,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, g.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, i.jsx)(N, {
                          hideDivider: 0 === A.length || x === A.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, g.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, i.jsx)(c.XAi, { size: "sm", className: I.hz }),
                                          " ",
                                          f.intl.string(f.t.W26xGQ),
                                      ],
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: f.intl.string(f.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    T,
                    u && e,
                    x !== A.length - 1 || (u && h.length > 0) ? (0, i.jsx)(c.cGx, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
let j = v;

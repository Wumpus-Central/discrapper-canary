n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(465323),
    o = n(311907),
    d = n(732955),
    c = n(397927),
    u = n(391048),
    m = n(323082),
    g = n(99696),
    _ = n(202613),
    x = n(287809),
    A = n(927578),
    h = n(580630),
    p = n(83617),
    T = n(661191),
    f = n(533808),
    S = n(219887),
    b = n(652215),
    E = n(985018),
    C = n(538378);
class N extends s.PureComponent {
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
            onCancel: m,
            onDelete: g,
        } = this.props;
        return n
            ? (0, i.jsx)(f.A, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: o,
                  locale: a,
                  isForSubscription: l,
                  onSubmit: u,
                  onCancel: m,
                  onDelete: g,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      s ? null : (0, i.jsx)(c.cGx, { className: C.__invalid_sourceDivider }),
                      (0, i.jsxs)("div", {
                          className: C.Yb,
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
                              (0, i.jsx)(d.$nd, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: E.intl.string(E.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let v = s.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: l, locale: a, onRedeemClick: u } = e,
        [g, _] = s.useState(null),
        p = (0, o.bG)([x.default], () => x.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        s.useEffect(() => {
            void 0 === t
                ? _({ amount: 0, currency: null != p ? (0, r.TW)(`-${p}`) : (0, A.Rr)() })
                : m.YP(t.id).then((e) => {
                      _(e);
                  });
        }, [t, p]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                n ? null : (0, i.jsx)(c.cGx, { className: C.__invalid_sourceDivider }),
                (0, i.jsxs)("div", {
                    className: C.Yb,
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
                            : (0, i.jsx)(c.Text, { variant: "text-sm/medium", children: E.intl.string(E.t["6EEgNt"]) }),
                        (0, i.jsxs)("div", {
                            className: C.zy,
                            children: [
                                (0, i.jsx)("div", {
                                    className: C.Tq,
                                    children:
                                        null == g
                                            ? (0, i.jsx)(c.y$y, { type: c.y$y.Type.SPINNING_CIRCLE })
                                            : (0, i.jsx)(c.Text, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = g ?? {},
                                                          n = t ?? (0, A.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          s = (0, h.$g)(e ?? 0, n);
                                                      return `${i} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, i.jsx)(d.$nd, {
                                    variant: "secondary",
                                    onClick: u,
                                    size: "sm",
                                    text: E.intl.string(E.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class I extends s.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await m.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await m.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await m.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, p.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, i.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, u.ET)();
                },
                onCloseRequest: b.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, i.jsxs)("div", {
            className: C.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, i.jsxs)("div", {
                          className: C.z8,
                          children: [
                              (0, i.jsx)(c.Text, { variant: "text-sm/normal", children: E.intl.string(E.t.aRHpAB) }),
                              (0, i.jsx)("div", { className: C.Sv, children: E.intl.string(E.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, i.jsx)(d.$nd, { onClick: this.handleAddPaymentMethod, text: E.intl.string(E.t.CpOiEO) }),
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
            m = a()
                .values(s)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : T.default.compare(e.id, t.id))),
            x = m.filter((e) => !(e instanceof _.LQ)),
            A = m.filter((e) => e instanceof _.LQ),
            h = this.state.editingPayment,
            p = x.findIndex((e) => e.id === h),
            f = x.map((e, t) =>
                (0, i.jsx)(
                    N,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === d,
                        hideDivider: 0 === t || p === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: o,
                        removing: r,
                        isEditing: h === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                A.length > 0
                    ? A.map((e, t) =>
                          (0, i.jsx)(
                              v,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === x.length || p === x.length - 1,
                                  isForSubscription: e.id === d,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, g.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, i.jsx)(v, {
                          hideDivider: 0 === x.length || p === x.length - 1,
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
                                          (0, i.jsx)(c.XAi, { size: "sm", className: C.hz }),
                                          " ",
                                          E.intl.string(E.t.W26xGQ),
                                      ],
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: E.intl.string(E.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    f,
                    u && e,
                    p !== x.length - 1 || (u && A.length > 0) ? (0, i.jsx)(c.cGx, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
let j = I;

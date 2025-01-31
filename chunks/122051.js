t.d(n, { Z: () => y }), t(47120);
var i = t(200651),
    l = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(442837),
    o = t(481060),
    c = t(11265),
    d = t(863249),
    u = t(944163),
    x = t(246364),
    m = t(983736),
    h = t(571728),
    f = t(755340),
    v = t(449226),
    g = t(388032),
    j = t(232203),
    C = t(713960);
function p(e) {
    let { guild: n, isExpanded: s, emptyFormFields: a, hasTermsField: r } = e,
        c = (0, m.Dc)(n),
        [u, x] = l.useState(c),
        h = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        f = async (e) => {
            try {
                x(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
                x(u);
            }
        },
        p = (e) => {
            e && a
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: n } = await Promise.resolve().then(t.bind(t, 481060));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              header: g.intl.string(g.t.eSlxe3),
                              cancelText: g.intl.string(g.t.BvmRe3),
                              confirmText: g.intl.string(g.t.PYcfmp),
                              onConfirm: () => f(e),
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: g.intl.string(g.t.uknrnp)
                              })
                          });
                  })
                : f(e);
        },
        N = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e('99916'), t.e('80026'), t.e('21357')]).then(t.bind(t, 645264));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: n.id,
                        isPreview: !0
                    });
            });
        };
    return (0, i.jsxs)('div', {
        className: j.itemWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: j.itemContent,
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.NEXim5)
                    }),
                    (s || (a && !u)) &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: g.intl.string(g.t['7W5uVl'])
                        }),
                    !s &&
                        (0, i.jsx)('div', {
                            className: C.pillRow,
                            children:
                                r &&
                                (0, i.jsxs)(o.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: j.valuePill,
                                    children: [
                                        (0, i.jsx)(o.snC, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        g.intl.string(g.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: C.previewAndEnable,
                children:
                    s || u || !a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.P3F, {
                                      onMouseDown: h,
                                      onMouseUp: h,
                                      onClick: (e) => {
                                          h(e), N();
                                      },
                                      children: (0, i.jsx)(o.ua7, {
                                          tooltipContentClassName: C.__invalid_tooltip,
                                          text: g.intl.string(g.t.SKNnqq),
                                          children: (e) =>
                                              (0, i.jsx)(o.tEF, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: C.previewIcon,
                                                  ...e
                                              })
                                      })
                                  }),
                                  (0, i.jsx)(v.Z, {
                                      checked: u,
                                      onChange: () => p(!u)
                                  })
                              ]
                          })
                        : (0, i.jsx)(o.zxk, {
                              size: o.zxk.Sizes.SMALL,
                              children: g.intl.string(g.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function N(e, n) {
    await d.ZP.updateVerificationForm(e, n);
}
async function R(e, n) {
    await d.ZP.updateVerificationFormDescription(e, n);
}
function y(e) {
    var n, t, s;
    let { guild: o, isClanContext: m = !1, onFieldsSave: v, onDescriptionSave: g, verificationForm: y } = e,
        [w, E] = l.useState(m),
        T = l.useRef(!1),
        F = l.useCallback(() => {
            T.current = !0;
        }, []),
        b = null !== (n = (0, h.A)({ guildId: o.id })) && void 0 !== n ? n : 0,
        Z = (0, r.e7)([u.Z], () => (null != y ? y : u.Z.get(o.id))),
        I = null !== (t = null == Z ? void 0 : Z.formFields) && void 0 !== t ? t : [];
    l.useEffect(() => {
        d.ZP.fetchVerificationForm(o.id);
    }, [o.id]);
    let P = null != Z,
        k = !m;
    return (0, i.jsx)(c.Z, {
        renderHeader: k
            ? (0, i.jsx)(p, {
                  guild: o,
                  isExpanded: w,
                  emptyFormFields: (null == I ? void 0 : I.length) == null || (null == I ? void 0 : I.length) === 0,
                  hasTermsField: null == I ? void 0 : I.some((e) => e.field_type === x.QJ.TERMS)
              })
            : null,
        isExpanded: w,
        onExpand: () => E(!w),
        disableAnimation: m,
        disableBackground: !k,
        children: (0, i.jsx)('div', {
            className: a()(j.itemBodyContainer, {
                [j.noPadding]: !k,
                [C.rulesScreeningItemsNoBorder]: !k
            }),
            children:
                P &&
                (0, i.jsx)(f.Z, {
                    guild: o,
                    submittedGuildJoinRequestsCount: b,
                    formFields: I,
                    onFormFieldUpdate: F,
                    hideVerificationLevelField: !0,
                    isClanContext: m,
                    onFieldsSave: null != v ? v : N,
                    onDescriptionSave: null != g ? g : R,
                    formDescription: null !== (s = null == Z ? void 0 : Z.description) && void 0 !== s ? s : ''
                })
        })
    });
}

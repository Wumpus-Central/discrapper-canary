n.d(t, { Z: () => N }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(442837),
    a = n(481060),
    l = n(11265),
    u = n(863249),
    d = n(944163),
    f = n(246364),
    p = n(983736),
    b = n(571728),
    j = n(755340),
    y = n(449226),
    m = n(388032),
    g = n(296205),
    O = n(874327);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { guild: t, isExpanded: o, emptyFormFields: c, hasTermsField: s } = e,
        l = (0, p.Dc)(t),
        [d, f] = i.useState(l),
        b = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        j = async (e) => {
            try {
                f(e), await u.ZP.enableVerificationForm(t.id, e);
            } catch (e) {
                f(d);
            }
        },
        x = (e) => {
            e && c
                ? (0, a.ZDy)(async () => {
                      let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                      return (n) =>
                          (0, r.jsx)(
                              t,
                              v(h({}, n), {
                                  header: m.NW.string(m.t.eSlxe3),
                                  cancelText: m.NW.string(m.t.BvmRe3),
                                  confirmText: m.NW.string(m.t.PYcfmp),
                                  onConfirm: () => j(e),
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: m.NW.string(m.t.uknrnp)
                                  })
                              })
                          );
                  })
                : j(e);
        },
        P = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('99916'), n.e('80026'), n.e('92531'), n.e('67360')]).then(n.bind(n, 645264));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        v(h({}, n), {
                            guildId: t.id,
                            isPreview: !0
                        })
                    );
            });
        };
    return (0, r.jsxs)('div', {
        className: g.itemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: g.itemContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: m.NW.string(m.t.NEXim5)
                    }),
                    (o || (c && !d)) &&
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: m.NW.string(m.t['7W5uVl'])
                        }),
                    !o &&
                        (0, r.jsx)('div', {
                            className: O.pillRow,
                            children:
                                s &&
                                (0, r.jsxs)(a.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: g.valuePill,
                                    children: [
                                        (0, r.jsx)(a.snC, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        m.NW.string(m.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: O.previewAndEnable,
                children:
                    o || d || !c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.P3F, {
                                      onMouseDown: b,
                                      onMouseUp: b,
                                      onClick: (e) => {
                                          b(e), P();
                                      },
                                      children: (0, r.jsx)(a.ua7, {
                                          tooltipContentClassName: O.__invalid_tooltip,
                                          text: m.NW.string(m.t.SKNnqq),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.tEF,
                                                  h(
                                                      {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: O.previewIcon
                                                      },
                                                      e
                                                  )
                                              )
                                      })
                                  }),
                                  (0, r.jsx)(y.Z, {
                                      checked: d,
                                      onChange: () => x(!d)
                                  })
                              ]
                          })
                        : (0, r.jsx)(a.zxk, {
                              size: a.zxk.Sizes.SMALL,
                              children: m.NW.string(m.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function P(e, t) {
    await u.ZP.updateVerificationForm(e, t);
}
async function w(e, t) {
    await u.ZP.updateVerificationFormDescription(e, t);
}
function N(e) {
    var t, n, o;
    let { guild: a, isClanContext: p = !1, onFieldsSave: y, onDescriptionSave: m, verificationForm: h } = e,
        [v, N] = i.useState(p),
        C = i.useRef(!1),
        E = i.useCallback(() => {
            C.current = !0;
        }, []),
        S = null != (t = (0, b.A)({ guildId: a.id })) ? t : 0,
        D = (0, s.e7)([d.Z], () => (null != h ? h : d.Z.get(a.id))),
        R = null != (n = null == D ? void 0 : D.formFields) ? n : [];
    i.useEffect(() => {
        u.ZP.fetchVerificationForm(a.id);
    }, [a.id]);
    let k = null != D,
        T = !p;
    return (0, r.jsx)(l.Z, {
        renderHeader: T
            ? (0, r.jsx)(x, {
                  guild: a,
                  isExpanded: v,
                  emptyFormFields: (null == R ? void 0 : R.length) == null || (null == R ? void 0 : R.length) === 0,
                  hasTermsField: null == R ? void 0 : R.some((e) => e.field_type === f.QJ.TERMS)
              })
            : null,
        isExpanded: v,
        onExpand: () => N(!v),
        disableAnimation: p,
        disableBackground: !T,
        children: (0, r.jsx)('div', {
            className: c()(g.itemBodyContainer, {
                [g.noPadding]: !T,
                [O.rulesScreeningItemsNoBorder]: !T
            }),
            children:
                k &&
                (0, r.jsx)(j.Z, {
                    guild: a,
                    submittedGuildJoinRequestsCount: S,
                    formFields: R,
                    onFormFieldUpdate: E,
                    hideVerificationLevelField: !0,
                    isClanContext: p,
                    onFieldsSave: null != y ? y : P,
                    onDescriptionSave: null != m ? m : w,
                    formDescription: null != (o = null == D ? void 0 : D.description) ? o : ''
                })
        })
    });
}

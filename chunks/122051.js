n.d(t, { Z: () => C }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(11265),
    d = n(863249),
    u = n(944163),
    m = n(246364),
    g = n(983736),
    p = n(571728),
    f = n(755340),
    h = n(449226),
    b = n(388032),
    x = n(296205),
    j = n(874327);
function N(e) {
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
function _(e) {
    let { guild: t, isExpanded: s, emptyFormFields: a, hasTermsField: l } = e,
        c = (0, g.Dc)(t),
        [u, m] = i.useState(c),
        p = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        f = async (e) => {
            try {
                m(e), await d.ZP.enableVerificationForm(t.id, e);
            } catch (e) {
                m(u);
            }
        },
        _ = (e) => {
            e && a
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 481060));
                      return (n) =>
                          (0, r.jsx)(
                              t,
                              v(N({}, n), {
                                  header: b.NW.string(b.t.eSlxe3),
                                  cancelText: b.NW.string(b.t.BvmRe3),
                                  confirmText: b.NW.string(b.t.PYcfmp),
                                  onConfirm: () => f(e),
                                  children: (0, r.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: b.NW.string(b.t.uknrnp)
                                  })
                              })
                          );
                  })
                : f(e);
        },
        y = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('99916'), n.e('52657'), n.e('75451')]).then(n.bind(n, 645264));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        v(N({}, n), {
                            guildId: t.id,
                            isPreview: !0
                        })
                    );
            });
        };
    return (0, r.jsxs)('div', {
        className: x.itemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: x.itemContent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: b.NW.string(b.t.NEXim5)
                    }),
                    (s || (a && !u)) &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: b.NW.string(b.t['7W5uVl'])
                        }),
                    !s &&
                        (0, r.jsx)('div', {
                            className: j.pillRow,
                            children:
                                l &&
                                (0, r.jsxs)(o.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: x.valuePill,
                                    children: [
                                        (0, r.jsx)(o.snC, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        b.NW.string(b.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: j.previewAndEnable,
                children:
                    s || u || !a
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.P3F, {
                                      onMouseDown: p,
                                      onMouseUp: p,
                                      onClick: (e) => {
                                          p(e), y();
                                      },
                                      children: (0, r.jsx)(o.ua7, {
                                          tooltipContentClassName: j.__invalid_tooltip,
                                          text: b.NW.string(b.t.SKNnqq),
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  o.tEF,
                                                  N(
                                                      {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: j.previewIcon
                                                      },
                                                      e
                                                  )
                                              )
                                      })
                                  }),
                                  (0, r.jsx)(h.Z, {
                                      checked: u,
                                      onChange: () => _(!u)
                                  })
                              ]
                          })
                        : (0, r.jsx)(o.zxk, {
                              size: o.zxk.Sizes.SMALL,
                              children: b.NW.string(b.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function y(e, t) {
    await d.ZP.updateVerificationForm(e, t);
}
async function O(e, t) {
    await d.ZP.updateVerificationFormDescription(e, t);
}
function C(e) {
    var t, n, s;
    let { guild: o, isClanContext: g = !1, onFieldsSave: h, onDescriptionSave: b, verificationForm: N } = e,
        [v, C] = i.useState(g),
        I = i.useRef(!1),
        E = i.useCallback(() => {
            I.current = !0;
        }, []),
        S = null != (t = (0, p.A)({ guildId: o.id })) ? t : 0,
        T = (0, l.e7)([u.Z], () => (null != N ? N : u.Z.get(o.id))),
        P = null != (n = null == T ? void 0 : T.formFields) ? n : [];
    i.useEffect(() => {
        d.ZP.fetchVerificationForm(o.id);
    }, [o.id]);
    let w = null != T,
        R = !g;
    return (0, r.jsx)(c.Z, {
        renderHeader: R
            ? (0, r.jsx)(_, {
                  guild: o,
                  isExpanded: v,
                  emptyFormFields: (null == P ? void 0 : P.length) == null || (null == P ? void 0 : P.length) === 0,
                  hasTermsField: null == P ? void 0 : P.some((e) => e.field_type === m.QJ.TERMS)
              })
            : null,
        isExpanded: v,
        onExpand: () => C(!v),
        disableAnimation: g,
        disableBackground: !R,
        children: (0, r.jsx)('div', {
            className: a()(x.itemBodyContainer, {
                [x.noPadding]: !R,
                [j.rulesScreeningItemsNoBorder]: !R
            }),
            children:
                w &&
                (0, r.jsx)(f.Z, {
                    guild: o,
                    submittedGuildJoinRequestsCount: S,
                    formFields: P,
                    onFormFieldUpdate: E,
                    hideVerificationLevelField: !0,
                    isClanContext: g,
                    onFieldsSave: null != h ? h : y,
                    onDescriptionSave: null != b ? b : O,
                    formDescription: null != (s = null == T ? void 0 : T.description) ? s : ''
                })
        })
    });
}

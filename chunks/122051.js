t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    s = t.n(a),
    r = t(442837),
    o = t(481060),
    c = t(11265),
    d = t(863249),
    u = t(944163),
    m = t(246364),
    x = t(983736),
    f = t(571728),
    h = t(755340),
    g = t(449226),
    v = t(388032),
    C = t(232203),
    j = t(713960);
function p(e) {
    let { guild: n, isExpanded: a, emptyFormFields: s, hasTermsField: r } = e,
        c = (0, x.Dc)(n),
        [u, m] = l.useState(c),
        f = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        h = async (e) => {
            try {
                m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
                m(u);
            }
        },
        p = (e) => {
            e && s
                ? (0, o.openModalLazy)(async () => {
                      let { ConfirmModal: n } = await Promise.resolve().then(t.bind(t, 481060));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              header: v.intl.string(v.t.eSlxe3),
                              cancelText: v.intl.string(v.t.BvmRe3),
                              confirmText: v.intl.string(v.t.PYcfmp),
                              onConfirm: () => h(e),
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: v.intl.string(v.t.uknrnp)
                              })
                          });
                  })
                : h(e);
        },
        T = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e('99916'), t.e('80026'), t.e('14771')]).then(t.bind(t, 645264));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: n.id,
                        isPreview: !0
                    });
            });
        };
    return (0, i.jsxs)('div', {
        className: C.itemWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: C.itemContent,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: v.intl.string(v.t.NEXim5)
                    }),
                    (a || (s && !u)) &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: v.intl.string(v.t['7W5uVl'])
                        }),
                    !a &&
                        (0, i.jsx)('div', {
                            className: j.pillRow,
                            children:
                                r &&
                                (0, i.jsxs)(o.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: C.valuePill,
                                    children: [
                                        (0, i.jsx)(o.BookCheckIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        v.intl.string(v.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.previewAndEnable,
                children:
                    a || u || !s
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Clickable, {
                                      onMouseDown: f,
                                      onMouseUp: f,
                                      onClick: (e) => {
                                          f(e), T();
                                      },
                                      children: (0, i.jsx)(o.Tooltip, {
                                          tooltipContentClassName: j.__invalid_tooltip,
                                          text: v.intl.string(v.t.SKNnqq),
                                          children: (e) =>
                                              (0, i.jsx)(o.EyeIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: j.previewIcon,
                                                  ...e
                                              })
                                      })
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      checked: u,
                                      onChange: () => p(!u)
                                  })
                              ]
                          })
                        : (0, i.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              children: v.intl.string(v.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function T(e, n) {
    await d.ZP.updateVerificationForm(e, n);
}
async function N(e, n) {
    await d.ZP.updateVerificationFormDescription(e, n);
}
function I(e) {
    var n, t, a;
    let { guild: o, isClanContext: x = !1, onFieldsSave: g, onDescriptionSave: v, verificationForm: I } = e,
        [y, R] = l.useState(x),
        F = l.useRef(!1),
        E = l.useCallback(() => {
            F.current = !0;
        }, []),
        b = null !== (n = (0, f.A)({ guildId: o.id })) && void 0 !== n ? n : 0,
        w = (0, r.e7)([u.Z], () => (null != I ? I : u.Z.get(o.id))),
        M = null !== (t = null == w ? void 0 : w.formFields) && void 0 !== t ? t : [];
    l.useEffect(() => {
        d.ZP.fetchVerificationForm(o.id);
    }, [o.id]);
    let k = null != w,
        L = !x;
    return (0, i.jsx)(c.Z, {
        renderHeader: L
            ? (0, i.jsx)(p, {
                  guild: o,
                  isExpanded: y,
                  emptyFormFields: (null == M ? void 0 : M.length) == null || (null == M ? void 0 : M.length) === 0,
                  hasTermsField: null == M ? void 0 : M.some((e) => e.field_type === m.QJ.TERMS)
              })
            : null,
        isExpanded: y,
        onExpand: () => R(!y),
        disableAnimation: x,
        disableBackground: !L,
        children: (0, i.jsx)('div', {
            className: s()(C.itemBodyContainer, {
                [C.noPadding]: !L,
                [j.rulesScreeningItemsNoBorder]: !L
            }),
            children:
                k &&
                (0, i.jsx)(h.Z, {
                    guild: o,
                    submittedGuildJoinRequestsCount: b,
                    formFields: M,
                    onFormFieldUpdate: E,
                    hideVerificationLevelField: !0,
                    isClanContext: x,
                    onFieldsSave: null != g ? g : T,
                    onDescriptionSave: null != v ? v : N,
                    formDescription: null !== (a = null == w ? void 0 : w.description) && void 0 !== a ? a : ''
                })
        })
    });
}

n.d(t, { default: () => S }), n(47120), n(266796), n(230036);
var s = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    r = n(108131),
    c = n.n(r),
    o = n(642128),
    d = n(481060),
    m = n(442837),
    x = n(607070),
    u = n(313201),
    h = n(594174),
    p = n(626135),
    j = n(547280),
    v = n(678513),
    N = n(445507),
    g = n(981631),
    k = n(388032),
    y = n(170141);
function C(e) {
    let { selectedOption: t, targetKey: n, dismissibleContent: a, data: i, handleGoToNextFormGroup: r } = e,
        [c, o] = l.useState(''),
        [m, x] = l.useState(null),
        [u, h] = l.useState(null),
        [p, v] = l.useState(!1),
        [g, C] = l.useState(!1),
        b = l.useCallback(
            (e) => {
                let { value: t } = e;
                null != i.current && ((i.current.playstyle = t), h(t), r(6));
            },
            [i, h, r]
        ),
        f = l.useCallback(() => {
            if (null != i.current) {
                let e = !p;
                v(e), (i.current.acknowledgeCap = e), e && g && r(8);
            }
        }, [g, p, v, i, r]),
        W = l.useCallback(() => {
            if (null != i.current) {
                let e = !g;
                C(e), (i.current.acknowledgeScreen = e), e && p && r(8);
            }
        }, [p, g, C, i, r]),
        S = l.useCallback(
            (e) => {
                null != i.current && ((i.current.email = e), o(e), x(null));
            },
            [i, x]
        ),
        w = l.useCallback(() => {
            if (null != t && null != i.current) {
                if (c.length < 3 || -1 === c.indexOf('@')) return void x(k.NW.string(k.t['3dVrwc']));
                (0, j.o)({
                    targetKey: n,
                    dismissibleContent: a,
                    data: i.current,
                    completed: !0
                });
            }
        }, [n, a, c, t, x, i]);
    return null == t
        ? null
        : 'email' === t.type
          ? (0, s.jsxs)('div', {
                className: y.emailContainer,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: k.NW.string(k.t.NVeQW1)
                    }),
                    (0, s.jsxs)('div', {
                        className: y.emailForm,
                        children: [
                            (0, s.jsx)(d.oil, {
                                className: y.emailInput,
                                value: c,
                                onChange: S,
                                placeholder: k.NW.string(k.t.e6OPgY),
                                error: m
                            }),
                            (0, s.jsx)(d.zxk, {
                                onClick: w,
                                children: (0, s.jsx)(d.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: k.NW.string(k.t.mhisXl)
                                })
                            })
                        ]
                    })
                ]
            })
          : 'clan' === t.type
            ? (0, s.jsxs)('div', {
                  className: y.form,
                  children: [
                      (0, s.jsxs)('div', {
                          className: y.formGroup,
                          children: [
                              (0, s.jsxs)('div', {
                                  children: [
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-lg/medium',
                                          color: 'header-primary',
                                          children: k.NW.string(k.t.jhUGT0)
                                      }),
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: k.NW.string(k.t.DuYera)
                                      })
                                  ]
                              }),
                              (0, s.jsx)('div', {
                                  className: y.options,
                                  children: (0, N.z5)().map((e) =>
                                      (0, s.jsx)(
                                          T,
                                          {
                                              option: e,
                                              isSelected: e.value === u,
                                              onOptionSelected: b
                                          },
                                          e.value
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: y.formGroup,
                          children: [
                              (0, s.jsxs)('div', {
                                  children: [
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-lg/medium',
                                          color: 'header-primary',
                                          children: k.NW.string(k.t.RpkTY2)
                                      }),
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: k.NW.string(k.t.lsZPgI)
                                      })
                                  ]
                              }),
                              (0, s.jsxs)('div', {
                                  className: y.acknowledgements,
                                  children: [
                                      (0, s.jsxs)(d.P3F, {
                                          className: y.acknowledgement,
                                          onClick: f,
                                          children: [
                                              (0, s.jsx)(d.Text, {
                                                  variant: 'text-md/normal',
                                                  color: 'interactive-active',
                                                  children: k.NW.string(k.t.suxlQk)
                                              }),
                                              (0, s.jsx)('div', {
                                                  className: y.checkboxWrapper,
                                                  children: (0, s.jsx)(d.XZJ, {
                                                      displayOnly: !0,
                                                      type: d.XZJ.Types.INVERTED,
                                                      value: p
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)(d.P3F, {
                                          className: y.acknowledgement,
                                          onClick: W,
                                          children: [
                                              (0, s.jsx)(d.Text, {
                                                  variant: 'text-md/normal',
                                                  color: 'interactive-active',
                                                  children: k.NW.string(k.t.TjPvzM)
                                              }),
                                              (0, s.jsx)('div', {
                                                  className: y.checkboxWrapper,
                                                  children: (0, s.jsx)(d.XZJ, {
                                                      displayOnly: !0,
                                                      type: d.XZJ.Types.INVERTED,
                                                      value: g
                                                  })
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: y.formGroup,
                          children: [
                              (0, s.jsx)(d.Text, {
                                  variant: 'text-lg/medium',
                                  color: 'header-primary',
                                  children: k.NW.string(k.t.NVeQW1)
                              }),
                              (0, s.jsxs)('div', {
                                  className: y.emailForm,
                                  children: [
                                      (0, s.jsx)(d.oil, {
                                          className: y.emailInput,
                                          value: c,
                                          onChange: S,
                                          placeholder: k.NW.string(k.t.e6OPgY),
                                          error: m
                                      }),
                                      (0, s.jsx)(d.zxk, {
                                          onClick: w,
                                          children: (0, s.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'interactive-active',
                                              children: k.NW.string(k.t.mhisXl)
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
            : (0, s.jsx)('div', {});
}
function b(e) {
    let { iconName: t } = e,
        n = null;
    switch (t) {
        case 'compass':
            n = (0, s.jsx)(d.Jmo, { className: y.icon });
            break;
        case 'gamepad':
            n = (0, s.jsx)(d.xoD, {
                size: 'xs',
                color: 'currentColor',
                className: y.icon
            });
            break;
        case 'controller':
            n = (0, s.jsx)(d.iWm, { className: y.icon });
            break;
        case 'microphone':
            n = (0, s.jsx)(d.S6n, { className: y.icon });
            break;
        default:
            n = null;
    }
    return (0, s.jsx)('div', {
        className: y.iconContainer,
        children: n
    });
}
function T(e) {
    let { option: t, icon: n, isSelected: a, onOptionSelected: r } = e,
        [c, o] = l.useState(!1),
        m = (0, d.dQu)(d.TVs.colors.BACKGROUND_TERTIARY).hsl({ opacity: c && !a ? 0.9 : 0.8 }),
        x = l.useCallback(() => {
            r(t);
        }, [r, t]);
    return (0, s.jsxs)(d.P3F, {
        className: i()(y.option, { [y.selectedOption]: a }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        style: { backgroundColor: m },
        onClick: x,
        children: [
            n,
            (0, s.jsxs)('div', {
                className: y.optionContent,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: t.title
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: t.description
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { option: t, selectedOption: n, setSelectedOption: l } = e,
        a = t.key === (null == n ? void 0 : n.key);
    return (0, s.jsx)(T, {
        option: t,
        icon: (0, s.jsx)(b, { iconName: t.icon }),
        isSelected: a,
        onOptionSelected: l
    });
}
function W(e) {
    let { target: t, selectedOption: n, handleSetSelectedOption: a, data: i } = e,
        r = (0, m.e7)([x.Z], () => x.Z.useReducedMotion),
        [{ state: u }, p] = (0, d.q_F)(() => ({ state: 0 }), 'respect-motion-settings', []),
        j = (0, m.e7)([h.default], () => h.default.getCurrentUser()),
        v = u.to({
            range: [0, 1],
            output: [1, 0]
        }),
        N = u.to({
            range: [0, 1],
            output: [0, 1]
        }),
        g = u.to({
            range: [0, 10],
            output: [0, -700]
        }),
        b = l.useCallback(
            (e) => {
                a(e),
                    p({
                        state: 'email' === e.type ? 2 : 3,
                        immediate: r
                    });
            },
            [a, p, r]
        ),
        T = l.useCallback(
            (e) => {
                p({
                    state: e,
                    immediate: r
                });
            },
            [p, r]
        );
    return null == j
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)(o.animated.div, {
                      className: y.header,
                      style: { opacity: v },
                      children: [
                          (0, s.jsxs)('div', {
                              className: y.eyebrow,
                              children: [
                                  (0, s.jsx)(d._XJ, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, s.jsx)(d.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'none',
                                      children: k.NW.string(k.t.hhKpxs)
                                  })
                              ]
                          }),
                          (0, s.jsx)(d.X6q, {
                              variant: 'heading-xxl/medium',
                              color: 'header-primary',
                              children: t.title
                          }),
                          (0, s.jsx)(d.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: t.subtitle
                          })
                      ]
                  }),
                  (0, s.jsxs)(o.animated.div, {
                      className: y.question,
                      style: {
                          transform: g.to((e) => 'translateY('.concat(e, 'px)')),
                          marginTop: t.questionMargin
                      },
                      children: [
                          (0, s.jsx)(d.Text, {
                              variant: 'text-lg/medium',
                              color: 'header-primary',
                              children: t.question
                          }),
                          (0, s.jsx)('div', {
                              className: y.options,
                              children: (function (e, t) {
                                  let n = e.slice();
                                  return n.sort((e, n) => c().v3(''.concat(e.key).concat(t)) - c().v3(''.concat(n.key).concat(t))), n;
                              })(t.options, j.id).map((e) =>
                                  (0, s.jsx)(
                                      f,
                                      {
                                          option: e,
                                          selectedOption: n,
                                          setSelectedOption: b
                                      },
                                      e.key
                                  )
                              )
                          })
                      ]
                  }),
                  (0, s.jsx)(o.animated.div, {
                      style: {
                          transform: g.to((e) => 'translateY('.concat(e, 'px)')),
                          opacity: N
                      },
                      children: (0, s.jsx)(C, {
                          selectedOption: n,
                          targetKey: t.key,
                          dismissibleContent: t.dismissibleContent,
                          data: i,
                          handleGoToNextFormGroup: T
                      })
                  })
              ]
          });
}
function S(e) {
    let { target: t, guildId: n, transitionState: a, onClose: r } = e,
        c = (0, u.Dt)(),
        o = l.useRef({ guildId: n }),
        [x, h] = l.useState(null),
        N = +!!(0, m.e7)([v.Z], () => v.Z.hasCompletedTarget(t.key));
    l.useEffect(() => {
        p.default.track(g.rMx.SIGNUP_VIEWED, {
            target_key: t.key,
            guild_id: n
        });
        let e = o.current;
        return () => {
            (0, j.o)({
                targetKey: t.key,
                dismissibleContent: t.dismissibleContent,
                data: e,
                completed: !1
            });
        };
    }, [t.key, t.dismissibleContent, o, n]);
    let C = l.useCallback(
            (e) => {
                null != o.current && ((o.current.selectedOptionKey = e.key), h(e));
            },
            [h, o]
        ),
        b = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        T = null;
    switch (N) {
        case 0:
            T = (0, s.jsx)(W, {
                target: t,
                selectedOption: x,
                handleSetSelectedOption: C,
                data: o
            });
            break;
        case 1:
            T = (0, s.jsxs)('div', {
                className: y.completedContainer,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: k.NW.string(k.t.n2NmuL)
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: k.NW.string(k.t.SNYnLS)
                    }),
                    (0, s.jsx)('div', {
                        children: (0, s.jsx)(d.zxk, {
                            onClick: r,
                            children: (0, s.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: k.NW.string(k.t.cpT0Cg)
                            })
                        })
                    })
                ]
            });
    }
    return (0, s.jsx)(d.f6W, {
        theme: g.BRd.DARK,
        children: (e) =>
            (0, s.jsxs)(d.Y0X, {
                transitionState: a,
                'aria-labelledby': c,
                size: d.CgR.LARGE,
                className: i()(y.modal, e),
                children: [
                    (0, s.jsxs)(d.Ttm, {
                        className: y.content,
                        children: [
                            (0, s.jsx)('div', {
                                style: {
                                    background: b,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: -1
                                }
                            }),
                            (0, s.jsx)('div', {
                                className: y.contentInner,
                                children: (0, s.jsx)(d.qBt, {
                                    animationMotionType: 'lift',
                                    fillParent: !0,
                                    step: N,
                                    steps: [0, 1],
                                    children: T
                                })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: y.closeButtonContainer,
                        children: (0, s.jsx)(d.olH, { onClick: r })
                    })
                ]
            })
    });
}

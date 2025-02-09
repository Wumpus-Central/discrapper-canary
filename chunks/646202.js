n.d(t, { default: () => w }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
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
    g = n(445507),
    k = n(981631),
    y = n(388032),
    N = n(40055);
function C(e) {
    let { selectedOption: t, targetKey: n, dismissibleContent: s, data: a, handleGoToNextFormGroup: r } = e,
        [c, o] = i.useState(''),
        [m, x] = i.useState(null),
        [u, h] = i.useState(null),
        [p, v] = i.useState(!1),
        [k, C] = i.useState(!1),
        b = i.useCallback(
            (e) => {
                let { value: t } = e;
                null != a.current && ((a.current.playstyle = t), h(t), r(6));
            },
            [a, h, r]
        ),
        f = i.useCallback(() => {
            if (null != a.current) {
                let e = !p;
                v(e), (a.current.acknowledgeCap = e), e && k && r(8);
            }
        }, [k, p, v, a, r]),
        S = i.useCallback(() => {
            if (null != a.current) {
                let e = !k;
                C(e), (a.current.acknowledgeScreen = e), e && p && r(8);
            }
        }, [p, k, C, a, r]),
        w = i.useCallback(
            (e) => {
                null != a.current && ((a.current.email = e), o(e), x(null));
            },
            [a, x]
        ),
        O = i.useCallback(() => {
            if (null != t && null != a.current) {
                if (c.length < 3 || -1 === c.indexOf('@')) {
                    x(y.intl.string(y.t['3dVrwc']));
                    return;
                }
                (0, j.o)({
                    targetKey: n,
                    dismissibleContent: s,
                    data: a.current,
                    completed: !0
                });
            }
        }, [n, s, c, t, x, a]);
    return null == t
        ? null
        : 'email' === t.type
          ? (0, l.jsxs)('div', {
                className: N.emailContainer,
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: y.intl.string(y.t.NVeQW1)
                    }),
                    (0, l.jsxs)('div', {
                        className: N.emailForm,
                        children: [
                            (0, l.jsx)(d.oil, {
                                className: N.emailInput,
                                value: c,
                                onChange: w,
                                placeholder: y.intl.string(y.t.e6OPgY),
                                error: m
                            }),
                            (0, l.jsx)(d.zxk, {
                                onClick: O,
                                children: (0, l.jsx)(d.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: y.intl.string(y.t.mhisXl)
                                })
                            })
                        ]
                    })
                ]
            })
          : 'clan' === t.type
            ? (0, l.jsxs)('div', {
                  className: N.form,
                  children: [
                      (0, l.jsxs)('div', {
                          className: N.formGroup,
                          children: [
                              (0, l.jsxs)('div', {
                                  children: [
                                      (0, l.jsx)(d.Text, {
                                          variant: 'text-lg/medium',
                                          color: 'header-primary',
                                          children: y.intl.string(y.t.jhUGT0)
                                      }),
                                      (0, l.jsx)(d.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: y.intl.string(y.t.DuYera)
                                      })
                                  ]
                              }),
                              (0, l.jsx)('div', {
                                  className: N.options,
                                  children: (0, g.z5)().map((e) =>
                                      (0, l.jsx)(
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
                      (0, l.jsxs)('div', {
                          className: N.formGroup,
                          children: [
                              (0, l.jsxs)('div', {
                                  children: [
                                      (0, l.jsx)(d.Text, {
                                          variant: 'text-lg/medium',
                                          color: 'header-primary',
                                          children: y.intl.string(y.t.RpkTY2)
                                      }),
                                      (0, l.jsx)(d.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: y.intl.string(y.t.lsZPgI)
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: N.acknowledgements,
                                  children: [
                                      (0, l.jsxs)(d.P3F, {
                                          className: N.acknowledgement,
                                          onClick: f,
                                          children: [
                                              (0, l.jsx)(d.Text, {
                                                  variant: 'text-md/normal',
                                                  color: 'interactive-active',
                                                  children: y.intl.string(y.t.suxlQk)
                                              }),
                                              (0, l.jsx)('div', {
                                                  className: N.checkboxWrapper,
                                                  children: (0, l.jsx)(d.XZJ, {
                                                      displayOnly: !0,
                                                      type: d.XZJ.Types.INVERTED,
                                                      value: p
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, l.jsxs)(d.P3F, {
                                          className: N.acknowledgement,
                                          onClick: S,
                                          children: [
                                              (0, l.jsx)(d.Text, {
                                                  variant: 'text-md/normal',
                                                  color: 'interactive-active',
                                                  children: y.intl.string(y.t.TjPvzM)
                                              }),
                                              (0, l.jsx)('div', {
                                                  className: N.checkboxWrapper,
                                                  children: (0, l.jsx)(d.XZJ, {
                                                      displayOnly: !0,
                                                      type: d.XZJ.Types.INVERTED,
                                                      value: k
                                                  })
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, l.jsxs)('div', {
                          className: N.formGroup,
                          children: [
                              (0, l.jsx)(d.Text, {
                                  variant: 'text-lg/medium',
                                  color: 'header-primary',
                                  children: y.intl.string(y.t.NVeQW1)
                              }),
                              (0, l.jsxs)('div', {
                                  className: N.emailForm,
                                  children: [
                                      (0, l.jsx)(d.oil, {
                                          className: N.emailInput,
                                          value: c,
                                          onChange: w,
                                          placeholder: y.intl.string(y.t.e6OPgY),
                                          error: m
                                      }),
                                      (0, l.jsx)(d.zxk, {
                                          onClick: O,
                                          children: (0, l.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'interactive-active',
                                              children: y.intl.string(y.t.mhisXl)
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
            : (0, l.jsx)('div', {});
}
function b(e) {
    let { iconName: t } = e,
        n = null;
    switch (t) {
        case 'compass':
            n = (0, l.jsx)(d.Jmo, { className: N.icon });
            break;
        case 'gamepad':
            n = (0, l.jsx)(d.xoD, {
                size: 'xs',
                color: 'currentColor',
                className: N.icon
            });
            break;
        case 'controller':
            n = (0, l.jsx)(d.iWm, { className: N.icon });
            break;
        case 'microphone':
            n = (0, l.jsx)(d.S6n, { className: N.icon });
            break;
        default:
            n = null;
    }
    return (0, l.jsx)('div', {
        className: N.iconContainer,
        children: n
    });
}
function T(e) {
    let { option: t, icon: n, isSelected: s, onOptionSelected: r } = e,
        [c, o] = i.useState(!1),
        m = (0, d.dQu)(d.TVs.colors.BACKGROUND_TERTIARY).hsl({ opacity: c && !s ? 0.9 : 0.8 }),
        x = i.useCallback(() => {
            r(t);
        }, [r, t]);
    return (0, l.jsxs)(d.P3F, {
        className: a()(N.option, { [N.selectedOption]: s }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        style: { backgroundColor: m },
        onClick: x,
        children: [
            n,
            (0, l.jsxs)('div', {
                className: N.optionContent,
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: t.title
                    }),
                    (0, l.jsx)(d.Text, {
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
    let { option: t, selectedOption: n, setSelectedOption: i } = e,
        s = t.key === (null == n ? void 0 : n.key);
    return (0, l.jsx)(T, {
        option: t,
        icon: (0, l.jsx)(b, { iconName: t.icon }),
        isSelected: s,
        onOptionSelected: i
    });
}
function S(e) {
    let { target: t, selectedOption: n, handleSetSelectedOption: s, data: a } = e,
        r = (0, m.e7)([x.Z], () => x.Z.useReducedMotion),
        [{ state: u }, p] = (0, d.q_F)(() => ({ state: 0 }), 'respect-motion-settings', []),
        j = (0, m.e7)([h.default], () => h.default.getCurrentUser()),
        v = u.to({
            range: [0, 1],
            output: [1, 0]
        }),
        g = u.to({
            range: [0, 1],
            output: [0, 1]
        }),
        k = u.to({
            range: [0, 10],
            output: [0, -700]
        }),
        b = i.useCallback(
            (e) => {
                s(e),
                    p({
                        state: 'email' === e.type ? 2 : 3,
                        immediate: r
                    });
            },
            [s, p, r]
        ),
        T = i.useCallback(
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
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)(o.animated.div, {
                      className: N.header,
                      style: { opacity: v },
                      children: [
                          (0, l.jsxs)('div', {
                              className: N.eyebrow,
                              children: [
                                  (0, l.jsx)(d._XJ, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'none',
                                      children: y.intl.string(y.t.hhKpxs)
                                  })
                              ]
                          }),
                          (0, l.jsx)(d.X6q, {
                              variant: 'heading-xxl/medium',
                              color: 'header-primary',
                              children: t.title
                          }),
                          (0, l.jsx)(d.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              children: t.subtitle
                          })
                      ]
                  }),
                  (0, l.jsxs)(o.animated.div, {
                      className: N.question,
                      style: {
                          transform: k.to((e) => 'translateY('.concat(e, 'px)')),
                          marginTop: t.questionMargin
                      },
                      children: [
                          (0, l.jsx)(d.Text, {
                              variant: 'text-lg/medium',
                              color: 'header-primary',
                              children: t.question
                          }),
                          (0, l.jsx)('div', {
                              className: N.options,
                              children: (function (e, t) {
                                  let n = e.slice();
                                  return n.sort((e, n) => c().v3(''.concat(e.key).concat(t)) - c().v3(''.concat(n.key).concat(t))), n;
                              })(t.options, j.id).map((e) =>
                                  (0, l.jsx)(
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
                  (0, l.jsx)(o.animated.div, {
                      style: {
                          transform: k.to((e) => 'translateY('.concat(e, 'px)')),
                          opacity: g
                      },
                      children: (0, l.jsx)(C, {
                          selectedOption: n,
                          targetKey: t.key,
                          dismissibleContent: t.dismissibleContent,
                          data: a,
                          handleGoToNextFormGroup: T
                      })
                  })
              ]
          });
}
function w(e) {
    let { target: t, guildId: n, transitionState: s, onClose: r } = e,
        c = (0, u.Dt)(),
        o = i.useRef({ guildId: n }),
        [x, h] = i.useState(null),
        g = (0, m.e7)([v.Z], () => v.Z.hasCompletedTarget(t.key)) ? 1 : 0;
    i.useEffect(() => {
        p.default.track(k.rMx.SIGNUP_VIEWED, {
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
    let C = i.useCallback(
            (e) => {
                null != o.current && ((o.current.selectedOptionKey = e.key), h(e));
            },
            [h, o]
        ),
        b = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        T = null;
    switch (g) {
        case 0:
            T = (0, l.jsx)(S, {
                target: t,
                selectedOption: x,
                handleSetSelectedOption: C,
                data: o
            });
            break;
        case 1:
            T = (0, l.jsxs)('div', {
                className: N.completedContainer,
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-lg/medium',
                        color: 'header-primary',
                        children: y.intl.string(y.t.n2NmuL)
                    }),
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: y.intl.string(y.t.SNYnLS)
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(d.zxk, {
                            onClick: r,
                            children: (0, l.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: y.intl.string(y.t.cpT0Cg)
                            })
                        })
                    })
                ]
            });
    }
    return (0, l.jsx)(d.f6W, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, l.jsxs)(d.Y0X, {
                transitionState: s,
                'aria-labelledby': c,
                size: d.CgR.LARGE,
                className: a()(N.modal, e),
                children: [
                    (0, l.jsxs)(d.Ttm, {
                        className: N.content,
                        children: [
                            (0, l.jsx)('div', {
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
                            (0, l.jsx)('div', {
                                className: N.contentInner,
                                children: (0, l.jsx)(d.qBt, {
                                    animationMotionType: 'lift',
                                    fillParent: !0,
                                    step: g,
                                    steps: [0, 1],
                                    children: T
                                })
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: N.closeButtonContainer,
                        children: (0, l.jsx)(d.olH, { onClick: r })
                    })
                ]
            })
    });
}

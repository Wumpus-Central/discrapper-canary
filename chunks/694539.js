n.d(t, { Z: () => C }), n(47120), n(26686), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(979554),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(921813),
    m = n(594174),
    g = n(572004),
    p = n(451593),
    h = n(477146),
    f = n(329156),
    N = n(256739),
    b = n(346537),
    x = n(830318);
function _(e) {
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
function E(e, t) {
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
let j = {
        [h.wT.THUMBNAIL]: null,
        [h.wT.STATIC]: null,
        [h.wT.REDUCED_MOTION]: null
    },
    O = 'debug',
    C = (e) => {
        let { effect: t, back: n } = e,
            { upsertConfig: s } = (0, p.E)(),
            C = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
            [S, v] = i.useState(!0),
            T = i.useRef(null),
            [I, y] = i.useState(!1),
            [A, P] = i.useState(!1),
            [R, D] = i.useState(t.name),
            [Z, w] = i.useState([]),
            [k, W] = i.useState(j),
            L = i.useMemo(
                () => ({
                    type: l.Z.PROFILE_EFFECT,
                    id: O,
                    skuId: O,
                    title: O,
                    description: O,
                    accessibilityLabel: O,
                    reducedMotionSrc: '',
                    effects: Z,
                    animationType: 0
                }),
                [Z]
            ),
            B = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            M = (e, t) => {
                let n = B(t);
                null != n &&
                    (0, h.i0)(n, (t) => {
                        W((r) => E(_({}, r), { [e]: (0, h.I6)(t, n) }));
                    });
            },
            U = (e) => {
                W((t) => E(_({}, t), { [e]: null }));
            };
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && w([...e].map((e) => ((e.src = (0, h.$j)(e.base64)), e)));
        }, [t.config.effects]),
            i.useEffect(() => {
                let e = t.config.staticFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        null != n && ((n.src = (0, h.$j)(n.base64)), W((e) => E(_({}, e), { [t]: n })));
                    });
            }, [t.config.staticFrames]);
        let V = {
                effect: t,
                upsertConfig: s
            },
            G = i.useRef(V);
        return (i.useEffect(() => {
            G.current = V;
        }),
        i.useEffect(() => {
            let { effect: e, upsertConfig: t } = G.current;
            t({
                id: e.id,
                name: R,
                config: {
                    effects: Z,
                    staticFrames: k
                }
            });
        }, [Z, k, R]),
        null == C)
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: N.root,
                  children: [
                      (0, r.jsx)('div', {
                          className: N.row,
                          children: (0, r.jsx)(c.zxk, {
                              onClick: n,
                              children: 'Back'
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: N.grid,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: a()(N.col, N.preview),
                                  children: [
                                      (0, r.jsx)('img', {
                                          src: I ? b : x,
                                          alt: '',
                                          width: 450
                                      }),
                                      S && (0, r.jsx)(f.Z, { config: L })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: N.col,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: a()(N.col, N.section),
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: 'Profile Effect Name'
                                              }),
                                              (0, r.jsx)('input', {
                                                  type: 'text',
                                                  value: R,
                                                  className: N.input,
                                                  onChange: (e) => {
                                                      D(e.target.value);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: N.grid,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: N.row,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Dark Theme'
                                                      }),
                                                      (0, r.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: I,
                                                          className: N.checkBox,
                                                          onChange: () => {
                                                              y(!I);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: N.row,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Show User Profile'
                                                      }),
                                                      (0, r.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: A,
                                                          className: N.checkBox,
                                                          onChange: () => {
                                                              P(!A);
                                                          }
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: N.row,
                                          children: [
                                              (0, r.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload Animated Layer',
                                                      (0, r.jsx)(d.Z, {
                                                          ref: T,
                                                          onChange: (e) => {
                                                              let t = B(e);
                                                              null != t &&
                                                                  (0, h.i0)(t, async (e) => {
                                                                      let n = await (0, h.Xv)(e, t, Z.length);
                                                                      w((e) => [...e, n]);
                                                                  });
                                                          },
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: 'Make sure to upload the bottommost layer first!'
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: N.row,
                                          children: [
                                              (0, r.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload thumbnail.png',
                                                      (0, r.jsx)(d.Z, {
                                                          ref: T,
                                                          onChange: (e) => M(h.wT.THUMBNAIL, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload static.png',
                                                      (0, r.jsx)(d.Z, {
                                                          ref: T,
                                                          onChange: (e) => M(h.wT.STATIC, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload reduced_motion.png',
                                                      (0, r.jsx)(d.Z, {
                                                          ref: T,
                                                          onChange: (e) => M(h.wT.REDUCED_MOTION, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)('div', {
                                          className: N.bottomControls,
                                          children: (0, r.jsx)('div', {
                                              className: N.row,
                                              children: (0, r.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      v(!1), setTimeout(() => v(!0), 100);
                                                  },
                                                  children: 'Replay Animation'
                                              })
                                          })
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: a()(N.bottomControls, N.shareSection),
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: 'Export both configs for the drop package'
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-sm/bold',
                                                  color: 'text-danger',
                                                  children: 'WARNING: The full config is really big :0'
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: N.row,
                                                  children: [
                                                      (0, r.jsx)(c.zxk, {
                                                          size: c.PhG.SMALL,
                                                          color: c.Ttl.BRAND,
                                                          onClick: () => {
                                                              (0, g.JG)((0, h.HV)(Z)), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                                          },
                                                          children: 'Export Timing Config'
                                                      }),
                                                      (0, r.jsx)(c.zxk, {
                                                          size: c.PhG.SMALL,
                                                          color: c.Ttl.BRAND,
                                                          onClick: () => {
                                                              (0, g.JG)(JSON.stringify(t)), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                                          },
                                                          children: 'Export Full Config'
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: N.section,
                                          children: [
                                              (0, r.jsx)(c.X6q, {
                                                  variant: 'heading-lg/bold',
                                                  children: 'Static Frames'
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: N.staticFramesContainer,
                                                  children: Object.entries(k).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, r.jsxs)(
                                                          'div',
                                                          {
                                                              className: N.staticFramePreviewContainer,
                                                              children: [
                                                                  (0, r.jsx)(c.X6q, {
                                                                      variant: 'heading-sm/bold',
                                                                      children: t
                                                                  }),
                                                                  (0, r.jsx)('img', {
                                                                      src: null == n ? void 0 : n.src,
                                                                      className: N.staticFramePreview,
                                                                      alt: ''
                                                                  }),
                                                                  null != n &&
                                                                      (0, r.jsx)(c.zxk, {
                                                                          size: c.PhG.TINY,
                                                                          color: c.Ttl.RED,
                                                                          look: c.iLD.OUTLINED,
                                                                          onClick: () => U(t),
                                                                          children: 'Clear'
                                                                      })
                                                              ]
                                                          },
                                                          t
                                                      );
                                                  })
                                              })
                                          ]
                                      }),
                                      Z.some((e) => {
                                          var t;
                                          return (null !== (t = e.randomizedSources) && void 0 !== t ? t : []).length > 0;
                                      }) &&
                                          (0, r.jsxs)('div', {
                                              className: a()(N.section, N.randomizedRules),
                                              children: [
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-md/bold',
                                                      children: 'Rules of Randomized Effects'
                                                  }),
                                                  (0, r.jsxs)('ol', {
                                                      children: [(0, r.jsx)('li', { children: 'When an effect has randomization, all layers with random options must have the same number of options.' }), (0, r.jsx)('li', { children: 'The duration for the random options of a layer must be the same' }), (0, r.jsx)('li', { children: 'If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)' }), (0, r.jsx)('li', { children: 'Click "Replay Animation" to "reroll" the randomization' })]
                                                  })
                                              ]
                                          }),
                                      (0, r.jsx)('div', {
                                          children:
                                              A &&
                                              (0, r.jsxs)('div', {
                                                  className: a()(N.userProfilePreview, N.preview),
                                                  children: [
                                                      (0, r.jsx)(u.Z, {
                                                          user: C,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffectId: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOutFlow: !0
                                                      }),
                                                      (0, r.jsx)(f.Z, { config: L })
                                                  ]
                                              })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: a()(N.grid, N.layers),
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: N.dangerControls,
                                          children: (0, r.jsx)(c.zxk, {
                                              color: c.Ttl.RED,
                                              look: c.iLD.OUTLINED,
                                              onClick: () => {
                                                  w([]), W(j);
                                              },
                                              children: 'Clear Assets'
                                          })
                                      }),
                                      Z.map((e, t) =>
                                          (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: N.layerForm,
                                                  children: [
                                                      (0, r.jsxs)('div', {
                                                          className: N.layerPreviewContainer,
                                                          children: [
                                                              (0, r.jsx)(c.X6q, {
                                                                  variant: 'heading-md/bold',
                                                                  children: e.name
                                                              }),
                                                              (0, r.jsx)('img', {
                                                                  src: e.src,
                                                                  className: N.layerPreview,
                                                                  alt: ''
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(c.X6q, {
                                                                              variant: 'heading-sm/bold',
                                                                              children: 'Alternatives'
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsx)(
                                                                                  'img',
                                                                                  {
                                                                                      src: e.src,
                                                                                      className: N.layerPreview,
                                                                                      alt: ''
                                                                                  },
                                                                                  t
                                                                              )
                                                                          )
                                                                      ]
                                                                  })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: a()(N.grid, N.section),
                                                          children: [
                                                              (0, r.jsxs)('div', {
                                                                  className: N.col,
                                                                  children: [
                                                                      (0, r.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Start'
                                                                      }),
                                                                      (0, r.jsx)('input', {
                                                                          type: 'number',
                                                                          value: e.start,
                                                                          className: N.input,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let r = [...n],
                                                                                      i = n[t];
                                                                                  return (i.start = +e.target.value), (r[t] = i), r;
                                                                              });
                                                                          },
                                                                          contentEditable: !0
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, r.jsxs)('div', {
                                                                  className: N.col,
                                                                  children: [
                                                                      (0, r.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Duration'
                                                                      }),
                                                                      (0, r.jsx)('input', {
                                                                          type: 'number',
                                                                          value: e.duration,
                                                                          className: N.input,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let r = [...n],
                                                                                      i = n[t];
                                                                                  return (i.duration = +e.target.value), (r[t] = i), r;
                                                                              });
                                                                          },
                                                                          contentEditable: !0
                                                                      })
                                                                  ]
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: a()(N.grid, N.section),
                                                          children: [
                                                              (0, r.jsxs)('div', {
                                                                  className: N.col,
                                                                  children: [
                                                                      (0, r.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Loop'
                                                                      }),
                                                                      (0, r.jsx)('input', {
                                                                          type: 'checkbox',
                                                                          checked: e.loop,
                                                                          className: N.checkBox,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let r = [...n],
                                                                                      i = n[t];
                                                                                  return (i.loop = e.target.checked), (r[t] = i), r;
                                                                              });
                                                                          }
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, r.jsx)('div', {
                                                                  className: N.col,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(c.Text, {
                                                                                  variant: 'text-md/bold',
                                                                                  children: 'Loop Delay'
                                                                              }),
                                                                              (0, r.jsx)('input', {
                                                                                  type: 'number',
                                                                                  value: e.loopDelay,
                                                                                  className: N.input,
                                                                                  onChange: (e) => {
                                                                                      w((n) => {
                                                                                          let r = [...n],
                                                                                              i = n[t];
                                                                                          return (i.loopDelay = +e.target.value), (r[t] = i), r;
                                                                                      });
                                                                                  },
                                                                                  contentEditable: !0
                                                                              })
                                                                          ]
                                                                      })
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: a()(N.row, N.end),
                                                          children: [
                                                              (0, r.jsxs)('div', {
                                                                  className: N.uploadButton,
                                                                  children: [
                                                                      (0, r.jsx)(c.Text, {
                                                                          variant: 'text-sm/normal',
                                                                          color: 'always-white',
                                                                          children: 'Add Alternative'
                                                                      }),
                                                                      (0, r.jsx)(d.Z, {
                                                                          ref: T,
                                                                          onChange: (e) => {
                                                                              let n = e.currentTarget.files;
                                                                              if (null == n) return;
                                                                              let r = n[0],
                                                                                  i = new FileReader();
                                                                              (i.onload = (e) => {
                                                                                  w((n) => {
                                                                                      if (null == e.target || 'string' != typeof e.target.result) return n;
                                                                                      let r = [...n];
                                                                                      return null == n[t].randomizedSources && (n[t].randomizedSources = []), n[t].randomizedSources.push({ src: e.target.result }), r;
                                                                                  });
                                                                              }),
                                                                                  i.readAsDataURL(r);
                                                                          },
                                                                          multiple: !1
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, r.jsx)(c.zxk, {
                                                                  color: c.Ttl.RED,
                                                                  look: c.iLD.LINK,
                                                                  onClick: () => {
                                                                      w((t) => t.filter((t) => t !== e));
                                                                  },
                                                                  children: 'Remove Layer'
                                                              })
                                                          ]
                                                      })
                                                  ]
                                              },
                                              t
                                          )
                                      )
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };

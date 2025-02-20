n.d(t, { Z: () => E }), n(47120), n(301563), n(866573), n(642549), n(787622), n(610885), n(126298), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(26686), n(653041);
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
    b = n(250105),
    N = n(346537),
    x = n(830318);
let _ = (e) => {
        let [t, n] = e.split(','),
            r = atob(n),
            i = t.split(';')[0],
            s = new ArrayBuffer(r.length),
            a = new Uint8Array(s);
        for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
        return new Blob([s], { type: i });
    },
    E = (e) => {
        let { effect: t, back: n } = e,
            { upsertConfig: s } = (0, p.E)(),
            E = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
            [j, C] = i.useState(!0),
            O = i.useRef(null),
            [v, S] = i.useState(!1),
            [T, I] = i.useState(!1),
            [y, A] = i.useState(!1),
            [P, R] = i.useState([]),
            [D, Z] = i.useState(t.name);
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                R(
                    [...e].map((e) => {
                        let t = _(e.base64),
                            n = URL.createObjectURL(t);
                        return (e.src = n), e;
                    })
                );
        }, [t]);
        let w = {
                effect: t,
                upsertConfig: s
            },
            k = i.useRef(w);
        return (i.useEffect(() => {
            k.current = w;
        }),
        i.useEffect(() => {
            let { effect: e, upsertConfig: t } = k.current;
            t({
                id: e.id,
                name: D,
                config: { effects: P }
            });
        }, [P, D]),
        null == E)
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: b.root,
                  children: [
                      (0, r.jsx)('div', {
                          className: a()(b.row, b.end),
                          children: (0, r.jsx)(c.zxk, {
                              onClick: n,
                              children: 'Back'
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: b.grid,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: a()(b.col, b.preview),
                                  children: [
                                      (0, r.jsx)('img', {
                                          src: v ? N : x,
                                          alt: '',
                                          width: 450
                                      }),
                                      j &&
                                          (0, r.jsx)(f.Z, {
                                              config: {
                                                  type: l.Z.PROFILE_EFFECT,
                                                  title: 'debug',
                                                  description: 'debug',
                                                  accessibilityLabel: 'debug',
                                                  reducedMotionSrc: '',
                                                  effects: y ? (0, h.Tp)(P) : P,
                                                  animationType: 0
                                              },
                                              profileEffectId: 'debug'
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: a()(b.col, b.controls),
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: a()(b.col, b.section),
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: 'Profile Effect Name'
                                              }),
                                              (0, r.jsx)('input', {
                                                  type: 'text',
                                                  value: D,
                                                  className: b.input,
                                                  onChange: (e) => {
                                                      Z(e.target.value);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: b.grid,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Dark Theme'
                                                      }),
                                                      (0, r.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: v,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              S(!v);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Show User Profile'
                                                      }),
                                                      (0, r.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: T,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              I(!T);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Simulate Android'
                                                      }),
                                                      (0, r.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: y,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              A(!y);
                                                          }
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: b.uploadButton,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'always-white',
                                                          children: 'Upload Layer'
                                                      }),
                                                      (0, r.jsx)(d.Z, {
                                                          ref: O,
                                                          onChange: (e) => {
                                                              let t = e.currentTarget.files;
                                                              if (null == t) return;
                                                              let n = t[0],
                                                                  r = new FileReader();
                                                              (r.onload = async (e) => {
                                                                  if (null == e.target || 'string' != typeof e.target.result) return;
                                                                  let t = await (0, h.Xv)(URL.createObjectURL(n), e.target.result, n, P.length);
                                                                  R((e) => [...e, t]);
                                                              }),
                                                                  r.readAsDataURL(n);
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
                                          className: b.bottomControls,
                                          children: [
                                              (0, r.jsx)(c.zxk, {
                                                  color: c.Ttl.RED,
                                                  look: c.iLD.LINK,
                                                  onClick: () => {
                                                      R([]);
                                                  },
                                                  children: 'Clear Assets'
                                              }),
                                              (0, r.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      C(!1), setTimeout(() => C(!0), 100);
                                                  },
                                                  children: 'Replay Animation'
                                              }),
                                              (0, r.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      (0, g.JG)((0, h.HV)(P, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                                  },
                                                  children: 'Export'
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: a()(b.bottomControls, b.shareSection),
                                          children: [
                                              (0, r.jsxs)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: [
                                                      'Export the config for sharing in this tool.',
                                                      ' ',
                                                      (0, r.jsx)('span', {
                                                          className: b.warningText,
                                                          children: "WARNING: it's really big"
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  onClick: () => {
                                                      (0, g.JG)(JSON.stringify(t)), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                                  },
                                                  children: 'Share'
                                              })
                                          ]
                                      }),
                                      P.some((e) => {
                                          var t;
                                          return (null !== (t = e.randomizedSources) && void 0 !== t ? t : []).length > 0;
                                      }) &&
                                          (0, r.jsxs)('div', {
                                              className: a()(b.section, b.randomizedRules),
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
                                              T &&
                                              (0, r.jsxs)('div', {
                                                  className: a()(b.userProfilePreview, b.preview),
                                                  children: [
                                                      (0, r.jsx)(u.Z, {
                                                          user: E,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffectId: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOutFlow: !0
                                                      }),
                                                      (0, r.jsx)(f.Z, {
                                                          config: {
                                                              type: l.Z.PROFILE_EFFECT,
                                                              title: 'debug',
                                                              description: 'debug',
                                                              accessibilityLabel: 'debug',
                                                              reducedMotionSrc: '',
                                                              effects: y ? (0, h.Tp)(P) : P,
                                                              animationType: 0
                                                          },
                                                          profileEffectId: 'debug'
                                                      })
                                                  ]
                                              })
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(b.grid, b.layers),
                                  children: P.map((e, t) => {
                                      var n;
                                      return (0, r.jsxs)(
                                          'div',
                                          {
                                              className: b.layerForm,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: 'heading-md/bold',
                                                      children: e.name
                                                  }),
                                                  (0, r.jsx)('img', {
                                                      src: e.base64,
                                                      className: b.layerPreview,
                                                      alt: ''
                                                  }),
                                                  (null !== (n = e.randomizedSources) && void 0 !== n ? n : []).map((e, t) =>
                                                      (0, r.jsx)(
                                                          'img',
                                                          {
                                                              src: e.src,
                                                              className: b.layerPreview,
                                                              alt: ''
                                                          },
                                                          t
                                                      )
                                                  ),
                                                  (0, r.jsxs)('div', {
                                                      className: a()(b.grid, b.section),
                                                      children: [
                                                          (0, r.jsxs)('div', {
                                                              className: b.col,
                                                              children: [
                                                                  (0, r.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Start'
                                                                  }),
                                                                  (0, r.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.start,
                                                                      className: b.input,
                                                                      onChange: (e) => {
                                                                          R((n) => {
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
                                                              className: b.col,
                                                              children: [
                                                                  (0, r.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Duration'
                                                                  }),
                                                                  (0, r.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.duration,
                                                                      className: b.input,
                                                                      onChange: (e) => {
                                                                          R((n) => {
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
                                                      className: a()(b.grid, b.section),
                                                      children: [
                                                          (0, r.jsxs)('div', {
                                                              className: b.col,
                                                              children: [
                                                                  (0, r.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Loop'
                                                                  }),
                                                                  (0, r.jsx)('input', {
                                                                      type: 'checkbox',
                                                                      checked: e.loop,
                                                                      className: b.checkBox,
                                                                      onChange: (e) => {
                                                                          R((n) => {
                                                                              let r = [...n],
                                                                                  i = n[t];
                                                                              return (i.loop = e.target.checked), (r[t] = i), r;
                                                                          });
                                                                      }
                                                                  })
                                                              ]
                                                          }),
                                                          (0, r.jsx)('div', {
                                                              className: b.col,
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
                                                                              className: b.input,
                                                                              onChange: (e) => {
                                                                                  R((n) => {
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
                                                      className: a()(b.row, b.end),
                                                      children: [
                                                          (0, r.jsxs)('div', {
                                                              className: b.uploadButton,
                                                              children: [
                                                                  (0, r.jsx)(c.Text, {
                                                                      variant: 'text-sm/normal',
                                                                      color: 'always-white',
                                                                      children: 'Add Alternative'
                                                                  }),
                                                                  (0, r.jsx)(d.Z, {
                                                                      ref: O,
                                                                      onChange: (e) => {
                                                                          let n = e.currentTarget.files;
                                                                          if (null == n) return;
                                                                          let r = n[0],
                                                                              i = new FileReader();
                                                                          (i.onload = (e) => {
                                                                              R((n) => {
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
                                                                  R((t) => t.filter((t) => t !== e));
                                                              },
                                                              children: 'Remove Layer'
                                                          })
                                                      ]
                                                  })
                                              ]
                                          },
                                          t
                                      );
                                  })
                              })
                          ]
                      })
                  ]
              });
    };

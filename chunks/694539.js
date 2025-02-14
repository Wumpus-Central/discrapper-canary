n.d(t, { Z: () => T }), n(47120), n(642549), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(979554),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(921813),
    m = n(594174),
    g = n(572004),
    h = n(451593),
    x = n(477146),
    _ = n(329156),
    p = n(336600),
    E = n(346537),
    C = n(830318);
let f = (e) => {
        let [t, n] = e.split(','),
            i = atob(n),
            s = t.split(';')[0],
            r = new ArrayBuffer(i.length),
            l = new Uint8Array(r);
        for (let e = 0; e < i.length; e++) l[e] = i.charCodeAt(e);
        return new Blob([r], { type: s });
    },
    T = (e) => {
        let { effect: t, back: n } = e,
            { upsertConfig: r } = (0, h.E)(),
            T = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
            [N, S] = s.useState(!0),
            I = s.useRef(null),
            [b, v] = s.useState(!1),
            [j, A] = s.useState(!1),
            [O, R] = s.useState(!1),
            [P, D] = s.useState([]),
            [y, Z] = s.useState(t.name);
        s.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                D(
                    [...e].map((e) => {
                        let t = f(e.base64),
                            n = URL.createObjectURL(t);
                        return (e.src = n), e;
                    })
                );
        }, [t]);
        let k = {
                effect: t,
                upsertConfig: r
            },
            L = s.useRef(k);
        return (s.useEffect(() => {
            L.current = k;
        }),
        s.useEffect(() => {
            let { effect: e, upsertConfig: t } = L.current;
            t({
                id: e.id,
                name: y,
                config: { effects: P }
            });
        }, [P, y]),
        null == T)
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: p.root,
                  children: [
                      (0, i.jsx)('div', {
                          className: l()(p.row, p.end),
                          children: (0, i.jsx)(c.zxk, {
                              onClick: n,
                              children: 'Back'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: p.grid,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: l()(p.col, p.preview),
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: b ? E : C,
                                          alt: '',
                                          width: 450
                                      }),
                                      N &&
                                          (0, i.jsx)(_.Z, {
                                              config: {
                                                  type: a.Z.PROFILE_EFFECT,
                                                  title: 'debug',
                                                  description: 'debug',
                                                  accessibilityLabel: 'debug',
                                                  reducedMotionSrc: '',
                                                  effects: O ? (0, x.Tp)(P) : P,
                                                  animationType: 0
                                              },
                                              profileEffectId: 'debug'
                                          })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: l()(p.col, p.controls),
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: l()(p.col, p.section),
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: 'Profile Effect Name'
                                              }),
                                              (0, i.jsx)('input', {
                                                  type: 'text',
                                                  value: y,
                                                  className: p.input,
                                                  onChange: (e) => {
                                                      Z(e.target.value);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: p.grid,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: p.row,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Dark Theme'
                                                      }),
                                                      (0, i.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: b,
                                                          className: p.checkBox,
                                                          onChange: () => {
                                                              v(!b);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: p.row,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Show User Profile'
                                                      }),
                                                      (0, i.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: j,
                                                          className: p.checkBox,
                                                          onChange: () => {
                                                              A(!j);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: p.row,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Simulate Android'
                                                      }),
                                                      (0, i.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: O,
                                                          className: p.checkBox,
                                                          onChange: () => {
                                                              R(!O);
                                                          }
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: p.uploadButton,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          color: 'always-white',
                                                          children: 'Upload Layer'
                                                      }),
                                                      (0, i.jsx)(d.Z, {
                                                          ref: I,
                                                          onChange: (e) => {
                                                              let t = e.currentTarget.files;
                                                              if (null == t) return;
                                                              let n = t[0],
                                                                  i = new FileReader();
                                                              (i.onload = async (e) => {
                                                                  if (null == e.target || 'string' != typeof e.target.result) return;
                                                                  let t = await (0, x.Xv)(URL.createObjectURL(n), e.target.result, n, P.length);
                                                                  D((e) => [...e, t]);
                                                              }),
                                                                  i.readAsDataURL(n);
                                                          },
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: 'Make sure to upload the bottommost layer first!'
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: p.bottomControls,
                                          children: [
                                              (0, i.jsx)(c.zxk, {
                                                  color: c.Ttl.RED,
                                                  look: c.iLD.LINK,
                                                  onClick: () => {
                                                      D([]);
                                                  },
                                                  children: 'Clear Assets'
                                              }),
                                              (0, i.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      S(!1), setTimeout(() => S(!0), 100);
                                                  },
                                                  children: 'Replay Animation'
                                              }),
                                              (0, i.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      (0, g.JG)((0, x.HV)(P, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                                  },
                                                  children: 'Export'
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: l()(p.bottomControls, p.shareSection),
                                          children: [
                                              (0, i.jsxs)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: [
                                                      'Export the config for sharing in this tool.',
                                                      ' ',
                                                      (0, i.jsx)('span', {
                                                          className: p.warningText,
                                                          children: "WARNING: it's really big"
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)(c.zxk, {
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
                                          (0, i.jsxs)('div', {
                                              className: l()(p.section, p.randomizedRules),
                                              children: [
                                                  (0, i.jsx)(c.Text, {
                                                      variant: 'text-md/bold',
                                                      children: 'Rules of Randomized Effects'
                                                  }),
                                                  (0, i.jsxs)('ol', {
                                                      children: [(0, i.jsx)('li', { children: 'When an effect has randomization, all layers with random options must have the same number of options.' }), (0, i.jsx)('li', { children: 'The duration for the random options of a layer must be the same' }), (0, i.jsx)('li', { children: 'If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)' }), (0, i.jsx)('li', { children: 'Click "Replay Animation" to "reroll" the randomization' })]
                                                  })
                                              ]
                                          }),
                                      (0, i.jsx)('div', {
                                          children:
                                              j &&
                                              (0, i.jsxs)('div', {
                                                  className: l()(p.userProfilePreview, p.preview),
                                                  children: [
                                                      (0, i.jsx)(u.Z, {
                                                          user: T,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffectId: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOutFlow: !0
                                                      }),
                                                      (0, i.jsx)(_.Z, {
                                                          config: {
                                                              type: a.Z.PROFILE_EFFECT,
                                                              title: 'debug',
                                                              description: 'debug',
                                                              accessibilityLabel: 'debug',
                                                              reducedMotionSrc: '',
                                                              effects: O ? (0, x.Tp)(P) : P,
                                                              animationType: 0
                                                          },
                                                          profileEffectId: 'debug'
                                                      })
                                                  ]
                                              })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: l()(p.grid, p.layers),
                                  children: P.map((e, t) => {
                                      var n;
                                      return (0, i.jsxs)(
                                          'div',
                                          {
                                              className: p.layerForm,
                                              children: [
                                                  (0, i.jsx)(c.X6q, {
                                                      variant: 'heading-md/bold',
                                                      children: e.name
                                                  }),
                                                  (0, i.jsx)('img', {
                                                      src: e.base64,
                                                      className: p.layerPreview,
                                                      alt: ''
                                                  }),
                                                  (null !== (n = e.randomizedSources) && void 0 !== n ? n : []).map((e, t) =>
                                                      (0, i.jsx)(
                                                          'img',
                                                          {
                                                              src: e.src,
                                                              className: p.layerPreview,
                                                              alt: ''
                                                          },
                                                          t
                                                      )
                                                  ),
                                                  (0, i.jsxs)('div', {
                                                      className: l()(p.grid, p.section),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: p.col,
                                                              children: [
                                                                  (0, i.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Start'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.start,
                                                                      className: p.input,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  s = n[t];
                                                                              return (s.start = +e.target.value), (i[t] = s), i;
                                                                          });
                                                                      },
                                                                      contentEditable: !0
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: p.col,
                                                              children: [
                                                                  (0, i.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Duration'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.duration,
                                                                      className: p.input,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  s = n[t];
                                                                              return (s.duration = +e.target.value), (i[t] = s), i;
                                                                          });
                                                                      },
                                                                      contentEditable: !0
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsxs)('div', {
                                                      className: l()(p.grid, p.section),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: p.col,
                                                              children: [
                                                                  (0, i.jsx)(c.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Loop'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'checkbox',
                                                                      checked: e.loop,
                                                                      className: p.checkBox,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  s = n[t];
                                                                              return (s.loop = e.target.checked), (i[t] = s), i;
                                                                          });
                                                                      }
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsx)('div', {
                                                              className: p.col,
                                                              children:
                                                                  e.loop &&
                                                                  (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)(c.Text, {
                                                                              variant: 'text-md/bold',
                                                                              children: 'Loop Delay'
                                                                          }),
                                                                          (0, i.jsx)('input', {
                                                                              type: 'number',
                                                                              value: e.loopDelay,
                                                                              className: p.input,
                                                                              onChange: (e) => {
                                                                                  D((n) => {
                                                                                      let i = [...n],
                                                                                          s = n[t];
                                                                                      return (s.loopDelay = +e.target.value), (i[t] = s), i;
                                                                                  });
                                                                              },
                                                                              contentEditable: !0
                                                                          })
                                                                      ]
                                                                  })
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsxs)('div', {
                                                      className: l()(p.row, p.end),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: p.uploadButton,
                                                              children: [
                                                                  (0, i.jsx)(c.Text, {
                                                                      variant: 'text-sm/normal',
                                                                      color: 'always-white',
                                                                      children: 'Add Alternative'
                                                                  }),
                                                                  (0, i.jsx)(d.Z, {
                                                                      ref: I,
                                                                      onChange: (e) => {
                                                                          let n = e.currentTarget.files;
                                                                          if (null == n) return;
                                                                          let i = n[0],
                                                                              s = new FileReader();
                                                                          (s.onload = (e) => {
                                                                              D((n) => {
                                                                                  if (null == e.target || 'string' != typeof e.target.result) return n;
                                                                                  let i = [...n];
                                                                                  return null == n[t].randomizedSources && (n[t].randomizedSources = []), n[t].randomizedSources.push({ src: e.target.result }), i;
                                                                              });
                                                                          }),
                                                                              s.readAsDataURL(i);
                                                                      },
                                                                      multiple: !1
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsx)(c.zxk, {
                                                              color: c.Ttl.RED,
                                                              look: c.iLD.LINK,
                                                              onClick: () => {
                                                                  D((t) => t.filter((t) => t !== e));
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

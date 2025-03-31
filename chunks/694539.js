n.d(t, { Z: () => _ }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(26686), n(653041);
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
    N = n(146181),
    b = n(346537),
    x = n(830318);
let _ = (e) => {
    let { effect: t, back: n } = e,
        { upsertConfig: s } = (0, p.E)(),
        _ = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        [E, j] = i.useState(!0),
        O = i.useRef(null),
        [C, S] = i.useState(!1),
        [v, T] = i.useState(!1),
        [I, y] = i.useState([]),
        [A, P] = i.useState(t.name);
    i.useEffect(() => {
        let e = t.config.effects;
        e.length > 0 && y([...e].map((e) => ((e.src = (0, h.$j)(e.base64)), e)));
    }, [t]);
    let R = {
            effect: t,
            upsertConfig: s
        },
        D = i.useRef(R);
    return (i.useEffect(() => {
        D.current = R;
    }),
    i.useEffect(() => {
        let { effect: e, upsertConfig: t } = D.current;
        t({
            id: e.id,
            name: A,
            config: { effects: I }
        });
    }, [I, A]),
    null == _)
        ? (0, r.jsx)('div', {})
        : (0, r.jsxs)('div', {
              className: N.root,
              children: [
                  (0, r.jsx)('div', {
                      className: a()(N.row, N.end),
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
                                      src: C ? b : x,
                                      alt: '',
                                      width: 450
                                  }),
                                  E &&
                                      (0, r.jsx)(f.Z, {
                                          config: {
                                              type: l.Z.PROFILE_EFFECT,
                                              title: 'debug',
                                              description: 'debug',
                                              accessibilityLabel: 'debug',
                                              reducedMotionSrc: '',
                                              effects: I,
                                              animationType: 0
                                          },
                                          profileEffectId: 'debug'
                                      })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: a()(N.col, N.controls),
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
                                              value: A,
                                              className: N.input,
                                              onChange: (e) => {
                                                  P(e.target.value);
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
                                                      checked: C,
                                                      className: N.checkBox,
                                                      onChange: () => {
                                                          S(!C);
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
                                                      checked: v,
                                                      className: N.checkBox,
                                                      onChange: () => {
                                                          T(!v);
                                                      }
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: N.uploadButton,
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
                                                              let t = await (0, h.Xv)(URL.createObjectURL(n), e.target.result, n, I.length);
                                                              y((e) => [...e, t]);
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
                                      className: N.bottomControls,
                                      children: [
                                          (0, r.jsx)(c.zxk, {
                                              color: c.Ttl.RED,
                                              look: c.iLD.LINK,
                                              onClick: () => {
                                                  y([]);
                                              },
                                              children: 'Clear Assets'
                                          }),
                                          (0, r.jsx)(c.zxk, {
                                              color: c.Ttl.BRAND,
                                              onClick: () => {
                                                  j(!1), setTimeout(() => j(!0), 100);
                                              },
                                              children: 'Replay Animation'
                                          }),
                                          (0, r.jsx)(c.zxk, {
                                              color: c.Ttl.BRAND,
                                              onClick: () => {
                                                  (0, g.JG)((0, h.HV)(I, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                                              },
                                              children: 'Export'
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: a()(N.bottomControls, N.shareSection),
                                      children: [
                                          (0, r.jsxs)(c.Text, {
                                              variant: 'text-sm/semibold',
                                              children: [
                                                  'Export the config for sharing in this tool.',
                                                  ' ',
                                                  (0, r.jsx)('span', {
                                                      className: N.warningText,
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
                                  I.some((e) => {
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
                                          v &&
                                          (0, r.jsxs)('div', {
                                              className: a()(N.userProfilePreview, N.preview),
                                              children: [
                                                  (0, r.jsx)(u.Z, {
                                                      user: _,
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
                                                          effects: I,
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
                              className: a()(N.grid, N.layers),
                              children: I.map((e, t) => {
                                  var n;
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: N.layerForm,
                                          children: [
                                              (0, r.jsx)(c.X6q, {
                                                  variant: 'heading-md/bold',
                                                  children: e.name
                                              }),
                                              (0, r.jsx)('img', {
                                                  src: e.base64,
                                                  className: N.layerPreview,
                                                  alt: ''
                                              }),
                                              (null !== (n = e.randomizedSources) && void 0 !== n ? n : []).map((e, t) =>
                                                  (0, r.jsx)(
                                                      'img',
                                                      {
                                                          src: e.src,
                                                          className: N.layerPreview,
                                                          alt: ''
                                                      },
                                                      t
                                                  )
                                              ),
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
                                                                      y((n) => {
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
                                                                      y((n) => {
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
                                                                      y((n) => {
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
                                                                              y((n) => {
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
                                                                  ref: O,
                                                                  onChange: (e) => {
                                                                      let n = e.currentTarget.files;
                                                                      if (null == n) return;
                                                                      let r = n[0],
                                                                          i = new FileReader();
                                                                      (i.onload = (e) => {
                                                                          y((n) => {
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
                                                              y((t) => t.filter((t) => t !== e));
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

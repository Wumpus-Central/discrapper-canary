l.d(n, { Z: () => C }), l(47120);
var t = l(200651),
    i = l(192379),
    a = l(913527),
    r = l.n(a),
    s = l(481060),
    o = l(516129),
    d = l(813197),
    c = l(930180),
    u = l(46920),
    x = l(924301),
    m = l(236373),
    h = l(854698),
    v = l(405613),
    g = l(440371),
    j = l(765305),
    N = l(486324),
    f = l(388032),
    p = l(374330);
function E(e) {
    let { editBroadcastInfoData: n } = e,
        { broadcastInfo: l, broadcastToDirectoryChannels: i, setBroadcastToDirectoryChannels: a, canEveryoneRoleViewEvent: r } = n;
    return l.can_broadcast
        ? (0, t.jsxs)(s.xJW, {
              title: f.intl.string(f.t.BgAW29),
              className: p.formItem,
              children: [
                  (0, t.jsx)(s.ua7, {
                      text: (0, t.jsx)(s.Text, {
                          className: p.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: f.intl.string(f.t.gTgUmZ)
                      }),
                      'aria-label': f.intl.string(f.t.gTgUmZ),
                      shouldShow: !r,
                      children: (e) =>
                          (0, t.jsx)('div', {
                              ...e,
                              children: (0, t.jsx)(s.XZJ, {
                                  type: s.XZJ.Types.INVERTED,
                                  disabled: !r,
                                  value: i,
                                  onChange: (e, n) => a(n),
                                  children: (0, t.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      color: 'interactive-active',
                                      children: f.intl.string(f.t['8GW68/'])
                                  })
                              })
                          })
                  }),
                  (0, t.jsx)(s.Text, {
                      className: p.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: f.intl.string(f.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function C(e) {
    let { guildEvent: n, guildEventId: a, guildId: C, editBroadcastInfoData: I, error: T, validationErrorMessage: Z, onChange: S, canSetFocus: b = !1 } = e,
        { entityType: y, channelId: k, description: _, name: z, image: R, scheduledEndTime: A, scheduledStartTime: D, recurrenceRule: P } = n,
        L = (0, c._d)(k),
        M = (0, c.K3)(k),
        U = null != n && (0, x.xt)(n),
        G = i.useMemo(() => {
            let e = (0, h.v1)(n);
            return null != e ? e : { startDate: r()(D) };
        }, [n, D]),
        [w, V] = i.useState(() => (0, h.zi)(r()(D), P)),
        F = i.useRef(null);
    i.useEffect(() => {
        if (b) {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
        }
    }, [b]);
    let W = (e) => {
            S({ image: e });
        },
        B = (e, n) => {
            if (null == e || void 0 === n) {
                W(null);
                return;
            }
            (0, s.ZDy)(async () => {
                let { default: i } = await Promise.all([l.e('70687'), l.e('59732'), l.e('81297')]).then(l.bind(l, 73620));
                return (l) =>
                    (0, t.jsx)(i, {
                        imgURI: e,
                        file: n,
                        onCrop: W,
                        uploadType: N.pC.SCHEDULED_EVENT_IMAGE,
                        allowSkip: !0,
                        ...l
                    });
            });
        };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: p.blockedUsersContainer,
                children: null != k && !U && (L > 0 || M > 0) && (0, t.jsx)(u.mv, { channelId: k })
            }),
            (0, t.jsxs)('div', {
                className: p.form,
                children: [
                    (0, t.jsxs)(s.xJW, {
                        title: f.intl.string(f.t['0HbEQ0']),
                        className: p.topicFormItem,
                        required: !0,
                        children: [
                            (0, t.jsx)(s.oil, {
                                className: p.textInput,
                                onChange: (e) => {
                                    S({ name: e });
                                },
                                placeholder: f.intl.string(f.t['6/yarq']),
                                maxLength: j.p,
                                value: z,
                                autoComplete: 'off',
                                inputRef: F
                            }),
                            null != T
                                ? (0, t.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: p.warning,
                                      children: T.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, t.jsx)(g.Z, {
                        className: p.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: n, endDate: l } = e,
                                t = {
                                    scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                    scheduledEndTime: null == l ? void 0 : l.toISOString()
                                };
                            null != n && null != A && (null == l ? void 0 : l.isBefore(n)) && (t.scheduledEndTime = n.add(1, 'hour').toISOString()), null != n && null != w && (t.recurrenceRule = (0, h.mF)(w, n)), S(t);
                        },
                        onRecurrenceChange: (e) => {
                            let n = G.startDate;
                            null != n && (S({ recurrenceRule: (0, h.mF)(e, n) }), V(e));
                        },
                        schedule: G,
                        recurrenceRule: P,
                        showEndDate: y === j.WX.EXTERNAL,
                        requireEndDate: y === j.WX.EXTERNAL,
                        disableStartDateTime: U,
                        guildId: C
                    }),
                    null != Z
                        ? (0, t.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: p.warning,
                              children: Z
                          })
                        : null,
                    (0, t.jsx)(s.xJW, {
                        title: f.intl.string(f.t['+gRCCw']),
                        className: p.formItem,
                        children: (0, t.jsx)(s.Kx8, {
                            className: p.__invalid_descriptionInput,
                            placeholder: f.intl.string(f.t['kWO/Ex']),
                            value: _,
                            onChange: (e) => {
                                S({ description: e });
                            },
                            maxLength: j.wm,
                            autosize: !0
                        })
                    }),
                    (0, t.jsxs)(s.xJW, {
                        title: f.intl.string(f.t.Ly121d),
                        className: p.formItem,
                        children: [
                            (0, t.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: p.addImageHint,
                                children: f.intl.string(f.t.B9C9bW)
                            }),
                            null != R
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(o.Z, {
                                              className: p.imagePreview,
                                              iconWrapperClassName: p.imagePreviewInner,
                                              image: R,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != C) {
                                                      var l;
                                                      return null !== (l = (0, v.Z)((0, m.Gb)(n, C, a))) && void 0 !== l ? l : null;
                                                  }
                                              },
                                              onChange: B,
                                              hint: f.intl.string(f.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, t.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              onClick: () => W(null),
                                              children: f.intl.string(f.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, t.jsxs)(s.zxk, {
                                      size: s.zxk.Sizes.SMALL,
                                      children: [f.intl.string(f.t.vKCGYW), (0, t.jsx)(d.ZP, { onChange: B })]
                                  })
                        ]
                    }),
                    (0, t.jsx)(E, { editBroadcastInfoData: I })
                ]
            })
        ]
    });
}

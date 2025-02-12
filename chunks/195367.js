t.d(n, { Z: () => E }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(913527),
    s = t.n(r),
    a = t(481060),
    o = t(516129),
    d = t(813197),
    c = t(930180),
    u = t(320596),
    x = t(924301),
    h = t(236373),
    m = t(854698),
    v = t(405613),
    g = t(440371),
    j = t(765305),
    N = t(486324),
    p = t(388032),
    f = t(374330);
function C(e) {
    let { editBroadcastInfoData: n } = e,
        { broadcastInfo: t, broadcastToDirectoryChannels: i, setBroadcastToDirectoryChannels: r, canEveryoneRoleViewEvent: s } = n;
    return t.can_broadcast
        ? (0, l.jsxs)(a.xJW, {
              title: p.intl.string(p.t.BgAW29),
              className: f.formItem,
              children: [
                  (0, l.jsx)(a.ua7, {
                      text: (0, l.jsx)(a.Text, {
                          className: f.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: p.intl.string(p.t.gTgUmZ)
                      }),
                      'aria-label': p.intl.string(p.t.gTgUmZ),
                      shouldShow: !s,
                      children: (e) =>
                          (0, l.jsx)('div', {
                              ...e,
                              children: (0, l.jsx)(a.XZJ, {
                                  type: a.XZJ.Types.INVERTED,
                                  disabled: !s,
                                  value: i,
                                  onChange: (e, n) => r(n),
                                  children: (0, l.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      color: 'interactive-active',
                                      children: p.intl.string(p.t['8GW68/'])
                                  })
                              })
                          })
                  }),
                  (0, l.jsx)(a.Text, {
                      className: f.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: p.intl.string(p.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function E(e) {
    let { guildEvent: n, guildEventId: r, guildId: E, editBroadcastInfoData: I, error: S, validationErrorMessage: T, onChange: Z, canSetFocus: y = !1 } = e,
        { entityType: b, channelId: k, description: _, name: R, image: z, scheduledEndTime: A, scheduledStartTime: D, recurrenceRule: P } = n,
        L = (0, c._d)(k),
        M = (0, c.K3)(k),
        U = null != n && (0, x.xt)(n),
        G = i.useMemo(() => {
            let e = (0, m.v1)(n);
            return null != e ? e : { startDate: s()(D) };
        }, [n, D]),
        [w, V] = i.useState(() => (0, m.zi)(s()(D), P)),
        F = i.useRef(null);
    i.useEffect(() => {
        if (y) {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
        }
    }, [y]);
    let W = (e) => {
            Z({ image: e });
        },
        O = (e, n) => {
            if (null == e || void 0 === n) {
                W(null);
                return;
            }
            (0, a.ZDy)(async () => {
                let { default: i } = await Promise.all([t.e('70687'), t.e('59732'), t.e('81297')]).then(t.bind(t, 73620));
                return (t) =>
                    (0, l.jsx)(i, {
                        imgURI: e,
                        file: n,
                        onCrop: W,
                        uploadType: N.pC.SCHEDULED_EVENT_IMAGE,
                        allowSkip: !0,
                        ...t
                    });
            });
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: f.blockedUsersContainer,
                children: null != k && !U && (L > 0 || M > 0) && (0, l.jsx)(u.mv, { channelId: k })
            }),
            (0, l.jsxs)('div', {
                className: f.form,
                children: [
                    (0, l.jsxs)(a.xJW, {
                        title: p.intl.string(p.t['0HbEQ0']),
                        className: f.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(a.oil, {
                                className: f.textInput,
                                onChange: (e) => {
                                    Z({ name: e });
                                },
                                placeholder: p.intl.string(p.t['6/yarq']),
                                maxLength: j.p,
                                value: R,
                                autoComplete: 'off',
                                inputRef: F
                            }),
                            null != S
                                ? (0, l.jsx)(a.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: f.warning,
                                      children: S.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(g.Z, {
                        className: f.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: n, endDate: t } = e,
                                l = {
                                    scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                    scheduledEndTime: null == t ? void 0 : t.toISOString()
                                };
                            null != n && null != A && (null == t ? void 0 : t.isBefore(n)) && (l.scheduledEndTime = n.add(1, 'hour').toISOString()), null != n && null != w && (l.recurrenceRule = (0, m.mF)(w, n)), Z(l);
                        },
                        onRecurrenceChange: (e) => {
                            let n = G.startDate;
                            null != n && (Z({ recurrenceRule: (0, m.mF)(e, n) }), V(e));
                        },
                        schedule: G,
                        recurrenceRule: P,
                        showEndDate: b === j.WX.EXTERNAL,
                        requireEndDate: b === j.WX.EXTERNAL,
                        disableStartDateTime: U,
                        guildId: E
                    }),
                    null != T
                        ? (0, l.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: f.warning,
                              children: T
                          })
                        : null,
                    (0, l.jsx)(a.xJW, {
                        title: p.intl.string(p.t['+gRCCw']),
                        className: f.formItem,
                        children: (0, l.jsx)(a.Kx8, {
                            className: f.__invalid_descriptionInput,
                            placeholder: p.intl.string(p.t['kWO/Ex']),
                            value: _,
                            onChange: (e) => {
                                Z({ description: e });
                            },
                            maxLength: j.wm,
                            autosize: !0
                        })
                    }),
                    (0, l.jsxs)(a.xJW, {
                        title: p.intl.string(p.t.Ly121d),
                        className: f.formItem,
                        children: [
                            (0, l.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: f.addImageHint,
                                children: p.intl.string(p.t.B9C9bW)
                            }),
                            null != z
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.Z, {
                                              className: f.imagePreview,
                                              iconWrapperClassName: f.imagePreviewInner,
                                              image: z,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != E) {
                                                      var t;
                                                      return null !== (t = (0, v.Z)((0, h.Gb)(n, E, r))) && void 0 !== t ? t : null;
                                                  }
                                              },
                                              onChange: O,
                                              hint: p.intl.string(p.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, l.jsx)(a.zxk, {
                                              size: a.zxk.Sizes.SMALL,
                                              onClick: () => W(null),
                                              children: p.intl.string(p.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, l.jsxs)(a.zxk, {
                                      size: a.zxk.Sizes.SMALL,
                                      children: [p.intl.string(p.t.vKCGYW), (0, l.jsx)(d.ZP, { onChange: O })]
                                  })
                        ]
                    }),
                    (0, l.jsx)(C, { editBroadcastInfoData: I })
                ]
            })
        ]
    });
}

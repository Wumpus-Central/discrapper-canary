t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(913527),
    a = t.n(r),
    s = t(481060),
    o = t(516129),
    c = t(813197),
    d = t(930180),
    u = t(46920),
    m = t(924301),
    x = t(236373),
    h = t(854698),
    g = t(405613),
    v = t(440371),
    j = t(765305),
    f = t(486324),
    p = t(388032),
    I = t(378816);
function N(e) {
    let { editBroadcastInfoData: n } = e,
        { broadcastInfo: t, broadcastToDirectoryChannels: i, setBroadcastToDirectoryChannels: r, canEveryoneRoleViewEvent: a } = n;
    return t.can_broadcast
        ? (0, l.jsxs)(s.FormItem, {
              title: p.intl.string(p.t.BgAW29),
              className: I.formItem,
              children: [
                  (0, l.jsx)(s.Tooltip, {
                      text: (0, l.jsx)(s.Text, {
                          className: I.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: p.intl.string(p.t.gTgUmZ)
                      }),
                      'aria-label': p.intl.string(p.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) =>
                          (0, l.jsx)('div', {
                              ...e,
                              children: (0, l.jsx)(s.Checkbox, {
                                  type: s.Checkbox.Types.INVERTED,
                                  disabled: !a,
                                  value: i,
                                  onChange: (e, n) => r(n),
                                  children: (0, l.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      color: 'interactive-active',
                                      children: p.intl.string(p.t['8GW68/'])
                                  })
                              })
                          })
                  }),
                  (0, l.jsx)(s.Text, {
                      className: I.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: p.intl.string(p.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function C(e) {
    let { guildEvent: n, guildEventId: r, guildId: C, editBroadcastInfoData: E, error: S, validationErrorMessage: T, onChange: y, canSetFocus: b = !1 } = e,
        { entityType: Z, channelId: R, description: _, name: k, image: A, scheduledEndTime: D, scheduledStartTime: L, recurrenceRule: B } = n,
        M = (0, d._d)(R),
        z = (0, d.K3)(R),
        U = null != n && (0, m.xt)(n),
        P = i.useMemo(() => {
            let e = (0, h.v1)(n);
            return null != e ? e : { startDate: a()(L) };
        }, [n, L]),
        [G, V] = i.useState(() => (0, h.zi)(a()(L), B)),
        w = i.useRef(null);
    i.useEffect(() => {
        if (b) {
            var e;
            null === (e = w.current) || void 0 === e || e.focus();
        }
    }, [b]);
    let F = (e) => {
            y({ image: e });
        },
        O = (e, n) => {
            if (null == e || void 0 === n) {
                F(null);
                return;
            }
            (0, s.openModalLazy)(async () => {
                let { default: i } = await Promise.all([t.e('70687'), t.e('48017'), t.e('40998')]).then(t.bind(t, 850085));
                return (t) =>
                    (0, l.jsx)(i, {
                        imgURI: e,
                        file: n,
                        onCrop: F,
                        uploadType: f.pC.SCHEDULED_EVENT_IMAGE,
                        allowSkip: !0,
                        ...t
                    });
            });
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: I.blockedUsersContainer,
                children: null != R && !U && (M > 0 || z > 0) && (0, l.jsx)(u.mv, { channelId: R })
            }),
            (0, l.jsxs)('div', {
                className: I.form,
                children: [
                    (0, l.jsxs)(s.FormItem, {
                        title: p.intl.string(p.t['0HbEQ0']),
                        className: I.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(s.TextInput, {
                                className: I.textInput,
                                onChange: (e) => {
                                    y({ name: e });
                                },
                                placeholder: p.intl.string(p.t['6/yarq']),
                                maxLength: j.p,
                                value: k,
                                autoComplete: 'off',
                                inputRef: w
                            }),
                            null != S
                                ? (0, l.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: I.warning,
                                      children: S.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(v.Z, {
                        className: I.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: n, endDate: t } = e,
                                l = {
                                    scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                    scheduledEndTime: null == t ? void 0 : t.toISOString()
                                };
                            null != n && null != D && (null == t ? void 0 : t.isBefore(n)) && (l.scheduledEndTime = n.add(1, 'hour').toISOString()), null != n && null != G && (l.recurrenceRule = (0, h.mF)(G, n)), y(l);
                        },
                        onRecurrenceChange: (e) => {
                            let n = P.startDate;
                            if (null != n) y({ recurrenceRule: (0, h.mF)(e, n) }), V(e);
                        },
                        schedule: P,
                        recurrenceRule: B,
                        showEndDate: Z === j.WX.EXTERNAL,
                        requireEndDate: Z === j.WX.EXTERNAL,
                        disableStartDateTime: U,
                        guildId: C
                    }),
                    null != T
                        ? (0, l.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: I.warning,
                              children: T
                          })
                        : null,
                    (0, l.jsx)(s.FormItem, {
                        title: p.intl.string(p.t['+gRCCw']),
                        className: I.formItem,
                        children: (0, l.jsx)(s.TextArea, {
                            className: I.__invalid_descriptionInput,
                            placeholder: p.intl.string(p.t['kWO/Ex']),
                            value: _,
                            onChange: (e) => {
                                y({ description: e });
                            },
                            maxLength: j.wm,
                            autosize: !0
                        })
                    }),
                    (0, l.jsxs)(s.FormItem, {
                        title: p.intl.string(p.t.Ly121d),
                        className: I.formItem,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: I.addImageHint,
                                children: p.intl.string(p.t.B9C9bW)
                            }),
                            null != A
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.Z, {
                                              className: I.imagePreview,
                                              iconWrapperClassName: I.imagePreviewInner,
                                              image: A,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != C) {
                                                      var t;
                                                      return null !== (t = (0, g.Z)((0, x.Gb)(n, C, r))) && void 0 !== t ? t : null;
                                                  }
                                              },
                                              onChange: O,
                                              hint: p.intl.string(p.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, l.jsx)(s.Button, {
                                              size: s.Button.Sizes.SMALL,
                                              onClick: () => F(null),
                                              children: p.intl.string(p.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, l.jsxs)(s.Button, {
                                      size: s.Button.Sizes.SMALL,
                                      children: [p.intl.string(p.t.vKCGYW), (0, l.jsx)(c.ZP, { onChange: O })]
                                  })
                        ]
                    }),
                    (0, l.jsx)(N, { editBroadcastInfoData: E })
                ]
            })
        ]
    });
}

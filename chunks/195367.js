t.d(n, {
    Z: function () {
        return p;
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
    x = t(924301),
    m = t(236373),
    h = t(854698),
    g = t(405613),
    v = t(440371),
    j = t(765305),
    f = t(486324),
    N = t(388032),
    I = t(378816);
function C(e) {
    let { editBroadcastInfoData: n } = e,
        { broadcastInfo: t, broadcastToDirectoryChannels: i, setBroadcastToDirectoryChannels: r, canEveryoneRoleViewEvent: a } = n;
    return t.can_broadcast
        ? (0, l.jsxs)(s.FormItem, {
              title: N.intl.string(N.t.BgAW29),
              className: I.formItem,
              children: [
                  (0, l.jsx)(s.Tooltip, {
                      text: (0, l.jsx)(s.Text, {
                          className: I.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: N.intl.string(N.t.gTgUmZ)
                      }),
                      'aria-label': N.intl.string(N.t.gTgUmZ),
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
                                      children: N.intl.string(N.t['8GW68/'])
                                  })
                              })
                          })
                  }),
                  (0, l.jsx)(s.Text, {
                      className: I.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: N.intl.string(N.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function p(e) {
    let { guildEvent: n, guildEventId: r, guildId: p, editBroadcastInfoData: E, error: T, validationErrorMessage: S, onChange: Z, canSetFocus: b = !1 } = e,
        { entityType: y, channelId: _, description: R, name: k, image: A, scheduledEndTime: D, scheduledStartTime: L, recurrenceRule: z } = n,
        B = (0, d._d)(_),
        P = (0, d.K3)(_),
        M = null != n && (0, x.xt)(n),
        U = i.useMemo(() => {
            let e = (0, h.v1)(n);
            return null != e ? e : { startDate: a()(L) };
        }, [n, L]),
        [G, V] = i.useState(() => (0, h.zi)(a()(L), z)),
        w = i.useRef(null);
    i.useEffect(() => {
        if (b) {
            var e;
            null === (e = w.current) || void 0 === e || e.focus();
        }
    }, [b]);
    let F = (e) => {
            Z({ image: e });
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
                children: null != _ && !M && (B > 0 || P > 0) && (0, l.jsx)(u.mv, { channelId: _ })
            }),
            (0, l.jsxs)('div', {
                className: I.form,
                children: [
                    (0, l.jsxs)(s.FormItem, {
                        title: N.intl.string(N.t['0HbEQ0']),
                        className: I.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(s.TextInput, {
                                className: I.textInput,
                                onChange: (e) => {
                                    Z({ name: e });
                                },
                                placeholder: N.intl.string(N.t['6/yarq']),
                                maxLength: j.p,
                                value: k,
                                autoComplete: 'off',
                                inputRef: w
                            }),
                            null != T
                                ? (0, l.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: I.warning,
                                      children: T.getAnyErrorMessage()
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
                            null != n && null != D && (null == t ? void 0 : t.isBefore(n)) && (l.scheduledEndTime = n.add(1, 'hour').toISOString()), null != n && null != G && (l.recurrenceRule = (0, h.mF)(G, n)), Z(l);
                        },
                        onRecurrenceChange: (e) => {
                            let n = U.startDate;
                            if (null != n) Z({ recurrenceRule: (0, h.mF)(e, n) }), V(e);
                        },
                        schedule: U,
                        recurrenceRule: z,
                        showEndDate: y === j.WX.EXTERNAL,
                        requireEndDate: y === j.WX.EXTERNAL,
                        disableStartDateTime: M,
                        guildId: p
                    }),
                    null != S
                        ? (0, l.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: I.warning,
                              children: S
                          })
                        : null,
                    (0, l.jsx)(s.FormItem, {
                        title: N.intl.string(N.t['+gRCCw']),
                        className: I.formItem,
                        children: (0, l.jsx)(s.TextArea, {
                            className: I.__invalid_descriptionInput,
                            placeholder: N.intl.string(N.t['kWO/Ex']),
                            value: R,
                            onChange: (e) => {
                                Z({ description: e });
                            },
                            maxLength: j.wm,
                            autosize: !0
                        })
                    }),
                    (0, l.jsxs)(s.FormItem, {
                        title: N.intl.string(N.t.Ly121d),
                        className: I.formItem,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: I.addImageHint,
                                children: N.intl.string(N.t.B9C9bW)
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
                                                  if (null != p) {
                                                      var t;
                                                      return null !== (t = (0, g.Z)((0, m.Gb)(n, p, r))) && void 0 !== t ? t : null;
                                                  }
                                              },
                                              onChange: O,
                                              hint: N.intl.string(N.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, l.jsx)(s.Button, {
                                              size: s.Button.Sizes.SMALL,
                                              onClick: () => F(null),
                                              children: N.intl.string(N.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, l.jsxs)(s.Button, {
                                      size: s.Button.Sizes.SMALL,
                                      children: [N.intl.string(N.t.vKCGYW), (0, l.jsx)(c.ZP, { onChange: O })]
                                  })
                        ]
                    }),
                    (0, l.jsx)(C, { editBroadcastInfoData: E })
                ]
            })
        ]
    });
}

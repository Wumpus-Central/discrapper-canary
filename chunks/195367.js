n.d(t, { Z: () => N }), n(953529), n(388685);
var l = n(255367),
    r = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(516129),
    c = n(345861),
    u = n(930180),
    d = n(320596),
    m = n(924301),
    x = n(236373),
    g = n(854698),
    h = n(405613),
    v = n(440371),
    f = n(765305),
    p = n(486324),
    j = n(388032),
    b = n(125383);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function O(e) {
    let { editBroadcastInfoData: t } = e,
        { broadcastInfo: n, broadcastToDirectoryChannels: r, setBroadcastToDirectoryChannels: i, canEveryoneRoleViewEvent: a } = t;
    return n.can_broadcast
        ? (0, l.jsxs)(s.xJW, {
              title: j.intl.string(j.t.BgAW29),
              className: b.formItem,
              children: [
                  (0, l.jsx)(s.ua7, {
                      text: (0, l.jsx)(s.Text, {
                          className: b.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: j.intl.string(j.t.gTgUmZ)
                      }),
                      'aria-label': j.intl.string(j.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) => {
                          var t, n;
                          return (0, l.jsx)(
                              'div',
                              ((t = y({}, e)),
                              (n = n =
                                  {
                                      children: (0, l.jsx)(s.XZJ, {
                                          type: s.XZJ.Types.INVERTED,
                                          disabled: !a,
                                          value: r,
                                          onChange: (e, t) => i(t),
                                          children: (0, l.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              color: 'interactive-active',
                                              children: j.intl.string(j.t['8GW68/'])
                                          })
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t)
                          );
                      }
                  }),
                  (0, l.jsx)(s.Text, {
                      className: b.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: j.intl.string(j.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function N(e) {
    let { guildEvent: t, guildEventId: i, guildId: N, editBroadcastInfoData: E, error: C, validationErrorMessage: I, onChange: S, canSetFocus: T = !1 } = e,
        { entityType: P, channelId: w, description: Z, name: k, image: _, scheduledEndTime: D, scheduledStartTime: R, recurrenceRule: A } = t,
        z = (0, u._d)(w),
        L = (0, u.K3)(w),
        U = null != t && (0, m.xt)(t),
        M = r.useMemo(() => {
            let e = (0, g.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [G, V] = r.useState(() => (0, g.zi)(a()(R), A)),
        X = r.useRef(null);
    r.useEffect(() => {
        if (T) {
            var e;
            null == (e = X.current) || e.focus();
        }
    }, [T]);
    let W = (e) => {
            S({ image: e });
        },
        F = (e, t) => {
            if (null == e || void 0 === t) return void W(null);
            (0, s.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
                return (n) =>
                    (0, l.jsx)(
                        r,
                        y(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return W(t);
                                },
                                uploadType: p.pC.SCHEDULED_EVENT_IMAGE
                            },
                            n
                        )
                    );
            });
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: b.blockedUsersContainer,
                children: null != w && !U && (z > 0 || L > 0) && (0, l.jsx)(d.mv, { channelId: w })
            }),
            (0, l.jsxs)('div', {
                className: b.form,
                children: [
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t['0HbEQ0']),
                        className: b.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(s.oil, {
                                className: b.textInput,
                                onChange: (e) => {
                                    S({ name: e });
                                },
                                placeholder: j.intl.string(j.t['6/yarq']),
                                maxLength: f.p,
                                value: k,
                                autoComplete: 'off',
                                inputRef: X
                            }),
                            null != C
                                ? (0, l.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: b.warning,
                                      children: C.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(v.Z, {
                        className: b.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                            null != t && null != D && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, 'hour').toISOString()), null != t && null != G && (l.recurrenceRule = (0, g.mF)(G, t)), S(l);
                        },
                        onRecurrenceChange: (e) => {
                            let t = M.startDate;
                            null != t && (S({ recurrenceRule: (0, g.mF)(e, t) }), V(e));
                        },
                        schedule: M,
                        recurrenceRule: A,
                        showEndDate: P === f.WX.EXTERNAL,
                        requireEndDate: P === f.WX.EXTERNAL,
                        disableStartDateTime: U,
                        guildId: N
                    }),
                    null != I
                        ? (0, l.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: b.warning,
                              children: I
                          })
                        : null,
                    (0, l.jsx)(s.xJW, {
                        title: j.intl.string(j.t['+gRCCw']),
                        className: b.formItem,
                        children: (0, l.jsx)(s.Kx8, {
                            className: b.__invalid_descriptionInput,
                            placeholder: j.intl.string(j.t['kWO/Ex']),
                            value: Z,
                            onChange: (e) => {
                                S({ description: e });
                            },
                            maxLength: f.wm,
                            autosize: !0
                        })
                    }),
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t.Ly121d),
                        className: b.formItem,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: b.addImageHint,
                                children: j.intl.string(j.t.B9C9bW)
                            }),
                            null != _
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.Z, {
                                              className: b.imagePreview,
                                              iconWrapperClassName: b.imagePreviewInner,
                                              image: _,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != N) {
                                                      var n;
                                                      return null != (n = (0, h.Z)((0, x.Gb)(t, N, i))) ? n : null;
                                                  }
                                              },
                                              onChange: F,
                                              hint: j.intl.string(j.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, l.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              onClick: () => W(null),
                                              children: j.intl.string(j.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, l.jsx)(c.Z, {
                                      size: s.zxk.Sizes.SMALL,
                                      onChange: F,
                                      buttonCTA: j.intl.string(j.t.vKCGYW)
                                  })
                        ]
                    }),
                    (0, l.jsx)(O, { editBroadcastInfoData: E })
                ]
            })
        ]
    });
}

(n.d(t, { Z: () => O }), n(953529), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(516129),
    c = n(345861),
    u = n(930180),
    d = n(320596),
    x = n(924301),
    m = n(236373),
    g = n(854698),
    h = n(405613),
    v = n(440371),
    f = n(765305),
    p = n(486324),
    j = n(388032),
    y = n(125383);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function E(e) {
    let { editBroadcastInfoData: t } = e,
        { broadcastInfo: n, broadcastToDirectoryChannels: r, setBroadcastToDirectoryChannels: i, canEveryoneRoleViewEvent: a } = t;
    return n.can_broadcast
        ? (0, l.jsxs)(s.xJW, {
              title: j.intl.string(j.t.BgAW29),
              className: y.formItem,
              children: [
                  (0, l.jsx)(s.ua7, {
                      text: (0, l.jsx)(s.Text, {
                          className: y.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: j.intl.string(j.t.gTgUmZ)
                      }),
                      'aria-label': j.intl.string(j.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) => {
                          var t, n;
                          return (0, l.jsx)(
                              'div',
                              ((t = b({}, e)),
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
                      className: y.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: j.intl.string(j.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function O(e) {
    let { guildEvent: t, guildEventId: i, guildId: O, editBroadcastInfoData: N, error: C, validationErrorMessage: S, onChange: T, canSetFocus: I = !1 } = e,
        { entityType: P, channelId: Z, description: w, name: D, image: _, scheduledEndTime: k, scheduledStartTime: R, recurrenceRule: L } = t,
        A = (0, u._d)(Z),
        z = (0, u.K3)(Z),
        M = null != t && (0, x.xt)(t),
        G = r.useMemo(() => {
            let e = (0, g.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [X, V] = r.useState(() => (0, g.zi)(a()(R), L)),
        W = r.useRef(null);
    r.useEffect(() => {
        if (I) {
            var e;
            null == (e = W.current) || e.focus();
        }
    }, [I]);
    let U = (e) => {
            T({ image: e });
        },
        q = (e, t) => {
            if (null == e || void 0 === t) return void U(null);
            (0, s.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
                return (n) =>
                    (0, l.jsx)(
                        r,
                        b(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return U(t);
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
                className: y.blockedUsersContainer,
                children: null != Z && !M && (A > 0 || z > 0) && (0, l.jsx)(d.mv, { channelId: Z })
            }),
            (0, l.jsxs)('div', {
                className: y.form,
                children: [
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t['0HbEQ0']),
                        className: y.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(s.oil, {
                                className: y.textInput,
                                onChange: (e) => {
                                    T({ name: e });
                                },
                                placeholder: j.intl.string(j.t['6/yarq']),
                                maxLength: f.p,
                                value: D,
                                autoComplete: 'off',
                                inputRef: W
                            }),
                            null != C
                                ? (0, l.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: y.warning,
                                      children: C.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(v.Z, {
                        className: y.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                            (null != t && null != k && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, 'hour').toISOString()), null != t && null != X && (l.recurrenceRule = (0, g.mF)(X, t)), T(l));
                        },
                        onRecurrenceChange: (e) => {
                            let t = G.startDate;
                            null != t && (T({ recurrenceRule: (0, g.mF)(e, t) }), V(e));
                        },
                        schedule: G,
                        recurrenceRule: L,
                        showEndDate: P === f.WX.EXTERNAL,
                        requireEndDate: P === f.WX.EXTERNAL,
                        disableStartDateTime: M,
                        guildId: O
                    }),
                    null != S
                        ? (0, l.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: y.warning,
                              children: S
                          })
                        : null,
                    (0, l.jsx)(s.xJW, {
                        title: j.intl.string(j.t['+gRCCw']),
                        className: y.formItem,
                        children: (0, l.jsx)(s.Kx8, {
                            className: y.__invalid_descriptionInput,
                            placeholder: j.intl.string(j.t['kWO/Ex']),
                            value: w,
                            onChange: (e) => {
                                T({ description: e });
                            },
                            maxLength: f.wm,
                            autosize: !0
                        })
                    }),
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t.Ly121d),
                        className: y.formItem,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: y.addImageHint,
                                children: j.intl.string(j.t.B9C9bW)
                            }),
                            null != _
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.Z, {
                                              className: y.imagePreview,
                                              iconWrapperClassName: y.imagePreviewInner,
                                              image: _,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != O) {
                                                      var n;
                                                      return null != (n = (0, h.Z)((0, m.Gb)(t, O, i))) ? n : null;
                                                  }
                                              },
                                              onChange: q,
                                              hint: j.intl.string(j.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, l.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              onClick: () => U(null),
                                              children: j.intl.string(j.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, l.jsx)(c.Z, {
                                      size: s.zxk.Sizes.SMALL,
                                      onChange: q,
                                      buttonCTA: j.intl.string(j.t.vKCGYW)
                                  })
                        ]
                    }),
                    (0, l.jsx)(E, { editBroadcastInfoData: N })
                ]
            })
        ]
    });
}

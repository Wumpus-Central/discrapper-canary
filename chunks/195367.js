(n.d(t, { Z: () => N }), n(953529), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(755721),
    o = n(481060),
    c = n(516129),
    u = n(345861),
    d = n(930180),
    x = n(320596),
    m = n(924301),
    g = n(236373),
    v = n(854698),
    h = n(405613),
    f = n(440371),
    p = n(765305),
    j = n(486324),
    y = n(388032),
    b = n(125383);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e) {
    let { editBroadcastInfoData: t } = e,
        { broadcastInfo: n, broadcastToDirectoryChannels: l, setBroadcastToDirectoryChannels: i, canEveryoneRoleViewEvent: a } = t;
    return n.can_broadcast
        ? (0, r.jsxs)(o.xJW, {
              title: y.intl.string(y.t.BgAW29),
              className: b.formItem,
              children: [
                  (0, r.jsx)(o.ua7, {
                      text: (0, r.jsx)(o.Text, {
                          className: b.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: y.intl.string(y.t.gTgUmZ)
                      }),
                      'aria-label': y.intl.string(y.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              'div',
                              ((t = E({}, e)),
                              (n = n =
                                  {
                                      children: (0, r.jsx)(o.XZJ, {
                                          type: o.XZJ.Types.INVERTED,
                                          disabled: !a,
                                          value: l,
                                          onChange: (e, t) => i(t),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              color: 'interactive-active',
                                              children: y.intl.string(y.t['8GW68/'])
                                          })
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t)
                          );
                      }
                  }),
                  (0, r.jsx)(o.Text, {
                      className: b.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: y.intl.string(y.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function N(e) {
    let { guildEvent: t, guildEventId: i, guildId: N, editBroadcastInfoData: T, error: S, validationErrorMessage: I, onChange: Z, canSetFocus: P = !1 } = e,
        { entityType: w, channelId: D, description: _, name: R, image: A, scheduledEndTime: G, scheduledStartTime: k, recurrenceRule: M } = t,
        L = (0, d._d)(D),
        X = (0, d.K3)(D),
        V = null != t && (0, m.xt)(t),
        W = l.useMemo(() => {
            let e = (0, v.v1)(t);
            return null != e ? e : { startDate: a()(k) };
        }, [t, k]),
        [z, U] = l.useState(() => (0, v.zi)(a()(k), M)),
        B = l.useRef(null);
    l.useEffect(() => {
        if (P) {
            var e;
            null == (e = B.current) || e.focus();
        }
    }, [P]);
    let F = (e) => {
            Z({ image: e });
        },
        q = (e, t) => {
            if (null == e || void 0 === t) return void F(null);
            (0, o.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        E(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return F(t);
                                },
                                uploadType: j.pC.SCHEDULED_EVENT_IMAGE
                            },
                            n
                        )
                    );
            });
        },
        H = null == S ? void 0 : S.getFirstFieldErrorMessage('name'),
        Y = null == S ? void 0 : S.getFirstFieldErrorMessage('description'),
        J = null == H && null == Y ? (null == S ? void 0 : S.getAnyErrorMessage()) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: b.blockedUsersContainer,
                children: null != D && !V && (L > 0 || X > 0) && (0, r.jsx)(x.mv, { channelId: D })
            }),
            (0, r.jsxs)('div', {
                className: b.form,
                children: [
                    (0, r.jsxs)(o.xJW, {
                        title: y.intl.string(y.t['0HbEQ0']),
                        className: b.topicFormItem,
                        required: !0,
                        children: [
                            (0, r.jsx)(s.Is, {
                                className: b.textInput,
                                onChange: (e) => {
                                    Z({ name: e });
                                },
                                placeholder: y.intl.string(y.t['6/yarq']),
                                maxLength: p.p,
                                value: R,
                                autoComplete: 'off',
                                inputRef: B
                            }),
                            (0, r.jsx)(C, { error: H }),
                            (0, r.jsx)(C, { error: J })
                        ]
                    }),
                    (0, r.jsx)(f.Z, {
                        className: b.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                r = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                            (null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (r.scheduledEndTime = t.add(1, 'hour').toISOString()), null != t && null != z && (r.recurrenceRule = (0, v.mF)(z, t)), Z(r));
                        },
                        onRecurrenceChange: (e) => {
                            let t = W.startDate;
                            null != t && (Z({ recurrenceRule: (0, v.mF)(e, t) }), U(e));
                        },
                        schedule: W,
                        recurrenceRule: M,
                        showEndDate: w === p.WX.EXTERNAL,
                        requireEndDate: w === p.WX.EXTERNAL,
                        disableStartDateTime: V,
                        guildId: N
                    }),
                    (0, r.jsx)(C, { error: I }),
                    (0, r.jsxs)(o.xJW, {
                        title: y.intl.string(y.t['+gRCCw']),
                        className: b.formItem,
                        children: [
                            (0, r.jsx)(s.iS, {
                                placeholder: y.intl.string(y.t['kWO/Ex']),
                                value: _,
                                onChange: (e) => {
                                    Z({ description: e });
                                },
                                maxLength: p.wm,
                                autosize: !0
                            }),
                            (0, r.jsx)(C, { error: Y })
                        ]
                    }),
                    (0, r.jsxs)(o.xJW, {
                        title: y.intl.string(y.t.Ly121d),
                        className: b.formItem,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: b.addImageHint,
                                children: y.intl.string(y.t.B9C9bW)
                            }),
                            null != A
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.Z, {
                                              className: b.imagePreview,
                                              iconWrapperClassName: b.imagePreviewInner,
                                              image: A,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != N) {
                                                      var n;
                                                      return null != (n = (0, h.Z)((0, g.Gb)(t, N, i))) ? n : null;
                                                  }
                                              },
                                              onChange: q,
                                              hint: y.intl.string(y.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, r.jsx)(o.zxk, {
                                              variant: 'primary',
                                              size: 'sm',
                                              text: y.intl.string(y.t.gmUvOz),
                                              onClick: () => F(null)
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(u.Z, {
                                      size: s.zx.Sizes.SMALL,
                                      onChange: q,
                                      buttonCTA: y.intl.string(y.t.vKCGYW)
                                  })
                        ]
                    }),
                    (0, r.jsx)(O, { editBroadcastInfoData: T })
                ]
            })
        ]
    });
}
function C(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(o.Text, {
              color: 'text-danger',
              variant: 'text-xs/normal',
              className: b.warning,
              children: t
          });
}

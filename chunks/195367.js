n.d(t, { Z: () => O }), n(953529), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(516129),
    c = n(345861),
    u = n(930180),
    d = n(320596),
    m = n(924301),
    h = n(236373),
    x = n(854698),
    g = n(405613),
    p = n(440371),
    f = n(765305),
    v = n(486324),
    b = n(388032),
    j = n(125383);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e) {
    let { editBroadcastInfoData: t } = e,
        { broadcastInfo: n, broadcastToDirectoryChannels: l, setBroadcastToDirectoryChannels: i, canEveryoneRoleViewEvent: a } = t;
    return n.can_broadcast
        ? (0, r.jsxs)(s.xJW, {
              title: b.NW.string(b.t.BgAW29),
              className: j.formItem,
              children: [
                  (0, r.jsx)(s.ua7, {
                      text: (0, r.jsx)(s.Text, {
                          className: j.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: b.NW.string(b.t.gTgUmZ)
                      }),
                      'aria-label': b.NW.string(b.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              'div',
                              ((t = y({}, e)),
                              (n = n =
                                  {
                                      children: (0, r.jsx)(s.XZJ, {
                                          type: s.XZJ.Types.INVERTED,
                                          disabled: !a,
                                          value: l,
                                          onChange: (e, t) => i(t),
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              color: 'interactive-active',
                                              children: b.NW.string(b.t['8GW68/'])
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
                  (0, r.jsx)(s.Text, {
                      className: j.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: b.NW.string(b.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function O(e) {
    let { guildEvent: t, guildEventId: i, guildId: O, editBroadcastInfoData: E, error: S, validationErrorMessage: C, onChange: P, canSetFocus: I = !1 } = e,
        { entityType: T, channelId: w, description: W, name: Z, image: k, scheduledEndTime: D, scheduledStartTime: R, recurrenceRule: _ } = t,
        A = (0, u._d)(w),
        z = (0, u.K3)(w),
        L = null != t && (0, m.xt)(t),
        U = l.useMemo(() => {
            let e = (0, x.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [M, G] = l.useState(() => (0, x.zi)(a()(R), _)),
        V = l.useRef(null);
    l.useEffect(() => {
        if (I) {
            var e;
            null == (e = V.current) || e.focus();
        }
    }, [I]);
    let F = (e) => {
            P({ image: e });
        },
        X = (e, t) => {
            if (null == e || void 0 === t) return void F(null);
            (0, s.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        y(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return F(t);
                                },
                                uploadType: v.pC.SCHEDULED_EVENT_IMAGE
                            },
                            n
                        )
                    );
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.blockedUsersContainer,
                children: null != w && !L && (A > 0 || z > 0) && (0, r.jsx)(d.mv, { channelId: w })
            }),
            (0, r.jsxs)('div', {
                className: j.form,
                children: [
                    (0, r.jsxs)(s.xJW, {
                        title: b.NW.string(b.t['0HbEQ0']),
                        className: j.topicFormItem,
                        required: !0,
                        children: [
                            (0, r.jsx)(s.oil, {
                                className: j.textInput,
                                onChange: (e) => {
                                    P({ name: e });
                                },
                                placeholder: b.NW.string(b.t['6/yarq']),
                                maxLength: f.p,
                                value: Z,
                                autoComplete: 'off',
                                inputRef: V
                            }),
                            null != S
                                ? (0, r.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: j.warning,
                                      children: S.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(p.Z, {
                        className: j.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                r = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                            null != t && null != D && (null == n ? void 0 : n.isBefore(t)) && (r.scheduledEndTime = t.add(1, 'hour').toISOString()), null != t && null != M && (r.recurrenceRule = (0, x.mF)(M, t)), P(r);
                        },
                        onRecurrenceChange: (e) => {
                            let t = U.startDate;
                            null != t && (P({ recurrenceRule: (0, x.mF)(e, t) }), G(e));
                        },
                        schedule: U,
                        recurrenceRule: _,
                        showEndDate: T === f.WX.EXTERNAL,
                        requireEndDate: T === f.WX.EXTERNAL,
                        disableStartDateTime: L,
                        guildId: O
                    }),
                    null != C
                        ? (0, r.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: j.warning,
                              children: C
                          })
                        : null,
                    (0, r.jsx)(s.xJW, {
                        title: b.NW.string(b.t['+gRCCw']),
                        className: j.formItem,
                        children: (0, r.jsx)(s.Kx8, {
                            className: j.__invalid_descriptionInput,
                            placeholder: b.NW.string(b.t['kWO/Ex']),
                            value: W,
                            onChange: (e) => {
                                P({ description: e });
                            },
                            maxLength: f.wm,
                            autosize: !0
                        })
                    }),
                    (0, r.jsxs)(s.xJW, {
                        title: b.NW.string(b.t.Ly121d),
                        className: j.formItem,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: j.addImageHint,
                                children: b.NW.string(b.t.B9C9bW)
                            }),
                            null != k
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.Z, {
                                              className: j.imagePreview,
                                              iconWrapperClassName: j.imagePreviewInner,
                                              image: k,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != O) {
                                                      var n;
                                                      return null != (n = (0, g.Z)((0, h.Gb)(t, O, i))) ? n : null;
                                                  }
                                              },
                                              onChange: X,
                                              hint: b.NW.string(b.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, r.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              onClick: () => F(null),
                                              children: b.NW.string(b.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(c.Z, {
                                      size: s.zxk.Sizes.SMALL,
                                      onChange: X,
                                      buttonCTA: b.NW.string(b.t.vKCGYW)
                                  })
                        ]
                    }),
                    (0, r.jsx)(N, { editBroadcastInfoData: E })
                ]
            })
        ]
    });
}

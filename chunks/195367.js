n.d(t, { Z: () => O }), n(266796), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(913527),
    i = n.n(a),
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
    N = n(125383);
function b(e) {
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
function y(e) {
    let { editBroadcastInfoData: t } = e,
        { broadcastInfo: n, broadcastToDirectoryChannels: l, setBroadcastToDirectoryChannels: a, canEveryoneRoleViewEvent: i } = t;
    return n.can_broadcast
        ? (0, r.jsxs)(s.xJW, {
              title: j.NW.string(j.t.BgAW29),
              className: N.formItem,
              children: [
                  (0, r.jsx)(s.ua7, {
                      text: (0, r.jsx)(s.Text, {
                          className: N.broadcastInfoTooltip,
                          variant: 'text-sm/normal',
                          children: j.NW.string(j.t.gTgUmZ)
                      }),
                      'aria-label': j.NW.string(j.t.gTgUmZ),
                      shouldShow: !i,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              'div',
                              ((t = b({}, e)),
                              (n = n =
                                  {
                                      children: (0, r.jsx)(s.XZJ, {
                                          type: s.XZJ.Types.INVERTED,
                                          disabled: !i,
                                          value: l,
                                          onChange: (e, t) => a(t),
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              color: 'interactive-active',
                                              children: j.NW.string(j.t['8GW68/'])
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
                      className: N.broadcastInfoDescription,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: j.NW.string(j.t.V8Oq8P)
                  })
              ]
          })
        : null;
}
function O(e) {
    let { guildEvent: t, guildEventId: a, guildId: O, editBroadcastInfoData: E, error: C, validationErrorMessage: I, onChange: S, canSetFocus: T = !1 } = e,
        { entityType: P, channelId: W, description: w, name: Z, image: k, scheduledEndTime: _, scheduledStartTime: D, recurrenceRule: R } = t,
        A = (0, u._d)(W),
        z = (0, u.K3)(W),
        L = null != t && (0, m.xt)(t),
        U = l.useMemo(() => {
            let e = (0, g.v1)(t);
            return null != e ? e : { startDate: i()(D) };
        }, [t, D]),
        [M, G] = l.useState(() => (0, g.zi)(i()(D), R)),
        V = l.useRef(null);
    l.useEffect(() => {
        if (T) {
            var e;
            null == (e = V.current) || e.focus();
        }
    }, [T]);
    let X = (e) => {
            S({ image: e });
        },
        F = (e, t) => {
            if (null == e || void 0 === t) return void X(null);
            (0, s.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('43434')]).then(n.bind(n, 73620));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        b(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return X(t);
                                },
                                uploadType: p.pC.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0
                            },
                            n
                        )
                    );
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: N.blockedUsersContainer,
                children: null != W && !L && (A > 0 || z > 0) && (0, r.jsx)(d.mv, { channelId: W })
            }),
            (0, r.jsxs)('div', {
                className: N.form,
                children: [
                    (0, r.jsxs)(s.xJW, {
                        title: j.NW.string(j.t['0HbEQ0']),
                        className: N.topicFormItem,
                        required: !0,
                        children: [
                            (0, r.jsx)(s.oil, {
                                className: N.textInput,
                                onChange: (e) => {
                                    S({ name: e });
                                },
                                placeholder: j.NW.string(j.t['6/yarq']),
                                maxLength: f.p,
                                value: Z,
                                autoComplete: 'off',
                                inputRef: V
                            }),
                            null != C
                                ? (0, r.jsx)(s.Text, {
                                      color: 'text-danger',
                                      variant: 'text-xs/normal',
                                      className: N.warning,
                                      children: C.getAnyErrorMessage()
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(v.Z, {
                        className: N.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                r = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                            null != t && null != _ && (null == n ? void 0 : n.isBefore(t)) && (r.scheduledEndTime = t.add(1, 'hour').toISOString()), null != t && null != M && (r.recurrenceRule = (0, g.mF)(M, t)), S(r);
                        },
                        onRecurrenceChange: (e) => {
                            let t = U.startDate;
                            null != t && (S({ recurrenceRule: (0, g.mF)(e, t) }), G(e));
                        },
                        schedule: U,
                        recurrenceRule: R,
                        showEndDate: P === f.WX.EXTERNAL,
                        requireEndDate: P === f.WX.EXTERNAL,
                        disableStartDateTime: L,
                        guildId: O
                    }),
                    null != I
                        ? (0, r.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-xs/normal',
                              className: N.warning,
                              children: I
                          })
                        : null,
                    (0, r.jsx)(s.xJW, {
                        title: j.NW.string(j.t['+gRCCw']),
                        className: N.formItem,
                        children: (0, r.jsx)(s.Kx8, {
                            className: N.__invalid_descriptionInput,
                            placeholder: j.NW.string(j.t['kWO/Ex']),
                            value: w,
                            onChange: (e) => {
                                S({ description: e });
                            },
                            maxLength: f.wm,
                            autosize: !0
                        })
                    }),
                    (0, r.jsxs)(s.xJW, {
                        title: j.NW.string(j.t.Ly121d),
                        className: N.formItem,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: N.addImageHint,
                                children: j.NW.string(j.t.B9C9bW)
                            }),
                            null != k
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(o.Z, {
                                              className: N.imagePreview,
                                              iconWrapperClassName: N.imagePreviewInner,
                                              image: k,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != O) {
                                                      var n;
                                                      return null != (n = (0, h.Z)((0, x.Gb)(t, O, a))) ? n : null;
                                                  }
                                              },
                                              onChange: F,
                                              hint: j.NW.string(j.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0
                                          }),
                                          (0, r.jsx)(s.zxk, {
                                              size: s.zxk.Sizes.SMALL,
                                              onClick: () => X(null),
                                              children: j.NW.string(j.t.gmUvOz)
                                          })
                                      ]
                                  })
                                : (0, r.jsx)(c.Z, {
                                      size: s.zxk.Sizes.SMALL,
                                      onChange: F,
                                      buttonCTA: j.NW.string(j.t.vKCGYW)
                                  })
                        ]
                    }),
                    (0, r.jsx)(y, { editBroadcastInfoData: E })
                ]
            })
        ]
    });
}

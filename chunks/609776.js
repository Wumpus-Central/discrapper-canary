n.d(t, { Z: () => w }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(493773),
    d = n(933557),
    u = n(884746),
    h = n(854698),
    g = n(13664),
    _ = n(440371),
    m = n(810788),
    b = n(699516),
    f = n(594174),
    x = n(626135),
    p = n(570188),
    v = n(427679),
    j = n(930180),
    N = n(320596),
    I = n(157925),
    O = n(981631),
    y = n(765305),
    C = n(190378),
    E = n(388032),
    S = n(994208);
function T(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, r.jsx)(c.xJW, {
              title: E.intl.string(E.t.S7GjDw) + ' asdf',
              className: S.channelSelectionFormItem,
              required: !0,
              children: (0, r.jsx)(c.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, d.F6)(e, f.default, b.Z, !0)
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && i(n);
                  },
                  renderOptionPrefix: () =>
                      (0, r.jsx)(c.ewx, {
                          size: 'custom',
                          color: 'currentColor',
                          height: 24
                      })
              })
          });
}
function w(e) {
    var t, n, l, b, f, w;
    let { channel: P, guild: k, header: A, error: D, loading: R, onSave: Z, onEventSave: G, onClose: L, onSelectChannel: B, isEvent: M = !1, defaultOptions: U, isSlideReady: z = !0 } = e,
        F = i.useMemo(() => v.Z.getStageInstanceByChannel(P.id), [P.id]),
        [V, W] = i.useState(null != (n = null != (t = null == U ? void 0 : U.topic) ? t : null == F ? void 0 : F.topic) ? n : ''),
        [H, q] = i.useState(null != (l = null == U ? void 0 : U.description) ? l : ''),
        [J] = i.useState(M),
        [K, Y] = i.useState(null != (b = null == U ? void 0 : U.schedule) ? b : { startDate: (0, h.ib)() }),
        [X, Q] = i.useState(J && (null == U ? void 0 : U.schedule) != null),
        $ = (0, p.J)(P),
        ee = (0, p.U)(P),
        et = null == F && $ && !J,
        [en, er] = i.useState(et && ee),
        ei = (0, o.e7)([m.Z], () => m.Z.hasHotspot(C.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        el = y.j8.GUILD_ONLY,
        [ea] = i.useState(null != (w = null != (f = null == U ? void 0 : U.privacyLevel) ? f : null == F ? void 0 : F.privacy_level) ? w : el),
        [eo, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
        es = (0, j._d)(P.id),
        ed = (0, j.K3)(P.id),
        [eu, eh] = i.useState(!1),
        eg = (0, d.ZP)(P),
        e_ = (0, u.q)(k),
        em = null != B,
        eb = e_.length > 1;
    (0, s.ZP)(() => {
        x.default.track(O.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == F ? void 0 : F.id,
            can_start_public_stage: !1,
            guild_id: P.guild_id
        });
    });
    let ef = (e) => {
            if ((e.preventDefault(), ea === y.j8.PUBLIC && V.length < 20 && !eu)) return void eh(!0);
            let t = {
                topic: V,
                privacyLevel: ea,
                sendStartNotification: en
            };
            if (J) {
                var n, r;
                if (!X) return;
                null == G ||
                    G(
                        ((n = (function (e) {
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
                        })({}, t)),
                        (r = r =
                            {
                                schedule: K,
                                description: H,
                                entityType: y.WX.STAGE_INSTANCE
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    );
                return;
            }
            null == Z || Z(t);
        },
        { color: ex, text: ep } = J
            ? {
                  color: c.zxk.Colors.BRAND,
                  text: E.intl.string(E.t['60lJ0N'])
              }
            : ea === y.j8.PUBLIC && (null == F ? void 0 : F.privacy_level) !== y.j8.PUBLIC
              ? {
                    color: c.zxk.Colors.BRAND,
                    text: E.intl.string(E.t['3PatS0'])
                }
              : null == F
                ? {
                      color: c.zxk.Colors.BRAND,
                      text: E.intl.string(E.t.s8mM8P)
                  }
                : {
                      color: c.zxk.Colors.BRAND,
                      text: E.intl.string(E.t.K344S0)
                  },
        ev = i.useRef(null);
    i.useEffect(() => {
        var e;
        z && (null == (e = ev.current) || e.focus());
    }, [z]);
    let ej = X && null != K.startDate && K.startDate >= a()();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.hzk, {
                className: S.modalContent,
                children: [
                    A,
                    (0, r.jsx)('div', {
                        className: S.blockedUsersContainer,
                        children: null == F && (es > 0 || ed > 0) && (0, r.jsx)(N.mv, { channelId: P.id })
                    }),
                    (0, r.jsxs)('form', {
                        onSubmit: ef,
                        className: S.form,
                        children: [
                            (0, r.jsxs)(c.xJW, {
                                title: M ? E.intl.string(E.t['0HbEQ0']) : E.intl.string(E.t['5FPBOD']),
                                className: S.topicFormItem,
                                required: !0,
                                children: [
                                    (0, r.jsx)(c.oil, {
                                        className: S.textInput,
                                        onChange: (e) => W(e),
                                        placeholder: E.intl.string(E.t.ZwWrub),
                                        maxLength: I.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: ev
                                    }),
                                    eu &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-feedback-warning',
                                            className: S.warning,
                                            children: E.intl.string(E.t.AqTyaW)
                                        }),
                                    null != D
                                        ? (0, r.jsx)(c.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: S.warning,
                                              children: D.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            em && eb
                                ? (0, r.jsx)(T, {
                                      stageChannelsInGuild: e_,
                                      channel: P,
                                      onSelectChannel: B
                                  })
                                : null,
                            J &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            className: S.formItem,
                                            onScheduleChange: Y,
                                            onRecurrenceChange: (e) => {
                                                let t = K.startDate;
                                                null != t && ec((0, h.mF)(e, t));
                                            },
                                            schedule: K,
                                            recurrenceRule: eo,
                                            timeSelected: X,
                                            onTimeChange: Q
                                        }),
                                        null != K.startDate && K.startDate < a()()
                                            ? (0, r.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: S.warning,
                                                  children: E.intl.string(E.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            M &&
                                (0, r.jsx)(c.xJW, {
                                    title: E.intl.string(E.t['+gRCCw']),
                                    className: S.formItem,
                                    children: (0, r.jsx)(c.Kx8, {
                                        placeholder: E.intl.string(E.t['kWO/Ex']),
                                        value: H,
                                        onChange: (e) => q(e),
                                        maxLength: y.wm
                                    })
                                }),
                            et
                                ? (0, r.jsx)(g.Z, {
                                      sendStartNotification: en,
                                      setSendStartNotification: er,
                                      showNotificationNewBadge: ei
                                  })
                                : null,
                            em && !eb
                                ? (0, r.jsx)(c.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: S.channelSelection,
                                      children: E.intl.format(E.t['S+9O7u'], {
                                          stageName: eg,
                                          stageHook: (e, t) =>
                                              (0, r.jsx)(
                                                  'span',
                                                  {
                                                      className: S.channelName,
                                                      children: P.name
                                                  },
                                                  t
                                              )
                                      })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                children: [
                    (0, r.jsx)(c.zxk, {
                        color: ex,
                        onClick: ef,
                        disabled: '' === V || null == ea || (M && !ej),
                        submitting: R,
                        children: ep
                    }),
                    (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        className: S.cancelButton,
                        onClick: L,
                        children: E.intl.string(E.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

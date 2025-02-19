n.d(t, { Z: () => w }), n(47120), n(266796);
var r = n(200651),
    a = n(192379),
    i = n(913527),
    o = n.n(i),
    l = n(442837),
    c = n(481060),
    s = n(493773),
    d = n(933557),
    u = n(540059),
    _ = n(77810),
    m = n(854698),
    b = n(13664),
    h = n(440371),
    g = n(810788),
    p = n(699516),
    f = n(594174),
    x = n(626135),
    v = n(570188),
    N = n(427679),
    j = n(930180),
    I = n(46920),
    y = n(157925),
    C = n(981631),
    O = n(765305),
    S = n(190378),
    E = n(388032),
    T = n(968879);
function P(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(c.xJW, {
                  title: E.NW.string(E.t.S7GjDw) + ' asdf',
                  className: T.channelSelectionFormItem,
                  required: !0,
                  children: (0, r.jsx)(c.VcW, {
                      value: n.id,
                      options: t.map((e) => ({
                          value: e.id,
                          label: (0, d.F6)(e, f.default, p.Z, !0)
                      })),
                      onChange: (e) => {
                          let n = t.find((t) => t.id === e);
                          null != n && a(n);
                      },
                      renderOptionPrefix: () =>
                          (0, r.jsx)(c.ewx, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function w(e) {
    var t, n, i, p, f, w;
    let { channel: k, guild: A, header: D, error: G, loading: R, onSave: W, onEventSave: Z, onClose: L, onSelectChannel: B, isEvent: M = !1, defaultOptions: U, isSlideReady: z = !0 } = e,
        F = a.useMemo(() => N.Z.getStageInstanceByChannel(k.id), [k.id]),
        [H, V] = a.useState(null !== (n = null !== (t = null == U ? void 0 : U.topic) && void 0 !== t ? t : null == F ? void 0 : F.topic) && void 0 !== n ? n : ''),
        [q, J] = a.useState(null !== (i = null == U ? void 0 : U.description) && void 0 !== i ? i : ''),
        [K] = a.useState(M),
        [Y, X] = a.useState(null !== (p = null == U ? void 0 : U.schedule) && void 0 !== p ? p : { startDate: (0, m.ib)() }),
        [Q, $] = a.useState(K && (null == U ? void 0 : U.schedule) != null),
        ee = (0, v.J)(k),
        et = (0, v.U)(k),
        en = null == F && ee && !K,
        [er, ea] = a.useState(en && et),
        ei = (0, l.e7)([g.Z], () => g.Z.hasHotspot(S.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        eo = O.j8.GUILD_ONLY,
        [el] = a.useState(null !== (w = null !== (f = null == U ? void 0 : U.privacyLevel) && void 0 !== f ? f : null == F ? void 0 : F.privacy_level) && void 0 !== w ? w : eo),
        [ec, es] = a.useState(null == U ? void 0 : U.recurrenceRule),
        ed = (0, j._d)(k.id),
        eu = (0, j.K3)(k.id),
        [e_, em] = a.useState(!1),
        eb = (0, u.Q3)('StageChannelSettings'),
        eh = (0, d.ZP)(k),
        eg = (0, _.q)(A),
        ep = null != B,
        ef = eg.length > 1;
    (0, s.ZP)(() => {
        x.default.track(C.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == F ? void 0 : F.id,
            can_start_public_stage: !1,
            guild_id: k.guild_id
        });
    });
    let ex = (e) => {
            if ((e.preventDefault(), el === O.j8.PUBLIC && H.length < 20 && !e_)) {
                em(!0);
                return;
            }
            let t = {
                topic: H,
                privacyLevel: el,
                sendStartNotification: er
            };
            if (K) {
                var n, r;
                if (!Q) return;
                null == Z ||
                    Z(
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
                                schedule: Y,
                                description: q,
                                entityType: O.WX.STAGE_INSTANCE
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
            null == W || W(t);
        },
        { color: ev, text: eN } = K
            ? {
                  color: c.zxk.Colors.BRAND,
                  text: E.NW.string(E.t['60lJ0N'])
              }
            : el === O.j8.PUBLIC && (null == F ? void 0 : F.privacy_level) !== O.j8.PUBLIC
              ? {
                    color: c.zxk.Colors.BRAND,
                    text: E.NW.string(E.t['3PatS0'])
                }
              : null == F
                ? {
                      color: eb ? c.zxk.Colors.BRAND : c.zxk.Colors.GREEN,
                      text: E.NW.string(E.t.s8mM8P)
                  }
                : {
                      color: c.zxk.Colors.BRAND,
                      text: E.NW.string(E.t.K344S0)
                  },
        ej = a.useRef(null);
    a.useEffect(() => {
        var e;
        z && (null === (e = ej.current) || void 0 === e || e.focus());
    }, [z]);
    let eI = Q && null != Y.startDate && Y.startDate >= o()();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.hzk, {
                className: T.modalContent,
                children: [
                    D,
                    (0, r.jsx)('div', {
                        className: T.blockedUsersContainer,
                        children: null == F && (ed > 0 || eu > 0) && (0, r.jsx)(I.mv, { channelId: k.id })
                    }),
                    (0, r.jsxs)('form', {
                        onSubmit: ex,
                        className: T.form,
                        children: [
                            (0, r.jsxs)(c.xJW, {
                                title: M ? E.NW.string(E.t['0HbEQ0']) : E.NW.string(E.t['5FPBOD']),
                                className: T.topicFormItem,
                                required: !0,
                                children: [
                                    (0, r.jsx)(c.oil, {
                                        className: T.textInput,
                                        onChange: (e) => V(e),
                                        placeholder: E.NW.string(E.t.ZwWrub),
                                        maxLength: y.xA,
                                        value: H,
                                        autoComplete: 'off',
                                        inputRef: ej
                                    }),
                                    e_ &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: T.warning,
                                            children: E.NW.string(E.t.AqTyaW)
                                        }),
                                    null != G
                                        ? (0, r.jsx)(c.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: T.warning,
                                              children: G.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ep && ef
                                ? (0, r.jsx)(P, {
                                      stageChannelsInGuild: eg,
                                      channel: k,
                                      onSelectChannel: B
                                  })
                                : null,
                            K &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            className: T.formItem,
                                            onScheduleChange: X,
                                            onRecurrenceChange: (e) => {
                                                let t = Y.startDate;
                                                null != t && es((0, m.mF)(e, t));
                                            },
                                            schedule: Y,
                                            recurrenceRule: ec,
                                            timeSelected: Q,
                                            onTimeChange: $
                                        }),
                                        null != Y.startDate && Y.startDate < o()()
                                            ? (0, r.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: T.warning,
                                                  children: E.NW.string(E.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            M &&
                                (0, r.jsx)(c.xJW, {
                                    title: E.NW.string(E.t['+gRCCw']),
                                    className: T.formItem,
                                    children: (0, r.jsx)(c.Kx8, {
                                        placeholder: E.NW.string(E.t['kWO/Ex']),
                                        value: q,
                                        onChange: (e) => J(e),
                                        maxLength: O.wm
                                    })
                                }),
                            en
                                ? (0, r.jsx)(b.Z, {
                                      sendStartNotification: er,
                                      setSendStartNotification: ea,
                                      showNotificationNewBadge: ei
                                  })
                                : null,
                            ep && !ef
                                ? (0, r.jsx)(c.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: T.channelSelection,
                                      children: E.NW.format(E.t['S+9O7u'], {
                                          stageName: eh,
                                          stageHook: (e, t) =>
                                              (0, r.jsx)(
                                                  'span',
                                                  {
                                                      className: T.channelName,
                                                      children: k.name
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
                        color: ev,
                        onClick: ex,
                        disabled: '' === H || null == el || (M && !eI),
                        submitting: R,
                        children: eN
                    }),
                    (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        className: T.cancelButton,
                        onClick: L,
                        children: E.NW.string(E.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

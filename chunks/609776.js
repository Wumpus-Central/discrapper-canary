t.d(n, { Z: () => A }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(913527),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(493773),
    d = t(933557),
    u = t(540059),
    _ = t(77810),
    h = t(854698),
    m = t(13664),
    x = t(440371),
    g = t(810788),
    v = t(699516),
    b = t(594174),
    f = t(626135),
    N = t(570188),
    j = t(427679),
    C = t(930180),
    I = t(46920),
    p = t(157925),
    E = t(981631),
    S = t(765305),
    T = t(190378),
    k = t(388032),
    Z = t(400059);
function y(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(o.xJW, {
                  title: k.intl.string(k.t.S7GjDw) + ' asdf',
                  className: Z.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(o.VcW, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, d.F6)(e, b.default, v.Z, !0)
                      })),
                      onChange: (e) => {
                          let t = n.find((n) => n.id === e);
                          null != t && i(t);
                      },
                      renderOptionPrefix: () =>
                          (0, l.jsx)(o.ewx, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function A(e) {
    var n, t, r, v, b, A;
    let { channel: P, guild: R, header: D, error: w, loading: G, onSave: B, onEventSave: L, onClose: z, onSelectChannel: O, isEvent: M = !1, defaultOptions: U, isSlideReady: F = !0 } = e,
        W = i.useMemo(() => j.Z.getStageInstanceByChannel(P.id), [P.id]),
        [V, H] = i.useState(null !== (t = null !== (n = null == U ? void 0 : U.topic) && void 0 !== n ? n : null == W ? void 0 : W.topic) && void 0 !== t ? t : ''),
        [q, J] = i.useState(null !== (r = null == U ? void 0 : U.description) && void 0 !== r ? r : ''),
        [K] = i.useState(M),
        [Q, Y] = i.useState(null !== (v = null == U ? void 0 : U.schedule) && void 0 !== v ? v : { startDate: (0, h.ib)() }),
        [X, $] = i.useState(K && (null == U ? void 0 : U.schedule) != null),
        ee = (0, N.J)(P),
        en = (0, N.U)(P),
        et = null == W && ee && !K,
        [el, ei] = i.useState(et && en),
        er = (0, s.e7)([g.Z], () => g.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ea = S.j8.GUILD_ONLY,
        [es] = i.useState(null !== (A = null !== (b = null == U ? void 0 : U.privacyLevel) && void 0 !== b ? b : null == W ? void 0 : W.privacy_level) && void 0 !== A ? A : ea),
        [eo, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
        ed = (0, C._d)(P.id),
        eu = (0, C.K3)(P.id),
        [e_, eh] = i.useState(!1),
        em = (0, u.Q3)('StageChannelSettings'),
        ex = (0, d.ZP)(P),
        eg = (0, _.q)(R),
        ev = null != O,
        eb = eg.length > 1;
    (0, c.Z)(() => {
        f.default.track(E.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == W ? void 0 : W.id,
            can_start_public_stage: !1,
            guild_id: P.guild_id
        });
    });
    let ef = (e) => {
            if ((e.preventDefault(), es === S.j8.PUBLIC && V.length < 20 && !e_)) {
                eh(!0);
                return;
            }
            let n = {
                topic: V,
                privacyLevel: es,
                sendStartNotification: el
            };
            if (K) {
                if (!X) return;
                null == L ||
                    L({
                        ...n,
                        schedule: Q,
                        description: q,
                        entityType: S.WX.STAGE_INSTANCE
                    });
                return;
            }
            null == B || B(n);
        },
        { color: eN, text: ej } = K
            ? {
                  color: o.zxk.Colors.BRAND,
                  text: k.intl.string(k.t['60lJ0N'])
              }
            : es === S.j8.PUBLIC && (null == W ? void 0 : W.privacy_level) !== S.j8.PUBLIC
              ? {
                    color: o.zxk.Colors.BRAND,
                    text: k.intl.string(k.t['3PatS0'])
                }
              : null == W
                ? {
                      color: em ? o.zxk.Colors.BRAND : o.zxk.Colors.GREEN,
                      text: k.intl.string(k.t.s8mM8P)
                  }
                : {
                      color: o.zxk.Colors.BRAND,
                      text: k.intl.string(k.t.K344S0)
                  },
        eC = i.useRef(null);
    i.useEffect(() => {
        var e;
        F && (null === (e = eC.current) || void 0 === e || e.focus());
    }, [F]);
    let eI = X && null != Q.startDate && Q.startDate >= a()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.hzk, {
                className: Z.modalContent,
                children: [
                    D,
                    (0, l.jsx)('div', {
                        className: Z.blockedUsersContainer,
                        children: null == W && (ed > 0 || eu > 0) && (0, l.jsx)(I.mv, { channelId: P.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: ef,
                        className: Z.form,
                        children: [
                            (0, l.jsxs)(o.xJW, {
                                title: M ? k.intl.string(k.t['0HbEQ0']) : k.intl.string(k.t['5FPBOD']),
                                className: Z.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(o.oil, {
                                        className: Z.textInput,
                                        onChange: (e) => H(e),
                                        placeholder: k.intl.string(k.t.ZwWrub),
                                        maxLength: p.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: eC
                                    }),
                                    e_ &&
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: Z.warning,
                                            children: k.intl.string(k.t.AqTyaW)
                                        }),
                                    null != w
                                        ? (0, l.jsx)(o.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: Z.warning,
                                              children: w.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ev && eb
                                ? (0, l.jsx)(y, {
                                      stageChannelsInGuild: eg,
                                      channel: P,
                                      onSelectChannel: O
                                  })
                                : null,
                            K &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(x.Z, {
                                            className: Z.formItem,
                                            onScheduleChange: Y,
                                            onRecurrenceChange: (e) => {
                                                let n = Q.startDate;
                                                null != n && ec((0, h.mF)(e, n));
                                            },
                                            schedule: Q,
                                            recurrenceRule: eo,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != Q.startDate && Q.startDate < a()()
                                            ? (0, l.jsx)(o.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: Z.warning,
                                                  children: k.intl.string(k.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            M &&
                                (0, l.jsx)(o.xJW, {
                                    title: k.intl.string(k.t['+gRCCw']),
                                    className: Z.formItem,
                                    children: (0, l.jsx)(o.Kx8, {
                                        placeholder: k.intl.string(k.t['kWO/Ex']),
                                        value: q,
                                        onChange: (e) => J(e),
                                        maxLength: S.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(m.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: er
                                  })
                                : null,
                            ev && !eb
                                ? (0, l.jsx)(o.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: Z.channelSelection,
                                      children: k.intl.format(k.t['S+9O7u'], {
                                          stageName: ex,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: Z.channelName,
                                                      children: P.name
                                                  },
                                                  n
                                              )
                                      })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, l.jsxs)(o.mzw, {
                children: [
                    (0, l.jsx)(o.zxk, {
                        color: eN,
                        onClick: ef,
                        disabled: '' === V || null == es || (M && !eI),
                        submitting: G,
                        children: ej
                    }),
                    (0, l.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        className: Z.cancelButton,
                        onClick: z,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

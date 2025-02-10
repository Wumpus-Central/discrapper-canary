t.d(n, { Z: () => A }), t(47120);
var l = t(200651),
    i = t(192379),
    a = t(913527),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    c = t(493773),
    d = t(933557),
    u = t(540059),
    m = t(77810),
    _ = t(854698),
    h = t(13664),
    x = t(440371),
    g = t(810788),
    v = t(699516),
    b = t(594174),
    j = t(626135),
    N = t(570188),
    I = t(427679),
    f = t(930180),
    p = t(46920),
    C = t(157925),
    E = t(981631),
    T = t(765305),
    S = t(190378),
    k = t(388032),
    Z = t(15857);
function y(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.xJW, {
                  title: k.intl.string(k.t.S7GjDw) + ' asdf',
                  className: Z.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(s.VcW, {
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
                          (0, l.jsx)(s.ewx, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function A(e) {
    var n, t, a, v, b, A;
    let { channel: P, guild: R, header: D, error: L, loading: G, onSave: w, onEventSave: O, onClose: B, onSelectChannel: z, isEvent: U = !1, defaultOptions: M, isSlideReady: F = !0 } = e,
        W = i.useMemo(() => I.Z.getStageInstanceByChannel(P.id), [P.id]),
        [V, H] = i.useState(null !== (t = null !== (n = null == M ? void 0 : M.topic) && void 0 !== n ? n : null == W ? void 0 : W.topic) && void 0 !== t ? t : ''),
        [q, J] = i.useState(null !== (a = null == M ? void 0 : M.description) && void 0 !== a ? a : ''),
        [K] = i.useState(U),
        [Q, Y] = i.useState(null !== (v = null == M ? void 0 : M.schedule) && void 0 !== v ? v : { startDate: (0, _.ib)() }),
        [X, $] = i.useState(K && (null == M ? void 0 : M.schedule) != null),
        ee = (0, N.J)(P),
        en = (0, N.U)(P),
        et = null == W && ee && !K,
        [el, ei] = i.useState(et && en),
        ea = (0, o.e7)([g.Z], () => g.Z.hasHotspot(S.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = T.j8.GUILD_ONLY,
        [eo] = i.useState(null !== (A = null !== (b = null == M ? void 0 : M.privacyLevel) && void 0 !== b ? b : null == W ? void 0 : W.privacy_level) && void 0 !== A ? A : er),
        [es, ec] = i.useState(null == M ? void 0 : M.recurrenceRule),
        ed = (0, f._d)(P.id),
        eu = (0, f.K3)(P.id),
        [em, e_] = i.useState(!1),
        eh = (0, u.Q3)('StageChannelSettings'),
        ex = (0, d.ZP)(P),
        eg = (0, m.q)(R),
        ev = null != z,
        eb = eg.length > 1;
    (0, c.ZP)(() => {
        j.default.track(E.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == W ? void 0 : W.id,
            can_start_public_stage: !1,
            guild_id: P.guild_id
        });
    });
    let ej = (e) => {
            if ((e.preventDefault(), eo === T.j8.PUBLIC && V.length < 20 && !em)) {
                e_(!0);
                return;
            }
            let n = {
                topic: V,
                privacyLevel: eo,
                sendStartNotification: el
            };
            if (K) {
                if (!X) return;
                null == O ||
                    O({
                        ...n,
                        schedule: Q,
                        description: q,
                        entityType: T.WX.STAGE_INSTANCE
                    });
                return;
            }
            null == w || w(n);
        },
        { color: eN, text: eI } = K
            ? {
                  color: s.zxk.Colors.BRAND,
                  text: k.intl.string(k.t['60lJ0N'])
              }
            : eo === T.j8.PUBLIC && (null == W ? void 0 : W.privacy_level) !== T.j8.PUBLIC
              ? {
                    color: s.zxk.Colors.BRAND,
                    text: k.intl.string(k.t['3PatS0'])
                }
              : null == W
                ? {
                      color: eh ? s.zxk.Colors.BRAND : s.zxk.Colors.GREEN,
                      text: k.intl.string(k.t.s8mM8P)
                  }
                : {
                      color: s.zxk.Colors.BRAND,
                      text: k.intl.string(k.t.K344S0)
                  },
        ef = i.useRef(null);
    i.useEffect(() => {
        var e;
        F && (null === (e = ef.current) || void 0 === e || e.focus());
    }, [F]);
    let ep = X && null != Q.startDate && Q.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.hzk, {
                className: Z.modalContent,
                children: [
                    D,
                    (0, l.jsx)('div', {
                        className: Z.blockedUsersContainer,
                        children: null == W && (ed > 0 || eu > 0) && (0, l.jsx)(p.mv, { channelId: P.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: ej,
                        className: Z.form,
                        children: [
                            (0, l.jsxs)(s.xJW, {
                                title: U ? k.intl.string(k.t['0HbEQ0']) : k.intl.string(k.t['5FPBOD']),
                                className: Z.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(s.oil, {
                                        className: Z.textInput,
                                        onChange: (e) => H(e),
                                        placeholder: k.intl.string(k.t.ZwWrub),
                                        maxLength: C.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: ef
                                    }),
                                    em &&
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: Z.warning,
                                            children: k.intl.string(k.t.AqTyaW)
                                        }),
                                    null != L
                                        ? (0, l.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: Z.warning,
                                              children: L.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ev && eb
                                ? (0, l.jsx)(y, {
                                      stageChannelsInGuild: eg,
                                      channel: P,
                                      onSelectChannel: z
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
                                                null != n && ec((0, _.mF)(e, n));
                                            },
                                            schedule: Q,
                                            recurrenceRule: es,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != Q.startDate && Q.startDate < r()()
                                            ? (0, l.jsx)(s.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: Z.warning,
                                                  children: k.intl.string(k.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            U &&
                                (0, l.jsx)(s.xJW, {
                                    title: k.intl.string(k.t['+gRCCw']),
                                    className: Z.formItem,
                                    children: (0, l.jsx)(s.Kx8, {
                                        placeholder: k.intl.string(k.t['kWO/Ex']),
                                        value: q,
                                        onChange: (e) => J(e),
                                        maxLength: T.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(h.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            ev && !eb
                                ? (0, l.jsx)(s.Text, {
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
            (0, l.jsxs)(s.mzw, {
                children: [
                    (0, l.jsx)(s.zxk, {
                        color: eN,
                        onClick: ej,
                        disabled: '' === V || null == eo || (U && !ep),
                        submitting: G,
                        children: eI
                    }),
                    (0, l.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        className: Z.cancelButton,
                        onClick: B,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

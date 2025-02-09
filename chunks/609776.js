t.d(n, { Z: () => y }), t(47120);
var l = t(200651),
    i = t(192379),
    a = t(913527),
    r = t.n(a),
    s = t(442837),
    o = t(481060),
    c = t(493773),
    d = t(933557),
    u = t(540059),
    m = t(77810),
    _ = t(854698),
    x = t(13664),
    h = t(440371),
    g = t(810788),
    v = t(699516),
    b = t(594174),
    j = t(626135),
    N = t(570188),
    f = t(427679),
    I = t(930180),
    C = t(46920),
    p = t(157925),
    E = t(981631),
    T = t(765305),
    S = t(190378),
    k = t(388032),
    Z = t(15857);
function A(e) {
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
function y(e) {
    var n, t, a, v, b, y;
    let { channel: P, guild: R, header: D, error: L, loading: w, onSave: G, onEventSave: B, onClose: z, onSelectChannel: O, isEvent: M = !1, defaultOptions: F, isSlideReady: U = !0 } = e,
        W = i.useMemo(() => f.Z.getStageInstanceByChannel(P.id), [P.id]),
        [V, H] = i.useState(null !== (t = null !== (n = null == F ? void 0 : F.topic) && void 0 !== n ? n : null == W ? void 0 : W.topic) && void 0 !== t ? t : ''),
        [q, J] = i.useState(null !== (a = null == F ? void 0 : F.description) && void 0 !== a ? a : ''),
        [K] = i.useState(M),
        [Q, Y] = i.useState(null !== (v = null == F ? void 0 : F.schedule) && void 0 !== v ? v : { startDate: (0, _.ib)() }),
        [X, $] = i.useState(K && (null == F ? void 0 : F.schedule) != null),
        ee = (0, N.J)(P),
        en = (0, N.U)(P),
        et = null == W && ee && !K,
        [el, ei] = i.useState(et && en),
        ea = (0, s.e7)([g.Z], () => g.Z.hasHotspot(S.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = T.j8.GUILD_ONLY,
        [es] = i.useState(null !== (y = null !== (b = null == F ? void 0 : F.privacyLevel) && void 0 !== b ? b : null == W ? void 0 : W.privacy_level) && void 0 !== y ? y : er),
        [eo, ec] = i.useState(null == F ? void 0 : F.recurrenceRule),
        ed = (0, I._d)(P.id),
        eu = (0, I.K3)(P.id),
        [em, e_] = i.useState(!1),
        ex = (0, u.Q3)('StageChannelSettings'),
        eh = (0, d.ZP)(P),
        eg = (0, m.q)(R),
        ev = null != O,
        eb = eg.length > 1;
    (0, c.ZP)(() => {
        j.default.track(E.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == W ? void 0 : W.id,
            can_start_public_stage: !1,
            guild_id: P.guild_id
        });
    });
    let ej = (e) => {
            if ((e.preventDefault(), es === T.j8.PUBLIC && V.length < 20 && !em)) {
                e_(!0);
                return;
            }
            let n = {
                topic: V,
                privacyLevel: es,
                sendStartNotification: el
            };
            if (K) {
                if (!X) return;
                null == B ||
                    B({
                        ...n,
                        schedule: Q,
                        description: q,
                        entityType: T.WX.STAGE_INSTANCE
                    });
                return;
            }
            null == G || G(n);
        },
        { color: eN, text: ef } = K
            ? {
                  color: o.zxk.Colors.BRAND,
                  text: k.intl.string(k.t['60lJ0N'])
              }
            : es === T.j8.PUBLIC && (null == W ? void 0 : W.privacy_level) !== T.j8.PUBLIC
              ? {
                    color: o.zxk.Colors.BRAND,
                    text: k.intl.string(k.t['3PatS0'])
                }
              : null == W
                ? {
                      color: ex ? o.zxk.Colors.BRAND : o.zxk.Colors.GREEN,
                      text: k.intl.string(k.t.s8mM8P)
                  }
                : {
                      color: o.zxk.Colors.BRAND,
                      text: k.intl.string(k.t.K344S0)
                  },
        eI = i.useRef(null);
    i.useEffect(() => {
        var e;
        U && (null === (e = eI.current) || void 0 === e || e.focus());
    }, [U]);
    let eC = X && null != Q.startDate && Q.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.hzk, {
                className: Z.modalContent,
                children: [
                    D,
                    (0, l.jsx)('div', {
                        className: Z.blockedUsersContainer,
                        children: null == W && (ed > 0 || eu > 0) && (0, l.jsx)(C.mv, { channelId: P.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: ej,
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
                                        inputRef: eI
                                    }),
                                    em &&
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: Z.warning,
                                            children: k.intl.string(k.t.AqTyaW)
                                        }),
                                    null != L
                                        ? (0, l.jsx)(o.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: Z.warning,
                                              children: L.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ev && eb
                                ? (0, l.jsx)(A, {
                                      stageChannelsInGuild: eg,
                                      channel: P,
                                      onSelectChannel: O
                                  })
                                : null,
                            K &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            className: Z.formItem,
                                            onScheduleChange: Y,
                                            onRecurrenceChange: (e) => {
                                                let n = Q.startDate;
                                                null != n && ec((0, _.mF)(e, n));
                                            },
                                            schedule: Q,
                                            recurrenceRule: eo,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != Q.startDate && Q.startDate < r()()
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
                                        maxLength: T.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(x.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            ev && !eb
                                ? (0, l.jsx)(o.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: Z.channelSelection,
                                      children: k.intl.format(k.t['S+9O7u'], {
                                          stageName: eh,
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
                        onClick: ej,
                        disabled: '' === V || null == es || (M && !eC),
                        submitting: w,
                        children: ef
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

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
    _ = t(77810),
    h = t(854698),
    x = t(13664),
    m = t(440371),
    g = t(810788),
    b = t(699516),
    v = t(594174),
    N = t(626135),
    j = t(570188),
    I = t(427679),
    p = t(930180),
    C = t(46920),
    f = t(157925),
    E = t(981631),
    S = t(765305),
    T = t(190378),
    k = t(388032),
    A = t(400059);
function Z(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(o.xJW, {
                  title: k.intl.string(k.t.S7GjDw) + ' asdf',
                  className: A.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(o.VcW, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, d.F6)(e, v.default, b.Z, !0)
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
    var n, t, a, b, v, y;
    let { channel: D, guild: R, header: P, error: w, loading: G, onSave: B, onEventSave: z, onClose: L, onSelectChannel: O, isEvent: M = !1, defaultOptions: U, isSlideReady: F = !0 } = e,
        W = i.useMemo(() => I.Z.getStageInstanceByChannel(D.id), [D.id]),
        [V, q] = i.useState(null !== (t = null !== (n = null == U ? void 0 : U.topic) && void 0 !== n ? n : null == W ? void 0 : W.topic) && void 0 !== t ? t : ''),
        [H, J] = i.useState(null !== (a = null == U ? void 0 : U.description) && void 0 !== a ? a : ''),
        [K] = i.useState(M),
        [Y, Q] = i.useState(null !== (b = null == U ? void 0 : U.schedule) && void 0 !== b ? b : { startDate: (0, h.ib)() }),
        [X, $] = i.useState(K && (null == U ? void 0 : U.schedule) != null),
        ee = (0, j.J)(D),
        en = (0, j.U)(D),
        et = null == W && ee && !K,
        [el, ei] = i.useState(et && en),
        ea = (0, s.e7)([g.Z], () => g.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = S.j8.GUILD_ONLY,
        [es] = i.useState(null !== (y = null !== (v = null == U ? void 0 : U.privacyLevel) && void 0 !== v ? v : null == W ? void 0 : W.privacy_level) && void 0 !== y ? y : er),
        [eo, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
        ed = (0, p._d)(D.id),
        eu = (0, p.K3)(D.id),
        [e_, eh] = i.useState(!1),
        ex = (0, u.Q3)('StageChannelSettings'),
        em = (0, d.ZP)(D),
        eg = (0, _.q)(R),
        eb = null != O,
        ev = eg.length > 1;
    (0, c.Z)(() => {
        N.default.track(E.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == W ? void 0 : W.id,
            can_start_public_stage: !1,
            guild_id: D.guild_id
        });
    });
    let eN = (e) => {
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
                null == z ||
                    z({
                        ...n,
                        schedule: Y,
                        description: H,
                        entityType: S.WX.STAGE_INSTANCE
                    });
                return;
            }
            null == B || B(n);
        },
        { color: ej, text: eI } = K
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
                      color: ex ? o.zxk.Colors.BRAND : o.zxk.Colors.GREEN,
                      text: k.intl.string(k.t.s8mM8P)
                  }
                : {
                      color: o.zxk.Colors.BRAND,
                      text: k.intl.string(k.t.K344S0)
                  },
        ep = i.useRef(null);
    i.useEffect(() => {
        var e;
        F && (null === (e = ep.current) || void 0 === e || e.focus());
    }, [F]);
    let eC = X && null != Y.startDate && Y.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.hzk, {
                className: A.modalContent,
                children: [
                    P,
                    (0, l.jsx)('div', {
                        className: A.blockedUsersContainer,
                        children: null == W && (ed > 0 || eu > 0) && (0, l.jsx)(C.mv, { channelId: D.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: eN,
                        className: A.form,
                        children: [
                            (0, l.jsxs)(o.xJW, {
                                title: M ? k.intl.string(k.t['0HbEQ0']) : k.intl.string(k.t['5FPBOD']),
                                className: A.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(o.oil, {
                                        className: A.textInput,
                                        onChange: (e) => q(e),
                                        placeholder: k.intl.string(k.t.ZwWrub),
                                        maxLength: f.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: ep
                                    }),
                                    e_ &&
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: A.warning,
                                            children: k.intl.string(k.t.AqTyaW)
                                        }),
                                    null != w
                                        ? (0, l.jsx)(o.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: A.warning,
                                              children: w.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            eb && ev
                                ? (0, l.jsx)(Z, {
                                      stageChannelsInGuild: eg,
                                      channel: D,
                                      onSelectChannel: O
                                  })
                                : null,
                            K &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(m.Z, {
                                            className: A.formItem,
                                            onScheduleChange: Q,
                                            onRecurrenceChange: (e) => {
                                                let n = Y.startDate;
                                                null != n && ec((0, h.mF)(e, n));
                                            },
                                            schedule: Y,
                                            recurrenceRule: eo,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != Y.startDate && Y.startDate < r()()
                                            ? (0, l.jsx)(o.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: A.warning,
                                                  children: k.intl.string(k.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            M &&
                                (0, l.jsx)(o.xJW, {
                                    title: k.intl.string(k.t['+gRCCw']),
                                    className: A.formItem,
                                    children: (0, l.jsx)(o.Kx8, {
                                        placeholder: k.intl.string(k.t['kWO/Ex']),
                                        value: H,
                                        onChange: (e) => J(e),
                                        maxLength: S.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(x.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            eb && !ev
                                ? (0, l.jsx)(o.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: A.channelSelection,
                                      children: k.intl.format(k.t['S+9O7u'], {
                                          stageName: em,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: A.channelName,
                                                      children: D.name
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
                        color: ej,
                        onClick: eN,
                        disabled: '' === V || null == es || (M && !eC),
                        submitting: G,
                        children: eI
                    }),
                    (0, l.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        className: A.cancelButton,
                        onClick: L,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

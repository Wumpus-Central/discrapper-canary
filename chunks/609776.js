n.d(t, { Z: () => P }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(493773),
    d = n(933557),
    u = n(540059),
    h = n(884746),
    g = n(854698),
    _ = n(13664),
    m = n(440371),
    b = n(810788),
    x = n(699516),
    f = n(594174),
    p = n(626135),
    v = n(570188),
    j = n(427679),
    N = n(930180),
    I = n(320596),
    O = n(157925),
    y = n(981631),
    C = n(765305),
    E = n(190378),
    S = n(388032),
    T = n(994208);
function w(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, r.jsx)(c.xJW, {
              title: S.intl.string(S.t.S7GjDw) + ' asdf',
              className: T.channelSelectionFormItem,
              required: !0,
              children: (0, r.jsx)(c.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, d.F6)(e, f.default, x.Z, !0)
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
function P(e) {
    var t, n, l, x, f, P;
    let { channel: k, guild: A, header: D, error: R, loading: Z, onSave: G, onEventSave: L, onClose: B, onSelectChannel: M, isEvent: U = !1, defaultOptions: z, isSlideReady: F = !0 } = e,
        V = i.useMemo(() => j.Z.getStageInstanceByChannel(k.id), [k.id]),
        [W, H] = i.useState(null != (n = null != (t = null == z ? void 0 : z.topic) ? t : null == V ? void 0 : V.topic) ? n : ''),
        [q, J] = i.useState(null != (l = null == z ? void 0 : z.description) ? l : ''),
        [K] = i.useState(U),
        [Y, X] = i.useState(null != (x = null == z ? void 0 : z.schedule) ? x : { startDate: (0, g.ib)() }),
        [Q, $] = i.useState(K && (null == z ? void 0 : z.schedule) != null),
        ee = (0, v.J)(k),
        et = (0, v.U)(k),
        en = null == V && ee && !K,
        [er, ei] = i.useState(en && et),
        el = (0, o.e7)([b.Z], () => b.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ea = C.j8.GUILD_ONLY,
        [eo] = i.useState(null != (P = null != (f = null == z ? void 0 : z.privacyLevel) ? f : null == V ? void 0 : V.privacy_level) ? P : ea),
        [ec, es] = i.useState(null == z ? void 0 : z.recurrenceRule),
        ed = (0, N._d)(k.id),
        eu = (0, N.K3)(k.id),
        [eh, eg] = i.useState(!1),
        e_ = (0, u.Q3)('StageChannelSettings'),
        em = (0, d.ZP)(k),
        eb = (0, h.q)(A),
        ex = null != M,
        ef = eb.length > 1;
    (0, s.ZP)(() => {
        p.default.track(y.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == V ? void 0 : V.id,
            can_start_public_stage: !1,
            guild_id: k.guild_id
        });
    });
    let ep = (e) => {
            if ((e.preventDefault(), eo === C.j8.PUBLIC && W.length < 20 && !eh)) return void eg(!0);
            let t = {
                topic: W,
                privacyLevel: eo,
                sendStartNotification: er
            };
            if (K) {
                var n, r;
                if (!Q) return;
                null == L ||
                    L(
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
                                entityType: C.WX.STAGE_INSTANCE
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
            null == G || G(t);
        },
        { color: ev, text: ej } = K
            ? {
                  color: c.zxk.Colors.BRAND,
                  text: S.intl.string(S.t['60lJ0N'])
              }
            : eo === C.j8.PUBLIC && (null == V ? void 0 : V.privacy_level) !== C.j8.PUBLIC
              ? {
                    color: c.zxk.Colors.BRAND,
                    text: S.intl.string(S.t['3PatS0'])
                }
              : null == V
                ? {
                      color: e_ ? c.zxk.Colors.BRAND : c.zxk.Colors.GREEN,
                      text: S.intl.string(S.t.s8mM8P)
                  }
                : {
                      color: c.zxk.Colors.BRAND,
                      text: S.intl.string(S.t.K344S0)
                  },
        eN = i.useRef(null);
    i.useEffect(() => {
        var e;
        F && (null == (e = eN.current) || e.focus());
    }, [F]);
    let eI = Q && null != Y.startDate && Y.startDate >= a()();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.hzk, {
                className: T.modalContent,
                children: [
                    D,
                    (0, r.jsx)('div', {
                        className: T.blockedUsersContainer,
                        children: null == V && (ed > 0 || eu > 0) && (0, r.jsx)(I.mv, { channelId: k.id })
                    }),
                    (0, r.jsxs)('form', {
                        onSubmit: ep,
                        className: T.form,
                        children: [
                            (0, r.jsxs)(c.xJW, {
                                title: U ? S.intl.string(S.t['0HbEQ0']) : S.intl.string(S.t['5FPBOD']),
                                className: T.topicFormItem,
                                required: !0,
                                children: [
                                    (0, r.jsx)(c.oil, {
                                        className: T.textInput,
                                        onChange: (e) => H(e),
                                        placeholder: S.intl.string(S.t.ZwWrub),
                                        maxLength: O.xA,
                                        value: W,
                                        autoComplete: 'off',
                                        inputRef: eN
                                    }),
                                    eh &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: T.warning,
                                            children: S.intl.string(S.t.AqTyaW)
                                        }),
                                    null != R
                                        ? (0, r.jsx)(c.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: T.warning,
                                              children: R.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ex && ef
                                ? (0, r.jsx)(w, {
                                      stageChannelsInGuild: eb,
                                      channel: k,
                                      onSelectChannel: M
                                  })
                                : null,
                            K &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: T.formItem,
                                            onScheduleChange: X,
                                            onRecurrenceChange: (e) => {
                                                let t = Y.startDate;
                                                null != t && es((0, g.mF)(e, t));
                                            },
                                            schedule: Y,
                                            recurrenceRule: ec,
                                            timeSelected: Q,
                                            onTimeChange: $
                                        }),
                                        null != Y.startDate && Y.startDate < a()()
                                            ? (0, r.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: T.warning,
                                                  children: S.intl.string(S.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            U &&
                                (0, r.jsx)(c.xJW, {
                                    title: S.intl.string(S.t['+gRCCw']),
                                    className: T.formItem,
                                    children: (0, r.jsx)(c.Kx8, {
                                        placeholder: S.intl.string(S.t['kWO/Ex']),
                                        value: q,
                                        onChange: (e) => J(e),
                                        maxLength: C.wm
                                    })
                                }),
                            en
                                ? (0, r.jsx)(_.Z, {
                                      sendStartNotification: er,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: el
                                  })
                                : null,
                            ex && !ef
                                ? (0, r.jsx)(c.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: T.channelSelection,
                                      children: S.intl.format(S.t['S+9O7u'], {
                                          stageName: em,
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
                        onClick: ep,
                        disabled: '' === W || null == eo || (U && !eI),
                        submitting: Z,
                        children: ej
                    }),
                    (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        className: T.cancelButton,
                        onClick: B,
                        children: S.intl.string(S.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

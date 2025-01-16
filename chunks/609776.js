t.d(n, {
    Z: function () {
        return B;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(913527),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    c = t(493773),
    d = t(933557),
    u = t(77810),
    m = t(854698),
    x = t(13664),
    h = t(440371),
    f = t(810788),
    g = t(699516),
    v = t(594174),
    _ = t(626135),
    I = t(570188),
    j = t(427679),
    N = t(930180),
    C = t(46920),
    p = t(157925),
    S = t(981631),
    b = t(765305),
    T = t(190378),
    k = t(388032),
    E = t(400059);
function Z(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                  title: k.intl.string(k.t.S7GjDw) + ' asdf',
                  className: E.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(s.SearchableSelect, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, d.F6)(e, v.default, g.Z, !0)
                      })),
                      onChange: (e) => {
                          let t = n.find((n) => n.id === e);
                          null != t && i(t);
                      },
                      renderOptionPrefix: () =>
                          (0, l.jsx)(s.StageIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 24
                          })
                  })
              })
          });
}
function B(e) {
    var n, t, a, g, v, B, D, R;
    let { channel: A, guild: y, header: L, error: P, loading: G, onSave: w, onEventSave: F, onClose: M, onSelectChannel: z, isEvent: U = !1, defaultOptions: O, isSlideReady: H = !0 } = e,
        V = i.useMemo(() => j.Z.getStageInstanceByChannel(A.id), [A.id]),
        [q, W] = i.useState(null !== (t = null !== (n = null == O ? void 0 : O.topic) && void 0 !== n ? n : null == V ? void 0 : V.topic) && void 0 !== t ? t : ''),
        [K, Y] = i.useState(null !== (a = null == O ? void 0 : O.description) && void 0 !== a ? a : ''),
        [J] = i.useState(U),
        [Q, X] = i.useState(null !== (g = null == O ? void 0 : O.schedule) && void 0 !== g ? g : { startDate: (0, m.ib)() }),
        [$, ee] = i.useState(J && (null == O ? void 0 : O.schedule) != null),
        en = (0, I.J)(A),
        et = (0, I.U)(A),
        el = null == V && en && !J,
        [ei, ea] = i.useState(el && et),
        er = (0, o.e7)([f.Z], () => f.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        eo = b.j8.GUILD_ONLY,
        [es] = i.useState(null !== (B = null !== (v = null == O ? void 0 : O.privacyLevel) && void 0 !== v ? v : null == V ? void 0 : V.privacy_level) && void 0 !== B ? B : eo),
        [ec, ed] = i.useState(null == O ? void 0 : O.recurrenceRule),
        eu = (0, N._d)(A.id),
        em = (0, N.K3)(A.id),
        [ex, eh] = i.useState(!1),
        ef = (0, d.ZP)(A),
        eg = (0, u.q)(y),
        ev = null != z,
        e_ = eg.length > 1;
    (0, c.Z)(() => {
        _.default.track(S.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == V ? void 0 : V.id,
            can_start_public_stage: !1,
            guild_id: A.guild_id
        });
    });
    let eI = (e) => {
        if ((e.preventDefault(), es === b.j8.PUBLIC && q.length < 20 && !ex)) {
            eh(!0);
            return;
        }
        let n = {
            topic: q,
            privacyLevel: es,
            sendStartNotification: ei
        };
        if (J) {
            if (!$) return;
            null == F ||
                F({
                    ...n,
                    schedule: Q,
                    description: K,
                    entityType: b.WX.STAGE_INSTANCE
                });
            return;
        }
        null == w || w(n);
    };
    let { color: ej, text: eN } =
            ((D = V),
            (R = es),
            J
                ? {
                      color: s.Button.Colors.BRAND,
                      text: k.intl.string(k.t['60lJ0N'])
                  }
                : R === b.j8.PUBLIC && (null == D ? void 0 : D.privacy_level) !== b.j8.PUBLIC
                  ? {
                        color: s.Button.Colors.BRAND,
                        text: k.intl.string(k.t['3PatS0'])
                    }
                  : null == D
                    ? {
                          color: s.Button.Colors.GREEN,
                          text: k.intl.string(k.t.s8mM8P)
                      }
                    : {
                          color: s.Button.Colors.BRAND,
                          text: k.intl.string(k.t.K344S0)
                      }),
        eC = i.useRef(null);
    i.useEffect(() => {
        var e;
        H && (null === (e = eC.current) || void 0 === e || e.focus());
    }, [H]);
    let ep = $ && null != Q.startDate && Q.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.ModalContent, {
                className: E.modalContent,
                children: [
                    L,
                    (0, l.jsx)('div', {
                        className: E.blockedUsersContainer,
                        children: null == V && (eu > 0 || em > 0) && (0, l.jsx)(C.mv, { channelId: A.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: eI,
                        className: E.form,
                        children: [
                            (0, l.jsxs)(s.FormItem, {
                                title: U ? k.intl.string(k.t['0HbEQ0']) : k.intl.string(k.t['5FPBOD']),
                                className: E.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(s.TextInput, {
                                        className: E.textInput,
                                        onChange: (e) => W(e),
                                        placeholder: k.intl.string(k.t.ZwWrub),
                                        maxLength: p.xA,
                                        value: q,
                                        autoComplete: 'off',
                                        inputRef: eC
                                    }),
                                    ex &&
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: E.warning,
                                            children: k.intl.string(k.t.AqTyaW)
                                        }),
                                    null != P
                                        ? (0, l.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: E.warning,
                                              children: P.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            ev && e_
                                ? (0, l.jsx)(Z, {
                                      stageChannelsInGuild: eg,
                                      channel: A,
                                      onSelectChannel: z
                                  })
                                : null,
                            J &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            className: E.formItem,
                                            onScheduleChange: X,
                                            onRecurrenceChange: (e) => {
                                                let n = Q.startDate;
                                                if (null != n) ed((0, m.mF)(e, n));
                                            },
                                            schedule: Q,
                                            recurrenceRule: ec,
                                            timeSelected: $,
                                            onTimeChange: ee
                                        }),
                                        null != Q.startDate && Q.startDate < r()()
                                            ? (0, l.jsx)(s.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: E.warning,
                                                  children: k.intl.string(k.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            U &&
                                (0, l.jsx)(s.FormItem, {
                                    title: k.intl.string(k.t['+gRCCw']),
                                    className: E.formItem,
                                    children: (0, l.jsx)(s.TextArea, {
                                        placeholder: k.intl.string(k.t['kWO/Ex']),
                                        value: K,
                                        onChange: (e) => Y(e),
                                        maxLength: b.wm
                                    })
                                }),
                            el
                                ? (0, l.jsx)(x.Z, {
                                      sendStartNotification: ei,
                                      setSendStartNotification: ea,
                                      showNotificationNewBadge: er
                                  })
                                : null,
                            ev && !e_
                                ? (0, l.jsx)(s.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: E.channelSelection,
                                      children: k.intl.format(k.t['S+9O7u'], {
                                          stageName: ef,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: E.channelName,
                                                      children: A.name
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
            (0, l.jsxs)(s.ModalFooter, {
                children: [
                    (0, l.jsx)(s.Button, {
                        color: ej,
                        onClick: eI,
                        disabled: '' === q || null == es || (U && !ep),
                        submitting: G,
                        children: eN
                    }),
                    (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: E.cancelButton,
                        onClick: M,
                        children: k.intl.string(k.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

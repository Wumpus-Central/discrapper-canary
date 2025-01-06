t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(913527),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    c = t(933557),
    d = t(77810),
    u = t(854698),
    m = t(13664),
    x = t(440371),
    h = t(810788),
    f = t(699516),
    g = t(594174),
    v = t(626135),
    _ = t(570188),
    I = t(427679),
    j = t(930180),
    N = t(46920),
    C = t(157925),
    p = t(981631),
    S = t(765305),
    b = t(190378),
    T = t(388032),
    k = t(400059);
function E(e) {
    let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                  title: T.intl.string(T.t.S7GjDw) + ' asdf',
                  className: k.channelSelectionFormItem,
                  required: !0,
                  children: (0, l.jsx)(s.SearchableSelect, {
                      value: t.id,
                      options: n.map((e) => ({
                          value: e.id,
                          label: (0, c.F6)(e, g.default, f.Z, !0)
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
function Z(e) {
    var n, t, a, f, g, Z, B, D;
    let { channel: R, guild: A, header: y, error: L, loading: P, onSave: G, onEventSave: w, onClose: F, onSelectChannel: M, isEvent: z = !1, defaultOptions: U, isSlideReady: O = !0 } = e,
        H = i.useMemo(() => I.Z.getStageInstanceByChannel(R.id), [R.id]),
        [V, q] = i.useState(null !== (t = null !== (n = null == U ? void 0 : U.topic) && void 0 !== n ? n : null == H ? void 0 : H.topic) && void 0 !== t ? t : ''),
        [W, K] = i.useState(null !== (a = null == U ? void 0 : U.description) && void 0 !== a ? a : ''),
        [Y] = i.useState(z),
        [J, Q] = i.useState(null !== (f = null == U ? void 0 : U.schedule) && void 0 !== f ? f : { startDate: (0, u.ib)() }),
        [X, $] = i.useState(Y && (null == U ? void 0 : U.schedule) != null),
        ee = (0, _.J)(R),
        en = (0, _.U)(R),
        et = null == H && ee && !Y,
        [el, ei] = i.useState(et && en),
        ea = (0, o.e7)([h.Z], () => h.Z.hasHotspot(b.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = S.j8.GUILD_ONLY,
        [eo] = i.useState(null !== (Z = null !== (g = null == U ? void 0 : U.privacyLevel) && void 0 !== g ? g : null == H ? void 0 : H.privacy_level) && void 0 !== Z ? Z : er),
        [es, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
        ed = (0, j._d)(R.id),
        eu = (0, j.K3)(R.id),
        [em, ex] = i.useState(!1),
        eh = (0, c.ZP)(R),
        ef = (0, d.q)(A),
        eg = null != M,
        ev = ef.length > 1;
    i.useEffect(() => {
        v.default.track(p.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: R.guild_id
        });
    }, []);
    let e_ = (e) => {
        if ((e.preventDefault(), eo === S.j8.PUBLIC && V.length < 20 && !em)) {
            ex(!0);
            return;
        }
        let n = {
            topic: V,
            privacyLevel: eo,
            sendStartNotification: el
        };
        if (Y) {
            if (!X) return;
            null == w ||
                w({
                    ...n,
                    schedule: J,
                    description: W,
                    entityType: S.WX.STAGE_INSTANCE
                });
            return;
        }
        null == G || G(n);
    };
    let { color: eI, text: ej } =
            ((B = H),
            (D = eo),
            Y
                ? {
                      color: s.Button.Colors.BRAND,
                      text: T.intl.string(T.t['60lJ0N'])
                  }
                : D === S.j8.PUBLIC && (null == B ? void 0 : B.privacy_level) !== S.j8.PUBLIC
                  ? {
                        color: s.Button.Colors.BRAND,
                        text: T.intl.string(T.t['3PatS0'])
                    }
                  : null == B
                    ? {
                          color: s.Button.Colors.GREEN,
                          text: T.intl.string(T.t.s8mM8P)
                      }
                    : {
                          color: s.Button.Colors.BRAND,
                          text: T.intl.string(T.t.K344S0)
                      }),
        eN = i.useRef(null);
    i.useEffect(() => {
        var e;
        O && (null === (e = eN.current) || void 0 === e || e.focus());
    }, [O]);
    let eC = X && null != J.startDate && J.startDate >= r()();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.ModalContent, {
                className: k.modalContent,
                children: [
                    y,
                    (0, l.jsx)('div', {
                        className: k.blockedUsersContainer,
                        children: null == H && (ed > 0 || eu > 0) && (0, l.jsx)(N.mv, { channelId: R.id })
                    }),
                    (0, l.jsxs)('form', {
                        onSubmit: e_,
                        className: k.form,
                        children: [
                            (0, l.jsxs)(s.FormItem, {
                                title: z ? T.intl.string(T.t['0HbEQ0']) : T.intl.string(T.t['5FPBOD']),
                                className: k.topicFormItem,
                                required: !0,
                                children: [
                                    (0, l.jsx)(s.TextInput, {
                                        className: k.textInput,
                                        onChange: (e) => q(e),
                                        placeholder: T.intl.string(T.t.ZwWrub),
                                        maxLength: C.xA,
                                        value: V,
                                        autoComplete: 'off',
                                        inputRef: eN
                                    }),
                                    em &&
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-warning',
                                            className: k.warning,
                                            children: T.intl.string(T.t.AqTyaW)
                                        }),
                                    null != L
                                        ? (0, l.jsx)(s.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: k.warning,
                                              children: L.getAnyErrorMessage()
                                          })
                                        : null
                                ]
                            }),
                            eg && ev
                                ? (0, l.jsx)(E, {
                                      stageChannelsInGuild: ef,
                                      channel: R,
                                      onSelectChannel: M
                                  })
                                : null,
                            Y &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(x.Z, {
                                            className: k.formItem,
                                            onScheduleChange: Q,
                                            onRecurrenceChange: (e) => {
                                                let n = J.startDate;
                                                if (null != n) ec((0, u.mF)(e, n));
                                            },
                                            schedule: J,
                                            recurrenceRule: es,
                                            timeSelected: X,
                                            onTimeChange: $
                                        }),
                                        null != J.startDate && J.startDate < r()()
                                            ? (0, l.jsx)(s.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-xs/normal',
                                                  className: k.warning,
                                                  children: T.intl.string(T.t.AXR5Sk)
                                              })
                                            : null
                                    ]
                                }),
                            z &&
                                (0, l.jsx)(s.FormItem, {
                                    title: T.intl.string(T.t['+gRCCw']),
                                    className: k.formItem,
                                    children: (0, l.jsx)(s.TextArea, {
                                        placeholder: T.intl.string(T.t['kWO/Ex']),
                                        value: W,
                                        onChange: (e) => K(e),
                                        maxLength: S.wm
                                    })
                                }),
                            et
                                ? (0, l.jsx)(m.Z, {
                                      sendStartNotification: el,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: ea
                                  })
                                : null,
                            eg && !ev
                                ? (0, l.jsx)(s.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-xs/normal',
                                      className: k.channelSelection,
                                      children: T.intl.format(T.t['S+9O7u'], {
                                          stageName: eh,
                                          stageHook: (e, n) =>
                                              (0, l.jsx)(
                                                  'span',
                                                  {
                                                      className: k.channelName,
                                                      children: R.name
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
                        color: eI,
                        onClick: e_,
                        disabled: '' === V || null == eo || (z && !eC),
                        submitting: P,
                        children: ej
                    }),
                    (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: k.cancelButton,
                        onClick: F,
                        children: T.intl.string(T.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

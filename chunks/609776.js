n.d(t, { Z: () => k }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    d = n(493773),
    u = n(933557),
    x = n(884746),
    m = n(854698),
    h = n(13664),
    g = n(440371),
    b = n(810788),
    p = n(699516),
    f = n(594174),
    v = n(626135),
    _ = n(570188),
    j = n(427679),
    N = n(930180),
    C = n(320596),
    I = n(157925),
    y = n(981631),
    O = n(765305),
    S = n(190378),
    E = n(388032),
    w = n(994208);
function T(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, r.jsx)(c.xJW, {
              title: E.intl.string(E.t.S7GjDw) + " asdf",
              className: w.channelSelectionFormItem,
              required: !0,
              children: (0, r.jsx)(c.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, u.F6)(e, f.default, p.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && i(n);
                  },
                  renderOptionPrefix: () =>
                      (0, r.jsx)(c.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
              }),
          });
}
function k(e) {
    var t, n, l, p, f, k;
    let {
            channel: P,
            guild: D,
            header: Z,
            error: L,
            loading: R,
            onSave: A,
            onEventSave: B,
            onClose: G,
            onSelectChannel: F,
            isEvent: U = !1,
            defaultOptions: z,
            isSlideReady: M = !0,
        } = e,
        J = i.useMemo(() => j.Z.getStageInstanceByChannel(P.id), [P.id]),
        [V, H] = i.useState(
            null != (n = null != (t = null == z ? void 0 : z.topic) ? t : null == J ? void 0 : J.topic) ? n : "",
        ),
        [W, q] = i.useState(null != (l = null == z ? void 0 : z.description) ? l : ""),
        [K] = i.useState(U),
        [X, Y] = i.useState(null != (p = null == z ? void 0 : z.schedule) ? p : { startDate: (0, m.ib)() }),
        [Q, $] = i.useState(K && (null == z ? void 0 : z.schedule) != null),
        ee = (0, _.J)(P),
        et = (0, _.U)(P),
        en = null == J && ee && !K,
        [er, ei] = i.useState(en && et),
        el = (0, o.e7)([b.Z], () => b.Z.hasHotspot(S.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ea = O.j8.GUILD_ONLY,
        [eo] = i.useState(
            null != (k = null != (f = null == z ? void 0 : z.privacyLevel) ? f : null == J ? void 0 : J.privacy_level)
                ? k
                : ea,
        ),
        [es, ec] = i.useState(null == z ? void 0 : z.recurrenceRule),
        ed = (0, N._d)(P.id),
        eu = (0, N.K3)(P.id),
        [ex, em] = i.useState(!1),
        eh = (0, u.ZP)(P),
        eg = (0, x.q)(D),
        eb = null != F,
        ep = eg.length > 1;
    (0, d.ZP)(() => {
        v.default.track(y.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == J ? void 0 : J.id,
            can_start_public_stage: !1,
            guild_id: P.guild_id,
        });
    });
    let ef = (e) => {
            if ((e.preventDefault(), eo === O.j8.PUBLIC && V.length < 20 && !ex)) return void em(!0);
            let t = {
                topic: V,
                privacyLevel: eo,
                sendStartNotification: er,
            };
            if (K) {
                var n, r;
                if (!Q) return;
                null == B ||
                    B(
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (r = r =
                            {
                                schedule: X,
                                description: W,
                                entityType: O.WX.STAGE_INSTANCE,
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
                        n),
                    );
                return;
            }
            null == A || A(t);
        },
        { color: ev, text: e_ } = K
            ? {
                  color: s.zx.Colors.BRAND,
                  text: E.intl.string(E.t["60lJ0N"]),
              }
            : eo === O.j8.PUBLIC && (null == J ? void 0 : J.privacy_level) !== O.j8.PUBLIC
              ? {
                    color: s.zx.Colors.BRAND,
                    text: E.intl.string(E.t["3PatS0"]),
                }
              : null == J
                ? {
                      color: s.zx.Colors.BRAND,
                      text: E.intl.string(E.t.s8mM8P),
                  }
                : {
                      color: s.zx.Colors.BRAND,
                      text: E.intl.string(E.t.K344S0),
                  },
        ej = i.useRef(null);
    i.useEffect(() => {
        var e;
        M && (null == (e = ej.current) || e.focus());
    }, [M]);
    let eN = Q && null != X.startDate && X.startDate >= a()();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.hzk, {
                className: w.modalContent,
                children: [
                    Z,
                    (0, r.jsx)("div", {
                        className: w.blockedUsersContainer,
                        children: null == J && (ed > 0 || eu > 0) && (0, r.jsx)(C.mv, { channelId: P.id }),
                    }),
                    (0, r.jsxs)("form", {
                        onSubmit: ef,
                        className: w.form,
                        children: [
                            (0, r.jsxs)(c.xJW, {
                                title: U ? E.intl.string(E.t["0HbEQ0"]) : E.intl.string(E.t["5FPBOD"]),
                                className: w.topicFormItem,
                                required: !0,
                                children: [
                                    (0, r.jsx)(s.Is, {
                                        className: w.textInput,
                                        onChange: (e) => H(e),
                                        placeholder: E.intl.string(E.t.ZwWrub),
                                        maxLength: I.xA,
                                        value: V,
                                        autoComplete: "off",
                                        inputRef: ej,
                                    }),
                                    ex &&
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            className: w.warning,
                                            children: E.intl.string(E.t.AqTyaW),
                                        }),
                                    null != L
                                        ? (0, r.jsx)(c.Text, {
                                              color: "text-danger",
                                              variant: "text-xs/normal",
                                              className: w.warning,
                                              children: L.getAnyErrorMessage(),
                                          })
                                        : null,
                                ],
                            }),
                            eb && ep
                                ? (0, r.jsx)(T, {
                                      stageChannelsInGuild: eg,
                                      channel: P,
                                      onSelectChannel: F,
                                  })
                                : null,
                            K &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            className: w.formItem,
                                            onScheduleChange: Y,
                                            onRecurrenceChange: (e) => {
                                                let t = X.startDate;
                                                null != t && ec((0, m.mF)(e, t));
                                            },
                                            schedule: X,
                                            recurrenceRule: es,
                                            timeSelected: Q,
                                            onTimeChange: $,
                                        }),
                                        null != X.startDate && X.startDate < a()()
                                            ? (0, r.jsx)(c.Text, {
                                                  color: "text-danger",
                                                  variant: "text-xs/normal",
                                                  className: w.warning,
                                                  children: E.intl.string(E.t.AXR5Sk),
                                              })
                                            : null,
                                    ],
                                }),
                            U &&
                                (0, r.jsx)(c.xJW, {
                                    title: E.intl.string(E.t["+gRCCw"]),
                                    className: w.formItem,
                                    children: (0, r.jsx)(c.Kx8, {
                                        placeholder: E.intl.string(E.t["kWO/Ex"]),
                                        value: W,
                                        onChange: (e) => q(e),
                                        maxLength: O.wm,
                                    }),
                                }),
                            en
                                ? (0, r.jsx)(h.Z, {
                                      sendStartNotification: er,
                                      setSendStartNotification: ei,
                                      showNotificationNewBadge: el,
                                  })
                                : null,
                            eb && !ep
                                ? (0, r.jsx)(c.Text, {
                                      color: "header-secondary",
                                      variant: "text-xs/normal",
                                      className: w.channelSelection,
                                      children: E.intl.format(E.t["S+9O7u"], {
                                          stageName: eh,
                                          stageHook: (e, t) =>
                                              (0, r.jsx)(
                                                  "span",
                                                  {
                                                      className: w.channelName,
                                                      children: P.name,
                                                  },
                                                  t,
                                              ),
                                      }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(c.mzw, {
                children: [
                    (0, r.jsx)(s.zx, {
                        color: ev,
                        onClick: ef,
                        disabled: "" === V || null == eo || (U && !eN),
                        submitting: R,
                        children: e_,
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: w.cancelButton,
                        children: (0, r.jsx)(c.zxk, {
                            variant: "secondary",
                            text: E.intl.string(E.t["ETE/oK"]),
                            onClick: G,
                        }),
                    }),
                ],
            }),
        ],
    });
}

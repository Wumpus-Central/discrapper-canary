n.d(t, { default: () => T }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(913527),
    a = n.n(i),
    c = n(793030),
    s = n(442837),
    o = n(668339),
    u = n(481060),
    d = n(493773),
    f = n(933557),
    m = n(884746),
    b = n(854698),
    x = n(440371),
    g = n(430824),
    j = n(699516),
    h = n(594174),
    p = n(626135),
    v = n(570188),
    O = n(427679),
    y = n(930180),
    P = n(320596),
    S = n(937096),
    N = n(289584),
    _ = n(157925),
    k = n(981631),
    w = n(765305),
    C = n(388032),
    D = n(452594),
    Z = n(787068);
function I(e) {
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
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guild_id));
    return (l.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, r.jsx)(F, {
              transitionState: i,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function A(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: l } = e;
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: D.channelSelectionFormItem,
              children: (0, r.jsx)(o.d, {
                  required: !0,
                  label: C.intl.string(C.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, f.F6)(e, h.default, j.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && l(n);
                  },
                  renderOptionPrefix: () =>
                      (0, r.jsx)(u.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
              }),
          });
}
function F(e) {
    var t, n;
    let { channel: i, guild: s, onClose: o, onSelectChannel: g, transitionState: j, isEvent: h = !1 } = e,
        { loading: T, error: F, onSave: R } = (0, N.Z)(i, o),
        G = l.useMemo(() => O.Z.getStageInstanceByChannel(i.id), [i.id]),
        [M, B] = l.useState(null != (t = null == G ? void 0 : G.topic) ? t : ""),
        [z, q] = l.useState(""),
        [L] = l.useState(h),
        [U, J] = l.useState({ startDate: (0, b.ib)() }),
        [V, K] = l.useState(!1),
        W = (0, v.J)(i),
        Y = (0, v.U)(i),
        H = null == G && W && !L,
        [Q, X] = l.useState(H && Y),
        $ = w.j8.GUILD_ONLY,
        [ee] = l.useState(null != (n = null == G ? void 0 : G.privacy_level) ? n : $),
        [et, en] = l.useState(null),
        er = (0, y._d)(i.id),
        el = (0, y.K3)(i.id),
        [ei, ea] = l.useState(!1),
        ec = (0, f.ZP)(i),
        es = (0, m.q)(s),
        eo = null != g,
        eu = es.length > 1;
    (0, d.ZP)(() => {
        p.default.track(k.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == G ? void 0 : G.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ed = (e) => {
            if ((e.preventDefault(), ee === w.j8.PUBLIC && M.length < 20 && !ei)) return void ea(!0);
            L ||
                null == R ||
                R({
                    topic: M,
                    privacyLevel: ee,
                    sendStartNotification: Q,
                });
        },
        ef = l.useRef(null);
    l.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let em = V && null != U.startDate && U.startDate >= a()(),
        eb = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: D.blockedUsersContainer,
                    children: null == G && (er > 0 || el > 0) && (0, r.jsx)(P.mv, { channelId: i.id }),
                }),
                (0, r.jsxs)("form", {
                    onSubmit: ed,
                    className: D.form,
                    children: [
                        (0, r.jsx)(u.oil, {
                            required: !0,
                            error: null != F ? F.getAnyErrorMessage() : void 0,
                            label: h ? C.intl.string(C.t["0HbEQ6"]) : C.intl.string(C.t["5FPBOB"]),
                            onChange: (e) => B(e),
                            helperText: ei ? C.intl.string(C.t.AqTyaR) : void 0,
                            placeholder: C.intl.string(C.t.ZwWruY),
                            maxLength: _.xA,
                            value: M,
                            autoComplete: "off",
                            inputRef: ef,
                        }),
                        eo && eu
                            ? (0, r.jsx)(A, {
                                  stageChannelsInGuild: es,
                                  channel: i,
                                  onSelectChannel: g,
                              })
                            : null,
                        L &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        className: D.formItem,
                                        onScheduleChange: J,
                                        onRecurrenceChange: (e) => {
                                            let t = U.startDate;
                                            null != t && en((0, b.mF)(e, t));
                                        },
                                        schedule: U,
                                        recurrenceRule: et,
                                        timeSelected: V,
                                        onTimeChange: K,
                                    }),
                                    null != U.startDate && U.startDate < a()()
                                        ? (0, r.jsx)(u.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: D.warning,
                                              children: C.intl.string(C.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        h &&
                            (0, r.jsx)("div", {
                                className: D.formItem,
                                children: (0, r.jsx)(u.Kx8, {
                                    label: C.intl.string(C.t["+gRCC7"]),
                                    placeholder: C.intl.string(C.t["kWO/E8"]),
                                    value: z,
                                    onChange: (e) => q(e),
                                    maxLength: w.wm,
                                }),
                            }),
                        eo && !eu
                            ? (0, r.jsx)(u.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: D.channelSelection,
                                  children: C.intl.format(C.t["S+9O7g"], {
                                      stageName: ec,
                                      stageHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: D.channelName,
                                                  children: i.name,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (0, r.jsx)(S.Z, { className: D.ageVerificationNotice }),
                    ],
                }),
            ],
        }),
        ex = {
            onClose: o,
            title: null == G ? C.intl.string(C.t.DDF0cJ) : C.intl.string(C.t.YPdQOp),
            subtitle: null == G ? C.intl.string(C.t.bqQIwa) : C.intl.string(C.t["I+9bLx"]),
            transitionState: j,
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: () => o(),
                },
                {
                    variant: "primary",
                    text: L
                        ? C.intl.string(C.t["60lJ0C"])
                        : null == G
                          ? C.intl.string(C.t.s8mM8A)
                          : C.intl.string(C.t.K344S7),
                    onClick: ed,
                    disabled: "" === M || null == ee || (h && !em),
                    loading: T,
                },
            ],
            actionBarInput: H
                ? (0, r.jsxs)(u.P3F, {
                      onClick: () => X(!Q),
                      className: D.notificationToggle,
                      children: [
                          (0, r.jsx)(u.FZ5, { checked: Q }),
                          (0, r.jsx)(u.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: C.intl.string(C.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == G
        ? (0, r.jsx)(
              c.ExpressiveModal,
              E(
                  I(
                      {
                          graphic: {
                              type: "image",
                              src: Z.Z,
                          },
                      },
                      ex,
                  ),
                  { children: eb },
              ),
          )
        : (0, r.jsx)(c.Modal, E(I({}, ex), { children: eb }));
}

n.d(t, { default: () => A }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(913527),
    a = n.n(i),
    s = n(793030),
    c = n(442837),
    o = n(668339),
    u = n(481060),
    d = n(493773),
    g = n(933557),
    m = n(884746),
    x = n(854698),
    b = n(13664),
    f = n(440371),
    j = n(810788),
    h = n(430824),
    p = n(699516),
    v = n(594174),
    O = n(626135),
    y = n(570188),
    _ = n(427679),
    S = n(930180),
    P = n(320596),
    N = n(289584),
    w = n(157925),
    C = n(981631),
    Z = n(765305),
    D = n(190378),
    I = n(388032),
    k = n(785550),
    E = n(768982);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, c.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
    return (r.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(G, {
              transitionState: i,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function B(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: r } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: k.channelSelectionFormItem,
              children: (0, l.jsx)(o.d, {
                  required: !0,
                  label: I.intl.string(I.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, g.F6)(e, v.default, p.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && r(n);
                  },
                  renderOptionPrefix: () =>
                      (0, l.jsx)(u.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
              }),
          });
}
function G(e) {
    var t, n;
    let { channel: i, guild: o, onClose: h, onSelectChannel: p, transitionState: v, isEvent: A = !1 } = e,
        { loading: G, error: R, onSave: z } = (0, N.Z)(i, h),
        M = r.useMemo(() => _.Z.getStageInstanceByChannel(i.id), [i.id]),
        [q, L] = r.useState(null != (t = null == M ? void 0 : M.topic) ? t : ""),
        [U, V] = r.useState(""),
        [J] = r.useState(A),
        [K, W] = r.useState({ startDate: (0, x.ib)() }),
        [Y, H] = r.useState(!1),
        Q = (0, y.J)(i),
        X = (0, y.U)(i),
        $ = null == M && Q && !J,
        [ee, et] = r.useState($ && X),
        en = (0, c.e7)([j.Z], () => j.Z.hasHotspot(D.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        el = Z.j8.GUILD_ONLY,
        [er] = r.useState(null != (n = null == M ? void 0 : M.privacy_level) ? n : el),
        [ei, ea] = r.useState(null),
        es = (0, S._d)(i.id),
        ec = (0, S.K3)(i.id),
        [eo, eu] = r.useState(!1),
        ed = (0, g.ZP)(i),
        eg = (0, m.q)(o),
        em = null != p,
        ex = eg.length > 1;
    (0, d.ZP)(() => {
        O.default.track(C.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == M ? void 0 : M.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let eb = (e) => {
            if ((e.preventDefault(), er === Z.j8.PUBLIC && q.length < 20 && !eo)) return void eu(!0);
            J ||
                null == z ||
                z({
                    topic: q,
                    privacyLevel: er,
                    sendStartNotification: ee,
                });
        },
        ef = r.useRef(null);
    r.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let ej = Y && null != K.startDate && K.startDate >= a()(),
        eh = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: k.blockedUsersContainer,
                    children: null == M && (es > 0 || ec > 0) && (0, l.jsx)(P.mv, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: eb,
                    className: k.form,
                    children: [
                        (0, l.jsx)(u.oil, {
                            required: !0,
                            error: null != R ? R.getAnyErrorMessage() : void 0,
                            label: A ? I.intl.string(I.t["0HbEQ6"]) : I.intl.string(I.t["5FPBOB"]),
                            onChange: (e) => L(e),
                            helperText: eo ? I.intl.string(I.t.AqTyaR) : void 0,
                            placeholder: I.intl.string(I.t.ZwWruY),
                            maxLength: w.xA,
                            value: q,
                            autoComplete: "off",
                            inputRef: ef,
                        }),
                        em && ex
                            ? (0, l.jsx)(B, {
                                  stageChannelsInGuild: eg,
                                  channel: i,
                                  onSelectChannel: p,
                              })
                            : null,
                        J &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(f.Z, {
                                        className: k.formItem,
                                        onScheduleChange: W,
                                        onRecurrenceChange: (e) => {
                                            let t = K.startDate;
                                            null != t && ea((0, x.mF)(e, t));
                                        },
                                        schedule: K,
                                        recurrenceRule: ei,
                                        timeSelected: Y,
                                        onTimeChange: H,
                                    }),
                                    null != K.startDate && K.startDate < a()()
                                        ? (0, l.jsx)(u.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: k.warning,
                                              children: I.intl.string(I.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        A &&
                            (0, l.jsx)("div", {
                                className: k.formItem,
                                children: (0, l.jsx)(u.Kx8, {
                                    label: I.intl.string(I.t["+gRCC7"]),
                                    placeholder: I.intl.string(I.t["kWO/E8"]),
                                    value: U,
                                    onChange: (e) => V(e),
                                    maxLength: Z.wm,
                                }),
                            }),
                        $
                            ? (0, l.jsx)(b.Z, {
                                  sendStartNotification: ee,
                                  setSendStartNotification: et,
                                  showNotificationNewBadge: en,
                              })
                            : null,
                        em && !ex
                            ? (0, l.jsx)(u.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: k.channelSelection,
                                  children: I.intl.format(I.t["S+9O7g"], {
                                      stageName: ed,
                                      stageHook: (e, t) =>
                                          (0, l.jsx)(
                                              "span",
                                              {
                                                  className: k.channelName,
                                                  children: i.name,
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
        ep = {
            title: null == M ? I.intl.string(I.t.DDF0cJ) : I.intl.string(I.t.YPdQOp),
            subtitle: null == M ? I.intl.string(I.t.bqQIwa) : I.intl.string(I.t["I+9bLx"]),
            transitionState: v,
            actions: [
                {
                    variant: "secondary",
                    text: I.intl.string(I.t["ETE/oC"]),
                    onClick: () => h(),
                },
                {
                    variant: "primary",
                    text: J
                        ? I.intl.string(I.t["60lJ0C"])
                        : null == M
                          ? I.intl.string(I.t.s8mM8A)
                          : I.intl.string(I.t.K344S7),
                    onClick: eb,
                    disabled: "" === q || null == er || (A && !ej),
                    loading: G,
                },
            ],
            onClose: h,
        };
    return null == M
        ? (0, l.jsx)(
              s.ExpressiveModal,
              F(
                  T(
                      {
                          graphic: {
                              type: "image",
                              src: E.Z,
                          },
                      },
                      ep,
                  ),
                  { children: eh },
              ),
          )
        : (0, l.jsx)(s.Modal, F(T({}, ep), { children: eh }));
}

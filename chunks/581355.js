n.d(t, { default: () => F }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(913527),
    a = n.n(i),
    s = n(793030),
    c = n(442837),
    o = n(481060),
    u = n(493773),
    d = n(933557),
    g = n(884746),
    m = n(854698),
    b = n(13664),
    x = n(440371),
    f = n(810788),
    h = n(430824),
    j = n(699516),
    p = n(594174),
    v = n(626135),
    O = n(570188),
    y = n(427679),
    _ = n(930180),
    S = n(320596),
    P = n(289584),
    N = n(157925),
    w = n(981631),
    C = n(765305),
    Z = n(190378),
    D = n(388032),
    I = n(785550),
    k = n(768982);
function E(e) {
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
function T(e, t) {
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
function F(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, c.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
    return (l.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, r.jsx)(G, {
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
              className: I.channelSelectionFormItem,
              children: (0, r.jsx)(o.VcW, {
                  required: !0,
                  label: D.intl.string(D.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, d.F6)(e, p.default, j.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && l(n);
                  },
                  renderOptionPrefix: () =>
                      (0, r.jsx)(o.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
              }),
          });
}
function G(e) {
    var t, n;
    let { channel: i, guild: h, onClose: j, onSelectChannel: p, transitionState: F, isEvent: G = !1 } = e,
        { loading: R, error: B, onSave: z } = (0, P.Z)(i, j),
        M = l.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]),
        [q, L] = l.useState(null != (t = null == M ? void 0 : M.topic) ? t : ""),
        [V, U] = l.useState(""),
        [J] = l.useState(G),
        [W, K] = l.useState({ startDate: (0, m.ib)() }),
        [Y, H] = l.useState(!1),
        Q = (0, O.J)(i),
        X = (0, O.U)(i),
        $ = null == M && Q && !J,
        [ee, et] = l.useState($ && X),
        en = (0, c.e7)([f.Z], () => f.Z.hasHotspot(Z.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = C.j8.GUILD_ONLY,
        [el] = l.useState(null != (n = null == M ? void 0 : M.privacy_level) ? n : er),
        [ei, ea] = l.useState(null),
        es = (0, _._d)(i.id),
        ec = (0, _.K3)(i.id),
        [eo, eu] = l.useState(!1),
        ed = (0, d.ZP)(i),
        eg = (0, g.q)(h),
        em = null != p,
        eb = eg.length > 1;
    (0, u.ZP)(() => {
        v.default.track(w.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == M ? void 0 : M.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ex = (e) => {
            if ((e.preventDefault(), el === C.j8.PUBLIC && q.length < 20 && !eo)) return void eu(!0);
            J ||
                null == z ||
                z({
                    topic: q,
                    privacyLevel: el,
                    sendStartNotification: ee,
                });
        },
        ef = l.useRef(null);
    l.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let eh = Y && null != W.startDate && W.startDate >= a()(),
        ej = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: I.blockedUsersContainer,
                    children: null == M && (es > 0 || ec > 0) && (0, r.jsx)(S.mv, { channelId: i.id }),
                }),
                (0, r.jsxs)("form", {
                    onSubmit: ex,
                    className: I.form,
                    children: [
                        (0, r.jsx)(o.oil, {
                            required: !0,
                            error: null != B ? B.getAnyErrorMessage() : void 0,
                            label: G ? D.intl.string(D.t["0HbEQ6"]) : D.intl.string(D.t["5FPBOB"]),
                            onChange: (e) => L(e),
                            helperText: eo ? D.intl.string(D.t.AqTyaR) : void 0,
                            placeholder: D.intl.string(D.t.ZwWruY),
                            maxLength: N.xA,
                            value: q,
                            autoComplete: "off",
                            inputRef: ef,
                        }),
                        em && eb
                            ? (0, r.jsx)(A, {
                                  stageChannelsInGuild: eg,
                                  channel: i,
                                  onSelectChannel: p,
                              })
                            : null,
                        J &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        className: I.formItem,
                                        onScheduleChange: K,
                                        onRecurrenceChange: (e) => {
                                            let t = W.startDate;
                                            null != t && ea((0, m.mF)(e, t));
                                        },
                                        schedule: W,
                                        recurrenceRule: ei,
                                        timeSelected: Y,
                                        onTimeChange: H,
                                    }),
                                    null != W.startDate && W.startDate < a()()
                                        ? (0, r.jsx)(o.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: I.warning,
                                              children: D.intl.string(D.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        G &&
                            (0, r.jsx)("div", {
                                className: I.formItem,
                                children: (0, r.jsx)(o.Kx8, {
                                    label: D.intl.string(D.t["+gRCC7"]),
                                    placeholder: D.intl.string(D.t["kWO/E8"]),
                                    value: V,
                                    onChange: (e) => U(e),
                                    maxLength: C.wm,
                                }),
                            }),
                        $
                            ? (0, r.jsx)(b.Z, {
                                  sendStartNotification: ee,
                                  setSendStartNotification: et,
                                  showNotificationNewBadge: en,
                              })
                            : null,
                        em && !eb
                            ? (0, r.jsx)(o.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  className: I.channelSelection,
                                  children: D.intl.format(D.t["S+9O7g"], {
                                      stageName: ed,
                                      stageHook: (e, t) =>
                                          (0, r.jsx)(
                                              "span",
                                              {
                                                  className: I.channelName,
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
            title: null == M ? D.intl.string(D.t.DDF0cJ) : D.intl.string(D.t.YPdQOp),
            subtitle: null == M ? D.intl.string(D.t.bqQIwa) : D.intl.string(D.t["I+9bLx"]),
            transitionState: F,
            actions: [
                {
                    variant: "secondary",
                    text: D.intl.string(D.t["ETE/oC"]),
                    onClick: () => j(),
                },
                {
                    variant: "primary",
                    text: J
                        ? D.intl.string(D.t["60lJ0C"])
                        : null == M
                          ? D.intl.string(D.t.s8mM8A)
                          : D.intl.string(D.t.K344S7),
                    onClick: ex,
                    disabled: "" === q || null == el || (G && !eh),
                    loading: R,
                },
            ],
            onClose: j,
        };
    return null == M
        ? (0, r.jsx)(
              s.ExpressiveModal,
              T(
                  E(
                      {
                          graphic: {
                              type: "image",
                              src: k.Z,
                          },
                      },
                      ep,
                  ),
                  { children: ej },
              ),
          )
        : (0, r.jsx)(s.Modal, T(E({}, ep), { children: ej }));
}

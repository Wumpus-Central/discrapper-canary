n.d(t, { default: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(793030),
    c = n(442837),
    o = n(481060),
    u = n(493773),
    d = n(933557),
    g = n(884746),
    m = n(954313),
    x = n(13664),
    b = n(440371),
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
    Z = n(765305),
    C = n(190378),
    D = n(388032),
    k = n(785550),
    I = n(768982);
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
              className: k.channelSelectionFormItem,
              children: (0, r.jsx)(o.VcW, {
                  required: !0,
                  label: D.intl.string(D.t.S7GjDw),
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
        { loading: M, error: R, onSave: B } = (0, P.Z)(i, j),
        q = l.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]),
        [z, L] = l.useState(null != (t = null == q ? void 0 : q.topic) ? t : ""),
        [U, V] = l.useState(""),
        [K] = l.useState(G),
        [W, J] = l.useState({ startDate: (0, m.ib)() }),
        [H, Q] = l.useState(!1),
        Y = (0, O.J)(i),
        X = (0, O.U)(i),
        $ = null == q && Y && !K,
        [ee, et] = l.useState($ && X),
        en = (0, c.e7)([f.Z], () => f.Z.hasHotspot(C.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = Z.j8.GUILD_ONLY,
        [el] = l.useState(null != (n = null == q ? void 0 : q.privacy_level) ? n : er),
        [ei, ea] = l.useState(null),
        es = (0, _._d)(i.id),
        ec = (0, _.K3)(i.id),
        [eo, eu] = l.useState(!1),
        ed = (0, d.ZP)(i),
        eg = (0, g.q)(h),
        em = null != p,
        ex = eg.length > 1;
    (0, u.ZP)(() => {
        v.default.track(w.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == q ? void 0 : q.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let eb = (e) => {
            if ((e.preventDefault(), el === Z.j8.PUBLIC && z.length < 20 && !eo)) return void eu(!0);
            K ||
                null == B ||
                B({
                    topic: z,
                    privacyLevel: el,
                    sendStartNotification: ee,
                });
        },
        ef = l.useRef(null);
    l.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let eh = H && null != W.startDate && W.startDate >= a()(),
        ej = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: k.blockedUsersContainer,
                    children: null == q && (es > 0 || ec > 0) && (0, r.jsx)(S.mv, { channelId: i.id }),
                }),
                (0, r.jsxs)("form", {
                    onSubmit: eb,
                    className: k.form,
                    children: [
                        (0, r.jsx)(o.oil, {
                            required: !0,
                            error: null != R ? R.getAnyErrorMessage() : void 0,
                            label: G ? D.intl.string(D.t["0HbEQ0"]) : D.intl.string(D.t["5FPBOD"]),
                            onChange: (e) => L(e),
                            helperText: eo ? D.intl.string(D.t.AqTyaW) : void 0,
                            placeholder: D.intl.string(D.t.ZwWrub),
                            maxLength: N.xA,
                            value: z,
                            autoComplete: "off",
                            inputRef: ef,
                        }),
                        em && ex
                            ? (0, r.jsx)(A, {
                                  stageChannelsInGuild: eg,
                                  channel: i,
                                  onSelectChannel: p,
                              })
                            : null,
                        K &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        className: k.formItem,
                                        onScheduleChange: J,
                                        onRecurrenceChange: (e) => {
                                            let t = W.startDate;
                                            null != t && ea((0, m.mF)(e, t));
                                        },
                                        schedule: W,
                                        recurrenceRule: ei,
                                        timeSelected: H,
                                        onTimeChange: Q,
                                    }),
                                    null != W.startDate && W.startDate < a()()
                                        ? (0, r.jsx)(o.Text, {
                                              color: "text-danger",
                                              variant: "text-xs/normal",
                                              className: k.warning,
                                              children: D.intl.string(D.t.AXR5Sk),
                                          })
                                        : null,
                                ],
                            }),
                        G &&
                            (0, r.jsx)("div", {
                                className: k.formItem,
                                children: (0, r.jsx)(o.Kx8, {
                                    label: D.intl.string(D.t["+gRCCw"]),
                                    placeholder: D.intl.string(D.t["kWO/Ex"]),
                                    value: U,
                                    onChange: (e) => V(e),
                                    maxLength: Z.wm,
                                }),
                            }),
                        $
                            ? (0, r.jsx)(x.Z, {
                                  sendStartNotification: ee,
                                  setSendStartNotification: et,
                                  showNotificationNewBadge: en,
                              })
                            : null,
                        em && !ex
                            ? (0, r.jsx)(o.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  className: k.channelSelection,
                                  children: D.intl.format(D.t["S+9O7u"], {
                                      stageName: ed,
                                      stageHook: (e, t) =>
                                          (0, r.jsx)(
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
            title: null == q ? D.intl.string(D.t.DDF0cH) : D.intl.string(D.t.YPdQOj),
            subtitle: null == q ? D.intl.string(D.t.bqQIwc) : D.intl.string(D.t["I+9bLy"]),
            transitionState: F,
            actions: [
                {
                    variant: "secondary",
                    text: D.intl.string(D.t["ETE/oK"]),
                    onClick: () => j(),
                },
                {
                    variant: "primary",
                    text: K
                        ? D.intl.string(D.t["60lJ0N"])
                        : null == q
                          ? D.intl.string(D.t.s8mM8P)
                          : D.intl.string(D.t.K344S0),
                    onClick: eb,
                    disabled: "" === z || null == el || (G && !eh),
                    loading: M,
                },
            ],
            onClose: j,
        };
    return null == q
        ? (0, r.jsx)(
              s.ExpressiveModal,
              T(
                  E(
                      {
                          graphic: {
                              type: "image",
                              src: I.Z,
                          },
                      },
                      ep,
                  ),
                  { children: ej },
              ),
          )
        : (0, r.jsx)(s.Modal, T(E({}, ep), { children: ej }));
}

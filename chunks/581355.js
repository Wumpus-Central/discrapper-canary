n.d(t, { default: () => E }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(913527),
    a = n.n(i),
    c = n(793030),
    s = n(442837),
    o = n(481060),
    u = n(493773),
    d = n(933557),
    f = n(884746),
    m = n(854698),
    g = n(440371),
    x = n(430824),
    b = n(699516),
    j = n(594174),
    h = n(626135),
    p = n(570188),
    v = n(427679),
    O = n(930180),
    y = n(320596),
    P = n(937096),
    S = n(289584),
    N = n(157925),
    _ = n(981631),
    C = n(765305),
    w = n(388032),
    Z = n(452594),
    k = n(787068);
function D(e) {
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
function I(e, t) {
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
function E(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, s.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
    return (r.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(F, {
              transitionState: i,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function T(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: r } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: Z.channelSelectionFormItem,
              children: (0, l.jsx)(o.VcW, {
                  selectionMode: "single",
                  required: !0,
                  label: w.intl.string(w.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, d.F6)(e, j.default, b.Z, !0),
                      leading: (0, l.jsx)(o.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
                  })),
                  onSelectionChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && r(n);
                  },
              }),
          });
}
function F(e) {
    var t, n;
    let { channel: i, guild: s, onClose: x, onSelectChannel: b, transitionState: j, isEvent: E = !1 } = e,
        { loading: F, error: R, onSave: A } = (0, S.Z)(i, x),
        G = r.useMemo(() => v.Z.getStageInstanceByChannel(i.id), [i.id]),
        [M, z] = r.useState(null != (t = null == G ? void 0 : G.topic) ? t : ""),
        [B, q] = r.useState(""),
        [L] = r.useState(E),
        [U, J] = r.useState({ startDate: (0, m.ib)() }),
        [V, W] = r.useState(!1),
        K = (0, p.J)(i),
        Y = (0, p.U)(i),
        H = null == G && K && !L,
        [Q, X] = r.useState(H && Y),
        $ = C.j8.GUILD_ONLY,
        [ee] = r.useState(null != (n = null == G ? void 0 : G.privacy_level) ? n : $),
        [et, en] = r.useState(null),
        el = (0, O._d)(i.id),
        er = (0, O.K3)(i.id),
        [ei, ea] = r.useState(!1),
        ec = (0, d.ZP)(i),
        es = (0, f.q)(s),
        eo = null != b,
        eu = es.length > 1;
    (0, u.ZP)(() => {
        h.default.track(_.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == G ? void 0 : G.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ed = (e) => {
            if ((e.preventDefault(), ee === C.j8.PUBLIC && M.length < 20 && !ei)) return void ea(!0);
            L ||
                null == A ||
                A({
                    topic: M,
                    privacyLevel: ee,
                    sendStartNotification: Q,
                });
        },
        ef = r.useRef(null);
    r.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let em = V && null != U.startDate && U.startDate >= a()(),
        eg = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: Z.blockedUsersContainer,
                    children: null == G && (el > 0 || er > 0) && (0, l.jsx)(y.mv, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: ed,
                    className: Z.form,
                    children: [
                        (0, l.jsx)(o.oil, {
                            required: !0,
                            error: null != R ? R.getAnyErrorMessage() : void 0,
                            label: E ? w.intl.string(w.t["0HbEQ6"]) : w.intl.string(w.t["5FPBOB"]),
                            onChange: (e) => z(e),
                            helperText: ei ? w.intl.string(w.t.AqTyaR) : void 0,
                            placeholder: w.intl.string(w.t.ZwWruY),
                            maxLength: N.xA,
                            value: M,
                            autoComplete: "off",
                            inputRef: ef,
                        }),
                        eo && eu
                            ? (0, l.jsx)(T, {
                                  stageChannelsInGuild: es,
                                  channel: i,
                                  onSelectChannel: b,
                              })
                            : null,
                        L &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(g.Z, {
                                        className: Z.formItem,
                                        onScheduleChange: J,
                                        onRecurrenceChange: (e) => {
                                            let t = U.startDate;
                                            null != t && en((0, m.mF)(e, t));
                                        },
                                        schedule: U,
                                        recurrenceRule: et,
                                        timeSelected: V,
                                        onTimeChange: W,
                                    }),
                                    null != U.startDate && U.startDate < a()()
                                        ? (0, l.jsx)(o.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: Z.warning,
                                              children: w.intl.string(w.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        E &&
                            (0, l.jsx)("div", {
                                className: Z.formItem,
                                children: (0, l.jsx)(o.Kx8, {
                                    label: w.intl.string(w.t["+gRCC7"]),
                                    placeholder: w.intl.string(w.t["kWO/E8"]),
                                    value: B,
                                    onChange: (e) => q(e),
                                    maxLength: C.wm,
                                }),
                            }),
                        eo && !eu
                            ? (0, l.jsx)(o.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: Z.channelSelection,
                                  children: w.intl.format(w.t["S+9O7g"], {
                                      stageName: ec,
                                      stageHook: (e, t) =>
                                          (0, l.jsx)(
                                              "span",
                                              {
                                                  className: Z.channelName,
                                                  children: i.name,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (0, l.jsx)(P.Z, { className: Z.ageVerificationNotice }),
                    ],
                }),
            ],
        }),
        ex = {
            onClose: x,
            title: null == G ? w.intl.string(w.t.DDF0cJ) : w.intl.string(w.t.YPdQOp),
            subtitle: null == G ? w.intl.string(w.t.bqQIwa) : w.intl.string(w.t["I+9bLx"]),
            transitionState: j,
            actions: [
                {
                    variant: "secondary",
                    text: w.intl.string(w.t["ETE/oC"]),
                    onClick: () => x(),
                },
                {
                    variant: "primary",
                    text: L
                        ? w.intl.string(w.t["60lJ0C"])
                        : null == G
                          ? w.intl.string(w.t.s8mM8A)
                          : w.intl.string(w.t.K344S7),
                    onClick: ed,
                    disabled: "" === M || null == ee || (E && !em),
                    loading: F,
                },
            ],
            actionBarInput: H
                ? (0, l.jsxs)(o.P3F, {
                      onClick: () => X(!Q),
                      className: Z.notificationToggle,
                      children: [
                          (0, l.jsx)(o.FZ5, { checked: Q }),
                          (0, l.jsx)(o.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: w.intl.string(w.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == G
        ? (0, l.jsx)(
              c.ExpressiveModal,
              I(
                  D(
                      {
                          graphic: {
                              type: "image",
                              src: k.Z,
                          },
                      },
                      ex,
                  ),
                  { children: eg },
              ),
          )
        : (0, l.jsx)(c.Modal, I(D({}, ex), { children: eg }));
}

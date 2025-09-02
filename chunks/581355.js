n.d(t, { default: () => F }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    c = n(667202),
    s = n(82659),
    u = n(481060),
    d = n(493773),
    f = n(933557),
    g = n(884746),
    b = n(954313),
    m = n(13664),
    p = n(440371),
    h = n(810788),
    x = n(430824),
    _ = n(699516),
    j = n(594174),
    O = n(626135),
    v = n(570188),
    y = n(427679),
    S = n(930180),
    w = n(320596),
    I = n(289584),
    N = n(157925),
    P = n(981631),
    C = n(765305),
    E = n(190378),
    Z = n(388032),
    k = n(785550),
    D = n(768982);
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
function A(e, t) {
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
function F(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
    return (r.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(J, {
              transitionState: i,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function G(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: r } = e;
    return null == r
        ? null
        : (0, l.jsx)(u.xJW, {
              title: Z.intl.string(Z.t.S7GjDw),
              className: k.channelSelectionFormItem,
              required: !0,
              children: (0, l.jsx)(u.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, f.F6)(e, j.default, _.Z, !0),
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
function J(e) {
    var t, n;
    let { channel: i, guild: x, onClose: _, onSelectChannel: j, transitionState: F, isEvent: J = !1 } = e,
        { loading: B, error: R, onSave: L } = (0, I.Z)(i, _),
        M = r.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]),
        [U, W] = r.useState(null != (t = null == M ? void 0 : M.topic) ? t : ""),
        [H, V] = r.useState(""),
        [q] = r.useState(J),
        [K, Y] = r.useState({ startDate: (0, b.ib)() }),
        [Q, X] = r.useState(!1),
        z = (0, v.J)(i),
        $ = (0, v.U)(i),
        ee = null == M && z && !q,
        [et, en] = r.useState(ee && $),
        el = (0, o.e7)([h.Z], () => h.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        er = C.j8.GUILD_ONLY,
        [ei] = r.useState(null != (n = null == M ? void 0 : M.privacy_level) ? n : er),
        [ea, eo] = r.useState(null),
        ec = (0, S._d)(i.id),
        es = (0, S.K3)(i.id),
        [eu, ed] = r.useState(!1),
        ef = (0, f.ZP)(i),
        eg = (0, g.q)(x),
        eb = null != j,
        em = eg.length > 1;
    (0, d.ZP)(() => {
        O.default.track(P.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == M ? void 0 : M.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ep = (e) => {
            if ((e.preventDefault(), ei === C.j8.PUBLIC && U.length < 20 && !eu)) return void ed(!0);
            q ||
                null == L ||
                L({
                    topic: U,
                    privacyLevel: ei,
                    sendStartNotification: et,
                });
        },
        eh = r.useRef(null);
    r.useEffect(() => {
        var e;
        null == (e = eh.current) || e.focus();
    }, []);
    let ex = Q && null != K.startDate && K.startDate >= a()(),
        e_ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: k.blockedUsersContainer,
                    children: null == M && (ec > 0 || es > 0) && (0, l.jsx)(w.mv, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: ep,
                    className: k.form,
                    children: [
                        (0, l.jsxs)(u.xJW, {
                            title: J ? Z.intl.string(Z.t["0HbEQ0"]) : Z.intl.string(Z.t["5FPBOD"]),
                            required: !0,
                            children: [
                                (0, l.jsx)(u.oil, {
                                    onChange: (e) => W(e),
                                    placeholder: Z.intl.string(Z.t.ZwWrub),
                                    maxLength: N.xA,
                                    value: U,
                                    autoComplete: "off",
                                    inputRef: eh,
                                }),
                                eu &&
                                    (0, l.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: k.warning,
                                        children: Z.intl.string(Z.t.AqTyaW),
                                    }),
                                null != R
                                    ? (0, l.jsx)(u.Text, {
                                          color: "text-danger",
                                          variant: "text-xs/normal",
                                          className: k.warning,
                                          children: R.getAnyErrorMessage(),
                                      })
                                    : null,
                            ],
                        }),
                        eb && em
                            ? (0, l.jsx)(G, {
                                  stageChannelsInGuild: eg,
                                  channel: i,
                                  onSelectChannel: j,
                              })
                            : null,
                        q &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(p.Z, {
                                        className: k.formItem,
                                        onScheduleChange: Y,
                                        onRecurrenceChange: (e) => {
                                            let t = K.startDate;
                                            null != t && eo((0, b.mF)(e, t));
                                        },
                                        schedule: K,
                                        recurrenceRule: ea,
                                        timeSelected: Q,
                                        onTimeChange: X,
                                    }),
                                    null != K.startDate && K.startDate < a()()
                                        ? (0, l.jsx)(u.Text, {
                                              color: "text-danger",
                                              variant: "text-xs/normal",
                                              className: k.warning,
                                              children: Z.intl.string(Z.t.AXR5Sk),
                                          })
                                        : null,
                                ],
                            }),
                        J &&
                            (0, l.jsx)(u.xJW, {
                                title: Z.intl.string(Z.t["+gRCCw"]),
                                className: k.formItem,
                                children: (0, l.jsx)(u.Kx8, {
                                    placeholder: Z.intl.string(Z.t["kWO/Ex"]),
                                    value: H,
                                    onChange: (e) => V(e),
                                    maxLength: C.wm,
                                }),
                            }),
                        ee
                            ? (0, l.jsx)(m.Z, {
                                  sendStartNotification: et,
                                  setSendStartNotification: en,
                                  showNotificationNewBadge: el,
                              })
                            : null,
                        eb && !em
                            ? (0, l.jsx)(u.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  className: k.channelSelection,
                                  children: Z.intl.format(Z.t["S+9O7u"], {
                                      stageName: ef,
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
        ej = {
            title: null == M ? Z.intl.string(Z.t.DDF0cH) : Z.intl.string(Z.t.YPdQOj),
            subtitle: null == M ? Z.intl.string(Z.t.bqQIwc) : Z.intl.string(Z.t["I+9bLy"]),
            transitionState: F,
            actions: [
                {
                    variant: "secondary",
                    text: Z.intl.string(Z.t["ETE/oK"]),
                    onClick: () => _(),
                },
                {
                    variant: "primary",
                    text: q
                        ? Z.intl.string(Z.t["60lJ0N"])
                        : null == M
                          ? Z.intl.string(Z.t.s8mM8P)
                          : Z.intl.string(Z.t.K344S0),
                    onClick: ep,
                    disabled: "" === U || null == ei || (J && !ex),
                    loading: B,
                },
            ],
            onClose: _,
        };
    return null == M
        ? (0, l.jsx)(
              c.I,
              A(
                  T(
                      {
                          graphic: {
                              type: "image",
                              src: D.Z,
                          },
                      },
                      ej,
                  ),
                  { children: e_ },
              ),
          )
        : (0, l.jsx)(s.Modal, A(T({}, ej), { children: e_ }));
}

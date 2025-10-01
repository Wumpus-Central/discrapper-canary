n.d(t, { default: () => A }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(667202),
    c = n(82659),
    u = n(481060),
    d = n(493773),
    g = n(933557),
    m = n(884746),
    b = n(954313),
    x = n(13664),
    f = n(440371),
    j = n(810788),
    h = n(430824),
    p = n(699516),
    O = n(594174),
    v = n(626135),
    y = n(570188),
    P = n(427679),
    _ = n(930180),
    S = n(320596),
    w = n(289584),
    N = n(157925),
    D = n(981631),
    Z = n(765305),
    C = n(190378),
    k = n(388032),
    I = n(785550),
    E = n(768982);
function T(e) {
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
function F(e, t) {
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
function A(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, s.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
    return (l.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, r.jsx)(M, {
              transitionState: i,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function G(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: l } = e;
    return null == l
        ? null
        : (0, r.jsx)(u.xJW, {
              title: k.intl.string(k.t.S7GjDw),
              className: I.channelSelectionFormItem,
              required: !0,
              children: (0, r.jsx)(u.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, g.F6)(e, O.default, p.Z, !0),
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
function M(e) {
    var t, n;
    let { channel: i, guild: h, onClose: p, onSelectChannel: O, transitionState: A, isEvent: M = !1 } = e,
        { loading: R, error: B, onSave: q } = (0, w.Z)(i, p),
        z = l.useMemo(() => P.Z.getStageInstanceByChannel(i.id), [i.id]),
        [L, U] = l.useState(null != (t = null == z ? void 0 : z.topic) ? t : ""),
        [V, W] = l.useState(""),
        [J] = l.useState(M),
        [K, H] = l.useState({ startDate: (0, b.ib)() }),
        [Q, Y] = l.useState(!1),
        X = (0, y.J)(i),
        $ = (0, y.U)(i),
        ee = null == z && X && !J,
        [et, en] = l.useState(ee && $),
        er = (0, s.e7)([j.Z], () => j.Z.hasHotspot(C.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        el = Z.j8.GUILD_ONLY,
        [ei] = l.useState(null != (n = null == z ? void 0 : z.privacy_level) ? n : el),
        [ea, es] = l.useState(null),
        eo = (0, _._d)(i.id),
        ec = (0, _.K3)(i.id),
        [eu, ed] = l.useState(!1),
        eg = (0, g.ZP)(i),
        em = (0, m.q)(h),
        eb = null != O,
        ex = em.length > 1;
    (0, d.ZP)(() => {
        v.default.track(D.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == z ? void 0 : z.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ef = (e) => {
            if ((e.preventDefault(), ei === Z.j8.PUBLIC && L.length < 20 && !eu)) return void ed(!0);
            J ||
                null == q ||
                q({
                    topic: L,
                    privacyLevel: ei,
                    sendStartNotification: et,
                });
        },
        ej = l.useRef(null);
    l.useEffect(() => {
        var e;
        null == (e = ej.current) || e.focus();
    }, []);
    let eh = Q && null != K.startDate && K.startDate >= a()(),
        ep = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: I.blockedUsersContainer,
                    children: null == z && (eo > 0 || ec > 0) && (0, r.jsx)(S.mv, { channelId: i.id }),
                }),
                (0, r.jsxs)("form", {
                    onSubmit: ef,
                    className: I.form,
                    children: [
                        (0, r.jsxs)(u.xJW, {
                            title: M ? k.intl.string(k.t["0HbEQ0"]) : k.intl.string(k.t["5FPBOD"]),
                            required: !0,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    onChange: (e) => U(e),
                                    placeholder: k.intl.string(k.t.ZwWrub),
                                    maxLength: N.xA,
                                    value: L,
                                    autoComplete: "off",
                                    inputRef: ej,
                                }),
                                eu &&
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: I.warning,
                                        children: k.intl.string(k.t.AqTyaW),
                                    }),
                                null != B
                                    ? (0, r.jsx)(u.Text, {
                                          color: "text-danger",
                                          variant: "text-xs/normal",
                                          className: I.warning,
                                          children: B.getAnyErrorMessage(),
                                      })
                                    : null,
                            ],
                        }),
                        eb && ex
                            ? (0, r.jsx)(G, {
                                  stageChannelsInGuild: em,
                                  channel: i,
                                  onSelectChannel: O,
                              })
                            : null,
                        J &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        className: I.formItem,
                                        onScheduleChange: H,
                                        onRecurrenceChange: (e) => {
                                            let t = K.startDate;
                                            null != t && es((0, b.mF)(e, t));
                                        },
                                        schedule: K,
                                        recurrenceRule: ea,
                                        timeSelected: Q,
                                        onTimeChange: Y,
                                    }),
                                    null != K.startDate && K.startDate < a()()
                                        ? (0, r.jsx)(u.Text, {
                                              color: "text-danger",
                                              variant: "text-xs/normal",
                                              className: I.warning,
                                              children: k.intl.string(k.t.AXR5Sk),
                                          })
                                        : null,
                                ],
                            }),
                        M &&
                            (0, r.jsx)(u.xJW, {
                                title: k.intl.string(k.t["+gRCCw"]),
                                className: I.formItem,
                                children: (0, r.jsx)(u.Kx8, {
                                    placeholder: k.intl.string(k.t["kWO/Ex"]),
                                    value: V,
                                    onChange: (e) => W(e),
                                    maxLength: Z.wm,
                                }),
                            }),
                        ee
                            ? (0, r.jsx)(x.Z, {
                                  sendStartNotification: et,
                                  setSendStartNotification: en,
                                  showNotificationNewBadge: er,
                              })
                            : null,
                        eb && !ex
                            ? (0, r.jsx)(u.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  className: I.channelSelection,
                                  children: k.intl.format(k.t["S+9O7u"], {
                                      stageName: eg,
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
        eO = {
            title: null == z ? k.intl.string(k.t.DDF0cH) : k.intl.string(k.t.YPdQOj),
            subtitle: null == z ? k.intl.string(k.t.bqQIwc) : k.intl.string(k.t["I+9bLy"]),
            transitionState: A,
            actions: [
                {
                    variant: "secondary",
                    text: k.intl.string(k.t["ETE/oK"]),
                    onClick: () => p(),
                },
                {
                    variant: "primary",
                    text: J
                        ? k.intl.string(k.t["60lJ0N"])
                        : null == z
                          ? k.intl.string(k.t.s8mM8P)
                          : k.intl.string(k.t.K344S0),
                    onClick: ef,
                    disabled: "" === L || null == ei || (M && !eh),
                    loading: R,
                },
            ],
            onClose: p,
        };
    return null == z
        ? (0, r.jsx)(
              o.ExpressiveModal,
              F(
                  T(
                      {
                          graphic: {
                              type: "image",
                              src: E.Z,
                          },
                      },
                      eO,
                  ),
                  { children: ep },
              ),
          )
        : (0, r.jsx)(c.Modal, F(T({}, eO), { children: ep }));
}

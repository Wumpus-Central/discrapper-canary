n.d(t, { default: () => k }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    c = n(82659),
    s = n(481060),
    u = n(493773),
    d = n(933557),
    g = n(884746),
    f = n(954313),
    b = n(13664),
    m = n(440371),
    p = n(810788),
    h = n(430824),
    _ = n(699516),
    x = n(594174),
    j = n(626135),
    O = n(570188),
    v = n(427679),
    y = n(930180),
    S = n(320596),
    w = n(289584),
    N = n(157925),
    I = n(981631),
    C = n(765305),
    P = n(190378),
    E = n(388032),
    T = n(785550);
function k(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        a = (0, o.e7)([h.Z], () => h.Z.getGuild(t.guild_id)),
        { loading: c, error: s, onSave: u } = (0, w.Z)(t, n);
    return (r.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(Z, {
              transitionState: i,
              guild: a,
              channel: t,
              onSave: u,
              error: s,
              loading: c,
              onClose: n,
          });
}
function D(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: r } = e;
    return null == r
        ? null
        : (0, l.jsx)(s.xJW, {
              title: E.intl.string(E.t.S7GjDw),
              className: T.channelSelectionFormItem,
              required: !0,
              children: (0, l.jsx)(s.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, d.F6)(e, x.default, _.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && r(n);
                  },
                  renderOptionPrefix: () =>
                      (0, l.jsx)(s.ewx, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                      }),
              }),
          });
}
function Z(e) {
    var t, n;
    let {
            channel: i,
            guild: h,
            error: _,
            loading: x,
            onSave: w,
            onEventSave: k,
            onClose: Z,
            onSelectChannel: A,
            transitionState: G,
            isEvent: F = !1,
        } = e,
        J = r.useMemo(() => v.Z.getStageInstanceByChannel(i.id), [i.id]),
        [B, R] = r.useState(null != (t = null == J ? void 0 : J.topic) ? t : ""),
        [L, M] = r.useState(""),
        [W] = r.useState(F),
        [U, H] = r.useState({ startDate: (0, f.ib)() }),
        [V, q] = r.useState(!1),
        K = (0, O.J)(i),
        Y = (0, O.U)(i),
        X = null == J && K && !W,
        [Q, z] = r.useState(X && Y),
        $ = (0, o.e7)([p.Z], () => p.Z.hasHotspot(P.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ee = C.j8.GUILD_ONLY,
        [et] = r.useState(null != (n = null == J ? void 0 : J.privacy_level) ? n : ee),
        [en, el] = r.useState(null),
        er = (0, y._d)(i.id),
        ei = (0, y.K3)(i.id),
        [ea, eo] = r.useState(!1),
        ec = (0, d.ZP)(i),
        es = (0, g.q)(h),
        eu = null != A,
        ed = es.length > 1;
    (0, u.ZP)(() => {
        j.default.track(I.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == J ? void 0 : J.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let eg = (e) => {
            if ((e.preventDefault(), et === C.j8.PUBLIC && B.length < 20 && !ea)) return void eo(!0);
            let t = {
                topic: B,
                privacyLevel: et,
                sendStartNotification: Q,
            };
            if (W) {
                var n, l;
                if (!V) return;
                null == k ||
                    k(
                        ((n = (function (e) {
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
                        })({}, t)),
                        (l = l =
                            {
                                schedule: U,
                                description: L,
                                entityType: C.WX.STAGE_INSTANCE,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                return;
            }
            null == w || w(t);
        },
        ef = r.useRef(null);
    r.useEffect(() => {
        var e;
        null == (e = ef.current) || e.focus();
    }, []);
    let eb = V && null != U.startDate && U.startDate >= a()();
    return (0, l.jsxs)(c.Modal, {
        title: null == J ? E.intl.string(E.t.DDF0cH) : E.intl.string(E.t.YPdQOj),
        subtitle: null == J ? E.intl.string(E.t.bqQIwc) : E.intl.string(E.t["I+9bLy"]),
        transitionState: G,
        actions: [
            {
                variant: "secondary",
                text: E.intl.string(E.t["ETE/oK"]),
                onClick: () => Z(),
            },
            {
                variant: "primary",
                text: W
                    ? E.intl.string(E.t["60lJ0N"])
                    : null == J
                      ? E.intl.string(E.t.s8mM8P)
                      : E.intl.string(E.t.K344S0),
                onClick: eg,
                disabled: "" === B || null == et || (F && !eb),
                loading: x,
            },
        ],
        onClose: Z,
        children: [
            (0, l.jsx)("div", {
                className: T.blockedUsersContainer,
                children: null == J && (er > 0 || ei > 0) && (0, l.jsx)(S.mv, { channelId: i.id }),
            }),
            (0, l.jsxs)("form", {
                onSubmit: eg,
                className: T.form,
                children: [
                    (0, l.jsxs)(s.xJW, {
                        title: F ? E.intl.string(E.t["0HbEQ0"]) : E.intl.string(E.t["5FPBOD"]),
                        required: !0,
                        children: [
                            (0, l.jsx)(s.oil, {
                                onChange: (e) => R(e),
                                placeholder: E.intl.string(E.t.ZwWrub),
                                maxLength: N.xA,
                                value: B,
                                autoComplete: "off",
                                inputRef: ef,
                            }),
                            ea &&
                                (0, l.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: T.warning,
                                    children: E.intl.string(E.t.AqTyaW),
                                }),
                            null != _
                                ? (0, l.jsx)(s.Text, {
                                      color: "text-danger",
                                      variant: "text-xs/normal",
                                      className: T.warning,
                                      children: _.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    eu && ed
                        ? (0, l.jsx)(D, {
                              stageChannelsInGuild: es,
                              channel: i,
                              onSelectChannel: A,
                          })
                        : null,
                    W &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(m.Z, {
                                    className: T.formItem,
                                    onScheduleChange: H,
                                    onRecurrenceChange: (e) => {
                                        let t = U.startDate;
                                        null != t && el((0, f.mF)(e, t));
                                    },
                                    schedule: U,
                                    recurrenceRule: en,
                                    timeSelected: V,
                                    onTimeChange: q,
                                }),
                                null != U.startDate && U.startDate < a()()
                                    ? (0, l.jsx)(s.Text, {
                                          color: "text-danger",
                                          variant: "text-xs/normal",
                                          className: T.warning,
                                          children: E.intl.string(E.t.AXR5Sk),
                                      })
                                    : null,
                            ],
                        }),
                    F &&
                        (0, l.jsx)(s.xJW, {
                            title: E.intl.string(E.t["+gRCCw"]),
                            className: T.formItem,
                            children: (0, l.jsx)(s.Kx8, {
                                placeholder: E.intl.string(E.t["kWO/Ex"]),
                                value: L,
                                onChange: (e) => M(e),
                                maxLength: C.wm,
                            }),
                        }),
                    X
                        ? (0, l.jsx)(b.Z, {
                              sendStartNotification: Q,
                              setSendStartNotification: z,
                              showNotificationNewBadge: $,
                          })
                        : null,
                    eu && !ed
                        ? (0, l.jsx)(s.Text, {
                              color: "header-secondary",
                              variant: "text-xs/normal",
                              className: T.channelSelection,
                              children: E.intl.format(E.t["S+9O7u"], {
                                  stageName: ec,
                                  stageHook: (e, t) =>
                                      (0, l.jsx)(
                                          "span",
                                          {
                                              className: T.channelName,
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
    });
}

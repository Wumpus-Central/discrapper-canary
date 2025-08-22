n.d(t, { default: () => k }), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(913527),
    a = n.n(r),
    o = n(442837),
    c = n(82659),
    s = n(481060),
    u = n(493773),
    d = n(933557),
    g = n(884746),
    m = n(954313),
    f = n(13664),
    h = n(440371),
    _ = n(810788),
    x = n(430824),
    b = n(699516),
    p = n(594174),
    v = n(626135),
    j = n(570188),
    S = n(427679),
    O = n(930180),
    N = n(320596),
    I = n(289584),
    y = n(157925),
    C = n(981631),
    w = n(765305),
    E = n(190378),
    T = n(388032),
    Z = n(785550);
function k(e) {
    let { channel: t, onClose: n, transitionState: r } = e,
        a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
    return (i.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(P, {
              transitionState: r,
              guild: a,
              channel: t,
              onClose: n,
          });
}
function D(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)(s.xJW, {
              title: T.intl.string(T.t.S7GjDw),
              className: Z.channelSelectionFormItem,
              required: !0,
              children: (0, l.jsx)(s.VcW, {
                  value: n.id,
                  options: t.map((e) => ({
                      value: e.id,
                      label: (0, d.F6)(e, p.default, b.Z, !0),
                  })),
                  onChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && i(n);
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
function P(e) {
    var t, n;
    let { channel: r, guild: x, onClose: b, onSelectChannel: p, transitionState: k, isEvent: P = !1 } = e,
        { loading: A, error: F, onSave: G } = (0, I.Z)(r, b),
        J = i.useMemo(() => S.Z.getStageInstanceByChannel(r.id), [r.id]),
        [B, R] = i.useState(null != (t = null == J ? void 0 : J.topic) ? t : ""),
        [L, M] = i.useState(""),
        [U] = i.useState(P),
        [W, H] = i.useState({ startDate: (0, m.ib)() }),
        [V, q] = i.useState(!1),
        K = (0, j.J)(r),
        Y = (0, j.U)(r),
        Q = null == J && K && !U,
        [X, z] = i.useState(Q && Y),
        $ = (0, o.e7)([_.Z], () => _.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)),
        ee = w.j8.GUILD_ONLY,
        [et] = i.useState(null != (n = null == J ? void 0 : J.privacy_level) ? n : ee),
        [en, el] = i.useState(null),
        ei = (0, O._d)(r.id),
        er = (0, O.K3)(r.id),
        [ea, eo] = i.useState(!1),
        ec = (0, d.ZP)(r),
        es = (0, g.q)(x),
        eu = null != p,
        ed = es.length > 1;
    (0, u.ZP)(() => {
        v.default.track(C.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == J ? void 0 : J.id,
            can_start_public_stage: !1,
            guild_id: r.guild_id,
        });
    });
    let eg = (e) => {
            if ((e.preventDefault(), et === w.j8.PUBLIC && B.length < 20 && !ea)) return void eo(!0);
            U ||
                null == G ||
                G({
                    topic: B,
                    privacyLevel: et,
                    sendStartNotification: X,
                });
        },
        em = i.useRef(null);
    i.useEffect(() => {
        var e;
        null == (e = em.current) || e.focus();
    }, []);
    let ef = V && null != W.startDate && W.startDate >= a()();
    return (0, l.jsxs)(c.Modal, {
        title: null == J ? T.intl.string(T.t.DDF0cH) : T.intl.string(T.t.YPdQOj),
        subtitle: null == J ? T.intl.string(T.t.bqQIwc) : T.intl.string(T.t["I+9bLy"]),
        transitionState: k,
        actions: [
            {
                variant: "secondary",
                text: T.intl.string(T.t["ETE/oK"]),
                onClick: () => b(),
            },
            {
                variant: "primary",
                text: U
                    ? T.intl.string(T.t["60lJ0N"])
                    : null == J
                      ? T.intl.string(T.t.s8mM8P)
                      : T.intl.string(T.t.K344S0),
                onClick: eg,
                disabled: "" === B || null == et || (P && !ef),
                loading: A,
            },
        ],
        onClose: b,
        children: [
            (0, l.jsx)("div", {
                className: Z.blockedUsersContainer,
                children: null == J && (ei > 0 || er > 0) && (0, l.jsx)(N.mv, { channelId: r.id }),
            }),
            (0, l.jsxs)("form", {
                onSubmit: eg,
                className: Z.form,
                children: [
                    (0, l.jsxs)(s.xJW, {
                        title: P ? T.intl.string(T.t["0HbEQ0"]) : T.intl.string(T.t["5FPBOD"]),
                        required: !0,
                        children: [
                            (0, l.jsx)(s.oil, {
                                onChange: (e) => R(e),
                                placeholder: T.intl.string(T.t.ZwWrub),
                                maxLength: y.xA,
                                value: B,
                                autoComplete: "off",
                                inputRef: em,
                            }),
                            ea &&
                                (0, l.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: Z.warning,
                                    children: T.intl.string(T.t.AqTyaW),
                                }),
                            null != F
                                ? (0, l.jsx)(s.Text, {
                                      color: "text-danger",
                                      variant: "text-xs/normal",
                                      className: Z.warning,
                                      children: F.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    eu && ed
                        ? (0, l.jsx)(D, {
                              stageChannelsInGuild: es,
                              channel: r,
                              onSelectChannel: p,
                          })
                        : null,
                    U &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(h.Z, {
                                    className: Z.formItem,
                                    onScheduleChange: H,
                                    onRecurrenceChange: (e) => {
                                        let t = W.startDate;
                                        null != t && el((0, m.mF)(e, t));
                                    },
                                    schedule: W,
                                    recurrenceRule: en,
                                    timeSelected: V,
                                    onTimeChange: q,
                                }),
                                null != W.startDate && W.startDate < a()()
                                    ? (0, l.jsx)(s.Text, {
                                          color: "text-danger",
                                          variant: "text-xs/normal",
                                          className: Z.warning,
                                          children: T.intl.string(T.t.AXR5Sk),
                                      })
                                    : null,
                            ],
                        }),
                    P &&
                        (0, l.jsx)(s.xJW, {
                            title: T.intl.string(T.t["+gRCCw"]),
                            className: Z.formItem,
                            children: (0, l.jsx)(s.Kx8, {
                                placeholder: T.intl.string(T.t["kWO/Ex"]),
                                value: L,
                                onChange: (e) => M(e),
                                maxLength: w.wm,
                            }),
                        }),
                    Q
                        ? (0, l.jsx)(f.Z, {
                              sendStartNotification: X,
                              setSendStartNotification: z,
                              showNotificationNewBadge: $,
                          })
                        : null,
                    eu && !ed
                        ? (0, l.jsx)(s.Text, {
                              color: "header-secondary",
                              variant: "text-xs/normal",
                              className: Z.channelSelection,
                              children: T.intl.format(T.t["S+9O7u"], {
                                  stageName: ec,
                                  stageHook: (e, t) =>
                                      (0, l.jsx)(
                                          "span",
                                          {
                                              className: Z.channelName,
                                              children: r.name,
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

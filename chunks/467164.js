n.d(t, { default: () => E }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(158954),
    c = n(311907),
    o = n(397927),
    u = n(964486),
    d = n(47167),
    x = n(232246),
    f = n(974930),
    j = n(422845),
    g = n(71393),
    h = n(994500),
    m = n(287809),
    b = n(954571),
    p = n(272379),
    v = n(446600),
    y = n(366098),
    O = n(918192),
    A = n(660110),
    D = n(567854),
    S = n(516607),
    P = n(652215),
    w = n(988794),
    C = n(985018),
    _ = n(737782),
    k = n(973324);
function N(e) {
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
function T(e, t) {
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
        a = (0, c.bG)([g.A], () => g.A.getGuild(t.guild_id));
    return (r.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(R, {
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
        : (0, l.jsx)("div", {
              className: _.BD,
              children: (0, l.jsx)(o.ZiE, {
                  selectionMode: "single",
                  required: !0,
                  label: C.intl.string(C.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, d.m1)(e, m.default, h.A, !0),
                      leading: (0, l.jsx)(o.qux, {
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
function R(e) {
    var t, n;
    let { channel: i, guild: c, onClose: g, onSelectChannel: h, transitionState: m, isEvent: E = !1 } = e,
        { loading: R, error: I, onSave: z } = (0, D.A)(i, g),
        M = r.useMemo(() => v.A.getStageInstanceByChannel(i.id), [i.id]),
        [U, B] = r.useState(null != (t = null == M ? void 0 : M.topic) ? t : ""),
        [L, F] = r.useState(""),
        [Z] = r.useState(E),
        [q, K] = r.useState({ startDate: (0, f.jd)() }),
        [Q, X] = r.useState(!1),
        V = (0, p.Z)(i),
        J = (0, p.K)(i),
        W = null == M && V && !Z,
        [Y, H] = r.useState(W && J),
        $ = w.dD.GUILD_ONLY,
        [ee] = r.useState(null != (n = null == M ? void 0 : M.privacy_level) ? n : $),
        [et, en] = r.useState(null),
        el = (0, y.D3)(i.id),
        er = (0, y.Xk)(i.id),
        [ei, ea] = r.useState(!1),
        es = (0, d.Ay)(i),
        ec = (0, x.A)(c),
        eo = null != h,
        eu = ec.length > 1;
    (0, u.Ay)(() => {
        b.default.track(P.HAw.START_STAGE_OPENED, {
            stage_instance_id: null == M ? void 0 : M.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ed = (e) => {
            (e.preventDefault(), ee === w.dD.PUBLIC && U.length < 20 && !ei)
                ? ea(!0)
                : Z ||
                  null == z ||
                  z({
                      topic: U,
                      privacyLevel: ee,
                      sendStartNotification: Y,
                  });
        },
        ex = r.useRef(null);
    r.useEffect(() => {
        var e;
        null == (e = ex.current) || e.focus();
    }, []);
    let ef = Q && null != q.startDate && q.startDate >= a()(),
        ej = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: _.GU,
                    children: null == M && (el > 0 || er > 0) && (0, l.jsx)(O.Bw, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: ed,
                    className: _.Zd,
                    children: [
                        (0, l.jsx)(o.ksK, {
                            required: !0,
                            error: null != I ? I.getAnyErrorMessage() : void 0,
                            label: E ? C.intl.string(C.t["0HbEQ6"]) : C.intl.string(C.t["5FPBOB"]),
                            onChange: (e) => B(e),
                            helperText: ei ? C.intl.string(C.t.AqTyaR) : void 0,
                            placeholder: C.intl.string(C.t.ZwWruY),
                            maxLength: S.RY,
                            value: U,
                            autoComplete: "off",
                            inputRef: ex,
                        }),
                        eo && eu
                            ? (0, l.jsx)(G, {
                                  stageChannelsInGuild: ec,
                                  channel: i,
                                  onSelectChannel: h,
                              })
                            : null,
                        Z &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(j.A, {
                                        className: _.kz,
                                        onScheduleChange: K,
                                        onRecurrenceChange: (e) => {
                                            let t = q.startDate;
                                            null == t || en((0, f.nG)(e, t));
                                        },
                                        schedule: q,
                                        recurrenceRule: et,
                                        timeSelected: Q,
                                        onTimeChange: X,
                                    }),
                                    null != q.startDate && q.startDate < a()()
                                        ? (0, l.jsx)(o.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: _.$e,
                                              children: C.intl.string(C.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        E &&
                            (0, l.jsx)("div", {
                                className: _.kz,
                                children: (0, l.jsx)(o.fs1, {
                                    label: C.intl.string(C.t["+gRCC7"]),
                                    placeholder: C.intl.string(C.t["kWO/E8"]),
                                    value: L,
                                    onChange: (e) => F(e),
                                    maxLength: w.IJ,
                                }),
                            }),
                        eo && !eu
                            ? (0, l.jsx)(o.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: _.Qw,
                                  children: C.intl.format(C.t["S+9O7g"], {
                                      stageName: es,
                                      stageHook: (e, t) =>
                                          (0, l.jsx)(
                                              "span",
                                              {
                                                  className: _.HA,
                                                  children: i.name,
                                              },
                                              t,
                                          ),
                                  }),
                              })
                            : null,
                        (0, l.jsx)(A.A, { className: _.XI }),
                    ],
                }),
            ],
        }),
        eg = {
            onClose: g,
            title: null == M ? C.intl.string(C.t.DDF0cJ) : C.intl.string(C.t.YPdQOp),
            subtitle: null == M ? C.intl.string(C.t.bqQIwa) : C.intl.string(C.t["I+9bLx"]),
            transitionState: m,
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: () => g(),
                },
                {
                    variant: "primary",
                    text: Z
                        ? C.intl.string(C.t["60lJ0C"])
                        : null == M
                          ? C.intl.string(C.t.s8mM8A)
                          : C.intl.string(C.t.K344S7),
                    onClick: ed,
                    disabled: "" === U || null == ee || (E && !ef),
                    loading: R,
                },
            ],
            actionBarInput: W
                ? (0, l.jsxs)(o.DUT, {
                      onClick: () => H(!Y),
                      className: _.Qy,
                      children: [
                          (0, l.jsx)(o.P7L, { checked: Y }),
                          (0, l.jsx)(o.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: C.intl.string(C.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == M
        ? (0, l.jsx)(
              s.ExpressiveModal,
              T(
                  N(
                      {
                          graphic: {
                              type: "image",
                              src: k.A,
                          },
                      },
                      eg,
                  ),
                  { children: ej },
              ),
          )
        : (0, l.jsx)(s.Modal, T(N({}, eg), { children: ej }));
}

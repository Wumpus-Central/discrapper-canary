n.d(t, { default: () => Y });
var l = n(477900),
    a = n(582128),
    i = n(536637),
    s = n.n(i),
    r = n(855986),
    u = n(189213),
    c = n(890497),
    d = n(451394),
    o = n(95477),
    g = n(834730),
    h = n(103557),
    x = n(939249),
    m = n(658675),
    f = n(772707),
    S = n(964486),
    A = n(47167),
    C = n(232246),
    j = n(974930),
    p = n(383216),
    v = n(71393),
    b = n(994500),
    E = n(287809),
    _ = n(129230),
    N = n(498642),
    D = n(576705),
    k = n(818348);
function I(e) {
    return (0, r.bG)([D.A], () => null != e && D.A.can(k.xB.MENTION_EVERYONE, e), [e]);
}
var y = n(446600),
    G = n(366098),
    w = n(918192),
    T = n(660110),
    B = n(778858),
    O = n(597798),
    R = n(627784),
    L = n(421838),
    M = n(849736),
    P = n(897513);
n(516607);
var F = n(652215),
    Q = n(988794),
    q = n(792996),
    z = n(320372),
    H = n(973324);
function Y(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        s = (0, r.bG)([v.A], () => v.A.getGuild(t.guild_id));
    return (a.useEffect(() => {
        null == s && n();
    }, [s, n]),
    null == s)
        ? null
        : (0, l.jsx)(V, { transitionState: i, guild: s, channel: t, onClose: n });
}
function U(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, l.jsx)("div", {
              className: z.BD,
              children: (0, l.jsx)(c.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: q.intl.string(q.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, A.m1)(e, E.default, b.A, !0),
                      leading: (0, l.jsx)(d.StageIcon, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: function (e) {
                      if (null == a) return;
                      let n = t.find((t) => t.id === e);
                      null != n && a(n);
                  },
              }),
          });
}
function V(e) {
    let t,
        n,
        { channel: i, guild: c, onClose: d, onSelectChannel: v, transitionState: b, isEvent: E = !1 } = e,
        {
            loading: D,
            error: k,
            onSave: Y,
        } = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [l, i] = a.useState(!1),
                [s, r] = a.useState(null),
                u = a.useMemo(() => y.A.getStageInstanceByChannel(e?.id), [e?.id]),
                c = I(e);
            return {
                loading: l,
                error: s,
                onSave: async function (l) {
                    let { topic: a, privacyLevel: s, sendStartNotification: d } = l;
                    if (null != e && "" !== a && null != s) {
                        (i(!0), r(null), null != n && (B.A.selectGuild(n), O.default.selectVoiceChannel(e.id)));
                        try {
                            let n;
                            (null != u
                                ? (n = await M.b3(e, a, s))
                                : ((n = await M.Nx(e, a, s, d ?? !1)), c && L.sF(P._.LIVE_STAGE_NOTIFICATION_BADGE)),
                                t(n));
                        } catch (e) {
                            (r(new R.LG(e)), i(!1));
                        }
                    }
                },
            };
        })(i, d),
        V = a.useMemo(() => y.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, Z] = a.useState(V?.topic ?? ""),
        [J, W] = a.useState(""),
        [K] = a.useState(E),
        [$, ee] = a.useState({ startDate: (0, j.jd)() }),
        [et, en] = a.useState(!1),
        el = I(i),
        ea =
            ((t = i?.guild_id),
            (n = (0, r.bG)([N.A], () => N.A.getMemberCount(t), [t])),
            null == i || (null != n && !(n > 5e4))),
        ei = null == V && el && !K,
        [es, er] = a.useState(ei && ea),
        eu = Q.dD.GUILD_ONLY,
        [ec] = a.useState(V?.privacy_level ?? eu),
        [ed, eo] = a.useState(null),
        eg = (0, G.D3)(i.id),
        eh = (0, G.Xk)(i.id),
        [ex, em] = a.useState(!1),
        ef = (0, A.Ay)(i),
        eS = (0, C.A)(c),
        eA = null != v,
        eC = eS.length > 1;
    function ej(e) {
        (e.preventDefault(), ec === Q.dD.PUBLIC && X.length < 20 && !ex)
            ? em(!0)
            : K || Y?.({ topic: X, privacyLevel: ec, sendStartNotification: es });
    }
    (0, S.Ay)(() => {
        _.default.track(F.HAw.START_STAGE_OPENED, {
            stage_instance_id: V?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ep = a.useRef(null);
    a.useEffect(() => {
        ep.current?.focus();
    }, []);
    let ev = et && null != $.startDate && $.startDate >= s()(),
        eb = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: z.GU,
                    children: null == V && (eg > 0 || eh > 0) && (0, l.jsx)(w.Bw, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: ej,
                    className: z.Zd,
                    children: [
                        (0, l.jsx)(o.k, {
                            required: !0,
                            error: null != k ? k.getAnyErrorMessage() : void 0,
                            label: E ? q.intl.string(q.t["0HbEQ6"]) : q.intl.string(q.t["5FPBOB"]),
                            onChange: (e) => Z(e),
                            helperText: ex ? q.intl.string(q.t.AqTyaR) : void 0,
                            placeholder: q.intl.string(q.t.ZwWruY),
                            maxLength: 120,
                            value: X,
                            autoComplete: "off",
                            inputRef: ep,
                        }),
                        eA && eC ? (0, l.jsx)(U, { stageChannelsInGuild: eS, channel: i, onSelectChannel: v }) : null,
                        K &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(p.A, {
                                        className: z.kz,
                                        onScheduleChange: ee,
                                        onRecurrenceChange: function (e) {
                                            let t = $.startDate;
                                            null == t || eo((0, j.nG)(e, t));
                                        },
                                        schedule: $,
                                        recurrenceRule: ed,
                                        timeSelected: et,
                                        onTimeChange: en,
                                    }),
                                    null != $.startDate && $.startDate < s()()
                                        ? (0, l.jsx)(g.E, {
                                              color: "text-feedback-critical",
                                              variant: "body-xs/normal",
                                              className: z.$e,
                                              children: q.intl.string(q.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        E &&
                            (0, l.jsx)("div", {
                                className: z.kz,
                                children: (0, l.jsx)(h.f, {
                                    label: q.intl.string(q.t["+gRCC7"]),
                                    placeholder: q.intl.string(q.t["kWO/E8"]),
                                    value: J,
                                    onChange: (e) => W(e),
                                    maxLength: 1e3,
                                }),
                            }),
                        eA && !eC
                            ? (0, l.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  className: z.Qw,
                                  children: q.intl.format(q.t["S+9O7g"], {
                                      stageName: ef,
                                      stageHook: function (e, t) {
                                          return (0, l.jsx)("span", { className: z.HA, children: ef }, t);
                                      },
                                  }),
                              })
                            : null,
                        (0, l.jsx)(T.A, { className: z.XI, channelId: i.id }),
                    ],
                }),
            ],
        }),
        eE = {
            onClose: d,
            title: null == V ? q.intl.string(q.t.DDF0cJ) : q.intl.string(q.t.YPdQOp),
            subtitle: null == V ? q.intl.string(q.t.bqQIwa) : q.intl.string(q.t["I+9bLx"]),
            transitionState: b,
            actions: [
                { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: () => d() },
                {
                    variant: "primary",
                    text: K
                        ? q.intl.string(q.t["60lJ0C"])
                        : null == V
                          ? q.intl.string(q.t.s8mM8A)
                          : q.intl.string(q.t.K344S7),
                    onClick: ej,
                    disabled: "" === X || null == ec || (E && !ev),
                    loading: D,
                },
            ],
            actionBarInput: ei
                ? (0, l.jsxs)(x.D, {
                      onClick: () => er(!es),
                      className: z.Qy,
                      children: [
                          (0, l.jsx)(m.P, { checked: es }),
                          (0, l.jsx)(g.E, {
                              color: "text-default",
                              variant: "body-sm/normal",
                              children: q.intl.string(q.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == V
        ? (0, l.jsx)(f.k, { graphic: { type: "image", src: H.A }, ...eE, children: eb })
        : (0, l.jsx)(u.a, { ...eE, children: eb });
}

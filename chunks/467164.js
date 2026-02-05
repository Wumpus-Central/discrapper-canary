n.d(t, { default: () => y });
var l = n(627968),
    i = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(158954),
    c = n(311907),
    d = n(397927),
    o = n(964486),
    u = n(47167),
    h = n(232246),
    g = n(974930),
    x = n(422845),
    _ = n(71393),
    m = n(994500),
    A = n(287809),
    T = n(954571),
    j = n(272379),
    f = n(446600),
    E = n(366098),
    v = n(918192),
    S = n(660110),
    p = n(567854),
    N = n(516607),
    C = n(652215),
    b = n(988794),
    D = n(985018),
    I = n(737782),
    R = n(973324);
function y(e) {
    let { channel: t, onClose: n, transitionState: a } = e,
        r = (0, c.bG)([_.A], () => _.A.getGuild(t.guild_id));
    return (i.useEffect(() => {
        null == r && n();
    }, [r, n]),
    null == r)
        ? null
        : (0, l.jsx)(k, { transitionState: a, guild: r, channel: t, onClose: n });
}
function O(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: I.BD,
              children: (0, l.jsx)(d.ZiE, {
                  selectionMode: "single",
                  required: !0,
                  label: D.intl.string(D.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, u.m1)(e, A.default, m.A, !0),
                      leading: (0, l.jsx)(d.qux, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: (e) => {
                      let n = t.find((t) => t.id === e);
                      null != n && i(n);
                  },
              }),
          });
}
function k(e) {
    let { channel: t, guild: n, onClose: a, onSelectChannel: c, transitionState: _, isEvent: m = !1 } = e,
        { loading: A, error: y, onSave: k } = (0, p.A)(t, a),
        G = i.useMemo(() => f.A.getStageInstanceByChannel(t.id), [t.id]),
        [w, P] = i.useState(G?.topic ?? ""),
        [M, B] = i.useState(""),
        [U] = i.useState(m),
        [z, L] = i.useState({ startDate: (0, g.jd)() }),
        [V, F] = i.useState(!1),
        K = (0, j.Z)(t),
        W = (0, j.K)(t),
        q = null == G && K && !U,
        [Q, Z] = i.useState(q && W),
        X = b.dD.GUILD_ONLY,
        [J] = i.useState(G?.privacy_level ?? X),
        [Y, H] = i.useState(null),
        $ = (0, E.D3)(t.id),
        ee = (0, E.Xk)(t.id),
        [et, en] = i.useState(!1),
        el = (0, u.Ay)(t),
        ei = (0, h.A)(n),
        ea = null != c,
        er = ei.length > 1;
    (0, o.Ay)(() => {
        T.default.track(C.HAw.START_STAGE_OPENED, {
            stage_instance_id: G?.id,
            can_start_public_stage: !1,
            guild_id: t.guild_id,
        });
    });
    let es = (e) => {
            (e.preventDefault(), J === b.dD.PUBLIC && w.length < 20 && !et)
                ? en(!0)
                : U || k?.({ topic: w, privacyLevel: J, sendStartNotification: Q });
        },
        ec = i.useRef(null);
    i.useEffect(() => {
        ec.current?.focus();
    }, []);
    let ed = V && null != z.startDate && z.startDate >= r()(),
        eo = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: I.GU,
                    children: null == G && ($ > 0 || ee > 0) && (0, l.jsx)(v.Bw, { channelId: t.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: es,
                    className: I.Zd,
                    children: [
                        (0, l.jsx)(d.ksK, {
                            required: !0,
                            error: null != y ? y.getAnyErrorMessage() : void 0,
                            label: m ? D.intl.string(D.t["0HbEQ6"]) : D.intl.string(D.t["5FPBOB"]),
                            onChange: (e) => P(e),
                            helperText: et ? D.intl.string(D.t.AqTyaR) : void 0,
                            placeholder: D.intl.string(D.t.ZwWruY),
                            maxLength: N.RY,
                            value: w,
                            autoComplete: "off",
                            inputRef: ec,
                        }),
                        ea && er ? (0, l.jsx)(O, { stageChannelsInGuild: ei, channel: t, onSelectChannel: c }) : null,
                        U &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(x.A, {
                                        className: I.kz,
                                        onScheduleChange: L,
                                        onRecurrenceChange: (e) => {
                                            let t = z.startDate;
                                            null == t || H((0, g.nG)(e, t));
                                        },
                                        schedule: z,
                                        recurrenceRule: Y,
                                        timeSelected: V,
                                        onTimeChange: F,
                                    }),
                                    null != z.startDate && z.startDate < r()()
                                        ? (0, l.jsx)(d.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: I.$e,
                                              children: D.intl.string(D.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        m &&
                            (0, l.jsx)("div", {
                                className: I.kz,
                                children: (0, l.jsx)(d.fs1, {
                                    label: D.intl.string(D.t["+gRCC7"]),
                                    placeholder: D.intl.string(D.t["kWO/E8"]),
                                    value: M,
                                    onChange: (e) => B(e),
                                    maxLength: b.IJ,
                                }),
                            }),
                        ea && !er
                            ? (0, l.jsx)(d.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: I.Qw,
                                  children: D.intl.format(D.t["S+9O7g"], {
                                      stageName: el,
                                      stageHook: (e, n) => (0, l.jsx)("span", { className: I.HA, children: t.name }, n),
                                  }),
                              })
                            : null,
                        (0, l.jsx)(S.A, { className: I.XI, channelId: t.id }),
                    ],
                }),
            ],
        }),
        eu = {
            onClose: a,
            title: null == G ? D.intl.string(D.t.DDF0cJ) : D.intl.string(D.t.YPdQOp),
            subtitle: null == G ? D.intl.string(D.t.bqQIwa) : D.intl.string(D.t["I+9bLx"]),
            transitionState: _,
            actions: [
                { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: () => a() },
                {
                    variant: "primary",
                    text: U
                        ? D.intl.string(D.t["60lJ0C"])
                        : null == G
                          ? D.intl.string(D.t.s8mM8A)
                          : D.intl.string(D.t.K344S7),
                    onClick: es,
                    disabled: "" === w || null == J || (m && !ed),
                    loading: A,
                },
            ],
            actionBarInput: q
                ? (0, l.jsxs)(d.DUT, {
                      onClick: () => Z(!Q),
                      className: I.Qy,
                      children: [
                          (0, l.jsx)(d.P7L, { checked: Q }),
                          (0, l.jsx)(d.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: D.intl.string(D.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == G
        ? (0, l.jsx)(s.ExpressiveModal, { graphic: { type: "image", src: R.A }, ...eu, children: eo })
        : (0, l.jsx)(s.Modal, { ...eu, children: eo });
}

n.d(t, { default: () => D });
var l = n(627968),
    i = n(64700),
    r = n(989349),
    a = n.n(r),
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
    E = n(272379),
    j = n(446600),
    f = n(366098),
    S = n(918192),
    v = n(660110),
    p = n(567854),
    N = n(516607),
    b = n(652215),
    C = n(988794),
    y = n(985018),
    R = n(364488),
    I = n(973324);
function D(e) {
    let { channel: t, onClose: n, transitionState: r } = e,
        a = (0, c.bG)([_.A], () => _.A.getGuild(t.guild_id));
    return (i.useEffect(() => {
        null == a && n();
    }, [a, n]),
    null == a)
        ? null
        : (0, l.jsx)(G, { transitionState: r, guild: a, channel: t, onClose: n });
}
function O(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: i } = e;
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: R.BD,
              children: (0, l.jsx)(d.ZiE, {
                  selectionMode: "single",
                  required: !0,
                  label: y.intl.string(y.t.S7GjDz),
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
function G(e) {
    let { channel: t, guild: n, onClose: r, onSelectChannel: c, transitionState: _, isEvent: m = !1 } = e,
        { loading: A, error: D, onSave: G } = (0, p.A)(t, r),
        k = i.useMemo(() => j.A.getStageInstanceByChannel(t.id), [t.id]),
        [w, P] = i.useState(k?.topic ?? ""),
        [B, M] = i.useState(""),
        [U] = i.useState(m),
        [z, L] = i.useState({ startDate: (0, g.jd)() }),
        [V, F] = i.useState(!1),
        W = (0, E.Z)(t),
        K = (0, E.K)(t),
        q = null == k && W && !U,
        [Q, Z] = i.useState(q && K),
        X = C.dD.GUILD_ONLY,
        [Y] = i.useState(k?.privacy_level ?? X),
        [J, H] = i.useState(null),
        $ = (0, f.D3)(t.id),
        ee = (0, f.Xk)(t.id),
        [et, en] = i.useState(!1),
        el = (0, u.Ay)(t),
        ei = (0, h.A)(n),
        er = null != c,
        ea = ei.length > 1;
    (0, o.Ay)(() => {
        T.default.track(b.HAw.START_STAGE_OPENED, {
            stage_instance_id: k?.id,
            can_start_public_stage: !1,
            guild_id: t.guild_id,
        });
    });
    let es = (e) => {
            (e.preventDefault(), Y === C.dD.PUBLIC && w.length < 20 && !et)
                ? en(!0)
                : U || G?.({ topic: w, privacyLevel: Y, sendStartNotification: Q });
        },
        ec = i.useRef(null);
    i.useEffect(() => {
        ec.current?.focus();
    }, []);
    let ed = V && null != z.startDate && z.startDate >= a()(),
        eo = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: R.GU,
                    children: null == k && ($ > 0 || ee > 0) && (0, l.jsx)(S.Bw, { channelId: t.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: es,
                    className: R.Zd,
                    children: [
                        (0, l.jsx)(d.ksK, {
                            required: !0,
                            error: null != D ? D.getAnyErrorMessage() : void 0,
                            label: m ? y.intl.string(y.t["0HbEQ6"]) : y.intl.string(y.t["5FPBOB"]),
                            onChange: (e) => P(e),
                            helperText: et ? y.intl.string(y.t.AqTyaR) : void 0,
                            placeholder: y.intl.string(y.t.ZwWruY),
                            maxLength: N.RY,
                            value: w,
                            autoComplete: "off",
                            inputRef: ec,
                        }),
                        er && ea ? (0, l.jsx)(O, { stageChannelsInGuild: ei, channel: t, onSelectChannel: c }) : null,
                        U &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(x.A, {
                                        className: R.kz,
                                        onScheduleChange: L,
                                        onRecurrenceChange: (e) => {
                                            let t = z.startDate;
                                            null == t || H((0, g.nG)(e, t));
                                        },
                                        schedule: z,
                                        recurrenceRule: J,
                                        timeSelected: V,
                                        onTimeChange: F,
                                    }),
                                    null != z.startDate && z.startDate < a()()
                                        ? (0, l.jsx)(d.Text, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: R.$e,
                                              children: y.intl.string(y.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        m &&
                            (0, l.jsx)("div", {
                                className: R.kz,
                                children: (0, l.jsx)(d.fs1, {
                                    label: y.intl.string(y.t["+gRCC7"]),
                                    placeholder: y.intl.string(y.t["kWO/E8"]),
                                    value: B,
                                    onChange: (e) => M(e),
                                    maxLength: C.IJ,
                                }),
                            }),
                        er && !ea
                            ? (0, l.jsx)(d.Text, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: R.Qw,
                                  children: y.intl.format(y.t["S+9O7g"], {
                                      stageName: el,
                                      stageHook: (e, t) => (0, l.jsx)("span", { className: R.HA, children: el }, t),
                                  }),
                              })
                            : null,
                        (0, l.jsx)(v.A, { className: R.XI, channelId: t.id }),
                    ],
                }),
            ],
        }),
        eu = {
            onClose: r,
            title: null == k ? y.intl.string(y.t.DDF0cJ) : y.intl.string(y.t.YPdQOp),
            subtitle: null == k ? y.intl.string(y.t.bqQIwa) : y.intl.string(y.t["I+9bLx"]),
            transitionState: _,
            actions: [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: () => r() },
                {
                    variant: "primary",
                    text: U
                        ? y.intl.string(y.t["60lJ0C"])
                        : null == k
                          ? y.intl.string(y.t.s8mM8A)
                          : y.intl.string(y.t.K344S7),
                    onClick: es,
                    disabled: "" === w || null == Y || (m && !ed),
                    loading: A,
                },
            ],
            actionBarInput: q
                ? (0, l.jsxs)(d.DUT, {
                      onClick: () => Z(!Q),
                      className: R.Qy,
                      children: [
                          (0, l.jsx)(d.P7L, { checked: Q }),
                          (0, l.jsx)(d.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: y.intl.string(y.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == k
        ? (0, l.jsx)(s.ExpressiveModal, { graphic: { type: "image", src: I.A }, ...eu, children: eo })
        : (0, l.jsx)(s.Modal, { ...eu, children: eo });
}

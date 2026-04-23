l.d(t, { default: () => F });
var n = l(627968),
    a = l(64700),
    i = l(989349),
    r = l.n(i),
    s = l(772707),
    o = l(189213),
    d = l(311907),
    c = l(783878),
    u = l(451394),
    h = l(292666),
    g = l(834730),
    x = l(260598),
    m = l(939249),
    f = l(658675),
    v = l(964486),
    p = l(47167),
    _ = l(232246),
    A = l(974930),
    j = l(422845),
    b = l(71393),
    N = l(994500),
    y = l(287809),
    w = l(954571),
    C = l(272379),
    E = l(446600),
    I = l(366098),
    T = l(918192),
    M = l(660110),
    S = l(567854),
    k = l(516607),
    D = l(652215),
    O = l(988794),
    R = l(985018),
    V = l(134473),
    L = l(973324);
function F(e) {
    let { channel: t, onClose: l, transitionState: i } = e,
        r = (0, d.bG)([b.A], () => b.A.getGuild(t.guild_id));
    return (a.useEffect(() => {
        null == r && l();
    }, [r, l]),
    null == r)
        ? null
        : (0, n.jsx)(P, { transitionState: i, guild: r, channel: t, onClose: l });
}
function G(e) {
    let { stageChannelsInGuild: t, channel: l, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: V.BD,
              children: (0, n.jsx)(c.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: R.intl.string(R.t.S7GjDz),
                  value: l.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, p.m1)(e, y.default, N.A, !0),
                      leading: (0, n.jsx)(u.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: (e) => {
                      let l = t.find((t) => t.id === e);
                      null != l && a(l);
                  },
              }),
          });
}
function P(e) {
    let { channel: t, guild: l, onClose: i, onSelectChannel: d, transitionState: c, isEvent: u = !1 } = e,
        { loading: b, error: N, onSave: y } = (0, S.A)(t, i),
        F = a.useMemo(() => E.A.getStageInstanceByChannel(t.id), [t.id]),
        [P, Z] = a.useState(F?.topic ?? ""),
        [B, z] = a.useState(""),
        [U] = a.useState(u),
        [Q, Y] = a.useState({ startDate: (0, A.jd)() }),
        [X, H] = a.useState(!1),
        q = (0, C.Z)(t),
        K = (0, C.K)(t),
        J = null == F && q && !U,
        [W, $] = a.useState(J && K),
        ee = O.dD.GUILD_ONLY,
        [et] = a.useState(F?.privacy_level ?? ee),
        [el, en] = a.useState(null),
        ea = (0, I.D3)(t.id),
        ei = (0, I.Xk)(t.id),
        [er, es] = a.useState(!1),
        eo = (0, p.Ay)(t),
        ed = (0, _.A)(l),
        ec = null != d,
        eu = ed.length > 1;
    (0, v.Ay)(() => {
        w.default.track(D.HAw.START_STAGE_OPENED, {
            stage_instance_id: F?.id,
            can_start_public_stage: !1,
            guild_id: t.guild_id,
        });
    });
    let eh = (e) => {
            (e.preventDefault(), et === O.dD.PUBLIC && P.length < 20 && !er)
                ? es(!0)
                : U || y?.({ topic: P, privacyLevel: et, sendStartNotification: W });
        },
        eg = a.useRef(null);
    a.useEffect(() => {
        eg.current?.focus();
    }, []);
    let ex = X && null != Q.startDate && Q.startDate >= r()(),
        em = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: V.GU,
                    children: null == F && (ea > 0 || ei > 0) && (0, n.jsx)(T.Bw, { channelId: t.id }),
                }),
                (0, n.jsxs)("form", {
                    onSubmit: eh,
                    className: V.Zd,
                    children: [
                        (0, n.jsx)(h.k, {
                            required: !0,
                            error: null != N ? N.getAnyErrorMessage() : void 0,
                            label: u ? R.intl.string(R.t["0HbEQ6"]) : R.intl.string(R.t["5FPBOB"]),
                            onChange: (e) => Z(e),
                            helperText: er ? R.intl.string(R.t.AqTyaR) : void 0,
                            placeholder: R.intl.string(R.t.ZwWruY),
                            maxLength: k.RY,
                            value: P,
                            autoComplete: "off",
                            inputRef: eg,
                        }),
                        ec && eu ? (0, n.jsx)(G, { stageChannelsInGuild: ed, channel: t, onSelectChannel: d }) : null,
                        U &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(j.A, {
                                        className: V.kz,
                                        onScheduleChange: Y,
                                        onRecurrenceChange: (e) => {
                                            let t = Q.startDate;
                                            null == t || en((0, A.nG)(e, t));
                                        },
                                        schedule: Q,
                                        recurrenceRule: el,
                                        timeSelected: X,
                                        onTimeChange: H,
                                    }),
                                    null != Q.startDate && Q.startDate < r()()
                                        ? (0, n.jsx)(g.E, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: V.$e,
                                              children: R.intl.string(R.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        u &&
                            (0, n.jsx)("div", {
                                className: V.kz,
                                children: (0, n.jsx)(x.f, {
                                    label: R.intl.string(R.t["+gRCC7"]),
                                    placeholder: R.intl.string(R.t["kWO/E8"]),
                                    value: B,
                                    onChange: (e) => z(e),
                                    maxLength: O.IJ,
                                }),
                            }),
                        ec && !eu
                            ? (0, n.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: V.Qw,
                                  children: R.intl.format(R.t["S+9O7g"], {
                                      stageName: eo,
                                      stageHook: (e, t) => (0, n.jsx)("span", { className: V.HA, children: eo }, t),
                                  }),
                              })
                            : null,
                        (0, n.jsx)(M.A, { className: V.XI, channelId: t.id }),
                    ],
                }),
            ],
        }),
        ef = {
            onClose: i,
            title: null == F ? R.intl.string(R.t.DDF0cJ) : R.intl.string(R.t.YPdQOp),
            subtitle: null == F ? R.intl.string(R.t.bqQIwa) : R.intl.string(R.t["I+9bLx"]),
            transitionState: c,
            actions: [
                { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: () => i() },
                {
                    variant: "primary",
                    text: U
                        ? R.intl.string(R.t["60lJ0C"])
                        : null == F
                          ? R.intl.string(R.t.s8mM8A)
                          : R.intl.string(R.t.K344S7),
                    onClick: eh,
                    disabled: "" === P || null == et || (u && !ex),
                    loading: b,
                },
            ],
            actionBarInput: J
                ? (0, n.jsxs)(m.D, {
                      onClick: () => $(!W),
                      className: V.Qy,
                      children: [
                          (0, n.jsx)(f.P, { checked: W }),
                          (0, n.jsx)(g.E, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: R.intl.string(R.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == F
        ? (0, n.jsx)(s.k, { graphic: { type: "image", src: L.A }, ...ef, children: em })
        : (0, n.jsx)(o.Modal, { ...ef, children: em });
}

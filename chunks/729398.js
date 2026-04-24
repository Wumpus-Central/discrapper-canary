l.d(t, { default: () => td });
var n,
    i = l(627968),
    s = l(64700),
    a = l(735438),
    r = l(17928),
    d = l(935462),
    o = l(430690),
    c = l(123292),
    u = l(821609),
    x = l(192308),
    h = l(834730),
    m = l(376728),
    g = l(775602),
    v = l(21161),
    j = l(503698),
    E = l.n(j),
    A = l(460890),
    p = l(939249),
    N = l(252316);
function f(e) {
    let { steps: t, stepIndex: l, onClick: n } = e,
        { i18n: s } = (0, A.G9)();
    return (0, i.jsx)("div", {
        className: N.kL,
        role: "tablist",
        children: t.map((e, a) => {
            let r = l === a;
            return (0, i.jsxs)(
                p.D,
                {
                    onClick: () => n(a),
                    className: N._h,
                    role: "tab",
                    "aria-selected": r,
                    "aria-label": `${s.STEP_INDICATOR(a + 1, t.length)}: ${e.label}`,
                    "aria-current": r ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: E()(N.hr, { [N.YD]: r }) }),
                        (0, i.jsx)(h.E, {
                            color: r ? "text-brand" : "text-muted",
                            variant: "text-xs/normal",
                            children: e.label,
                        }),
                    ],
                },
                e.label,
            );
        }),
    });
}
var C = l(915089),
    y = l(808728),
    b = l(71393),
    I = l(735547),
    S = l(645034),
    T = l(698441),
    R = l(496092),
    _ = l(485394);
l(321073);
var D = l(931991);
l(446600);
var G = l(576705);
function k(e, t) {
    let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [y.Ay];
    if (null == t) return [];
    let n = l.getChannels(e)[y.vM],
        i = [];
    for (let { channel: e } of n) {
        let { canCreateGuildEvent: l, canManageAllEvents: n } = (0, D.ie)(e),
            s = l || n;
        e.type === t && (e.isGuildVoice() && s ? i.push(e) : e.isGuildStageVoice() && s && i.push(e));
    }
    return i;
}
function L(e, t) {
    return (0, r.yK)([y.Ay], () => k(e, t, [y.Ay]), [e, t]);
}
l(219935);
var M = l(794782),
    P = l(9448),
    U = l(974930),
    z = l(70456),
    V = l(989349),
    F = l.n(V),
    w = l(983851),
    B = l(146151),
    O = l(451394),
    X = l(808107),
    Y = l(783878),
    H = l(292666),
    q = l(116085),
    Q = l(144228),
    $ = l(331322),
    W = l(534514),
    Z = l(47167),
    J = l(349288),
    K = l(683071),
    ee = l(885574),
    et = l(738188),
    el = l(404778),
    en = l(975807),
    ei = l(139716),
    es = l(847599),
    ea = l(36149),
    er = l(975571),
    ed = l(418208),
    eo = l(652215),
    ec = l(985018);
function eu() {
    return (0, ea.yM)()
        ? ec.intl.format(ec.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(J.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, en.A)(er.A.getArticleURL(eo.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : ec.intl.format(ec.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(J.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              ei.A.showAgeVerificationGetStartedModal({ entryPoint: es.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function ex(e) {
    let { className: t } = e,
        l = (0, ea.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(K.w, { type: l ? "info" : "warning", children: (0, i.jsx)(eu, {}) }),
    });
}
function eh(e) {
    let { className: t } = e,
        l = (0, ea.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)($.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                l
                    ? (0, i.jsx)(ee.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(et.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(h.E, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(eu, {}) }),
            ],
        }),
    });
}
function em(e) {
    let { className: t, noBackground: l, divider: n } = e;
    if (!(0, ed.PI)()) return null;
    let s = Array.isArray(n) ? n : null != n ? [n] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.includes(0) && (0, i.jsx)(el.c, { gap: 16 }),
            (0, i.jsx)("div", { className: t, children: l ? (0, i.jsx)(eh, {}) : (0, i.jsx)(ex, {}) }),
            s?.includes(1) && (0, i.jsx)(el.c, { gap: 16 }),
        ],
    });
}
var eg = l(734057),
    ev = l(994500),
    ej = l(287809),
    eE = l(770666),
    eA = l(232246),
    ep = l(530209),
    eN = l(825484),
    ef = l(450510),
    eC = l(421838),
    ey = l(419836);
let eb = () =>
    (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: ey.ln,
                children: ec.intl.string(ec.t.GcZzp2),
            }),
            (0, i.jsx)(h.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: ey.ln,
                children: ec.intl.string(ec.t["/NEGrO"]),
            }),
            (0, i.jsx)(h.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: ey.ln,
                children: ec.intl.string(ec.t.eUbuHL),
            }),
            (0, i.jsx)(h.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: ey.ln,
                children: ec.intl.string(ec.t.sCAZeI),
            }),
        ],
    });
function eI(e) {
    let { onClick: t } = e;
    return (0, r.bG)([ef.HP], () => !ef.HP.hasHotspot(ef._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, i.jsxs)("div", {
              className: ey.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: ey.Qs,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ey.FS,
                              children: [
                                  (0, i.jsx)(W.D, {
                                      variant: "heading-md/semibold",
                                      children: ec.intl.string(ec.t.Sx8Ezi),
                                  }),
                                  (0, i.jsx)(h.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: ey.ij,
                                      children: ec.intl.string(ec.t.JUzPhm),
                                  }),
                                  (0, i.jsx)(h.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: ec.intl.format(ec.t.Vh7rP7, { suggestionsHook: eb }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: ey.Sl,
                              children: (0, i.jsx)("img", {
                                  src: "/assets/0e2b0a24951b9e2e.svg",
                                  alt: ec.intl.string(ec.t["uIm/n4"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: ey.qr,
                      children: (0, i.jsxs)(eN.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, i.jsx)(u.$, {
                                  onClick: t,
                                  variant: "secondary",
                                  text: ec.intl.string(ec.t["X/3SyA"]),
                              }),
                              (0, i.jsx)("div", {
                                  className: ey.zt,
                                  children: (0, i.jsx)(c.Q, {
                                      onClick: () => {
                                          eC.sF(ef._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ec.intl.string(ec.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var eS = l(988794),
    eT = l(723074);
let eR = (e) => {
        let { guildId: t, channelType: l, channel: n, onSelectChannel: s, disabled: a, entityType: r } = e,
            d = l === eo.rbe.GUILD_STAGE_VOICE,
            o = (0, ep.D)(n, r),
            c = L(t, l);
        return (0, i.jsx)(Y.Z, {
            selectionMode: "single",
            label: d ? ec.intl.string(ec.t.S7GjDz) : ec.intl.string(ec.t["7RYWCP"]),
            required: !0,
            helperText: o ? void 0 : ec.intl.string(ec.t.F3bDaX),
            value: n?.id,
            options: c.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, Z.m1)(e, ej.default, ev.A, !0),
                leading: ((e, t) => {
                    let l = eg.A.getChannel(e);
                    if (null == l) return null;
                    let n = l.type === eo.rbe.GUILD_STAGE_VOICE,
                        s = (0, ep.D)(l, t),
                        a = s ? w.H : B.t,
                        r = s ? O.q : X.D;
                    return (0, i.jsx)(n ? r : a, { color: "currentColor", size: "md", className: eT.sr });
                })(e.id, r),
            })),
            onSelectionChange: (e) => {
                s(c.find((t) => t.id === e) ?? void 0);
            },
            disabled: a,
        });
    },
    e_ = (e, t) => (l) => {
        let n = { entityType: l, scheduledEndTime: void 0 };
        l === eS.Ps.EXTERNAL &&
            (n.scheduledEndTime = (F()(t.scheduledStartTime) ?? F()()).add(2, "hour").toISOString()),
            e(n);
    };
function eD(e) {
    let { guildId: t, guildEvent: l, onChange: n, isFocusReady: a } = e,
        { entityType: d, channelId: o } = l,
        c = (0, r.bG)([eg.A], () => eg.A.getChannel(o), [o]),
        u = s.useRef(null),
        x = s.useRef(void 0);
    s.useEffect(() => {
        let e = a && !x.current;
        (x.current = a), e && d === eS.Ps.EXTERNAL && u.current?.focus();
    }, [a, d]);
    let h = (e) => {
            n({ channelId: e?.id ?? null });
        },
        m = (0, P.k5)(l),
        g = (0, P.dy)(d),
        v = (0, T.Fd)(l);
    return null == d || d === eS.Ps.NONE
        ? null
        : d === eS.Ps.EXTERNAL
          ? (0, i.jsx)(H.k, {
                label: ec.intl.string(ec.t.yx785A),
                required: !0,
                onChange: (e) => {
                    n({ entityMetadata: { location: e } });
                },
                placeholder: ec.intl.string(ec.t.mkCMia),
                maxLength: eS.vj,
                value: m ?? "",
                inputRef: u,
            })
          : null == g
            ? null
            : (0, i.jsx)(eR, {
                  guildId: t,
                  channelType: g,
                  onSelectChannel: h,
                  channel: c,
                  entityType: d,
                  disabled: v,
              });
}
function eG(e) {
    let { guildId: t, guildEvent: l, onChange: n } = e,
        a = (0, r.bG)([b.A], () => b.A.getGuild(t), [t]),
        d = (0, eE.A)(t, void 0),
        o = (0, eE.A)(t, eo.rbe.GUILD_VOICE),
        c = (0, eE.A)(t, eo.rbe.GUILD_STAGE_VOICE),
        u = L(t, eo.rbe.GUILD_VOICE),
        x = (0, eA.A)(a),
        h = a?.features.has(eo.GuildFeatures.COMMUNITY),
        m = (0, T.Fd)(l),
        g = e_(n, l),
        v = s.useMemo(() => {
            let e = !o || 0 === u.length,
                t = o ? ec.intl.string(ec.t["DkY+cO"]) : ec.intl.string(ec.t.HeF1kV),
                l = [
                    {
                        name: ec.intl.string(ec.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? t : ec.intl.string(ec.t["EV//4f"]),
                        leadingIcon: w.H,
                        disabled: e,
                    },
                    {
                        name: ec.intl.string(ec.t.w7ipbz),
                        value: eS.Ps.EXTERNAL,
                        desc: d ? ec.intl.string(ec.t.DYxrHm) : ec.intl.string(ec.t.HeF1kV),
                        leadingIcon: q.B,
                        disabled: !d,
                    },
                ];
            if (h) {
                let e = !c || 0 === x.length,
                    t = c ? ec.intl.string(ec.t["DkY+cO"]) : ec.intl.string(ec.t.HeF1kV);
                return [
                    {
                        name: ec.intl.string(ec.t.EErMzA),
                        value: eS.Ps.STAGE_INSTANCE,
                        desc: e ? t : ec.intl.string(ec.t.LgALpp),
                        leadingIcon: O.q,
                        disabled: e,
                    },
                    ...l,
                ];
            }
            return l;
        }, [d, o, c, h, u.length, x.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === l.entityType)?.value ?? null,
        options: v,
        onChange: g,
        disabled: m,
        helperText: m ? ec.intl.string(ec.t.yutP5U) : void 0,
    });
}
function ek(e) {
    let { guildId: t, guildEvent: n, validationErrorMessage: s, onChange: a, isSlideReady: d = !1 } = e,
        { entityType: o } = n,
        c = (0, r.bG)([b.A], () => b.A.getGuild(t), [t]),
        u = (0, eA.A)(c),
        m = (0, r.bG)([G.A], () => G.A.can(eo.xBc.MANAGE_CHANNELS, c)),
        g = c?.features.has(eo.GuildFeatures.COMMUNITY),
        v = e_(a, n),
        j = g && o !== eS.Ps.EXTERNAL && 0 === u.length && m && null != o;
    return (0, i.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, i.jsxs)($.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(W.D, { variant: "heading-xl/semibold", children: ec.intl.string(ec.t["DC+Qm8"]) }),
                    (0, i.jsx)(h.E, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: ec.intl.string(ec.t.IwmXLP),
                    }),
                ],
            }),
            (0, i.jsx)(eG, { guildId: t, guildEvent: n, onChange: a }),
            (0, i.jsx)(eD, { guildId: t, guildEvent: n, isFocusReady: d, onChange: a }),
            j
                ? (0, i.jsx)(eI, {
                      onClick: () => {
                          v(eS.Ps.STAGE_INSTANCE),
                              (0, x.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      l.e("8018"),
                                      l.e("42282"),
                                      l.e("9431"),
                                      l.e("13270"),
                                  ]).then(l.bind(l, 113194));
                                  return (l) =>
                                      (0, i.jsx)(e, { ...l, channelType: eo.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
                      },
                  })
                : null,
            eS.Tn.has(n.entityType) && (0, i.jsx)(em, {}),
        ],
    });
}
var eL = l(713654),
    eM = l(857071),
    eP = l(691012),
    eU = l(779519),
    ez = l(439437);
function eV(e) {
    var t;
    let { guildId: l, guildEvent: n, guildEventId: a, error: d, isSlideReady: o } = e,
        c = s.useMemo(() => (0, M.hQ)(n, l), [n, l]),
        { channel_id: u, name: x, image: m, description: g } = c,
        v = (0, r.bG)([eg.A], () => eg.A.getChannel(u), [u]),
        j = (0, r.bG)([b.A], () => b.A.getGuild(l), [l]),
        E = (0, P.oF)(c),
        A = (0, r.bG)(
            [ej.default],
            () => (null != n.creatorId ? ej.default.getUser(n.creatorId) : ej.default.getCurrentUser()),
            [n.creatorId],
        ),
        p = (0, r.bG)([eM.A], () => eM.A.isLurking(l), [l]),
        N = (0, Z.Ay)(v),
        f = s.useRef(null);
    s.useEffect(() => {
        o && null != f.current && ((f.current.tabIndex = -1), f.current.focus());
    }, [o]);
    let C = (0, eL.gU)(v, j);
    return (0, i.jsxs)("div", {
        className: ez.Qs,
        children: [
            (0, i.jsx)(eU.A, {
                className: ez.B0,
                guild: j,
                channel: v,
                location: E ?? void 0,
                creator: A,
                name: x,
                description: g,
                imageSource:
                    ((t = (0, M.hQ)(n, l, a)),
                    null == m && null == t.image ? null : null != m && /^data:/.test(m) ? m : (0, eP.A)(t)),
                isActive: !1,
                isUserLurking: p,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: c,
                eventPreview: c,
                hideAgeVerificationNotice: !0,
            }),
            (0, i.jsxs)("div", {
                className: ez.FS,
                children: [
                    (0, i.jsx)(W.D, { ref: f, variant: "heading-xl/semibold", children: ec.intl.string(ec.t.yBsFE3) }),
                    (0, i.jsx)(h.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: ez.m_,
                        children:
                            null != location
                                ? ec.intl.string(ec.t.KDPFi9)
                                : ec.intl.format(ec.t.f55NX0, {
                                      channelName: N ?? "",
                                      channelHook: () =>
                                          (0, i.jsxs)("div", {
                                              className: ez.HA,
                                              children: [
                                                  null != C
                                                      ? (0, i.jsx)(C, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: ez.Kk,
                                                        })
                                                      : (0, i.jsx)(q.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: ez.NR,
                                                        }),
                                                  N ?? E,
                                              ],
                                          }),
                                  }),
                    }),
                    null != d &&
                        (0, i.jsx)(h.E, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: ez.m_,
                            children: d.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
var eF = l(260598),
    ew = l(452027),
    eB = l(664007),
    eO = l(405810),
    eX = l(366098),
    eY = l(918192),
    eH = l(979091),
    eq = l(339984),
    eQ = l(910264);
function e$(e) {
    let {
            guildEvent: t,
            guildEventId: n,
            guildId: a,
            error: r,
            validationErrorMessage: d,
            onChange: o,
            canSetFocus: c = !1,
        } = e,
        {
            entityType: h,
            channelId: m,
            description: g,
            name: v,
            image: j,
            scheduledEndTime: E,
            scheduledStartTime: A,
            recurrenceRule: p,
        } = t,
        N = (0, eX.D3)(m),
        f = (0, eX.Xk)(m),
        C = null != t && (0, T.Fd)(t),
        y = s.useMemo(() => {
            let e = (0, U.N5)(t);
            return null != e ? e : { startDate: F()(A) };
        }, [t, A]),
        [b, I] = s.useState(() => (0, U.z7)(F()(A), p)),
        S = s.useRef(null);
    s.useEffect(() => {
        c && S.current?.focus();
    }, [c]);
    let R = (e) => {
            o({ image: e });
        },
        _ = (e, t) => {
            null == e || void 0 === t
                ? R(null)
                : (0, x.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([
                          l.e("79149"),
                          l.e("2956"),
                          l.e("74571"),
                          l.e("34075"),
                      ]).then(l.bind(l, 142630));
                      return (l) =>
                          (0, i.jsx)(n, {
                              imageUri: e,
                              file: t,
                              onCrop: (e) => {
                                  let { imageUri: t } = e;
                                  return R(t);
                              },
                              uploadType: eq.HL.SCHEDULED_EVENT_IMAGE,
                              ...l,
                          });
                  });
        },
        D = r?.getFirstFieldErrorMessage("name"),
        G = r?.getFirstFieldErrorMessage("description"),
        k = null == D && null == G ? r?.getAnyErrorMessage() : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eQ.GU,
                children: null != m && !C && (N > 0 || f > 0) && (0, i.jsx)(eY.Bw, { channelId: m }),
            }),
            (0, i.jsx)("div", {
                className: eQ.Zd,
                children: (0, i.jsxs)($.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(H.k, {
                            label: ec.intl.string(ec.t["0HbEQ6"]),
                            required: !0,
                            error: D ?? k,
                            onChange: (e) => {
                                o({ name: e });
                            },
                            placeholder: ec.intl.string(ec.t["6/yars"]),
                            maxLength: eS.t_,
                            value: v,
                            autoComplete: "off",
                            inputRef: S,
                        }),
                        (0, i.jsx)(eH.A, {
                            className: eQ.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: l } = e,
                                    n = { scheduledStartTime: t?.toISOString(), scheduledEndTime: l?.toISOString() };
                                null != t &&
                                    null != E &&
                                    l?.isBefore(t) &&
                                    (n.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != b && (n.recurrenceRule = (0, U.nG)(b, t)),
                                    o(n);
                            },
                            onRecurrenceChange: (e) => {
                                let t = y.startDate;
                                null == t || (o({ recurrenceRule: (0, U.nG)(e, t) }), I(e));
                            },
                            schedule: y,
                            recurrenceRule: p,
                            showEndDate: h === eS.Ps.EXTERNAL,
                            requireEndDate: h === eS.Ps.EXTERNAL,
                            disableStartDateTime: C,
                            guildId: a,
                        }),
                        (0, i.jsx)(eW, { error: d }),
                        (0, i.jsx)(eF.f, {
                            label: ec.intl.string(ec.t["+gRCC7"]),
                            error: G,
                            placeholder: ec.intl.string(ec.t["kWO/E8"]),
                            value: g,
                            onChange: (e) => {
                                o({ description: e });
                            },
                            maxLength: eS.IJ,
                            autosize: !0,
                        }),
                        (0, i.jsx)(ew.D, {
                            label: ec.intl.string(ec.t.Ly121e),
                            description: ec.intl.string(ec.t.B9C9be),
                            children:
                                null != j
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eB.A, {
                                                  className: eQ.km,
                                                  iconWrapperClassName: eQ.WR,
                                                  image: j,
                                                  makeURL: (e) =>
                                                      null == e
                                                          ? null
                                                          : null != a
                                                            ? ((0, eP.A)((0, M.hQ)(t, a, n)) ?? null)
                                                            : void 0,
                                                  onChange: _,
                                                  hint: ec.intl.string(ec.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: ec.intl.string(ec.t.gmUvO1),
                                                  onClick: () => R(null),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(eO.A, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: _,
                                          text: ec.intl.string(ec.t.vKCGYb),
                                      }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eW(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, i.jsx)(h.E, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: eQ.$e,
              children: t,
          });
}
var eZ = l(339184);
function eJ(e) {
    let { isSlideReady: t, ...l } = e;
    return (0, i.jsxs)("div", {
        className: eZ.__invalid_slideContainer,
        children: [
            (0, i.jsx)("div", {
                className: eZ.w,
                children: (0, i.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(W.D, { variant: "heading-xl/semibold", children: ec.intl.string(ec.t.GG6vbr) }),
                        (0, i.jsx)(h.E, {
                            color: "text-subtle",
                            variant: "text-sm/normal",
                            children: ec.intl.string(ec.t.q5lgwV),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(e$, { ...l, canSetFocus: t }),
        ],
    });
}
var eK = l(789645),
    e0 = l(81466),
    e1 = l(21599),
    e9 = l(279208),
    e2 = l(747007),
    e8 = l(710358),
    e4 = l(958590),
    e7 = l(954571),
    e6 = l(957565),
    e5 = l(118888);
let { INVITE_OPTIONS_7_DAYS: e3, INVITE_OPTIONS_UNLIMITED: te } = I.Ay;
function tt(e) {
    let { onClose: t, event: l } = e,
        n = l?.guild_id,
        s = (0, r.bG)([y.Ay], () => (null != n ? y.Ay.getDefaultChannel(n)?.id : null), [n]),
        a = (0, r.bG)([b.A], () => b.A.getGuild(n), [n]),
        { channel_id: d, id: o } = l ?? {},
        c = (0, r.bG)([e4.A], () => {
            let e = d ?? s;
            return null == e ? null : e4.A.getInvite(e);
        }, [d, s]);
    if (null == l) return t(), null;
    let u = a?.vanityURLCode ?? c?.code,
        x = null != u ? (0, e1.WU)({ baseCode: u, guildScheduledEventId: o }) : null,
        m = null == x || null == c,
        g = (0, e9.A)(x ?? ""),
        v = c?.maxAge ?? e3.value,
        j = c?.maxUses ?? te.value;
    return (0, i.jsxs)("div", {
        className: e5.kL,
        children: [
            (0, i.jsx)(p.D, {
                onClick: t,
                className: e5.VN,
                "aria-label": ec.intl.string(ec.t.cpT0Cq),
                children: (0, i.jsx)(eK.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e8.A, {
                children: (0, i.jsx)("div", {
                    className: e5.zc,
                    children: (0, i.jsx)(e0.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: e5.Kk,
                    }),
                }),
            }),
            (0, i.jsx)(W.D, {
                variant: "heading-xl/semibold",
                className: e5.wx,
                children: ec.intl.string(ec.t.UzNv7u),
            }),
            (0, i.jsx)(h.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: e5.rf,
                children: ec.intl.string(ec.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e5.EZ,
                children: [
                    (0, i.jsx)(e2.I, {
                        value: g,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (m) return;
                            (0, e6.C)(e);
                            let t = (0, P.dy)(l.entity_type);
                            e7.default.track(eo.HAw.COPY_INSTANT_INVITE, {
                                server: l.guild_id,
                                channel: d,
                                channel_type: t,
                                location: eo.PE1.GUILD_EVENTS,
                                code: c.code,
                                guild_scheduled_event_id: l?.id,
                            });
                        },
                    }),
                    a?.vanityURLCode == null &&
                        (0, i.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: e5.x6,
                            children: (0, I.Be)(v, j),
                        }),
                ],
            }),
        ],
    });
}
var tl = l(486536);
let { INVITE_OPTIONS_7_DAYS: tn, INVITE_OPTIONS_UNLIMITED: ti } = I.Ay;
var ts =
    (((n = ts || {})[(n.ENTITY = 0)] = "ENTITY"),
    (n[(n.SETTINGS = 1)] = "SETTINGS"),
    (n[(n.PREVIEW = 2)] = "PREVIEW"),
    (n[(n.SUCCESS = 3)] = "SUCCESS"),
    n);
function ta(e) {
    let { modal: t } = e,
        { createMultipleConfetti: l } = s.useContext(v.x);
    return (
        s.useEffect(() => {
            let e = t?.getScrollerNode();
            if (null == e) return;
            let n = e.getBoundingClientRect();
            l(
                {
                    position: {
                        type: "static-random",
                        minValue: { x: n.left - 100, y: n.top - 100 },
                        maxValue: { x: n.left + 100, y: n.top + 100 },
                    },
                    velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: -60, y: -60 } },
                },
                80,
            ),
                l(
                    {
                        position: {
                            type: "static-random",
                            minValue: { x: n.right - 100, y: n.top - 100 },
                            maxValue: { x: n.right + 100, y: n.top + 100 },
                        },
                        velocity: { type: "static-random", minValue: { x: 20, y: -20 }, maxValue: { x: 60, y: -60 } },
                    },
                    80,
                );
        }, [l, t]),
        null
    );
}
function tr(e) {
    let {
            guildId: t,
            guildEvent: l,
            guildEventId: n,
            isEdit: x,
            formErrors: h,
            transitionState: m,
            loading: v,
            error: j,
            onChange: E,
            onSave: A,
            onClose: p,
            createdEvent: N,
        } = e,
        y = (0, C.GV)(),
        b = s.useRef(l),
        I = !(0, a.isEqual)(b.current, l),
        S = s.useMemo(
            () => [
                {
                    slideId: 0,
                    label: ec.intl.string(ec.t["56QlKS"]),
                    valid: null == h.entity,
                    userErrorMessage: h.entity,
                },
                {
                    slideId: 1,
                    label: ec.intl.string(ec.t["w5/ntT"]),
                    valid: null == h.schedule && null == h.topic && (!x || I),
                    userErrorMessage: h.schedule,
                },
                { slideId: 2, label: ec.intl.string(ec.t["8aJzT4"]), valid: !0 },
            ],
            [h, x, I],
        ),
        R = Object.keys(ts).length,
        _ = (0, T.Fd)(l),
        D = (e) => Math.max(0, Math.min(e, R - 1)),
        [G, k] = s.useState(+!!_),
        [L, M] = s.useState(!1),
        P = s.useMemo(
            () =>
                S.slice(0, G + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [S, G],
        ),
        U = G >= S.length ? 3 : S[D(G)].slideId,
        V = 3 === U;
    (0, z.N)((e) => e.onUpdateCanCloseModal)(V);
    let F = (0, r.bG)([g.A], () => g.A.useReducedMotion),
        w = s.useRef(null),
        B = (e) => {
            M(!1), k(D(e));
        },
        O = s.useRef(B);
    s.useEffect(() => {
        O.current = B;
    }),
        s.useEffect(() => {
            N?.id != null && O.current(3);
        }, [N?.id]);
    let X = () => {
            P && (2 === U ? A() : V ? p() : B(G + 1));
        },
        Y = () => {
            B(G - 1);
        },
        H = ec.intl.string(ec.t.PDTjLN);
    return (
        2 === U && (H = x ? ec.intl.string(ec.t.e5VEcE) : ec.intl.string(ec.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: m,
            "aria-labelledby": y,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !F && V ? (0, i.jsx)(ta, { modal: w.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: tl.Qs,
                    scrollerRef: w,
                    "data-migration-pending": !0,
                    children: [
                        !V &&
                            (0, i.jsx)(f, {
                                steps: S.map((e, t) => ({ label: e.label, disabled: t > G && !P })),
                                stepIndex: G,
                                onClick: (e) => {
                                    e < G ? Y() : e > G && X();
                                },
                            }),
                        (0, i.jsxs)(o.t, {
                            activeSlide: U,
                            width: 440,
                            onSlideReady: (e) => {
                                M(e === U);
                            },
                            children: [
                                (0, i.jsx)(o.q, {
                                    id: 0,
                                    children: (0, i.jsx)(ek, {
                                        guildId: t,
                                        guildEvent: l,
                                        validationErrorMessage: h.entity,
                                        isSlideReady: L,
                                        onChange: E,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eJ, {
                                        guildEvent: l,
                                        guildEventId: n,
                                        guildId: t,
                                        onChange: E,
                                        error: j,
                                        validationErrorMessage: h.schedule,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 2,
                                    children: (0, i.jsx)(eV, {
                                        guildId: t,
                                        guildEvent: l,
                                        guildEventId: n,
                                        error: j,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(o.q, { id: 3, children: (0, i.jsx)(tt, { onClose: p, event: N }) }),
                            ],
                        }),
                    ],
                }),
                !V &&
                    (0, i.jsxs)(d.jl, {
                        className: tl.qr,
                        "data-migration-pending": !0,
                        children: [
                            0 !== U &&
                                (0, i.jsx)("div", {
                                    className: tl.zt,
                                    children: (0, i.jsx)(c.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: Y,
                                        text: ec.intl.string(ec.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tl.mG,
                                children: [
                                    (0, i.jsx)(u.$, {
                                        variant: "secondary",
                                        text: ec.intl.string(ec.t["ETE/oC"]),
                                        onClick: p,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: tl.x6,
                                        children: (0, i.jsx)(u.$, {
                                            variant: "primary",
                                            text: H,
                                            onClick: X,
                                            disabled: !P,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        })
    );
}
function td(e) {
    let { guildId: t, guildScheduledEventId: n, transitionState: a, onClose: d } = e;
    (0, r.bG)([b.A], () => b.A.getGuild(t));
    let o = (0, r.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(n), [n]),
        c = (0, r.bG)([y.Ay], () => y.Ay.getDefaultChannel(t), [t]),
        u = (0, M.UZ)(o, c),
        [g, v] = s.useState(u),
        [j] = s.useState((0, M.lc)(o)),
        [E, A] = s.useState(null),
        [p, { loading: N, error: f }] = (0, S.A)(async () => {
            var e;
            let l, i;
            if (null != E) return;
            if (j && null != n) return await R.A.saveEvent(n, g, t), d();
            let s = await R.A.createGuildEvent(g, t);
            return (
                (e = s.body),
                (l = (0, _.K7)(e)),
                null != (i = e.channel_id ?? c?.id) &&
                    m.Ay.createInvite(i, { max_age: tn.value, max_uses: ti.value }, eo.PE1.GUILD_EVENTS),
                l ? A(e) : d(),
                s
            );
        }),
        C = s.useMemo(
            () => ({
                entity: (function (e) {
                    let { entityType: t, channelId: l } = e,
                        n = (0, P.k5)(e);
                    return null == t || t === eS.Ps.NONE
                        ? "An event type must be specified."
                        : (null == n || "" === n.trim()) && null == l
                          ? "Either a location or channel must be specified."
                          : void 0;
                })(g),
                schedule: (function (e, t) {
                    let l = (0, U.N5)(e),
                        { entityType: n } = e;
                    if (null == l || l?.startDate == null) return ec.intl.string(ec.t.M73YyN);
                    let { startDate: i, endDate: s } = l;
                    return n === eS.Ps.EXTERNAL && null == s
                        ? ec.intl.string(ec.t["H16p/w"])
                        : !t && i.isBefore(F()())
                          ? ec.intl.string(ec.t.AXR5Ss)
                          : null != s && null != i && s.isBefore(i)
                            ? ec.intl.string(ec.t.LpjF4K)
                            : null != s && s.isBefore(F()())
                              ? ec.intl.string(ec.t.ViDcm2)
                              : void 0;
                })(g, j),
                topic: (function (e) {
                    let { name: t } = e;
                    return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
                })(g),
            }),
            [g, j],
        );
    return (0, i.jsx)(tr, {
        guildId: t,
        guildEvent: g,
        guildEventId: n,
        isEdit: j,
        formErrors: C,
        transitionState: a,
        loading: N,
        error: f,
        onChange: (e) => {
            if (null != e.entityType) {
                let [l] = k(t, (0, P.dy)(e.entityType));
                (e.channelId = l?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && g.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: () => {
            null != g.recurrenceRule && j && (0, U.DS)(o, g)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await l.e("4823").then(l.bind(l, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: ec.intl.string(ec.t.BW1Qoh),
                              subtitle: ec.intl.string(ec.t.aNCYas),
                              confirmText: ec.intl.string(ec.t.e5VEcE),
                              cancelText: ec.intl.string(ec.t.oEAioF),
                              onConfirm: p,
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-md/normal",
                                  children: ec.intl.format(ec.t.RWBa5X, {}),
                              }),
                          });
                  })
                : p();
        },
        onClose: d,
        createdEvent: E,
    });
}

n.d(t, { default: () => tu });
var l,
    i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(17928),
    d = n(935462),
    u = n(430690),
    o = n(123292),
    c = n(821609),
    x = n(192308),
    g = n(834730),
    h = n(376728),
    m = n(775602),
    v = n(21161),
    f = n(503698),
    E = n.n(f),
    j = n(460890),
    y = n(939249),
    A = n(869729);
function N(e) {
    let { steps: t, stepIndex: n, onClick: l } = e,
        { i18n: r } = (0, j.G9)();
    return (0, i.jsx)("div", {
        className: A.kL,
        role: "tablist",
        children: t.map((e, a) => {
            let s = n === a;
            return (0, i.jsxs)(
                y.D,
                {
                    onClick: () => l(a),
                    className: A._h,
                    role: "tab",
                    "aria-selected": s,
                    "aria-label": `${r.STEP_INDICATOR(a + 1, t.length)}: ${e.label}`,
                    "aria-current": s ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: E()(A.hr, { [A.YD]: s }) }),
                        (0, i.jsx)(g.E, {
                            color: s ? "text-brand" : "text-muted",
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
var p = n(915089),
    C = n(808728),
    b = n(71393),
    I = n(735547),
    S = n(422653),
    T = n(698441),
    G = n(496092),
    _ = n(485394);
n(321073);
var R = n(931991);
n(446600);
var k = n(576705);
function D(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [C.Ay];
    if (null == t) return [];
    let l = n.getChannels(e)[C.vM],
        i = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: n, canManageAllEvents: l } = (0, R.ie)(e),
            r = n || l;
        e.type === t && (e.isGuildVoice() && r ? i.push(e) : e.isGuildStageVoice() && r && i.push(e));
    }
    return i;
}
function L(e, t) {
    return (0, s.yK)([C.Ay], () => D(e, t, [C.Ay]), [e, t]);
}
n(219935);
var M = n(794782),
    P = n(9448),
    V = n(974930),
    U = n(70456),
    z = n(536637),
    F = n.n(z),
    O = n(983851),
    w = n(146151),
    B = n(451394),
    H = n(808107),
    q = n(890497),
    X = n(95477),
    Y = n(116085),
    Q = n(144228),
    W = n(331322),
    K = n(297264),
    $ = n(47167),
    Z = n(28863),
    J = n(683071),
    ee = n(885574),
    et = n(738188),
    en = n(404778),
    el = n(975807),
    ei = n(379257),
    er = n(306537),
    ea = n(36149),
    es = n(975571),
    ed = n(418208),
    eu = n(652215),
    eo = n(375708);
function ec() {
    return (0, ea.yM)()
        ? eo.intl.format(eo.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              (0, el.A)(es.A.getArticleURL(eu.MVz.TIGGER_PAWTECT_LEARN_MORE)));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : eo.intl.format(eo.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              ei.A.showAgeVerificationGetStartedModal({ entryPoint: er.q1.START_STAGE_PROMPT }));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function ex(e) {
    let { className: t } = e,
        n = (0, ea.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(J.w, { type: n ? "info" : "warning", children: (0, i.jsx)(ec, {}) }),
    });
}
function eg(e) {
    let { className: t } = e,
        n = (0, ea.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)(W.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, i.jsx)(ee.CircleInformationIcon, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(et.WarningIcon, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(g.E, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(ec, {}) }),
            ],
        }),
    });
}
function eh(e) {
    let { className: t, noBackground: n, divider: l } = e;
    if (!(0, ed.PI)()) return null;
    let r = Array.isArray(l) ? l : null != l ? [l] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.includes(0) && (0, i.jsx)(en.c, { gap: 16 }),
            (0, i.jsx)("div", { className: t, children: n ? (0, i.jsx)(eg, {}) : (0, i.jsx)(ex, {}) }),
            r?.includes(1) && (0, i.jsx)(en.c, { gap: 16 }),
        ],
    });
}
var em = n(734057),
    ev = n(994500),
    ef = n(287809),
    eE = n(770666),
    ej = n(232246),
    ey = n(530209),
    eA = n(825484),
    eN = n(450510),
    ep = n(421838),
    eC = n(465531);
function eb() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: eo.intl.string(eo.t.GcZzp2),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: eo.intl.string(eo.t["/NEGrO"]),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: eo.intl.string(eo.t.eUbuHL),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: eo.intl.string(eo.t.sCAZeI),
            }),
        ],
    });
}
function eI(e) {
    let { onClick: t } = e;
    return (0, s.bG)([eN.HP], () => !eN.HP.hasHotspot(eN._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, i.jsxs)("div", {
              className: eC.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: eC.Qs,
                      children: (0, i.jsxs)("div", {
                          className: eC.FS,
                          children: [
                              (0, i.jsx)(K.D, {
                                  variant: "heading-md/semibold",
                                  children: eo.intl.string(eo.t.Sx8Ezi),
                              }),
                              (0, i.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: eC.ij,
                                  children: eo.intl.string(eo.t.JUzPhm),
                              }),
                              (0, i.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  children: eo.intl.format(eo.t.Vh7rP7, { suggestionsHook: eb }),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: eC.qr,
                      children: (0, i.jsxs)(eA.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, i.jsx)(c.$, {
                                  onClick: t,
                                  variant: "secondary",
                                  text: eo.intl.string(eo.t["X/3SyA"]),
                              }),
                              (0, i.jsx)("div", {
                                  className: eC.zt,
                                  children: (0, i.jsx)(o.Q, {
                                      onClick: function () {
                                          ep.sF(eN._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eo.intl.string(eo.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var eS = n(988794),
    eT = n(412311);
function eG(e) {
    return e === eS.Ps.EXTERNAL;
}
function e_(e) {
    let { guildId: t, channelType: n, channel: l, onSelectChannel: r, disabled: a, entityType: s } = e,
        d = n === eu.rbe.GUILD_STAGE_VOICE,
        u = (0, ey.D)(l, s),
        o = L(t, n);
    return (0, i.jsx)(q.Z, {
        selectionMode: "single",
        label: d ? eo.intl.string(eo.t.S7GjDz) : eo.intl.string(eo.t["7RYWCP"]),
        required: !0,
        helperText: u ? void 0 : eo.intl.string(eo.t.F3bDaX),
        value: l?.id,
        options: o.map((e) => ({
            id: e.id,
            value: e.id,
            label: (0, $.m1)(e, ef.default, ev.A, !0),
            leading: (function (e, t) {
                let n = em.A.getChannel(e);
                if (null == n) return null;
                let l = n.type === eu.rbe.GUILD_STAGE_VOICE,
                    r = (0, ey.D)(n, t),
                    a = r ? O.H : w.t,
                    s = r ? B.q : H.D;
                return (0, i.jsx)(l ? s : a, { color: "currentColor", size: "md", className: eT.sr });
            })(e.id, s),
        })),
        onSelectionChange: function (e) {
            r(o.find((t) => t.id === e) ?? void 0);
        },
        disabled: a,
    });
}
function eR(e, t) {
    return (n) => {
        let l = { entityType: n, scheduledEndTime: void 0 };
        (eG(n) && (l.scheduledEndTime = (F()(t.scheduledStartTime) ?? F()()).add(2, "hour").toISOString()), e(l));
    };
}
function ek(e) {
    let { guildId: t, guildEvent: n, onChange: l, isFocusReady: a } = e,
        { entityType: d, channelId: u } = n,
        o = (0, s.bG)([em.A], () => em.A.getChannel(u), [u]),
        c = r.useRef(null),
        x = r.useRef(void 0);
    r.useEffect(() => {
        let e = a && !x.current;
        ((x.current = a), e && eG(d) && c.current?.focus());
    }, [a, d]);
    let g = (e) => {
            l({ channelId: e?.id ?? null });
        },
        h = (0, P.k5)(n),
        m = (0, P.dy)(d),
        v = (0, T.Fd)(n);
    return null == d || d === eS.Ps.NONE
        ? null
        : eG(d)
          ? (0, i.jsx)(X.k, {
                label: eo.intl.string(eo.t.yx785A),
                required: !0,
                onChange: (e) => {
                    l({ entityMetadata: { location: e } });
                },
                placeholder: eo.intl.string(eo.t.mkCMia),
                maxLength: eS.vj,
                value: h ?? "",
                inputRef: c,
            })
          : null == m
            ? null
            : (0, i.jsx)(e_, {
                  guildId: t,
                  channelType: m,
                  onSelectChannel: g,
                  channel: o,
                  entityType: d,
                  disabled: v,
              });
}
function eD(e) {
    let { guildId: t, guildEvent: n, onChange: l } = e,
        a = (0, s.bG)([b.A], () => b.A.getGuild(t), [t]),
        d = (0, eE.A)(t, void 0),
        u = (0, eE.A)(t, eu.rbe.GUILD_VOICE),
        o = (0, eE.A)(t, eu.rbe.GUILD_STAGE_VOICE),
        c = L(t, eu.rbe.GUILD_VOICE),
        x = (0, ej.A)(a),
        g = a?.features.has(eu.GuildFeatures.COMMUNITY),
        h = (0, T.Fd)(n),
        m = eR(l, n),
        v = r.useMemo(() => {
            let e = !u || 0 === c.length,
                t = u ? eo.intl.string(eo.t["DkY+cO"]) : eo.intl.string(eo.t.HeF1kV),
                n = [
                    {
                        name: eo.intl.string(eo.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? t : eo.intl.string(eo.t["EV//4f"]),
                        leadingIcon: O.H,
                        disabled: e,
                    },
                    {
                        name: eo.intl.string(eo.t.w7ipbz),
                        value: eS.Ps.EXTERNAL,
                        desc: d ? eo.intl.string(eo.t.DYxrHm) : eo.intl.string(eo.t.HeF1kV),
                        leadingIcon: Y.B,
                        disabled: !d,
                    },
                ];
            if (g) {
                let e = !o || 0 === x.length,
                    t = o ? eo.intl.string(eo.t["DkY+cO"]) : eo.intl.string(eo.t.HeF1kV);
                return [
                    {
                        name: eo.intl.string(eo.t.EErMzA),
                        value: eS.Ps.STAGE_INSTANCE,
                        desc: e ? t : eo.intl.string(eo.t.LgALpp),
                        leadingIcon: B.q,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [d, u, o, g, c.length, x.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === n.entityType)?.value ?? null,
        options: v,
        onChange: m,
        disabled: h,
        helperText: h ? eo.intl.string(eo.t.yutP5U) : void 0,
    });
}
function eL(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: r, onChange: a, isSlideReady: d = !1 } = e,
        { entityType: u } = l,
        o = (0, s.bG)([b.A], () => b.A.getGuild(t), [t]),
        c = (0, ej.A)(o),
        h = (0, s.bG)([k.A], () => k.A.can(eu.xBc.MANAGE_CHANNELS, o)),
        m = o?.features.has(eu.GuildFeatures.COMMUNITY),
        v = eR(a, l),
        f = m && !eG(u) && 0 === c.length && h && null != u;
    return (0, i.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, i.jsxs)(W.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t["DC+Qm8"]) }),
                    (0, i.jsx)(g.E, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: eo.intl.string(eo.t.IwmXLP),
                    }),
                ],
            }),
            (0, i.jsx)(eD, { guildId: t, guildEvent: l, onChange: a }),
            (0, i.jsx)(ek, { guildId: t, guildEvent: l, isFocusReady: d, onChange: a }),
            f
                ? (0, i.jsx)(eI, {
                      onClick: function () {
                          (v(eS.Ps.STAGE_INSTANCE),
                              (0, x.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("377476"),
                                      n.e("403032"),
                                      n.e("746309"),
                                      n.e("720210"),
                                      n.e("82389"),
                                      n.e("132502"),
                                      n.e("230029"),
                                      n.e("891089"),
                                      n.e("174554"),
                                      n.e("196063"),
                                      n.e("392028"),
                                      n.e("124054"),
                                      n.e("441674"),
                                      n.e("152862"),
                                      n.e("148326"),
                                      n.e("148729"),
                                      n.e("650195"),
                                      n.e("401317"),
                                      n.e("311580"),
                                      n.e("67702"),
                                      n.e("702154"),
                                      n.e("296956"),
                                      n.e("334168"),
                                      n.e("778799"),
                                      n.e("424199"),
                                      n.e("342551"),
                                      n.e("721690"),
                                      n.e("536200"),
                                      n.e("136022"),
                                      n.e("832817"),
                                      n.e("425544"),
                                      n.e("416143"),
                                      n.e("844695"),
                                      n.e("92124"),
                                      n.e("428296"),
                                      n.e("988077"),
                                      n.e("561216"),
                                      n.e("313681"),
                                      n.e("343550"),
                                      n.e("552712"),
                                      n.e("829177"),
                                      n.e("106943"),
                                      n.e("892340"),
                                      n.e("14962"),
                                      n.e("786751"),
                                      n.e("770697"),
                                      n.e("561279"),
                                      n.e("894747"),
                                      n.e("790244"),
                                      n.e("273232"),
                                      n.e("592731"),
                                      n.e("470068"),
                                      n.e("240511"),
                                      n.e("718573"),
                                      n.e("486792"),
                                      n.e("537894"),
                                      n.e("548974"),
                                      n.e("799657"),
                                      n.e("810034"),
                                      n.e("817852"),
                                      n.e("831145"),
                                      n.e("187856"),
                                      n.e("203589"),
                                      n.e("332470"),
                                      n.e("400954"),
                                      n.e("610449"),
                                      n.e("32781"),
                                      n.e("773192"),
                                      n.e("565065"),
                                      n.e("662355"),
                                      n.e("622825"),
                                      n.e("616592"),
                                      n.e("692513"),
                                      n.e("2329"),
                                      n.e("589916"),
                                      n.e("460773"),
                                      n.e("208018"),
                                      n.e("562168"),
                                      n.e("120379"),
                                      n.e("824547"),
                                      n.e("819193"),
                                      n.e("507775"),
                                      n.e("637038"),
                                      n.e("662068"),
                                      n.e("358608"),
                                      n.e("221500"),
                                  ]).then(n.bind(n, 906724));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, channelType: eu.rbe.GUILD_STAGE_VOICE, guildId: t });
                              }));
                      },
                  })
                : null,
            eS.Tn.has(l.entityType) && (0, i.jsx)(eh, {}),
        ],
    });
}
var eM = n(713654),
    eP = n(857071),
    eV = n(691012),
    eU = n(779519),
    ez = n(819270);
function eF(e) {
    var t;
    let { guildId: n, guildEvent: l, guildEventId: a, error: d, isSlideReady: u } = e,
        o = r.useMemo(() => (0, M.hQ)(l, n), [l, n]),
        { channel_id: c, name: x, image: h, description: m } = o,
        v = (0, s.bG)([em.A], () => em.A.getChannel(c), [c]),
        f = (0, s.bG)([b.A], () => b.A.getGuild(n), [n]),
        E = (0, P.oF)(o),
        j = (0, s.bG)(
            [ef.default],
            () => (null != l.creatorId ? ef.default.getUser(l.creatorId) : ef.default.getCurrentUser()),
            [l.creatorId],
        ),
        y = (0, s.bG)([eP.A], () => eP.A.isLurking(n), [n]),
        A = (0, $.Ay)(v),
        N = r.useRef(null);
    r.useEffect(() => {
        u && null != N.current && ((N.current.tabIndex = -1), N.current.focus());
    }, [u]);
    let p = (0, eM.gU)(v, f);
    return (0, i.jsxs)("div", {
        className: ez.Qs,
        children: [
            (0, i.jsx)(eU.A, {
                className: ez.B0,
                guild: f,
                channel: v,
                location: E ?? void 0,
                creator: j,
                name: x,
                description: m,
                imageSource:
                    ((t = (0, M.hQ)(l, n, a)),
                    null == h && null == t.image ? null : null != h && /^data:/.test(h) ? h : (0, eV.A)(t)),
                isActive: !1,
                isUserLurking: y,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: o,
                eventPreview: o,
                hideAgeVerificationNotice: !0,
            }),
            (0, i.jsxs)("div", {
                className: ez.FS,
                children: [
                    (0, i.jsx)(K.D, { ref: N, variant: "heading-xl/semibold", children: eo.intl.string(eo.t.yBsFE3) }),
                    (0, i.jsx)(g.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: ez.m_,
                        children:
                            null != location
                                ? eo.intl.string(eo.t.KDPFi9)
                                : eo.intl.format(eo.t.f55NX0, {
                                      channelName: A ?? "",
                                      channelHook: function () {
                                          return (0, i.jsxs)("div", {
                                              className: ez.HA,
                                              children: [
                                                  null != p
                                                      ? (0, i.jsx)(p, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: ez.Kk,
                                                        })
                                                      : (0, i.jsx)(Y.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: ez.NR,
                                                        }),
                                                  A ?? E,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != d &&
                        (0, i.jsx)(g.E, {
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
var eO = n(707554),
    ew = n(103557),
    eB = n(664007),
    eH = n(405810),
    eq = n(366098),
    eX = n(918192),
    eY = n(979091),
    eQ = n(339984),
    eW = n(168419);
function eK(e) {
    let {
            guildEvent: t,
            guildEventId: l,
            guildId: a,
            error: s,
            validationErrorMessage: d,
            onChange: u,
            canSetFocus: o = !1,
        } = e,
        {
            entityType: h,
            channelId: m,
            description: v,
            name: f,
            image: E,
            scheduledEndTime: j,
            scheduledStartTime: y,
            recurrenceRule: A,
        } = t,
        N = (0, eq.D3)(m),
        p = (0, eq.Xk)(m),
        C = null != t && (0, T.Fd)(t),
        b = r.useMemo(() => {
            let e = (0, V.N5)(t);
            return null != e ? e : { startDate: F()(y) };
        }, [t, y]),
        [I, S] = r.useState(() => (0, V.z7)(F()(y), A)),
        G = r.useRef(null),
        _ = r.useRef(null);
    function R(e) {
        u({ image: e });
    }
    function k(e, t) {
        null == e || void 0 === t
            ? R(null)
            : (0, x.openModalLazy)(async () => {
                  let { default: l } = await Promise.all([
                      n.e("196063"),
                      n.e("392028"),
                      n.e("124054"),
                      n.e("398791"),
                      n.e("655327"),
                      n.e("67702"),
                      n.e("1214"),
                      n.e("424199"),
                      n.e("863232"),
                      n.e("721690"),
                      n.e("536200"),
                      n.e("136022"),
                      n.e("832817"),
                      n.e("425544"),
                      n.e("416143"),
                      n.e("844695"),
                      n.e("92124"),
                      n.e("428296"),
                      n.e("988077"),
                      n.e("561216"),
                      n.e("313681"),
                      n.e("343550"),
                      n.e("552712"),
                      n.e("829177"),
                      n.e("858164"),
                      n.e("106943"),
                      n.e("892340"),
                      n.e("14962"),
                      n.e("427032"),
                      n.e("786751"),
                      n.e("770697"),
                      n.e("561279"),
                      n.e("894747"),
                      n.e("790244"),
                      n.e("444376"),
                      n.e("318546"),
                      n.e("571470"),
                      n.e("50342"),
                      n.e("507406"),
                      n.e("463726"),
                      n.e("93513"),
                      n.e("779149"),
                      n.e("455524"),
                      n.e("90017"),
                      n.e("489908"),
                      n.e("574571"),
                      n.e("750348"),
                  ]).then(n.bind(n, 142630));
                  return (n) =>
                      (0, i.jsx)(l, {
                          imageUri: e,
                          file: t,
                          onCrop: (e) => {
                              let { imageUri: t } = e;
                              return R(t);
                          },
                          uploadType: eQ.HL.SCHEDULED_EVENT_IMAGE,
                          returnRef: _,
                          ...n,
                      });
              });
    }
    r.useEffect(() => {
        o && G.current?.focus();
    }, [o]);
    let D = s?.getFirstFieldErrorMessage("name"),
        L = s?.getFirstFieldErrorMessage("description"),
        P = null == D && null == L ? s?.getAnyErrorMessage() : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eW.GU,
                children: null != m && !C && (N > 0 || p > 0) && (0, i.jsx)(eX.Bw, { channelId: m }),
            }),
            (0, i.jsx)("div", {
                className: eW.Zd,
                children: (0, i.jsxs)(W.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(X.k, {
                            label: eo.intl.string(eo.t["0HbEQ6"]),
                            required: !0,
                            error: D ?? P,
                            onChange: function (e) {
                                u({ name: e });
                            },
                            placeholder: eo.intl.string(eo.t["6/yars"]),
                            maxLength: eS.t_,
                            value: f,
                            autoComplete: "off",
                            inputRef: G,
                        }),
                        (0, i.jsx)(eY.A, {
                            className: eW.kz,
                            onScheduleChange: function (e) {
                                let { startDate: t, endDate: n } = e,
                                    l = { scheduledStartTime: t?.toISOString(), scheduledEndTime: n?.toISOString() };
                                (null != t &&
                                    null != j &&
                                    n?.isBefore(t) &&
                                    (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != I && (l.recurrenceRule = (0, V.nG)(I, t)),
                                    u(l));
                            },
                            onRecurrenceChange: function (e) {
                                let t = b.startDate;
                                null == t || (u({ recurrenceRule: (0, V.nG)(e, t) }), S(e));
                            },
                            schedule: b,
                            recurrenceRule: A,
                            showEndDate: h === eS.Ps.EXTERNAL,
                            requireEndDate: h === eS.Ps.EXTERNAL,
                            disableStartDateTime: C,
                            guildId: a,
                        }),
                        (0, i.jsx)(e$, { error: d }),
                        (0, i.jsx)(ew.f, {
                            label: eo.intl.string(eo.t["+gRCC7"]),
                            error: L,
                            placeholder: eo.intl.string(eo.t["kWO/E8"]),
                            value: v,
                            onChange: function (e) {
                                u({ description: e });
                            },
                            maxLength: eS.IJ,
                            autosize: !0,
                        }),
                        (0, i.jsxs)(W.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(K.D, { variant: "text-md/medium", children: eo.intl.string(eo.t.Ly121e) }),
                                (0, i.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: eo.intl.string(eo.t.B9C9be),
                                }),
                                (0, i.jsx)("div", {
                                    ref: _,
                                    tabIndex: -1,
                                    className: eW.aN,
                                    children:
                                        null != E
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(eB.A, {
                                                          className: eW.km,
                                                          iconWrapperClassName: eW.WR,
                                                          image: E,
                                                          makeURL: (e) =>
                                                              null == e
                                                                  ? null
                                                                  : null != a
                                                                    ? ((0, eV.A)((0, M.hQ)(t, a, l)) ?? null)
                                                                    : void 0,
                                                          onChange: k,
                                                          hint: eo.intl.string(eo.t.G44Xml),
                                                          showRemoveButton: !1,
                                                          enabled: !0,
                                                      }),
                                                      (0, i.jsx)(c.$, {
                                                          variant: "primary",
                                                          size: "sm",
                                                          text: eo.intl.string(eo.t.gmUvO1),
                                                          onClick: () => R(null),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(eH.A, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  onChange: k,
                                                  text: eo.intl.string(eo.t.vKCGYb),
                                              }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function e$(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, i.jsx)(g.E, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: eW.$e,
              children: t,
          });
}
var eZ = n(352701);
function eJ(e) {
    let { isSlideReady: t, ...n } = e;
    return (0, i.jsxs)("div", {
        className: eZ.__invalid_slideContainer,
        children: [
            (0, i.jsx)("div", {
                className: eZ.w,
                children: (0, i.jsxs)(W.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.GG6vbr) }),
                        (0, i.jsx)(g.E, {
                            color: "text-subtle",
                            variant: "text-sm/normal",
                            children: eo.intl.string(eo.t.q5lgwV),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(eO.F, { children: (0, i.jsx)(eK, { ...n, canSetFocus: t }) }),
        ],
    });
}
var e0 = n(789645),
    e1 = n(81466),
    e7 = n(21599),
    e2 = n(279208),
    e4 = n(747007),
    e9 = n(710358),
    e5 = n(958590),
    e3 = n(174459),
    e6 = n(957565),
    e8 = n(673707);
let { INVITE_OPTIONS_7_DAYS: te, INVITE_OPTIONS_UNLIMITED: tt } = I.Ay;
function tn(e) {
    let { onClose: t, event: n } = e,
        l = n?.guild_id,
        r = (0, s.bG)([C.Ay], () => (null != l ? C.Ay.getDefaultChannel(l)?.id : null), [l]),
        a = (0, s.bG)([b.A], () => b.A.getGuild(l), [l]),
        { channel_id: d, id: u } = n ?? {},
        o = (0, s.bG)(
            [e5.A],
            () => {
                let e = d ?? r;
                return null == e ? null : e5.A.getInvite(e);
            },
            [d, r],
        );
    if (null == n) return (t(), null);
    let c = a?.vanityURLCode ?? o?.code,
        x = null != c ? (0, e7.WU)({ baseCode: c, guildScheduledEventId: u }) : null,
        h = null == x || null == o,
        m = (0, e2.A)(x ?? ""),
        v = o?.maxAge ?? te.value,
        f = o?.maxUses ?? tt.value;
    return (0, i.jsxs)("div", {
        className: e8.kL,
        children: [
            (0, i.jsx)(y.D, {
                onClick: t,
                className: e8.VN,
                "aria-label": eo.intl.string(eo.t.cpT0Cq),
                children: (0, i.jsx)(e0.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e9.A, {
                children: (0, i.jsx)("div", {
                    className: e8.zc,
                    children: (0, i.jsx)(e1.CalendarIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: e8.Kk,
                        "aria-label": eo.intl.string(eo.t.uxFcqu),
                    }),
                }),
            }),
            (0, i.jsx)(K.D, {
                variant: "heading-xl/semibold",
                className: e8.wx,
                children: eo.intl.string(eo.t.UzNv7u),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: e8.rf,
                children: eo.intl.string(eo.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e8.EZ,
                children: [
                    (0, i.jsx)(e4.I, {
                        value: m,
                        autoFocus: !1,
                        onCopy: function (e) {
                            if (null == n || h) return;
                            (0, e6.C)(e);
                            let t = (0, P.dy)(n.entity_type);
                            e3.default.track(eu.HAw.COPY_INSTANT_INVITE, {
                                server: n.guild_id,
                                channel: d,
                                channel_type: t,
                                location: eu.PE1.GUILD_EVENTS,
                                code: o.code,
                                guild_scheduled_event_id: n?.id,
                            });
                        },
                    }),
                    a?.vanityURLCode == null &&
                        (0, i.jsx)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: e8.x6,
                            children: (0, I.Be)(v, f),
                        }),
                ],
            }),
        ],
    });
}
var tl = n(982519);
let { INVITE_OPTIONS_7_DAYS: ti, INVITE_OPTIONS_UNLIMITED: tr } = I.Ay;
var ta =
    (((l = ta || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function ts(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = r.useContext(v.x);
    return (
        r.useEffect(() => {
            let e = t?.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            (n(
                {
                    position: {
                        type: "static-random",
                        minValue: { x: l.left - 100, y: l.top - 100 },
                        maxValue: { x: l.left + 100, y: l.top + 100 },
                    },
                    velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: -60, y: -60 } },
                },
                80,
            ),
                n(
                    {
                        position: {
                            type: "static-random",
                            minValue: { x: l.right - 100, y: l.top - 100 },
                            maxValue: { x: l.right + 100, y: l.top + 100 },
                        },
                        velocity: { type: "static-random", minValue: { x: 20, y: -20 }, maxValue: { x: 60, y: -60 } },
                    },
                    80,
                ));
        }, [n, t]),
        null
    );
}
function td(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: x,
            formErrors: g,
            transitionState: h,
            loading: v,
            error: f,
            onChange: E,
            onSave: j,
            onClose: y,
            createdEvent: A,
        } = e,
        C = (0, p.GV)(),
        b = r.useRef(n),
        I = !(0, a.isEqual)(b.current, n),
        S = r.useMemo(
            () => [
                {
                    slideId: 0,
                    label: eo.intl.string(eo.t["56QlKS"]),
                    valid: null == g.entity,
                    userErrorMessage: g.entity,
                },
                {
                    slideId: 1,
                    label: eo.intl.string(eo.t["w5/ntT"]),
                    valid: null == g.schedule && null == g.topic && (!x || I),
                    userErrorMessage: g.schedule,
                },
                { slideId: 2, label: eo.intl.string(eo.t["8aJzT4"]), valid: !0 },
            ],
            [g, x, I],
        ),
        G = Object.keys(ta).length,
        _ = (0, T.Fd)(n);
    function R(e) {
        return Math.max(0, Math.min(e, G - 1));
    }
    let [k, D] = r.useState(+!!_),
        [L, M] = r.useState(!1),
        P = r.useMemo(
            () =>
                S.slice(0, k + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [S, k],
        ),
        V = k >= S.length ? 3 : S[R(k)].slideId,
        z = 3 === V;
    (0, U.N)((e) => e.onUpdateCanCloseModal)(z);
    let F = (0, s.bG)([m.Ay], () => m.Ay.useReducedMotion),
        O = r.useRef(null);
    function w(e) {
        (M(!1), D(R(e)));
    }
    let B = r.useRef(w);
    function H() {
        P && (2 === V ? j() : z ? y() : w(k + 1));
    }
    function q() {
        w(k - 1);
    }
    (r.useEffect(() => {
        B.current = w;
    }),
        r.useEffect(() => {
            A?.id != null && B.current(3);
        }, [A?.id]));
    let X = eo.intl.string(eo.t.PDTjLN);
    return (
        2 === V && (X = x ? eo.intl.string(eo.t.e5VEcE) : eo.intl.string(eo.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: h,
            "aria-labelledby": C,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !F && z ? (0, i.jsx)(ts, { modal: O.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: tl.Qs,
                    scrollerRef: O,
                    scrollbarGutter: !1,
                    "data-migration-pending": !0,
                    children: [
                        !z &&
                            (0, i.jsx)(N, {
                                steps: S.map((e, t) => ({ label: e.label, disabled: t > k && !P })),
                                stepIndex: k,
                                onClick: function (e) {
                                    e < k ? q() : e > k && H();
                                },
                            }),
                        (0, i.jsxs)(u.t, {
                            activeSlide: V,
                            width: 440,
                            onSlideReady: function (e) {
                                M(e === V);
                            },
                            children: [
                                (0, i.jsx)(u.q, {
                                    id: 0,
                                    children: (0, i.jsx)(eL, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: g.entity,
                                        isSlideReady: L,
                                        onChange: E,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eJ, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: E,
                                        error: f,
                                        validationErrorMessage: g.schedule,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 2,
                                    children: (0, i.jsx)(eF, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: f,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(u.q, { id: 3, children: (0, i.jsx)(tn, { onClose: y, event: A }) }),
                            ],
                        }),
                    ],
                }),
                !z &&
                    (0, i.jsxs)(d.jl, {
                        className: tl.qr,
                        "data-migration-pending": !0,
                        children: [
                            0 !== V &&
                                (0, i.jsx)("div", {
                                    className: tl.zt,
                                    children: (0, i.jsx)(o.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: q,
                                        text: eo.intl.string(eo.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tl.mG,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        variant: "secondary",
                                        text: eo.intl.string(eo.t["ETE/oC"]),
                                        onClick: y,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: tl.x6,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            text: X,
                                            onClick: H,
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
function tu(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: d } = e;
    (0, s.bG)([b.A], () => b.A.getGuild(t));
    let u = (0, s.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(l), [l]),
        o = (0, s.bG)([C.Ay], () => C.Ay.getDefaultChannel(t), [t]),
        c = (0, M.UZ)(u, o),
        [m, v] = r.useState(c),
        [f] = r.useState((0, M.lc)(u)),
        [E, j] = r.useState(null),
        [y, { loading: A, error: N }] = (0, S.A)(async () => {
            var e;
            let n, i;
            if (null != E) return;
            if (f && null != l) return (await G.default.saveEvent(l, m, t), d());
            let r = await G.default.createGuildEvent(m, t);
            return (
                (e = r.body),
                (n = (0, _.K7)(e)),
                null != (i = e.channel_id ?? o?.id) &&
                    h.Ay.createInvite(i, { max_age: ti.value, max_uses: tr.value }, eu.PE1.GUILD_EVENTS),
                n ? j(e) : d(),
                r
            );
        }),
        p = r.useMemo(
            () => ({
                entity: (function (e) {
                    let { entityType: t, channelId: n } = e,
                        l = (0, P.k5)(e);
                    return null == t || t === eS.Ps.NONE
                        ? "An event type must be specified."
                        : (null == l || "" === l.trim()) && null == n
                          ? "Either a location or channel must be specified."
                          : void 0;
                })(m),
                schedule: (function (e, t) {
                    let n = (0, V.N5)(e),
                        { entityType: l } = e;
                    if (null == n || n?.startDate == null) return eo.intl.string(eo.t.M73YyN);
                    let { startDate: i, endDate: r } = n;
                    return l === eS.Ps.EXTERNAL && null == r
                        ? eo.intl.string(eo.t["H16p/w"])
                        : !t && i.isBefore(F()())
                          ? eo.intl.string(eo.t.AXR5Ss)
                          : null != r && null != i && r.isBefore(i)
                            ? eo.intl.string(eo.t.LpjF4K)
                            : null != r && r.isBefore(F()())
                              ? eo.intl.string(eo.t.ViDcm2)
                              : void 0;
                })(m, f),
                topic: (function (e) {
                    let { name: t } = e;
                    return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
                })(m),
            }),
            [m, f],
        );
    return (0, i.jsx)(td, {
        guildId: t,
        guildEvent: m,
        guildEventId: l,
        isEdit: f,
        formErrors: p,
        transitionState: a,
        loading: A,
        error: N,
        onChange: function (e) {
            if (null != e.entityType) {
                let [n] = D(t, (0, P.dy)(e.entityType));
                ((e.channelId = n?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && m.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null));
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: function () {
            null != m.recurrenceRule && f && (0, V.DS)(u, m)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await Promise.all([n.e("304823"), n.e("223976"), n.e("977260")]).then(
                          n.bind(n, 397927),
                      );
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: eo.intl.string(eo.t.BW1Qoh),
                              subtitle: eo.intl.string(eo.t.aNCYas),
                              confirmText: eo.intl.string(eo.t.e5VEcE),
                              cancelText: eo.intl.string(eo.t.oEAioF),
                              onConfirm: y,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-md/normal",
                                  children: eo.intl.format(eo.t.RWBa5X, {}),
                              }),
                          });
                  })
                : y();
        },
        onClose: d,
        createdEvent: E,
    });
}

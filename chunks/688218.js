t.d(n, { default: () => nu });
var l,
    i = t(477900),
    r = t(582128),
    s = t(435558),
    a = t(855986),
    d = t(935462),
    u = t(430690),
    o = t(123292),
    c = t(821609),
    g = t(192308),
    m = t(834730),
    h = t(574332),
    x = t(775602),
    v = t(21161),
    f = t(503698),
    E = t.n(f),
    j = t(116711),
    y = t(939249),
    b = t(869729);
function A(e) {
    let { steps: n, stepIndex: t, onClick: l } = e,
        { i18n: r } = (0, j.G9)();
    return (0, i.jsx)("div", {
        className: b.kL,
        role: "tablist",
        children: n.map((e, s) => {
            let a = t === s;
            return (0, i.jsxs)(
                y.D,
                {
                    onClick: () => l(s),
                    className: b._h,
                    role: "tab",
                    tabIndex: e.disabled ? -1 : 0,
                    "aria-selected": a,
                    "aria-label": `${r.STEP_INDICATOR(s + 1, n.length)}: ${e.label}`,
                    "aria-current": a ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: E()(b.hr, { [b.YD]: a }) }),
                        (0, i.jsx)(m.E, {
                            color: a ? "text-brand" : "text-muted",
                            variant: "body-xs/normal",
                            children: e.label,
                        }),
                    ],
                },
                e.label,
            );
        }),
    });
}
var N = t(915089),
    p = t(808728),
    C = t(71393),
    I = t(735547),
    S = t(422653),
    T = t(698441),
    G = t(496092),
    _ = t(485394);
t(321073);
var R = t(931991);
t(446600);
var k = t(576705);
function D(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [p.A];
    if (null == n) return [];
    let l = t.getChannels(e).VOCAL,
        i = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: t, canManageAllEvents: l } = (0, R.ie)(e),
            r = t || l;
        e.type === n && (e.isGuildVoice() && r ? i.push(e) : e.isGuildStageVoice() && r && i.push(e));
    }
    return i;
}
function L(e, n) {
    return (0, a.yK)([p.A], () => D(e, n, [p.A]), [e, n]);
}
t(219935);
var V = t(794782),
    M = t(9448),
    P = t(974930),
    U = t(70456),
    F = t(536637),
    O = t.n(F),
    z = t(983851),
    w = t(146151),
    B = t(451394),
    H = t(808107),
    q = t(890497),
    X = t(95477),
    Y = t(116085),
    Q = t(771871),
    W = t(331322),
    K = t(534514),
    $ = t(47167),
    Z = t(28863),
    J = t(683071),
    ee = t(885574),
    en = t(738188),
    et = t(404778),
    el = t(975807),
    ei = t(871309),
    er = t(171576),
    es = t(36149),
    ea = t(975571),
    ed = t(418208),
    eu = t(652215),
    eo = t(792996);
function ec(e) {
    return e
        ? eo.intl.format(eo.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              (0, el.A)(ea.A.getArticleURL(eu.MVz.AGE_VERIFICATION_LEARN_MORE)));
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
function eg(e) {
    let { className: n } = e,
        t = (0, es.yM)(),
        l = ec(t);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(J.w, { type: t ? "info" : "warning", message: l, role: "status" }),
    });
}
function em(e) {
    let { className: n } = e,
        t = (0, es.yM)(),
        l = ec(t);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsxs)(W.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                t
                    ? (0, i.jsx)(ee.CircleInformationIcon, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(en.WarningIcon, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(m.E, { color: "text-default", variant: "body-sm/medium", children: l }),
            ],
        }),
    });
}
function eh(e) {
    let { className: n, noBackground: t, divider: l } = e;
    if (!(0, ed.PI)()) return null;
    let r = Array.isArray(l) ? l : null != l ? [l] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.includes(0) && (0, i.jsx)(et.c, { gap: 16 }),
            (0, i.jsx)("div", { className: n, children: t ? (0, i.jsx)(em, {}) : (0, i.jsx)(eg, {}) }),
            r?.includes(1) && (0, i.jsx)(et.c, { gap: 16 }),
        ],
    });
}
var ex = t(734057),
    ev = t(994500),
    ef = t(287809),
    eE = t(770666),
    ej = t(232246),
    ey = t(530209),
    eb = t(825484),
    eA = t(450510),
    eN = t(421838),
    ep = t(465531);
function eC() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eo.intl.string(eo.t.GcZzp2),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eo.intl.string(eo.t["/NEGrO"]),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eo.intl.string(eo.t.eUbuHL),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eo.intl.string(eo.t.sCAZeI),
            }),
        ],
    });
}
function eI(e) {
    let { onClick: n } = e;
    return (0, a.bG)([eA.HP], () => !eA.HP.hasHotspot(eA._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, i.jsxs)("div", {
              className: ep.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: ep.Qs,
                      children: (0, i.jsxs)("div", {
                          className: ep.FS,
                          children: [
                              (0, i.jsx)(K.D, {
                                  variant: "heading-sm/semibold",
                                  children: eo.intl.string(eo.t.Sx8Ezi),
                              }),
                              (0, i.jsx)(m.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  className: ep.ij,
                                  children: eo.intl.string(eo.t.JUzPhm),
                              }),
                              (0, i.jsx)(m.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  children: eo.intl.format(eo.t.Vh7rP7, { suggestionsHook: eC }),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: ep.qr,
                      children: (0, i.jsxs)(eb.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, i.jsx)(c.$, {
                                  onClick: n,
                                  variant: "secondary",
                                  text: eo.intl.string(eo.t["X/3SyA"]),
                              }),
                              (0, i.jsx)("div", {
                                  className: ep.zt,
                                  children: (0, i.jsx)(o.Q, {
                                      onClick: function () {
                                          eN.sF(eA._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: eo.intl.string(eo.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var eS = t(988794),
    eT = t(412311);
function eG(e) {
    return e === eS.Ps.EXTERNAL;
}
function e_(e) {
    let { guildId: n, channelType: t, channel: l, onSelectChannel: r, disabled: s, entityType: a } = e,
        d = t === eu.rbe.GUILD_STAGE_VOICE,
        u = (0, ey.D)(l, a),
        o = L(n, t);
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
            leading: (function (e, n) {
                let t = ex.A.getChannel(e);
                if (null == t) return null;
                let l = t.type === eu.rbe.GUILD_STAGE_VOICE,
                    r = (0, ey.D)(t, n),
                    s = r ? z.H : w.t,
                    a = r ? B.q : H.D;
                return (0, i.jsx)(l ? a : s, { color: "currentColor", size: "md", className: eT.sr });
            })(e.id, a),
        })),
        onSelectionChange: function (e) {
            r(o.find((n) => n.id === e) ?? void 0);
        },
        disabled: s,
    });
}
function eR(e, n) {
    return (t) => {
        let l = { entityType: t, scheduledEndTime: void 0 };
        (eG(t) && (l.scheduledEndTime = (O()(n.scheduledStartTime) ?? O()()).add(2, "hour").toISOString()), e(l));
    };
}
function ek(e) {
    let { guildId: n, guildEvent: t, onChange: l, isFocusReady: s } = e,
        { entityType: d, channelId: u } = t,
        o = (0, a.bG)([ex.A], () => ex.A.getChannel(u), [u]),
        c = r.useRef(null),
        g = r.useRef(void 0);
    r.useEffect(() => {
        let e = s && !g.current;
        ((g.current = s), e && eG(d) && c.current?.focus());
    }, [s, d]);
    let m = (e) => {
            l({ channelId: e?.id ?? null });
        },
        h = (0, M.k5)(t),
        x = (0, M.dy)(d),
        v = (0, T.Fd)(t);
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
                maxLength: 100,
                value: h ?? "",
                inputRef: c,
            })
          : null == x
            ? null
            : (0, i.jsx)(e_, {
                  guildId: n,
                  channelType: x,
                  onSelectChannel: m,
                  channel: o,
                  entityType: d,
                  disabled: v,
              });
}
function eD(e) {
    let { guildId: n, guildEvent: t, onChange: l } = e,
        s = (0, a.bG)([C.A], () => C.A.getGuild(n), [n]),
        d = (0, eE.A)(n, void 0),
        u = (0, eE.A)(n, eu.rbe.GUILD_VOICE),
        o = (0, eE.A)(n, eu.rbe.GUILD_STAGE_VOICE),
        c = L(n, eu.rbe.GUILD_VOICE),
        g = (0, ej.A)(s),
        m = s?.features.has(eu.GuildFeatures.COMMUNITY),
        h = (0, T.Fd)(t),
        x = eR(l, t),
        v = r.useMemo(() => {
            let e = !u || 0 === c.length,
                n = u ? eo.intl.string(eo.t["DkY+cO"]) : eo.intl.string(eo.t.HeF1kV),
                t = [
                    {
                        name: eo.intl.string(eo.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? n : eo.intl.string(eo.t["EV//4f"]),
                        leadingIcon: z.H,
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
            if (m) {
                let e = !o || 0 === g.length,
                    n = o ? eo.intl.string(eo.t["DkY+cO"]) : eo.intl.string(eo.t.HeF1kV);
                return [
                    {
                        name: eo.intl.string(eo.t.EErMzA),
                        value: eS.Ps.STAGE_INSTANCE,
                        desc: e ? n : eo.intl.string(eo.t.LgALpp),
                        leadingIcon: B.q,
                        disabled: e,
                    },
                    ...t,
                ];
            }
            return t;
        }, [d, u, o, m, c.length, g.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === t.entityType)?.value ?? null,
        options: v,
        onChange: x,
        disabled: h,
        helperText: h ? eo.intl.string(eo.t.yutP5U) : void 0,
    });
}
function eL(e) {
    let { guildId: n, guildEvent: l, validationErrorMessage: r, onChange: s, isSlideReady: d = !1 } = e,
        { entityType: u } = l,
        o = (0, a.bG)([C.A], () => C.A.getGuild(n), [n]),
        c = (0, ej.A)(o),
        h = (0, a.bG)([k.A], () => k.A.can(eu.xBc.MANAGE_CHANNELS, o)),
        x = o?.features.has(eu.GuildFeatures.COMMUNITY),
        v = eR(s, l),
        f = x && !eG(u) && 0 === c.length && h && null != u;
    return (0, i.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, i.jsxs)(W.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t["DC+Qm8"]) }),
                    (0, i.jsx)(m.E, {
                        color: "text-subtle",
                        variant: "body-sm/normal",
                        children: eo.intl.string(eo.t.IwmXLP),
                    }),
                ],
            }),
            (0, i.jsx)(eD, { guildId: n, guildEvent: l, onChange: s }),
            (0, i.jsx)(ek, { guildId: n, guildEvent: l, isFocusReady: d, onChange: s }),
            f
                ? (0, i.jsx)(eI, {
                      onClick: function () {
                          (v(eS.Ps.STAGE_INSTANCE),
                              (0, g.mM)(async () => {
                                  let { default: e } = await Promise.all([
                                      t.e(377476),
                                      t.e(597622),
                                      t.e(746309),
                                      t.e(720210),
                                      t.e(813057),
                                      t.e(991625),
                                      t.e(230029),
                                      t.e(891089),
                                      t.e(585733),
                                      t.e(861973),
                                      t.e(253044),
                                      t.e(174554),
                                      t.e(196063),
                                      t.e(392028),
                                      t.e(124054),
                                      t.e(441674),
                                      t.e(152862),
                                      t.e(148326),
                                      t.e(148729),
                                      t.e(650195),
                                      t.e(401317),
                                      t.e(311580),
                                      t.e(67702),
                                      t.e(662387),
                                      t.e(31544),
                                      t.e(334168),
                                      t.e(166171),
                                      t.e(778799),
                                      t.e(424199),
                                      t.e(342551),
                                      t.e(862782),
                                      t.e(721690),
                                      t.e(844780),
                                      t.e(35757),
                                      t.e(234236),
                                      t.e(832817),
                                      t.e(893928),
                                      t.e(416143),
                                      t.e(844695),
                                      t.e(92124),
                                      t.e(988077),
                                      t.e(561216),
                                      t.e(692835),
                                      t.e(21219),
                                      t.e(829177),
                                      t.e(106943),
                                      t.e(348674),
                                      t.e(14962),
                                      t.e(482861),
                                      t.e(786751),
                                      t.e(422891),
                                      t.e(790244),
                                      t.e(592731),
                                      t.e(723794),
                                      t.e(470068),
                                      t.e(894747),
                                      t.e(240511),
                                      t.e(718573),
                                      t.e(203589),
                                      t.e(377766),
                                      t.e(545587),
                                      t.e(170653),
                                      t.e(376883),
                                      t.e(647211),
                                      t.e(799657),
                                      t.e(810034),
                                      t.e(817852),
                                      t.e(509793),
                                      t.e(831145),
                                      t.e(187856),
                                      t.e(960286),
                                      t.e(610449),
                                      t.e(32781),
                                      t.e(996218),
                                      t.e(488990),
                                      t.e(332470),
                                      t.e(735381),
                                      t.e(35403),
                                      t.e(662355),
                                      t.e(872648),
                                      t.e(565065),
                                      t.e(464242),
                                      t.e(88160),
                                      t.e(209518),
                                      t.e(338516),
                                      t.e(692513),
                                      t.e(460773),
                                      t.e(60086),
                                      t.e(208018),
                                      t.e(589916),
                                      t.e(2329),
                                      t.e(298107),
                                      t.e(526778),
                                      t.e(590814),
                                      t.e(258709),
                                      t.e(819193),
                                      t.e(562168),
                                      t.e(507775),
                                      t.e(102657),
                                      t.e(524521),
                                      t.e(358608),
                                      t.e(637038),
                                      t.e(640317),
                                  ]).then(t.bind(t, 410380));
                                  return (t) =>
                                      (0, i.jsx)(e, { ...t, channelType: eu.rbe.GUILD_STAGE_VOICE, guildId: n });
                              }));
                      },
                  })
                : null,
            eS.Tn.has(l.entityType) && (0, i.jsx)(eh, {}),
        ],
    });
}
var eV = t(713654),
    eM = t(857071),
    eP = t(691012),
    eU = t(567550),
    eF = t(819270);
function eO(e) {
    var n;
    let { guildId: t, guildEvent: l, guildEventId: s, error: d, isSlideReady: u } = e,
        o = r.useMemo(() => (0, V.hQ)(l, t), [l, t]),
        { channel_id: c, name: g, image: h, description: x } = o,
        v = (0, a.bG)([ex.A], () => ex.A.getChannel(c), [c]),
        f = (0, a.bG)([C.A], () => C.A.getGuild(t), [t]),
        E = (0, M.oF)(o),
        j = (0, a.bG)(
            [ef.default],
            () => (null != l.creatorId ? ef.default.getUser(l.creatorId) : ef.default.getCurrentUser()),
            [l.creatorId],
        ),
        y = (0, a.bG)([eM.A], () => eM.A.isLurking(t), [t]),
        b = (0, $.Ay)(v),
        A = r.useRef(null);
    r.useEffect(() => {
        u && null != A.current && ((A.current.tabIndex = -1), A.current.focus());
    }, [u]);
    let N = (0, eV.gU)(v, f);
    return (0, i.jsxs)("div", {
        className: eF.Qs,
        children: [
            (0, i.jsx)(eU.A, {
                className: eF.B0,
                guild: f,
                channel: v,
                location: E ?? void 0,
                creator: j,
                name: g,
                description: x,
                imageSource:
                    ((n = (0, V.hQ)(l, t, s)),
                    null == h && null == n.image ? null : null != h && /^data:/.test(h) ? h : (0, eP.A)(n, 1024)),
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
                className: eF.FS,
                children: [
                    (0, i.jsx)(K.D, { ref: A, variant: "heading-xl/semibold", children: eo.intl.string(eo.t.yBsFE3) }),
                    (0, i.jsx)(m.E, {
                        color: "text-subtle",
                        variant: "body-md/normal",
                        className: eF.m_,
                        children:
                            null != location
                                ? eo.intl.string(eo.t.KDPFi9)
                                : eo.intl.format(eo.t.f55NX0, {
                                      channelName: b ?? "",
                                      channelHook: function () {
                                          return (0, i.jsxs)("div", {
                                              className: eF.HA,
                                              children: [
                                                  null != N
                                                      ? (0, i.jsx)(N, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: eF.Kk,
                                                        })
                                                      : (0, i.jsx)(Y.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: eF.NR,
                                                        }),
                                                  b ?? E,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != d &&
                        (0, i.jsx)(m.E, {
                            color: "text-feedback-critical",
                            variant: "body-xs/normal",
                            className: eF.m_,
                            children: d.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
var ez = t(707554),
    ew = t(103557),
    eB = t(664007),
    eH = t(405810),
    eq = t(366098),
    eX = t(918192),
    eY = t(383216),
    eQ = t(339984),
    eW = t(168419);
function eK(e) {
    let {
            guildEvent: n,
            guildEventId: l,
            guildId: s,
            error: a,
            validationErrorMessage: d,
            onChange: u,
            canSetFocus: o = !1,
        } = e,
        {
            entityType: h,
            channelId: x,
            description: v,
            name: f,
            image: E,
            scheduledEndTime: j,
            scheduledStartTime: y,
            recurrenceRule: b,
        } = n,
        A = (0, eq.D3)(x),
        N = (0, eq.Xk)(x),
        p = null != n && (0, T.Fd)(n),
        C = r.useMemo(() => {
            let e = (0, P.N5)(n);
            return null != e ? e : { startDate: O()(y) };
        }, [n, y]),
        [I, S] = r.useState(() => (0, P.z7)(O()(y), b)),
        G = r.useRef(null),
        _ = r.useRef(null);
    function R(e) {
        u({ image: e });
    }
    function k(e, n) {
        null == e || void 0 === n
            ? R(null)
            : (0, g.mM)(async () => {
                  let { default: l } = await Promise.all([
                      t.e(985768),
                      t.e(196063),
                      t.e(392028),
                      t.e(124054),
                      t.e(237403),
                      t.e(655327),
                      t.e(67702),
                      t.e(1214),
                      t.e(424199),
                      t.e(863232),
                      t.e(721690),
                      t.e(35757),
                      t.e(832817),
                      t.e(893928),
                      t.e(416143),
                      t.e(844695),
                      t.e(791154),
                      t.e(92124),
                      t.e(988077),
                      t.e(561216),
                      t.e(692835),
                      t.e(21219),
                      t.e(829177),
                      t.e(106943),
                      t.e(348674),
                      t.e(14962),
                      t.e(786751),
                      t.e(858164),
                      t.e(422891),
                      t.e(977547),
                      t.e(790244),
                      t.e(894747),
                      t.e(444376),
                      t.e(924862),
                      t.e(571470),
                      t.e(50342),
                      t.e(507406),
                      t.e(836681),
                      t.e(660953),
                      t.e(779149),
                      t.e(455524),
                      t.e(90017),
                      t.e(324633),
                      t.e(574571),
                      t.e(777124),
                  ]).then(t.bind(t, 142630));
                  return (t) =>
                      (0, i.jsx)(l, {
                          imageUri: e,
                          file: n,
                          onCrop: (e) => {
                              let { imageUri: n } = e;
                              return R(n);
                          },
                          uploadType: eQ.HL.SCHEDULED_EVENT_IMAGE,
                          returnRef: _,
                          ...t,
                      });
              });
    }
    r.useEffect(() => {
        o && G.current?.focus();
    }, [o]);
    let D = a?.getFirstFieldErrorMessage("name"),
        L = a?.getFirstFieldErrorMessage("description"),
        M = null == D && null == L ? a?.getAnyErrorMessage() : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eW.GU,
                children: null != x && !p && (A > 0 || N > 0) && (0, i.jsx)(eX.Bw, { channelId: x }),
            }),
            (0, i.jsx)("div", {
                className: eW.Zd,
                children: (0, i.jsxs)(W.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(X.k, {
                            label: eo.intl.string(eo.t["0HbEQ6"]),
                            required: !0,
                            error: D ?? M,
                            onChange: function (e) {
                                u({ name: e });
                            },
                            placeholder: eo.intl.string(eo.t["6/yars"]),
                            maxLength: 100,
                            value: f,
                            autoComplete: "off",
                            inputRef: G,
                        }),
                        (0, i.jsx)(eY.A, {
                            className: eW.kz,
                            onScheduleChange: function (e) {
                                let { startDate: n, endDate: t } = e,
                                    l = { scheduledStartTime: n?.toISOString(), scheduledEndTime: t?.toISOString() };
                                (null != n &&
                                    null != j &&
                                    t?.isBefore(n) &&
                                    (l.scheduledEndTime = n.add(1, "hour").toISOString()),
                                    null != n && null != I && (l.recurrenceRule = (0, P.nG)(I, n)),
                                    u(l));
                            },
                            onRecurrenceChange: function (e) {
                                let n = C.startDate;
                                null == n || (u({ recurrenceRule: (0, P.nG)(e, n) }), S(e));
                            },
                            schedule: C,
                            recurrenceRule: b,
                            showEndDate: h === eS.Ps.EXTERNAL,
                            requireEndDate: h === eS.Ps.EXTERNAL,
                            disableStartDateTime: p,
                            guildId: s,
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
                            maxLength: 1e3,
                            autosize: !0,
                        }),
                        (0, i.jsxs)(W.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(K.D, { variant: "body-md/medium", children: eo.intl.string(eo.t.Ly121e) }),
                                (0, i.jsx)(m.E, {
                                    color: "text-subtle",
                                    variant: "body-sm/normal",
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
                                                                  : null != s
                                                                    ? ((0, eP.A)((0, V.hQ)(n, s, l), 1024) ?? null)
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
    let { error: n } = e;
    return null == n
        ? null
        : (0, i.jsx)(m.E, {
              color: "text-feedback-critical",
              variant: "body-xs/normal",
              className: eW.$e,
              children: n,
          });
}
var eZ = t(352701);
function eJ(e) {
    let { isSlideReady: n, ...t } = e;
    return (0, i.jsxs)("div", {
        className: eZ.__invalid_slideContainer,
        children: [
            (0, i.jsx)("div", {
                className: eZ.w,
                children: (0, i.jsxs)(W.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.GG6vbr) }),
                        (0, i.jsx)(m.E, {
                            color: "text-subtle",
                            variant: "body-sm/normal",
                            children: eo.intl.string(eo.t.q5lgwV),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(ez.F, { children: (0, i.jsx)(eK, { ...t, canSetFocus: n }) }),
        ],
    });
}
var e0 = t(789645),
    e1 = t(81466),
    e7 = t(21599),
    e2 = t(279208),
    e8 = t(312556),
    e4 = t(489673),
    e5 = t(958590),
    e6 = t(129230),
    e9 = t(957565),
    e3 = t(673707);
let { INVITE_OPTIONS_7_DAYS: ne, INVITE_OPTIONS_UNLIMITED: nn } = I.Ay;
function nt(e) {
    let { onClose: n, event: t } = e,
        l = t?.guild_id,
        r = (0, a.bG)([p.A], () => (null != l ? p.A.getDefaultChannel(l)?.id : null), [l]),
        s = (0, a.bG)([C.A], () => C.A.getGuild(l), [l]),
        { channel_id: d, id: u } = t ?? {},
        o = (0, a.bG)(
            [e5.A],
            () => {
                let e = d ?? r;
                return null == e ? null : e5.A.getInvite(e);
            },
            [d, r],
        );
    if (null == t) return (n(), null);
    let c = s?.vanityURLCode ?? o?.code,
        g = null != c ? (0, e7.WU)({ baseCode: c, guildScheduledEventId: u }) : null,
        h = null == g || null == o,
        x = (0, e2.A)(g ?? ""),
        v = o?.maxAge ?? ne.value,
        f = o?.maxUses ?? nn.value;
    return (0, i.jsxs)("div", {
        className: e3.kL,
        children: [
            (0, i.jsx)(y.D, {
                onClick: n,
                className: e3.VN,
                "aria-label": eo.intl.string(eo.t.cpT0Cq),
                children: (0, i.jsx)(e0.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e4.A, {
                children: (0, i.jsx)("div", {
                    className: e3.zc,
                    children: (0, i.jsx)(e1.CalendarIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: e3.Kk,
                        "aria-label": eo.intl.string(eo.t.uxFcqu),
                    }),
                }),
            }),
            (0, i.jsx)(K.D, {
                variant: "heading-xl/semibold",
                className: e3.wx,
                children: eo.intl.string(eo.t.UzNv7u),
            }),
            (0, i.jsx)(m.E, {
                variant: "body-md/normal",
                color: "text-default",
                className: e3.rf,
                children: eo.intl.string(eo.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e3.EZ,
                children: [
                    (0, i.jsx)(e8.I, {
                        value: x,
                        autoFocus: !1,
                        onCopy: function (e) {
                            if (null == t || h) return;
                            (0, e9.C)(e);
                            let n = (0, M.dy)(t.entity_type);
                            e6.default.track(eu.HAw.COPY_INSTANT_INVITE, {
                                server: t.guild_id,
                                channel: d,
                                channel_type: n,
                                location: eu.PE1.GUILD_EVENTS,
                                code: o.code,
                                guild_scheduled_event_id: t?.id,
                            });
                        },
                    }),
                    s?.vanityURLCode == null &&
                        (0, i.jsx)(m.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            className: e3.x6,
                            children: (0, I.Be)(v, f),
                        }),
                ],
            }),
        ],
    });
}
var nl = t(982519);
let { INVITE_OPTIONS_7_DAYS: ni, INVITE_OPTIONS_UNLIMITED: nr } = I.Ay;
var ns =
    (((l = ns || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function na(e) {
    let { modal: n } = e,
        { createMultipleConfetti: t } = r.useContext(v.x);
    return (
        r.useEffect(() => {
            let e = n?.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            (t(
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
                t(
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
        }, [t, n]),
        null
    );
}
function nd(e) {
    let {
            guildId: n,
            guildEvent: t,
            guildEventId: l,
            isEdit: g,
            formErrors: m,
            transitionState: h,
            loading: v,
            error: f,
            onChange: E,
            onSave: j,
            onClose: y,
            createdEvent: b,
        } = e,
        p = (0, N.GV)(),
        C = r.useRef(t),
        I = !(0, s.isEqual)(C.current, t),
        S = r.useMemo(
            () => [
                {
                    slideId: 0,
                    label: eo.intl.string(eo.t["56QlKS"]),
                    valid: null == m.entity,
                    userErrorMessage: m.entity,
                },
                {
                    slideId: 1,
                    label: eo.intl.string(eo.t["w5/ntT"]),
                    valid: null == m.schedule && null == m.topic && (!g || I),
                    userErrorMessage: m.schedule,
                },
                { slideId: 2, label: eo.intl.string(eo.t["8aJzT4"]), valid: !0 },
            ],
            [m, g, I],
        ),
        G = Object.keys(ns).length,
        _ = (0, T.Fd)(t);
    function R(e) {
        return Math.max(0, Math.min(e, G - 1));
    }
    let [k, D] = r.useState(+!!_),
        [L, V] = r.useState(!1),
        M = r.useMemo(
            () =>
                S.slice(0, k + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [S, k],
        ),
        P = k >= S.length ? 3 : S[R(k)].slideId,
        F = 3 === P;
    (0, U.N)((e) => e.onUpdateCanCloseModal)(F);
    let O = (0, a.bG)([x.Ay], () => x.Ay.useReducedMotion),
        z = r.useRef(null);
    function w(e) {
        (V(!1), D(R(e)));
    }
    let B = r.useRef(w);
    function H() {
        M && (2 === P ? j() : F ? y() : w(k + 1));
    }
    function q() {
        w(k - 1);
    }
    (r.useEffect(() => {
        B.current = w;
    }),
        r.useEffect(() => {
            b?.id != null && B.current(3);
        }, [b?.id]));
    let X = eo.intl.string(eo.t.PDTjLN);
    return (
        2 === P && (X = g ? eo.intl.string(eo.t.e5VEcE) : eo.intl.string(eo.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: h,
            "aria-labelledby": p,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !O && F ? (0, i.jsx)(na, { modal: z.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: nl.Qs,
                    scrollerRef: z,
                    scrollbarGutter: !1,
                    "data-migration-pending": !0,
                    children: [
                        !F &&
                            (0, i.jsx)(A, {
                                steps: S.map((e, n) => ({ label: e.label, disabled: n > k && !M })),
                                stepIndex: k,
                                onClick: function (e) {
                                    e < k ? q() : e > k && H();
                                },
                            }),
                        (0, i.jsxs)(u.t, {
                            activeSlide: P,
                            width: 440,
                            onSlideReady: function (e) {
                                V(e === P);
                            },
                            children: [
                                (0, i.jsx)(u.q, {
                                    id: 0,
                                    children: (0, i.jsx)(eL, {
                                        guildId: n,
                                        guildEvent: t,
                                        validationErrorMessage: m.entity,
                                        isSlideReady: L,
                                        onChange: E,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eJ, {
                                        guildEvent: t,
                                        guildEventId: l,
                                        guildId: n,
                                        onChange: E,
                                        error: f,
                                        validationErrorMessage: m.schedule,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 2,
                                    children: (0, i.jsx)(eO, {
                                        guildId: n,
                                        guildEvent: t,
                                        guildEventId: l,
                                        error: f,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, i.jsx)(u.q, { id: 3, children: (0, i.jsx)(nt, { onClose: y, event: b }) }),
                            ],
                        }),
                    ],
                }),
                !F &&
                    (0, i.jsxs)(d.jl, {
                        className: nl.qr,
                        "data-migration-pending": !0,
                        children: [
                            0 !== P &&
                                (0, i.jsx)("div", {
                                    className: nl.zt,
                                    children: (0, i.jsx)(o.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: q,
                                        text: eo.intl.string(eo.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: nl.mG,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        variant: "secondary",
                                        text: eo.intl.string(eo.t["ETE/oC"]),
                                        onClick: y,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: nl.x6,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            text: X,
                                            onClick: H,
                                            disabled: !M,
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
function nu(e) {
    let { guildId: n, guildScheduledEventId: l, transitionState: s, onClose: d } = e;
    (0, a.bG)([C.A], () => C.A.getGuild(n));
    let u = (0, a.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(l), [l]),
        o = (0, a.bG)([p.A], () => p.A.getDefaultChannel(n), [n]),
        c = (0, V.UZ)(u, o),
        [x, v] = r.useState(c),
        [f] = r.useState((0, V.lc)(u)),
        [E, j] = r.useState(null),
        [y, { loading: b, error: A }] = (0, S.A)(async () => {
            var e;
            let t, i;
            if (null != E) return;
            if (f && null != l) return (await G.default.saveEvent(l, x, n), d());
            let r = await G.default.createGuildEvent(x, n);
            return (
                (e = r.body),
                (t = (0, _.K7)(e)),
                null != (i = e.channel_id ?? o?.id) &&
                    h.Ay.createInvite(i, { max_age: ni.value, max_uses: nr.value }, eu.PE1.GUILD_EVENTS),
                t ? j(e) : d(),
                r
            );
        }),
        N = r.useMemo(
            () => ({
                entity: (function (e) {
                    let { entityType: n, channelId: t } = e,
                        l = (0, M.k5)(e);
                    return null == n || n === eS.Ps.NONE
                        ? "An event type must be specified."
                        : (null == l || "" === l.trim()) && null == t
                          ? "Either a location or channel must be specified."
                          : void 0;
                })(x),
                schedule: (function (e, n) {
                    let t = (0, P.N5)(e),
                        { entityType: l } = e;
                    if (null == t || t?.startDate == null) return eo.intl.string(eo.t.M73YyN);
                    let { startDate: i, endDate: r } = t;
                    return l === eS.Ps.EXTERNAL && null == r
                        ? eo.intl.string(eo.t["H16p/w"])
                        : !n && i.isBefore(O()())
                          ? eo.intl.string(eo.t.AXR5Ss)
                          : null != r && null != i && r.isBefore(i)
                            ? eo.intl.string(eo.t.LpjF4K)
                            : null != r && r.isBefore(O()())
                              ? eo.intl.string(eo.t.ViDcm2)
                              : void 0;
                })(x, f),
                topic: (function (e) {
                    let { name: n } = e;
                    return null == n || "" === n.trim() ? "Topic must be specified." : void 0;
                })(x),
            }),
            [x, f],
        );
    return (0, i.jsx)(nd, {
        guildId: n,
        guildEvent: x,
        guildEventId: l,
        isEdit: f,
        formErrors: N,
        transitionState: s,
        loading: b,
        error: A,
        onChange: function (e) {
            if (null != e.entityType) {
                let [t] = D(n, (0, M.dy)(e.entityType));
                ((e.channelId = t?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && x.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null));
            }
            v((n) => ({ ...n, ...e }));
        },
        onSave: function () {
            null != x.recurrenceRule && f && (0, P.DS)(u, x)
                ? (0, g.mM)(async () => {
                      let { ConfirmModal: e } = await Promise.all([
                          t.e(288688),
                          t.e(304823),
                          t.e(223976),
                          t.e(977260),
                      ]).then(t.bind(t, 397927));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              title: eo.intl.string(eo.t.BW1Qoh),
                              subtitle: eo.intl.string(eo.t.aNCYas),
                              confirmText: eo.intl.string(eo.t.e5VEcE),
                              cancelText: eo.intl.string(eo.t.oEAioF),
                              onConfirm: y,
                              children: (0, i.jsx)(m.E, {
                                  variant: "body-md/normal",
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

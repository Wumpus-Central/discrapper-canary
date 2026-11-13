t.d(n, { default: () => no });
var l,
    i = t(477900),
    r = t(582128),
    a = t(435558),
    s = t(855986),
    d = t(935462),
    o = t(430690),
    u = t(123292),
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
        children: n.map((e, a) => {
            let s = t === a;
            return (0, i.jsxs)(
                y.D,
                {
                    onClick: () => l(a),
                    className: b._h,
                    role: "tab",
                    tabIndex: e.disabled ? -1 : 0,
                    "aria-selected": s,
                    "aria-label": `${r.STEP_INDICATOR(a + 1, n.length)}: ${e.label}`,
                    "aria-current": s ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: E()(b.hr, { [b.YD]: s }) }),
                        (0, i.jsx)(m.E, {
                            color: s ? "text-brand" : "text-muted",
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
var k = t(931991);
t(446600);
var L = t(576705);
function R(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [p.A];
    if (null == n) return [];
    let l = t.getChannels(e).VOCAL,
        i = [];
    for (let { channel: e } of l) {
        let { canCreateGuildEvent: t, canManageAllEvents: l } = (0, k.ie)(e),
            r = t || l;
        e.type === n && (e.isGuildVoice() && r ? i.push(e) : e.isGuildStageVoice() && r && i.push(e));
    }
    return i;
}
function D(e, n) {
    return (0, s.yK)([p.A], () => R(e, n, [p.A]), [e, n]);
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
    X = t(890497),
    q = t(95477),
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
    ea = t(36149),
    es = t(975571),
    ed = t(418208),
    eo = t(652215),
    eu = t(792996);
function ec(e) {
    return e
        ? eu.intl.format(eu.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          (e.preventDefault(),
                              e.stopPropagation(),
                              (0, el.A)(es.A.getArticleURL(eo.MVz.AGE_VERIFICATION_LEARN_MORE)));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : eu.intl.format(eu.t.edpbxy, {
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
        t = (0, ea.yM)(),
        l = ec(t);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(J.w, { type: t ? "info" : "warning", message: l, role: "status" }),
    });
}
function em(e) {
    let { className: n } = e,
        t = (0, ea.yM)(),
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
                children: eu.intl.string(eu.t.GcZzp2),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eu.intl.string(eu.t["/NEGrO"]),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eu.intl.string(eu.t.eUbuHL),
            }),
            (0, i.jsx)(m.E, {
                color: "text-strong",
                variant: "body-xs/normal",
                className: ep.ln,
                children: eu.intl.string(eu.t.sCAZeI),
            }),
        ],
    });
}
function eI(e) {
    let { onClick: n } = e;
    return (0, s.bG)([eA.HP], () => !eA.HP.hasHotspot(eA._2.STAGE_CHANNEL_UPSELL))
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
                                  children: eu.intl.string(eu.t.Sx8Ezi),
                              }),
                              (0, i.jsx)(m.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  className: ep.ij,
                                  children: eu.intl.string(eu.t.JUzPhm),
                              }),
                              (0, i.jsx)(m.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  children: eu.intl.format(eu.t.Vh7rP7, { suggestionsHook: eC }),
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
                                  text: eu.intl.string(eu.t["X/3SyA"]),
                              }),
                              (0, i.jsx)("div", {
                                  className: ep.zt,
                                  children: (0, i.jsx)(u.Q, {
                                      onClick: function () {
                                          eN.sF(eA._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: eu.intl.string(eu.t["5E9SB9"]),
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
    let { guildId: n, channelType: t, channel: l, onSelectChannel: r, disabled: a, entityType: s } = e,
        d = t === eo.rbe.GUILD_STAGE_VOICE,
        o = (0, ey.D)(l, s),
        u = D(n, t);
    return (0, i.jsx)(X.Z, {
        selectionMode: "single",
        label: d ? eu.intl.string(eu.t.S7GjDz) : eu.intl.string(eu.t["7RYWCP"]),
        required: !0,
        helperText: o ? void 0 : eu.intl.string(eu.t.F3bDaX),
        value: l?.id,
        options: u.map((e) => ({
            id: e.id,
            value: e.id,
            label: (0, $.m1)(e, ef.default, ev.A, !0),
            leading: (function (e, n) {
                let t = ex.A.getChannel(e);
                if (null == t) return null;
                let l = t.type === eo.rbe.GUILD_STAGE_VOICE,
                    r = (0, ey.D)(t, n),
                    a = r ? z.VoiceNormalIcon : w.VoiceLockIcon,
                    s = r ? B.StageIcon : H.StageLockIcon;
                return (0, i.jsx)(l ? s : a, { color: "currentColor", size: "md", className: eT.sr });
            })(e.id, s),
        })),
        onSelectionChange: function (e) {
            r(u.find((n) => n.id === e) ?? void 0);
        },
        disabled: a,
    });
}
function ek(e, n) {
    return (t) => {
        let l = { entityType: t, scheduledEndTime: void 0 };
        (eG(t) && (l.scheduledEndTime = (O()(n.scheduledStartTime) ?? O()()).add(2, "hour").toISOString()), e(l));
    };
}
function eL(e) {
    let { guildId: n, guildEvent: t, onChange: l, isFocusReady: a } = e,
        { entityType: d, channelId: o } = t,
        u = (0, s.bG)([ex.A], () => ex.A.getChannel(o), [o]),
        c = r.useRef(null),
        g = r.useRef(void 0);
    r.useEffect(() => {
        let e = a && !g.current;
        ((g.current = a), e && eG(d) && c.current?.focus());
    }, [a, d]);
    let m = (e) => {
            l({ channelId: e?.id ?? null });
        },
        h = (0, M.k5)(t),
        x = (0, M.dy)(d),
        v = (0, T.Fd)(t);
    return null == d || d === eS.Ps.NONE
        ? null
        : eG(d)
          ? (0, i.jsx)(q.k, {
                label: eu.intl.string(eu.t.yx785A),
                required: !0,
                onChange: (e) => {
                    l({ entityMetadata: { location: e } });
                },
                placeholder: eu.intl.string(eu.t.mkCMia),
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
                  channel: u,
                  entityType: d,
                  disabled: v,
              });
}
function eR(e) {
    let { guildId: n, guildEvent: t, onChange: l } = e,
        a = (0, s.bG)([C.A], () => C.A.getGuild(n), [n]),
        d = (0, eE.A)(n, void 0),
        o = (0, eE.A)(n, eo.rbe.GUILD_VOICE),
        u = (0, eE.A)(n, eo.rbe.GUILD_STAGE_VOICE),
        c = D(n, eo.rbe.GUILD_VOICE),
        g = (0, ej.A)(a),
        m = a?.features.has(eo.GuildFeatures.COMMUNITY),
        h = (0, T.Fd)(t),
        x = ek(l, t),
        v = r.useMemo(() => {
            let e = !o || 0 === c.length,
                n = o ? eu.intl.string(eu.t["DkY+cO"]) : eu.intl.string(eu.t.HeF1kV),
                t = [
                    {
                        name: eu.intl.string(eu.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? n : eu.intl.string(eu.t["EV//4f"]),
                        leadingIcon: z.VoiceNormalIcon,
                        disabled: e,
                    },
                    {
                        name: eu.intl.string(eu.t.w7ipbz),
                        value: eS.Ps.EXTERNAL,
                        desc: d ? eu.intl.string(eu.t.DYxrHm) : eu.intl.string(eu.t.HeF1kV),
                        leadingIcon: Y.LocationIcon,
                        disabled: !d,
                    },
                ];
            if (m) {
                let e = !u || 0 === g.length,
                    n = u ? eu.intl.string(eu.t["DkY+cO"]) : eu.intl.string(eu.t.HeF1kV);
                return [
                    {
                        name: eu.intl.string(eu.t.EErMzA),
                        value: eS.Ps.STAGE_INSTANCE,
                        desc: e ? n : eu.intl.string(eu.t.LgALpp),
                        leadingIcon: B.StageIcon,
                        disabled: e,
                    },
                    ...t,
                ];
            }
            return t;
        }, [d, o, u, m, c.length, g.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === t.entityType)?.value ?? null,
        options: v,
        onChange: x,
        disabled: h,
        helperText: h ? eu.intl.string(eu.t.yutP5U) : void 0,
    });
}
function eD(e) {
    let { guildId: n, guildEvent: l, validationErrorMessage: r, onChange: a, isSlideReady: d = !1 } = e,
        { entityType: o } = l,
        u = (0, s.bG)([C.A], () => C.A.getGuild(n), [n]),
        c = (0, ej.A)(u),
        h = (0, s.bG)([L.A], () => L.A.can(eo.xBc.MANAGE_CHANNELS, u)),
        x = u?.features.has(eo.GuildFeatures.COMMUNITY),
        v = ek(a, l),
        f = x && !eG(o) && 0 === c.length && h && null != o;
    return (0, i.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, i.jsxs)(W.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eu.intl.string(eu.t["DC+Qm8"]) }),
                    (0, i.jsx)(m.E, {
                        color: "text-subtle",
                        variant: "body-sm/normal",
                        children: eu.intl.string(eu.t.IwmXLP),
                    }),
                ],
            }),
            (0, i.jsx)(eR, { guildId: n, guildEvent: l, onChange: a }),
            (0, i.jsx)(eL, { guildId: n, guildEvent: l, isFocusReady: d, onChange: a }),
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
                                      t.e(62567),
                                      t.e(991625),
                                      t.e(230029),
                                      t.e(891089),
                                      t.e(585733),
                                      t.e(569603),
                                      t.e(253044),
                                      t.e(174554),
                                      t.e(196063),
                                      t.e(392028),
                                      t.e(124054),
                                      t.e(441674),
                                      t.e(152862),
                                      t.e(357900),
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
                                      t.e(35757),
                                      t.e(234236),
                                      t.e(832817),
                                      t.e(893928),
                                      t.e(416143),
                                      t.e(844695),
                                      t.e(844780),
                                      t.e(92124),
                                      t.e(988077),
                                      t.e(561216),
                                      t.e(692835),
                                      t.e(21219),
                                      t.e(829177),
                                      t.e(106943),
                                      t.e(348674),
                                      t.e(526595),
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
                                      t.e(729599),
                                      t.e(35403),
                                      t.e(662355),
                                      t.e(872648),
                                      t.e(565065),
                                      t.e(464242),
                                      t.e(88160),
                                      t.e(209518),
                                      t.e(338516),
                                      t.e(60086),
                                      t.e(692513),
                                      t.e(460773),
                                      t.e(2329),
                                      t.e(208018),
                                      t.e(589916),
                                      t.e(590814),
                                      t.e(562168),
                                      t.e(298107),
                                      t.e(258709),
                                      t.e(526778),
                                      t.e(819193),
                                      t.e(637038),
                                      t.e(507775),
                                      t.e(102657),
                                      t.e(524521),
                                      t.e(358608),
                                      t.e(640317),
                                  ]).then(t.bind(t, 410380));
                                  return (t) =>
                                      (0, i.jsx)(e, { ...t, channelType: eo.rbe.GUILD_STAGE_VOICE, guildId: n });
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
    let { guildId: t, guildEvent: l, guildEventId: a, error: d, isSlideReady: o } = e,
        u = r.useMemo(() => (0, V.hQ)(l, t), [l, t]),
        { channel_id: c, name: g, image: h, description: x } = u,
        v = (0, s.bG)([ex.A], () => ex.A.getChannel(c), [c]),
        f = (0, s.bG)([C.A], () => C.A.getGuild(t), [t]),
        E = (0, M.oF)(u),
        j = (0, s.bG)(
            [ef.default],
            () => (null != l.creatorId ? ef.default.getUser(l.creatorId) : ef.default.getCurrentUser()),
            [l.creatorId],
        ),
        y = (0, s.bG)([eM.A], () => eM.A.isLurking(t), [t]),
        b = (0, $.Ay)(v),
        A = r.useRef(null);
    r.useEffect(() => {
        o && null != A.current && ((A.current.tabIndex = -1), A.current.focus());
    }, [o]);
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
                    ((n = (0, V.hQ)(l, t, a)),
                    null == h && null == n.image ? null : null != h && /^data:/.test(h) ? h : (0, eP.A)(n, 1024)),
                isActive: !1,
                isUserLurking: y,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: u,
                eventPreview: u,
                hideAgeVerificationNotice: !0,
            }),
            (0, i.jsxs)("div", {
                className: eF.FS,
                children: [
                    (0, i.jsx)(K.D, { ref: A, variant: "heading-xl/semibold", children: eu.intl.string(eu.t.yBsFE3) }),
                    (0, i.jsx)(m.E, {
                        color: "text-subtle",
                        variant: "body-md/normal",
                        className: eF.m_,
                        children:
                            null != location
                                ? eu.intl.string(eu.t.KDPFi9)
                                : eu.intl.format(eu.t.f55NX0, {
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
                                                      : (0, i.jsx)(Y.LocationIcon, {
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
    eX = t(366098),
    eq = t(918192),
    eY = t(383216),
    eQ = t(339984),
    eW = t(168419);
function eK(e) {
    let {
            guildEvent: n,
            guildEventId: l,
            guildId: a,
            error: s,
            validationErrorMessage: d,
            onChange: o,
            canSetFocus: u = !1,
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
        A = (0, eX.D3)(x),
        N = (0, eX.Xk)(x),
        p = null != n && (0, T.Fd)(n),
        C = r.useMemo(() => {
            let e = (0, P.N5)(n);
            return null != e ? e : { startDate: O()(y) };
        }, [n, y]),
        [I, S] = r.useState(() => (0, P.z7)(O()(y), b)),
        G = r.useRef(null),
        _ = r.useRef(null);
    function k(e) {
        o({ image: e });
    }
    function L(e, n) {
        null == e || void 0 === n
            ? k(null)
            : (0, g.mM)(async () => {
                  let { default: l } = await Promise.all([
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
                      t.e(161275),
                      t.e(844695),
                      t.e(761253),
                      t.e(92124),
                      t.e(988077),
                      t.e(858164),
                      t.e(561216),
                      t.e(977547),
                      t.e(692835),
                      t.e(21219),
                      t.e(829177),
                      t.e(106943),
                      t.e(348674),
                      t.e(526595),
                      t.e(786751),
                      t.e(422891),
                      t.e(790244),
                      t.e(894747),
                      t.e(444376),
                      t.e(924862),
                      t.e(507406),
                      t.e(50342),
                      t.e(660953),
                      t.e(836681),
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
                              return k(n);
                          },
                          uploadType: eQ.HL.SCHEDULED_EVENT_IMAGE,
                          returnRef: _,
                          ...t,
                      });
              });
    }
    r.useEffect(() => {
        u && G.current?.focus();
    }, [u]);
    let R = s?.getFirstFieldErrorMessage("name"),
        D = s?.getFirstFieldErrorMessage("description"),
        M = null == R && null == D ? s?.getAnyErrorMessage() : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eW.GU,
                children: null != x && !p && (A > 0 || N > 0) && (0, i.jsx)(eq.Bw, { channelId: x }),
            }),
            (0, i.jsx)("div", {
                className: eW.Zd,
                children: (0, i.jsxs)(W.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(q.k, {
                            label: eu.intl.string(eu.t["0HbEQ6"]),
                            required: !0,
                            error: R ?? M,
                            onChange: function (e) {
                                o({ name: e });
                            },
                            placeholder: eu.intl.string(eu.t["6/yars"]),
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
                                    o(l));
                            },
                            onRecurrenceChange: function (e) {
                                let n = C.startDate;
                                null == n || (o({ recurrenceRule: (0, P.nG)(e, n) }), S(e));
                            },
                            schedule: C,
                            recurrenceRule: b,
                            showEndDate: h === eS.Ps.EXTERNAL,
                            requireEndDate: h === eS.Ps.EXTERNAL,
                            disableStartDateTime: p,
                            guildId: a,
                        }),
                        (0, i.jsx)(e$, { error: d }),
                        (0, i.jsx)(ew.f, {
                            label: eu.intl.string(eu.t["+gRCC7"]),
                            error: D,
                            placeholder: eu.intl.string(eu.t["kWO/E8"]),
                            value: v,
                            onChange: function (e) {
                                o({ description: e });
                            },
                            maxLength: 1e3,
                            autosize: !0,
                        }),
                        (0, i.jsxs)(W.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(K.D, { variant: "body-md/medium", children: eu.intl.string(eu.t.Ly121e) }),
                                (0, i.jsx)(m.E, {
                                    color: "text-subtle",
                                    variant: "body-sm/normal",
                                    children: eu.intl.string(eu.t.B9C9be),
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
                                                                    ? ((0, eP.A)((0, V.hQ)(n, a, l), 1024) ?? null)
                                                                    : void 0,
                                                          onChange: L,
                                                          hint: eu.intl.string(eu.t.G44Xml),
                                                          showRemoveButton: !1,
                                                          enabled: !0,
                                                      }),
                                                      (0, i.jsx)(c.$, {
                                                          variant: "primary",
                                                          size: "sm",
                                                          text: eu.intl.string(eu.t.gmUvO1),
                                                          onClick: () => k(null),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(eH.A, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  onChange: L,
                                                  text: eu.intl.string(eu.t.vKCGYb),
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
                        (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: eu.intl.string(eu.t.GG6vbr) }),
                        (0, i.jsx)(m.E, {
                            color: "text-subtle",
                            variant: "body-sm/normal",
                            children: eu.intl.string(eu.t.q5lgwV),
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
    e5 = t(312556),
    e8 = t(489673),
    e4 = t(958590),
    e6 = t(129230),
    e9 = t(957565),
    e3 = t(673707);
let { INVITE_OPTIONS_7_DAYS: ne, INVITE_OPTIONS_UNLIMITED: nn } = I.Ay;
function nt(e) {
    let { onClose: n, event: t } = e,
        l = t?.guild_id,
        r = (0, s.bG)([p.A], () => (null != l ? p.A.getDefaultChannel(l)?.id : null), [l]),
        a = (0, s.bG)([C.A], () => C.A.getGuild(l), [l]),
        { channel_id: d, id: o } = t ?? {},
        u = (0, s.bG)(
            [e4.A],
            () => {
                let e = d ?? r;
                return null == e ? null : e4.A.getInvite(e);
            },
            [d, r],
        );
    if (null == t) return (n(), null);
    let c = a?.vanityURLCode ?? u?.code,
        g = null != c ? (0, e7.WU)({ baseCode: c, guildScheduledEventId: o }) : null,
        h = null == g || null == u,
        x = (0, e2.A)(g ?? ""),
        v = u?.maxAge ?? ne.value,
        f = u?.maxUses ?? nn.value;
    return (0, i.jsxs)("div", {
        className: e3.kL,
        children: [
            (0, i.jsx)(y.D, {
                onClick: n,
                className: e3.VN,
                "aria-label": eu.intl.string(eu.t.cpT0Cq),
                children: (0, i.jsx)(e0.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e8.A, {
                children: (0, i.jsx)("div", {
                    className: e3.zc,
                    children: (0, i.jsx)(e1.CalendarIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: e3.Kk,
                        "aria-label": eu.intl.string(eu.t.uxFcqu),
                    }),
                }),
            }),
            (0, i.jsx)(K.D, {
                variant: "heading-xl/semibold",
                className: e3.wx,
                children: eu.intl.string(eu.t.UzNv7u),
            }),
            (0, i.jsx)(m.E, {
                variant: "body-md/normal",
                color: "text-default",
                className: e3.rf,
                children: eu.intl.string(eu.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e3.EZ,
                children: [
                    (0, i.jsx)(e5.I, {
                        value: x,
                        autoFocus: !1,
                        onCopy: function (e) {
                            if (null == t || h) return;
                            (0, e9.C)(e);
                            let n = (0, M.dy)(t.entity_type);
                            e6.default.track(eo.HAw.COPY_INSTANT_INVITE, {
                                server: t.guild_id,
                                channel: d,
                                channel_type: n,
                                location: eo.PE1.GUILD_EVENTS,
                                code: u.code,
                                guild_scheduled_event_id: t?.id,
                            });
                        },
                    }),
                    a?.vanityURLCode == null &&
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
var na =
    (((l = na || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function ns(e) {
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
        I = !(0, a.isEqual)(C.current, t),
        S = r.useMemo(
            () => [
                {
                    slideId: 0,
                    label: eu.intl.string(eu.t["56QlKS"]),
                    valid: null == m.entity,
                    userErrorMessage: m.entity,
                },
                {
                    slideId: 1,
                    label: eu.intl.string(eu.t["w5/ntT"]),
                    valid: null == m.schedule && null == m.topic && (!g || I),
                    userErrorMessage: m.schedule,
                },
                { slideId: 2, label: eu.intl.string(eu.t["8aJzT4"]), valid: !0 },
            ],
            [m, g, I],
        ),
        G = Object.keys(na).length,
        _ = (0, T.Fd)(t);
    function k(e) {
        return Math.max(0, Math.min(e, G - 1));
    }
    let [L, R] = r.useState(+!!_),
        [D, V] = r.useState(!1),
        M = r.useMemo(
            () =>
                S.slice(0, L + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [S, L],
        ),
        P = L >= S.length ? 3 : S[k(L)].slideId,
        F = 3 === P;
    (0, U.N)((e) => e.onUpdateCanCloseModal)(F);
    let O = (0, s.bG)([x.Ay], () => x.Ay.useReducedMotion),
        z = r.useRef(null);
    function w(e) {
        (V(!1), R(k(e)));
    }
    let B = r.useRef(w);
    function H() {
        M && (2 === P ? j() : F ? y() : w(L + 1));
    }
    function X() {
        w(L - 1);
    }
    (r.useEffect(() => {
        B.current = w;
    }),
        r.useEffect(() => {
            b?.id != null && B.current(3);
        }, [b?.id]));
    let q = eu.intl.string(eu.t.PDTjLN);
    return (
        2 === P && (q = g ? eu.intl.string(eu.t.e5VEcE) : eu.intl.string(eu.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: h,
            "aria-labelledby": p,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !O && F ? (0, i.jsx)(ns, { modal: z.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: nl.Qs,
                    scrollerRef: z,
                    scrollbarGutter: !1,
                    "data-migration-pending": !0,
                    children: [
                        !F &&
                            (0, i.jsx)(A, {
                                steps: S.map((e, n) => ({ label: e.label, disabled: n > L && !M })),
                                stepIndex: L,
                                onClick: function (e) {
                                    e < L ? X() : e > L && H();
                                },
                            }),
                        (0, i.jsxs)(o.t, {
                            activeSlide: P,
                            width: 440,
                            onSlideReady: function (e) {
                                V(e === P);
                            },
                            children: [
                                (0, i.jsx)(o.q, {
                                    id: 0,
                                    children: (0, i.jsx)(eD, {
                                        guildId: n,
                                        guildEvent: t,
                                        validationErrorMessage: m.entity,
                                        isSlideReady: D,
                                        onChange: E,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eJ, {
                                        guildEvent: t,
                                        guildEventId: l,
                                        guildId: n,
                                        onChange: E,
                                        error: f,
                                        validationErrorMessage: m.schedule,
                                        isSlideReady: D,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: 2,
                                    children: (0, i.jsx)(eO, {
                                        guildId: n,
                                        guildEvent: t,
                                        guildEventId: l,
                                        error: f,
                                        isSlideReady: D,
                                    }),
                                }),
                                (0, i.jsx)(o.q, { id: 3, children: (0, i.jsx)(nt, { onClose: y, event: b }) }),
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
                                    children: (0, i.jsx)(u.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: X,
                                        text: eu.intl.string(eu.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: nl.mG,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        variant: "secondary",
                                        text: eu.intl.string(eu.t["ETE/oC"]),
                                        onClick: y,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: nl.x6,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            text: q,
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
function no(e) {
    let { guildId: n, guildScheduledEventId: l, transitionState: a, onClose: d } = e;
    (0, s.bG)([C.A], () => C.A.getGuild(n));
    let o = (0, s.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(l), [l]),
        u = (0, s.bG)([p.A], () => p.A.getDefaultChannel(n), [n]),
        c = (0, V.UZ)(o, u),
        [x, v] = r.useState(c),
        [f] = r.useState((0, V.lc)(o)),
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
                null != (i = e.channel_id ?? u?.id) &&
                    h.Ay.createInvite(i, { max_age: ni.value, max_uses: nr.value }, eo.PE1.GUILD_EVENTS),
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
                    if (null == t || t?.startDate == null) return eu.intl.string(eu.t.M73YyN);
                    let { startDate: i, endDate: r } = t;
                    return l === eS.Ps.EXTERNAL && null == r
                        ? eu.intl.string(eu.t["H16p/w"])
                        : !n && i.isBefore(O()())
                          ? eu.intl.string(eu.t.AXR5Ss)
                          : null != r && null != i && r.isBefore(i)
                            ? eu.intl.string(eu.t.LpjF4K)
                            : null != r && r.isBefore(O()())
                              ? eu.intl.string(eu.t.ViDcm2)
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
        transitionState: a,
        loading: b,
        error: A,
        onChange: function (e) {
            if (null != e.entityType) {
                let [t] = R(n, (0, M.dy)(e.entityType));
                ((e.channelId = t?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && x.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null));
            }
            v((n) => ({ ...n, ...e }));
        },
        onSave: function () {
            null != x.recurrenceRule && f && (0, P.DS)(o, x)
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
                              title: eu.intl.string(eu.t.BW1Qoh),
                              subtitle: eu.intl.string(eu.t.aNCYas),
                              confirmText: eu.intl.string(eu.t.e5VEcE),
                              cancelText: eu.intl.string(eu.t.oEAioF),
                              onConfirm: y,
                              children: (0, i.jsx)(m.E, {
                                  variant: "body-md/normal",
                                  children: eu.intl.format(eu.t.RWBa5X, {}),
                              }),
                          });
                  })
                : y();
        },
        onClose: d,
        createdEvent: E,
    });
}

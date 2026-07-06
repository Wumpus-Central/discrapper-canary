n.d(t, { default: () => tu });
var l,
    i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(17928),
    d = n(935462),
    u = n(430690),
    c = n(123292),
    o = n(821609),
    x = n(192308),
    g = n(834730),
    h = n(376728),
    m = n(775602),
    v = n(21161),
    E = n(503698),
    f = n.n(E),
    j = n(460890),
    y = n(939249),
    A = n(252316);
function N(e) {
    let { steps: t, stepIndex: n, onClick: l } = e,
        { i18n: r } = (0, j.G9)();
    return (0, i.jsx)("div", {
        className: A.kL,
        role: "tablist",
        children: t.map((e, s) => {
            let a = n === s;
            return (0, i.jsxs)(
                y.D,
                {
                    onClick: () => l(s),
                    className: A._h,
                    role: "tab",
                    "aria-selected": a,
                    "aria-label": `${r.STEP_INDICATOR(s + 1, t.length)}: ${e.label}`,
                    "aria-current": a ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: f()(A.hr, { [A.YD]: a }) }),
                        (0, i.jsx)(g.E, {
                            color: a ? "text-brand" : "text-muted",
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
    return (0, a.yK)([C.Ay], () => D(e, t, [C.Ay]), [e, t]);
}
n(219935);
var M = n(794782),
    P = n(9448),
    V = n(974930),
    U = n(70456),
    z = n(989349),
    F = n.n(z),
    O = n(983851),
    w = n(146151),
    B = n(451394),
    H = n(808107),
    q = n(783878),
    X = n(292666),
    Y = n(116085),
    Q = n(773812),
    W = n(331322),
    K = n(534514),
    $ = n(47167),
    Z = n(349288),
    J = n(683071),
    ee = n(885574),
    et = n(738188),
    en = n(404778),
    el = n(975807),
    ei = n(379257),
    er = n(847599),
    es = n(36149),
    ea = n(975571),
    ed = n(418208),
    eu = n(652215),
    ec = n(375708);
function eo() {
    return (0, es.yM)()
        ? ec.intl.format(ec.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, el.A)(ea.A.getArticleURL(eu.MVz.TIGGER_PAWTECT_LEARN_MORE));
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          })
        : ec.intl.format(ec.t.edpbxy, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              ei.A.showAgeVerificationGetStartedModal({ entryPoint: er.q1.START_STAGE_PROMPT });
                      },
                      useDefaultUnderlineStyles: !1,
                      children: e.join(""),
                  }),
          });
}
function ex(e) {
    let { className: t } = e,
        n = (0, es.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(J.w, { type: n ? "info" : "warning", children: (0, i.jsx)(eo, {}) }),
    });
}
function eg(e) {
    let { className: t } = e,
        n = (0, es.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)(W.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                n
                    ? (0, i.jsx)(ee.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(et.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(g.E, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(eo, {}) }),
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
    eE = n(287809),
    ef = n(770666),
    ej = n(232246),
    ey = n(530209),
    eA = n(825484),
    eN = n(450510),
    ep = n(421838),
    eC = n(419836);
function eb() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: ec.intl.string(ec.t.GcZzp2),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: ec.intl.string(ec.t["/NEGrO"]),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: ec.intl.string(ec.t.eUbuHL),
            }),
            (0, i.jsx)(g.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: eC.ln,
                children: ec.intl.string(ec.t.sCAZeI),
            }),
        ],
    });
}
function eI(e) {
    let { onClick: t } = e;
    return (0, a.bG)([eN.HP], () => !eN.HP.hasHotspot(eN._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, i.jsxs)("div", {
              className: eC.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: eC.Qs,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eC.FS,
                              children: [
                                  (0, i.jsx)(K.D, {
                                      variant: "heading-md/semibold",
                                      children: ec.intl.string(ec.t.Sx8Ezi),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: eC.ij,
                                      children: ec.intl.string(ec.t.JUzPhm),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: ec.intl.format(ec.t.Vh7rP7, { suggestionsHook: eb }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: eC.Sl,
                              children: (0, i.jsx)("img", {
                                  src: "/assets/0e2b0a24951b9e2e.svg",
                                  alt: ec.intl.string(ec.t["uIm/n4"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: eC.qr,
                      children: (0, i.jsxs)(eA.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, i.jsx)(o.$, {
                                  onClick: t,
                                  variant: "secondary",
                                  text: ec.intl.string(ec.t["X/3SyA"]),
                              }),
                              (0, i.jsx)("div", {
                                  className: eC.zt,
                                  children: (0, i.jsx)(c.Q, {
                                      onClick: function () {
                                          ep.sF(eN._2.STAGE_CHANNEL_UPSELL);
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
var eS = n(988794),
    eT = n(723074);
function eG(e) {
    return e === eS.Ps.EXTERNAL;
}
function e_(e) {
    let { guildId: t, channelType: n, channel: l, onSelectChannel: r, disabled: s, entityType: a } = e,
        d = n === eu.rbe.GUILD_STAGE_VOICE,
        u = (0, ey.D)(l, a),
        c = L(t, n);
    return (0, i.jsx)(q.Z, {
        selectionMode: "single",
        label: d ? ec.intl.string(ec.t.S7GjDz) : ec.intl.string(ec.t["7RYWCP"]),
        required: !0,
        helperText: u ? void 0 : ec.intl.string(ec.t.F3bDaX),
        value: l?.id,
        options: c.map((e) => ({
            id: e.id,
            value: e.id,
            label: (0, $.m1)(e, eE.default, ev.A, !0),
            leading: (function (e, t) {
                let n = em.A.getChannel(e);
                if (null == n) return null;
                let l = n.type === eu.rbe.GUILD_STAGE_VOICE,
                    r = (0, ey.D)(n, t),
                    s = r ? O.H : w.t,
                    a = r ? B.q : H.D;
                return (0, i.jsx)(l ? a : s, { color: "currentColor", size: "md", className: eT.sr });
            })(e.id, a),
        })),
        onSelectionChange: function (e) {
            r(c.find((t) => t.id === e) ?? void 0);
        },
        disabled: s,
    });
}
function eR(e, t) {
    return (n) => {
        let l = { entityType: n, scheduledEndTime: void 0 };
        eG(n) && (l.scheduledEndTime = (F()(t.scheduledStartTime) ?? F()()).add(2, "hour").toISOString()), e(l);
    };
}
function ek(e) {
    let { guildId: t, guildEvent: n, onChange: l, isFocusReady: s } = e,
        { entityType: d, channelId: u } = n,
        c = (0, a.bG)([em.A], () => em.A.getChannel(u), [u]),
        o = r.useRef(null),
        x = r.useRef(void 0);
    r.useEffect(() => {
        let e = s && !x.current;
        (x.current = s), e && eG(d) && o.current?.focus();
    }, [s, d]);
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
                label: ec.intl.string(ec.t.yx785A),
                required: !0,
                onChange: (e) => {
                    l({ entityMetadata: { location: e } });
                },
                placeholder: ec.intl.string(ec.t.mkCMia),
                maxLength: eS.vj,
                value: h ?? "",
                inputRef: o,
            })
          : null == m
            ? null
            : (0, i.jsx)(e_, {
                  guildId: t,
                  channelType: m,
                  onSelectChannel: g,
                  channel: c,
                  entityType: d,
                  disabled: v,
              });
}
function eD(e) {
    let { guildId: t, guildEvent: n, onChange: l } = e,
        s = (0, a.bG)([b.A], () => b.A.getGuild(t), [t]),
        d = (0, ef.A)(t, void 0),
        u = (0, ef.A)(t, eu.rbe.GUILD_VOICE),
        c = (0, ef.A)(t, eu.rbe.GUILD_STAGE_VOICE),
        o = L(t, eu.rbe.GUILD_VOICE),
        x = (0, ej.A)(s),
        g = s?.features.has(eu.GuildFeatures.COMMUNITY),
        h = (0, T.Fd)(n),
        m = eR(l, n),
        v = r.useMemo(() => {
            let e = !u || 0 === o.length,
                t = u ? ec.intl.string(ec.t["DkY+cO"]) : ec.intl.string(ec.t.HeF1kV),
                n = [
                    {
                        name: ec.intl.string(ec.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? t : ec.intl.string(ec.t["EV//4f"]),
                        leadingIcon: O.H,
                        disabled: e,
                    },
                    {
                        name: ec.intl.string(ec.t.w7ipbz),
                        value: eS.Ps.EXTERNAL,
                        desc: d ? ec.intl.string(ec.t.DYxrHm) : ec.intl.string(ec.t.HeF1kV),
                        leadingIcon: Y.B,
                        disabled: !d,
                    },
                ];
            if (g) {
                let e = !c || 0 === x.length,
                    t = c ? ec.intl.string(ec.t["DkY+cO"]) : ec.intl.string(ec.t.HeF1kV);
                return [
                    {
                        name: ec.intl.string(ec.t.EErMzA),
                        value: eS.Ps.STAGE_INSTANCE,
                        desc: e ? t : ec.intl.string(ec.t.LgALpp),
                        leadingIcon: B.q,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [d, u, c, g, o.length, x.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === n.entityType)?.value ?? null,
        options: v,
        onChange: m,
        disabled: h,
        helperText: h ? ec.intl.string(ec.t.yutP5U) : void 0,
    });
}
function eL(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: r, onChange: s, isSlideReady: d = !1 } = e,
        { entityType: u } = l,
        c = (0, a.bG)([b.A], () => b.A.getGuild(t), [t]),
        o = (0, ej.A)(c),
        h = (0, a.bG)([k.A], () => k.A.can(eu.xBc.MANAGE_CHANNELS, c)),
        m = c?.features.has(eu.GuildFeatures.COMMUNITY),
        v = eR(s, l),
        E = m && !eG(u) && 0 === o.length && h && null != u;
    return (0, i.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, i.jsxs)(W.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: ec.intl.string(ec.t["DC+Qm8"]) }),
                    (0, i.jsx)(g.E, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: ec.intl.string(ec.t.IwmXLP),
                    }),
                ],
            }),
            (0, i.jsx)(eD, { guildId: t, guildEvent: l, onChange: s }),
            (0, i.jsx)(ek, { guildId: t, guildEvent: l, isFocusReady: d, onChange: s }),
            E
                ? (0, i.jsx)(eI, {
                      onClick: function () {
                          v(eS.Ps.STAGE_INSTANCE),
                              (0, x.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("79086"),
                                      n.e("21293"),
                                      n.e("37398"),
                                      n.e("11585"),
                                      n.e("3589"),
                                      n.e("92513"),
                                      n.e("89916"),
                                      n.e("60773"),
                                      n.e("2329"),
                                      n.e("8018"),
                                      n.e("88003"),
                                      n.e("20379"),
                                      n.e("19193"),
                                      n.e("77487"),
                                      n.e("7775"),
                                      n.e("58608"),
                                      n.e("28034"),
                                      n.e("37038"),
                                  ]).then(n.bind(n, 333369));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, channelType: eu.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
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
    ez = n(439437);
function eF(e) {
    var t;
    let { guildId: n, guildEvent: l, guildEventId: s, error: d, isSlideReady: u } = e,
        c = r.useMemo(() => (0, M.hQ)(l, n), [l, n]),
        { channel_id: o, name: x, image: h, description: m } = c,
        v = (0, a.bG)([em.A], () => em.A.getChannel(o), [o]),
        E = (0, a.bG)([b.A], () => b.A.getGuild(n), [n]),
        f = (0, P.oF)(c),
        j = (0, a.bG)(
            [eE.default],
            () => (null != l.creatorId ? eE.default.getUser(l.creatorId) : eE.default.getCurrentUser()),
            [l.creatorId],
        ),
        y = (0, a.bG)([eP.A], () => eP.A.isLurking(n), [n]),
        A = (0, $.Ay)(v),
        N = r.useRef(null);
    r.useEffect(() => {
        u && null != N.current && ((N.current.tabIndex = -1), N.current.focus());
    }, [u]);
    let p = (0, eM.gU)(v, E);
    return (0, i.jsxs)("div", {
        className: ez.Qs,
        children: [
            (0, i.jsx)(eU.A, {
                className: ez.B0,
                guild: E,
                channel: v,
                location: f ?? void 0,
                creator: j,
                name: x,
                description: m,
                imageSource:
                    ((t = (0, M.hQ)(l, n, s)),
                    null == h && null == t.image ? null : null != h && /^data:/.test(h) ? h : (0, eV.A)(t)),
                isActive: !1,
                isUserLurking: y,
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
                    (0, i.jsx)(K.D, { ref: N, variant: "heading-xl/semibold", children: ec.intl.string(ec.t.yBsFE3) }),
                    (0, i.jsx)(g.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: ez.m_,
                        children:
                            null != location
                                ? ec.intl.string(ec.t.KDPFi9)
                                : ec.intl.format(ec.t.f55NX0, {
                                      channelName: A ?? "",
                                      channelHook: () =>
                                          (0, i.jsxs)("div", {
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
                                                  A ?? f,
                                              ],
                                          }),
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
    ew = n(260598),
    eB = n(664007),
    eH = n(405810),
    eq = n(366098),
    eX = n(918192),
    eY = n(979091),
    eQ = n(339984),
    eW = n(910264);
function eK(e) {
    let {
            guildEvent: t,
            guildEventId: l,
            guildId: s,
            error: a,
            validationErrorMessage: d,
            onChange: u,
            canSetFocus: c = !1,
        } = e,
        {
            entityType: h,
            channelId: m,
            description: v,
            name: E,
            image: f,
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
                      n.e("78104"),
                      n.e("62280"),
                      n.e("21866"),
                      n.e("63232"),
                      n.e("43437"),
                      n.e("58164"),
                      n.e("71470"),
                      n.e("37490"),
                      n.e("50342"),
                      n.e("63726"),
                      n.e("93513"),
                      n.e("7406"),
                      n.e("55524"),
                      n.e("79149"),
                      n.e("89908"),
                      n.e("90017"),
                      n.e("74571"),
                      n.e("50348"),
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
        c && G.current?.focus();
    }, [c]);
    let D = a?.getFirstFieldErrorMessage("name"),
        L = a?.getFirstFieldErrorMessage("description"),
        P = null == D && null == L ? a?.getAnyErrorMessage() : null;
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
                            label: ec.intl.string(ec.t["0HbEQ6"]),
                            required: !0,
                            error: D ?? P,
                            onChange: function (e) {
                                u({ name: e });
                            },
                            placeholder: ec.intl.string(ec.t["6/yars"]),
                            maxLength: eS.t_,
                            value: E,
                            autoComplete: "off",
                            inputRef: G,
                        }),
                        (0, i.jsx)(eY.A, {
                            className: eW.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: n } = e,
                                    l = { scheduledStartTime: t?.toISOString(), scheduledEndTime: n?.toISOString() };
                                null != t &&
                                    null != j &&
                                    n?.isBefore(t) &&
                                    (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != I && (l.recurrenceRule = (0, V.nG)(I, t)),
                                    u(l);
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
                            guildId: s,
                        }),
                        (0, i.jsx)(e$, { error: d }),
                        (0, i.jsx)(ew.f, {
                            label: ec.intl.string(ec.t["+gRCC7"]),
                            error: L,
                            placeholder: ec.intl.string(ec.t["kWO/E8"]),
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
                                (0, i.jsx)(K.D, { variant: "text-md/medium", children: ec.intl.string(ec.t.Ly121e) }),
                                (0, i.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: ec.intl.string(ec.t.B9C9be),
                                }),
                                (0, i.jsx)("div", {
                                    ref: _,
                                    tabIndex: -1,
                                    className: eW.aN,
                                    children:
                                        null != f
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(eB.A, {
                                                          className: eW.km,
                                                          iconWrapperClassName: eW.WR,
                                                          image: f,
                                                          makeURL: (e) =>
                                                              null == e
                                                                  ? null
                                                                  : null != s
                                                                    ? ((0, eV.A)((0, M.hQ)(t, s, l)) ?? null)
                                                                    : void 0,
                                                          onChange: k,
                                                          hint: ec.intl.string(ec.t.G44Xml),
                                                          showRemoveButton: !1,
                                                          enabled: !0,
                                                      }),
                                                      (0, i.jsx)(o.$, {
                                                          variant: "primary",
                                                          size: "sm",
                                                          text: ec.intl.string(ec.t.gmUvO1),
                                                          onClick: () => R(null),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(eH.A, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  onChange: k,
                                                  text: ec.intl.string(ec.t.vKCGYb),
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
var eZ = n(339184);
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
                        (0, i.jsx)(K.D, { variant: "heading-xl/semibold", children: ec.intl.string(ec.t.GG6vbr) }),
                        (0, i.jsx)(g.E, {
                            color: "text-subtle",
                            variant: "text-sm/normal",
                            children: ec.intl.string(ec.t.q5lgwV),
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
    e7 = n(842241),
    e8 = n(279208),
    e9 = n(747007),
    e3 = n(710358),
    e4 = n(958590),
    e2 = n(174459),
    e5 = n(957565),
    e6 = n(118888);
let { INVITE_OPTIONS_7_DAYS: te, INVITE_OPTIONS_UNLIMITED: tt } = I.Ay;
function tn(e) {
    let { onClose: t, event: n } = e,
        l = n?.guild_id,
        r = (0, a.bG)([C.Ay], () => (null != l ? C.Ay.getDefaultChannel(l)?.id : null), [l]),
        s = (0, a.bG)([b.A], () => b.A.getGuild(l), [l]),
        { channel_id: d, id: u } = n ?? {},
        c = (0, a.bG)([e4.A], () => {
            let e = d ?? r;
            return null == e ? null : e4.A.getInvite(e);
        }, [d, r]);
    if (null == n) return t(), null;
    let o = s?.vanityURLCode ?? c?.code,
        x = null != o ? (0, e7.WU)({ baseCode: o, guildScheduledEventId: u }) : null,
        h = null == x || null == c,
        m = (0, e8.A)(x ?? ""),
        v = c?.maxAge ?? te.value,
        E = c?.maxUses ?? tt.value;
    return (0, i.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, i.jsx)(y.D, {
                onClick: t,
                className: e6.VN,
                "aria-label": ec.intl.string(ec.t.cpT0Cq),
                children: (0, i.jsx)(e0.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e3.A, {
                children: (0, i.jsx)("div", {
                    className: e6.zc,
                    children: (0, i.jsx)(e1.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: e6.Kk,
                        "aria-label": ec.intl.string(ec.t.uxFcqu),
                    }),
                }),
            }),
            (0, i.jsx)(K.D, {
                variant: "heading-xl/semibold",
                className: e6.wx,
                children: ec.intl.string(ec.t.UzNv7u),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: e6.rf,
                children: ec.intl.string(ec.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e6.EZ,
                children: [
                    (0, i.jsx)(e9.I, {
                        value: m,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (h) return;
                            (0, e5.C)(e);
                            let t = (0, P.dy)(n.entity_type);
                            e2.default.track(eu.HAw.COPY_INSTANT_INVITE, {
                                server: n.guild_id,
                                channel: d,
                                channel_type: t,
                                location: eu.PE1.GUILD_EVENTS,
                                code: c.code,
                                guild_scheduled_event_id: n?.id,
                            });
                        },
                    }),
                    s?.vanityURLCode == null &&
                        (0, i.jsx)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: e6.x6,
                            children: (0, I.Be)(v, E),
                        }),
                ],
            }),
        ],
    });
}
var tl = n(486536);
let { INVITE_OPTIONS_7_DAYS: ti, INVITE_OPTIONS_UNLIMITED: tr } = I.Ay;
var ts =
    (((l = ts || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function ta(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = r.useContext(v.x);
    return (
        r.useEffect(() => {
            let e = t?.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
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
                );
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
            error: E,
            onChange: f,
            onSave: j,
            onClose: y,
            createdEvent: A,
        } = e,
        C = (0, p.GV)(),
        b = r.useRef(n),
        I = !(0, s.isEqual)(b.current, n),
        S = r.useMemo(
            () => [
                {
                    slideId: 0,
                    label: ec.intl.string(ec.t["56QlKS"]),
                    valid: null == g.entity,
                    userErrorMessage: g.entity,
                },
                {
                    slideId: 1,
                    label: ec.intl.string(ec.t["w5/ntT"]),
                    valid: null == g.schedule && null == g.topic && (!x || I),
                    userErrorMessage: g.schedule,
                },
                { slideId: 2, label: ec.intl.string(ec.t["8aJzT4"]), valid: !0 },
            ],
            [g, x, I],
        ),
        G = Object.keys(ts).length,
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
    let F = (0, a.bG)([m.Ay], () => m.Ay.useReducedMotion),
        O = r.useRef(null);
    function w(e) {
        M(!1), D(R(e));
    }
    let B = r.useRef(w);
    function H() {
        P && (2 === V ? j() : z ? y() : w(k + 1));
    }
    function q() {
        w(k - 1);
    }
    r.useEffect(() => {
        B.current = w;
    }),
        r.useEffect(() => {
            A?.id != null && B.current(3);
        }, [A?.id]);
    let X = ec.intl.string(ec.t.PDTjLN);
    return (
        2 === V && (X = x ? ec.intl.string(ec.t.e5VEcE) : ec.intl.string(ec.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: h,
            "aria-labelledby": C,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !F && z ? (0, i.jsx)(ta, { modal: O.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: tl.Qs,
                    scrollerRef: O,
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
                                        onChange: f,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eJ, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: f,
                                        error: E,
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
                                        error: E,
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
                                    children: (0, i.jsx)(c.Q, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: q,
                                        text: ec.intl.string(ec.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tl.mG,
                                children: [
                                    (0, i.jsx)(o.$, {
                                        variant: "secondary",
                                        text: ec.intl.string(ec.t["ETE/oC"]),
                                        onClick: y,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: tl.x6,
                                        children: (0, i.jsx)(o.$, {
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
    let { guildId: t, guildScheduledEventId: l, transitionState: s, onClose: d } = e;
    (0, a.bG)([b.A], () => b.A.getGuild(t));
    let u = (0, a.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(l), [l]),
        c = (0, a.bG)([C.Ay], () => C.Ay.getDefaultChannel(t), [t]),
        o = (0, M.UZ)(u, c),
        [m, v] = r.useState(o),
        [E] = r.useState((0, M.lc)(u)),
        [f, j] = r.useState(null),
        [y, { loading: A, error: N }] = (0, S.A)(async () => {
            var e;
            let n, i;
            if (null != f) return;
            if (E && null != l) return await G.default.saveEvent(l, m, t), d();
            let r = await G.default.createGuildEvent(m, t);
            return (
                (e = r.body),
                (n = (0, _.K7)(e)),
                null != (i = e.channel_id ?? c?.id) &&
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
                    if (null == n || n?.startDate == null) return ec.intl.string(ec.t.M73YyN);
                    let { startDate: i, endDate: r } = n;
                    return l === eS.Ps.EXTERNAL && null == r
                        ? ec.intl.string(ec.t["H16p/w"])
                        : !t && i.isBefore(F()())
                          ? ec.intl.string(ec.t.AXR5Ss)
                          : null != r && null != i && r.isBefore(i)
                            ? ec.intl.string(ec.t.LpjF4K)
                            : null != r && r.isBefore(F()())
                              ? ec.intl.string(ec.t.ViDcm2)
                              : void 0;
                })(m, E),
                topic: (function (e) {
                    let { name: t } = e;
                    return null == t || "" === t.trim() ? "Topic must be specified." : void 0;
                })(m),
            }),
            [m, E],
        );
    return (0, i.jsx)(td, {
        guildId: t,
        guildEvent: m,
        guildEventId: l,
        isEdit: E,
        formErrors: p,
        transitionState: s,
        loading: A,
        error: N,
        onChange: function (e) {
            if (null != e.entityType) {
                let [n] = D(t, (0, P.dy)(e.entityType));
                (e.channelId = n?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && m.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: function () {
            null != m.recurrenceRule && E && (0, V.DS)(u, m)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await n.e("4823").then(n.bind(n, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: ec.intl.string(ec.t.BW1Qoh),
                              subtitle: ec.intl.string(ec.t.aNCYas),
                              confirmText: ec.intl.string(ec.t.e5VEcE),
                              cancelText: ec.intl.string(ec.t.oEAioF),
                              onConfirm: y,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-md/normal",
                                  children: ec.intl.format(ec.t.RWBa5X, {}),
                              }),
                          });
                  })
                : y();
        },
        onClose: d,
        createdEvent: f,
    });
}

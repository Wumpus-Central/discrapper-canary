l.d(t, { default: () => td });
var n,
    i = l(627968),
    r = l(64700),
    s = l(735438),
    a = l(17928),
    d = l(935462),
    u = l(430690),
    c = l(123292),
    o = l(821609),
    x = l(192308),
    g = l(834730),
    h = l(376728),
    m = l(775602),
    v = l(21161),
    E = l(503698),
    j = l.n(E),
    f = l(460890),
    A = l(939249),
    N = l(252316);
function y(e) {
    let { steps: t, stepIndex: l, onClick: n } = e,
        { i18n: r } = (0, f.G9)();
    return (0, i.jsx)("div", {
        className: N.kL,
        role: "tablist",
        children: t.map((e, s) => {
            let a = l === s;
            return (0, i.jsxs)(
                A.D,
                {
                    onClick: () => n(s),
                    className: N._h,
                    role: "tab",
                    "aria-selected": a,
                    "aria-label": `${r.STEP_INDICATOR(s + 1, t.length)}: ${e.label}`,
                    "aria-current": a ? "step" : void 0,
                    "aria-disabled": !0 === e.disabled || void 0,
                    children: [
                        (0, i.jsx)("div", { className: j()(N.hr, { [N.YD]: a }) }),
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
var p = l(915089),
    C = l(808728),
    b = l(71393),
    I = l(735547),
    S = l(422653),
    T = l(698441),
    G = l(496092),
    _ = l(485394);
l(321073);
var L = l(931991);
l(446600);
var R = l(576705);
function k(e, t) {
    let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [C.Ay];
    if (null == t) return [];
    let n = l.getChannels(e)[C.vM],
        i = [];
    for (let { channel: e } of n) {
        let { canCreateGuildEvent: l, canManageAllEvents: n } = (0, L.ie)(e),
            r = l || n;
        e.type === t && (e.isGuildVoice() && r ? i.push(e) : e.isGuildStageVoice() && r && i.push(e));
    }
    return i;
}
function D(e, t) {
    return (0, a.yK)([C.Ay], () => k(e, t, [C.Ay]), [e, t]);
}
l(219935);
var P = l(794782),
    M = l(9448),
    V = l(647090),
    U = l(70456),
    z = l(989349),
    O = l.n(z),
    F = l(983851),
    w = l(146151),
    B = l(451394),
    H = l(808107),
    X = l(783878),
    q = l(292666),
    Y = l(116085),
    Q = l(773812),
    W = l(331322),
    K = l(534514),
    $ = l(47167),
    Z = l(349288),
    J = l(683071),
    ee = l(885574),
    et = l(738188),
    el = l(404778),
    en = l(975807),
    ei = l(139716),
    er = l(847599),
    es = l(36149),
    ea = l(975571),
    ed = l(418208),
    eu = l(652215),
    ec = l(375708);
function eo() {
    return (0, es.yM)()
        ? ec.intl.format(ec.t.iWGjcg, {
              hook: (e) =>
                  (0, i.jsx)(Z.Anchor, {
                      onClick: (e) => {
                          e.preventDefault(),
                              e.stopPropagation(),
                              (0, en.A)(ea.A.getArticleURL(eu.MVz.TIGGER_PAWTECT_LEARN_MORE));
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
        l = (0, es.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(J.w, { type: l ? "info" : "warning", children: (0, i.jsx)(eo, {}) }),
    });
}
function eg(e) {
    let { className: t } = e,
        l = (0, es.yM)();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsxs)(W.B, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [
                l
                    ? (0, i.jsx)(ee.m, { size: "refresh_sm", color: "var(--text-default)" })
                    : (0, i.jsx)(et.i, { size: "refresh_sm", color: "var(--text-default)" }),
                (0, i.jsx)(g.E, { color: "text-default", variant: "text-sm/medium", children: (0, i.jsx)(eo, {}) }),
            ],
        }),
    });
}
function eh(e) {
    let { className: t, noBackground: l, divider: n } = e;
    if (!(0, ed.PI)()) return null;
    let r = Array.isArray(n) ? n : null != n ? [n] : [];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.includes(0) && (0, i.jsx)(el.c, { gap: 16 }),
            (0, i.jsx)("div", { className: t, children: l ? (0, i.jsx)(eg, {}) : (0, i.jsx)(ex, {}) }),
            r?.includes(1) && (0, i.jsx)(el.c, { gap: 16 }),
        ],
    });
}
var em = l(734057),
    ev = l(994500),
    eE = l(287809),
    ej = l(770666),
    ef = l(232246),
    eA = l(530209),
    eN = l(825484),
    ey = l(450510),
    ep = l(421838),
    eC = l(419836);
let eb = () =>
    (0, i.jsxs)(i.Fragment, {
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
function eI(e) {
    let { onClick: t } = e;
    return (0, a.bG)([ey.HP], () => !ey.HP.hasHotspot(ey._2.STAGE_CHANNEL_UPSELL))
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
                      children: (0, i.jsxs)(eN.e, {
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
                                      onClick: () => {
                                          ep.sF(ey._2.STAGE_CHANNEL_UPSELL);
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
let eG = (e) => {
        let { guildId: t, channelType: l, channel: n, onSelectChannel: r, disabled: s, entityType: a } = e,
            d = l === eu.rbe.GUILD_STAGE_VOICE,
            u = (0, eA.D)(n, a),
            c = D(t, l);
        return (0, i.jsx)(X.Z, {
            selectionMode: "single",
            label: d ? ec.intl.string(ec.t.S7GjDz) : ec.intl.string(ec.t["7RYWCP"]),
            required: !0,
            helperText: u ? void 0 : ec.intl.string(ec.t.F3bDaX),
            value: n?.id,
            options: c.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, $.m1)(e, eE.default, ev.A, !0),
                leading: ((e, t) => {
                    let l = em.A.getChannel(e);
                    if (null == l) return null;
                    let n = l.type === eu.rbe.GUILD_STAGE_VOICE,
                        r = (0, eA.D)(l, t),
                        s = r ? F.H : w.t,
                        a = r ? B.q : H.D;
                    return (0, i.jsx)(n ? a : s, { color: "currentColor", size: "md", className: eT.sr });
                })(e.id, a),
            })),
            onSelectionChange: (e) => {
                r(c.find((t) => t.id === e) ?? void 0);
            },
            disabled: s,
        });
    },
    e_ = (e, t) => (l) => {
        let n = { entityType: l, scheduledEndTime: void 0 };
        l === eS.Ps.EXTERNAL &&
            (n.scheduledEndTime = (O()(t.scheduledStartTime) ?? O()()).add(2, "hour").toISOString()),
            e(n);
    };
function eL(e) {
    let { guildId: t, guildEvent: l, onChange: n, isFocusReady: s } = e,
        { entityType: d, channelId: u } = l,
        c = (0, a.bG)([em.A], () => em.A.getChannel(u), [u]),
        o = r.useRef(null),
        x = r.useRef(void 0);
    r.useEffect(() => {
        let e = s && !x.current;
        (x.current = s), e && d === eS.Ps.EXTERNAL && o.current?.focus();
    }, [s, d]);
    let g = (e) => {
            n({ channelId: e?.id ?? null });
        },
        h = (0, M.k5)(l),
        m = (0, M.dy)(d),
        v = (0, T.Fd)(l);
    return null == d || d === eS.Ps.NONE
        ? null
        : d === eS.Ps.EXTERNAL
          ? (0, i.jsx)(q.k, {
                label: ec.intl.string(ec.t.yx785A),
                required: !0,
                onChange: (e) => {
                    n({ entityMetadata: { location: e } });
                },
                placeholder: ec.intl.string(ec.t.mkCMia),
                maxLength: eS.vj,
                value: h ?? "",
                inputRef: o,
            })
          : null == m
            ? null
            : (0, i.jsx)(eG, {
                  guildId: t,
                  channelType: m,
                  onSelectChannel: g,
                  channel: c,
                  entityType: d,
                  disabled: v,
              });
}
function eR(e) {
    let { guildId: t, guildEvent: l, onChange: n } = e,
        s = (0, a.bG)([b.A], () => b.A.getGuild(t), [t]),
        d = (0, ej.A)(t, void 0),
        u = (0, ej.A)(t, eu.rbe.GUILD_VOICE),
        c = (0, ej.A)(t, eu.rbe.GUILD_STAGE_VOICE),
        o = D(t, eu.rbe.GUILD_VOICE),
        x = (0, ef.A)(s),
        g = s?.features.has(eu.GuildFeatures.COMMUNITY),
        h = (0, T.Fd)(l),
        m = e_(n, l),
        v = r.useMemo(() => {
            let e = !u || 0 === o.length,
                t = u ? ec.intl.string(ec.t["DkY+cO"]) : ec.intl.string(ec.t.HeF1kV),
                l = [
                    {
                        name: ec.intl.string(ec.t.BVZqJl),
                        value: eS.Ps.VOICE,
                        desc: e ? t : ec.intl.string(ec.t["EV//4f"]),
                        leadingIcon: F.H,
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
                    ...l,
                ];
            }
            return l;
        }, [d, u, c, g, o.length, x.length]);
    return (0, i.jsx)(Q.z, {
        value: v.find((e) => e.value === l.entityType)?.value ?? null,
        options: v,
        onChange: m,
        disabled: h,
        helperText: h ? ec.intl.string(ec.t.yutP5U) : void 0,
    });
}
function ek(e) {
    let { guildId: t, guildEvent: n, validationErrorMessage: r, onChange: s, isSlideReady: d = !1 } = e,
        { entityType: u } = n,
        c = (0, a.bG)([b.A], () => b.A.getGuild(t), [t]),
        o = (0, ef.A)(c),
        h = (0, a.bG)([R.A], () => R.A.can(eu.xBc.MANAGE_CHANNELS, c)),
        m = c?.features.has(eu.GuildFeatures.COMMUNITY),
        v = e_(s, n),
        E = m && u !== eS.Ps.EXTERNAL && 0 === o.length && h && null != u;
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
            (0, i.jsx)(eR, { guildId: t, guildEvent: n, onChange: s }),
            (0, i.jsx)(eL, { guildId: t, guildEvent: n, isFocusReady: d, onChange: s }),
            E
                ? (0, i.jsx)(eI, {
                      onClick: () => {
                          v(eS.Ps.STAGE_INSTANCE),
                              (0, x.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      l.e("8516"),
                                      l.e("11585"),
                                      l.e("3589"),
                                      l.e("89916"),
                                      l.e("60773"),
                                      l.e("8018"),
                                      l.e("20379"),
                                      l.e("19193"),
                                      l.e("7775"),
                                      l.e("2329"),
                                      l.e("58608"),
                                      l.e("70195"),
                                      l.e("37038"),
                                  ]).then(l.bind(l, 946430));
                                  return (l) =>
                                      (0, i.jsx)(e, { ...l, channelType: eu.rbe.GUILD_STAGE_VOICE, guildId: t });
                              });
                      },
                  })
                : null,
            eS.Tn.has(n.entityType) && (0, i.jsx)(eh, {}),
        ],
    });
}
var eD = l(713654),
    eP = l(857071),
    eM = l(691012),
    eV = l(779519),
    eU = l(439437);
function ez(e) {
    var t;
    let { guildId: l, guildEvent: n, guildEventId: s, error: d, isSlideReady: u } = e,
        c = r.useMemo(() => (0, P.hQ)(n, l), [n, l]),
        { channel_id: o, name: x, image: h, description: m } = c,
        v = (0, a.bG)([em.A], () => em.A.getChannel(o), [o]),
        E = (0, a.bG)([b.A], () => b.A.getGuild(l), [l]),
        j = (0, M.oF)(c),
        f = (0, a.bG)(
            [eE.default],
            () => (null != n.creatorId ? eE.default.getUser(n.creatorId) : eE.default.getCurrentUser()),
            [n.creatorId],
        ),
        A = (0, a.bG)([eP.A], () => eP.A.isLurking(l), [l]),
        N = (0, $.Ay)(v),
        y = r.useRef(null);
    r.useEffect(() => {
        u && null != y.current && ((y.current.tabIndex = -1), y.current.focus());
    }, [u]);
    let p = (0, eD.gU)(v, E);
    return (0, i.jsxs)("div", {
        className: eU.Qs,
        children: [
            (0, i.jsx)(eV.A, {
                className: eU.B0,
                guild: E,
                channel: v,
                location: j ?? void 0,
                creator: f,
                name: x,
                description: m,
                imageSource:
                    ((t = (0, P.hQ)(n, l, s)),
                    null == h && null == t.image ? null : null != h && /^data:/.test(h) ? h : (0, eM.A)(t)),
                isActive: !1,
                isUserLurking: A,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: c,
                eventPreview: c,
                hideAgeVerificationNotice: !0,
            }),
            (0, i.jsxs)("div", {
                className: eU.FS,
                children: [
                    (0, i.jsx)(K.D, { ref: y, variant: "heading-xl/semibold", children: ec.intl.string(ec.t.yBsFE3) }),
                    (0, i.jsx)(g.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: eU.m_,
                        children:
                            null != location
                                ? ec.intl.string(ec.t.KDPFi9)
                                : ec.intl.format(ec.t.f55NX0, {
                                      channelName: N ?? "",
                                      channelHook: () =>
                                          (0, i.jsxs)("div", {
                                              className: eU.HA,
                                              children: [
                                                  null != p
                                                      ? (0, i.jsx)(p, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: eU.Kk,
                                                        })
                                                      : (0, i.jsx)(Y.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: eU.NR,
                                                        }),
                                                  N ?? j,
                                              ],
                                          }),
                                  }),
                    }),
                    null != d &&
                        (0, i.jsx)(g.E, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: eU.m_,
                            children: d.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
var eO = l(260598),
    eF = l(452027),
    ew = l(664007),
    eB = l(405810),
    eH = l(366098),
    eX = l(918192),
    eq = l(979091),
    eY = l(339984),
    eQ = l(910264);
function eW(e) {
    let {
            guildEvent: t,
            guildEventId: n,
            guildId: s,
            error: a,
            validationErrorMessage: d,
            onChange: u,
            canSetFocus: c = !1,
        } = e,
        {
            entityType: g,
            channelId: h,
            description: m,
            name: v,
            image: E,
            scheduledEndTime: j,
            scheduledStartTime: f,
            recurrenceRule: A,
        } = t,
        N = (0, eH.D3)(h),
        y = (0, eH.Xk)(h),
        p = null != t && (0, T.Fd)(t),
        C = r.useMemo(() => {
            let e = (0, V.N5)(t);
            return null != e ? e : { startDate: O()(f) };
        }, [t, f]),
        [b, I] = r.useState(() => (0, V.z7)(O()(f), A)),
        S = r.useRef(null);
    r.useEffect(() => {
        c && S.current?.focus();
    }, [c]);
    let G = (e) => {
            u({ image: e });
        },
        _ = (e, t) => {
            null == e || void 0 === t
                ? G(null)
                : (0, x.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([
                          l.e("98398"),
                          l.e("25812"),
                          l.e("8308"),
                          l.e("43662"),
                          l.e("63232"),
                          l.e("43437"),
                          l.e("58164"),
                          l.e("71470"),
                          l.e("37490"),
                          l.e("50342"),
                          l.e("63726"),
                          l.e("93513"),
                          l.e("79149"),
                          l.e("7406"),
                          l.e("55524"),
                          l.e("90017"),
                          l.e("89908"),
                          l.e("74571"),
                          l.e("50348"),
                      ]).then(l.bind(l, 142630));
                      return (l) =>
                          (0, i.jsx)(n, {
                              imageUri: e,
                              file: t,
                              onCrop: (e) => {
                                  let { imageUri: t } = e;
                                  return G(t);
                              },
                              uploadType: eY.HL.SCHEDULED_EVENT_IMAGE,
                              ...l,
                          });
                  });
        },
        L = a?.getFirstFieldErrorMessage("name"),
        R = a?.getFirstFieldErrorMessage("description"),
        k = null == L && null == R ? a?.getAnyErrorMessage() : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eQ.GU,
                children: null != h && !p && (N > 0 || y > 0) && (0, i.jsx)(eX.Bw, { channelId: h }),
            }),
            (0, i.jsx)("div", {
                className: eQ.Zd,
                children: (0, i.jsxs)(W.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(q.k, {
                            label: ec.intl.string(ec.t["0HbEQ6"]),
                            required: !0,
                            error: L ?? k,
                            onChange: (e) => {
                                u({ name: e });
                            },
                            placeholder: ec.intl.string(ec.t["6/yars"]),
                            maxLength: eS.t_,
                            value: v,
                            autoComplete: "off",
                            inputRef: S,
                        }),
                        (0, i.jsx)(eq.A, {
                            className: eQ.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: l } = e,
                                    n = { scheduledStartTime: t?.toISOString(), scheduledEndTime: l?.toISOString() };
                                null != t &&
                                    null != j &&
                                    l?.isBefore(t) &&
                                    (n.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != b && (n.recurrenceRule = (0, V.nG)(b, t)),
                                    u(n);
                            },
                            onRecurrenceChange: (e) => {
                                let t = C.startDate;
                                null == t || (u({ recurrenceRule: (0, V.nG)(e, t) }), I(e));
                            },
                            schedule: C,
                            recurrenceRule: A,
                            showEndDate: g === eS.Ps.EXTERNAL,
                            requireEndDate: g === eS.Ps.EXTERNAL,
                            disableStartDateTime: p,
                            guildId: s,
                        }),
                        (0, i.jsx)(eK, { error: d }),
                        (0, i.jsx)(eO.f, {
                            label: ec.intl.string(ec.t["+gRCC7"]),
                            error: R,
                            placeholder: ec.intl.string(ec.t["kWO/E8"]),
                            value: m,
                            onChange: (e) => {
                                u({ description: e });
                            },
                            maxLength: eS.IJ,
                            autosize: !0,
                        }),
                        (0, i.jsx)(eF.D, {
                            label: ec.intl.string(ec.t.Ly121e),
                            description: ec.intl.string(ec.t.B9C9be),
                            children:
                                null != E
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(ew.A, {
                                                  className: eQ.km,
                                                  iconWrapperClassName: eQ.WR,
                                                  image: E,
                                                  makeURL: (e) =>
                                                      null == e
                                                          ? null
                                                          : null != s
                                                            ? ((0, eM.A)((0, P.hQ)(t, s, n)) ?? null)
                                                            : void 0,
                                                  onChange: _,
                                                  hint: ec.intl.string(ec.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, i.jsx)(o.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: ec.intl.string(ec.t.gmUvO1),
                                                  onClick: () => G(null),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(eB.A, {
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
function eK(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, i.jsx)(g.E, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: eQ.$e,
              children: t,
          });
}
var e$ = l(339184);
function eZ(e) {
    let { isSlideReady: t, ...l } = e;
    return (0, i.jsxs)("div", {
        className: e$.__invalid_slideContainer,
        children: [
            (0, i.jsx)("div", {
                className: e$.w,
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
            (0, i.jsx)(eW, { ...l, canSetFocus: t }),
        ],
    });
}
var eJ = l(789645),
    e0 = l(81466),
    e1 = l(842241),
    e8 = l(279208),
    e7 = l(747007),
    e9 = l(710358),
    e4 = l(958590),
    e3 = l(174459),
    e2 = l(957565),
    e5 = l(118888);
let { INVITE_OPTIONS_7_DAYS: e6, INVITE_OPTIONS_UNLIMITED: te } = I.Ay;
function tt(e) {
    let { onClose: t, event: l } = e,
        n = l?.guild_id,
        r = (0, a.bG)([C.Ay], () => (null != n ? C.Ay.getDefaultChannel(n)?.id : null), [n]),
        s = (0, a.bG)([b.A], () => b.A.getGuild(n), [n]),
        { channel_id: d, id: u } = l ?? {},
        c = (0, a.bG)([e4.A], () => {
            let e = d ?? r;
            return null == e ? null : e4.A.getInvite(e);
        }, [d, r]);
    if (null == l) return t(), null;
    let o = s?.vanityURLCode ?? c?.code,
        x = null != o ? (0, e1.WU)({ baseCode: o, guildScheduledEventId: u }) : null,
        h = null == x || null == c,
        m = (0, e8.A)(x ?? ""),
        v = c?.maxAge ?? e6.value,
        E = c?.maxUses ?? te.value;
    return (0, i.jsxs)("div", {
        className: e5.kL,
        children: [
            (0, i.jsx)(A.D, {
                onClick: t,
                className: e5.VN,
                "aria-label": ec.intl.string(ec.t.cpT0Cq),
                children: (0, i.jsx)(eJ.P, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsx)(e9.A, {
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
            (0, i.jsx)(K.D, {
                variant: "heading-xl/semibold",
                className: e5.wx,
                children: ec.intl.string(ec.t.UzNv7u),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: e5.rf,
                children: ec.intl.string(ec.t.UetJjH),
            }),
            (0, i.jsxs)("div", {
                className: e5.EZ,
                children: [
                    (0, i.jsx)(e7.I, {
                        value: m,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (h) return;
                            (0, e2.C)(e);
                            let t = (0, M.dy)(l.entity_type);
                            e3.default.track(eu.HAw.COPY_INSTANT_INVITE, {
                                server: l.guild_id,
                                channel: d,
                                channel_type: t,
                                location: eu.PE1.GUILD_EVENTS,
                                code: c.code,
                                guild_scheduled_event_id: l?.id,
                            });
                        },
                    }),
                    s?.vanityURLCode == null &&
                        (0, i.jsx)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: e5.x6,
                            children: (0, I.Be)(v, E),
                        }),
                ],
            }),
        ],
    });
}
var tl = l(486536);
let { INVITE_OPTIONS_7_DAYS: tn, INVITE_OPTIONS_UNLIMITED: ti } = I.Ay;
var tr =
    (((n = tr || {})[(n.ENTITY = 0)] = "ENTITY"),
    (n[(n.SETTINGS = 1)] = "SETTINGS"),
    (n[(n.PREVIEW = 2)] = "PREVIEW"),
    (n[(n.SUCCESS = 3)] = "SUCCESS"),
    n);
function ts(e) {
    let { modal: t } = e,
        { createMultipleConfetti: l } = r.useContext(v.x);
    return (
        r.useEffect(() => {
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
function ta(e) {
    let {
            guildId: t,
            guildEvent: l,
            guildEventId: n,
            isEdit: x,
            formErrors: g,
            transitionState: h,
            loading: v,
            error: E,
            onChange: j,
            onSave: f,
            onClose: A,
            createdEvent: N,
        } = e,
        C = (0, p.GV)(),
        b = r.useRef(l),
        I = !(0, s.isEqual)(b.current, l),
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
        G = Object.keys(tr).length,
        _ = (0, T.Fd)(l),
        L = (e) => Math.max(0, Math.min(e, G - 1)),
        [R, k] = r.useState(+!!_),
        [D, P] = r.useState(!1),
        M = r.useMemo(
            () =>
                S.slice(0, R + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [S, R],
        ),
        V = R >= S.length ? 3 : S[L(R)].slideId,
        z = 3 === V;
    (0, U.N)((e) => e.onUpdateCanCloseModal)(z);
    let O = (0, a.bG)([m.A], () => m.A.useReducedMotion),
        F = r.useRef(null),
        w = (e) => {
            P(!1), k(L(e));
        },
        B = r.useRef(w);
    r.useEffect(() => {
        B.current = w;
    }),
        r.useEffect(() => {
            N?.id != null && B.current(3);
        }, [N?.id]);
    let H = () => {
            M && (2 === V ? f() : z ? A() : w(R + 1));
        },
        X = () => {
            w(R - 1);
        },
        q = ec.intl.string(ec.t.PDTjLN);
    return (
        2 === V && (q = x ? ec.intl.string(ec.t.e5VEcE) : ec.intl.string(ec.t["60lJ0C"])),
        (0, i.jsxs)(d.EO, {
            transitionState: h,
            "aria-labelledby": C,
            size: d.rI.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !O && z ? (0, i.jsx)(ts, { modal: F.current }) : null,
                (0, i.jsxs)(d.$m, {
                    className: tl.Qs,
                    scrollerRef: F,
                    "data-migration-pending": !0,
                    children: [
                        !z &&
                            (0, i.jsx)(y, {
                                steps: S.map((e, t) => ({ label: e.label, disabled: t > R && !M })),
                                stepIndex: R,
                                onClick: (e) => {
                                    e < R ? X() : e > R && H();
                                },
                            }),
                        (0, i.jsxs)(u.t, {
                            activeSlide: V,
                            width: 440,
                            onSlideReady: (e) => {
                                P(e === V);
                            },
                            children: [
                                (0, i.jsx)(u.q, {
                                    id: 0,
                                    children: (0, i.jsx)(ek, {
                                        guildId: t,
                                        guildEvent: l,
                                        validationErrorMessage: g.entity,
                                        isSlideReady: D,
                                        onChange: j,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 1,
                                    children: (0, i.jsx)(eZ, {
                                        guildEvent: l,
                                        guildEventId: n,
                                        guildId: t,
                                        onChange: j,
                                        error: E,
                                        validationErrorMessage: g.schedule,
                                        isSlideReady: D,
                                    }),
                                }),
                                (0, i.jsx)(u.q, {
                                    id: 2,
                                    children: (0, i.jsx)(ez, {
                                        guildId: t,
                                        guildEvent: l,
                                        guildEventId: n,
                                        error: E,
                                        isSlideReady: D,
                                    }),
                                }),
                                (0, i.jsx)(u.q, { id: 3, children: (0, i.jsx)(tt, { onClose: A, event: N }) }),
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
                                        onClick: X,
                                        text: ec.intl.string(ec.t["13/7kX"]),
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tl.mG,
                                children: [
                                    (0, i.jsx)(o.$, {
                                        variant: "secondary",
                                        text: ec.intl.string(ec.t["ETE/oC"]),
                                        onClick: A,
                                    }),
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: tl.x6,
                                        children: (0, i.jsx)(o.$, {
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
function td(e) {
    let { guildId: t, guildScheduledEventId: n, transitionState: s, onClose: d } = e;
    (0, a.bG)([b.A], () => b.A.getGuild(t));
    let u = (0, a.bG)([T.Ay], () => T.Ay.getGuildScheduledEvent(n), [n]),
        c = (0, a.bG)([C.Ay], () => C.Ay.getDefaultChannel(t), [t]),
        o = (0, P.UZ)(u, c),
        [m, v] = r.useState(o),
        [E] = r.useState((0, P.lc)(u)),
        [j, f] = r.useState(null),
        [A, { loading: N, error: y }] = (0, S.A)(async () => {
            var e;
            let l, i;
            if (null != j) return;
            if (E && null != n) return await G.A.saveEvent(n, m, t), d();
            let r = await G.A.createGuildEvent(m, t);
            return (
                (e = r.body),
                (l = (0, _.K7)(e)),
                null != (i = e.channel_id ?? c?.id) &&
                    h.Ay.createInvite(i, { max_age: tn.value, max_uses: ti.value }, eu.PE1.GUILD_EVENTS),
                l ? f(e) : d(),
                r
            );
        }),
        p = r.useMemo(
            () => ({
                entity: (function (e) {
                    let { entityType: t, channelId: l } = e,
                        n = (0, M.k5)(e);
                    return null == t || t === eS.Ps.NONE
                        ? "An event type must be specified."
                        : (null == n || "" === n.trim()) && null == l
                          ? "Either a location or channel must be specified."
                          : void 0;
                })(m),
                schedule: (function (e, t) {
                    let l = (0, V.N5)(e),
                        { entityType: n } = e;
                    if (null == l || l?.startDate == null) return ec.intl.string(ec.t.M73YyN);
                    let { startDate: i, endDate: r } = l;
                    return n === eS.Ps.EXTERNAL && null == r
                        ? ec.intl.string(ec.t["H16p/w"])
                        : !t && i.isBefore(O()())
                          ? ec.intl.string(ec.t.AXR5Ss)
                          : null != r && null != i && r.isBefore(i)
                            ? ec.intl.string(ec.t.LpjF4K)
                            : null != r && r.isBefore(O()())
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
    return (0, i.jsx)(ta, {
        guildId: t,
        guildEvent: m,
        guildEventId: n,
        isEdit: E,
        formErrors: p,
        transitionState: s,
        loading: N,
        error: y,
        onChange: (e) => {
            if (null != e.entityType) {
                let [l] = k(t, (0, M.dy)(e.entityType));
                (e.channelId = l?.id ?? null),
                    e.entityType !== eS.Ps.EXTERNAL && m.entityType === eS.Ps.EXTERNAL && (e.entityMetadata = null);
            }
            v((t) => ({ ...t, ...e }));
        },
        onSave: () => {
            null != m.recurrenceRule && E && (0, V.DS)(u, m)
                ? (0, x.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await l.e("4823").then(l.bind(l, 158954));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              title: ec.intl.string(ec.t.BW1Qoh),
                              subtitle: ec.intl.string(ec.t.aNCYas),
                              confirmText: ec.intl.string(ec.t.e5VEcE),
                              cancelText: ec.intl.string(ec.t.oEAioF),
                              onConfirm: A,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-md/normal",
                                  children: ec.intl.format(ec.t.RWBa5X, {}),
                              }),
                          });
                  })
                : A();
        },
        onClose: d,
        createdEvent: j,
    });
}

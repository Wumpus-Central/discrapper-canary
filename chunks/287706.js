n.r(t), n.d(t, { default: () => sA });
var s,
    a,
    l,
    i = n(477900),
    r = n(582128),
    d = n(503698),
    c = n.n(d),
    o = n(292442),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(756377),
    A = n(284009),
    f = n.n(A),
    x = n(562708),
    p = n(837381),
    j = n(17928),
    E = n(866665),
    N = n(689175),
    S = n(695366),
    y = n(661531),
    C = n(297264),
    R = n(825484),
    I = n(408278),
    v = n(789645),
    _ = n(440971),
    M = n(22231),
    D = n(99677),
    L = n(442433),
    O = n(148494),
    b = n(928039),
    T = n(139286),
    k = n(259678),
    G = n(939249),
    F = n(320448),
    U = n(778712),
    w = n(97808),
    H = n(812993),
    P = n(834730),
    K = n(406810),
    B = n(397244),
    z = n(714114),
    X = n(394871),
    Y = n(571694),
    J = n(47167),
    V = n(713654),
    Z = n(598104),
    $ = n(548118),
    q = n(616356),
    W = n(734057),
    Q = n(71393),
    ee = n(290863),
    et = n(568548),
    en = n(287809),
    es = n(650583),
    ea = n(375708),
    el = n(842971);
let ei = { top: 8, bottom: 8, left: -4, right: -4 };
function er(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, p.rm)(d);
    return (0, i.jsx)(k.vN, {
        offset: ei,
        children: (0, i.jsxs)("div", {
            className: c()(el.ZO, { [el.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === es.dh.ENTER || e.key === es.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === es.dh.ARROW_RIGHT && a) || (e.key === es.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(G.D, {
                    className: el.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ed, { channel: t }),
                }),
                (0, i.jsx)(F._, { className: el.ai, size: "xxs" }),
                (0, i.jsx)(ec, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, j.bG)([Q.A], () => Q.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)($.Ay, { className: el.Kk, guild: n, size: $.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(Z.A, { channel: t, size: U._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(w.eu, { size: U._3.SIZE_32, src: (0, Y.Y)(t), "aria-hidden": !0 });
}
function ec(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, j.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        l = (0, J.Ay)(t, !1),
        r = (0, j.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, V.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: el.yP,
        children: [
            (0, i.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: el.lz,
                children: (0, i.jsxs)(G.D, {
                    className: el.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, i.jsx)(d, { className: el.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: el.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: el.qS,
                                  children: (0, i.jsx)(H.hV, {
                                      count: s,
                                      color: r
                                          ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                          : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(P.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, i.jsx)(eo, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eo(e) {
    let { channel: t, onClick: n } = e,
        s = (0, j.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        a = (0, j.bG)([W.A], () => W.A.getChannel(t.parent_id)),
        l = (0, J.Ay)(a);
    if (t.isMultiUserDM())
        return (0, i.jsx)(i.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, i.jsx)(eu, { channel: t });
    let r = [s?.name, null != a ? l : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, i.jsx)(G.D, { className: c()(el.je, el.J5), onClick: n, children: r }) : null;
}
function eu(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, j.cf)([en.default, ee.A, q.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, z.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eh(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(el.h5, { [el.z3]: "error" === t, [el.kX]: "success" === t, [el.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(S.E, { size: "xs" }) : (0, i.jsx)(K.O, { size: "xs" }),
            (0, i.jsx)(P.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var eg = n(642213),
    em = n(636922),
    eA = n(885386),
    ef = n(576705),
    ex = n(927813),
    ep = n(164684),
    ej = n(704456),
    eE = n(85109);
n(321073);
var eN = n(403362),
    eS = n(216623);
function ey(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return eE.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return eE.A.getMessageReminders();
        default:
            return eE.A.getSavedMessages();
    }
}
function eC(e) {
    return ey(e).map((e) => e.saveData);
}
var eR = n(403581),
    eI = n(862482),
    ev = n(192308),
    e_ = n(404374),
    eM = n(725807),
    eD = n(428262),
    eL = n(8506),
    eO = n(652215),
    eb = n(202541),
    eT = n(584906),
    ek = n(936037);
function eG(e) {
    let { type: t } = e;
    return (0, eL.lA)("ForLaterEmptyState")
        ? (0, i.jsx)("div", {
              className: eT.do,
              children: (0, i.jsxs)("div", {
                  className: eT.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eT.Sl, alt: "" }),
                      (0, i.jsx)(C.D, {
                          className: eT.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(t === m.Yf.REMINDER ? ea.t.AE4yja : ea.t.erEf2g),
                      }),
                      (0, i.jsx)(P.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: ea.intl.string(t === m.Yf.REMINDER ? ea.t.fRSRc0 : ea.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: eT.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: eT.U6,
                      children: [
                          (0, i.jsx)("img", { src: ek, className: eT.Sl, alt: "" }),
                          (0, i.jsx)(C.D, {
                              className: eT.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: ea.intl.string(ea.t.w4DRbZ),
                          }),
                          (0, i.jsx)(P.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(eF, {}),
              ],
          });
}
function eF() {
    let e = (0, eD.Dd)(eb.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, ev.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = ea.intl.format(ea.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: eT.Zj,
        children: [
            (0, i.jsx)(eR.t, { size: "md", color: e_.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(P.E, { variant: "text-xs/medium", color: "text-strong", className: eT.tD, children: s }),
            (0, i.jsx)(eM.A, {
                className: eT.Oy,
                size: eI.lO.TINY,
                shinyButtonClassName: eT.Oy,
                subscriptionTier: eb.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eO.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
function eU(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, ej.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ej.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eh, { type: a ? "error" : "normal", text: s });
}
var ew = n(318061),
    eH = n(824385);
let eP = "Bookmarks",
    eK = "Reminders";
function eB(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = r.useState(() => eC(e)),
                s = r.useRef(eE.A.getIsStale());
            return (
                r.useEffect(() => {
                    let t = eE.A.getLastChanged();
                    function a() {
                        let a = eE.A.getLastChanged();
                        if (t !== a) {
                            if (((t = a), s.current && !eE.A.getIsStale())) {
                                (s.current = !1), n(eC(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(ey(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        eE.A.addChangeListener(a),
                        () => {
                            eE.A.removeChangeListener(a);
                        }
                    );
                }, [e]),
                r.useEffect(() => {
                    (0, eS.AX)();
                }, []),
                (0, j.yK)([eE.A], () => t.map((e) => eE.A.getSavedMessage(e.channelId, e.messageId)).filter(eN.Vq))
            );
        })(n);
    (0, T.A)(
        {
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: s.length, overdue_count: eE.A.getOverdueMessageReminderCount() },
        },
        {},
        [s.length],
    );
    let a = r.useRef(null),
        l = (0, b.A)("for-later", a);
    (0, eg.xN)(a), (0, eg.yW)(n === m.Yf.BOOKMARK ? eP : eK);
    let [d, c] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => c(new Date()), ex.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(eG, { type: n })
        : (0, i.jsx)(p.hD, {
              navigator: l,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: n, ...l } = e;
                      return (0, i.jsx)(N.Ch, {
                          ref: (e) => {
                              (a.current = e), (n.current = e?.getScrollerNode() ?? null);
                          },
                          className: eH.XG,
                          ...l,
                          children: s.map((e) =>
                              (0, i.jsx)(
                                  ez,
                                  { savedMessage: e, closePopout: t, throttledNow: d },
                                  e.saveData.messageId,
                              ),
                          ),
                      });
                  },
              }),
          });
}
function ez(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, ej.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, ej.le)(t, a),
                    e.shiftKey || n(),
                    O.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eK : eP);
            },
            [n, t, a],
        ),
        d = (0, j.bG)(
            [ef.A],
            () => !!(a?.type === eO.rbe.UNKNOWN || a?.isPrivate()) || ef.A.can(eO.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eH.aP,
              children: [
                  (0, i.jsx)(er, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(R.e, {
                          size: "sm",
                          className: el.GC,
                          children: (0, i.jsx)(eX, { savedMessage: t, jumpToMessage: l, throttledNow: s }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eU, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      em.A,
                      {
                          message: t.message,
                          channel: a,
                          className: eH.YD,
                          compact: eA.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(eH.aP, ew.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: ew.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: ew.Bx,
                              children: (0, i.jsx)(S.E, { size: "xxs", color: y.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(R.e, {
                      size: "sm",
                      className: el.GC,
                      children: (0, i.jsx)(E.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(I.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: v.P,
                              onClick: () => (0, ep.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eX(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: a } = e;
    f()(null != t.message, "Saved message must be cached for For Later action buttons");
    let l = ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
        r = null != t.saveData.dueAt && a > t.saveData.dueAt,
        d = ea.intl.string(r ? ea.t.GtBCnz : ea.t.vrbqs1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, i.jsx)(E.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? _.R : M.R,
                          onClick: (e) =>
                              (0, L.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: ea.intl.string(r ? ea.t.GtBCnz : ea.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, i.jsx)(E.m, {
                text: ea.intl.string(ea.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                    size: "sm",
                    icon: D.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, i.jsx)(E.m, {
                text: l,
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": l,
                    size: "sm",
                    icon: v.P,
                    onClick: () => (0, ep.x)(t.saveData),
                }),
            }),
        ],
    });
}
var eY = n(702841),
    eJ = n(912592),
    eV = n(890856),
    eZ = n(761508),
    e$ = n(910425),
    eq = n(214947),
    eW = n(711950),
    eQ = n(322387),
    e0 = n(912309),
    e1 = n(174459),
    e2 = n(109261);
function e3(e) {
    let { closePopout: t } = e,
        n = (0, e0.kX)();
    return (0, i.jsx)(E.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, i.jsxs)(G.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: e2.b,
            onClick: () => {
                e1.default.track(eO.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: eQ.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eW.A.transitionToSection(eO.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eq.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(H.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var e7 = n(980707),
    e5 = n(477782),
    e6 = n(922016),
    e8 = n(783977),
    e4 = n(378939),
    e9 = n(309010),
    te = n(409686);
function tt(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([W.A, e9.Ay], () => W.A.getChannel(e9.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, j.cf)([te.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = te.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(e7.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(e5.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    e4.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(e5.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    e4.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(e5.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          e4.A.setGuildFilter({
                              guildFilter: r === eO.KE7.THIS_SERVER ? eO.KE7.ALL_SERVERS : eO.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eO.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tn() {
    let e = r.useRef(null);
    return (0, i.jsx)(e6.Y, {
        targetElementRef: e,
        align: "right",
        animation: e6.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tt, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(E.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(I.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: e8.R,
                    onClick: n,
                }),
            });
        },
    });
}
var ts = n(481613),
    ta = n.n(ts),
    tl = n(621466),
    ti = n(289873),
    tr = n(821609),
    td = n(228366),
    tc = n(964486),
    to = n(775602),
    tu = n(625494),
    th = n(723702),
    tg = n(303727),
    tm = n(495427);
function tA(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tm.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tm.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tm.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(tg.A, { className: tm.uf }),
                ],
            }),
            (0, i.jsx)(C.D, { className: tm.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(P.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(P.E, {
                              tag: "span",
                              className: tm.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [ea.intl.string(ea.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tf = n(143838),
    tx = n(640238);
function tp(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            e1.default.track(eO.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tj, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(E.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: tf.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tj(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tx.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: eI.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(P.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tE = n(435558),
    tN = n.n(tE),
    tS = n(749314),
    ty = n(560952),
    tC = n(311283),
    tR = n(717421),
    tI = n(933832),
    tv = n(334738),
    t_ = n(95561),
    tM = n(976860),
    tD = n(847374),
    tL = n(345550);
function tO(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, i.jsx)(E.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(G.D, {
            className: tL.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tD.a, { className: c()(tL.ai, { [tL.yZ]: t }), size: "xs" }),
        }),
    });
}
var tb = n(775924);
let tT = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tk = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tG(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tR.z)(() => (t ? tT : tk), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? l({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: to.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: to.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(ty.animated.div, {
            className: tb.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tF = n(782603),
    tU = n(461678),
    tw = n(914703);
function tH(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(e6.Y, {
        targetElementRef: n,
        align: "right",
        animation: e6.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tw.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, i.jsx)(tU.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eO.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(E.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(I.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: tF.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tP = n(350527),
    tK = n(218152),
    tB = n(970278),
    tz = n(747926),
    tX = n(935208),
    tY = n(37411),
    tJ = n(159574);
function tV(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, j.yK)(
            [tB.A, W.A],
            () =>
                tN()(tB.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tX.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return W.A.getChannel(t);
                    })
                    .filter(eN.Vq)
                    .sort((e, t) => tX.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, tz.JA)(e, t, tY.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                td.h.wait(() => {
                    (0, tv.ack)(
                        t.channelId,
                        {
                            section: eO.JJy.INBOX,
                            object: eO.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eO.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tJ.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    tK.Cp,
                    { channel: n, children: (0, i.jsx)(tP.Ay, { className: tJ.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var tZ = n(989349),
    t$ = n.n(tZ),
    tq = n(123292),
    tW = n(857069),
    tQ = n(33358),
    t0 = n(384231),
    t1 = n(207133),
    t2 = n(704413),
    t3 = n(9842),
    t7 = n(994500),
    t5 = n(5095),
    t6 = n(320095),
    t8 = n(143413),
    t4 = n(763754),
    t9 = n(467073),
    ne = n(491182),
    nt = n(860227),
    nn = n(655758),
    ns = n(375199),
    na = n(824556),
    nl = n(715628),
    ni = n(752636),
    nr = n(352043),
    nd = n(268719),
    nc = n(234957),
    no = n(888675),
    nu = n(466959),
    nh = n(364932);
let ng = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: a,
            compact: l = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        g = eO.sl8.has(a.type) ? a.messageReference : void 0,
        m = (0, j.bG)([t3.A], () => t3.A.getMessageByReference(g)),
        A = (0, j.bG)([W.A], () =>
            a.type === eO.lAJ.THREAD_STARTER_MESSAGE && m.state === t3.a.LOADED
                ? W.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = eA.X6.useSetting(),
        x = eA.hD.useSetting(),
        p = eA.rs.useSetting(),
        E = eA.kt.useSetting(),
        N = (0, t0.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, t1.A)(s?.id),
        { disableReactionCreates: y } = (0, t9.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: R,
            hasBailedAst: I,
        } = (0, ns.A)(a, {
            hideSimpleEmbedContent: x && p,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = (0, t4.Ay)(a),
        _ = (0, j.bG)(
            [W.A],
            () => a.hasFlag(eO.pr7.HAS_THREAD) && W.A.getChannel(tX.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eO.lAJ.THREAD_STARTER_MESSAGE && m.state === t3.a.LOADED && null != A,
        D = !M && void 0 === n,
        L = (0, na.A)({ message: a, channel: s, announcementEnabled: D }),
        O = (0, tQ.P)(a),
        b = (0, t5._f)(a.id, a.channel_id),
        T = (0, t2.A)(a),
        k = (0, nt.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (t7.A.isBlockedForMessage(a) ? (n = ea.t["+FcYM/"]) : t7.A.isIgnoredForMessage(a) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nm, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(ne.A, {
                compact: l,
                className: c()(r, { [nh.M1]: (0, t6.ec)(a), [nh.XN]: u, [nh._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nc.A)(a, s, g, m, l),
                childrenHeader: (0, ni.A)({ ...t, author: v, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nn.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: R,
                    hasBailedAst: I,
                    compact: l,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: y,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: f,
                    inlineEmbedMedia: x,
                    renderEmbeds: p,
                    gifAutoPlay: E,
                    poll: T,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: O,
                    ctaButtonType: b,
                }),
                childrenExecutedCommand: (0, nd.A)(a, s, l),
                childrenMessageContent: (0, nl.A)(t, C),
                childrenSystemMessage: (0, nr.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(eO.pr7.HAS_THREAD),
                hasReply: a.type === eO.lAJ.REPLY,
                isSystemMessage: (0, t8.A)(a),
                messageRef: L,
                author: v,
                "aria-labelledby": k,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function nm(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(ne.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(no.A, {
            compact: s,
            className: nu.L9,
            iconNode: (0, i.jsx)(v.P, { size: "md", color: "currentColor", className: nu.Q6 }),
            children: (0, i.jsx)("div", { className: nu.Fo, children: ea.intl.format(a, { count: n }) }),
        }),
    });
}
var nA = n(58703),
    nf = n(195172);
function nx(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(G.D, {
        className: c()(nf.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(ti.y, { type: ti.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(P.E, { variant: "text-xs/medium", className: nf.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var np = n(143236),
    nj = n(323073),
    nE = n(181079),
    nN = n(567035),
    nS = n(202803),
    ny = n(455234),
    nC = n(695633),
    nR = n(152007),
    nI = n(607508),
    nv = n(594061),
    n_ = n(617617),
    nM = n(95701),
    nD = n(808728),
    nL = n(232835),
    nO = n(711014),
    nb = n(543465),
    nT =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    nk = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nG extends np.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (f()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = nF(e, !1);
                if (t.messages.some(nS.$r)) return O.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tB.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eN.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nF(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        td.h.wait(() =>
            tv.ack(
                t,
                {
                    section: eO.JJy.INBOX,
                    object: eO.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eO.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              to.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tv.ack(
            e.channelId,
            { section: eO.JJy.INBOX, object: eO.ZSU.UNDO_MARK_AS_READ, objectType: eO.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        td.h.wait(() => (0, nN.A)([e], eO.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tN().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tv.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tN().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nv.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nv.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: a,
                loadState: "done" !== l || d || r.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nb.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nR.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tB.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        O.A.clearChannel(e.channelId);
        let t = O.A.fetchMessages({
            channelId: e.channelId,
            limit: eO.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            f()("messages" === e.type, "channel cannot change type");
                            let n = nF(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                f()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nF(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function nF(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nL.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    tX.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tX.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = tX.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nU() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = n_.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = W.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            W.A.getSortedPrivateChannels().forEach((n) => nw(e, t, null, n.id)),
            nO.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nD.Ay.getSelectableChannelIds(n),
                    a = nC.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nw(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nw(e, t, n, s);
                });
            }),
            tN().sortBy(t, (e) => e.sortOrder)),
        a = tN()
            .uniq(s.map((e) => e.guildId))
            .filter(eN.Vq);
    return (
        td.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nw(e, t, n, s) {
    if (null == s) return;
    let a = W.A.getChannel(s);
    if (null == a || (!nM.Le.has(a.type) && nb.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === et.Ay.getMentionCount(s)) return;
    } else if (!(0, ny.Y)(a) && 0 === et.Ay.getMentionCount(s)) return;
    if (!a.isPrivate() && !ef.A.can(eO.xBc.READ_MESSAGE_HISTORY, a)) return;
    let l = et.Ay.ackMessageId(s);
    if (null == l) {
        let e = Q.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = tX.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = et.Ay.getOldestUnreadMessageId(s),
        r = et.Ay.lastMessageId(s),
        d = et.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || tX.default.compare(l, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: l,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = W.A.getChannel(t);
            if (nE.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (et.Ay.getMentionCount(t) > 0) return et.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tX.default.extractTimestamp(n);
                if (Date.now() - e > nP) return 8;
                if (Date.now() - e > nH) return 6;
            }
            if (s.isThread()) {
                let e = (0, nI.l)(s);
                return e === tY.CP.ALL_MESSAGES ? 4 : e === tY.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nb.Ay.getChannelMessageNotifications(e, t),
                    s = n === eO.orn.NULL ? nb.Ay.getMessageNotifications(e) : n;
                return s === eO.orn.ALL_MESSAGES ? 4 : s === eO.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nj.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nH = 2 * ex.A.Millis.DAY,
    nP = 10 * ex.A.Millis.DAY;
var nK = n(358402);
let nB = { left: 4, right: -12 },
    nz = [eO.lAJ.THREAD_CREATED];
function nX(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, gotoChannel: l } = e,
        d = (0, p.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), l(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, l, n.id],
        ),
        o = nz.includes(n.type);
    return (0, i.jsx)(k.vN, {
        offset: nB,
        children: (0, i.jsxs)("div", {
            className: nK.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nx, { className: nK.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(ng, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nK.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function nY(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eA.hH.useSetting(),
        l = 0 === t.messages.length || t$()(t.messages[0].timestamp).isSame(t$()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nA.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tS.A, { className: nK.yF, children: t }, t)), (d = t$()(e.timestamp));
        }
        let t = null == c || (0, tW.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nX, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tX.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nK.Gr,
                        children: (0, i.jsx)(tq.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(ti.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nK.DZ, children: r })
    );
}
let nJ = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[a, l], d] = r.useState([0, 0]),
            c = t.deleted && a > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== a || null == s.current) return;
            let e = s.current,
                l = e.offsetHeight;
            if (l <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? l - (r - i) : l;
            d([l, l - c]);
        }, [t.deleted, t.channelId, n, a]);
        let { opacity: o, size: u } = (0, tR.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: o,
                height: u.to((e) => {
                    var t, n;
                    return c ? ((t = a), (n = l) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(ty.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nV, { ...e }),
        });
    }),
    nV = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, j.bG)([W.A], () => W.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    td.h.wait(() => {
                        (0, tv.ack)(
                            t.channelId,
                            {
                                section: eO.JJy.INBOX,
                                object: eO.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eO.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == l || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eg.n4)(t.channelId, t.guildId, nW, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                O.A.trackJump(t.channelId, a, nW), (0, tM.pX)(eO.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, t_.zV)(eO.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: eH.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(er, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(R.e, {
                            size: "sm",
                            className: el.GC,
                            children: [(0, i.jsx)(tH, { channel: l }), (0, i.jsx)(nZ, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tO, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: el.Pt }),
                    ],
                }),
                children: (0, i.jsx)(tG, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nY, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tV, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nZ(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tC.A)() && null != t.guildId;
    return (0, i.jsx)(E.m, {
        text: l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(I.K, {
            variant: "secondary",
            "aria-label": l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: l ? tf.i : tI.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, t_.zV)(eO.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var n$ = n(245233),
    nq = n(552392);
let nW = "Inbox";
function nQ(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        A = (0, b.A)("unreads", m);
    (0, eg.xN)(m), (0, eg.yW)(nW);
    let [f, x] = (function (e) {
            let [t, n] = r.useState(() => new nG(nU(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nU());
            r.useEffect(() => {
                function e(e) {
                    return d(e);
                }
                return (
                    t.on("change", e),
                    d(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = nU();
                    0 === r.channels.length || t - l.current < 10 * ex.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nG(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (nL.A.addChangeListener(t.reloadMessages), () => nL.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nb.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nb.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nR.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nR.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tB.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tB.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: E, channels: S } = f,
        { maybeLoadMore: y } = x,
        C = (0, j.bG)([to.Ay], () => to.Ay.messageGroupSpacing);
    return ((t = m),
    (n = f),
    (s = x),
    r.useLayoutEffect(() => {
        let { scrollToChannelIndex: e } = n;
        s.clearScrollToChannelIndex();
        let { current: a } = t;
        if (null == a || null == e) return;
        let l = a.getScrollerNode()?.children;
        if (null == l) return;
        let i = l[e];
        if (null == i) return;
        let { scrollTop: r, offsetHeight: d } = a.getScrollerState();
        (i.offsetTop < r || i.offsetTop > r + d) && a.scrollTo({ to: i.offsetTop });
    }),
    (a = f),
    (l = x),
    r.useEffect(() => {
        function e() {
            let e = a.channels.find((e) => !e.collapsed);
            null != e && l.markChannelRead(e);
        }
        return (
            tu._.subscribe(eO.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tu._.unsubscribe(eO.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = x),
    r.useEffect(() => {
        function e(e) {
            if ((0, ev.hasAnyModalOpen)()) return;
            let t = (0, tl.BF)(e)?.activeElement;
            (0, tl.Cw)(t) ||
                (((0, th.isMac)() || (0, th.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    d.undoMarkChannelRead());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [d]),
    r.useEffect(
        () => (
            td.h.subscribe("CONNECTION_OPEN", g),
            () => {
                td.h.unsubscribe("CONNECTION_OPEN", g);
            }
        ),
        [g],
    ),
    (0, tc.Ay)(
        () => (
            tu._.subscribe(eO.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
            () => {
                tu._.unsubscribe(eO.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(tA, {
              Icon: eJ.K,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: ta().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, i.jsx)(p.hD, {
              navigator: A,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(N.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: E === nk.Done ? void 0 : y,
                          className: c()(eH.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(n0, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tN().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nT.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tS.A,
                                                            {
                                                                className: n$.y,
                                                                contentClassName: n$.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nT.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tS.A,
                                                            {
                                                                className: n$.y,
                                                                contentClassName: n$.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nJ,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: a,
                                                      toggle: r,
                                                      deleteChannel: l,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(S, x, o),
                              E === nk.Done ? null : (0, i.jsx)(ti.y, { className: nq.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function n0(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nq.d$,
        children: [
            (0, i.jsx)("div", { className: nq.cm, children: (0, i.jsx)(eJ.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(C.D, {
                        className: nq.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, i.jsx)(P.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nq.dh,
                        children: (0, i.jsx)(tr.$, {
                            variant: "primary",
                            size: "sm",
                            text: ea.intl.string(ea.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function n1() {
    return (0, i.jsx)(tA, {
        Icon: eJ.K,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function n2() {
    return (0, i.jsx)(tp, { onClick: () => tu._.dispatch(eO.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var n3 = n(668451);
function n7(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        a = (0, eL.jv)("RecentsPopout"),
        l = (0, e$.Sc)(),
        r = (0, eY.bG)([eE.A], () => eE.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: n3.wx,
        children: [
            (0, i.jsxs)("div", {
                className: n3.qd,
                children: [
                    (0, i.jsx)(eJ.K, { size: "md", color: "currentColor", className: n3.yH }),
                    (0, i.jsx)(C.D, {
                        className: n3.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eV.s, {
                        className: n3.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, i.jsx)(n5, { tab: t }), (0, i.jsx)(e3, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n3.YF,
                children: (0, i.jsxs)(eZ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: n3.$H,
                    children: [
                        (0, i.jsx)(eZ.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: n3.Mf,
                            children: (0, i.jsx)("span", { className: n3.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eZ.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: n3.Mf,
                            children: (0, i.jsx)("span", { className: n3.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(eZ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: n3.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n3.Gn,
                                      children: ea.intl.string(ea.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(eZ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: n3.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n3.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t.aUXxzT)
                                              : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(eZ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: n3.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: n3.Gn,
                                      children: ea.intl.string(ea.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function n5(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(n2, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tn, {}) : null;
}
var n6 = n(935063),
    n8 = n(475743),
    n4 = n(517019),
    n9 = n(919755);
let se = { offset: { left: 4, right: -12 } },
    st = "Recent Mentions";
function sn(e, t) {
    e4.A.fetchRecentMentions({
        before: t,
        limit: eO.Ue3,
        guildId: null != e && te.Ay.guildFilter !== eO.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: te.Ay.roleFilter,
        everyone: te.Ay.everyoneFilter,
    });
}
function ss(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, b.A)("recents", n);
    (0, eg.xN)(n), (0, eg.yW)(st);
    let a = (0, j.bG)([W.A, e9.Ay], () => W.A.getChannel(e9.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([te.Ay], () => ({
            messages: te.Ay.getMentions(),
            hasMore: te.Ay.hasMore,
            loading: te.Ay.loading,
            guildFilter: te.Ay.guildFilter,
            roleFilter: te.Ay.roleFilter,
            everyoneFilter: te.Ay.everyoneFilter,
        })),
        g = (0, n8.Ay)(o),
        m = (0, n8.Ay)(u),
        A = (0, n8.Ay)(h);
    r.useEffect(() => {
        te.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && sn(a)
            : sn(a);
    }, [g, o, m, u, A, h, a]),
        (0, tc.Ay)(() => {
            l?.some(nS.$r) && (e4.A.clearMentions(), sn(a));
        }),
        (0, tc.l0)(() => {
            e4.A.truncateMentions(eO.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sn(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eH.Lq, children: (0, i.jsx)(ti.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tA, { Icon: n6.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, i.jsx)(p.hD, {
                navigator: s,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(N.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eH.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(sa, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eH.Lq, children: (0, i.jsx)(ti.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: n9.u,
                                            children: (0, i.jsx)(tr.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    sn(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sa(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = W.A.getChannel(t.channel_id);
    if (null == s || (0, nj.Jm)(s) || (0, nj.$v)(s)) return null;
    let a = n4.A.didAgree(s.getGuildId()),
        l = !!(0, nj.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eH.aP,
        children: [
            (0, i.jsx)(er, {
                channel: s,
                onClick: (e) => (0, eg.KW)(t, st, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(R.e, {
                    size: "sm",
                    className: el.GC,
                    children: [
                        (0, i.jsx)(E.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: D.t,
                                onClick: (e) => (0, eg.KW)(t, st, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(E.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tI.A,
                                onClick: () => e4.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    em.A,
                    {
                        message: t,
                        channel: s,
                        className: eH.YD,
                        hideAccessories: l,
                        compact: eA.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: se,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sl = n(285796),
    si = n(151282),
    sr = n(199160),
    sd =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sc = n(970244);
let so = "Scheduled Messages",
    su = { offset: { left: 4, right: -12 } };
function sh(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, si.sy)();
    }, []);
    let n = (0, j.bG)([sr.A], () => sr.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sr.A], () => sr.A.loading),
        a = (0, j.bG)([sr.A], () => sr.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, b.A)("scheduled-messages", d);
    return ((0, eg.xN)(d), (0, eg.yW)(so), s)
        ? (0, i.jsx)("div", { className: eH.Lq, children: (0, i.jsx)(ti.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tA, { Icon: K.O, header: ea.intl.string(ea.t.aJQZfZ), tip: ea.intl.string(ea.t.rCN4pN) })
          : (0, i.jsx)(p.hD, {
                navigator: c,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(N.Ch, {
                            className: eH.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    sg,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: a.has(e.scheduledMessageId),
                                        onJump: t,
                                    },
                                    e.scheduledMessageId,
                                ),
                            ),
                        });
                    },
                }),
            });
}
let sg = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, j.bG)([W.A], () => W.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sd.SCHEDULED:
                    return { isError: !1, stateMessage: ea.intl.string(ea.t.Fn6Odn) };
                case sd.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.v5O2dK) };
                case sd.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                case sd.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t["w6zHX/"]) };
                case sd.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.pflV7z) };
                case sd.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                default:
                    (0, eN.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, si.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sc.Re)();
                })
                .catch((e) => {
                    (0, sc.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sc.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eH.aP,
                  children: [
                      (0, i.jsx)(er, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, eg.n4)(l.id, l.guild_id, so, () => a(e)),
                          collapsed: !1,
                          children: (0, i.jsxs)(R.e, {
                              size: "sm",
                              className: el.GC,
                              children: [
                                  (0, i.jsx)(E.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: K.O,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(E.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sl.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          onClick: o,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(eh, {
                          type: d ? "error" : "success",
                          text: d
                              ? c
                              : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(ti.y, { className: eH.Lq })
                          : (0, i.jsx)(
                                em.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eH.YD,
                                    compact: eA.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: su,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sm = n(655165);
function sA(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        closePopout: l,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sm.k, { [sm.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(n1, {}),
                children: (0, i.jsx)(g.F, {
                    component: (0, i.jsx)(n7, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(ss, { onJump: r })
                            : f && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(eB, { closePopout: l, type: m.Yf.BOOKMARK }, "bookmarks")
                              : f && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(eB, { closePopout: l, type: m.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(sh, { onJump: r })
                                  : (0, i.jsx)(nQ, { onJump: r, showTutorial: d, setSeenTutorial: A, closePopout: l }),
                }),
            }),
        }),
    });
}

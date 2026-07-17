n.r(t), n.d(t, { default: () => sS });
var s,
    l,
    a,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    c = n.n(d),
    o = n(484030),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(284009),
    A = n.n(m),
    f = n(989349),
    x = n.n(f),
    j = n(562708),
    E = n(837381),
    p = n(17928),
    N = n(689175),
    S = n(695366),
    C = n(661531),
    y = n(297264),
    v = n(241326),
    _ = n(939249),
    I = n(933832),
    R = n(22231),
    M = n(99677),
    L = n(606096),
    b = n(406810),
    O = n(442433),
    D = n(928039),
    T = n(139286),
    k = n(636922),
    G = n(194085),
    U = n(885386),
    F = n(576705),
    P = n(174459),
    w = n(927813),
    H = n(164684),
    K = n(704456),
    z = n(85109),
    B = n(756377);
n(321073);
var X = n(216623);
function J() {
    return z.A.getSavedMessages().map((e) => e.saveData);
}
var V = n(320448),
    Y = n(534890),
    q = n(187322),
    Z = n(778712),
    $ = n(47167),
    W = n(713654),
    Q = n(598104),
    ee = n(548118),
    et = n(71393),
    en = n(375708),
    es = n(2224);
let el = { top: 8, bottom: 8, left: -4, right: -4 };
function ea(e) {
    let { channel: t, children: n } = e;
    return (0, i.jsx)(q.vN, {
        offset: el,
        children: (0, i.jsxs)("div", {
            className: es.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, i.jsx)(ei, { channel: t }),
                t.isPrivate() ? null : (0, i.jsx)(V._, { size: "xxs" }),
                (0, i.jsx)(er, { channel: t }),
                n,
            ],
        }),
    });
}
function ei(e) {
    let { channel: t } = e,
        n = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(ee.Ay, { className: es.Kk, guild: n, size: ee.Ay.Sizes.SMALLER, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(Q.A, { channel: t, size: Z._3.SIZE_24, "aria-hidden": !0 })
          : (0, i.jsx)("div", { className: c()(es.Kk, es.ro), children: (0, i.jsx)(Y.o, { size: "xxs" }) });
}
function er(e) {
    let { channel: t } = e,
        n = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        s = (0, $.Ay)(t, !1),
        l = (0, W.gU)(t, n),
        a = t.isPrivate() || null == l,
        r = t.isDM() ? en.intl.formatToPlainString(en.t.smD7XV, { username: s }) : s;
    return (0, i.jsxs)("div", {
        className: es.yP,
        children: [
            a ? null : (0, i.jsx)(l, { className: es.j1, size: "xxs" }),
            (0, i.jsx)(y.D, { variant: "text-md/semibold", color: "text-default", children: r }),
        ],
    });
}
var ed = n(403581),
    ec = n(834730),
    eo = n(862482),
    eu = n(192308),
    eh = n(404374),
    eg = n(725807),
    em = n(428262),
    eA = n(226017),
    ef = n(652215),
    ex = n(202541),
    ej = n(398610),
    eE = n(936037);
function ep() {
    return (0, eA.A)()
        ? (0, i.jsx)("div", {
              className: ej.do,
              children: (0, i.jsxs)("div", {
                  className: ej.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: ej.Sl, alt: "" }),
                      (0, i.jsx)(y.D, {
                          className: ej.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: en.intl.string(en.t.erEf2g),
                      }),
                      (0, i.jsx)(ec.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: en.intl.string(en.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: ej.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: ej.U6,
                      children: [
                          (0, i.jsx)("img", { src: eE, className: ej.Sl, alt: "" }),
                          (0, i.jsx)(y.D, {
                              className: ej.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: en.intl.string(en.t.w4DRbZ),
                          }),
                          (0, i.jsx)(ec.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: en.intl.string(en.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(eN, {}),
              ],
          });
}
function eN() {
    let e = (0, em.Dd)(ex.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, eu.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = en.intl.format(en.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: ej.Zj,
        children: [
            (0, i.jsx)(ed.t, { size: "md", color: eh.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(ec.E, { variant: "text-xs/medium", color: "text-strong", className: ej.tD, children: s }),
            (0, i.jsx)(eg.A, {
                className: ej.Oy,
                size: eo.lO.TINY,
                shinyButtonClassName: ej.Oy,
                subscriptionTier: ex.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: ef.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eS = n(953424);
function eC(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, K.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: K.kh.SHORT });
    if (null == t.saveData.dueAt) return null;
    let a = l ? "text-feedback-critical" : "text-default";
    return (0, i.jsxs)("div", {
        className: eS.k,
        children: [
            (0, i.jsx)("div", {
                className: eS.K,
                children: (0, i.jsx)(b.O, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === a
                            ? C.A.colors.TEXT_FEEDBACK_CRITICAL
                            : C.A.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, i.jsx)(y.D, { variant: "text-md/semibold", color: a, children: s }),
        ],
    });
}
var ey = n(608149);
function ev(e) {
    let { closePopout: t } = e,
        n = (function () {
            let [e, t] = r.useState(J),
                n = r.useRef(z.A.getIsStale());
            return (
                r.useEffect(() => {
                    let e = z.A.getLastChanged();
                    function s() {
                        let s = z.A.getLastChanged();
                        if (e !== s) {
                            if (((e = s), n.current && !z.A.getIsStale())) {
                                (n.current = !1), t(J());
                                return;
                            }
                            t((e) => {
                                let t = [...e],
                                    n = new Map(z.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let s of e) n.has(s.messageId) ? n.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                                for (let e of n.values()) t.push(e.saveData);
                                return t;
                            });
                        }
                    }
                    return (
                        z.A.addChangeListener(s),
                        () => {
                            z.A.removeChangeListener(s);
                        }
                    );
                }, []),
                r.useEffect(() => {
                    (0, X.AX)();
                }, []),
                e
            );
        })();
    (0, T.A)(
        {
            type: j.ImpressionTypes.POPOUT,
            name: j.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: z.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    );
    let s = r.useRef(null),
        l = (0, D.A)("for-later", s),
        [a, d] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => d(new Date()), w.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === n.length)
        ? (0, i.jsx)(ep, {})
        : (0, i.jsx)(E.hD, {
              navigator: l,
              children: (0, i.jsx)(E.PR, {
                  children: (e) => {
                      let { ref: l, ...r } = e;
                      return (0, i.jsx)(N.Ch, {
                          ref: (e) => {
                              (s.current = e), (l.current = e?.getScrollerNode() ?? null);
                          },
                          className: ey.VB,
                          ...r,
                          children: n.map((e) =>
                              (0, i.jsx)(eI, { savedMessageKey: e, closePopout: t, throttledNow: a }, e.messageId),
                          ),
                      });
                  },
              }),
          });
}
function e_(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, K.vr)(t),
        a = r.useCallback(
            async (e) => {
                await (0, K.le)(t, l),
                    e.shiftKey || n(),
                    P.default.track(ef.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? B.Yf.REMINDER : B.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? x()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, l],
        ),
        d = (0, p.bG)([F.A], () => !!(l?.type === ef.rbe.UNKNOWN || l?.isPrivate()) || F.A.can(ef.xBc.VIEW_CHANNEL, l));
    return null != l && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: ey.zC,
              children: [
                  (0, i.jsx)(_.D, { className: ey.M, onClick: a, "aria-label": en.intl.string(en.t["+TSRGD"]) }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eC, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(ea, { channel: l }),
                  (0, i.jsx)(
                      k.A,
                      {
                          message: t.message,
                          channel: l,
                          className: ey.iU,
                          compact: U.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
                  (0, i.jsx)(G.Ay, {
                      className: ey.S3,
                      children: (0, i.jsx)(eR, { savedMessage: t, jumpToMessage: a }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(ey.zC, ey.tq),
              children: [
                  (0, i.jsx)("div", {
                      className: ey.fy,
                      children: (0, i.jsx)(S.E, { size: "xxs", color: C.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                  }),
                  (0, i.jsx)(y.D, {
                      variant: "text-md/semibold",
                      color: "text-default",
                      children: null != t.saveData.dueAt ? en.intl.string(en.t["wuQm+j"]) : en.intl.string(en.t.o572Fe),
                  }),
                  (0, i.jsx)(G.Ay, {
                      className: ey.S3,
                      children: (0, i.jsx)(
                          G.qv,
                          {
                              label: en.intl.string(en.t.SvXS1Z),
                              icon: v.u,
                              dangerous: !0,
                              onClick: () => (0, H.x)(t.saveData),
                          },
                          "delete",
                      ),
                  }),
              ],
          });
}
function eI(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: s } = e,
        l = (0, p.bG)([z.A], () => z.A.getSavedMessage(t.channelId, t.messageId));
    return null == l ? null : (0, i.jsx)(e_, { savedMessage: l, closePopout: n, throttledNow: s });
}
function eR(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (A()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      G.qv,
                      {
                          label: en.intl.string(en.t.yjGtdJ),
                          icon: I.A,
                          onClick: () =>
                              (0, H.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      },
                      "mark-complete",
                  ),
                  (0, i.jsx)(
                      G.qv,
                      {
                          label: en.intl.string(en.t.vrbqs1),
                          icon: R.R,
                          onClick: (e) =>
                              (0, O.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: en.intl.string(en.t.roMu1H), message: t.message });
                              }),
                      },
                      "edit-reminder",
                  ),
                  (0, i.jsx)(G.$$, {}),
                  (0, i.jsx)(
                      G.qv,
                      { label: en.intl.string(en.t["+TSRGD"]), icon: M.t, onClick: (e) => s(e) },
                      "jump-to-message",
                  ),
                  (0, i.jsx)(
                      G.qv,
                      { label: en.intl.string(en.t.SvXS1Z), icon: L.c, onClick: () => (0, H.x)(t.saveData) },
                      "remove-reminder",
                  ),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      G.qv,
                      {
                          label: en.intl.string(en.t.mJ3P0N),
                          icon: b.O,
                          onClick: (e) =>
                              (0, O.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: en.intl.string(en.t.mJ3P0N), message: t.message });
                              }),
                      },
                      "create-reminder",
                  ),
                  (0, i.jsx)(
                      G.qv,
                      { label: en.intl.string(en.t["+TSRGD"]), icon: M.t, onClick: (e) => s(e) },
                      "jump-to-message",
                  ),
                  (0, i.jsx)(
                      G.qv,
                      { label: en.intl.string(en.t.SvXS1Z), icon: L.c, onClick: () => (0, H.x)(t.saveData) },
                      "remove-bookmark",
                  ),
              ],
          });
}
var eM = n(866665),
    eL = n(289873),
    eb = n(935063),
    eO = n(821609),
    eD = n(825484),
    eT = n(408278),
    ek = n(378939),
    eG = n(493336),
    eU = n(964486),
    eF = n(475743),
    eP = n(323073),
    ew = n(202803),
    eH = n(81437),
    eK = n(378570),
    ez = n(734057),
    eB = n(517019),
    eX = n(309010),
    eJ = n(625494),
    eV = n(135978),
    eY = n(97808),
    eq = n(812993),
    eZ = n(397244),
    e$ = n(714114),
    eW = n(394871),
    eQ = n(571694),
    e0 = n(616356),
    e1 = n(290863),
    e3 = n(568548),
    e2 = n(287809),
    e7 = n(650583),
    e6 = n(889329);
let e8 = { top: 8, bottom: 8, left: -4, right: -4 };
function e4(e) {
    let { channel: t, children: n, onClick: s, collapsed: l = !1, mentionCount: a, onToggleCollapse: r, itemId: d } = e,
        o = (0, E.rm)(d);
    return (0, i.jsx)(q.vN, {
        offset: e8,
        children: (0, i.jsxs)("div", {
            className: c()(e6.ZO, { [e6.yZ]: l }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === e7.dh.ENTER || e.key === e7.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === e7.dh.ARROW_RIGHT && l) || (e.key === e7.dh.ARROW_LEFT && !l)) && r();
            },
            children: [
                (0, i.jsx)(_.D, {
                    className: e6.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(e5, { channel: t }),
                }),
                (0, i.jsx)(V._, { className: e6.ai, size: "xxs" }),
                (0, i.jsx)(e9, { channel: t, onClick: s, mentionCount: a }),
                n,
            ],
        }),
    });
}
function e5(e) {
    let { channel: t } = e,
        n = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(ee.Ay, { className: e6.Kk, guild: n, size: ee.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(Q.A, { channel: t, size: Z._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(eY.eu, { size: Z._3.SIZE_32, src: (0, eQ.Y)(t), "aria-hidden": !0 });
}
function e9(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        a = (0, $.Ay)(t, !1),
        r = (0, p.bG)([e3.Ay], () => e3.Ay.getIsMentionLowImportance(t.id)),
        d = (0, p.bG)([ez.A], () => ez.A.getChannel(t.parent_id)),
        o = (0, $.Ay)(d),
        u = (0, W.gU)(t, l);
    return (0, i.jsxs)("div", {
        className: e6.yP,
        children: [
            (0, i.jsx)(y.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: e6.lz,
                children: (0, i.jsxs)(_.D, {
                    className: e6.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: e6.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: e6.je, children: a }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: e6.qS,
                                  children: (0, i.jsx)(eq.hV, {
                                      count: s,
                                      color: r
                                          ? C.A.colors.BACKGROUND_MOD_STRONG.css
                                          : C.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(ec.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? en.intl.formatToPlainString(en.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(te, { channel: t })
                      : (0, i.jsx)(_.D, {
                            className: c()(e6.je, e6.J5),
                            onClick: n,
                            children: null == d ? l?.name : `${l?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function te(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, p.cf)([e2.default, e1.A, e0.A], () => {
            let e = e2.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? e1.A.getStatus(e.id) : null,
                activities: null != e ? e1.A.getActivities(e.id) : null,
                applicationStream: null != e ? e0.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, e$.Ay)({ userId: n?.id });
    return (0, eZ.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(eW.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var tt = n(303727),
    tn = n(711917);
function ts(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tn.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tn.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(tt.A, { className: tn.uf }),
                ],
            }),
            (0, i.jsx)(y.D, { className: tn.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(ec.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(ec.E, {
                              tag: "span",
                              className: tn.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [en.intl.string(en.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tl = n(521443),
    ta = n(575863);
let ti = { offset: { left: 4, right: -12 } },
    tr = "Recent Mentions";
function td(e, t) {
    ek.A.fetchRecentMentions({
        before: t,
        limit: ef.Ue3,
        guildId: null != e && eV.Ay.guildFilter !== ef.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: eV.Ay.roleFilter,
        everyone: eV.Ay.everyoneFilter,
    });
}
function tc(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, D.A)("recents", n),
        l = (0, p.bG)([ez.A, eX.Ay], () => ez.A.getChannel(eX.Ay.getChannelId())),
        {
            messages: a,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, p.cf)([eV.Ay], () => ({
            messages: eV.Ay.getMentions(),
            hasMore: eV.Ay.hasMore,
            loading: eV.Ay.loading,
            guildFilter: eV.Ay.guildFilter,
            roleFilter: eV.Ay.roleFilter,
            everyoneFilter: eV.Ay.everyoneFilter,
        })),
        g = (0, eF.A)(o),
        m = (0, eF.A)(u),
        A = (0, eF.A)(h);
    r.useEffect(() => {
        eV.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && td(l)
            : td(l);
    }, [g, o, m, u, A, h, l]),
        (0, eU.Ay)(() => {
            a?.some(ew.$r) && (ek.A.clearMentions(), td(l));
        }),
        (0, eU.l0)(() => {
            ek.A.truncateMentions(ef.Ue3);
        }),
        (0, eU.Ay)(() => {
            P.default.track(ef.HAw.OPEN_POPOUT, { type: tr });
        }),
        (0, eU.Ay)(() => {
            function e() {
                n.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                n.current?.scrollPageDown({ animate: !0 });
            }
            return (
                eJ._.subscribe(ef.jej.SCROLL_PAGE_DOWN, t),
                eJ._.subscribe(ef.jej.SCROLL_PAGE_UP, e),
                () => {
                    eJ._.unsubscribe(ef.jej.SCROLL_PAGE_DOWN, t), eJ._.unsubscribe(ef.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            td(l, null != a && a.length > 0 ? a[a.length - 1].id : null);
    }, [d, c, l, a]);
    return null == a || (c && 0 === a.length)
        ? (0, i.jsx)("div", { className: tl.Lq, children: (0, i.jsx)(eL.y, {}) })
        : 0 === a.length
          ? (0, i.jsx)(ts, { Icon: eb.X, header: en.intl.string(en.t.bgDz74), tip: en.intl.string(en.t.NS15vk) })
          : (0, i.jsx)(E.hD, {
                navigator: s,
                children: (0, i.jsx)(E.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(N.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: ta.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                a.map((e) => (0, i.jsx)(to, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: tl.Lq, children: (0, i.jsx)(eL.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: ta.u9,
                                            children: (0, i.jsx)(eO.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: en.intl.string(en.t.XBlaiC),
                                                onClick: () =>
                                                    td(l, null != a && a.length > 0 ? a[a.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function to(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = ez.A.getChannel(t.channel_id);
    if (null == s || (0, eP.Jm)(s) || (0, eP.$v)(s)) return null;
    let l = eB.A.didAgree(s.getGuildId()),
        a = !!(0, eP.Gc)(s) && !l;
    return (0, i.jsxs)("div", {
        className: tl.aP,
        children: [
            (0, i.jsx)(e4, {
                channel: s,
                onClick: (e) => tu(t, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(eD.e, {
                    size: "sm",
                    className: e6.GC,
                    children: [
                        (0, i.jsx)(eM.m, {
                            text: en.intl.string(en.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(eT.K, {
                                variant: "secondary",
                                "aria-label": en.intl.string(en.t["+TSRGD"]),
                                size: "sm",
                                icon: M.t,
                                onClick: (e) => tu(t, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(eM.m, {
                            text: en.intl.string(en.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(eT.K, {
                                variant: "secondary",
                                "aria-label": en.intl.string(en.t.e6RscS),
                                size: "sm",
                                icon: I.A,
                                onClick: () => ek.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    k.A,
                    {
                        message: t,
                        channel: s,
                        className: tl.YD,
                        hideAccessories: a,
                        compact: U.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: ti,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
function tu(e, t) {
    function n() {
        let { id: n, channel_id: s } = e;
        null != ez.A.getChannel(s) && (eG.A.trackJump(s, n, tr), (0, eK.ci)(s, n)), t();
    }
    (0, eH.A)(e, n) && n();
}
var th = n(702841),
    tg = n(912592),
    tm = n(890856),
    tA = n(761508),
    tf = n(966597),
    tx = n(910425),
    tj = n(214947),
    tE = n(711950),
    tp = n(322387),
    tN = n(912309),
    tS = n(134314);
function tC(e) {
    let { closePopout: t } = e,
        n = (0, tN.kX)();
    return (0, i.jsx)(eM.m, {
        asContainer: !0,
        text: en.intl.string(en.t["lMR96+"]),
        children: (0, i.jsxs)(_.D, {
            "aria-label": `${en.intl.string(en.t["lMR96+"])}, ${n}`,
            className: tS.b,
            onClick: () => {
                P.default.track(ef.HAw.NOTIFICATION_CENTER_ACTION, { action_type: tp.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    tE.A.transitionToSection(ef.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(tj.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(eq.hV, { count: n, color: C.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var ty = n(980707),
    tv = n(477782),
    t_ = n(922016),
    tI = n(783977);
function tR(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, p.bG)([ez.A, eX.Ay], () => ez.A.getChannel(eX.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, p.cf)([eV.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = eV.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(ty.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": en.intl.string(en.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(tv.sL, {
                id: "Everyone",
                label: en.intl.string(en.t.cdyUsV),
                action: function () {
                    ek.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(tv.sL, {
                id: "Roles",
                label: en.intl.string(en.t.lZejCq),
                action: function () {
                    ek.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(tv.sL, {
                      id: "All Servers",
                      label: en.intl.string(en.t.GWMA6s),
                      action: function () {
                          ek.A.setGuildFilter({
                              guildFilter: r === ef.KE7.THIS_SERVER ? ef.KE7.ALL_SERVERS : ef.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === ef.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tM() {
    let e = r.useRef(null);
    return (0, i.jsx)(t_.Y, {
        targetElementRef: e,
        align: "right",
        animation: t_.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tR, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(eM.m, {
                text: en.intl.string(en.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(eT.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": en.intl.string(en.t.pEasFX),
                    icon: tI.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tL = n(481613),
    tb = n.n(tL),
    tO = n(621466),
    tD = n(228366),
    tT = n(775602),
    tk = n(723702),
    tG = n(143838),
    tU = n(640238);
function tF(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            P.default.track(ef.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tP, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(eM.m, {
                text: en.intl.string(en.t["8k+6QY"]),
                children: (0, i.jsx)(eT.K, {
                    variant: "secondary",
                    "aria-label": en.intl.string(en.t["8k+6QY"]),
                    size: "sm",
                    icon: tG.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tP(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tU.M, {
        dismissable: !0,
        header: en.intl.string(en.t.h4bVZ2),
        confirmText: en.intl.string(en.t.e6RscS),
        cancelText: en.intl.string(en.t["ETE/oC"]),
        confirmButtonColor: eo.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(ec.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: en.intl.string(en.t["0MQ0Bf"]),
        }),
    });
}
var tw = n(435558),
    tH = n.n(tw),
    tK = n(749314),
    tz = n(372684),
    tB = n(311283),
    tX = n(717421),
    tJ = n(334738),
    tV = n(95561),
    tY = n(976860),
    tq = n(847374),
    tZ = n(714568);
function t$(e) {
    let { collapsed: t, onClick: n } = e,
        s = en.intl.string(t ? en.t.dcl9MQ : en.t.iTcuma);
    return (0, i.jsx)(eM.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(_.D, {
            className: tZ.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tq.a, { className: c()(tZ.ai, { [tZ.yZ]: t }), size: "xs" }),
        }),
    });
}
var tW = n(169894);
let tQ = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    t0 = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function t1(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [l, a] = (0, tX.z)(() => (t ? tQ : t0), "respect-motion-settings", []),
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
                    ? a({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: tT.Ay.useReducedMotion,
                      })
                    : a({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tT.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && a({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, a]),
        (0, i.jsx)(tz.animated.div, {
            className: tW.r,
            style: l,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var t3 = n(782603),
    t2 = n(461678),
    t7 = n(914703);
function t6(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(t_.Y, {
        targetElementRef: n,
        align: "right",
        animation: t_.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(t7.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: en.intl.string(en.t.ljs3Oe),
                  })
                : (0, i.jsx)(t2.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: en.intl.string(en.t.ljs3Oe),
                      location: { section: ef.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eM.m, {
                text: en.intl.string(en.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(eT.K, {
                    "aria-label": en.intl.string(en.t.h850Ss),
                    icon: t3.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var t8 = n(350527),
    t4 = n(218152),
    t5 = n(970278),
    t9 = n(747926),
    ne = n(403362),
    nt = n(935208),
    nn = n(37411),
    ns = n(791641);
function nl(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, p.yK)(
            [t5.A, ez.A],
            () =>
                tH()(t5.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return nt.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return ez.A.getChannel(t);
                    })
                    .filter(ne.Vq)
                    .sort((e, t) => nt.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, t9.JA)(e, t, nn.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                tD.h.wait(() => {
                    (0, tJ.ack)(
                        t.channelId,
                        {
                            section: ef.JJy.INBOX,
                            object: ef.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: ef.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: ns.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    t4.Cp,
                    { channel: n, children: (0, i.jsx)(t8.Ay, { className: ns.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var na = n(123292),
    ni = n(857069),
    nr = n(789645),
    nd = n(33358),
    nc = n(384231),
    no = n(207133),
    nu = n(704413),
    nh = n(9842),
    ng = n(994500),
    nm = n(5095),
    nA = n(320095),
    nf = n(143413),
    nx = n(763754),
    nj = n(467073),
    nE = n(491182),
    np = n(860227),
    nN = n(500414),
    nS = n(375199),
    nC = n(824556),
    ny = n(715628),
    nv = n(752636),
    n_ = n(352043),
    nI = n(268719),
    nR = n(234957),
    nM = n(888675),
    nL = n(21623),
    nb = n(701628);
let nO = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: a = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        g = ef.sl8.has(l.type) ? l.messageReference : void 0,
        m = (0, p.bG)([nh.A], () => nh.A.getMessageByReference(g)),
        A = (0, p.bG)([ez.A], () =>
            l.type === ef.lAJ.THREAD_STARTER_MESSAGE && m.state === nh.a.LOADED
                ? ez.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = U.X6.useSetting(),
        x = U.hD.useSetting(),
        j = U.rs.useSetting(),
        E = U.kt.useSetting(),
        N = (0, nc.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        S = (0, no.A)(s?.id),
        { disableReactionCreates: C } = (0, nj.A)(s),
        {
            content: y,
            hasSpoilerEmbeds: v,
            hasBailedAst: _,
        } = (0, nS.A)(l, {
            hideSimpleEmbedContent: x && j,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, nx.Ay)(l),
        R = (0, p.bG)(
            [ez.A],
            () => l.hasFlag(ef.pr7.HAS_THREAD) && ez.A.getChannel(nt.default.castMessageIdAsChannelId(l.id)),
        ),
        M = l.type === ef.lAJ.THREAD_STARTER_MESSAGE && m.state === nh.a.LOADED && null != A,
        L = !M && void 0 === n,
        b = (0, nC.A)({ message: l, channel: s, announcementEnabled: L }),
        O = (0, nd.P)(l),
        D = (0, nm._f)(l.id, l.channel_id),
        T = (0, nu.A)(l),
        k = (0, np.fF)(l);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (ng.A.isBlockedForMessage(l) ? (n = en.t["+FcYM/"]) : ng.A.isIgnoredForMessage(l) && (n = en.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nD, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(nE.A, {
                compact: a,
                className: c()(r, { [nb.M1]: (0, nA.ec)(l), [nb.XN]: u, [nb._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nR.A)(l, s, g, m, a),
                childrenHeader: (0, nv.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nN.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: v,
                    hasBailedAst: _,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: C,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: f,
                    inlineEmbedMedia: x,
                    renderEmbeds: j,
                    gifAutoPlay: E,
                    poll: T,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: O,
                    ctaButtonType: D,
                }),
                childrenExecutedCommand: (0, nI.A)(l, s, a),
                childrenMessageContent: (0, ny.A)(t, y),
                childrenSystemMessage: (0, n_.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != R && l.hasFlag(ef.pr7.HAS_THREAD),
                hasReply: l.type === ef.lAJ.REPLY,
                isSystemMessage: (0, nf.A)(l),
                messageRef: b,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": en.intl.string(en.t.BAB0yK),
            });
});
function nD(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(nE.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nM.A, {
            compact: s,
            className: nL.L9,
            iconNode: (0, i.jsx)(nr.P, { size: "md", color: "currentColor", className: nL.Q6 }),
            children: (0, i.jsx)("div", { className: nL.Fo, children: en.intl.format(l, { count: n }) }),
        }),
    });
}
var nT = n(58703),
    nk = n(373423);
function nG(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(_.D, {
        className: c()(nk.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(eL.y, { type: eL.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(ec.E, { variant: "text-xs/medium", className: nk.Q, children: en.intl.string(en.t.k5WiPf) }),
    });
}
var nU = n(143236),
    nF = n(181079),
    nP = n(567035),
    nw = n(455234),
    nH = n(695633),
    nK = n(152007),
    nz = n(607508),
    nB = n(594061),
    nX = n(617617),
    nJ = n(95701),
    nV = n(808728),
    nY = n(232835),
    nq = n(711014),
    nZ = n(543465),
    n$ =
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
    nW = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class nQ extends nU.EventEmitter {
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
                        (A()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = n0(e, !1);
                if (t.messages.some(ew.$r)) return eG.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t5.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, ne.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? n0(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tD.h.wait(() =>
            tJ.ack(
                t,
                {
                    section: ef.JJy.INBOX,
                    object: ef.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: ef.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              tT.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tJ.ack(
            e.channelId,
            { section: ef.JJy.INBOX, object: ef.ZSU.UNDO_MARK_AS_READ, objectType: ef.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tD.h.wait(() => (0, nP.A)([e], ef.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tH().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tJ.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tH().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, nB.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nB.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nZ.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nK.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t5.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        eG.A.clearChannel(e.channelId);
        let t = eG.A.fetchMessages({
            channelId: e.channelId,
            limit: ef.EMb,
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
                            A()("messages" === e.type, "channel cannot change type");
                            let n = n0(e, !0);
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
                                A()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...n0(e, !0),
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
function n0(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nY.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    nt.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= nt.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = nt.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function n1() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nX.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = ez.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            ez.A.getSortedPrivateChannels().forEach((n) => n3(e, t, null, n.id)),
            nq.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nV.Ay.getSelectableChannelIds(n),
                    l = nH.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    n3(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) n3(e, t, n, s);
                });
            }),
            tH().sortBy(t, (e) => e.sortOrder)),
        l = tH()
            .uniq(s.map((e) => e.guildId))
            .filter(ne.Vq);
    return (
        tD.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function n3(e, t, n, s) {
    if (null == s) return;
    let l = ez.A.getChannel(s);
    if (null == l || (!nJ.Le.has(l.type) && nZ.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === e3.Ay.getMentionCount(s)) return;
    } else if (!(0, nw.Y)(l) && 0 === e3.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !F.A.can(ef.xBc.READ_MESSAGE_HISTORY, l)) || (0, eP.qR)(l)) return;
    let a = e3.Ay.ackMessageId(s);
    if (null == a) {
        let e = et.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = nt.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = e3.Ay.getOldestUnreadMessageId(s),
        r = e3.Ay.lastMessageId(s),
        d = e3.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || nt.default.compare(a, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: a,
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
            let s = ez.A.getChannel(t);
            if (nF.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (e3.Ay.getMentionCount(t) > 0) return e3.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = nt.default.extractTimestamp(n);
                if (Date.now() - e > n7) return 8;
                if (Date.now() - e > n2) return 6;
            }
            if (s.isThread()) {
                let e = (0, nz.l)(s);
                return e === nn.CP.ALL_MESSAGES ? 4 : e === nn.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nZ.Ay.getChannelMessageNotifications(e, t),
                    s = n === ef.orn.NULL ? nZ.Ay.getMessageNotifications(e) : n;
                return s === ef.orn.ALL_MESSAGES ? 4 : s === ef.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, eP.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n2 = 2 * w.A.Millis.DAY,
    n7 = 10 * w.A.Millis.DAY;
var n6 = n(357242);
let n8 = { left: 4, right: -12 },
    n4 = [ef.lAJ.THREAD_CREATED];
function n5(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: a } = e,
        d = (0, E.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), a(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, a, n.id],
        ),
        o = n4.includes(n.type);
    return (0, i.jsx)(q.vN, {
        offset: n8,
        children: (0, i.jsxs)("div", {
            className: n6.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nG, { className: n6.nn, onJump: (e) => a(e, n.id) }),
                (0, i.jsx)(nO, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: n6.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function n9(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = U.hH.useSetting(),
        a = 0 === t.messages.length || x()(t.messages[0].timestamp).isSame(x()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!a && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nT.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tK.A, { className: n6.yF, children: t }, t)), (d = x()(e.timestamp));
        }
        let t = null == c || (0, ni.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n5, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > nt.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: n6.Gr,
                        children: (0, i.jsx)(na.Q, {
                            variant: "primary",
                            text: `${en.intl.string(en.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(eL.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: n6.DZ, children: r })
    );
}
let se = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[l, a], d] = r.useState([0, 0]),
            c = t.deleted && l > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: o, size: u } = (0, tX.z)(
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
                    return c ? ((t = l), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(tz.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(st, { ...e }),
        });
    }),
    st = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, p.bG)([ez.A], () => ez.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tD.h.wait(() => {
                        (0, tJ.ack)(
                            t.channelId,
                            {
                                section: ef.JJy.INBOX,
                                object: ef.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: ef.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            (0, tV.zV)(ef.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, tY.pX)(ef.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        }
        function c() {
            l(t),
                (0, tV.zV)(ef.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !a.isNSFW();
        return (0, i.jsx)("div", {
            className: tl.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(e4, {
                    channel: a,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${a.id}`,
                    children: [
                        (0, i.jsxs)(eD.e, {
                            size: "sm",
                            className: e6.GC,
                            children: [(0, i.jsx)(t6, { channel: a }), (0, i.jsx)(sn, { ...e })],
                        }),
                        o ? (0, i.jsx)(t$, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(t1, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n9, { channel: t, channelRecord: a, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(nl, { channel: t, channelRecord: a, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function sn(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, tB.A)() && null != t.guildId;
    return (0, i.jsx)(eM.m, {
        text: a ? en.intl.string(en.t["5lLMhM"]) : en.intl.string(en.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(eT.K, {
            variant: "secondary",
            "aria-label": a ? en.intl.string(en.t["5lLMhM"]) : en.intl.string(en.t.e6RscS),
            size: "sm",
            icon: a ? tG.i : I.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tV.zV)(ef.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var ss = n(301328),
    sl = n(691503);
function sa(e) {
    var t, n, s, l, a, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [A, f] = (function (e) {
            let [t, n] = r.useState(() => new nQ(n1(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => n1());
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
                        r = n1();
                    0 === r.channels.length || t - a.current < 10 * w.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nQ(r, e)));
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
                    () => (nY.A.addChangeListener(t.reloadMessages), () => nY.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nZ.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nZ.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nK.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nK.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t5.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t5.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: x, channels: j } = A,
        { maybeLoadMore: S } = f,
        C = (0, p.bG)([tT.Ay], () => tT.Ay.messageGroupSpacing);
    (t = m),
        (n = A),
        (s = f),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == e) return;
            let a = l.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: d } = l.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + d) && l.scrollTo({ to: i.offsetTop });
        }),
        (l = A),
        (a = f),
        r.useEffect(() => {
            function e() {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                eJ._.subscribe(ef.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    eJ._.unsubscribe(ef.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (d = f),
        r.useEffect(() => {
            function e(e) {
                if ((0, eu.hasAnyModalOpen)()) return;
                let t = (0, tO.BF)(e)?.activeElement;
                (0, tO.Cw)(t) ||
                    (((0, tk.isMac)() || (0, tk.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
        r.useEffect(() => {
            P.default.track(ef.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                tD.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    tD.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, eU.Ay)(
            () => (
                eJ._.subscribe(ef.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead),
                () => {
                    eJ._.unsubscribe(ef.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead);
                }
            ),
        );
    let y = (0, D.A)("unreads", m);
    return 0 === j.length
        ? (0, i.jsx)(ts, {
              Icon: tg.K,
              header: en.intl.string(en.t["6XMM+D"]),
              tip: tb().os?.family === "OS X" ? en.intl.string(en.t.w9uDOW) : en.intl.string(en.t.BiUJC6),
          })
        : (0, i.jsx)(E.hD, {
              navigator: y,
              children: (0, i.jsx)(E.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(N.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: x === nW.Done ? void 0 : S,
                          className: c()(sl.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(si, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tH().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === n$.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tK.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: en.intl.string(en.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === n$.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tK.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: en.intl.string(en.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  se,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
                                                      toggle: r,
                                                      deleteChannel: a,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(j, f, o),
                              x === nW.Done ? null : (0, i.jsx)(eL.y, { className: sl.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function si(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: sl.d$,
        children: [
            (0, i.jsx)("div", { className: sl.cm, children: (0, i.jsx)(tg.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(y.D, {
                        className: sl.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: en.intl.string(en.t.vZPktJ),
                    }),
                    (0, i.jsx)(ec.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: en.intl.string(en.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sl.dh,
                        children: (0, i.jsx)(eO.$, {
                            variant: "primary",
                            size: "sm",
                            text: en.intl.string(en.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sr() {
    return (0, i.jsx)(ts, {
        Icon: tg.K,
        disableStars: !0,
        header: en.intl.string(en.t["KG/ynf"]),
        tip: en.intl.string(en.t.cvcKzX),
    });
}
function sd() {
    return (0, i.jsx)(tF, { onClick: () => eJ._.dispatch(ef.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sc = n(716030);
function so(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: l } = tf.A.useConfig({ location: "RecentsPopout" }),
        a = (0, tx.Sc)(),
        r = (0, th.bG)([z.A], () => z.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sc.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sc.qd,
                children: [
                    (0, i.jsx)(tg.K, { size: "md", color: "currentColor", className: sc.yH }),
                    (0, i.jsx)(y.D, {
                        className: sc.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: en.intl.string(en.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(tm.s, {
                        className: sc.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": en.intl.string(en.t["8k+6QY"]),
                        children: [(0, i.jsx)(su, { tab: t }), (0, i.jsx)(tC, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sc.YF,
                children: (0, i.jsxs)(tA.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sc.$H,
                    children: [
                        (0, i.jsx)(tA.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": en.intl.string(en.t.sRUdB8),
                            className: sc.Mf,
                            children: (0, i.jsx)("span", { className: sc.Gn, children: en.intl.string(en.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(tA.V.Item, {
                            "aria-label": en.intl.string(en.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sc.Mf,
                            children: (0, i.jsx)("span", { className: sc.Gn, children: en.intl.string(en.t.GRZF96) }),
                        }),
                        l
                            ? (0, i.jsx)(tA.V.Item, {
                                  "aria-label": en.intl.string(en.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sc.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sc.Gn,
                                      children:
                                          0 === r
                                              ? en.intl.string(en.t["2pAkDA"])
                                              : en.intl.formatToPlainString(en.t.I4fryG, { count: r }),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(tA.V.Item, {
                                  "aria-label": en.intl.string(en.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: sc.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sc.Gn,
                                      children: en.intl.string(en.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function su(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(sd, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tM, {}) : null;
}
var sh = n(285796),
    sg = n(151282),
    sm = n(199160),
    sA =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    sf = n(970244),
    sx = n(560502);
let sj = { offset: { left: 4, right: -12 } };
function sE(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sg.sy)();
    }, []);
    let n = (0, p.bG)([sm.A], () => sm.A.getScheduledMessagesForInbox()),
        s = (0, p.bG)([sm.A], () => sm.A.loading),
        l = (0, p.bG)([sm.A], () => sm.A.getMessagesPendingDeletion()),
        a = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, D.A)("scheduled-messages", d);
    return s
        ? (0, i.jsx)(eL.y, { className: tl.Lq })
        : 0 === a.length
          ? (0, i.jsx)(ts, { Icon: b.O, header: en.intl.string(en.t.aJQZfZ), tip: en.intl.string(en.t.rCN4pN) })
          : (0, i.jsx)(E.hD, {
                navigator: c,
                children: (0, i.jsx)(E.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(N.Ch, {
                            className: sx.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    sp,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: l.has(e.scheduledMessageId),
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
let sp = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: l } = e,
        a = (0, p.bG)([ez.A], () => ez.A.getChannel(n)),
        { isError: d, stateMessage: o } = (function (e) {
            switch (e) {
                case sA.SCHEDULED:
                    return { isError: !1, stateMessage: en.intl.string(en.t.Fn6Odn) };
                case sA.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: en.intl.string(en.t.v5O2dK) };
                case sA.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: en.intl.string(en.t.j8uIfG) };
                case sA.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: en.intl.string(en.t["w6zHX/"]) };
                case sA.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: en.intl.string(en.t.pflV7z) };
                case sA.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: en.intl.string(en.t.j8uIfG) };
                default:
                    (0, ne.xb)(e);
            }
        })(t.state),
        u = r.useCallback(() => {
            (0, sg.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sf.Re)();
                })
                .catch((e) => {
                    (0, sf.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        h = r.useCallback(() => {
            (0, sf.CI)({ scheduledMessage: t });
        }, [t]);
    return null == a
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: tl.aP,
                  children: [
                      (0, i.jsx)(e4, {
                          itemId: `header-${t.record.id}`,
                          channel: a,
                          onClick: (e) => {
                              (0, eK.iN)(a.id), l(e);
                          },
                          collapsed: !1,
                          children: (0, i.jsxs)(eD.e, {
                              size: "sm",
                              className: e6.GC,
                              children: [
                                  (0, i.jsx)(eM.m, {
                                      text: en.intl.string(en.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(eT.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: b.O,
                                          "aria-label": en.intl.string(en.t.SBcdAN),
                                          onClick: h,
                                      }),
                                  }),
                                  (0, i.jsx)(eM.m, {
                                      text: en.intl.string(en.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(eT.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sh.a,
                                          "aria-label": en.intl.string(en.t.O3sL8F),
                                          onClick: u,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          className: c()(sx.h5, d ? sx.z3 : void 0),
                          children: [
                              d ? (0, i.jsx)(S.E, { size: "xs" }) : (0, i.jsx)(b.O, { size: "xs" }),
                              (0, i.jsx)(ec.E, {
                                  variant: "text-xs/medium",
                                  color: d ? "text-feedback-critical" : "text-muted",
                                  children: d
                                      ? o
                                      : en.intl.formatToPlainString(en.t["CvHu/j"], {
                                            timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                        }),
                              }),
                          ],
                      }),
                      s
                          ? (0, i.jsx)(eL.y, { className: tl.Lq })
                          : (0, i.jsx)(
                                k.A,
                                {
                                    message: t.record,
                                    channel: a,
                                    className: tl.YD,
                                    compact: U.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sj,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sN = n(978313);
function sS(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: a,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: m,
        forLaterEnabled: A,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": en.intl.string(en.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sN.k, { [sN.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(so, { tab: s, setTab: l, closePopout: a }),
                children:
                    s === u.Y2.MENTIONS
                        ? (0, i.jsx)(tc, { onJump: r })
                        : A && s === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(ev, { closePopout: a })
                          : s === u.Y2.SCHEDULED
                            ? (0, i.jsx)(sE, { onJump: r })
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(sr, {}),
                                  children: (0, i.jsx)(sa, {
                                      onJump: r,
                                      showTutorial: d,
                                      setSeenTutorial: m,
                                      closePopout: a,
                                  }),
                              }),
            }),
        }),
    });
}

n.r(t), n.d(t, { default: () => sz });
var s,
    l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    d = n.n(r),
    c = n(292442),
    o = n(873298),
    u = n(305866),
    h = n(707554),
    m = n(756377),
    g = n(284009),
    x = n.n(g),
    A = n(562708),
    f = n(837381),
    j = n(17928),
    p = n(866665),
    y = n(689175),
    N = n(695366),
    v = n(661531),
    C = n(297264),
    I = n(825484),
    S = n(408278),
    E = n(789645),
    M = n(440971),
    R = n(22231),
    b = n(99677),
    _ = n(442433),
    L = n(148494),
    T = n(928039),
    k = n(793574),
    D = n(688810),
    O = n(139286),
    G = n(259678),
    F = n(939249),
    P = n(320448),
    w = n(778712),
    K = n(97808),
    U = n(812993),
    H = n(834730),
    z = n(406810),
    B = n(397244),
    J = n(714114),
    X = n(394871),
    Y = n(571694),
    V = n(47167),
    W = n(713654),
    Z = n(598104),
    $ = n(548118),
    q = n(616356),
    Q = n(734057),
    ee = n(71393),
    et = n(290863),
    en = n(573163),
    es = n(287809),
    el = n(650583),
    ea = n(375708),
    ei = n(545760);
let er = { top: 8, bottom: 8, left: -4, right: -4 };
function ed(e) {
    let {
            channel: t,
            children: n,
            status: s,
            onClick: l,
            collapsed: i = !1,
            mentionCount: r,
            onToggleCollapse: c,
            itemId: o,
        } = e,
        u = (0, f.rm)(o);
    return (0, a.jsxs)("div", {
        className: ei.N1,
        children: [
            s,
            (0, a.jsx)(G.vN, {
                offset: er,
                children: (0, a.jsxs)("div", {
                    className: d()(ei.ZO, { [ei.yZ]: i }),
                    ...u,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                            e.preventDefault(), l(e);
                            return;
                        }
                        null != c && ((e.key === el.dh.ARROW_RIGHT && i) || (e.key === el.dh.ARROW_LEFT && !i)) && c();
                    },
                    children: [
                        (0, a.jsx)(F.D, {
                            className: ei.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(ec, { channel: t }),
                        }),
                        (0, a.jsx)(P._, { className: ei.ai, size: "xxs" }),
                        (0, a.jsx)(eo, { channel: t, onClick: l, mentionCount: r }),
                        n,
                    ],
                }),
            }),
        ],
    });
}
function ec(e) {
    let { channel: t } = e,
        n = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id));
    return null != n
        ? (0, a.jsx)($.Ay, { className: ei.Kk, guild: n, size: $.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, a.jsx)(Z.A, { channel: t, size: w._3.SIZE_32, "aria-hidden": !0 })
          : (0, a.jsx)(K.eu, { size: w._3.SIZE_32, src: (0, Y.Y)(t), "aria-hidden": !0 });
}
function eo(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        i = (0, V.Ay)(t, !1),
        r = (0, j.bG)([en.Ay], () => en.Ay.getIsMentionLowImportance(t.id)),
        d = (0, W.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ei.yP,
        children: [
            (0, a.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ei.lz,
                children: (0, a.jsxs)(F.D, {
                    className: ei.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, a.jsx)(d, { className: ei.j1, size: "xxs" }),
                        (0, a.jsx)("span", { className: ei.je, children: i }),
                        null != s && s > 0
                            ? (0, a.jsx)("div", {
                                  className: ei.qS,
                                  children: (0, a.jsx)(U.hV, {
                                      count: s,
                                      color: r
                                          ? v.A.colors.BACKGROUND_MOD_STRONG.css
                                          : v.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, a.jsx)(H.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, a.jsx)(eu, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eu(e) {
    let { channel: t, onClick: n } = e,
        s = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        l = (0, j.bG)([Q.A], () => Q.A.getChannel(t.parent_id)),
        i = (0, V.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eh, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(F.D, { className: d()(ei.je, ei.J5), onClick: n, children: r }) : null;
}
function eh(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: i,
        } = (0, j.cf)([es.default, et.A, q.A], () => {
            let e = es.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? et.A.getStatus(e.id) : null,
                activities: null != e ? et.A.getActivities(e.id) : null,
                applicationStream: null != e ? q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, J.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: i, voiceChannel: r })
        ? (0, a.jsx)(X.A, { user: n, activities: l, applicationStream: i, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function em(e) {
    let { type: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: ei.h5,
        children: [
            "error" === t
                ? (0, a.jsx)(N.E, { size: "xs", color: "currentColor", className: ei.ik })
                : (0, a.jsx)(z.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(H.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var eg = n(642213),
    ex = n(636922),
    eA = n(885386),
    ef = n(576705),
    ej = n(927813),
    ep = n(269073),
    ey = n(164684),
    eN = n(704456),
    ev = n(85109);
n(321073);
var eC = n(403362),
    eI = n(216623);
function eS(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return ev.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return ev.A.getMessageReminders();
        default:
            return ev.A.getSavedMessages();
    }
}
function eE(e) {
    return eS(e).map((e) => e.saveData);
}
var eM = n(606096),
    eR = n(803306),
    eb = n(320095),
    e_ = n(963852),
    eL = n(20851),
    eT = n(889227),
    ek = n(192308),
    eD = n(158045),
    eO = n(403581),
    eG = n(738188),
    eF = n(404374),
    eP = n(611371),
    ew = n(465794),
    eK = n(202541),
    eU = n(603037);
function eH(e) {
    let { text: t, isAtLimit: n, analyticsSection: s } = e;
    return (0, a.jsxs)("div", {
        className: eU.Zj,
        children: [
            n
                ? (0, a.jsx)(eG.WarningIcon, { size: "md", color: "currentColor", className: eU.QW })
                : (0, a.jsx)(eO.t, { size: "md", color: eF.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(H.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: eU.tD,
                children: [t, " ", (0, a.jsx)(eP.A, { className: eU.TN })],
            }),
            (0, a.jsx)(ew.A, {
                size: "sm",
                variantOverride: n ? void 0 : "primary",
                subscriptionTier: eK.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: s },
            }),
        ],
    });
}
var ez = n(652215);
function eB(e) {
    var t, s, l, r;
    let d,
        { isReminder: c, limit: o, isAtLimit: u = !1 } = e,
        { analyticsLocations: h } = (0, D.Ay)(),
        m = i.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await n.e("422540").then(n.bind(n, 530951));
                return (t) => (0, a.jsx)(e, { ...t, isReminder: c, limit: o, analyticsLocations: h });
            });
        }, [o, c, h]);
    return (0, a.jsx)(eH, {
        text:
            ((t = c),
            (s = o),
            (l = u),
            (r = m),
            (d = (0, eD.Dd)(eK.PremiumTypes.TIER_2)),
            null == s
                ? ea.intl.format(ea.t.qXh3fo, { nitroTierName: d, onClick: r })
                : l
                  ? ea.intl.format(t ? ea.t.MYFohD : ea.t.FNFCVJ, {
                        nitroTierName: d,
                        onClick: r,
                        premiumMax: t ? 50 : 200,
                    })
                  : ea.intl.formatToPlainString(t ? ea.t["W+ZaoS"] : ea.t["0hoV2D"], { nitroTierName: d })),
        isAtLimit: u,
        analyticsSection: ez.JJy.FOR_LATER_POPOUT_UPSELL,
    });
}
n(811233);
var eJ = n(897781),
    eX = n(936037),
    eY = n(144273);
function eV(e) {
    let { type: t } = e,
        n = t === m.Yf.REMINDER,
        s = ea.intl.string(n ? ea.t.aUXxzT : ea.t["2pAkDA"]);
    return (0, ep.lA)("ForLaterIntro")
        ? (0, a.jsx)("div", {
              className: eJ.kL,
              children: (0, a.jsxs)("div", {
                  className: eJ.vW,
                  children: [
                      (0, a.jsx)("img", { src: eX, className: eJ.Tn, alt: s }),
                      (0, a.jsx)(C.D, {
                          className: eJ.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(n ? ea.t["5Iw19e"] : ea.t["93WOd1"]),
                      }),
                      (0, a.jsx)("div", {
                          className: eJ.rf,
                          children: (0, a.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.format(n ? ea.t["E+qms7"] : ea.t.legvTg, {
                                  itemName: ea.intl.string(n ? ea.t.mJ3P0N : ea.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, a.jsx)(eW, { isReminder: n }),
                  ],
              }),
          })
        : (0, a.jsx)("div", {
              className: eJ.kL,
              children: (0, a.jsxs)("div", {
                  className: eJ.vW,
                  children: [
                      (0, a.jsx)("img", { src: eX, className: eJ.Tn, alt: s }),
                      (0, a.jsx)(C.D, {
                          className: eJ.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(ea.t.w4DRbZ),
                      }),
                      (0, a.jsx)("div", {
                          className: eJ.rf,
                          children: (0, a.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      }),
                      (0, a.jsx)(eB, { isReminder: n }),
                  ],
              }),
          });
}
function eW(e) {
    let { isReminder: t } = e,
        n = i.useMemo(() => {
            let e = new eT.A({ id: "313338", username: ea.intl.string(ea.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eR.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eY.A),
                [ea.intl.string(ea.t["h+KPxy"]), ea.intl.string(ea.t["63EVpI"]), ea.intl.string(ea.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eb.rh)({
                            ...(0, e_.Ay)({ channelId: "1338", content: n }),
                            state: ez.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (l.author = t ?? e), l;
                    },
                )
            );
        }, []);
    return (0, a.jsx)("div", {
        className: eJ.qJ,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: eJ.DZ,
            children: n.map((e, n) =>
                (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)(eL.A, {
                                message: e,
                                author: {
                                    nick: e.author.username,
                                    colorString: null,
                                    colorStrings: null,
                                    authorId: e.author.id,
                                },
                                isGroupStart: 0 === n,
                                disableInteraction: !0,
                            }),
                            0 === n
                                ? (0, a.jsxs)("div", {
                                      className: eJ.MK,
                                      children: [
                                          (0, a.jsx)(eZ, {
                                              icon: eM.BookmarkIcon,
                                              label: ea.intl.string(ea.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(eZ, {
                                              icon: z.ClockIcon,
                                              label: ea.intl.string(ea.t.mJ3P0N),
                                              highlighted: t,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    e.id,
                ),
            ),
        }),
    });
}
function eZ(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(eJ.KT, { [eJ.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function e$(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, eN.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eN.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(em, { type: l ? "error" : "normal", text: s });
}
var eq = n(294002),
    eQ = n(414676);
let e0 = "ForLaterPopout",
    e1 = "Bookmarks",
    e3 = "Reminders";
function e2(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = i.useState(() => eE(e)),
                s = i.useRef(ev.A.getIsStale());
            return (
                i.useEffect(() => {
                    let t = ev.A.getLastChanged();
                    function l() {
                        let l = ev.A.getLastChanged();
                        if (t !== l) {
                            if (((t = l), s.current && !ev.A.getIsStale())) {
                                (s.current = !1), n(eE(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eS(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ev.A.addChangeListener(l),
                        () => {
                            ev.A.removeChangeListener(l);
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    (0, eI.AX)();
                }, []),
                (0, j.yK)([ev.A], () => t.map((e) => ev.A.getSavedMessage(e.channelId, e.messageId)).filter(eC.Vq))
            );
        })(n),
        l = n === m.Yf.REMINDER,
        r = (0, ep.oG)(e0, l),
        d = (0, ep.dR)(e0),
        c = d && r > 0 && s.length >= r,
        o = d && s.length > 0,
        { analyticsLocations: u } = (0, D.Ay)(k.A.FOR_LATER_POPOUT);
    (0, O.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                tab_type: n,
                total_count: s.length,
                overdue_count: ev.A.getOverdueMessageReminderCount(),
                nitro_upsell_bar_shown: o && !c,
                nitro_roadblock_upsell_bar_shown: o && c,
            },
        },
        {},
        [s.length, o, c],
    );
    let h = i.useRef(null),
        g = (0, T.A)("for-later", h);
    (0, eg.xN)(h), (0, eg.yW)(n === m.Yf.BOOKMARK ? e1 : e3);
    let [x, p] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => p(new Date()), ej.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, a.jsx)(D.f5, { value: u, children: (0, a.jsx)(eV, { type: n }) })
        : (0, a.jsx)(D.f5, {
              value: u,
              children: (0, a.jsxs)("div", {
                  className: eq.MY,
                  children: [
                      (0, a.jsx)(f.hD, {
                          navigator: g,
                          children: (0, a.jsx)(f.PR, {
                              children: (e) => {
                                  let { ref: n, ...l } = e;
                                  return (0, a.jsx)(y.Ch, {
                                      ref: (e) => {
                                          (h.current = e), (n.current = e?.getScrollerNode() ?? null);
                                      },
                                      className: eQ.XG,
                                      ...l,
                                      children: s.map((e) =>
                                          (0, a.jsx)(
                                              e7,
                                              { savedMessage: e, closePopout: t, throttledNow: x },
                                              e.saveData.messageId,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                      o
                          ? (0, a.jsx)("div", {
                                className: eq.fH,
                                children: (0, a.jsx)(eB, { isReminder: l, limit: r, isAtLimit: c }),
                            })
                          : null,
                  ],
              }),
          });
}
function e7(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, eN.vr)(t),
        r = i.useCallback(
            async (e) => {
                await (0, eN.le)(t, l),
                    e.shiftKey || n(),
                    L.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e3 : e1);
            },
            [n, t, l],
        ),
        c = (0, j.bG)(
            [ef.A],
            () => !!(l?.type === ez.rbe.UNKNOWN || l?.isPrivate()) || ef.A.can(ez.xBc.VIEW_CHANNEL, l),
        );
    return null != l && null != t.message && c
        ? (0, a.jsxs)("div", {
              className: eQ.aP,
              children: [
                  (0, a.jsx)(ed, {
                      itemId: `header-${t.message.id}`,
                      channel: l,
                      onClick: (e) => {
                          r(e), n();
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(e$, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(I.e, {
                          size: "sm",
                          className: ei.GC,
                          children: (0, a.jsx)(e6, { savedMessage: t, jumpToMessage: r, throttledNow: s }),
                      }),
                  }),
                  (0, a.jsx)(
                      ex.A,
                      {
                          message: t.message,
                          channel: l,
                          className: eQ.YD,
                          compact: eA.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d()(eQ.aP, eq.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: eq.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: eq.Bx,
                              children: (0, a.jsx)(N.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, a.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(I.e, {
                      size: "sm",
                      className: ei.GC,
                      children: (0, a.jsx)(p.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(S.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: E.P,
                              onClick: () => (0, ey.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e6(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: l } = e;
    x()(null != t.message, "Saved message must be cached for For Later action buttons");
    let i = ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
        r = null != t.saveData.dueAt && l > t.saveData.dueAt,
        d = ea.intl.string(r ? ea.t.GtBCnz : ea.t.vrbqs1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, a.jsx)(p.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, a.jsx)(S.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? M.R : R.PencilIcon,
                          onClick: (e) =>
                              (0, _.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("275133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          label: ea.intl.string(r ? ea.t.GtBCnz : ea.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                    size: "sm",
                    icon: b.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, a.jsx)(p.m, {
                text: i,
                ariaHidden: !0,
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": i,
                    size: "sm",
                    icon: E.P,
                    onClick: () => (0, ey.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e8 = n(702841),
    e4 = n(912592),
    e5 = n(890856),
    e9 = n(761508),
    te = n(674470),
    tt = n(214947),
    tn = n(711950),
    ts = n(322387),
    tl = n(912309),
    ta = n(174459),
    ti = n(198476);
function tr(e) {
    let { closePopout: t } = e,
        n = (0, tl.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, a.jsxs)(F.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: ti.b,
            onClick: () => {
                ta.default.track(ez.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: ts.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tn.A.transitionToSection(ez.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, a.jsx)(tt.$, { size: "xs", color: "currentColor" }),
                (0, a.jsx)(U.hV, { count: n, color: v.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var td = n(980707),
    tc = n(477782),
    to = n(922016),
    tu = n(783977),
    th = n(378939),
    tm = n(309010),
    tg = n(409686);
function tx(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([Q.A, tm.Ay], () => Q.A.getChannel(tm.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([tg.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tg.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(td.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(tc.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    th.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(tc.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    th.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(tc.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          th.A.setGuildFilter({
                              guildFilter: r === ez.KE7.THIS_SERVER ? ez.KE7.ALL_SERVERS : ez.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === ez.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tA() {
    let e = i.useRef(null);
    return (0, a.jsx)(to.Y, {
        targetElementRef: e,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tx, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(S.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: tu.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tf = n(481613),
    tj = n.n(tf),
    tp = n(621466),
    ty = n(289873),
    tN = n(821609),
    tv = n(228366),
    tC = n(964486),
    tI = n(775602),
    tS = n(625494),
    tE = n(723702),
    tM = n(303727),
    tR = n(435842);
function tb(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, a.jsxs)("div", {
        className: tR.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tR.zc,
                children: [
                    (0, a.jsx)(t, { color: "currentColor", size: "custom", className: tR.Kk, width: 36, height: 36 }),
                    l ? null : (0, a.jsx)(tM.A, { className: tR.uf }),
                ],
            }),
            (0, a.jsx)(C.D, { className: tR.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(H.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(H.E, {
                              tag: "span",
                              className: tR.PP,
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
var t_ = n(862482),
    tL = n(143838),
    tT = n(640238);
function tk(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        t(),
            ta.default.track(ez.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tD, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: tL.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tD(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(tT.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: t_.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(H.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tO = n(435558),
    tG = n.n(tO),
    tF = n(749314),
    tP = n(296704),
    tw = n(311283),
    tK = n(717421),
    tU = n(933832),
    tH = n(334738),
    tz = n(95561),
    tB = n(976860),
    tJ = n(847374),
    tX = n(907847);
function tY(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(F.D, {
            className: tX.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tJ.a, { className: d()(tX.ai, { [tX.yZ]: t }), size: "xs" }),
        }),
    });
}
var tV = n(585517);
let tW = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tZ = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function t$(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tK.z)(() => (t ? tW : tZ), "respect-motion-settings", []),
        d = i.useRef(!0);
    return (
        i.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? r({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: tI.Ay.useReducedMotion,
                      })
                    : r({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tI.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && r({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, r]),
        (0, a.jsx)(tP.animated.div, {
            className: tV.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tq = n(782603),
    tQ = n(461678),
    t0 = n(914703);
function t1(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(to.Y, {
        targetElementRef: n,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(t0.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, a.jsx)(tQ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: ez.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, a.jsx)(S.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: tq.BellIcon,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var t3 = n(350527),
    t2 = n(218152),
    t7 = n(970278),
    t6 = n(747926),
    t8 = n(935208),
    t4 = n(37411),
    t5 = n(278489);
function t9(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [t7.A, Q.A],
            () =>
                tG()(t7.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t8.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return Q.A.getChannel(t);
                    })
                    .filter(eC.Vq)
                    .sort((e, t) => t8.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        r = i.useCallback((e, t) => {
            (0, t6.JA)(e, t, t4.H9.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                tv.h.wait(() => {
                    (0, tH.ack)(
                        t.channelId,
                        {
                            section: ez.JJy.INBOX,
                            object: ez.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: ez.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, a.jsx)("div", {
            className: t5.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    t2.Cp,
                    { channel: n, children: (0, a.jsx)(t3.Ay, { className: t5.u, threadId: e.id, goToThread: r }) },
                    e.id,
                ),
            ),
        })
    );
}
var ne = n(536637),
    nt = n.n(ne),
    nn = n(123292),
    ns = n(857069),
    nl = n(33358),
    na = n(384231),
    ni = n(207133),
    nr = n(704413),
    nd = n(9842),
    nc = n(994500),
    no = n(5095),
    nu = n(143413),
    nh = n(763754),
    nm = n(467073),
    ng = n(491182),
    nx = n(860227),
    nA = n(70268),
    nf = n(375199),
    nj = n(824556),
    np = n(715628),
    ny = n(752636),
    nN = n(352043),
    nv = n(268719),
    nC = n(234957),
    nI = n(888675),
    nS = n(845806),
    nE = n(13673);
let nM = i.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: i = !1,
            className: r,
            onContextMenu: c,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        m = ez.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([nd.A], () => nd.A.getMessageByReference(m)),
        x = (0, j.bG)([Q.A], () =>
            l.type === ez.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED
                ? Q.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = eA.X6.useSetting(),
        f = eA.hD.useSetting(),
        p = eA.rs.useSetting(),
        y = eA.kt.useSetting(),
        N = (0, na.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        v = (0, ni.A)(s?.id),
        { disableReactionCreates: C } = (0, nm.A)(s),
        {
            content: I,
            hasSpoilerEmbeds: S,
            hasBailedAst: E,
        } = (0, nf.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        M = (0, nh.Ay)(l),
        R = (0, j.bG)(
            [Q.A],
            () => l.hasFlag(ez.pr7.HAS_THREAD) && Q.A.getChannel(t8.default.castMessageIdAsChannelId(l.id)),
        ),
        b = l.type === ez.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED && null != x,
        _ = !b && void 0 === n,
        L = (0, nj.A)({ message: l, channel: s, announcementEnabled: _ }),
        T = (0, nl.P)(l),
        k = (0, no._f)(l.id, l.channel_id),
        D = (0, nr.A)(l),
        O = (0, nx.fF)(l);
    return b
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (nc.A.isBlockedForMessage(l) ? (n = ea.t["+FcYM/"]) : nc.A.isIgnoredForMessage(l) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(nR, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(ng.A, {
                compact: i,
                className: d()(r, { [nE.M1]: (0, eb.ec)(l), [nE.XN]: u, [nE._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nC.A)(l, s, m, g, i),
                childrenHeader: (0, ny.A)({ ...t, author: M, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(nA.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: S,
                    hasBailedAst: E,
                    compact: i,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: C,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: p,
                    gifAutoPlay: y,
                    poll: D,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: v,
                    enabledContentHarmTypeFlags: T,
                    ctaButtonType: k,
                }),
                childrenExecutedCommand: (0, nv.A)(l, s, i),
                childrenMessageContent: (0, np.A)(t, I),
                childrenSystemMessage: (0, nN.A)(t),
                onContextMenu: c,
                onClick: o,
                hasThread: !1 !== h && null != R && l.hasFlag(ez.pr7.HAS_THREAD),
                hasReply: l.type === ez.lAJ.REPLY,
                isSystemMessage: (0, nu.A)(l),
                messageRef: L,
                author: M,
                "aria-labelledby": O,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function nR(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(ng.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nI.A, {
            compact: s,
            className: nS.L9,
            iconNode: (0, a.jsx)(E.P, { size: "md", color: "currentColor", className: nS.Q6 }),
            children: (0, a.jsx)("div", { className: nS.Fo, children: ea.intl.format(l, { count: n }) }),
        }),
    });
}
var nb = n(58703),
    n_ = n(222831);
function nL(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(F.D, {
        className: d()(n_.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, a.jsx)(ty.y, { type: ty.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(H.E, { variant: "text-xs/medium", className: n_.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nT = n(143236),
    nk = n(323073),
    nD = n(181079),
    nO = n(567035),
    nG = n(679164),
    nF = n(455234),
    nP = n(863005),
    nw = n(152007),
    nK = n(607508),
    nU = n(594061),
    nH = n(617617),
    nz = n(95701),
    nB = n(808728),
    nJ = n(232835),
    nX = n(711014),
    nY = n(543465),
    nV =
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
class nZ extends nT.EventEmitter {
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
                        (x()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = n$(e, !1);
                if (t.messages.some(nG.$r)) return L.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t7.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eC.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? n$(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tv.h.wait(() =>
            tH.ack(
                t,
                {
                    section: ez.JJy.INBOX,
                    object: ez.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: ez.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              tI.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tH.ack(
            e.channelId,
            { section: ez.JJy.INBOX, object: ez.ZSU.UNDO_MARK_AS_READ, objectType: ez.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tv.h.wait(() => (0, nO.A)([e], ez.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tG().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tH.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tG().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, nU.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nU.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !nY.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nw.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t7.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        L.A.clearChannel(e.channelId);
        let t = L.A.fetchMessages({
            channelId: e.channelId,
            limit: ez.EMb,
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
                            x()("messages" === e.type, "channel cannot change type");
                            let n = n$(e, !0);
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
                                x()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...n$(e, !0),
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
function n$(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nJ.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    t8.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t8.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = t8.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function nq() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nH.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = Q.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            Q.A.getSortedPrivateChannels().forEach((n) => nQ(e, t, null, n.id)),
            nX.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nB.Ay.getSelectableChannelIds(n),
                    l = nP.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nQ(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nQ(e, t, n, s);
                });
            }),
            tG().sortBy(t, (e) => e.sortOrder)),
        l = tG()
            .uniq(s.map((e) => e.guildId))
            .filter(eC.Vq);
    return (
        tv.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nQ(e, t, n, s) {
    if (null == s) return;
    let l = Q.A.getChannel(s);
    if (null == l || (!nz.Le.has(l.type) && nY.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === en.Ay.getMentionCount(s)) return;
    } else if (!(0, nF.Y)(l) && 0 === en.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ef.A.can(ez.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = en.Ay.ackMessageId(s);
    if (null == a) {
        let e = ee.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = t8.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = en.Ay.getOldestUnreadMessageId(s),
        r = en.Ay.lastMessageId(s),
        d = en.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || t8.default.compare(a, r) >= 0) return;
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
            let s = Q.A.getChannel(t);
            if (nD.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (en.Ay.getMentionCount(t) > 0) return en.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t8.default.extractTimestamp(n);
                if (Date.now() - e > n1) return 8;
                if (Date.now() - e > n0) return 6;
            }
            if (s.isThread()) {
                let e = (0, nK.l)(s);
                return e === t4.CP.ALL_MESSAGES ? 4 : e === t4.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nY.Ay.getChannelMessageNotifications(e, t),
                    s = n === ez.orn.NULL ? nY.Ay.getMessageNotifications(e) : n;
                return s === ez.orn.ALL_MESSAGES ? 4 : s === ez.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nk.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n0 = 2 * ej.A.Millis.DAY,
    n1 = 10 * ej.A.Millis.DAY;
var n3 = n(743373);
let n2 = { left: 4, right: -12 },
    n7 = [ez.lAJ.THREAD_CREATED];
function n6(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: r } = e,
        d = (0, f.rm)(n.id ?? ""),
        c = i.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), r(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, r, n.id],
        ),
        o = n7.includes(n.type);
    return (0, a.jsx)(G.vN, {
        offset: n2,
        children: (0, a.jsxs)("div", {
            className: n3.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(nL, { className: n3.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(nM, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: n3.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function n8(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = eA.hH.useSetting(),
        i = 0 === t.messages.length || nt()(t.messages[0].timestamp).isSame(nt()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nb.i$)(e.timestamp, "LL");
            r.push((0, a.jsx)(tF.A, { className: n3.yF, children: t }, t)), (d = nt()(e.timestamp));
        }
        let t = null == c || (0, ns.A)(n, c, e);
        (c = e), r.push((0, a.jsx)(n6, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t8.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: n3.Gr,
                        children: (0, a.jsx)(nn.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(ty.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: n3.DZ, children: r })
    );
}
let n4 = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = i.useRef(null),
            [[l, r], d] = i.useState([0, 0]),
            c = t.deleted && l > 0;
        i.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: o, size: u } = (0, tK.z)(
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
                    return c ? ((t = l), (n = r) + (t - n) * e) : "auto";
                }),
            };
        return (0, a.jsx)(tP.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(n5, { ...e }),
        });
    }),
    n5 = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            r = (0, j.bG)([Q.A], () => Q.A.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == r ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tv.h.wait(() => {
                        (0, tH.ack)(
                            t.channelId,
                            {
                                section: ez.JJy.INBOX,
                                object: ez.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: ez.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == r || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eg.n4)(t.channelId, t.guildId, sn, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                L.A.trackJump(t.channelId, l, sn), (0, tB.pX)(ez.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e);
            }
        }
        function c() {
            l(t),
                (0, tz.zV)(ez.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, a.jsx)("div", {
            className: eQ.aP,
            children: (0, a.jsx)(h.F, {
                component: (0, a.jsxs)(ed, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(I.e, {
                            size: "sm",
                            className: ei.GC,
                            children: [(0, a.jsx)(t1, { channel: r }), (0, a.jsx)(n9, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, a.jsx)(tY, { collapsed: t.collapsed, onClick: c })
                            : (0, a.jsx)("div", { className: ei.Pt }),
                    ],
                }),
                children: (0, a.jsx)(t$, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, a.jsx)(n8, { channel: t, channelRecord: r, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, a.jsx)(t9, { channel: t, channelRecord: r, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n9(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, tw.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(S.K, {
            variant: "secondary",
            "aria-label": i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: i ? tL.i : tU.CheckmarkLargeIcon,
            onClick: function () {
                i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tz.zV)(ez.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var se = n(171664),
    st = n(173615);
let sn = "Inbox";
function ss(e) {
    var t, n, s, l, r, c;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = i.useRef(null),
        x = (0, T.A)("unreads", g);
    (0, eg.xN)(g), (0, eg.yW)(sn);
    let [A, p] = (function (e) {
            let [t, n] = i.useState(() => new nZ(nq(), e)),
                [s, l] = i.useState(!1),
                a = i.useRef(Date.now()),
                [r, d] = i.useState(() => nq());
            i.useEffect(() => {
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
                i.useEffect(() => {
                    if (null == r || r.channels.length > 0 || s) return;
                    let t = Date.now(),
                        i = nq();
                    0 === i.channels.length || t - a.current < 10 * ej.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nZ(i, e)));
                }, [r, s, e]);
            let c = i.useRef(t);
            return (
                i.useLayoutEffect(() => {
                    c.current = t;
                }),
                i.useLayoutEffect(() => {
                    r?.channels, r?.loadState, c.current.maybeLoadMore();
                }, [r?.channels, r?.loadState]),
                i.useEffect(
                    () => (nJ.A.addChangeListener(t.reloadMessages), () => nJ.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                i.useEffect(
                    () => (
                        nY.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nY.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        nw.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nw.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        t7.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t7.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [r, t]
            );
        })(g),
        { loadState: N, channels: v } = A,
        { maybeLoadMore: C } = p,
        I = (0, j.bG)([tI.Ay], () => tI.Ay.messageGroupSpacing);
    return ((t = g),
    (n = A),
    (s = p),
    i.useLayoutEffect(() => {
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
    (r = p),
    i.useEffect(() => {
        function e() {
            let e = l.channels.find((e) => !e.collapsed);
            null != e && r.markChannelRead(e);
        }
        return (
            tS._.subscribe(ez.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tS._.unsubscribe(ez.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (c = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, ek.hasAnyModalOpen)()) return;
            let t = (0, tp.BF)(e)?.activeElement;
            (0, tp.Cw)(t) ||
                (((0, tE.isMac)() || (0, tE.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    c.undoMarkChannelRead());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [c]),
    i.useEffect(
        () => (
            tv.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tv.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tC.Ay)(
        () => (
            tS._.subscribe(ez.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tS._.unsubscribe(ez.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === v.length)
        ? (0, a.jsx)(tb, {
              Icon: e4.InboxIcon,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: tj().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, a.jsx)(f.hD, {
              navigator: x,
              children: (0, a.jsx)(f.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, a.jsxs)(y.Ch, {
                          ref: (e) => {
                              (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === nW.Done ? void 0 : C,
                          className: d()(eQ.XG, `group-spacing-${I}`),
                          children: [
                              u ? (0, a.jsx)(sl, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tG().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nV.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nV.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, a.jsx)(
                                                  n4,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
                                                      toggle: r,
                                                      deleteChannel: i,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(v, p, o),
                              N === nW.Done ? null : (0, a.jsx)(ty.y, { className: st.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sl(e) {
    let { setSeenTutorial: t } = e;
    return (0, a.jsxs)("div", {
        className: st.d$,
        children: [
            (0, a.jsx)("div", {
                className: st.cm,
                children: (0, a.jsx)(e4.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(C.D, {
                        className: st.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, a.jsx)(H.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: st.dh,
                        children: (0, a.jsx)(tN.$, {
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
function sa() {
    return (0, a.jsx)(tb, {
        Icon: e4.InboxIcon,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function si() {
    return (0, a.jsx)(tk, { onClick: () => tS._.dispatch(ez.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sr = n(113164);
function sd(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, ep.jv)("RecentsPopout"),
        i = (0, te.Sc)(),
        r = (0, e8.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: sr.wx,
        children: [
            (0, a.jsxs)("div", {
                className: sr.qd,
                children: [
                    (0, a.jsx)(e4.InboxIcon, { size: "md", color: "currentColor", className: sr.yH }),
                    (0, a.jsx)(C.D, {
                        className: sr.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(e5.s, {
                        className: sr.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, a.jsx)(sc, { tab: t }), (0, a.jsx)(tr, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: sr.YF,
                children: (0, a.jsxs)(e9.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sr.$H,
                    children: [
                        (0, a.jsx)(e9.V.Item, {
                            id: o.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: sr.Mf,
                            children: (0, a.jsx)("span", { className: sr.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(e9.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: o.Y2.MENTIONS,
                            className: sr.Mf,
                            children: (0, a.jsx)("span", { className: sr.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        l
                            ? (0, a.jsx)(e9.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: o.Y2.BOOKMARKS,
                                  className: sr.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sr.Gn,
                                      children: ea.intl.string(ea.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        l
                            ? (0, a.jsx)(e9.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.aUXxzT),
                                  id: o.Y2.REMINDERS,
                                  className: sr.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sr.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t.aUXxzT)
                                              : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        i
                            ? (0, a.jsx)(e9.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: o.Y2.SCHEDULED,
                                  className: sr.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sr.Gn,
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
function sc(e) {
    let { tab: t } = e;
    return t === o.Y2.UNREADS ? (0, a.jsx)(si, {}) : t === o.Y2.MENTIONS ? (0, a.jsx)(tA, {}) : null;
}
var so = n(935063),
    su = n(475743),
    sh = n(517019),
    sm = n(356622);
let sg = { offset: { left: 4, right: -12 } },
    sx = "Recent Mentions";
function sA(e, t) {
    th.A.fetchRecentMentions({
        before: t,
        limit: ez.Ue3,
        guildId: null != e && tg.Ay.guildFilter !== ez.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tg.Ay.roleFilter,
        everyone: tg.Ay.everyoneFilter,
    });
}
function sf(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, T.A)("recents", n);
    (0, eg.xN)(n), (0, eg.yW)(sx);
    let l = (0, j.bG)([Q.A, tm.Ay], () => Q.A.getChannel(tm.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([tg.Ay], () => ({
            messages: tg.Ay.getMentions(),
            hasMore: tg.Ay.hasMore,
            loading: tg.Ay.loading,
            guildFilter: tg.Ay.guildFilter,
            roleFilter: tg.Ay.roleFilter,
            everyoneFilter: tg.Ay.everyoneFilter,
        })),
        m = (0, su.Ay)(o),
        g = (0, su.Ay)(u),
        x = (0, su.Ay)(h);
    i.useEffect(() => {
        tg.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sA(l)
            : sA(l);
    }, [m, o, g, u, x, h, l]),
        (0, tC.Ay)(() => {
            r?.some(nG.$r) && (th.A.clearMentions(), sA(l));
        }),
        (0, tC.l0)(() => {
            th.A.truncateMentions(ez.Ue3);
        });
    let A = i.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sA(l, null != r && r.length > 0 ? r[r.length - 1].id : null);
    }, [d, c, l, r]);
    return null == r || (c && 0 === r.length)
        ? (0, a.jsx)("div", { className: eQ.Lq, children: (0, a.jsx)(ty.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(tb, { Icon: so.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(y.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eQ.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sj, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: eQ.Lq, children: (0, a.jsx)(ty.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sm.u,
                                            children: (0, a.jsx)(tN.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    sA(l, null != r && r.length > 0 ? r[r.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sj(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = Q.A.getChannel(t.channel_id);
    if (null == s || (0, nk.Jm)(s) || (0, nk.$v)(s)) return null;
    let l = sh.A.didAgree(s.getGuildId()),
        i = !!(0, nk.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: eQ.aP,
        children: [
            (0, a.jsx)(ed, {
                channel: s,
                onClick: (e) => (0, eg.KW)(t, sx, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(I.e, {
                    size: "sm",
                    className: ei.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(S.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: b.t,
                                onClick: (e) => (0, eg.KW)(t, sx, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(S.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tU.CheckmarkLargeIcon,
                                onClick: () => th.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                children: (0, a.jsx)(
                    ex.A,
                    {
                        message: t,
                        channel: s,
                        className: eQ.YD,
                        hideAccessories: i,
                        compact: eA.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sg,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sp = n(285796),
    sy = n(588975),
    sN = n(151282),
    sv = n(199160),
    sC = n(339350),
    sI = n(81369),
    sS = n(663341),
    sE = n(626891);
function sM() {
    return (0, a.jsx)("div", {
        className: sE.kL,
        children: (0, a.jsxs)("div", {
            className: sE.vW,
            children: [
                (0, a.jsxs)("div", {
                    className: sE.zc,
                    children: [
                        (0, a.jsx)(sC.Q, {
                            color: "currentColor",
                            size: "custom",
                            className: sE.Kk,
                            width: 36,
                            height: 36,
                        }),
                        (0, a.jsx)(tM.A, { className: sE.uf }),
                    ],
                }),
                (0, a.jsx)(C.D, {
                    className: sE.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ea.intl.string(ea.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sE.rf,
                    children: (0, a.jsx)(H.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ea.intl.format(ea.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sE.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sE.MK,
                            children: [
                                (0, a.jsx)(sR, { icon: sI.H, label: ea.intl.string(ea.t["d3+iYs"]), highlighted: !1 }),
                                (0, a.jsx)(sR, { icon: sC.Q, label: ea.intl.string(ea.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sE.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sE.$f,
                                    children: (0, a.jsx)(sS.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, a.jsx)(H.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ea.intl.string(ea.t.fxxYiB),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function sR(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(sE.KT, { [sE.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sb = n(970244);
n(938796);
var s_ = n(408018),
    sL = n(451909),
    sT = n(205120),
    sk = n(91624);
function sD(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = eA.D_.getSetting(),
                s = (0, te.zs)(t.scheduledMessage),
                l = sL.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, s_.x7)(e ? l : s) };
        }),
        d = i.useCallback((e, t, n) => {
            r({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.scheduledMessage.flags,
        u = i.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sb.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sb.tu)(c), [c]);
    return (0, a.jsx)(sT.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sk.R3,
        children: sO,
    });
}
function sO(e) {
    return (0, a.jsx)(sk.Nr, { ...e });
}
n(853297);
var sG = n(757424);
let sF = "Scheduled Messages",
    sP = { offset: { left: 4, right: -12 } };
function sw(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sN.sy)();
    }, []);
    let n = (0, j.bG)([sv.A], () => sv.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sv.A], () => sv.A.loading),
        l = (0, j.bG)([sv.A], () => sv.A.getMessagesPendingDeletion()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        { limit: d, isUpgradable: c } = (0, te.yz)("ScheduledMessageInboxTab"),
        o = d > 0 && r.length >= d,
        u = i.useRef(null),
        h = (0, T.A)("scheduled-messages", u);
    return ((0, eg.xN)(u), (0, eg.yW)(sF), s)
        ? (0, a.jsx)("div", { className: eQ.Lq, children: (0, a.jsx)(ty.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sM, {})
          : (0, a.jsxs)("div", {
                className: sG.MY,
                children: [
                    (0, a.jsx)(f.hD, {
                        navigator: h,
                        children: (0, a.jsx)(f.PR, {
                            children: (e) => {
                                let { ref: n, ...s } = e;
                                return (0, a.jsx)(y.Ch, {
                                    className: eQ.XG,
                                    ref: (e) => {
                                        (u.current = e), (n.current = e?.getScrollerNode() ?? null);
                                    },
                                    ...s,
                                    children: r.map((e) =>
                                        (0, a.jsx)(
                                            sU,
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
                    }),
                    c ? (0, a.jsx)("div", { className: sG.fH, children: (0, a.jsx)(sK, { isAtLimit: o }) }) : null,
                ],
            });
}
function sK(e) {
    let { isAtLimit: t } = e,
        { analyticsLocations: s } = (0, D.Ay)(k.A.SCHEDULED_MESSAGES_LIST),
        l = i.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await n.e("13248").then(n.bind(n, 689219));
                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: s });
            });
        }, [s]),
        r = (0, eD.Dd)(eK.PremiumTypes.TIER_2);
    return (0, a.jsx)(eH, {
        text: t
            ? ea.intl.format(ea.t["2o4lgw"], { nitroTierName: r, onClick: l, premiumMax: 25 })
            : ea.intl.formatToPlainString(ea.t.WfTDdG, { nitroTierName: r }),
        isAtLimit: t,
        analyticsSection: ez.JJy.SCHEDULED_MESSAGES_LIST_UPSELL,
    });
}
let sU = i.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: l } = e,
        r = (0, j.bG)([Q.A], () => Q.A.getChannel(n)),
        { isError: c, stateMessage: o } = (0, te.Y8)(t.state),
        u = eA.hH.useSetting(),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => (0, sb.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sb.CI)({ scheduledMessage: t });
        }, [t]);
    return null == r
        ? null
        : (0, a.jsxs)(
              "div",
              {
                  className: eQ.aP,
                  children: [
                      (0, a.jsx)(ed, {
                          itemId: `header-${t.record.id}`,
                          channel: r,
                          onClick: (e) => (0, eg.n4)(r.id, r.guild_id, sF, () => l(e)),
                          collapsed: !1,
                          status: (0, a.jsx)(em, {
                              type: c ? "error" : "normal",
                              text: c
                                  ? o
                                  : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(I.e, {
                              size: "sm",
                              className: ei.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: R.PencilIcon,
                                          "aria-label": ea.intl.string(ea.t.ZXE1s4),
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: z.ClockIcon,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sp.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(ty.y, { className: eQ.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ex.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sG.Mg : eQ.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: sP,
                                            inlineEditor: h
                                                ? (0, a.jsx)(sD, {
                                                      scheduledMessage: t,
                                                      channel: r,
                                                      onCancel: () => m(!1),
                                                  })
                                                : void 0,
                                        },
                                        t.record.id,
                                    ),
                                    t.attachmentUploads.length > 0 &&
                                        (0, a.jsxs)("div", {
                                            className: d()(sG.PI, { [sG.oE]: u }),
                                            children: [
                                                (0, a.jsx)(sy.P, { size: "xs", color: "currentColor" }),
                                                (0, a.jsx)(H.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    children: ea.intl.format(ea.t.ZJ1tPW, {
                                                        count: t.attachmentUploads.length,
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              },
              t.record.id,
          );
});
var sH = n(211550);
function sz(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: i,
        handleMentionsJump: r,
        showTutorial: g,
        setSeenTutorial: x,
        forLaterEnabled: A,
    } = e;
    return (0, a.jsx)(u.l, {
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, a.jsx)("div", {
            className: d()(sH.k, { [sH.q]: n }),
            children: (0, a.jsx)(c.tH, {
                fallback: (0, a.jsx)(sa, {}),
                children: (0, a.jsx)(h.F, {
                    component: (0, a.jsx)(sd, { tab: s, setTab: l, closePopout: i }),
                    children:
                        s === o.Y2.MENTIONS
                            ? (0, a.jsx)(sf, { onJump: r })
                            : A && s === o.Y2.BOOKMARKS
                              ? (0, a.jsx)(e2, { closePopout: i, type: m.Yf.BOOKMARK }, "bookmarks")
                              : A && s === o.Y2.REMINDERS
                                ? (0, a.jsx)(e2, { closePopout: i, type: m.Yf.REMINDER }, "reminders")
                                : s === o.Y2.SCHEDULED
                                  ? (0, a.jsx)(sw, { onJump: r })
                                  : (0, a.jsx)(ss, { onJump: r, showTutorial: g, setSeenTutorial: x, closePopout: i }),
                }),
            }),
        }),
    });
}

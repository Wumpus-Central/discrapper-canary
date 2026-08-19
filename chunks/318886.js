n.r(t), n.d(t, { default: () => sz });
var s,
    l,
    a,
    i = n(477900),
    r = n(582128),
    d = n(503698),
    c = n.n(d),
    o = n(292442),
    u = n(873298),
    h = n(305866),
    m = n(707554),
    g = n(756377),
    x = n(284009),
    A = n.n(x),
    f = n(562708),
    j = n(837381),
    N = n(17928),
    p = n(866665),
    E = n(689175),
    S = n(695366),
    v = n(661531),
    y = n(297264),
    C = n(825484),
    I = n(408278),
    R = n(789645),
    _ = n(440971),
    M = n(22231),
    b = n(99677),
    L = n(442433),
    D = n(148494),
    T = n(928039),
    O = n(793574),
    k = n(688810),
    F = n(139286),
    G = n(259678),
    U = n(939249),
    P = n(320448),
    w = n(778712),
    H = n(97808),
    K = n(812993),
    z = n(834730),
    B = n(406810),
    X = n(397244),
    J = n(714114),
    Y = n(394871),
    V = n(571694),
    W = n(47167),
    Z = n(174355),
    $ = n(598104),
    q = n(548118),
    Q = n(616356),
    ee = n(734057),
    et = n(71393),
    en = n(290863),
    es = n(568548),
    el = n(287809),
    ea = n(650583),
    ei = n(375708),
    er = n(842971);
let ed = { top: 8, bottom: 8, left: -4, right: -4 };
function ec(e) {
    let {
            channel: t,
            children: n,
            status: s,
            onClick: l,
            collapsed: a = !1,
            mentionCount: r,
            onToggleCollapse: d,
            itemId: o,
        } = e,
        u = (0, j.rm)(o);
    return (0, i.jsxs)("div", {
        className: er.N1,
        children: [
            s,
            (0, i.jsx)(G.vN, {
                offset: ed,
                children: (0, i.jsxs)("div", {
                    className: c()(er.ZO, { [er.yZ]: a }),
                    ...u,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === ea.dh.ENTER || e.key === ea.dh.SPACE) && e.target === e.currentTarget) {
                            e.preventDefault(), l(e);
                            return;
                        }
                        null != d && ((e.key === ea.dh.ARROW_RIGHT && a) || (e.key === ea.dh.ARROW_LEFT && !a)) && d();
                    },
                    children: [
                        (0, i.jsx)(U.D, {
                            className: er.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(eo, { channel: t }),
                        }),
                        (0, i.jsx)(P._, { className: er.ai, size: "xxs" }),
                        (0, i.jsx)(eu, { channel: t, onClick: l, mentionCount: r }),
                        n,
                    ],
                }),
            }),
        ],
    });
}
function eo(e) {
    let { channel: t } = e,
        n = (0, N.bG)([et.A], () => et.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(q.Ay, { className: er.Kk, guild: n, size: q.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)($.A, { channel: t, size: w._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(H.eu, { size: w._3.SIZE_32, src: (0, V.Y)(t), "aria-hidden": !0 });
}
function eu(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, N.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        a = (0, W.Ay)(t, !1),
        r = (0, N.bG)([es.Ay], () => es.Ay.getIsMentionLowImportance(t.id)),
        d = (0, Z.gU)(t, l);
    return (0, i.jsxs)("div", {
        className: er.yP,
        children: [
            (0, i.jsx)(y.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: er.lz,
                children: (0, i.jsxs)(U.D, {
                    className: er.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, i.jsx)(d, { className: er.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: er.je, children: a }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: er.qS,
                                  children: (0, i.jsx)(K.hV, {
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
            (0, i.jsx)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, i.jsx)(eh, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eh(e) {
    let { channel: t, onClick: n } = e,
        s = (0, N.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        l = (0, N.bG)([ee.A], () => ee.A.getChannel(t.parent_id)),
        a = (0, W.Ay)(l);
    if (t.isMultiUserDM())
        return (0, i.jsx)(i.Fragment, {
            children: ei.intl.formatToPlainString(ei.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, i.jsx)(em, { channel: t });
    let r = [s?.name, null != l ? a : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, i.jsx)(U.D, { className: c()(er.je, er.J5), onClick: n, children: r }) : null;
}
function em(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, N.cf)([el.default, en.A, Q.A], () => {
            let e = el.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? en.A.getStatus(e.id) : null,
                activities: null != e ? en.A.getActivities(e.id) : null,
                applicationStream: null != e ? Q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, J.Ay)({ userId: n?.id });
    return (0, X.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(Y.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eg(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: er.h5,
        children: [
            "error" === t
                ? (0, i.jsx)(S.E, { size: "xs", color: "currentColor", className: er.ik })
                : (0, i.jsx)(B.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var ex = n(642213),
    eA = n(636922),
    ef = n(885386),
    ej = n(576705),
    eN = n(927813),
    ep = n(269073),
    eE = n(164684),
    eS = n(704456),
    ev = n(85109);
n(321073);
var ey = n(403362),
    eC = n(216623);
function eI(e) {
    switch (e) {
        case g.Yf.BOOKMARK:
            return ev.A.getMessageBookmarks();
        case g.Yf.REMINDER:
            return ev.A.getMessageReminders();
        default:
            return ev.A.getSavedMessages();
    }
}
function eR(e) {
    return eI(e).map((e) => e.saveData);
}
var e_ = n(606096),
    eM = n(803306),
    eb = n(320095),
    eL = n(963852),
    eD = n(20851),
    eT = n(889227),
    eO = n(403581),
    ek = n(192308),
    eF = n(738188),
    eG = n(404374),
    eU = n(611371),
    eP = n(465794),
    ew = n(158045),
    eH = n(652215),
    eK = n(202541);
n(811233);
var ez = n(864514);
function eB(e) {
    var t, s, l, a;
    let d,
        { isReminder: c, limit: o, isAtLimit: u = !1 } = e,
        { analyticsLocations: h } = (0, k.Ay)(),
        m = r.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await n.e("422540").then(n.bind(n, 530951));
                return (t) => (0, i.jsx)(e, { ...t, isReminder: c, limit: o, analyticsLocations: h });
            });
        }, [o, c, h]);
    return (0, i.jsxs)("div", {
        className: ez.Zj,
        children: [
            u
                ? (0, i.jsx)(eF.WarningIcon, { size: "md", color: "currentColor", className: ez.QW })
                : (0, i.jsx)(eO.t, { size: "md", color: eG.k0.PREMIUM_TIER_2 }),
            (0, i.jsxs)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: ez.tD,
                children: [
                    ((t = c),
                    (s = o),
                    (l = u),
                    (a = m),
                    (d = (0, ew.Dd)(eK.PremiumTypes.TIER_2)),
                    null == s
                        ? ei.intl.format(ei.t.qXh3fo, { nitroTierName: d, onClick: a })
                        : l
                          ? ei.intl.format(t ? ei.t.MYFohD : ei.t.FNFCVJ, {
                                nitroTierName: d,
                                onClick: a,
                                premiumMax: t ? 50 : 200,
                            })
                          : ei.intl.formatToPlainString(t ? ei.t["W+ZaoS"] : ei.t["0hoV2D"], { nitroTierName: d })),
                    " ",
                    (0, i.jsx)(eU.A, { className: ez.TN }),
                ],
            }),
            (0, i.jsx)(eP.A, {
                size: "sm",
                variantOverride: u ? void 0 : "primary",
                subscriptionTier: eK.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eH.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eX = n(318344),
    eJ = n(936037),
    eY = n(144273);
function eV(e) {
    let { type: t } = e,
        n = t === g.Yf.REMINDER,
        s = ei.intl.string(n ? ei.t.aUXxzT : ei.t["2pAkDA"]);
    return (0, ep.lA)("ForLaterIntro")
        ? (0, i.jsx)("div", {
              className: eX.kL,
              children: (0, i.jsxs)("div", {
                  className: eX.vW,
                  children: [
                      (0, i.jsx)("img", { src: eJ, className: eX.Tn, alt: s }),
                      (0, i.jsx)(y.D, {
                          className: eX.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(n ? ei.t["5Iw19e"] : ei.t["93WOd1"]),
                      }),
                      (0, i.jsx)("div", {
                          className: eX.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.format(n ? ei.t["E+qms7"] : ei.t.legvTg, {
                                  itemName: ei.intl.string(n ? ei.t.mJ3P0N : ei.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, i.jsx)(eW, { isReminder: n }),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: eX.kL,
              children: (0, i.jsxs)("div", {
                  className: eX.vW,
                  children: [
                      (0, i.jsx)("img", { src: eJ, className: eX.Tn, alt: s }),
                      (0, i.jsx)(y.D, {
                          className: eX.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(ei.t.w4DRbZ),
                      }),
                      (0, i.jsx)("div", {
                          className: eX.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.string(ei.t.F6u3E3),
                          }),
                      }),
                      (0, i.jsx)(eB, { isReminder: n }),
                  ],
              }),
          });
}
function eW(e) {
    let { isReminder: t } = e,
        n = r.useMemo(() => {
            let e = new eT.A({ id: "313338", username: ei.intl.string(ei.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eM.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eY.A),
                [ei.intl.string(ei.t["h+KPxy"]), ei.intl.string(ei.t["63EVpI"]), ei.intl.string(ei.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eb.rh)({
                            ...(0, eL.Ay)({ channelId: "1338", content: n }),
                            state: eH.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (l.author = t ?? e), l;
                    },
                )
            );
        }, []);
    return (0, i.jsx)("div", {
        className: eX.qJ,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: eX.DZ,
            children: n.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(eD.A, {
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
                                ? (0, i.jsxs)("div", {
                                      className: eX.MK,
                                      children: [
                                          (0, i.jsx)(eZ, {
                                              icon: e_.BookmarkIcon,
                                              label: ei.intl.string(ei.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, i.jsx)(eZ, {
                                              icon: B.ClockIcon,
                                              label: ei.intl.string(ei.t.mJ3P0N),
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
    return (0, i.jsxs)("div", {
        className: c()(eX.KT, { [eX.$Y]: s }),
        children: [
            (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function e$(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, eS.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eS.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eg, { type: l ? "error" : "normal", text: s });
}
var eq = n(318061),
    eQ = n(824385);
let e0 = "ForLaterPopout",
    e1 = "Bookmarks",
    e3 = "Reminders";
function e2(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.Yf.ALL,
                [t, n] = r.useState(() => eR(e)),
                s = r.useRef(ev.A.getIsStale());
            return (
                r.useEffect(() => {
                    let t = ev.A.getLastChanged();
                    function l() {
                        let l = ev.A.getLastChanged();
                        if (t !== l) {
                            if (((t = l), s.current && !ev.A.getIsStale())) {
                                (s.current = !1), n(eR(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eI(e).map((e) => [e.saveData.messageId, e]));
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
                r.useEffect(() => {
                    (0, eC.AX)();
                }, []),
                (0, N.yK)([ev.A], () => t.map((e) => ev.A.getSavedMessage(e.channelId, e.messageId)).filter(ey.Vq))
            );
        })(n),
        l = n === g.Yf.REMINDER,
        a = (0, ep.oG)(e0, l),
        d = (0, ep.dR)(e0),
        c = d && a > 0 && s.length >= a,
        o = d && s.length > 0,
        { analyticsLocations: u } = (0, k.Ay)(O.A.FOR_LATER_POPOUT);
    (0, F.A)(
        {
            type: f.ImpressionTypes.POPOUT,
            name: f.ImpressionNames.FOR_LATER_LIST_VIEWED,
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
    let h = r.useRef(null),
        m = (0, T.A)("for-later", h);
    (0, ex.xN)(h), (0, ex.yW)(n === g.Yf.BOOKMARK ? e1 : e3);
    let [x, A] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => A(new Date()), eN.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(k.f5, { value: u, children: (0, i.jsx)(eV, { type: n }) })
        : (0, i.jsx)(k.f5, {
              value: u,
              children: (0, i.jsxs)("div", {
                  className: eq.MY,
                  children: [
                      (0, i.jsx)(j.hD, {
                          navigator: m,
                          children: (0, i.jsx)(j.PR, {
                              children: (e) => {
                                  let { ref: n, ...l } = e;
                                  return (0, i.jsx)(E.Ch, {
                                      ref: (e) => {
                                          (h.current = e), (n.current = e?.getScrollerNode() ?? null);
                                      },
                                      className: eQ.XG,
                                      ...l,
                                      children: s.map((e) =>
                                          (0, i.jsx)(
                                              e8,
                                              { savedMessage: e, closePopout: t, throttledNow: x },
                                              e.saveData.messageId,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                      o
                          ? (0, i.jsx)("div", {
                                className: eq.fH,
                                children: (0, i.jsx)(eB, { isReminder: l, limit: a, isAtLimit: c }),
                            })
                          : null,
                  ],
              }),
          });
}
function e8(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, eS.vr)(t),
        a = r.useCallback(
            async (e) => {
                await (0, eS.le)(t, l),
                    e.shiftKey || n(),
                    D.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e3 : e1);
            },
            [n, t, l],
        ),
        d = (0, N.bG)(
            [ej.A],
            () => !!(l?.type === eH.rbe.UNKNOWN || l?.isPrivate()) || ej.A.can(eH.xBc.VIEW_CHANNEL, l),
        );
    return null != l && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eQ.aP,
              children: [
                  (0, i.jsx)(ec, {
                      itemId: `header-${t.message.id}`,
                      channel: l,
                      onClick: (e) => {
                          a(e), n();
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, i.jsx)(e$, { reminder: t, throttledNow: s }) : null,
                      children: (0, i.jsx)(C.e, {
                          size: "sm",
                          className: er.GC,
                          children: (0, i.jsx)(e6, { savedMessage: t, jumpToMessage: a, throttledNow: s }),
                      }),
                  }),
                  (0, i.jsx)(
                      eA.A,
                      {
                          message: t.message,
                          channel: l,
                          className: eQ.YD,
                          compact: ef.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(eQ.aP, eq.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eq.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eq.Bx,
                              children: (0, i.jsx)(S.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(y.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ei.intl.string(ei.t["wuQm+j"])
                                      : ei.intl.string(ei.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(C.e, {
                      size: "sm",
                      className: er.GC,
                      children: (0, i.jsx)(p.m, {
                          text: ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(I.K, {
                              variant: "secondary",
                              "aria-label": ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
                              size: "sm",
                              icon: R.P,
                              onClick: () => (0, eE.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e6(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: l } = e;
    A()(null != t.message, "Saved message must be cached for For Later action buttons");
    let a = ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
        r = null != t.saveData.dueAt && l > t.saveData.dueAt,
        d = ei.intl.string(r ? ei.t.GtBCnz : ei.t.vrbqs1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, i.jsx)(p.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? _.R : M.PencilIcon,
                          onClick: (e) =>
                              (0, L.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("275133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: ei.intl.string(r ? ei.t.GtBCnz : ei.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, i.jsx)(p.m, {
                text: ei.intl.string(ei.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t["+TSRGD"]),
                    size: "sm",
                    icon: b.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, i.jsx)(p.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": a,
                    size: "sm",
                    icon: R.P,
                    onClick: () => (0, eE.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e4 = n(702841),
    e7 = n(912592),
    e5 = n(890856),
    e9 = n(761508),
    te = n(566908),
    tt = n(214947),
    tn = n(711950),
    ts = n(322387),
    tl = n(912309),
    ta = n(174459),
    ti = n(109261);
function tr(e) {
    let { closePopout: t } = e,
        n = (0, tl.kX)();
    return (0, i.jsx)(p.m, {
        asContainer: !0,
        text: ei.intl.string(ei.t["lMR96+"]),
        children: (0, i.jsxs)(U.D, {
            "aria-label": `${ei.intl.string(ei.t["lMR96+"])}, ${n}`,
            className: ti.b,
            onClick: () => {
                ta.default.track(eH.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: ts.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tn.A.transitionToSection(eH.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(tt.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(K.hV, { count: n, color: v.A.colors.BACKGROUND_MOD_STRONG.css }),
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
        s = (0, N.bG)([ee.A, tm.Ay], () => ee.A.getChannel(tm.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, N.cf)([tg.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tg.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(td.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ei.intl.string(ei.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(tc.sL, {
                id: "Everyone",
                label: ei.intl.string(ei.t.cdyUsV),
                action: function () {
                    th.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(tc.sL, {
                id: "Roles",
                label: ei.intl.string(ei.t.lZejCq),
                action: function () {
                    th.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(tc.sL, {
                      id: "All Servers",
                      label: ei.intl.string(ei.t.GWMA6s),
                      action: function () {
                          th.A.setGuildFilter({
                              guildFilter: r === eH.KE7.THIS_SERVER ? eH.KE7.ALL_SERVERS : eH.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eH.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tA() {
    let e = r.useRef(null);
    return (0, i.jsx)(to.Y, {
        targetElementRef: e,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tx, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(p.m, {
                text: ei.intl.string(ei.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(I.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t.pEasFX),
                    icon: tu.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tf = n(481613),
    tj = n.n(tf),
    tN = n(621466),
    tp = n(289873),
    tE = n(821609),
    tS = n(228366),
    tv = n(964486),
    ty = n(775602),
    tC = n(625494),
    tI = n(723702),
    tR = n(303727),
    t_ = n(495427);
function tM(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: t_.kL,
        children: [
            (0, i.jsxs)("div", {
                className: t_.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: t_.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(tR.A, { className: t_.uf }),
                ],
            }),
            (0, i.jsx)(y.D, { className: t_.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(z.E, {
                              tag: "span",
                              className: t_.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [ei.intl.string(ei.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tb = n(862482),
    tL = n(143838),
    tD = n(640238);
function tT(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            ta.default.track(eH.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tO, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(p.m, {
                text: ei.intl.string(ei.t["8k+6QY"]),
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t["8k+6QY"]),
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
function tO(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tD.M, {
        dismissable: !0,
        header: ei.intl.string(ei.t.h4bVZ2),
        confirmText: ei.intl.string(ei.t.e6RscS),
        cancelText: ei.intl.string(ei.t["ETE/oC"]),
        confirmButtonColor: tb.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ei.intl.string(ei.t["0MQ0Bf"]),
        }),
    });
}
var tk = n(435558),
    tF = n.n(tk),
    tG = n(749314),
    tU = n(53466),
    tP = n(311283),
    tw = n(717421),
    tH = n(933832),
    tK = n(334738),
    tz = n(95561),
    tB = n(976860),
    tX = n(847374),
    tJ = n(345550);
function tY(e) {
    let { collapsed: t, onClick: n } = e,
        s = ei.intl.string(t ? ei.t.dcl9MQ : ei.t.iTcuma);
    return (0, i.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(U.D, {
            className: tJ.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tX.a, { className: c()(tJ.ai, { [tJ.yZ]: t }), size: "xs" }),
        }),
    });
}
var tV = n(775924);
let tW = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tZ = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function t$(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [l, a] = (0, tw.z)(() => (t ? tW : tZ), "respect-motion-settings", []),
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
                          immediate: ty.Ay.useReducedMotion,
                      })
                    : a({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: ty.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && a({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, a]),
        (0, i.jsx)(tU.animated.div, {
            className: tV.r,
            style: l,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tq = n(782603),
    tQ = n(461678),
    t0 = n(914703);
function t1(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(to.Y, {
        targetElementRef: n,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(t0.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                  })
                : (0, i.jsx)(tQ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                      location: { section: eH.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(p.m, {
                text: ei.intl.string(ei.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(I.K, {
                    "aria-label": ei.intl.string(ei.t.h850Ss),
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
    t8 = n(970278),
    t6 = n(747926),
    t4 = n(935208),
    t7 = n(37411),
    t5 = n(159574);
function t9(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, N.yK)(
            [t8.A, ee.A],
            () =>
                tF()(t8.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t4.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return ee.A.getChannel(t);
                    })
                    .filter(ey.Vq)
                    .sort((e, t) => t4.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, t6.JA)(e, t, t7.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                tS.h.wait(() => {
                    (0, tK.ack)(
                        t.channelId,
                        {
                            section: eH.JJy.INBOX,
                            object: eH.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t5.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    t2.Cp,
                    { channel: n, children: (0, i.jsx)(t3.Ay, { className: t5.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var ne = n(989349),
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
    nA = n(844659),
    nf = n(375199),
    nj = n(824556),
    nN = n(715628),
    np = n(752636),
    nE = n(352043),
    nS = n(268719),
    nv = n(234957),
    ny = n(888675),
    nC = n(466959),
    nI = n(364932);
let nR = r.memo(function e(t) {
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
        m = eH.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, N.bG)([nd.A], () => nd.A.getMessageByReference(m)),
        x = (0, N.bG)([ee.A], () =>
            l.type === eH.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED
                ? ee.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = ef.X6.useSetting(),
        f = ef.hD.useSetting(),
        j = ef.rs.useSetting(),
        p = ef.kt.useSetting(),
        E = (0, na.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        S = (0, ni.A)(s?.id),
        { disableReactionCreates: v } = (0, nm.A)(s),
        {
            content: y,
            hasSpoilerEmbeds: C,
            hasBailedAst: I,
        } = (0, nf.A)(l, {
            hideSimpleEmbedContent: f && j,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = (0, nh.Ay)(l),
        _ = (0, N.bG)(
            [ee.A],
            () => l.hasFlag(eH.pr7.HAS_THREAD) && ee.A.getChannel(t4.default.castMessageIdAsChannelId(l.id)),
        ),
        M = l.type === eH.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED && null != x,
        b = !M && void 0 === n,
        L = (0, nj.A)({ message: l, channel: s, announcementEnabled: b }),
        D = (0, nl.P)(l),
        T = (0, no._f)(l.id, l.channel_id),
        O = (0, nr.A)(l),
        k = (0, nx.fF)(l);
    return M
        ? (0, i.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (nc.A.isBlockedForMessage(l) ? (n = ei.t["+FcYM/"]) : nc.A.isIgnoredForMessage(l) && (n = ei.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(n_, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(ng.A, {
                compact: a,
                className: c()(r, { [nI.M1]: (0, eb.ec)(l), [nI.XN]: u, [nI._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nv.A)(l, s, m, g, a),
                childrenHeader: (0, np.A)({ ...t, author: R, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nA.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: C,
                    hasBailedAst: I,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: v,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: j,
                    gifAutoPlay: p,
                    poll: O,
                    showListsAndHeaders: E,
                    showMaskedLinks: E,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: D,
                    ctaButtonType: T,
                }),
                childrenExecutedCommand: (0, nS.A)(l, s, a),
                childrenMessageContent: (0, nN.A)(t, y),
                childrenSystemMessage: (0, nE.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && l.hasFlag(eH.pr7.HAS_THREAD),
                hasReply: l.type === eH.lAJ.REPLY,
                isSystemMessage: (0, nu.A)(l),
                messageRef: L,
                author: R,
                "aria-labelledby": k,
                "aria-roledescription": ei.intl.string(ei.t.BAB0yK),
            });
});
function n_(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(ng.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(ny.A, {
            compact: s,
            className: nC.L9,
            iconNode: (0, i.jsx)(R.P, { size: "md", color: "currentColor", className: nC.Q6 }),
            children: (0, i.jsx)("div", { className: nC.Fo, children: ei.intl.format(l, { count: n }) }),
        }),
    });
}
var nM = n(58703),
    nb = n(195172);
function nL(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(U.D, {
        className: c()(nb.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(tp.y, { type: tp.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(z.E, { variant: "text-xs/medium", className: nb.Q, children: ei.intl.string(ei.t.k5WiPf) }),
    });
}
var nD = n(143236),
    nT = n(323073),
    nO = n(181079),
    nk = n(567035),
    nF = n(679164),
    nG = n(455234),
    nU = n(863005),
    nP = n(152007),
    nw = n(607508),
    nH = n(594061),
    nK = n(617617),
    nz = n(95701),
    nB = n(808728),
    nX = n(232835),
    nJ = n(711014),
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
class nZ extends nD.EventEmitter {
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
                let t = n$(e, !1);
                if (t.messages.some(nF.$r)) return D.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t8.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, ey.xb)(e);
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
        tS.h.wait(() =>
            tK.ack(
                t,
                {
                    section: eH.JJy.INBOX,
                    object: eH.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              ty.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tK.ack(
            e.channelId,
            { section: eH.JJy.INBOX, object: eH.ZSU.UNDO_MARK_AS_READ, objectType: eH.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tS.h.wait(() => (0, nk.A)([e], eH.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tF().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tK.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tF().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, nH.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nH.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !nP.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t8.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        D.A.clearChannel(e.channelId);
        let t = D.A.fetchMessages({
            channelId: e.channelId,
            limit: eH.EMb,
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
                                A()("messages" === e.type, "channel cannot change type"),
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
        s = nX.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    t4.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t4.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = t4.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
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
                t = nK.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = ee.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            ee.A.getSortedPrivateChannels().forEach((n) => nQ(e, t, null, n.id)),
            nJ.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nB.Ay.getSelectableChannelIds(n),
                    l = nU.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nQ(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nQ(e, t, n, s);
                });
            }),
            tF().sortBy(t, (e) => e.sortOrder)),
        l = tF()
            .uniq(s.map((e) => e.guildId))
            .filter(ey.Vq);
    return (
        tS.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nQ(e, t, n, s) {
    if (null == s) return;
    let l = ee.A.getChannel(s);
    if (null == l || (!nz.Le.has(l.type) && nY.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === es.Ay.getMentionCount(s)) return;
    } else if (!(0, nG.Y)(l) && 0 === es.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ej.A.can(eH.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = es.Ay.ackMessageId(s);
    if (null == a) {
        let e = et.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = t4.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = es.Ay.getOldestUnreadMessageId(s),
        r = es.Ay.lastMessageId(s),
        d = es.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || t4.default.compare(a, r) >= 0) return;
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
            let s = ee.A.getChannel(t);
            if (nO.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (es.Ay.getMentionCount(t) > 0) return es.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t4.default.extractTimestamp(n);
                if (Date.now() - e > n1) return 8;
                if (Date.now() - e > n0) return 6;
            }
            if (s.isThread()) {
                let e = (0, nw.l)(s);
                return e === t7.CP.ALL_MESSAGES ? 4 : e === t7.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nY.Ay.getChannelMessageNotifications(e, t),
                    s = n === eH.orn.NULL ? nY.Ay.getMessageNotifications(e) : n;
                return s === eH.orn.ALL_MESSAGES ? 4 : s === eH.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nT.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n0 = 2 * eN.A.Millis.DAY,
    n1 = 10 * eN.A.Millis.DAY;
var n3 = n(358402);
let n2 = { left: 4, right: -12 },
    n8 = [eH.lAJ.THREAD_CREATED];
function n6(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: a } = e,
        d = (0, j.rm)(n.id ?? ""),
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
        o = n8.includes(n.type);
    return (0, i.jsx)(G.vN, {
        offset: n2,
        children: (0, i.jsxs)("div", {
            className: n3.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nL, { className: n3.nn, onJump: (e) => a(e, n.id) }),
                (0, i.jsx)(nR, {
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
function n4(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = ef.hH.useSetting(),
        a = 0 === t.messages.length || nt()(t.messages[0].timestamp).isSame(nt()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!a && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nM.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tG.A, { className: n3.yF, children: t }, t)), (d = nt()(e.timestamp));
        }
        let t = null == c || (0, ns.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n6, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t4.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: n3.Gr,
                        children: (0, i.jsx)(nn.Q, {
                            variant: "primary",
                            text: `${ei.intl.string(ei.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(tp.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: n3.DZ, children: r })
    );
}
let n7 = r.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tw.z)(
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
        return (0, i.jsx)(tU.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(n5, { ...e }),
        });
    }),
    n5 = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, N.bG)([ee.A], () => ee.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tS.h.wait(() => {
                        (0, tK.ack)(
                            t.channelId,
                            {
                                section: eH.JJy.INBOX,
                                object: eH.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            if ("forum" === t.type) (0, ex.n4)(t.channelId, t.guildId, sn, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                D.A.trackJump(t.channelId, l, sn), (0, tB.pX)(eH.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e);
            }
        }
        function c() {
            l(t),
                (0, tz.zV)(eH.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: eQ.aP,
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsxs)(ec, {
                    channel: a,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${a.id}`,
                    children: [
                        (0, i.jsxs)(C.e, {
                            size: "sm",
                            className: er.GC,
                            children: [(0, i.jsx)(t1, { channel: a }), (0, i.jsx)(n9, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tY, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: er.Pt }),
                    ],
                }),
                children: (0, i.jsx)(t$, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n4, { channel: t, channelRecord: a, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(t9, { channel: t, channelRecord: a, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n9(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, tP.A)() && null != t.guildId;
    return (0, i.jsx)(p.m, {
        text: a ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(I.K, {
            variant: "secondary",
            "aria-label": a ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
            size: "sm",
            icon: a ? tL.i : tH.CheckmarkLargeIcon,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tz.zV)(eH.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var se = n(245233),
    st = n(552392);
let sn = "Inbox";
function ss(e) {
    var t, n, s, l, a, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = r.useRef(null),
        x = (0, T.A)("unreads", g);
    (0, ex.xN)(g), (0, ex.yW)(sn);
    let [A, f] = (function (e) {
            let [t, n] = r.useState(() => new nZ(nq(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => nq());
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
                        r = nq();
                    0 === r.channels.length || t - a.current < 10 * eN.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nZ(r, e)));
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
                    () => (nX.A.addChangeListener(t.reloadMessages), () => nX.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nY.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nY.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nP.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nP.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t8.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t8.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(g),
        { loadState: p, channels: S } = A,
        { maybeLoadMore: v } = f,
        y = (0, N.bG)([ty.Ay], () => ty.Ay.messageGroupSpacing);
    return ((t = g),
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
            tC._.subscribe(eH.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tC._.unsubscribe(eH.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [a, l.channels]),
    (d = f),
    r.useEffect(() => {
        function e(e) {
            if ((0, ek.hasAnyModalOpen)()) return;
            let t = (0, tN.BF)(e)?.activeElement;
            (0, tN.Cw)(t) ||
                (((0, tI.isMac)() || (0, tI.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tS.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tS.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tv.Ay)(
        () => (
            tC._.subscribe(eH.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead),
            () => {
                tC._.unsubscribe(eH.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(tM, {
              Icon: e7.InboxIcon,
              header: ei.intl.string(ei.t["6XMM+D"]),
              tip: tj().os?.family === "OS X" ? ei.intl.string(ei.t.w9uDOW) : ei.intl.string(ei.t.BiUJC6),
          })
        : (0, i.jsx)(j.hD, {
              navigator: x,
              children: (0, i.jsx)(j.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(E.Ch, {
                          ref: (e) => {
                              (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: p === nW.Done ? void 0 : v,
                          className: c()(eQ.XG, `group-spacing-${y}`),
                          children: [
                              u ? (0, i.jsx)(sl, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tF().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nV.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tG.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ei.intl.string(ei.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nV.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tG.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ei.intl.string(ei.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  n7,
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
                              })(S, f, o),
                              p === nW.Done ? null : (0, i.jsx)(tp.y, { className: st.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sl(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: st.d$,
        children: [
            (0, i.jsx)("div", {
                className: st.cm,
                children: (0, i.jsx)(e7.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(y.D, {
                        className: st.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ei.intl.string(ei.t.vZPktJ),
                    }),
                    (0, i.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ei.intl.string(ei.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: st.dh,
                        children: (0, i.jsx)(tE.$, {
                            variant: "primary",
                            size: "sm",
                            text: ei.intl.string(ei.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sa() {
    return (0, i.jsx)(tM, {
        Icon: e7.InboxIcon,
        disableStars: !0,
        header: ei.intl.string(ei.t["KG/ynf"]),
        tip: ei.intl.string(ei.t.cvcKzX),
    });
}
function si() {
    return (0, i.jsx)(tT, { onClick: () => tC._.dispatch(eH.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sr = n(668451);
function sd(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, ep.jv)("RecentsPopout"),
        a = (0, te.Sc)(),
        r = (0, e4.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sr.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sr.qd,
                children: [
                    (0, i.jsx)(e7.InboxIcon, { size: "md", color: "currentColor", className: sr.yH }),
                    (0, i.jsx)(y.D, {
                        className: sr.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ei.intl.string(ei.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e5.s, {
                        className: sr.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ei.intl.string(ei.t["8k+6QY"]),
                        children: [(0, i.jsx)(sc, { tab: t }), (0, i.jsx)(tr, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sr.YF,
                children: (0, i.jsxs)(e9.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sr.$H,
                    children: [
                        (0, i.jsx)(e9.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ei.intl.string(ei.t.sRUdB8),
                            className: sr.Mf,
                            children: (0, i.jsx)("span", { className: sr.Gn, children: ei.intl.string(ei.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(e9.V.Item, {
                            "aria-label": ei.intl.string(ei.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sr.Mf,
                            children: (0, i.jsx)("span", { className: sr.Gn, children: ei.intl.string(ei.t.GRZF96) }),
                        }),
                        l
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
                                      children: ei.intl.string(ei.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
                                      children:
                                          0 === r
                                              ? ei.intl.string(ei.t.aUXxzT)
                                              : ei.intl.formatToPlainString(ei.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
                                      children: ei.intl.string(ei.t.Fn6Odn),
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
    return t === u.Y2.UNREADS ? (0, i.jsx)(si, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tA, {}) : null;
}
var so = n(935063),
    su = n(475743),
    sh = n(517019),
    sm = n(919755);
let sg = { offset: { left: 4, right: -12 } },
    sx = "Recent Mentions";
function sA(e, t) {
    th.A.fetchRecentMentions({
        before: t,
        limit: eH.Ue3,
        guildId: null != e && tg.Ay.guildFilter !== eH.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tg.Ay.roleFilter,
        everyone: tg.Ay.everyoneFilter,
    });
}
function sf(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, T.A)("recents", n);
    (0, ex.xN)(n), (0, ex.yW)(sx);
    let l = (0, N.bG)([ee.A, tm.Ay], () => ee.A.getChannel(tm.Ay.getChannelId())),
        {
            messages: a,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, N.cf)([tg.Ay], () => ({
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
    r.useEffect(() => {
        tg.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sA(l)
            : sA(l);
    }, [m, o, g, u, x, h, l]),
        (0, tv.Ay)(() => {
            a?.some(nF.$r) && (th.A.clearMentions(), sA(l));
        }),
        (0, tv.l0)(() => {
            th.A.truncateMentions(eH.Ue3);
        });
    let A = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sA(l, null != a && a.length > 0 ? a[a.length - 1].id : null);
    }, [d, c, l, a]);
    return null == a || (c && 0 === a.length)
        ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tp.y, {}) })
        : 0 === a.length
          ? (0, i.jsx)(tM, { Icon: so.X, header: ei.intl.string(ei.t.bgDz74), tip: ei.intl.string(ei.t.NS15vk) })
          : (0, i.jsx)(j.hD, {
                navigator: s,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(E.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eQ.XG,
                            onScroll: d ? A : void 0,
                            ...r,
                            children: [
                                a.map((e) => (0, i.jsx)(sj, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tp.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: sm.u,
                                            children: (0, i.jsx)(tE.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ei.intl.string(ei.t.XBlaiC),
                                                onClick: () =>
                                                    sA(l, null != a && a.length > 0 ? a[a.length - 1].id : null),
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
    let s = ee.A.getChannel(t.channel_id);
    if (null == s || (0, nT.Jm)(s) || (0, nT.$v)(s)) return null;
    let l = sh.A.didAgree(s.getGuildId()),
        a = !!(0, nT.Gc)(s) && !l;
    return (0, i.jsxs)("div", {
        className: eQ.aP,
        children: [
            (0, i.jsx)(ec, {
                channel: s,
                onClick: (e) => (0, ex.KW)(t, sx, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(C.e, {
                    size: "sm",
                    className: er.GC,
                    children: [
                        (0, i.jsx)(p.m, {
                            text: ei.intl.string(ei.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ei.intl.string(ei.t["+TSRGD"]),
                                size: "sm",
                                icon: b.t,
                                onClick: (e) => (0, ex.KW)(t, sx, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(p.m, {
                            text: ei.intl.string(ei.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": ei.intl.string(ei.t.e6RscS),
                                size: "sm",
                                icon: tH.CheckmarkLargeIcon,
                                onClick: () => th.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    eA.A,
                    {
                        message: t,
                        channel: s,
                        className: eQ.YD,
                        hideAccessories: a,
                        compact: ef.hH.getSetting(),
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
var sN = n(285796),
    sp = n(588975),
    sE = n(151282),
    sS = n(199160),
    sv =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    sy = n(339350),
    sC = n(81369),
    sI = n(663341),
    sR = n(897460);
function s_() {
    return (0, i.jsx)("div", {
        className: sR.kL,
        children: (0, i.jsxs)("div", {
            className: sR.vW,
            children: [
                (0, i.jsxs)("div", {
                    className: sR.zc,
                    children: [
                        (0, i.jsx)(sy.Q, {
                            color: "currentColor",
                            size: "custom",
                            className: sR.Kk,
                            width: 36,
                            height: 36,
                        }),
                        (0, i.jsx)(tR.A, { className: sR.uf }),
                    ],
                }),
                (0, i.jsx)(y.D, {
                    className: sR.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ei.intl.string(ei.t["C/j9NE"]),
                }),
                (0, i.jsx)("div", {
                    className: sR.rf,
                    children: (0, i.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ei.intl.format(ei.t.FAn5lu, {}),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: sR.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: sR.MK,
                            children: [
                                (0, i.jsx)(sM, { icon: sC.H, label: ei.intl.string(ei.t["d3+iYs"]), highlighted: !1 }),
                                (0, i.jsx)(sM, { icon: sy.Q, label: ei.intl.string(ei.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: sR.RW,
                            children: [
                                (0, i.jsx)("div", {
                                    className: sR.$f,
                                    children: (0, i.jsx)(sI.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, i.jsx)(z.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ei.intl.string(ei.t.fxxYiB),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function sM(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, i.jsxs)("div", {
        className: c()(sR.KT, { [sR.$Y]: s }),
        children: [
            (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sb = n(970244);
n(938796);
var sL = n(408018),
    sD = n(451909),
    sT = n(205120),
    sO = n(91624);
function sk(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, a] = r.useState(() => {
            let e = ef.D_.getSetting(),
                s = (0, te.zs)(t.scheduledMessage),
                l = sD.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, sL.x7)(e ? l : s) };
        }),
        d = r.useCallback((e, t, n) => {
            a({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.scheduledMessage.flags,
        u = r.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sb.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = r.useCallback(() => (0, sb.tu)(c), [c]);
    return (0, i.jsx)(sT.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sO.R3,
        children: sF,
    });
}
function sF(e) {
    return (0, i.jsx)(sO.Nr, { ...e });
}
var sG = n(474711);
let sU = "Scheduled Messages",
    sP = { offset: { left: 4, right: -12 } };
function sw(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sE.sy)();
    }, []);
    let n = (0, N.bG)([sS.A], () => sS.A.getScheduledMessagesForInbox()),
        s = (0, N.bG)([sS.A], () => sS.A.loading),
        l = (0, N.bG)([sS.A], () => sS.A.getMessagesPendingDeletion()),
        a = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, T.A)("scheduled-messages", d);
    return ((0, ex.xN)(d), (0, ex.yW)(sU), s)
        ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tp.y, {}) })
        : 0 === a.length
          ? (0, i.jsx)(s_, {})
          : (0, i.jsx)(j.hD, {
                navigator: c,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(E.Ch, {
                            className: eQ.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    sH,
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
let sH = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: l } = e,
        a = (0, N.bG)([ee.A], () => ee.A.getChannel(n)),
        { isError: d, stateMessage: o } = (function (e) {
            switch (e) {
                case sv.SCHEDULED:
                    return { isError: !1, stateMessage: ei.intl.string(ei.t.Fn6Odn) };
                case sv.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.v5O2dK) };
                case sv.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                case sv.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t["w6zHX/"]) };
                case sv.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.pflV7z) };
                case sv.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                default:
                    (0, ey.xb)(e);
            }
        })(t.state),
        u = ef.hH.useSetting(),
        [h, m] = r.useState(!1),
        g = r.useCallback(() => (0, sb.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = r.useCallback(() => {
            (0, sb.CI)({ scheduledMessage: t });
        }, [t]);
    return null == a
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eQ.aP,
                  children: [
                      (0, i.jsx)(ec, {
                          itemId: `header-${t.record.id}`,
                          channel: a,
                          onClick: (e) => (0, ex.n4)(a.id, a.guild_id, sU, () => l(e)),
                          collapsed: !1,
                          status: (0, i.jsx)(eg, {
                              type: d ? "error" : "normal",
                              text: d
                                  ? o
                                  : ei.intl.formatToPlainString(ei.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, i.jsxs)(C.e, {
                              size: "sm",
                              className: er.GC,
                              children: [
                                  (0, i.jsx)(p.m, {
                                      text: ei.intl.string(ei.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: M.PencilIcon,
                                          "aria-label": ei.intl.string(ei.t.ZXE1s4),
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, i.jsx)(p.m, {
                                      text: ei.intl.string(ei.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: B.ClockIcon,
                                          "aria-label": ei.intl.string(ei.t.SBcdAN),
                                          onClick: x,
                                      }),
                                  }),
                                  (0, i.jsx)(p.m, {
                                      text: ei.intl.string(ei.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sN.a,
                                          "aria-label": ei.intl.string(ei.t.O3sL8F),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, i.jsx)(tp.y, { className: eQ.Lq })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(
                                        eA.A,
                                        {
                                            message: t.record,
                                            channel: a,
                                            className: t.attachmentUploads.length > 0 ? sG.Mg : eQ.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: sP,
                                            inlineEditor: h
                                                ? (0, i.jsx)(sk, {
                                                      scheduledMessage: t,
                                                      channel: a,
                                                      onCancel: () => m(!1),
                                                  })
                                                : void 0,
                                        },
                                        t.record.id,
                                    ),
                                    t.attachmentUploads.length > 0 &&
                                        (0, i.jsxs)("div", {
                                            className: c()(sG.PI, { [sG.oE]: u }),
                                            children: [
                                                (0, i.jsx)(sp.P, { size: "xs", color: "currentColor" }),
                                                (0, i.jsx)(z.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    children: ei.intl.format(ei.t.ZJ1tPW, {
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
var sK = n(655165);
function sz(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: a,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: x,
        forLaterEnabled: A,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": ei.intl.string(ei.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sK.k, { [sK.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(sa, {}),
                children: (0, i.jsx)(m.F, {
                    component: (0, i.jsx)(sd, { tab: s, setTab: l, closePopout: a }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(sf, { onJump: r })
                            : A && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(e2, { closePopout: a, type: g.Yf.BOOKMARK }, "bookmarks")
                              : A && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(e2, { closePopout: a, type: g.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(sw, { onJump: r })
                                  : (0, i.jsx)(ss, { onJump: r, showTutorial: d, setSeenTutorial: x, closePopout: a }),
                }),
            }),
        }),
    });
}

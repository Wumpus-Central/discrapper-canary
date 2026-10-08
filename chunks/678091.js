(n.r(t), n.d(t, { default: () => s2 }));
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
    N = n(689175),
    y = n(695366),
    v = n(661531),
    I = n(297264),
    C = n(825484),
    E = n(408278),
    S = n(789645),
    M = n(440971),
    b = n(22231),
    R = n(99677),
    _ = n(442433),
    T = n(148494),
    L = n(928039),
    D = n(793574),
    k = n(688810),
    O = n(139286),
    G = n(559106),
    P = n(939249),
    F = n(320448),
    U = n(778712),
    w = n(97808),
    K = n(812993),
    z = n(834730),
    H = n(406810),
    B = n(397244),
    V = n(714114),
    J = n(394871),
    X = n(571694),
    Y = n(47167),
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
    ea = n(660183),
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
                            (e.preventDefault(), l(e));
                            return;
                        }
                        null != c && ((e.key === el.dh.ARROW_RIGHT && i) || (e.key === el.dh.ARROW_LEFT && !i)) && c();
                    },
                    children: [
                        (0, a.jsx)(P.D, {
                            className: ei.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(ec, { channel: t }),
                        }),
                        (0, a.jsx)(F._, { className: ei.ai, size: "xxs" }),
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
          ? (0, a.jsx)(Z.A, { channel: t, size: U._3.SIZE_32, "aria-hidden": !0 })
          : (0, a.jsx)(w.eu, { size: U._3.SIZE_32, src: (0, X.Y)(t), "aria-hidden": !0 });
}
function eo(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        i = (0, Y.Ay)(t, !1),
        r = (0, j.bG)([en.Ay], () => en.Ay.getIsMentionLowImportance(t.id)),
        d = (0, W.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ei.yP,
        children: [
            (0, a.jsx)(I.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ei.lz,
                children: (0, a.jsxs)(P.D, {
                    className: ei.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, a.jsx)(d, { className: ei.j1, size: "xxs" }),
                        (0, a.jsx)("span", { className: ei.je, children: i }),
                        null != s && s > 0
                            ? (0, a.jsx)("div", {
                                  className: ei.qS,
                                  children: (0, a.jsx)(K.hV, {
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
            (0, a.jsx)(z.E, {
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
        i = (0, Y.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eh, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(P.D, { className: d()(ei.je, ei.J5), onClick: n, children: r }) : null;
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
        { voiceChannel: r } = (0, V.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: i, voiceChannel: r })
        ? (0, a.jsx)(J.A, { user: n, activities: l, applicationStream: i, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function em(e) {
    let { type: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: ei.h5,
        children: [
            "error" === t
                ? (0, a.jsx)(y.E, { size: "xs", color: "currentColor", className: ei.ik })
                : (0, a.jsx)(H.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var eg = n(642213),
    ex = n(636922),
    eA = n(885386),
    ef = n(576705),
    ej = n(927813),
    ep = n(568467),
    eN = n(704456),
    ey = n(85109);
n(321073);
var ev = n(403362),
    eI = n(216623);
function eC(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return ey.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return ey.A.getMessageReminders();
        default:
            return ey.A.getSavedMessages();
    }
}
function eE(e) {
    return eC(e).map((e) => e.saveData);
}
var eS = n(606096),
    eM = n(803306),
    eb = n(320095),
    eR = n(963852),
    e_ = n(20851),
    eT = n(889227),
    eL = n(652215),
    eD = n(897781),
    ek = n(490611),
    eO = n(144273);
function eG(e) {
    let { type: t } = e,
        n = t === m.Yf.REMINDER,
        s = ea.intl.string(n ? ea.t.aUXxzT : ea.t["2pAkDA"]),
        l = n
            ? "https://cdn.discordapp.com/assets/content/b2bdb0d916a0bd920e35dfd15fafcd9101c30a8442b5d31d1fcff8d394af34b9.svg"
            : ek.A;
    return (0, a.jsx)("div", {
        className: eD.kL,
        children: (0, a.jsxs)("div", {
            className: eD.vW,
            children: [
                (0, a.jsx)("img", { src: l, className: eD.Tn, alt: s }),
                (0, a.jsx)(I.D, {
                    className: eD.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ea.intl.string(n ? ea.t["5Iw19e"] : ea.t["93WOd1"]),
                }),
                (0, a.jsx)("div", {
                    className: eD.rf,
                    children: (0, a.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ea.intl.format(n ? ea.t["E+qms7"] : ea.t.legvTg, {
                            itemName: ea.intl.string(n ? ea.t.mJ3P0N : ea.t.tpxJto),
                        }),
                    }),
                }),
                (0, a.jsx)(eP, { isReminder: n }),
            ],
        }),
    });
}
function eP(e) {
    let { isReminder: t } = e,
        n = i.useMemo(() => {
            let e = new eT.A({ id: "313338", username: ea.intl.string(ea.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eM.nj(e);
            return (
                null != t && (t.getAvatarURL = () => eO.A),
                [ea.intl.string(ea.t["h+KPxy"]), ea.intl.string(ea.t["63EVpI"]), ea.intl.string(ea.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eb.rh)({
                            ...(0, eR.Ay)({ channelId: "1338", content: n }),
                            state: eL.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return ((l.author = t ?? e), l);
                    },
                )
            );
        }, []);
    return (0, a.jsx)("div", {
        className: eD.qJ,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: eD.DZ,
            children: n.map((e, n) =>
                (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)(e_.A, {
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
                                      className: eD.MK,
                                      children: [
                                          (0, a.jsx)(eF, {
                                              icon: eS.BookmarkIcon,
                                              label: ea.intl.string(ea.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(eF, {
                                              icon: H.ClockIcon,
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
function eF(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(eD.KT, { [eD.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eU(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, eN.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eN.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(em, { type: l ? "error" : "normal", text: s });
}
var ew = n(294002),
    eK = n(414676);
let ez = "Bookmarks",
    eH = "Reminders";
function eB(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = i.useState(() => eE(e)),
                s = i.useRef(ey.A.getIsStale());
            return (
                i.useEffect(() => {
                    let t = ey.A.getLastChanged();
                    function l() {
                        let l = ey.A.getLastChanged();
                        if (t !== l) {
                            if (((t = l), s.current && !ey.A.getIsStale())) {
                                ((s.current = !1), n(eE(e)));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eC(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ey.A.addChangeListener(l),
                        () => {
                            ey.A.removeChangeListener(l);
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    (0, eI.AX)();
                }, []),
                (0, j.yK)([ey.A], () => t.map((e) => ey.A.getSavedMessage(e.channelId, e.messageId)).filter(ev.Vq))
            );
        })(n),
        { analyticsLocations: l } = (0, k.Ay)(D.A.FOR_LATER_POPOUT);
    (0, O.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { tab_type: n, total_count: s.length, overdue_count: ey.A.getOverdueMessageReminderCount() },
        },
        {},
        [s.length],
    );
    let r = i.useRef(null),
        d = (0, L.A)("for-later", r);
    ((0, eg.xN)(r), (0, eg.yW)(n === m.Yf.BOOKMARK ? ez : eH));
    let [c, o] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => o(new Date()), ej.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, a.jsx)(k.f5, { value: l, children: (0, a.jsx)(eG, { type: n }) })
        : (0, a.jsx)(k.f5, {
              value: l,
              children: (0, a.jsx)("div", {
                  className: ew.MY,
                  children: (0, a.jsx)(f.hD, {
                      navigator: d,
                      children: (0, a.jsx)(f.PR, {
                          children: (e) => {
                              let { ref: n, ...l } = e;
                              return (0, a.jsx)(N.Ch, {
                                  ref: (e) => {
                                      ((r.current = e), (n.current = e?.getScrollerNode() ?? null));
                                  },
                                  className: eK.XG,
                                  ...l,
                                  children: s.map((e) =>
                                      (0, a.jsx)(
                                          eV,
                                          { savedMessage: e, closePopout: t, throttledNow: c },
                                          e.saveData.messageId,
                                      ),
                                  ),
                              });
                          },
                      }),
                  }),
              }),
          });
}
function eV(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, eN.vr)(t),
        r = i.useCallback(
            async (e) => {
                (await (0, eN.le)(t, l),
                    e.shiftKey || n(),
                    T.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eH : ez));
            },
            [n, t, l],
        ),
        c = (0, j.bG)(
            [ef.A],
            () => !!(l?.type === eL.rbe.UNKNOWN || l?.isPrivate()) || ef.A.can(eL.xBc.VIEW_CHANNEL, l),
        );
    return null != l && null != t.message && c
        ? (0, a.jsxs)("div", {
              className: eK.aP,
              children: [
                  (0, a.jsx)(ed, {
                      itemId: `header-${t.message.id}`,
                      channel: l,
                      onClick: (e) => {
                          (r(e), n());
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(eU, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(C.e, {
                          size: "sm",
                          className: ei.GC,
                          children: (0, a.jsx)(eJ, { savedMessage: t, jumpToMessage: r, throttledNow: s }),
                      }),
                  }),
                  (0, a.jsx)(
                      ex.A,
                      {
                          message: t.message,
                          channel: l,
                          className: eK.YD,
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
              className: d()(eK.aP, ew.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: ew.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: ew.Bx,
                              children: (0, a.jsx)(y.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, a.jsx)(I.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(C.e, {
                      size: "sm",
                      className: ei.GC,
                      children: (0, a.jsx)(p.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(E.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: S.P,
                              onClick: () => (0, ep.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eJ(e) {
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
                      children: (0, a.jsx)(E.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? M.R : b.PencilIcon,
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
                children: (0, a.jsx)(E.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                    size: "sm",
                    icon: R.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, a.jsx)(p.m, {
                text: i,
                ariaHidden: !0,
                children: (0, a.jsx)(E.K, {
                    variant: "secondary",
                    "aria-label": i,
                    size: "sm",
                    icon: S.P,
                    onClick: () => (0, ep.x)(t.saveData),
                }),
            }),
        ],
    });
}
var eX = n(702841),
    eY = n(912592),
    eW = n(890856),
    eZ = n(761508),
    e$ = n(566908),
    eq = n(214947),
    eQ = n(711950),
    e0 = n(322387),
    e1 = n(912309),
    e3 = n(174459),
    e2 = n(198476);
function e8(e) {
    let { closePopout: t } = e,
        n = (0, e1.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, a.jsxs)(P.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: e2.b,
            onClick: () => {
                (e3.default.track(eL.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: e0.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eQ.A.transitionToSection(eL.m3P.PENDING, { explicit: !0 }),
                    t());
            },
            children: [
                (0, a.jsx)(eq.$, { size: "xs", color: "currentColor" }),
                n > 0 && (0, a.jsx)(K.hV, { count: n, color: v.A.colors.BACKGROUND_MOD_STRONG.css, className: e2.D }),
            ],
        }),
    });
}
var e7 = n(980707),
    e6 = n(477782),
    e4 = n(922016),
    e5 = n(783977),
    e9 = n(378939),
    te = n(309010),
    tt = n(409686);
function tn(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([Q.A, te.Ay], () => Q.A.getChannel(te.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([tt.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tt.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(e7.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(e6.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    e9.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(e6.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    e9.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(e6.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          e9.A.setGuildFilter({
                              guildFilter: r === eL.KE7.THIS_SERVER ? eL.KE7.ALL_SERVERS : eL.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eL.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function ts() {
    let e = i.useRef(null);
    return (0, a.jsx)(e4.Y, {
        targetElementRef: e,
        align: "right",
        animation: e4.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tn, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(E.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: e5.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tl = n(481613),
    ta = n.n(tl),
    ti = n(621466),
    tr = n(289873),
    td = n(821609),
    tc = n(192308),
    to = n(73153),
    tu = n(964486),
    th = n(775602),
    tm = n(625494),
    tg = n(723702),
    tx = n(303727),
    tA = n(435842);
function tf(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, a.jsxs)("div", {
        className: tA.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tA.zc,
                children: [
                    (0, a.jsx)(t, { color: "currentColor", size: "custom", className: tA.Kk, width: 36, height: 36 }),
                    l ? null : (0, a.jsx)(tx.A, { className: tA.uf }),
                ],
            }),
            (0, a.jsx)(I.D, { className: tA.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(z.E, {
                              tag: "span",
                              className: tA.PP,
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
var tj = n(862482),
    tp = n(143838),
    tN = n(640238);
function ty(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        (t(),
            e3.default.track(eL.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tv, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, a.jsx)(E.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: tp.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tv(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(tN.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: tj.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tI = n(202091),
    tC = n(717421),
    tE = n(334738),
    tS = n(666860),
    tM = n(976860),
    tb = n(847374),
    tR = n(907847);
function t_(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(P.D, {
            className: tR.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tb.a, { className: d()(tR.ai, { [tR.yZ]: t }), size: "xs" }),
        }),
    });
}
var tT = n(585517);
let tL = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tD = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tk(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tC.z)(() => (t ? tL : tD), "respect-motion-settings", []),
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
                          immediate: th.Ay.useReducedMotion,
                      })
                    : r({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: th.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && r({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, r]),
        (0, a.jsx)(tI.animated.div, {
            className: tT.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tO = n(311283),
    tG = n(933832);
function tP(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, tO.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(E.K, {
            variant: "secondary",
            "aria-label": i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: i ? tp.i : tG.CheckmarkLargeIcon,
            onClick: function () {
                (i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tS.zV)(eL.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    }));
            },
        }),
    });
}
var tF = n(782603),
    tU = n(461678),
    tw = n(914703);
function tK(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e4.Y, {
        targetElementRef: n,
        align: "right",
        animation: e4.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(tw.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, a.jsx)(tU.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eL.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, a.jsx)(E.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: tF.BellIcon,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tz = n(435558),
    tH = n.n(tz),
    tB = n(350527),
    tV = n(218152),
    tJ = n(970278),
    tX = n(747926),
    tY = n(935208),
    tW = n(37411),
    tZ = n(278489);
function t$(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [tJ.A, Q.A],
            () =>
                tH()(tJ.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tY.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return Q.A.getChannel(t);
                    })
                    .filter(ev.Vq)
                    .sort((e, t) => tY.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        r = i.useCallback((e, t) => {
            (0, tX.JA)(e, t, tW.H9.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                to.h.wait(() => {
                    ((0, tE.ack)(
                        t.channelId,
                        {
                            section: eL.JJy.INBOX,
                            object: eL.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId));
                });
        }),
        (0, a.jsx)("div", {
            className: tZ.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    tV.Cp,
                    { channel: n, children: (0, a.jsx)(tB.Ay, { className: tZ.u, threadId: e.id, goToThread: r }) },
                    e.id,
                ),
            ),
        })
    );
}
var tq = n(536637),
    tQ = n.n(tq),
    t0 = n(123292),
    t1 = n(857069),
    t3 = n(749314),
    t2 = n(33358),
    t8 = n(384231),
    t7 = n(207133),
    t6 = n(704413),
    t4 = n(9842),
    t5 = n(994500),
    t9 = n(5095),
    ne = n(143413),
    nt = n(763754),
    nn = n(467073),
    ns = n(491182),
    nl = n(860227),
    na = n(230797),
    ni = n(837528),
    nr = n(754459),
    nd = n(470964),
    nc = n(824556),
    no = n(699352),
    nu = n(715628),
    nh = n(752636),
    nm = n(291690),
    ng = n(268719),
    nx = n(234957),
    nA = n(888675),
    nf = n(381941),
    nj = n(845806),
    np = n(13673);
let nN = i.memo(function e(t) {
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
        m = eL.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([t4.A], () => t4.A.getMessageByReference(m)),
        x = (0, j.bG)([Q.A], () =>
            l.type === eL.lAJ.THREAD_STARTER_MESSAGE && g.state === t4.a.LOADED
                ? Q.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = eA.X6.useSetting(),
        f = eA.hD.useSetting(),
        p = eA.rs.useSetting(),
        N = eA.kt.useSetting(),
        y = (0, t8.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        v = (0, t7.A)(s?.id),
        { disableReactionCreates: I } = (0, nn.A)(s),
        { setPopout: C } = (0, nr.A)(l.id, nf.Fd),
        E = (0, ni.VL)(l, s, C, v),
        {
            content: S,
            hasSpoilerEmbeds: M,
            hasBailedAst: b,
        } = (0, nd.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = (0, nt.Ay)(l),
        _ = (0, j.bG)(
            [Q.A],
            () => l.hasFlag(eL.pr7.HAS_THREAD) && Q.A.getChannel(tY.default.castMessageIdAsChannelId(l.id)),
        ),
        T = l.type === eL.lAJ.THREAD_STARTER_MESSAGE && g.state === t4.a.LOADED && null != x,
        L = !T && void 0 === n,
        D = (0, nc.A)({ message: l, channel: s, announcementEnabled: L }),
        k = (0, t2.P)(l),
        O = (0, t9._f)(l.id, l.channel_id),
        G = (0, t6.A)(l),
        P = (0, nl.fF)(l);
    return T
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (t5.A.isBlockedForMessage(l) ? (n = ea.t["+FcYM/"]) : t5.A.isIgnoredForMessage(l) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(ny, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(ns.A, {
                compact: i,
                className: d()(r, { [np.M1]: (0, eb.ec)(l), [np.XN]: u, [np._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nx.A)(l, s, m, g, i),
                childrenHeader: (0, nh.A)({ ...t, author: R, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(na.iV, {
                    renderAccessories: no.A,
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: M,
                    hasBailedAst: b,
                    compact: i,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: I,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: s.isSystemDM(),
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: p,
                    gifAutoPlay: N,
                    poll: G,
                    showListsAndHeaders: y,
                    showMaskedLinks: y,
                    shouldHideMediaOptions: v,
                    enabledContentHarmTypeFlags: k,
                    ctaButtonType: O,
                    onMediaItemContextMenu: E,
                }),
                childrenExecutedCommand: (0, ng.A)(l, s, i),
                childrenMessageContent: (0, nu.A)(t, S),
                childrenSystemMessage: (0, nm.A)(t),
                onContextMenu: c,
                onClick: o,
                hasThread: !1 !== h && null != _ && l.hasFlag(eL.pr7.HAS_THREAD),
                hasReply: l.type === eL.lAJ.REPLY,
                isSystemMessage: (0, ne.A)(l),
                messageRef: D,
                author: R,
                "aria-labelledby": P,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function ny(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(ns.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nA.A, {
            compact: s,
            className: nj.L9,
            iconNode: (0, a.jsx)(S.P, { size: "md", color: "currentColor", className: nj.Q6 }),
            children: (0, a.jsx)("div", { className: nj.Fo, children: ea.intl.format(l, { count: n }) }),
        }),
    });
}
var nv = n(58703),
    nI = n(222831);
function nC(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(P.D, {
        className: d()(nI.n, t),
        onClick: function (e) {
            (l(!0), n(e));
        },
        children: s
            ? (0, a.jsx)(tr.y, { type: tr.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(z.E, { variant: "text-xs/medium", className: nI.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nE = n(143236),
    nS = n(323073),
    nM = n(181079),
    nb = n(567035),
    nR = n(679164),
    n_ = n(455234),
    nT = n(863005),
    nL = n(152007),
    nD = n(607508),
    nk = n(594061),
    nO = n(617617),
    nG = n(95701),
    nP = n(808728),
    nF = n(232835),
    nU = n(711014),
    nw = n(543465),
    nK = n(790782),
    nz =
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
    nH = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let nB = "1539033557786173450";
class nV extends nE.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        (super(), (this.state = e), (this.scrollerRef = t));
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
                let t = nJ(e, !1);
                if (t.messages.some(nR.$r)) return (T.A.clearChannel(e.channelId), { ...e, messages: [] });
                return t;
            }
            case "nsfw":
            case "guild-events":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tJ.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, ev.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nJ(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        to.h.wait(() => {
            "guild-events" === e.type
                ? tE.hK(e.guildId, nK.P.GUILD_EVENT, n)
                : tE.ack(
                      t,
                      {
                          section: eL.JJy.INBOX,
                          object: eL.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                          objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      !0,
                      void 0,
                      n,
                  );
        });
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              th.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        "guild-events" === e.type
            ? tE.hK(e.guildId, nK.P.GUILD_EVENT, e.oldestReadMessageId)
            : tE.ack(
                  e.channelId,
                  {
                      section: eL.JJy.INBOX,
                      object: eL.ZSU.UNDO_MARK_AS_READ,
                      objectType: eL.AnalyticsObjectTypes.ACK_MANUAL,
                  },
                  !0,
                  void 0,
                  e.oldestReadMessageId,
              );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        (t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n }));
    };
    markGuildRead = (e) => {
        (to.h.wait(() => (0, nb.A)([e], eL.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore());
    };
    deleteChannel = (e) => {
        (this.setState({
            scrollToChannelIndex: tH().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore());
    };
    markAllRead = () => {
        (tE.Uq(
            this.state.channels.map((e) => ({
                channelId: e.channelId,
                messageId: e.newestUnreadMessageId,
                readStateType: "guild-events" === e.type ? nK.P.GUILD_EVENT : nK.P.CHANNEL,
            })),
        ),
            this.setState({ channels: [] }));
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tH().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        ((l[t] = d),
            (0, nk.ji)(
                n,
                "guild-events" === r.type ? nB : t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nk.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore());
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) =>
            "guild-events" === e.type ? !nY(e.guildId) : !nw.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
        );
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nL.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tJ.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        T.A.clearChannel(e.channelId);
        let t = T.A.fetchMessages({
            channelId: e.channelId,
            limit: eL.EMb,
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
                            let n = nJ(e, !0);
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
                                    ...nJ(e, !0),
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
                ((this.state = { ...this.state, ...e }), this.emit("change", this.state));
                return;
            }
    }
}
function nJ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nF.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tY.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tY.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tY.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function nX() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nO.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    if (s === nB) {
                        e[tY.default.cast(n)] = t[n].channels[s].collapsedInInbox;
                        continue;
                    }
                    let l = Q.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            Q.A.getSortedPrivateChannels().forEach((n) => nW(e, t, null, n.id)),
            nU.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nP.Ay.getSelectableChannelIds(n),
                    l = nT.A.getActiveJoinedUnreadThreadsForGuild(n);
                (s.forEach((s) => {
                    nW(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nW(e, t, n, s);
                }),
                    (function (e, t, n) {
                        if (nY(n) || !en.Ay.hasUnreadOrMentions(n, nK.P.GUILD_EVENT)) return;
                        let s = en.Ay.lastMessageId(n, nK.P.GUILD_EVENT);
                        if (null == s) return;
                        let l = tY.default.cast(n),
                            a = en.Ay.ackMessageId(n, nK.P.GUILD_EVENT);
                        if (null == a) {
                            let e = ee.A.getGuild(n);
                            if (e?.joinedAt == null) return;
                            a = tY.default.fromTimestamp(e.joinedAt.getTime());
                        }
                        tY.default.compare(a, s) >= 0 ||
                            t.push({
                                type: "guild-events",
                                guildId: n,
                                channelId: l,
                                oldestReadMessageId: a,
                                oldestUnreadMessageId: null,
                                newestUnreadMessageId: s,
                                collapsed: !0 === e[l],
                                hasLoadedAnything: !1,
                                hasLoadedFirst: !1,
                                isFullyLoaded: !1,
                                hasError: !1,
                                hasMentionsOrUnreads: !0,
                                mentionCount: en.Ay.getMentionCount(n, nK.P.GUILD_EVENT),
                                sortOrder: 5,
                                order: 0,
                            });
                    })(e, t, n));
            }),
            tH().sortBy(t, (e) => e.sortOrder)),
        l = tH()
            .uniq(s.map((e) => e.guildId))
            .filter(ev.Vq);
    return (
        to.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nY(e) {
    return nw.Ay.isMuted(e) || nw.Ay.isMuteScheduledEventsEnabled(e);
}
function nW(e, t, n, s) {
    if (null == s) return;
    let l = Q.A.getChannel(s);
    if (null == l || (!nG.Le.has(l.type) && nw.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === en.Ay.getMentionCount(s)) return;
    } else if (!(0, n_.Y)(l) && 0 === en.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ef.A.can(eL.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = en.Ay.ackMessageId(s);
    if (null == a) {
        let e = ee.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tY.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = en.Ay.getOldestUnreadMessageId(s),
        r = en.Ay.lastMessageId(s),
        d = en.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || tY.default.compare(a, r) >= 0) return;
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
            if (nM.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (en.Ay.getMentionCount(t) > 0) return en.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tY.default.extractTimestamp(n);
                if (Date.now() - e > n$) return 8;
                if (Date.now() - e > nZ) return 6;
            }
            if (s.isThread()) {
                let e = (0, nD.l)(s);
                return e === tW.CP.ALL_MESSAGES ? 4 : e === tW.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nw.Ay.getChannelMessageNotifications(e, t),
                    s = n === eL.orn.NULL ? nw.Ay.getMessageNotifications(e) : n;
                return s === eL.orn.ALL_MESSAGES ? 4 : s === eL.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nS.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nZ = 2 * ej.A.Millis.DAY,
    n$ = 10 * ej.A.Millis.DAY;
var nq = n(743373);
let nQ = { left: 4, right: -12 },
    n0 = [eL.lAJ.THREAD_CREATED];
function n1(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: r } = e,
        d = (0, f.rm)(n.id ?? ""),
        c = i.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    (e.preventDefault(), r(e, n.id));
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, r, n.id],
        ),
        o = n0.includes(n.type);
    return (0, a.jsx)(G.vN, {
        offset: nQ,
        children: (0, a.jsxs)("div", {
            className: nq.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(nC, { className: nq.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(nN, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nq.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function n3(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = eA.hH.useSetting(),
        i = 0 === t.messages.length || tQ()(t.messages[0].timestamp).isSame(tQ()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nv.i$)(e.timestamp, "LL");
            (r.push((0, a.jsx)(t3.A, { className: nq.yF, children: t }, t)), (d = tQ()(e.timestamp)));
        }
        let t = null == c || (0, t1.A)(n, c, e);
        ((c = e),
            r.push((0, a.jsx)(n1, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id)));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tY.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: nq.Gr,
                        children: (0, a.jsx)(t0.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(tr.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: nq.DZ, children: r })
    );
}
var n2 = n(81466),
    n8 = n(508654),
    n7 = n(29414);
let n6 = { top: 8, bottom: 8, left: -4, right: -4 };
function n4(e) {
    let {
            guild: t,
            name: n,
            Icon: s,
            children: l,
            onClick: i,
            collapsed: r = !1,
            mentionCount: c,
            onToggleCollapse: o,
            itemId: u,
        } = e,
        h = (0, f.rm)(u);
    return (0, a.jsx)("div", {
        className: ei.N1,
        children: (0, a.jsx)(G.vN, {
            offset: n6,
            children: (0, a.jsxs)("div", {
                className: d()(ei.ZO, { [ei.yZ]: r }),
                ...h,
                onKeyDown: function (e) {
                    if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                        (e.preventDefault(), i(e));
                        return;
                    }
                    null != o && ((e.key === el.dh.ARROW_RIGHT && r) || (e.key === el.dh.ARROW_LEFT && !r)) && o();
                },
                children: [
                    (0, a.jsx)(P.D, {
                        className: ei.YT,
                        onClick: i,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        children: (0, a.jsx)($.Ay, {
                            className: ei.Kk,
                            guild: t,
                            size: $.Ay.Sizes.SMALL,
                            showTooltip: !0,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, a.jsx)(F._, { className: ei.ai, size: "xxs" }),
                    (0, a.jsxs)("div", {
                        className: ei.yP,
                        children: [
                            (0, a.jsx)(I.D, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ei.lz,
                                children: (0, a.jsxs)(P.D, {
                                    className: ei.Ru,
                                    onClick: i,
                                    children: [
                                        (0, a.jsx)(s, { className: ei.j1, size: "xxs" }),
                                        (0, a.jsx)("span", { className: ei.je, children: n }),
                                        null != c && c > 0
                                            ? (0, a.jsx)("div", {
                                                  className: ei.qS,
                                                  children: (0, a.jsx)(K.hV, {
                                                      count: c,
                                                      color: v.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, a.jsx)(z.E, {
                                color: "text-default",
                                variant: "text-xs/normal",
                                children: (0, a.jsx)(P.D, {
                                    className: d()(ei.je, ei.J5),
                                    onClick: i,
                                    children: t.name,
                                }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        }),
    });
}
var n5 = n(82732);
function n9(e) {
    let { channel: t, deleteChannel: s, toggle: l, onJump: r, getNumUnreadChannels: d } = e,
        { guildId: c } = t,
        o = (0, j.bG)([ee.A], () => ee.A.getGuild(c), [c]),
        u = (0, n8.Ay)(c),
        m = i.useMemo(
            () =>
                u
                    .filter(
                        (e) =>
                            tY.default.compare(e.id, t.oldestReadMessageId) > 0 &&
                            0 >= tY.default.compare(e.id, t.newestUnreadMessageId),
                    )
                    .sort((e, t) => tY.default.compare(e.id, t.id)),
            [u, t.oldestReadMessageId, t.newestUnreadMessageId],
        );
    if (
        (i.useEffect(() => {
            null == o ||
                t.collapsed ||
                0 !== m.length ||
                ((0, tE.hK)(c, nK.P.GUILD_EVENT, t.newestUnreadMessageId), s(t.channelId));
        }),
        null == o)
    )
        return null;
    function g() {
        (l(t),
            (0, tS.zV)(eL.HAw.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: c,
                num_unread_channels_remaining: d() ?? 0,
                is_now_collapsed: !t.collapsed,
            }));
    }
    return (0, a.jsx)("div", {
        className: eK.aP,
        children: (0, a.jsx)(h.F, {
            component: (0, a.jsxs)(n4, {
                guild: o,
                name: ea.intl.string(ea.t.tlopTM),
                Icon: n2.CalendarIcon,
                onClick: function (e) {
                    ((0, tc.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("998392"),
                            n.e("694303"),
                            n.e("256373"),
                            n.e("752695"),
                            n.e("464287"),
                            n.e("853934"),
                            n.e("188353"),
                        ]).then(n.bind(n, 318104));
                        return (t) => (0, a.jsx)(e, { ...t, guildId: c });
                    }),
                        r(e));
                },
                collapsed: t.collapsed,
                mentionCount: t.mentionCount,
                onToggleCollapse: g,
                itemId: `header-events-${c}`,
                children: [
                    (0, a.jsx)(C.e, { size: "sm", className: ei.GC, children: (0, a.jsx)(tP, { ...e }) }),
                    (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: g }),
                ],
            }),
            children: (0, a.jsx)(tk, {
                collapsed: t.collapsed,
                children: (0, a.jsx)("div", {
                    className: n5.k,
                    children: m.map((e) => (0, a.jsx)(n7.A, { className: n5.f, guildEvent: e, truncate: !0 }, e.id)),
                }),
            }),
        }),
    });
}
let se = "Inbox",
    st = i.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tC.z)(
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
        return (0, a.jsx)(tI.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(sn, { ...e }),
        });
    }),
    sn = i.memo(function (e) {
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
                    to.h.wait(() => {
                        ((0, tE.ack)(
                            t.channelId,
                            {
                                section: eL.JJy.INBOX,
                                object: eL.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId));
                    });
            }),
            !t.hasLoadedAnything)
        )
            return null;
        if ("guild-events" === t.type) return (0, a.jsx)(n9, { ...e, channel: t });
        if (null == r) return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eg.n4)(t.channelId, t.guildId, se, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                (T.A.trackJump(t.channelId, l, se), (0, tM.pX)(eL.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e));
            }
        }
        function c() {
            (l(t),
                (0, tS.zV)(eL.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                }));
        }
        return (0, a.jsx)("div", {
            className: eK.aP,
            children: (0, a.jsx)(h.F, {
                component: (0, a.jsxs)(ed, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(C.e, {
                            size: "sm",
                            className: ei.GC,
                            children: [(0, a.jsx)(tK, { channel: r }), (0, a.jsx)(tP, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: c })
                            : (0, a.jsx)("div", { className: ei.Pt }),
                    ],
                }),
                children: (0, a.jsx)(tk, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, a.jsx)(n3, { channel: t, channelRecord: r, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, a.jsx)(t$, { channel: t, channelRecord: r, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
var ss = n(171664),
    sl = n(173615);
function sa(e) {
    var t, n, s, l, r, c;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = i.useRef(null),
        x = (0, L.A)("unreads", g);
    ((0, eg.xN)(g), (0, eg.yW)(se));
    let [A, p] = (function (e) {
            let [t, n] = i.useState(() => new nV(nX(), e)),
                [s, l] = i.useState(!1),
                a = i.useRef(Date.now()),
                [r, d] = i.useState(() => nX());
            (i.useEffect(() => {
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
                        i = nX();
                    0 === i.channels.length || t - a.current < 10 * ej.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nV(i, e)));
                }, [r, s, e]));
            let c = i.useRef(t);
            return (
                i.useLayoutEffect(() => {
                    c.current = t;
                }),
                i.useLayoutEffect(() => {
                    (r?.channels, r?.loadState, c.current.maybeLoadMore());
                }, [r?.channels, r?.loadState]),
                i.useEffect(
                    () => (nF.A.addChangeListener(t.reloadMessages), () => nF.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                i.useEffect(
                    () => (
                        nw.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nw.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        nL.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nL.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        tJ.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tJ.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [r, t]
            );
        })(g),
        { loadState: y, channels: v } = A,
        { maybeLoadMore: I } = p,
        C = (0, j.bG)([th.Ay], () => th.Ay.messageGroupSpacing);
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
            tm._.subscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tm._.unsubscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (c = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, tc.hasAnyModalOpen)()) return;
            let t = (0, ti.BF)(e)?.activeElement;
            (0, ti.Cw)(t) ||
                (((0, tg.isMac)() || (0, tg.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            to.h.subscribe("CONNECTION_OPEN", m),
            () => {
                to.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tu.Ay)(
        () => (
            tm._.subscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tm._.unsubscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === v.length)
        ? (0, a.jsx)(tf, {
              Icon: eY.InboxIcon,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: ta().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, a.jsx)(f.hD, {
              navigator: x,
              children: (0, a.jsx)(f.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, a.jsxs)(N.Ch, {
                          ref: (e) => {
                              ((g.current = e), (t.current = e?.getScrollerNode() ?? null));
                          },
                          ...n,
                          onScroll: y === nH.Done ? void 0 : I,
                          className: d()(eK.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, a.jsx)(si, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
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
                                              (e.hasLoadedAnything && e.sortOrder === nz.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            t3.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nz.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            t3.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, a.jsx)(
                                                  st,
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
                              y === nH.Done ? null : (0, a.jsx)(tr.y, { className: sl.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function si(e) {
    let { setSeenTutorial: t } = e;
    return (0, a.jsxs)("div", {
        className: sl.d$,
        children: [
            (0, a.jsx)("div", {
                className: sl.cm,
                children: (0, a.jsx)(eY.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(I.D, {
                        className: sl.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, a.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sl.dh,
                        children: (0, a.jsx)(td.$, {
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
function sr() {
    return (0, a.jsx)(tf, {
        Icon: eY.InboxIcon,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function sd() {
    return (0, a.jsx)(ty, { onClick: () => tm._.dispatch(eL.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sc = n(113164);
function so(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, e$.Sc)(),
        i = (0, eX.bG)([ey.A], () => ey.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: sc.wx,
        children: [
            (0, a.jsxs)("div", {
                className: sc.qd,
                children: [
                    (0, a.jsx)(eY.InboxIcon, { size: "md", color: "currentColor", className: sc.yH }),
                    (0, a.jsx)(I.D, {
                        className: sc.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(eW.s, {
                        className: sc.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, a.jsx)(su, { tab: t }), (0, a.jsx)(e8, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: sc.YF,
                children: (0, a.jsxs)(eZ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sc.$H,
                    children: [
                        (0, a.jsx)(eZ.V.Item, {
                            id: o.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: sc.Mf,
                            children: (0, a.jsx)("span", { className: sc.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(eZ.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: o.Y2.MENTIONS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", { className: sc.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        (0, a.jsx)(eZ.V.Item, {
                            "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                            id: o.Y2.BOOKMARKS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", {
                                className: sc.Gn,
                                children: ea.intl.string(ea.t["2pAkDA"]),
                            }),
                        }),
                        (0, a.jsx)(eZ.V.Item, {
                            "aria-label": ea.intl.string(ea.t.aUXxzT),
                            id: o.Y2.REMINDERS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", {
                                className: sc.Gn,
                                children:
                                    0 === i
                                        ? ea.intl.string(ea.t.aUXxzT)
                                        : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: i }),
                            }),
                        }),
                        l
                            ? (0, a.jsx)(eZ.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: o.Y2.SCHEDULED,
                                  className: sc.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sc.Gn,
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
function su(e) {
    let { tab: t } = e;
    return t === o.Y2.UNREADS ? (0, a.jsx)(sd, {}) : t === o.Y2.MENTIONS ? (0, a.jsx)(ts, {}) : null;
}
var sh = n(935063),
    sm = n(475743),
    sg = n(517019),
    sx = n(356622);
let sA = { offset: { left: 4, right: -12 } },
    sf = "Recent Mentions";
function sj(e, t) {
    e9.A.fetchRecentMentions({
        before: t,
        limit: eL.Ue3,
        guildId: null != e && tt.Ay.guildFilter !== eL.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tt.Ay.roleFilter,
        everyone: tt.Ay.everyoneFilter,
    });
}
function sp(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, L.A)("recents", n);
    ((0, eg.xN)(n), (0, eg.yW)(sf));
    let l = (0, j.bG)([Q.A, te.Ay], () => Q.A.getChannel(te.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([tt.Ay], () => ({
            messages: tt.Ay.getMentions(),
            hasMore: tt.Ay.hasMore,
            loading: tt.Ay.loading,
            guildFilter: tt.Ay.guildFilter,
            roleFilter: tt.Ay.roleFilter,
            everyoneFilter: tt.Ay.everyoneFilter,
        })),
        m = (0, sm.Ay)(o),
        g = (0, sm.Ay)(u),
        x = (0, sm.Ay)(h);
    (i.useEffect(() => {
        tt.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sj(l)
            : sj(l);
    }, [m, o, g, u, x, h, l]),
        (0, tu.Ay)(() => {
            r?.some(nR.$r) && (e9.A.clearMentions(), sj(l));
        }),
        (0, tu.l0)(() => {
            e9.A.truncateMentions(eL.Ue3);
        }));
    let A = i.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sj(l, null != r && r.length > 0 ? r[r.length - 1].id : null);
    }, [d, c, l, r]);
    return null == r || (c && 0 === r.length)
        ? (0, a.jsx)("div", { className: eK.Lq, children: (0, a.jsx)(tr.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(tf, { Icon: sh.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(N.Ch, {
                            ref: (e) => {
                                ((n.current = e), (s.current = e?.getScrollerNode() ?? null));
                            },
                            className: eK.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sN, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: eK.Lq, children: (0, a.jsx)(tr.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sx.u,
                                            children: (0, a.jsx)(td.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    sj(l, null != r && r.length > 0 ? r[r.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sN(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = Q.A.getChannel(t.channel_id);
    if (null == s || (0, nS.Jm)(s) || (0, nS.$v)(s)) return null;
    let l = sg.A.didAgree(s.getGuildId()),
        i = !!(0, nS.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: eK.aP,
        children: [
            (0, a.jsx)(ed, {
                channel: s,
                onClick: (e) => (0, eg.KW)(t, sf, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(C.e, {
                    size: "sm",
                    className: ei.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(E.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: R.t,
                                onClick: (e) => (0, eg.KW)(t, sf, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(E.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tG.CheckmarkLargeIcon,
                                onClick: () => e9.A.deleteRecentMention(t.id),
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
                        className: eK.YD,
                        hideAccessories: i,
                        compact: eA.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sA,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sy = n(559647),
    sv = n(285796),
    sI = n(588975),
    sC = n(403581),
    sE = n(738188),
    sS = n(404374),
    sM = n(611371),
    sb = n(465794),
    sR = n(202541),
    s_ = n(603037);
function sT(e) {
    let { text: t, isAtLimit: n, analyticsSection: s } = e;
    return (0, a.jsxs)("div", {
        className: s_.Zj,
        children: [
            n
                ? (0, a.jsx)(sE.WarningIcon, { size: "md", color: "currentColor", className: s_.QW })
                : (0, a.jsx)(sC.t, { size: "md", color: sS.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: s_.tD,
                children: [t, " ", (0, a.jsx)(sM.A, { className: s_.TN })],
            }),
            (0, a.jsx)(sb.A, {
                size: "sm",
                variantOverride: n ? void 0 : "primary",
                subscriptionTier: sR.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: s },
            }),
        ],
    });
}
var sL = n(151282),
    sD = n(199160),
    sk = n(81369),
    sO = n(588190),
    sG = n(663341),
    sP = n(626891),
    sF = n(474218);
function sU() {
    return (0, a.jsx)("div", {
        className: sP.kL,
        children: (0, a.jsxs)("div", {
            className: sP.vW,
            children: [
                (0, a.jsx)("img", { src: sF.A, className: sP.Tn, alt: ea.intl.string(ea.t.SZVs3K) }),
                (0, a.jsx)(I.D, {
                    className: sP.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ea.intl.string(ea.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sP.rf,
                    children: (0, a.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ea.intl.format(ea.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sP.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sP.MK,
                            children: [
                                (0, a.jsx)(sw, { icon: sk.H, label: ea.intl.string(ea.t["d3+iYs"]), highlighted: !1 }),
                                (0, a.jsx)(sw, { icon: sO.U, label: ea.intl.string(ea.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sP.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sP.$f,
                                    children: (0, a.jsx)(sG.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, a.jsx)(z.E, {
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
function sw(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(sP.KT, { [sP.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sK = n(970244),
    sz = n(158045);
n(938796);
var sH = n(408018),
    sB = n(451909),
    sV = n(205120),
    sJ = n(91624);
function sX(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = eA.D_.getSetting(),
                s = (0, e$.zs)(t.createArgs),
                l = sB.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, sH.x7)(e ? l : s) };
        }),
        d = i.useCallback((e, t, n) => {
            r({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.createArgs.flags,
        u = i.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sK.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sK.tu)(c), [c]);
    return (0, a.jsx)(sV.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sJ.R3,
        children: sY,
    });
}
function sY(e) {
    return (0, a.jsx)(sJ.Nr, { ...e });
}
n(853297);
var sW = n(757424);
let sZ = "Scheduled Messages",
    s$ = { offset: { left: 4, right: -12 } };
function sq(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sL.sy)();
    }, []);
    let n = (0, j.bG)([sD.A], () => sD.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sD.A], () => sD.A.loading),
        l = (0, j.bG)([sD.A], () => sD.A.getMessagesPendingRemoval()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        { limit: d, isUpgradable: c } = (0, e$.yz)("ScheduledMessageInboxTab"),
        o = d > 0 && r.length >= d,
        u = i.useRef(null),
        h = (0, L.A)("scheduled-messages", u);
    return ((0, eg.xN)(u), (0, eg.yW)(sZ), s)
        ? (0, a.jsx)("div", { className: eK.Lq, children: (0, a.jsx)(tr.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sU, {})
          : (0, a.jsxs)("div", {
                className: sW.MY,
                children: [
                    (0, a.jsx)(f.hD, {
                        navigator: h,
                        children: (0, a.jsx)(f.PR, {
                            children: (e) => {
                                let { ref: n, ...s } = e;
                                return (0, a.jsx)(N.Ch, {
                                    className: eK.XG,
                                    ref: (e) => {
                                        ((u.current = e), (n.current = e?.getScrollerNode() ?? null));
                                    },
                                    ...s,
                                    children: r.map((e) =>
                                        (0, a.jsx)(
                                            s0,
                                            {
                                                scheduledMessage: e,
                                                channelId: e.createArgs.channelId,
                                                isPendingRemoval: l.has(e.scheduledMessageId),
                                                onJump: t,
                                            },
                                            e.scheduledMessageId,
                                        ),
                                    ),
                                });
                            },
                        }),
                    }),
                    c ? (0, a.jsx)("div", { className: sW.fH, children: (0, a.jsx)(sQ, { isAtLimit: o }) }) : null,
                ],
            });
}
function sQ(e) {
    let { isAtLimit: t } = e,
        { analyticsLocations: s } = (0, k.Ay)(D.A.SCHEDULED_MESSAGES_LIST),
        l = i.useCallback(() => {
            (0, tc.openModalLazy)(async () => {
                let { default: e } = await n.e("178930").then(n.bind(n, 471177));
                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: s });
            });
        }, [s]),
        r = (0, sz.Dd)(sR.PremiumTypes.TIER_2);
    return (0, a.jsx)(sT, {
        text: t
            ? ea.intl.format(ea.t["2o4lgw"], { nitroTierName: r, onClick: l, premiumMax: 25 })
            : ea.intl.formatToPlainString(ea.t.WfTDdG, { nitroTierName: r }),
        isAtLimit: t,
        analyticsSection: eL.JJy.SCHEDULED_MESSAGES_LIST_UPSELL,
    });
}
let s0 = i.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingRemoval: s, onJump: l } = e,
        r = (0, j.bG)([Q.A], () => Q.A.getChannel(n)),
        { isError: c, stateMessage: o } = (0, e$.Y8)(t.state),
        u = eA.hH.useSetting(),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => (0, sK.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sK.CI)({ scheduledMessage: t });
        }, [t]);
    return null == r
        ? (0, a.jsx)(s1, { scheduledMessageId: t.scheduledMessageId })
        : (0, a.jsxs)(
              "div",
              {
                  className: eK.aP,
                  children: [
                      (0, a.jsx)(ed, {
                          itemId: `header-${t.record.id}`,
                          channel: r,
                          onClick: (e) => (0, eg.n4)(r.id, r.guild_id, sZ, () => l(e)),
                          collapsed: !1,
                          status: (0, a.jsx)(em, {
                              type: c ? "error" : "normal",
                              text: c
                                  ? o
                                  : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(C.e, {
                              size: "sm",
                              className: ei.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.JLba51),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sy.SendMessageIcon,
                                          "aria-label": ea.intl.string(ea.t.JLba51),
                                          disabled: s,
                                          onClick: () => (0, sK.fK)(t.scheduledMessageId),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: b.PencilIcon,
                                          "aria-label": ea.intl.string(ea.t.ZXE1s4),
                                          disabled: s,
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: H.ClockIcon,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          disabled: s,
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sv.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          disabled: s,
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(tr.y, { className: eK.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ex.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sW.Mg : eK.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: s$,
                                            inlineEditor: h
                                                ? (0, a.jsx)(sX, {
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
                                            className: d()(sW.PI, { [sW.oE]: u }),
                                            children: [
                                                (0, a.jsx)(sI.P, { size: "xs", color: "currentColor" }),
                                                (0, a.jsx)(z.E, {
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
function s1(e) {
    let { scheduledMessageId: t } = e;
    return (0, a.jsxs)("div", {
        className: d()(eK.aP, sW.Mh),
        children: [
            (0, a.jsxs)("div", {
                className: sW.WV,
                children: [
                    (0, a.jsx)("div", {
                        className: sW.V2,
                        children: (0, a.jsx)(y.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
                    (0, a.jsx)(I.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ea.intl.string(ea.t.FpeuT5),
                    }),
                ],
            }),
            (0, a.jsx)(C.e, {
                size: "sm",
                className: ei.GC,
                children: (0, a.jsx)(p.m, {
                    text: ea.intl.string(ea.t.O3sL8F),
                    ariaHidden: !0,
                    children: (0, a.jsx)(E.K, {
                        variant: "secondary",
                        size: "sm",
                        icon: sv.a,
                        "aria-label": ea.intl.string(ea.t.O3sL8F),
                        onClick: () => (0, sK.tu)(t),
                    }),
                }),
            }),
        ],
    });
}
var s3 = n(211550);
function s2(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: i,
        handleMentionsJump: r,
        showTutorial: g,
        setSeenTutorial: x,
    } = e;
    return (0, a.jsx)(u.l, {
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, a.jsx)("div", {
            className: d()(s3.k, { [s3.q]: n }),
            children: (0, a.jsx)(c.tH, {
                fallback: (0, a.jsx)(sr, {}),
                children: (0, a.jsx)(h.F, {
                    component: (0, a.jsx)(so, { tab: s, setTab: l, closePopout: i }),
                    children:
                        s === o.Y2.MENTIONS
                            ? (0, a.jsx)(sp, { onJump: r })
                            : s === o.Y2.BOOKMARKS
                              ? (0, a.jsx)(eB, { closePopout: i, type: m.Yf.BOOKMARK }, "bookmarks")
                              : s === o.Y2.REMINDERS
                                ? (0, a.jsx)(eB, { closePopout: i, type: m.Yf.REMINDER }, "reminders")
                                : s === o.Y2.SCHEDULED
                                  ? (0, a.jsx)(sq, { onJump: r })
                                  : (0, a.jsx)(sa, { onJump: r, showTutorial: g, setSeenTutorial: x, closePopout: i }),
                }),
            }),
        }),
    });
}

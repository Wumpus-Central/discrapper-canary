(n.r(t), n.d(t, { default: () => s7 }));
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
    N = n(834730),
    y = n(289873),
    v = n(689175),
    I = n(821609),
    C = n(695366),
    E = n(661531),
    S = n(297264),
    M = n(825484),
    R = n(408278),
    b = n(789645),
    L = n(440971),
    _ = n(22231),
    T = n(99677),
    D = n(442433),
    k = n(148494),
    O = n(928039),
    G = n(793574),
    P = n(688810),
    F = n(139286),
    K = n(559106),
    U = n(939249),
    w = n(320448),
    z = n(778712),
    H = n(97808),
    B = n(812993),
    V = n(406810),
    X = n(397244),
    J = n(714114),
    Y = n(394871),
    W = n(571694),
    Z = n(47167),
    $ = n(713654),
    q = n(598104),
    Q = n(548118),
    ee = n(616356),
    et = n(734057),
    en = n(71393),
    es = n(290863),
    el = n(573163),
    ea = n(287809),
    ei = n(650583),
    er = n(105292),
    ed = n(545760);
let ec = { top: 8, bottom: 8, left: -4, right: -4 };
function eo(e) {
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
        className: ed.N1,
        children: [
            s,
            (0, a.jsx)(K.vN, {
                offset: ec,
                children: (0, a.jsxs)("div", {
                    className: d()(ed.ZO, { [ed.yZ]: i }),
                    ...u,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === ei.dh.ENTER || e.key === ei.dh.SPACE) && e.target === e.currentTarget) {
                            (e.preventDefault(), l(e));
                            return;
                        }
                        null != c && ((e.key === ei.dh.ARROW_RIGHT && i) || (e.key === ei.dh.ARROW_LEFT && !i)) && c();
                    },
                    children: [
                        (0, a.jsx)(U.D, {
                            className: ed.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(eu, { channel: t }),
                        }),
                        (0, a.jsx)(w._, { className: ed.ai, size: "xxs" }),
                        (0, a.jsx)(eh, { channel: t, onClick: l, mentionCount: r }),
                        n,
                    ],
                }),
            }),
        ],
    });
}
function eu(e) {
    let { channel: t } = e,
        n = (0, j.bG)([en.A], () => en.A.getGuild(t.guild_id));
    return null != n
        ? (0, a.jsx)(Q.Ay, { className: ed.Kk, guild: n, size: Q.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, a.jsx)(q.A, { channel: t, size: z._3.SIZE_32, "aria-hidden": !0 })
          : (0, a.jsx)(H.eu, { size: z._3.SIZE_32, src: (0, W.Y)(t), "aria-hidden": !0 });
}
function eh(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([en.A], () => en.A.getGuild(t.guild_id)),
        i = (0, Z.Ay)(t, !1),
        r = (0, j.bG)([el.Ay], () => el.Ay.getIsMentionLowImportance(t.id)),
        d = (0, $.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ed.yP,
        children: [
            (0, a.jsx)(S.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ed.lz,
                children: (0, a.jsxs)(U.D, {
                    className: ed.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, a.jsx)(d, { className: ed.j1, size: "xxs" }),
                        (0, a.jsx)("span", { className: ed.je, children: i }),
                        null != s && s > 0
                            ? (0, a.jsx)("div", {
                                  className: ed.qS,
                                  children: (0, a.jsx)(B.hV, {
                                      count: s,
                                      color: r
                                          ? E.A.colors.BACKGROUND_MOD_STRONG.css
                                          : E.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, a.jsx)(N.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, a.jsx)(em, { channel: t, onClick: n }),
            }),
        ],
    });
}
function em(e) {
    let { channel: t, onClick: n } = e,
        s = (0, j.bG)([en.A], () => en.A.getGuild(t.guild_id)),
        l = (0, j.bG)([et.A], () => et.A.getChannel(t.parent_id)),
        i = (0, Z.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: er.intl.formatToPlainString(er.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eg, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(U.D, { className: d()(ed.je, ed.J5), onClick: n, children: r }) : null;
}
function eg(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: i,
        } = (0, j.cf)([ea.default, es.A, ee.A], () => {
            let e = ea.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? es.A.getStatus(e.id) : null,
                activities: null != e ? es.A.getActivities(e.id) : null,
                applicationStream: null != e ? ee.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, J.Ay)({ userId: n?.id });
    return (0, X.A)({ activities: l, status: s, applicationStream: i, voiceChannel: r })
        ? (0, a.jsx)(Y.A, { user: n, activities: l, applicationStream: i, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function ex(e) {
    let { type: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: ed.h5,
        children: [
            "error" === t
                ? (0, a.jsx)(C.E, { size: "xs", color: "currentColor", className: ed.ik })
                : (0, a.jsx)(V.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var eA = n(642213),
    ef = n(636922),
    ej = n(253932),
    ep = n(576705),
    eN = n(927813),
    ey = n(704456),
    ev = n(85109);
n(321073);
var eI = n(403362),
    eC = n(741097),
    eE = n(470654);
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
function eM(e) {
    return eS(e).map((e) => e.saveData);
}
var eR = n(606096),
    eb = n(803306),
    eL = n(320095),
    e_ = n(963852),
    eT = n(20851),
    eD = n(889227),
    ek = n(652215),
    eO = n(897781),
    eG = n(490611),
    eP = n(144273);
function eF(e) {
    let { type: t } = e,
        n = t === m.Yf.REMINDER,
        s = er.intl.string(n ? er.t.aUXxzT : er.t["2pAkDA"]),
        l = n
            ? "https://cdn.discordapp.com/assets/content/995c79565fdbe049160aefe22dc300af4abbae1146c475d5f8b3b8c85173aabc.svg"
            : eG.A;
    return (0, a.jsx)("div", {
        className: eO.kL,
        children: (0, a.jsxs)("div", {
            className: eO.vW,
            children: [
                (0, a.jsx)("img", { src: l, className: eO.Tn, alt: s }),
                (0, a.jsx)(S.D, {
                    className: eO.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: er.intl.string(n ? er.t["5Iw19e"] : er.t["93WOd1"]),
                }),
                (0, a.jsx)("div", {
                    className: eO.rf,
                    children: (0, a.jsx)(N.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: er.intl.format(n ? er.t["E+qms7"] : er.t.legvTg, {
                            itemName: er.intl.string(n ? er.t.mJ3P0N : er.t.tpxJto),
                        }),
                    }),
                }),
                (0, a.jsx)(eK, { isReminder: n }),
            ],
        }),
    });
}
function eK(e) {
    let { isReminder: t } = e,
        n = i.useMemo(() => {
            let e = new eD.A({ id: "313338", username: er.intl.string(er.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eb.nj(e);
            return (
                null != t && (t.getAvatarURL = () => eP.A),
                [er.intl.string(er.t["h+KPxy"]), er.intl.string(er.t["63EVpI"]), er.intl.string(er.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eL.rh)({
                            ...(0, e_.Ay)({ channelId: "1338", content: n }),
                            state: ek.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return ((l.author = t ?? e), l);
                    },
                )
            );
        }, []);
    return (0, a.jsx)("div", {
        className: eO.qJ,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: eO.DZ,
            children: n.map((e, n) =>
                (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)(eT.A, {
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
                                      className: eO.MK,
                                      children: [
                                          (0, a.jsx)(eU, {
                                              icon: eR.BookmarkIcon,
                                              label: er.intl.string(er.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(eU, {
                                              icon: V.ClockIcon,
                                              label: er.intl.string(er.t.mJ3P0N),
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
function eU(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(eO.KT, { [eO.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function ew(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, ey.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ey.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(ex, { type: l ? "error" : "normal", text: s });
}
var ez = n(216623),
    eH = n(294002),
    eB = n(414676);
let eV = "Bookmarks",
    eX = "Reminders";
function eJ(e) {
    let { closePopout: t, type: n } = e,
        {
            savedMessages: s,
            fetchState: l,
            loadMore: r,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = i.useState(() => eM(e)),
                s = i.useRef(ev.A.getIsStale());
            (i.useEffect(() => {
                let t = ev.A.getLastChanged();
                function l() {
                    let l = ev.A.getLastChanged();
                    if (t !== l) {
                        if (((t = l), s.current && !ev.A.getIsStale())) {
                            ((s.current = !1), n(eM(e)));
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
                (0, eE.A)());
            let l = (0, eC.A)(e !== m.Yf.REMINDER);
            return {
                savedMessages: (0, j.yK)([ev.A], () =>
                    t.map((e) => ev.A.getSavedMessage(e.channelId, e.messageId)).filter(eI.Vq),
                ),
                ...l,
            };
        })(n),
        { remove: d, error: c } = (function () {
            let [e, t] = i.useState(null),
                n = i.useRef(!1),
                s = i.useRef(new Set());
            return (
                i.useEffect(
                    () => (
                        (n.current = !0),
                        () => {
                            n.current = !1;
                        }
                    ),
                    [],
                ),
                {
                    remove: i.useCallback(async (e) => {
                        if (!(!n.current || s.current.has(e.messageId))) {
                            (0 === s.current.size && t(null), s.current.add(e.messageId));
                            try {
                                await (0, ez.cf)(e);
                            } catch (e) {
                                n.current && t(e?.body?.message ?? er.intl.string(er.t.R0RpRX));
                            } finally {
                                s.current.delete(e.messageId);
                            }
                        }
                    }, []),
                    error: e,
                }
            );
        })(),
        o =
            null != c
                ? (0, a.jsx)(N.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      role: "alert",
                      className: eH.z3,
                      children: c,
                  })
                : null,
        u = l === m.Z7.LOADED_HAS_MORE,
        h = (0, j.bG)([ev.A], () => ev.A.getBookmarkCount()),
        g = n === m.Yf.BOOKMARK ? h : s.length,
        { analyticsLocations: x } = (0, P.Ay)(G.A.FOR_LATER_POPOUT);
    (0, F.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { tab_type: n, total_count: g, overdue_count: ev.A.getOverdueMessageReminderCount() },
        },
        {},
        [g],
    );
    let p = i.useRef(null),
        C = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && u && r();
        }, [u, r]),
        E = (0, O.A)("for-later", p);
    ((0, eA.xN)(p), (0, eA.yW)(n === m.Yf.BOOKMARK ? eV : eX));
    let [S, M] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => M(new Date()), eN.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? l === m.Z7.LOADING || u
            ? (0, a.jsxs)("div", {
                  className: eH.MY,
                  children: [o, (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(y.y, {}) })],
              })
            : (0, a.jsxs)(P.f5, { value: x, children: [o, (0, a.jsx)(eF, { type: n })] })
        : (0, a.jsx)(P.f5, {
              value: x,
              children: (0, a.jsxs)("div", {
                  className: eH.MY,
                  children: [
                      o,
                      (0, a.jsx)(f.hD, {
                          navigator: E,
                          children: (0, a.jsx)(f.PR, {
                              children: (e) => {
                                  let { ref: n, ...i } = e;
                                  return (0, a.jsxs)(v.Ch, {
                                      ref: (e) => {
                                          ((p.current = e), (n.current = e?.getScrollerNode() ?? null));
                                      },
                                      className: eB.XG,
                                      onScroll: u ? C : void 0,
                                      ...i,
                                      children: [
                                          s.map((e) =>
                                              (0, a.jsx)(
                                                  eY,
                                                  { savedMessage: e, closePopout: t, throttledNow: S, onRemove: d },
                                                  e.saveData.messageId,
                                              ),
                                          ),
                                          l === m.Z7.LOADING
                                              ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(y.y, {}) })
                                              : u
                                                ? (0, a.jsx)("div", {
                                                      className: eH.u9,
                                                      children: (0, a.jsx)(I.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          fullWidth: !0,
                                                          text: er.intl.string(er.t.XBlaiC),
                                                          onClick: r,
                                                      }),
                                                  })
                                                : null,
                                      ],
                                  });
                              },
                          }),
                      }),
                  ],
              }),
          });
}
function eY(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s, onRemove: l } = e,
        r = (0, ey.vr)(t),
        c = i.useCallback(
            async (e) => {
                (await (0, ey.le)(t, r),
                    e.shiftKey || n(),
                    k.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eX : eV));
            },
            [n, t, r],
        ),
        o = (0, j.bG)(
            [ep.A],
            () => !!(r?.type === ek.rbe.UNKNOWN || r?.isPrivate()) || ep.A.can(ek.xBc.VIEW_CHANNEL, r),
        );
    return null != r && null != t.message && o
        ? (0, a.jsxs)("div", {
              className: eB.aP,
              children: [
                  (0, a.jsx)(eo, {
                      itemId: `header-${t.message.id}`,
                      channel: r,
                      onClick: (e) => {
                          (c(e), n());
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(ew, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(M.e, {
                          size: "sm",
                          className: ed.GC,
                          children: (0, a.jsx)(eW, { savedMessage: t, jumpToMessage: c, throttledNow: s, onRemove: l }),
                      }),
                  }),
                  (0, a.jsx)(
                      ef.A,
                      {
                          message: t.message,
                          channel: r,
                          className: eB.YD,
                          compact: ej.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d()(eB.aP, eH.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: eH.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: eH.Bx,
                              children: (0, a.jsx)(C.E, { size: "xxs", color: E.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, a.jsx)(S.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? er.intl.string(er.t["wuQm+j"])
                                      : er.intl.string(er.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(M.e, {
                      size: "sm",
                      className: ed.GC,
                      children: (0, a.jsx)(p.m, {
                          text: er.intl.string(null != t.saveData.dueAt ? er.t["a6gcZ/"] : er.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(R.K, {
                              variant: "secondary",
                              "aria-label": er.intl.string(null != t.saveData.dueAt ? er.t["a6gcZ/"] : er.t.SvXS1Z),
                              size: "sm",
                              icon: b.P,
                              onClick: () => l(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eW(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: l, onRemove: i } = e;
    x()(null != t.message, "Saved message must be cached for For Later action buttons");
    let r = er.intl.string(null != t.saveData.dueAt ? er.t["a6gcZ/"] : er.t.SvXS1Z),
        d = null != t.saveData.dueAt && l > t.saveData.dueAt,
        c = er.intl.string(d ? er.t.GtBCnz : er.t.vrbqs1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, a.jsx)(p.m, {
                      text: c,
                      ariaHidden: !0,
                      children: (0, a.jsx)(R.K, {
                          variant: "secondary",
                          "aria-label": c,
                          size: "sm",
                          icon: d ? L.R : _.PencilIcon,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("275133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          label: er.intl.string(d ? er.t.GtBCnz : er.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, a.jsx)(p.m, {
                text: er.intl.string(er.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, a.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t["+TSRGD"]),
                    size: "sm",
                    icon: T.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, a.jsx)(p.m, {
                text: r,
                ariaHidden: !0,
                children: (0, a.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": r,
                    size: "sm",
                    icon: b.P,
                    onClick: () => i(t.saveData),
                }),
            }),
        ],
    });
}
var eZ = n(702841),
    e$ = n(912592),
    eq = n(890856),
    eQ = n(761508),
    e0 = n(566908),
    e1 = n(214947),
    e3 = n(711950),
    e2 = n(322387),
    e7 = n(912309),
    e8 = n(174459),
    e6 = n(198476);
function e4(e) {
    let { closePopout: t } = e,
        n = (0, e7.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: er.intl.string(er.t["lMR96+"]),
        children: (0, a.jsxs)(U.D, {
            "aria-label": `${er.intl.string(er.t["lMR96+"])}, ${n}`,
            className: e6.b,
            onClick: () => {
                (e8.default.track(ek.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: e2.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    e3.A.transitionToSection(ek.m3P.PENDING, { explicit: !0 }),
                    t());
            },
            children: [
                (0, a.jsx)(e1.$, { size: "xs", color: "currentColor" }),
                n > 0 && (0, a.jsx)(B.hV, { count: n, color: E.A.colors.BACKGROUND_MOD_STRONG.css, className: e6.D }),
            ],
        }),
    });
}
var e5 = n(980707),
    e9 = n(477782),
    te = n(265872),
    tt = n(783977),
    tn = n(378939),
    ts = n(309010),
    tl = n(409686);
function ta(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([et.A, ts.Ay], () => et.A.getChannel(ts.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([tl.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tl.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(e5.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": er.intl.string(er.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(e9.sL, {
                id: "Everyone",
                label: er.intl.string(er.t.cdyUsV),
                action: function () {
                    tn.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(e9.sL, {
                id: "Roles",
                label: er.intl.string(er.t.lZejCq),
                action: function () {
                    tn.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(e9.sL, {
                      id: "All Servers",
                      label: er.intl.string(er.t.GWMA6s),
                      action: function () {
                          tn.A.setGuildFilter({
                              guildFilter: r === ek.KE7.THIS_SERVER ? ek.KE7.ALL_SERVERS : ek.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === ek.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function ti() {
    let e = i.useRef(null);
    return (0, a.jsx)(te.Y, {
        targetElementRef: e,
        align: "right",
        animation: te.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ta, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: er.intl.string(er.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(R.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t.pEasFX),
                    icon: tt.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tr = n(481613),
    td = n.n(tr),
    tc = n(621466),
    to = n(192308),
    tu = n(73153),
    th = n(964486),
    tm = n(775602),
    tg = n(625494),
    tx = n(723702),
    tA = n(303727),
    tf = n(435842);
function tj(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, a.jsxs)("div", {
        className: tf.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tf.zc,
                children: [
                    (0, a.jsx)(t, { color: "currentColor", size: "custom", className: tf.Kk, width: 36, height: 36 }),
                    l ? null : (0, a.jsx)(tA.A, { className: tf.uf }),
                ],
            }),
            (0, a.jsx)(S.D, { className: tf.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(N.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(N.E, {
                              tag: "span",
                              className: tf.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [er.intl.string(er.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tp = n(862482),
    tN = n(143838),
    ty = n(640238);
function tv(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        (t(),
            e8.default.track(ek.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tI, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: er.intl.string(er.t["8k+6QY"]),
                children: (0, a.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t["8k+6QY"]),
                    size: "sm",
                    icon: tN.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tI(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(ty.M, {
        dismissable: !0,
        header: er.intl.string(er.t.h4bVZ2),
        confirmText: er.intl.string(er.t.e6RscS),
        cancelText: er.intl.string(er.t["ETE/oC"]),
        confirmButtonColor: tp.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(N.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: er.intl.string(er.t["0MQ0Bf"]),
        }),
    });
}
var tC = n(941143),
    tE = n(717421),
    tS = n(334738),
    tM = n(666860),
    tR = n(976860),
    tb = n(847374),
    tL = n(907847);
function t_(e) {
    let { collapsed: t, onClick: n } = e,
        s = er.intl.string(t ? er.t.dcl9MQ : er.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(U.D, {
            className: tL.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tb.a, { className: d()(tL.ai, { [tL.yZ]: t }), size: "xs" }),
        }),
    });
}
var tT = n(585517);
let tD = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tk = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tO(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tE.z)(() => (t ? tD : tk), "respect-motion-settings", []),
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
                          immediate: tm.Ay.useReducedMotion,
                      })
                    : r({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tm.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && r({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, r]),
        (0, a.jsx)(tC.animated.div, {
            className: tT.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tG = n(311283),
    tP = n(933832);
function tF(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, tG.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? er.intl.string(er.t["5lLMhM"]) : er.intl.string(er.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(R.K, {
            variant: "secondary",
            "aria-label": i ? er.intl.string(er.t["5lLMhM"]) : er.intl.string(er.t.e6RscS),
            size: "sm",
            icon: i ? tN.i : tP.CheckmarkLargeIcon,
            onClick: function () {
                (i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tM.zV)(ek.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    }));
            },
        }),
    });
}
var tK = n(782603),
    tU = n(461678),
    tw = n(914703);
function tz(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(te.Y, {
        targetElementRef: n,
        align: "right",
        animation: te.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(tw.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: er.intl.string(er.t.ljs3Oe),
                  })
                : (0, a.jsx)(tU.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: er.intl.string(er.t.ljs3Oe),
                      location: { section: ek.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(p.m, {
                text: er.intl.string(er.t.h850Ss),
                targetElementRef: n,
                children: (0, a.jsx)(R.K, {
                    "aria-label": er.intl.string(er.t.h850Ss),
                    icon: tK.BellIcon,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tH = n(435558),
    tB = n.n(tH),
    tV = n(350527),
    tX = n(218152),
    tJ = n(970278),
    tY = n(747926),
    tW = n(935208),
    tZ = n(37411),
    t$ = n(278489);
function tq(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [tJ.A, et.A],
            () =>
                tB()(tJ.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tW.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return et.A.getChannel(t);
                    })
                    .filter(eI.Vq)
                    .sort((e, t) => tW.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        r = i.useCallback((e, t) => {
            (0, tY.JA)(e, t, tZ.H9.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                ((0, tS.ack)(
                    t.channelId,
                    {
                        section: ek.JJy.INBOX,
                        object: ek.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                        objectType: ek.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                ),
                s(t.channelId));
        }),
        (0, a.jsx)("div", {
            className: t$.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    tX.Cp,
                    { channel: n, children: (0, a.jsx)(tV.Ay, { className: t$.u, threadId: e.id, goToThread: r }) },
                    e.id,
                ),
            ),
        })
    );
}
var tQ = n(536637),
    t0 = n.n(tQ),
    t1 = n(123292),
    t3 = n(857069),
    t2 = n(749314),
    t7 = n(33358),
    t8 = n(384231),
    t6 = n(207133),
    t4 = n(704413),
    t5 = n(9842),
    t9 = n(994500),
    ne = n(5095),
    nt = n(143413),
    nn = n(763754),
    ns = n(467073),
    nl = n(491182),
    na = n(860227),
    ni = n(908239),
    nr = n(837528),
    nd = n(754459),
    nc = n(941308),
    no = n(824556),
    nu = n(699352),
    nh = n(715628),
    nm = n(752636),
    ng = n(64369),
    nx = n(268719),
    nA = n(234957),
    nf = n(888675),
    nj = n(381941),
    np = n(845806),
    nN = n(13673);
let ny = i.memo(function e(t) {
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
        m = ek.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([t5.A], () => t5.A.getMessageByReference(m)),
        x = (0, j.bG)([et.A], () =>
            l.type === ek.lAJ.THREAD_STARTER_MESSAGE && g.state === t5.a.LOADED
                ? et.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = ej.X6.useSetting(),
        f = ej.hD.useSetting(),
        p = ej.rs.useSetting(),
        N = ej.kt.useSetting(),
        y = (0, t8.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        v = (0, t6.A)(s?.id),
        { disableReactionCreates: I } = (0, ns.A)(s),
        { setPopout: C } = (0, nd.A)(l.id, nj.Fd),
        E = (0, nr.VL)(l, s, C, v),
        {
            content: S,
            hasSpoilerEmbeds: M,
            hasBailedAst: R,
        } = (0, nc.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        b = (0, nn.Ay)(l),
        L = (0, j.bG)(
            [et.A],
            () => l.hasFlag(ek.pr7.HAS_THREAD) && et.A.getChannel(tW.default.castMessageIdAsChannelId(l.id)),
        ),
        _ = l.type === ek.lAJ.THREAD_STARTER_MESSAGE && g.state === t5.a.LOADED && null != x,
        T = !_ && void 0 === n,
        D = (0, no.A)({ message: l, channel: s, announcementEnabled: T }),
        k = (0, t7.P)(l),
        O = (0, ne._f)(l.id, l.channel_id),
        G = (0, t4.A)(l),
        P = (0, na.fF)(l);
    return _
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (t9.A.isBlockedForMessage(l) ? (n = er.t["+FcYM/"]) : t9.A.isIgnoredForMessage(l) && (n = er.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(nv, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(nl.A, {
                compact: i,
                className: d()(r, { [nN.M1]: (0, eL.ec)(l), [nN.XN]: u, [nN._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nA.A)(l, s, m, g, i),
                childrenHeader: (0, nm.A)({ ...t, author: b, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(ni.iV, {
                    renderAccessories: nu.A,
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: M,
                    hasBailedAst: R,
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
                childrenExecutedCommand: (0, nx.A)(l, s, i),
                childrenMessageContent: (0, nh.A)(t, S),
                childrenSystemMessage: (0, ng.A)(t),
                onContextMenu: c,
                onClick: o,
                hasThread: !1 !== h && null != L && l.hasFlag(ek.pr7.HAS_THREAD),
                hasReply: l.type === ek.lAJ.REPLY,
                isSystemMessage: (0, nt.A)(l),
                messageRef: D,
                author: b,
                "aria-labelledby": P,
                "aria-roledescription": er.intl.string(er.t.BAB0yK),
            });
});
function nv(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(nl.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nf.A, {
            compact: s,
            className: np.L9,
            iconNode: (0, a.jsx)(b.P, { size: "md", color: "currentColor", className: np.Q6 }),
            children: (0, a.jsx)("div", { className: np.Fo, children: er.intl.format(l, { count: n }) }),
        }),
    });
}
var nI = n(58703),
    nC = n(222831);
function nE(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(U.D, {
        className: d()(nC.n, t),
        onClick: function (e) {
            (l(!0), n(e));
        },
        children: s
            ? (0, a.jsx)(y.y, { type: y.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(N.E, { variant: "text-xs/medium", className: nC.Q, children: er.intl.string(er.t.k5WiPf) }),
    });
}
var nS = n(143236),
    nM = n(323073),
    nR = n(181079),
    nb = n(567035),
    nL = n(679164),
    n_ = n(455234),
    nT = n(863005),
    nD = n(152007),
    nk = n(607508),
    nO = n(594061),
    nG = n(617617),
    nP = n(95701),
    nF = n(808728),
    nK = n(232835),
    nU = n(711014),
    nw = n(543465),
    nz = n(790782),
    nH =
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
    nB = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let nV = "1539033557786173450";
class nX extends nS.EventEmitter {
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
                if (t.messages.some(nL.$r)) return (k.A.clearChannel(e.channelId), { ...e, messages: [] });
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
                return (0, eI.xb)(e);
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
        "guild-events" === e.type
            ? tS.hK(e.guildId, nz.P.GUILD_EVENT, n)
            : tS.ack(
                  t,
                  {
                      section: ek.JJy.INBOX,
                      object: ek.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                      objectType: ek.AnalyticsObjectTypes.ACK_AUTOMATIC,
                  },
                  !0,
                  void 0,
                  n,
              );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              tm.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        "guild-events" === e.type
            ? tS.hK(e.guildId, nz.P.GUILD_EVENT, e.oldestReadMessageId)
            : tS.ack(
                  e.channelId,
                  {
                      section: ek.JJy.INBOX,
                      object: ek.ZSU.UNDO_MARK_AS_READ,
                      objectType: ek.AnalyticsObjectTypes.ACK_MANUAL,
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
        ((0, nb.A)([e], ek.JJy.INBOX),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore());
    };
    deleteChannel = (e) => {
        (this.setState({
            scrollToChannelIndex: tB().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore());
    };
    markAllRead = () => {
        (tS.Uq(
            this.state.channels.map((e) => ({
                channelId: e.channelId,
                messageId: e.newestUnreadMessageId,
                readStateType: "guild-events" === e.type ? nz.P.GUILD_EVENT : nz.P.CHANNEL,
            })),
        ),
            this.setState({ channels: [] }));
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tB().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        ((l[t] = d),
            (0, nO.ji)(
                n,
                "guild-events" === r.type ? nV : t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nO.Sb.FREQUENT_USER_ACTION,
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
            "guild-events" === e.type ? !nW(e.guildId) : !nw.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
        );
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nD.A.isMuted(e.channelId));
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
        k.A.clearChannel(e.channelId);
        let t = k.A.fetchMessages({
            channelId: e.channelId,
            limit: ek.EMb,
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
        s = nK.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tW.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tW.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tW.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function nY() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nG.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    if (s === nV) {
                        e[tW.default.cast(n)] = t[n].channels[s].collapsedInInbox;
                        continue;
                    }
                    let l = et.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            et.A.getSortedPrivateChannels().forEach((n) => nZ(e, t, null, n.id)),
            nU.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nF.Ay.getSelectableChannelIds(n),
                    l = nT.A.getActiveJoinedUnreadThreadsForGuild(n);
                (s.forEach((s) => {
                    nZ(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nZ(e, t, n, s);
                }),
                    (function (e, t, n) {
                        if (nW(n) || !el.Ay.hasUnreadOrMentions(n, nz.P.GUILD_EVENT)) return;
                        let s = el.Ay.lastMessageId(n, nz.P.GUILD_EVENT);
                        if (null == s) return;
                        let l = tW.default.cast(n),
                            a = el.Ay.ackMessageId(n, nz.P.GUILD_EVENT);
                        if (null == a) {
                            let e = en.A.getGuild(n);
                            if (e?.joinedAt == null) return;
                            a = tW.default.fromTimestamp(e.joinedAt.getTime());
                        }
                        tW.default.compare(a, s) >= 0 ||
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
                                mentionCount: el.Ay.getMentionCount(n, nz.P.GUILD_EVENT),
                                sortOrder: 5,
                                order: 0,
                            });
                    })(e, t, n));
            }),
            tB().sortBy(t, (e) => e.sortOrder)),
        l = tB()
            .uniq(s.map((e) => e.guildId))
            .filter(eI.Vq);
    return (
        tu.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nW(e) {
    return nw.Ay.isMuted(e) || nw.Ay.isMuteScheduledEventsEnabled(e);
}
function nZ(e, t, n, s) {
    if (null == s) return;
    let l = et.A.getChannel(s);
    if (null == l || (!nP.Le.has(l.type) && nw.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === el.Ay.getMentionCount(s)) return;
    } else if (!(0, n_.Y)(l) && 0 === el.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ep.A.can(ek.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = el.Ay.ackMessageId(s);
    if (null == a) {
        let e = en.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tW.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = el.Ay.getOldestUnreadMessageId(s),
        r = el.Ay.lastMessageId(s),
        d = el.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || tW.default.compare(a, r) >= 0) return;
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
            let s = et.A.getChannel(t);
            if (nR.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (el.Ay.getMentionCount(t) > 0) return el.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tW.default.extractTimestamp(n);
                if (Date.now() - e > nq) return 8;
                if (Date.now() - e > n$) return 6;
            }
            if (s.isThread()) {
                let e = (0, nk.l)(s);
                return e === tZ.CP.ALL_MESSAGES ? 4 : e === tZ.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nw.Ay.getChannelMessageNotifications(e, t),
                    s = n === ek.orn.NULL ? nw.Ay.getMessageNotifications(e) : n;
                return s === ek.orn.ALL_MESSAGES ? 4 : s === ek.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nM.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n$ = 2 * eN.A.Millis.DAY,
    nq = 10 * eN.A.Millis.DAY;
var nQ = n(743373);
let n0 = { left: 4, right: -12 },
    n1 = [ek.lAJ.THREAD_CREATED];
function n3(e) {
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
        o = n1.includes(n.type);
    return (0, a.jsx)(K.vN, {
        offset: n0,
        children: (0, a.jsxs)("div", {
            className: nQ.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(nE, { className: nQ.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(ny, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nQ.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function n2(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = ej.hH.useSetting(),
        i = 0 === t.messages.length || t0()(t.messages[0].timestamp).isSame(t0()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nI.i$)(e.timestamp, "LL");
            (r.push((0, a.jsx)(t2.A, { className: nQ.yF, children: t }, t)), (d = t0()(e.timestamp)));
        }
        let t = null == c || (0, t3.A)(n, c, e);
        ((c = e),
            r.push((0, a.jsx)(n3, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id)));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tW.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: nQ.Gr,
                        children: (0, a.jsx)(t1.Q, {
                            variant: "primary",
                            text: `${er.intl.string(er.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(y.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: nQ.DZ, children: r })
    );
}
var n7 = n(81466),
    n8 = n(508654),
    n6 = n(29414);
let n4 = { top: 8, bottom: 8, left: -4, right: -4 };
function n5(e) {
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
        className: ed.N1,
        children: (0, a.jsx)(K.vN, {
            offset: n4,
            children: (0, a.jsxs)("div", {
                className: d()(ed.ZO, { [ed.yZ]: r }),
                ...h,
                onKeyDown: function (e) {
                    if ((e.key === ei.dh.ENTER || e.key === ei.dh.SPACE) && e.target === e.currentTarget) {
                        (e.preventDefault(), i(e));
                        return;
                    }
                    null != o && ((e.key === ei.dh.ARROW_RIGHT && r) || (e.key === ei.dh.ARROW_LEFT && !r)) && o();
                },
                children: [
                    (0, a.jsx)(U.D, {
                        className: ed.YT,
                        onClick: i,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(Q.Ay, {
                            className: ed.Kk,
                            guild: t,
                            size: Q.Ay.Sizes.SMALL,
                            showTooltip: !0,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, a.jsx)(w._, { className: ed.ai, size: "xxs" }),
                    (0, a.jsxs)("div", {
                        className: ed.yP,
                        children: [
                            (0, a.jsx)(S.D, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ed.lz,
                                children: (0, a.jsxs)(U.D, {
                                    className: ed.Ru,
                                    onClick: i,
                                    children: [
                                        (0, a.jsx)(s, { className: ed.j1, size: "xxs" }),
                                        (0, a.jsx)("span", { className: ed.je, children: n }),
                                        null != c && c > 0
                                            ? (0, a.jsx)("div", {
                                                  className: ed.qS,
                                                  children: (0, a.jsx)(B.hV, {
                                                      count: c,
                                                      color: E.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, a.jsx)(N.E, {
                                color: "text-default",
                                variant: "text-xs/normal",
                                children: (0, a.jsx)(U.D, {
                                    className: d()(ed.je, ed.J5),
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
var n9 = n(82732);
function se(e) {
    let { channel: t, deleteChannel: s, toggle: l, onJump: r, getNumUnreadChannels: d } = e,
        { guildId: c } = t,
        o = (0, j.bG)([en.A], () => en.A.getGuild(c), [c]),
        u = (0, n8.Ay)(c),
        m = i.useMemo(
            () =>
                u
                    .filter(
                        (e) =>
                            tW.default.compare(e.id, t.oldestReadMessageId) > 0 &&
                            0 >= tW.default.compare(e.id, t.newestUnreadMessageId),
                    )
                    .sort((e, t) => tW.default.compare(e.id, t.id)),
            [u, t.oldestReadMessageId, t.newestUnreadMessageId],
        );
    if (
        (i.useEffect(() => {
            null == o ||
                t.collapsed ||
                0 !== m.length ||
                ((0, tS.hK)(c, nz.P.GUILD_EVENT, t.newestUnreadMessageId), s(t.channelId));
        }),
        null == o)
    )
        return null;
    function g() {
        (l(t),
            (0, tM.zV)(ek.HAw.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: c,
                num_unread_channels_remaining: d() ?? 0,
                is_now_collapsed: !t.collapsed,
            }));
    }
    return (0, a.jsx)("div", {
        className: eB.aP,
        children: (0, a.jsx)(h.F, {
            component: (0, a.jsxs)(n5, {
                guild: o,
                name: er.intl.string(er.t.tlopTM),
                Icon: n7.CalendarIcon,
                onClick: function (e) {
                    ((0, to.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("694303"),
                            n.e("256373"),
                            n.e("752695"),
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
                    (0, a.jsx)(M.e, { size: "sm", className: ed.GC, children: (0, a.jsx)(tF, { ...e }) }),
                    (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: g }),
                ],
            }),
            children: (0, a.jsx)(tO, {
                collapsed: t.collapsed,
                children: (0, a.jsx)("div", {
                    className: n9.k,
                    children: m.map((e) => (0, a.jsx)(n6.A, { className: n9.f, guildEvent: e, truncate: !0 }, e.id)),
                }),
            }),
        }),
    });
}
let st = "Inbox",
    sn = i.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tE.z)(
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
        return (0, a.jsx)(tC.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(ss, { ...e }),
        });
    }),
    ss = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            r = (0, j.bG)([et.A], () => et.A.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == r ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    ((0, tS.ack)(
                        t.channelId,
                        {
                            section: ek.JJy.INBOX,
                            object: ek.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                            objectType: ek.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                    s(t.channelId));
            }),
            !t.hasLoadedAnything)
        )
            return null;
        if ("guild-events" === t.type) return (0, a.jsx)(se, { ...e, channel: t });
        if (null == r) return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eA.n4)(t.channelId, t.guildId, st, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                (k.A.trackJump(t.channelId, l, st), (0, tR.pX)(ek.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e));
            }
        }
        function c() {
            (l(t),
                (0, tM.zV)(ek.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                }));
        }
        return (0, a.jsx)("div", {
            className: eB.aP,
            children: (0, a.jsx)(h.F, {
                component: (0, a.jsxs)(eo, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(M.e, {
                            size: "sm",
                            className: ed.GC,
                            children: [(0, a.jsx)(tz, { channel: r }), (0, a.jsx)(tF, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: c })
                            : (0, a.jsx)("div", { className: ed.Pt }),
                    ],
                }),
                children: (0, a.jsx)(tO, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, a.jsx)(n2, { channel: t, channelRecord: r, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, a.jsx)(tq, { channel: t, channelRecord: r, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
var sl = n(171664),
    sa = n(173615);
function si(e) {
    var t, n, s, l, r, c;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = i.useRef(null),
        x = (0, O.A)("unreads", g);
    ((0, eA.xN)(g), (0, eA.yW)(st));
    let [A, p] = (function (e) {
            let [t, n] = i.useState(() => new nX(nY(), e)),
                [s, l] = i.useState(!1),
                a = i.useRef(Date.now()),
                [r, d] = i.useState(() => nY());
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
                        i = nY();
                    0 === i.channels.length || t - a.current < 10 * eN.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nX(i, e)));
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
                    () => (nK.A.addChangeListener(t.reloadMessages), () => nK.A.removeChangeListener(t.reloadMessages)),
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
                        nD.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nD.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
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
        { loadState: N, channels: I } = A,
        { maybeLoadMore: C } = p,
        E = (0, j.bG)([tm.Ay], () => tm.Ay.messageGroupSpacing);
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
            tg._.subscribe(ek.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tg._.unsubscribe(ek.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (c = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, to.hasAnyModalOpen)()) return;
            let t = (0, tc.BF)(e)?.activeElement;
            (0, tc.Cw)(t) ||
                (((0, tx.isMac)() || (0, tx.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tu.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tu.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, th.Ay)(
        () => (
            tg._.subscribe(ek.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tg._.unsubscribe(ek.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === I.length)
        ? (0, a.jsx)(tj, {
              Icon: e$.InboxIcon,
              header: er.intl.string(er.t["6XMM+D"]),
              tip: td().os?.family === "OS X" ? er.intl.string(er.t.w9uDOW) : er.intl.string(er.t.BiUJC6),
          })
        : (0, a.jsx)(f.hD, {
              navigator: x,
              children: (0, a.jsx)(f.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, a.jsxs)(v.Ch, {
                          ref: (e) => {
                              ((g.current = e), (t.current = e?.getScrollerNode() ?? null));
                          },
                          ...n,
                          onScroll: N === nB.Done ? void 0 : C,
                          className: d()(eB.XG, `group-spacing-${E}`),
                          children: [
                              u ? (0, a.jsx)(sr, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tB().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nH.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            t2.A,
                                                            {
                                                                className: sl.y,
                                                                contentClassName: sl.$,
                                                                children: er.intl.string(er.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nH.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            t2.A,
                                                            {
                                                                className: sl.y,
                                                                contentClassName: sl.$,
                                                                children: er.intl.string(er.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, a.jsx)(
                                                  sn,
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
                              })(I, p, o),
                              N === nB.Done ? null : (0, a.jsx)(y.y, { className: sa.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sr(e) {
    let { setSeenTutorial: t } = e;
    return (0, a.jsxs)("div", {
        className: sa.d$,
        children: [
            (0, a.jsx)("div", {
                className: sa.cm,
                children: (0, a.jsx)(e$.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(S.D, {
                        className: sa.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: er.intl.string(er.t.vZPktJ),
                    }),
                    (0, a.jsx)(N.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: er.intl.string(er.t.vWkIII),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sa.dh,
                        children: (0, a.jsx)(I.$, {
                            variant: "primary",
                            size: "sm",
                            text: er.intl.string(er.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sd() {
    return (0, a.jsx)(tj, {
        Icon: e$.InboxIcon,
        disableStars: !0,
        header: er.intl.string(er.t["KG/ynf"]),
        tip: er.intl.string(er.t.cvcKzX),
    });
}
function sc() {
    return (0, a.jsx)(tv, { onClick: () => tg._.dispatch(ek.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var so = n(113164);
function su(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, e0.Sc)(),
        i = (0, eZ.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: so.wx,
        children: [
            (0, a.jsxs)("div", {
                className: so.qd,
                children: [
                    (0, a.jsx)(e$.InboxIcon, { size: "md", color: "currentColor", className: so.yH }),
                    (0, a.jsx)(S.D, {
                        className: so.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: er.intl.string(er.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(eq.s, {
                        className: so.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": er.intl.string(er.t["8k+6QY"]),
                        children: [(0, a.jsx)(sh, { tab: t }), (0, a.jsx)(e4, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: so.YF,
                children: (0, a.jsxs)(eQ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: so.$H,
                    children: [
                        (0, a.jsx)(eQ.V.Item, {
                            id: o.Y2.UNREADS,
                            "aria-label": er.intl.string(er.t.sRUdB8),
                            className: so.Mf,
                            children: (0, a.jsx)("span", { className: so.Gn, children: er.intl.string(er.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t.GRZF96),
                            id: o.Y2.MENTIONS,
                            className: so.Mf,
                            children: (0, a.jsx)("span", { className: so.Gn, children: er.intl.string(er.t.GRZF96) }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t["2pAkDA"]),
                            id: o.Y2.BOOKMARKS,
                            className: so.Mf,
                            children: (0, a.jsx)("span", {
                                className: so.Gn,
                                children: er.intl.string(er.t["2pAkDA"]),
                            }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t.aUXxzT),
                            id: o.Y2.REMINDERS,
                            className: so.Mf,
                            children: (0, a.jsx)("span", {
                                className: so.Gn,
                                children:
                                    0 === i
                                        ? er.intl.string(er.t.aUXxzT)
                                        : er.intl.formatToPlainString(er.t["5en8ya"], { count: i }),
                            }),
                        }),
                        l
                            ? (0, a.jsx)(eQ.V.Item, {
                                  "aria-label": er.intl.string(er.t.Fn6Odn),
                                  id: o.Y2.SCHEDULED,
                                  className: so.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: so.Gn,
                                      children: er.intl.string(er.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function sh(e) {
    let { tab: t } = e;
    return t === o.Y2.UNREADS ? (0, a.jsx)(sc, {}) : t === o.Y2.MENTIONS ? (0, a.jsx)(ti, {}) : null;
}
var sm = n(935063),
    sg = n(475743),
    sx = n(517019),
    sA = n(356622);
let sf = { offset: { left: 4, right: -12 } },
    sj = "Recent Mentions";
function sp(e, t) {
    tn.A.fetchRecentMentions({
        before: t,
        limit: ek.Ue3,
        guildId: null != e && tl.Ay.guildFilter !== ek.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tl.Ay.roleFilter,
        everyone: tl.Ay.everyoneFilter,
    });
}
function sN(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, O.A)("recents", n);
    ((0, eA.xN)(n), (0, eA.yW)(sj));
    let l = (0, j.bG)([et.A, ts.Ay], () => et.A.getChannel(ts.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([tl.Ay], () => ({
            messages: tl.Ay.getMentions(),
            hasMore: tl.Ay.hasMore,
            loading: tl.Ay.loading,
            guildFilter: tl.Ay.guildFilter,
            roleFilter: tl.Ay.roleFilter,
            everyoneFilter: tl.Ay.everyoneFilter,
        })),
        m = (0, sg.Ay)(o),
        g = (0, sg.Ay)(u),
        x = (0, sg.Ay)(h);
    (i.useEffect(() => {
        tl.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sp(l)
            : sp(l);
    }, [m, o, g, u, x, h, l]),
        (0, th.Ay)(() => {
            r?.some(nL.$r) && (tn.A.clearMentions(), sp(l));
        }),
        (0, th.l0)(() => {
            tn.A.truncateMentions(ek.Ue3);
        }));
    let A = i.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sp(l, null != r && r.length > 0 ? r[r.length - 1].id : null);
    }, [d, c, l, r]);
    return null == r || (c && 0 === r.length)
        ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(y.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(tj, { Icon: sm.X, header: er.intl.string(er.t.bgDz74), tip: er.intl.string(er.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(v.Ch, {
                            ref: (e) => {
                                ((n.current = e), (s.current = e?.getScrollerNode() ?? null));
                            },
                            className: eB.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sy, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(y.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sA.u,
                                            children: (0, a.jsx)(I.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: er.intl.string(er.t.XBlaiC),
                                                onClick: () =>
                                                    sp(l, null != r && r.length > 0 ? r[r.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sy(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = et.A.getChannel(t.channel_id);
    if (null == s || (0, nM.Jm)(s) || (0, nM.$v)(s)) return null;
    let l = sx.A.didAgree(s.getGuildId()),
        i = !!(0, nM.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: eB.aP,
        children: [
            (0, a.jsx)(eo, {
                channel: s,
                onClick: (e) => (0, eA.KW)(t, sj, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(M.e, {
                    size: "sm",
                    className: ed.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: er.intl.string(er.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": er.intl.string(er.t["+TSRGD"]),
                                size: "sm",
                                icon: T.t,
                                onClick: (e) => (0, eA.KW)(t, sj, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: er.intl.string(er.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": er.intl.string(er.t.e6RscS),
                                size: "sm",
                                icon: tP.CheckmarkLargeIcon,
                                onClick: () => tn.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                children: (0, a.jsx)(
                    ef.A,
                    {
                        message: t,
                        channel: s,
                        className: eB.YD,
                        hideAccessories: i,
                        compact: ej.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sf,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sv = n(559647),
    sI = n(285796),
    sC = n(588975),
    sE = n(403581),
    sS = n(738188),
    sM = n(404374),
    sR = n(611371),
    sb = n(465794),
    sL = n(202541),
    s_ = n(603037);
function sT(e) {
    let { text: t, isAtLimit: n, analyticsSection: s } = e;
    return (0, a.jsxs)("div", {
        className: s_.Zj,
        children: [
            n
                ? (0, a.jsx)(sS.WarningIcon, { size: "md", color: "currentColor", className: s_.QW })
                : (0, a.jsx)(sE.t, { size: "md", color: sM.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(N.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: s_.tD,
                children: [t, " ", (0, a.jsx)(sR.A, { className: s_.TN })],
            }),
            (0, a.jsx)(sb.A, {
                size: "sm",
                variantOverride: n ? void 0 : "primary",
                subscriptionTier: sL.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: s },
            }),
        ],
    });
}
var sD = n(151282),
    sk = n(199160),
    sO = n(81369),
    sG = n(588190),
    sP = n(663341),
    sF = n(626891),
    sK = n(474218);
function sU() {
    return (0, a.jsx)("div", {
        className: sF.kL,
        children: (0, a.jsxs)("div", {
            className: sF.vW,
            children: [
                (0, a.jsx)("img", { src: sK.A, className: sF.Tn, alt: er.intl.string(er.t.SZVs3K) }),
                (0, a.jsx)(S.D, {
                    className: sF.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: er.intl.string(er.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sF.rf,
                    children: (0, a.jsx)(N.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: er.intl.format(er.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sF.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sF.MK,
                            children: [
                                (0, a.jsx)(sw, { icon: sO.H, label: er.intl.string(er.t["d3+iYs"]), highlighted: !1 }),
                                (0, a.jsx)(sw, { icon: sG.U, label: er.intl.string(er.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sF.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sF.$f,
                                    children: (0, a.jsx)(sP.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: er.intl.string(er.t.fxxYiB),
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
        className: d()(sF.KT, { [sF.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sz = n(970244),
    sH = n(24482);
n(938796);
var sB = n(408018),
    sV = n(451909),
    sX = n(205120),
    sJ = n(91624);
function sY(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = ej.D_.getSetting(),
                s = (0, e0.zs)(t.createArgs),
                l = sV.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, sB.x7)(e ? l : s) };
        }),
        d = i.useCallback((e, t, n) => {
            r({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.createArgs.flags,
        u = i.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sz.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sz.tu)(c), [c]);
    return (0, a.jsx)(sX.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sJ.R3,
        children: sW,
    });
}
function sW(e) {
    return (0, a.jsx)(sJ.Nr, { ...e });
}
n(853297);
var sZ = n(757424);
let s$ = "Scheduled Messages",
    sq = { offset: { left: 4, right: -12 } };
function sQ(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sD.sy)();
    }, []);
    let n = (0, j.bG)([sk.A], () => sk.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sk.A], () => sk.A.loading),
        l = (0, j.bG)([sk.A], () => sk.A.getMessagesPendingRemoval()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        { limit: d, isUpgradable: c } = (0, e0.yz)("ScheduledMessageInboxTab"),
        o = d > 0 && r.length >= d,
        u = i.useRef(null),
        h = (0, O.A)("scheduled-messages", u);
    return ((0, eA.xN)(u), (0, eA.yW)(s$), s)
        ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(y.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sU, {})
          : (0, a.jsxs)("div", {
                className: sZ.MY,
                children: [
                    (0, a.jsx)(f.hD, {
                        navigator: h,
                        children: (0, a.jsx)(f.PR, {
                            children: (e) => {
                                let { ref: n, ...s } = e;
                                return (0, a.jsx)(v.Ch, {
                                    className: eB.XG,
                                    ref: (e) => {
                                        ((u.current = e), (n.current = e?.getScrollerNode() ?? null));
                                    },
                                    ...s,
                                    children: r.map((e) =>
                                        (0, a.jsx)(
                                            s1,
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
                    c ? (0, a.jsx)("div", { className: sZ.fH, children: (0, a.jsx)(s0, { isAtLimit: o }) }) : null,
                ],
            });
}
function s0(e) {
    let { isAtLimit: t } = e,
        { analyticsLocations: s } = (0, P.Ay)(G.A.SCHEDULED_MESSAGES_LIST),
        l = i.useCallback(() => {
            (0, to.openModalLazy)(async () => {
                let { default: e } = await n.e("178930").then(n.bind(n, 471177));
                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: s });
            });
        }, [s]),
        r = (0, sH.Dd)(sL.PremiumTypes.TIER_2);
    return (0, a.jsx)(sT, {
        text: t
            ? er.intl.format(er.t["2o4lgw"], { nitroTierName: r, onClick: l, premiumMax: 25 })
            : er.intl.formatToPlainString(er.t.WfTDdG, { nitroTierName: r }),
        isAtLimit: t,
        analyticsSection: ek.JJy.SCHEDULED_MESSAGES_LIST_UPSELL,
    });
}
let s1 = i.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingRemoval: s, onJump: l } = e,
        r = (0, j.bG)([et.A], () => et.A.getChannel(n)),
        { isError: c, stateMessage: o } = (0, e0.Y8)(t.state),
        u = ej.hH.useSetting(),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => (0, sz.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sz.CI)({ scheduledMessage: t });
        }, [t]);
    return null == r
        ? (0, a.jsx)(s3, { scheduledMessageId: t.scheduledMessageId })
        : (0, a.jsxs)(
              "div",
              {
                  className: eB.aP,
                  children: [
                      (0, a.jsx)(eo, {
                          itemId: `header-${t.record.id}`,
                          channel: r,
                          onClick: (e) => (0, eA.n4)(r.id, r.guild_id, s$, () => l(e)),
                          collapsed: !1,
                          status: (0, a.jsx)(ex, {
                              type: c ? "error" : "normal",
                              text: c
                                  ? o
                                  : er.intl.formatToPlainString(er.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(M.e, {
                              size: "sm",
                              className: ed.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.JLba51),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sv.SendMessageIcon,
                                          "aria-label": er.intl.string(er.t.JLba51),
                                          disabled: s,
                                          onClick: () => (0, sz.fK)(t.scheduledMessageId),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: _.PencilIcon,
                                          "aria-label": er.intl.string(er.t.ZXE1s4),
                                          disabled: s,
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: V.ClockIcon,
                                          "aria-label": er.intl.string(er.t.SBcdAN),
                                          disabled: s,
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sI.a,
                                          "aria-label": er.intl.string(er.t.O3sL8F),
                                          disabled: s,
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(y.y, { className: eB.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ef.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sZ.Mg : eB.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: sq,
                                            inlineEditor: h
                                                ? (0, a.jsx)(sY, {
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
                                            className: d()(sZ.PI, { [sZ.oE]: u }),
                                            children: [
                                                (0, a.jsx)(sC.P, { size: "xs", color: "currentColor" }),
                                                (0, a.jsx)(N.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    children: er.intl.format(er.t.ZJ1tPW, {
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
function s3(e) {
    let { scheduledMessageId: t } = e;
    return (0, a.jsxs)("div", {
        className: d()(eB.aP, sZ.Mh),
        children: [
            (0, a.jsxs)("div", {
                className: sZ.WV,
                children: [
                    (0, a.jsx)("div", {
                        className: sZ.V2,
                        children: (0, a.jsx)(C.E, { size: "xxs", color: E.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
                    (0, a.jsx)(S.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: er.intl.string(er.t.FpeuT5),
                    }),
                ],
            }),
            (0, a.jsx)(M.e, {
                size: "sm",
                className: ed.GC,
                children: (0, a.jsx)(p.m, {
                    text: er.intl.string(er.t.O3sL8F),
                    ariaHidden: !0,
                    children: (0, a.jsx)(R.K, {
                        variant: "secondary",
                        size: "sm",
                        icon: sI.a,
                        "aria-label": er.intl.string(er.t.O3sL8F),
                        onClick: () => (0, sz.tu)(t),
                    }),
                }),
            }),
        ],
    });
}
var s2 = n(211550);
function s7(e) {
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
        "aria-label": er.intl.string(er.t.GSmTKJ),
        className: t,
        children: (0, a.jsx)("div", {
            className: d()(s2.k, { [s2.q]: n }),
            children: (0, a.jsx)(c.tH, {
                fallback: (0, a.jsx)(sd, {}),
                children: (0, a.jsx)(h.F, {
                    component: (0, a.jsx)(su, { tab: s, setTab: l, closePopout: i }),
                    children:
                        s === o.Y2.MENTIONS
                            ? (0, a.jsx)(sN, { onJump: r })
                            : s === o.Y2.BOOKMARKS
                              ? (0, a.jsx)(eJ, { closePopout: i, type: m.Yf.BOOKMARK }, "bookmarks")
                              : s === o.Y2.REMINDERS
                                ? (0, a.jsx)(eJ, { closePopout: i, type: m.Yf.REMINDER }, "reminders")
                                : s === o.Y2.SCHEDULED
                                  ? (0, a.jsx)(sQ, { onJump: r })
                                  : (0, a.jsx)(si, { onJump: r, showTutorial: g, setSeenTutorial: x, closePopout: i }),
                }),
            }),
        }),
    });
}

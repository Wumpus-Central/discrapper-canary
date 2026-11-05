(n.r(t), n.d(t, { default: () => s6 }));
var s,
    l,
    a = n(477900),
    i = n(582128),
    r = n(292442),
    d = n(873298),
    c = n(305866),
    o = n(707554),
    u = n(756377),
    h = n(503698),
    m = n.n(h),
    g = n(284009),
    x = n.n(g),
    A = n(613412),
    f = n(837381),
    j = n(855986),
    p = n(866665),
    y = n(834730),
    I = n(289873),
    N = n(516521),
    v = n(821609),
    C = n(695366),
    E = n(646514),
    S = n(534514),
    b = n(825484),
    M = n(408278),
    R = n(789645),
    _ = n(440971),
    L = n(22231),
    T = n(99677),
    D = n(442433),
    k = n(138399),
    O = n(928039),
    G = n(793574),
    F = n(688810),
    P = n(139286),
    K = n(559106),
    w = n(939249),
    U = n(320448),
    H = n(778712),
    z = n(97808),
    B = n(812993),
    X = n(406810),
    V = n(397244),
    Y = n(714114),
    J = n(342312),
    Z = n(571694),
    W = n(47167),
    $ = n(713654),
    q = n(598104),
    Q = n(682163),
    ee = n(616356),
    et = n(734057),
    en = n(71393),
    es = n(290863),
    el = n(218461),
    ea = n(287809),
    ei = n(650583),
    er = n(792996),
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
            onToggleCollapse: d,
            itemId: c,
        } = e,
        o = (0, f.rm)(c);
    return (0, a.jsxs)("div", {
        className: ed.N1,
        children: [
            s,
            (0, a.jsx)(K.vN, {
                offset: ec,
                children: (0, a.jsxs)("div", {
                    className: m()(ed.ZO, { [ed.yZ]: i }),
                    ...o,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === ei.dh.ENTER || e.key === ei.dh.SPACE) && e.target === e.currentTarget) {
                            (e.preventDefault(), l(e));
                            return;
                        }
                        null != d && ((e.key === ei.dh.ARROW_RIGHT && i) || (e.key === ei.dh.ARROW_LEFT && !i)) && d();
                    },
                    children: [
                        (0, a.jsx)(w.D, {
                            className: ed.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(eu, { channel: t }),
                        }),
                        (0, a.jsx)(U.ChevronSmallRightIcon, { className: ed.ai, size: "xxs" }),
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
          ? (0, a.jsx)(q.A, { channel: t, size: H._3.SIZE_32, "aria-hidden": !0 })
          : (0, a.jsx)(z.eu, { size: H._3.SIZE_32, src: (0, Z.Y)(t), "aria-hidden": !0 });
}
function eh(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([en.A], () => en.A.getGuild(t.guild_id)),
        i = (0, W.Ay)(t, !1),
        r = (0, j.bG)([el.Ay], () => el.Ay.getIsMentionLowImportance(t.id)),
        d = (0, $.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ed.yP,
        children: [
            (0, a.jsx)(S.D, {
                variant: "body-md/semibold",
                color: "text-default",
                className: ed.lz,
                children: (0, a.jsxs)(w.D, {
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
            (0, a.jsx)(y.E, {
                color: "text-default",
                variant: "body-xs/normal",
                children: (0, a.jsx)(em, { channel: t, onClick: n }),
            }),
        ],
    });
}
function em(e) {
    let { channel: t, onClick: n } = e,
        s = (0, j.bG)([en.A], () => en.A.getGuild(t.guild_id)),
        l = (0, j.bG)([et.A], () => et.A.getChannel(t.parent_id)),
        i = (0, W.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: er.intl.formatToPlainString(er.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eg, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(w.D, { className: m()(ed.je, ed.J5), onClick: n, children: r }) : null;
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
        { voiceChannel: r } = (0, Y.Ay)({ userId: n?.id });
    return (0, V.A)({ activities: l, status: s, applicationStream: i, voiceChannel: r })
        ? (0, a.jsx)(J.A, { user: n, activities: l, applicationStream: i, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function ex(e) {
    let { type: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: ed.h5,
        children: [
            "error" === t
                ? (0, a.jsx)(C.CircleErrorIcon, { size: "xs", color: "currentColor", className: ed.ik })
                : (0, a.jsx)(X.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var eA = n(642213),
    ef = n(636922),
    ej = n(253932),
    ep = n(576705),
    ey = n(927813),
    eI = n(704456),
    eN = n(85109);
n(321073);
var ev = n(403362),
    eC = n(741097),
    eE = n(470654);
function eS(e) {
    switch (e) {
        case u.Yf.BOOKMARK:
            return eN.A.getMessageBookmarks();
        case u.Yf.REMINDER:
            return eN.A.getMessageReminders();
        default:
            return eN.A.getSavedMessages();
    }
}
function eb(e) {
    return eS(e).map((e) => e.saveData);
}
var eM = n(606096),
    eR = n(803306),
    e_ = n(432005),
    eL = n(963852),
    eT = n(20851),
    eD = n(619019),
    ek = n(652215),
    eO = n(897781),
    eG = n(490611),
    eF = n(144273);
function eP(e) {
    let { type: t } = e,
        n = t === u.Yf.REMINDER,
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
                    children: (0, a.jsx)(y.E, {
                        variant: "body-sm/medium",
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
                t = eR.nj(e);
            return (
                null != t && (t.getAvatarURL = () => eF.A),
                [er.intl.string(er.t["h+KPxy"]), er.intl.string(er.t["63EVpI"]), er.intl.string(er.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, e_.rh)({
                            ...(0, eL.Ay)({ channelId: "1338", content: n }),
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
                                          (0, a.jsx)(ew, {
                                              icon: eM.BookmarkIcon,
                                              label: er.intl.string(er.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(ew, {
                                              icon: X.ClockIcon,
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
function ew(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: m()(eO.KT, { [eO.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eU(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, eI.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eI.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(ex, { type: l ? "error" : "normal", text: s });
}
var eH = n(216623),
    ez = n(294002),
    eB = n(414676);
let eX = "Bookmarks",
    eV = "Reminders";
function eY(e) {
    let { closePopout: t, type: n } = e,
        {
            savedMessages: s,
            fetchState: l,
            loadMore: r,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Yf.ALL,
                [t, n] = i.useState(() => eb(e)),
                s = i.useRef(eN.A.getIsStale());
            (i.useEffect(() => {
                let t = eN.A.getLastChanged();
                function l() {
                    let l = eN.A.getLastChanged();
                    if (t !== l) {
                        if (((t = l), s.current && !eN.A.getIsStale())) {
                            ((s.current = !1), n(eb(e)));
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
                    eN.A.addChangeListener(l),
                    () => {
                        eN.A.removeChangeListener(l);
                    }
                );
            }, [e]),
                (0, eE.A)());
            let l = (0, eC.A)(e !== u.Yf.REMINDER);
            return {
                savedMessages: (0, j.yK)([eN.A], () =>
                    t.map((e) => eN.A.getSavedMessage(e.channelId, e.messageId)).filter(ev.Vq),
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
                                await (0, eH.cf)(e);
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
                ? (0, a.jsx)(y.E, {
                      variant: "body-sm/medium",
                      color: "text-feedback-critical",
                      role: "alert",
                      className: ez.z3,
                      children: c,
                  })
                : null,
        h = l === u.Z7.LOADED_HAS_MORE,
        m = (0, j.bG)([eN.A], () => eN.A.getBookmarkCount()),
        g = n === u.Yf.BOOKMARK ? m : s.length,
        { analyticsLocations: x } = (0, F.Ay)(G.A.FOR_LATER_POPOUT);
    (0, P.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { tab_type: n, total_count: g, overdue_count: eN.A.getOverdueMessageReminderCount() },
        },
        {},
        [g],
    );
    let p = i.useRef(null),
        C = i.useCallback(() => {
            let e = p.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && h && r();
        }, [h, r]),
        E = (0, O.A)("for-later", p);
    ((0, eA.xN)(p), (0, eA.yW)(n === u.Yf.BOOKMARK ? eX : eV));
    let [S, b] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => b(new Date()), ey.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? l === u.Z7.LOADING || h
            ? (0, a.jsxs)("div", {
                  className: ez.MY,
                  children: [o, (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(I.y, {}) })],
              })
            : (0, a.jsxs)(F.f5, { value: x, children: [o, (0, a.jsx)(eP, { type: n })] })
        : (0, a.jsx)(F.f5, {
              value: x,
              children: (0, a.jsxs)("div", {
                  className: ez.MY,
                  children: [
                      o,
                      (0, a.jsx)(f.hD, {
                          navigator: E,
                          children: (0, a.jsx)(f.PR, {
                              children: (e) => {
                                  let { ref: n, ...i } = e;
                                  return (0, a.jsxs)(N.Ch, {
                                      ref: (e) => {
                                          ((p.current = e), (n.current = e?.getScrollerNode() ?? null));
                                      },
                                      className: eB.XG,
                                      onScroll: h ? C : void 0,
                                      ...i,
                                      children: [
                                          s.map((e) =>
                                              (0, a.jsx)(
                                                  eJ,
                                                  { savedMessage: e, closePopout: t, throttledNow: S, onRemove: d },
                                                  e.saveData.messageId,
                                              ),
                                          ),
                                          l === u.Z7.LOADING
                                              ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(I.y, {}) })
                                              : h
                                                ? (0, a.jsx)("div", {
                                                      className: ez.u9,
                                                      children: (0, a.jsx)(v.$, {
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
function eJ(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s, onRemove: l } = e,
        r = (0, eI.vr)(t),
        d = i.useCallback(
            async (e) => {
                (await (0, eI.le)(t, r),
                    e.shiftKey || n(),
                    k.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eV : eX));
            },
            [n, t, r],
        ),
        c = (0, j.bG)(
            [ep.A],
            () => !!(r?.type === ek.rbe.UNKNOWN || r?.isPrivate()) || ep.A.can(ek.xBc.VIEW_CHANNEL, r),
        );
    return null != r && null != t.message && c
        ? (0, a.jsxs)("div", {
              className: eB.aP,
              children: [
                  (0, a.jsx)(eo, {
                      itemId: `header-${t.message.id}`,
                      channel: r,
                      onClick: (e) => {
                          (d(e), n());
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(eU, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(b.e, {
                          size: "sm",
                          className: ed.GC,
                          children: (0, a.jsx)(eZ, { savedMessage: t, jumpToMessage: d, throttledNow: s, onRemove: l }),
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
              className: m()(eB.aP, ez.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: ez.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: ez.Bx,
                              children: (0, a.jsx)(C.CircleErrorIcon, {
                                  size: "xxs",
                                  color: E.A.colors.INTERACTIVE_TEXT_ACTIVE,
                              }),
                          }),
                          (0, a.jsx)(S.D, {
                              variant: "body-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? er.intl.string(er.t["wuQm+j"])
                                      : er.intl.string(er.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(b.e, {
                      size: "sm",
                      className: ed.GC,
                      children: (0, a.jsx)(p.m, {
                          text: er.intl.string(null != t.saveData.dueAt ? er.t["a6gcZ/"] : er.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(M.K, {
                              variant: "secondary",
                              "aria-label": er.intl.string(null != t.saveData.dueAt ? er.t["a6gcZ/"] : er.t.SvXS1Z),
                              size: "sm",
                              icon: R.XSmallIcon,
                              onClick: () => l(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function eZ(e) {
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
                      children: (0, a.jsx)(M.K, {
                          variant: "secondary",
                          "aria-label": c,
                          size: "sm",
                          icon: d ? _.BellZIcon : L.PencilIcon,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e(954289).then(n.bind(n, 243656));
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
                children: (0, a.jsx)(M.K, {
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t["+TSRGD"]),
                    size: "sm",
                    icon: T.ChatArrowRightIcon,
                    onClick: (e) => s(e),
                }),
            }),
            (0, a.jsx)(p.m, {
                text: r,
                ariaHidden: !0,
                children: (0, a.jsx)(M.K, {
                    variant: "secondary",
                    "aria-label": r,
                    size: "sm",
                    icon: R.XSmallIcon,
                    onClick: () => i(t.saveData),
                }),
            }),
        ],
    });
}
var eW = n(164636),
    e$ = n(912592),
    eq = n(890856),
    eQ = n(761508),
    e0 = n(214947),
    e1 = n(711950),
    e3 = n(322387),
    e2 = n(912309),
    e6 = n(129230),
    e8 = n(198476);
function e7(e) {
    let { closePopout: t } = e,
        n = (0, e2.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: er.intl.string(er.t["lMR96+"]),
        children: (0, a.jsxs)(w.D, {
            "aria-label": `${er.intl.string(er.t["lMR96+"])}, ${n}`,
            className: e8.b,
            onClick: () => {
                (e6.default.track(ek.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: e3.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    e1.A.transitionToSection(ek.m3P.PENDING, { explicit: !0 }),
                    t());
            },
            children: [
                (0, a.jsx)(e0.FriendsIcon, { size: "xs", color: "currentColor" }),
                n > 0 && (0, a.jsx)(B.hV, { count: n, color: E.A.colors.BACKGROUND_MOD_STRONG.css, className: e8.D }),
            ],
        }),
    });
}
var e5 = n(165862),
    e4 = n(477782),
    e9 = n(265872),
    te = n(783977),
    tt = n(378939),
    tn = n(309010),
    ts = n(849171);
function tl(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([et.A, tn.Ay], () => et.A.getChannel(tn.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([ts.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = ts.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(e5.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": er.intl.string(er.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(e4.sL, {
                id: "Everyone",
                label: er.intl.string(er.t.cdyUsV),
                action: function () {
                    tt.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(e4.sL, {
                id: "Roles",
                label: er.intl.string(er.t.lZejCq),
                action: function () {
                    tt.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(e4.sL, {
                      id: "All Servers",
                      label: er.intl.string(er.t.GWMA6s),
                      action: function () {
                          tt.A.setGuildFilter({
                              guildFilter: r === ek.KE7.THIS_SERVER ? ek.KE7.ALL_SERVERS : ek.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === ek.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function ta() {
    let e = i.useRef(null);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: e,
        align: "right",
        animation: e9.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tl, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: er.intl.string(er.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(M.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t.pEasFX),
                    icon: te.FiltersHorizontalIcon,
                    onClick: n,
                }),
            });
        },
    });
}
var ti = n(481613),
    tr = n.n(ti),
    td = n(621466),
    tc = n(192308),
    to = n(73153),
    tu = n(964486),
    th = n(775602),
    tm = n(188567),
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
            (0, a.jsx)(S.D, { className: tA.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(y.E, {
                color: "text-default",
                variant: "body-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(y.E, {
                              tag: "span",
                              className: tA.PP,
                              variant: "body-xs/semibold",
                              color: "text-feedback-positive",
                              children: [er.intl.string(er.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tj = n(862482),
    tp = n(143838),
    ty = n(640238);
function tI(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        (t(),
            e6.default.track(ek.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tN, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: er.intl.string(er.t["8k+6QY"]),
                children: (0, a.jsx)(M.K, {
                    variant: "secondary",
                    "aria-label": er.intl.string(er.t["8k+6QY"]),
                    size: "sm",
                    icon: tp.DoubleCheckmarkIcon,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tN(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(ty.M, {
        dismissable: !0,
        header: er.intl.string(er.t.h4bVZ2),
        confirmText: er.intl.string(er.t.e6RscS),
        cancelText: er.intl.string(er.t["ETE/oC"]),
        confirmButtonColor: tj.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(y.E, {
            color: "text-default",
            variant: "body-sm/normal",
            children: er.intl.string(er.t["0MQ0Bf"]),
        }),
    });
}
var tv = n(120692),
    tC = n(717421),
    tE = n(334738),
    tS = n(149468),
    tb = n(976860),
    tM = n(847374),
    tR = n(907847);
function t_(e) {
    let { collapsed: t, onClick: n } = e,
        s = er.intl.string(t ? er.t.dcl9MQ : er.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(w.D, {
            className: tR.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tM.ChevronSmallDownIcon, { className: m()(tR.ai, { [tR.yZ]: t }), size: "xs" }),
        }),
    });
}
var tL = n(585517);
let tT = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tD = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tk(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tC.z)(() => (t ? tT : tD), "respect-motion-settings", []),
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
        (0, a.jsx)(tv.animated.div, {
            className: tL.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tO = n(311283),
    tG = n(933832);
function tF(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, tO.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? er.intl.string(er.t["5lLMhM"]) : er.intl.string(er.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(M.K, {
            variant: "secondary",
            "aria-label": i ? er.intl.string(er.t["5lLMhM"]) : er.intl.string(er.t.e6RscS),
            size: "sm",
            icon: i ? tp.DoubleCheckmarkIcon : tG.CheckmarkLargeIcon,
            onClick: function () {
                (i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tS.zV)(ek.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    }));
            },
        }),
    });
}
var tP = n(782603),
    tK = n(461678),
    tw = n(914703);
function tU(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e9.Y, {
        targetElementRef: n,
        align: "right",
        animation: e9.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(tw.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: er.intl.string(er.t.ljs3Oe),
                  })
                : (0, a.jsx)(tK.A, {
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
                children: (0, a.jsx)(M.K, {
                    "aria-label": er.intl.string(er.t.h850Ss),
                    icon: tP.BellIcon,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tH = n(435558),
    tz = n.n(tH),
    tB = n(173404),
    tX = n(218152),
    tV = n(970278),
    tY = n(747926),
    tJ = n(811091),
    tZ = n(37411),
    tW = n(278489);
function t$(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [tV.A, et.A],
            () =>
                tz()(tV.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tJ.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return et.A.getChannel(t);
                    })
                    .filter(ev.Vq)
                    .sort((e, t) => tJ.default.compare(e.id, t.id))
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
                ((0, tE.I_)(
                    t.channelId,
                    {
                        section: ek.JJy.INBOX,
                        object: ek.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                        objectType: ek.btD.ACK_AUTOMATIC,
                    },
                    !0,
                ),
                s(t.channelId));
        }),
        (0, a.jsx)("div", {
            className: tW.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    tX.Cp,
                    { channel: n, children: (0, a.jsx)(tB.Ay, { className: tW.u, threadId: e.id, goToThread: r }) },
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
    t3 = n(202501),
    t2 = n(33358),
    t6 = n(384231),
    t8 = n(207133),
    t7 = n(704413),
    t5 = n(9842),
    t4 = n(994500),
    t9 = n(320889),
    ne = n(143413),
    nt = n(763754),
    nn = n(467073),
    ns = n(491182),
    nl = n(860227),
    na = n(768536),
    ni = n(21299),
    nr = n(754459),
    nd = n(538355),
    nc = n(824556),
    no = n(699352),
    nu = n(715628),
    nh = n(752636),
    nm = n(117096),
    ng = n(268719),
    nx = n(234957),
    nA = n(888675),
    nf = n(381941),
    nj = n(845806),
    np = n(13673);
let ny = i.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: i = !1,
            className: r,
            onContextMenu: d,
            onClick: c,
            disableInteraction: o = !1,
            hasThread: u,
        } = t,
        h = ek.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([t5.A], () => t5.A.getMessageByReference(h)),
        x = (0, j.bG)([et.A], () =>
            l.type === ek.lAJ.THREAD_STARTER_MESSAGE && g.state === t5.a.LOADED
                ? et.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = ej.X6.useSetting(),
        f = ej.hD.useSetting(),
        p = ej.rs.useSetting(),
        y = ej.kt.useSetting(),
        I = (0, t6.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        N = (0, t8.A)(s?.id),
        { disableReactionCreates: v } = (0, nn.A)(s),
        { setPopout: C } = (0, nr.A)(l.id, nf.Fd),
        E = (0, ni.VL)(l, s, C, N),
        {
            content: S,
            hasSpoilerEmbeds: b,
            hasBailedAst: M,
        } = (0, nd.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: I,
            allowHeading: I,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = (0, nt.Ay)(l),
        _ = (0, j.bG)(
            [et.A],
            () => l.hasFlag(ek.pr7.HAS_THREAD) && et.A.getChannel(tJ.default.castMessageIdAsChannelId(l.id)),
        ),
        L = l.type === ek.lAJ.THREAD_STARTER_MESSAGE && g.state === t5.a.LOADED && null != x,
        T = !L && void 0 === n,
        D = (0, nc.A)({ message: l, channel: s, announcementEnabled: T }),
        k = (0, t2.P)(l),
        O = (0, t9._f)(l.id, l.channel_id),
        G = (0, t7.A)(l),
        F = (0, nl.fF)(l);
    return L
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (t4.A.isBlockedForMessage(l) ? (n = er.t["+FcYM/"]) : t4.A.isIgnoredForMessage(l) && (n = er.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(nI, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(ns.A, {
                compact: i,
                className: m()(r, { [np.M1]: (0, e_.ec)(l), [np.XN]: o, [np._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nx.A)(l, s, h, g, i),
                childrenHeader: (0, nh.A)({ ...t, author: R, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(na.iV, {
                    renderAccessories: no.A,
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: b,
                    hasBailedAst: M,
                    compact: i,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: v,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: s.isSystemDM(),
                    renderThreadAccessory: u,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: p,
                    gifAutoPlay: y,
                    poll: G,
                    showListsAndHeaders: I,
                    showMaskedLinks: I,
                    shouldHideMediaOptions: N,
                    enabledContentHarmTypeFlags: k,
                    ctaButtonType: O,
                    onMediaItemContextMenu: E,
                }),
                childrenExecutedCommand: (0, ng.A)(l, s, i),
                childrenMessageContent: (0, nu.A)(t, S),
                childrenSystemMessage: (0, nm.A)(t),
                onContextMenu: d,
                onClick: c,
                hasThread: !1 !== u && null != _ && l.hasFlag(ek.pr7.HAS_THREAD),
                hasReply: l.type === ek.lAJ.REPLY,
                isSystemMessage: (0, ne.A)(l),
                messageRef: D,
                author: R,
                "aria-labelledby": F,
                "aria-roledescription": er.intl.string(er.t.BAB0yK),
            });
});
function nI(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(ns.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nA.A, {
            compact: s,
            className: nj.L9,
            iconNode: (0, a.jsx)(R.XSmallIcon, { size: "md", color: "currentColor", className: nj.Q6 }),
            children: (0, a.jsx)("div", { className: nj.Fo, children: er.intl.format(l, { count: n }) }),
        }),
    });
}
var nN = n(5377),
    nv = n(222831);
function nC(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(w.D, {
        className: m()(nv.n, t),
        onClick: function (e) {
            (l(!0), n(e));
        },
        children: s
            ? (0, a.jsx)(I.y, { type: I.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(y.E, { variant: "body-xs/medium", className: nv.Q, children: er.intl.string(er.t.k5WiPf) }),
    });
}
var nE = n(143236),
    nS = n(323073),
    nb = n(181079),
    nM = n(567035),
    nR = n(679164),
    n_ = n(455234),
    nL = n(863005),
    nT = n(152007),
    nD = n(607508),
    nk = n(594061),
    nO = n(617617),
    nG = n(95701),
    nF = n(808728),
    nP = n(596344),
    nK = n(711014),
    nw = n(543465),
    nU = n(790782),
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
    nz = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let nB = "1539033557786173450";
class nX extends nE.EventEmitter {
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
                let t = nV(e, !1);
                if (t.messages.some(nR.$r)) return (k.A.clearChannel(e.channelId), { ...e, messages: [] });
                return t;
            }
            case "nsfw":
            case "guild-events":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tV.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, ev.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nV(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        "guild-events" === e.type
            ? tE.hK(e.guildId, nU.P.GUILD_EVENT, n)
            : tE.I_(
                  t,
                  {
                      section: ek.JJy.INBOX,
                      object: ek.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                      objectType: ek.btD.ACK_AUTOMATIC,
                  },
                  !0,
                  void 0,
                  n,
              );
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
            ? tE.hK(e.guildId, nU.P.GUILD_EVENT, e.oldestReadMessageId)
            : tE.I_(
                  e.channelId,
                  { section: ek.JJy.INBOX, object: ek.ZSU.UNDO_MARK_AS_READ, objectType: ek.btD.ACK_MANUAL },
                  !0,
                  void 0,
                  e.oldestReadMessageId,
              );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        (t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n }));
    };
    markGuildRead = (e) => {
        ((0, nM.A)([e], ek.JJy.INBOX),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore());
    };
    deleteChannel = (e) => {
        (this.setState({
            scrollToChannelIndex: tz().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore());
    };
    markAllRead = () => {
        (tE.Uq(
            this.state.channels.map((e) => ({
                channelId: e.channelId,
                messageId: e.newestUnreadMessageId,
                readStateType: "guild-events" === e.type ? nU.P.GUILD_EVENT : nU.P.CHANNEL,
            })),
        ),
            this.setState({ channels: [] }));
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tz().findIndex(s, (e) => e.channelId === t),
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
    removeChannelsHiddenBySettings = () => {
        let e = this.state.channels.filter(
            (e) =>
                !(function (e) {
                    if ("guild-events" === e.type) return nJ(e.guildId);
                    if (nw.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId)) return !0;
                    let t = et.A.getChannel(e.channelId);
                    return (
                        null != t &&
                        (t.isThread()
                            ? nT.A.isMuted(t.id) || !nT.A.hasJoined(t.id)
                            : 0 === e.mentionCount && nw.Ay.resolveUnreadSetting(t) !== nU.e.ALL_MESSAGES)
                    );
                })(e),
        );
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tV.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        k.A.clearChannel(e.channelId);
        let t = k.A.fetchMessages({
            channelId: e.channelId,
            limit: 30,
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
                            let n = nV(e, !0);
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
                                    ...nV(e, !0),
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
function nV(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nP.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tJ.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tJ.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tJ.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
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
                t = nO.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    if (s === nB) {
                        e[tJ.default.cast(n)] = t[n].channels[s].collapsedInInbox;
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
            nK.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nF.A.getSelectableChannelIds(n),
                    l = nL.A.getActiveJoinedUnreadThreadsForGuild(n);
                (s.forEach((s) => {
                    nZ(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nZ(e, t, n, s);
                }),
                    (function (e, t, n) {
                        if (nJ(n) || !el.Ay.hasUnreadOrMentions(n, nU.P.GUILD_EVENT)) return;
                        let s = el.Ay.lastMessageId(n, nU.P.GUILD_EVENT);
                        if (null == s) return;
                        let l = tJ.default.cast(n),
                            a = el.Ay.ackMessageId(n, nU.P.GUILD_EVENT);
                        if (null == a) {
                            let e = en.A.getGuild(n);
                            if (e?.joinedAt == null) return;
                            a = tJ.default.fromTimestamp(e.joinedAt.getTime());
                        }
                        tJ.default.compare(a, s) >= 0 ||
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
                                mentionCount: el.Ay.getMentionCount(n, nU.P.GUILD_EVENT),
                                sortOrder: 5,
                                order: 0,
                            });
                    })(e, t, n));
            }),
            tz().sortBy(t, (e) => e.sortOrder)),
        l = tz()
            .uniq(s.map((e) => e.guildId))
            .filter(ev.Vq);
    return (
        to.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nJ(e) {
    return nw.Ay.isMuted(e) || nw.Ay.isMuteScheduledEventsEnabled(e);
}
function nZ(e, t, n, s) {
    if (null == s) return;
    let l = et.A.getChannel(s);
    if (null == l || (!nG.Le.has(l.type) && nw.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === el.Ay.getMentionCount(s)) return;
    } else if (!(0, n_.Y)(l) && 0 === el.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ep.A.can(ek.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = el.Ay.ackMessageId(s);
    if (null == a) {
        let e = en.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tJ.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = el.Ay.getOldestUnreadMessageId(s),
        r = el.Ay.lastMessageId(s),
        d = el.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || tJ.default.compare(a, r) >= 0) return;
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
            if (nb.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (el.Ay.getMentionCount(t) > 0) return el.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tJ.default.extractTimestamp(n);
                if (Date.now() - e > n$) return 8;
                if (Date.now() - e > nW) return 6;
            }
            if (s.isThread()) {
                let e = (0, nD.l)(s);
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
    (0, nS.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nW = 2 * ey.A.Millis.DAY,
    n$ = 10 * ey.A.Millis.DAY;
var nq = n(743373);
let nQ = { left: 4, right: -12 },
    n0 = [ek.lAJ.THREAD_CREATED];
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
    return (0, a.jsx)(K.vN, {
        offset: nQ,
        children: (0, a.jsxs)("div", {
            className: nq.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(nC, { className: nq.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(ny, {
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
        l = ej.hH.useSetting(),
        i = 0 === t.messages.length || tQ()(t.messages[0].timestamp).isSame(tQ()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nN.i$)(e.timestamp, "LL");
            (r.push((0, a.jsx)(t3.A, { className: nq.yF, children: t }, t)), (d = tQ()(e.timestamp)));
        }
        let t = null == c || (0, t1.A)(n, c, e);
        ((c = e),
            r.push((0, a.jsx)(n1, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id)));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tJ.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: nq.Gr,
                        children: (0, a.jsx)(t0.Q, {
                            variant: "primary",
                            text: `${er.intl.string(er.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(I.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: nq.DZ, children: r })
    );
}
var n2 = n(81466),
    n6 = n(508654),
    n8 = n(327241);
let n7 = { top: 8, bottom: 8, left: -4, right: -4 };
function n5(e) {
    let {
            guild: t,
            name: n,
            Icon: s,
            children: l,
            onClick: i,
            collapsed: r = !1,
            mentionCount: d,
            onToggleCollapse: c,
            itemId: o,
        } = e,
        u = (0, f.rm)(o);
    return (0, a.jsx)("div", {
        className: ed.N1,
        children: (0, a.jsx)(K.vN, {
            offset: n7,
            children: (0, a.jsxs)("div", {
                className: m()(ed.ZO, { [ed.yZ]: r }),
                ...u,
                onKeyDown: function (e) {
                    if ((e.key === ei.dh.ENTER || e.key === ei.dh.SPACE) && e.target === e.currentTarget) {
                        (e.preventDefault(), i(e));
                        return;
                    }
                    null != c && ((e.key === ei.dh.ARROW_RIGHT && r) || (e.key === ei.dh.ARROW_LEFT && !r)) && c();
                },
                children: [
                    (0, a.jsx)(w.D, {
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
                    (0, a.jsx)(U.ChevronSmallRightIcon, { className: ed.ai, size: "xxs" }),
                    (0, a.jsxs)("div", {
                        className: ed.yP,
                        children: [
                            (0, a.jsx)(S.D, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: ed.lz,
                                children: (0, a.jsxs)(w.D, {
                                    className: ed.Ru,
                                    onClick: i,
                                    children: [
                                        (0, a.jsx)(s, { className: ed.j1, size: "xxs" }),
                                        (0, a.jsx)("span", { className: ed.je, children: n }),
                                        null != d && d > 0
                                            ? (0, a.jsx)("div", {
                                                  className: ed.qS,
                                                  children: (0, a.jsx)(B.hV, {
                                                      count: d,
                                                      color: E.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, a.jsx)(y.E, {
                                color: "text-default",
                                variant: "body-xs/normal",
                                children: (0, a.jsx)(w.D, {
                                    className: m()(ed.je, ed.J5),
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
var n4 = n(82732);
function n9(e) {
    let { channel: t, deleteChannel: s, toggle: l, onJump: r, getNumUnreadChannels: d } = e,
        { guildId: c } = t,
        u = (0, j.bG)([en.A], () => en.A.getGuild(c), [c]),
        h = (0, n6.Ay)(c),
        m = i.useMemo(
            () =>
                h
                    .filter(
                        (e) =>
                            tJ.default.compare(e.id, t.oldestReadMessageId) > 0 &&
                            0 >= tJ.default.compare(e.id, t.newestUnreadMessageId),
                    )
                    .sort((e, t) => tJ.default.compare(e.id, t.id)),
            [h, t.oldestReadMessageId, t.newestUnreadMessageId],
        );
    if (
        (i.useEffect(() => {
            null == u ||
                t.collapsed ||
                0 !== m.length ||
                ((0, tE.hK)(c, nU.P.GUILD_EVENT, t.newestUnreadMessageId), s(t.channelId));
        }),
        null == u)
    )
        return null;
    function g() {
        (l(t),
            (0, tS.zV)(ek.HAw.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: c,
                num_unread_channels_remaining: d() ?? 0,
                is_now_collapsed: !t.collapsed,
            }));
    }
    return (0, a.jsx)("div", {
        className: eB.aP,
        children: (0, a.jsx)(o.F, {
            component: (0, a.jsxs)(n5, {
                guild: u,
                name: er.intl.string(er.t.tlopTM),
                Icon: n2.CalendarIcon,
                onClick: function (e) {
                    ((0, tc.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(694303),
                            n.e(256373),
                            n.e(752695),
                            n.e(853934),
                            n.e(18181),
                        ]).then(n.bind(n, 568036));
                        return (t) => (0, a.jsx)(e, { ...t, guildId: c });
                    }),
                        r(e));
                },
                collapsed: t.collapsed,
                mentionCount: t.mentionCount,
                onToggleCollapse: g,
                itemId: `header-events-${c}`,
                children: [
                    (0, a.jsx)(b.e, { size: "sm", className: ed.GC, children: (0, a.jsx)(tF, { ...e }) }),
                    (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: g }),
                ],
            }),
            children: (0, a.jsx)(tk, {
                collapsed: t.collapsed,
                children: (0, a.jsx)("div", {
                    className: n4.k,
                    children: m.map((e) => (0, a.jsx)(n8.A, { className: n4.f, guildEvent: e, truncate: !0 }, e.id)),
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
        return (0, a.jsx)(tv.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(sn, { ...e }),
        });
    }),
    sn = i.memo(function (e) {
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
                    ((0, tE.I_)(
                        t.channelId,
                        {
                            section: ek.JJy.INBOX,
                            object: ek.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                            objectType: ek.btD.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                    s(t.channelId));
            }),
            !t.hasLoadedAnything)
        )
            return null;
        if ("guild-events" === t.type) return (0, a.jsx)(n9, { ...e, channel: t });
        if (null == r) return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eA.n4)(t.channelId, t.guildId, se, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                (k.A.trackJump(t.channelId, l, se), (0, tb.pX)(ek.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e));
            }
        }
        function c() {
            (l(t),
                (0, tS.zV)(ek.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                }));
        }
        return (0, a.jsx)("div", {
            className: eB.aP,
            children: (0, a.jsx)(o.F, {
                component: (0, a.jsxs)(eo, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(b.e, {
                            size: "sm",
                            className: ed.GC,
                            children: [(0, a.jsx)(tU, { channel: r }), (0, a.jsx)(tF, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, a.jsx)(t_, { collapsed: t.collapsed, onClick: c })
                            : (0, a.jsx)("div", { className: ed.Pt }),
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
    var t, n, s, l, r, d;
    let { onJump: c, showTutorial: o, setSeenTutorial: u, closePopout: h } = e,
        g = i.useRef(null),
        x = (0, O.A)("unreads", g);
    ((0, eA.xN)(g), (0, eA.yW)("Inbox"));
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
                    0 === i.channels.length || t - a.current < 10 * ey.A.Millis.SECOND
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
                    () => (nP.A.addChangeListener(t.reloadMessages), () => nP.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                i.useEffect(
                    () => (
                        nw.Ay.addChangeListener(t.removeChannelsHiddenBySettings),
                        () => nw.Ay.removeChangeListener(t.removeChannelsHiddenBySettings)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        nT.A.addChangeListener(t.removeChannelsHiddenBySettings),
                        () => nT.A.removeChangeListener(t.removeChannelsHiddenBySettings)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        tV.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tV.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [r, t]
            );
        })(g),
        { loadState: y, channels: v } = A,
        { maybeLoadMore: C } = p,
        E = (0, j.bG)([th.Ay], () => th.Ay.messageGroupSpacing);
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
            tm._.subscribe(ek.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tm._.unsubscribe(ek.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (d = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, tc.ue)()) return;
            let t = (0, td.BF)(e)?.activeElement;
            (0, td.Cw)(t) ||
                (((0, tg.cX)() || (0, tg.Sn)() ? e.metaKey : e.ctrlKey) &&
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
    i.useEffect(
        () => (
            to.h.subscribe("CONNECTION_OPEN", h),
            () => {
                to.h.unsubscribe("CONNECTION_OPEN", h);
            }
        ),
        [h],
    ),
    (0, tu.Ay)(
        () => (
            tm._.subscribe(ek.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tm._.unsubscribe(ek.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === v.length)
        ? (0, a.jsx)(tf, {
              Icon: e$.InboxIcon,
              header: er.intl.string(er.t["6XMM+D"]),
              tip: tr().os?.family === "OS X" ? er.intl.string(er.t.w9uDOW) : er.intl.string(er.t.BiUJC6),
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
                          onScroll: y === nz.Done ? void 0 : C,
                          className: m()(eB.XG, `group-spacing-${E}`),
                          children: [
                              o ? (0, a.jsx)(si, { setSeenTutorial: u }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tz().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nH.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            t3.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: er.intl.string(er.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nH.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            t3.A,
                                                            {
                                                                className: ss.y,
                                                                contentClassName: ss.$,
                                                                children: er.intl.string(er.t["2Ys7nu"]),
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
                              })(v, p, c),
                              y === nz.Done ? null : (0, a.jsx)(I.y, { className: sl.u1 }),
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
                children: (0, a.jsx)(e$.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(S.D, {
                        className: sl.__invalid_tutorialHeader,
                        variant: "heading-sm/semibold",
                        children: er.intl.string(er.t.vZPktJ),
                    }),
                    (0, a.jsx)(y.E, {
                        color: "text-default",
                        variant: "body-sm/normal",
                        children: er.intl.string(er.t.vWkIII),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sl.dh,
                        children: (0, a.jsx)(v.$, {
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
function sr() {
    return (0, a.jsx)(tf, {
        Icon: e$.InboxIcon,
        disableStars: !0,
        header: er.intl.string(er.t["KG/ynf"]),
        tip: er.intl.string(er.t.cvcKzX),
    });
}
function sd() {
    return (0, a.jsx)(tI, { onClick: () => tm._.dispatch(ek.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sc = n(113164);
function so(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, eW.bG)([eN.A], () => eN.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: sc.wx,
        children: [
            (0, a.jsxs)("div", {
                className: sc.qd,
                children: [
                    (0, a.jsx)(e$.InboxIcon, { size: "md", color: "currentColor", className: sc.yH }),
                    (0, a.jsx)(S.D, {
                        className: sc.Hi,
                        variant: "body-lg/semibold",
                        color: "interactive-text-active",
                        children: er.intl.string(er.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(eq.s, {
                        className: sc.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": er.intl.string(er.t["8k+6QY"]),
                        children: [(0, a.jsx)(su, { tab: t }), (0, a.jsx)(e7, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: sc.YF,
                children: (0, a.jsxs)(eQ.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sc.$H,
                    children: [
                        (0, a.jsx)(eQ.V.Item, {
                            id: d.Y2.UNREADS,
                            "aria-label": er.intl.string(er.t.sRUdB8),
                            className: sc.Mf,
                            children: (0, a.jsx)("span", { className: sc.Gn, children: er.intl.string(er.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t.GRZF96),
                            id: d.Y2.MENTIONS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", { className: sc.Gn, children: er.intl.string(er.t.GRZF96) }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t["2pAkDA"]),
                            id: d.Y2.BOOKMARKS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", {
                                className: sc.Gn,
                                children: er.intl.string(er.t["2pAkDA"]),
                            }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t.aUXxzT),
                            id: d.Y2.REMINDERS,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", {
                                className: sc.Gn,
                                children:
                                    0 === l
                                        ? er.intl.string(er.t.aUXxzT)
                                        : er.intl.formatToPlainString(er.t["5en8ya"], { count: l }),
                            }),
                        }),
                        (0, a.jsx)(eQ.V.Item, {
                            "aria-label": er.intl.string(er.t.Fn6Odn),
                            id: d.Y2.SCHEDULED,
                            className: sc.Mf,
                            children: (0, a.jsx)("span", { className: sc.Gn, children: er.intl.string(er.t.Fn6Odn) }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function su(e) {
    let { tab: t } = e;
    return t === d.Y2.UNREADS ? (0, a.jsx)(sd, {}) : t === d.Y2.MENTIONS ? (0, a.jsx)(ta, {}) : null;
}
var sh = n(935063),
    sm = n(475743),
    sg = n(517019),
    sx = n(356622);
let sA = { offset: { left: 4, right: -12 } },
    sf = "Recent Mentions";
function sj(e, t) {
    tt.A.fetchRecentMentions({
        before: t,
        limit: 25,
        guildId: null != e && ts.Ay.guildFilter !== ek.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: ts.Ay.roleFilter,
        everyone: ts.Ay.everyoneFilter,
    });
}
function sp(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, O.A)("recents", n);
    ((0, eA.xN)(n), (0, eA.yW)(sf));
    let l = (0, j.bG)([et.A, tn.Ay], () => et.A.getChannel(tn.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([ts.Ay], () => ({
            messages: ts.Ay.getMentions(),
            hasMore: ts.Ay.hasMore,
            loading: ts.Ay.loading,
            guildFilter: ts.Ay.guildFilter,
            roleFilter: ts.Ay.roleFilter,
            everyoneFilter: ts.Ay.everyoneFilter,
        })),
        m = (0, sm.Ay)(o),
        g = (0, sm.Ay)(u),
        x = (0, sm.Ay)(h);
    (i.useEffect(() => {
        ts.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sj(l)
            : sj(l);
    }, [m, o, g, u, x, h, l]),
        (0, tu.Ay)(() => {
            r?.some(nR.$r) && (tt.A.clearMentions(), sj(l));
        }),
        (0, tu.l0)(() => {
            tt.A.truncateMentions(25);
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
        ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(I.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(tf, { Icon: sh.AtIcon, header: er.intl.string(er.t.bgDz74), tip: er.intl.string(er.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(N.Ch, {
                            ref: (e) => {
                                ((n.current = e), (s.current = e?.getScrollerNode() ?? null));
                            },
                            className: eB.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sy, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(I.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sx.u,
                                            children: (0, a.jsx)(v.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: er.intl.string(er.t.XBlaiC),
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
function sy(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = et.A.getChannel(t.channel_id);
    if (null == s || (0, nS.Jm)(s) || (0, nS.$v)(s)) return null;
    let l = sg.A.didAgree(s.getGuildId()),
        i = !!(0, nS.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: eB.aP,
        children: [
            (0, a.jsx)(eo, {
                channel: s,
                onClick: (e) => (0, eA.KW)(t, sf, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(b.e, {
                    size: "sm",
                    className: ed.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: er.intl.string(er.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(M.K, {
                                variant: "secondary",
                                "aria-label": er.intl.string(er.t["+TSRGD"]),
                                size: "sm",
                                icon: T.ChatArrowRightIcon,
                                onClick: (e) => (0, eA.KW)(t, sf, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: er.intl.string(er.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(M.K, {
                                variant: "secondary",
                                "aria-label": er.intl.string(er.t.e6RscS),
                                size: "sm",
                                icon: tG.CheckmarkLargeIcon,
                                onClick: () => tt.A.deleteRecentMention(t.id),
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
                        focusProps: sA,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sI = n(559647),
    sN = n(285796),
    sv = n(588975),
    sC = n(403581),
    sE = n(738188),
    sS = n(404374),
    sb = n(611371),
    sM = n(465794),
    sR = n(682901),
    s_ = n(603037);
function sL(e) {
    let { text: t, isAtLimit: n, analyticsSection: s } = e;
    return (0, a.jsxs)("div", {
        className: s_.Zj,
        children: [
            n
                ? (0, a.jsx)(sE.WarningIcon, { size: "md", color: "currentColor", className: s_.QW })
                : (0, a.jsx)(sC.NitroWheelIcon, { size: "md", color: sS.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(y.E, {
                variant: "body-xs/medium",
                color: "text-strong",
                className: s_.tD,
                children: [t, " ", (0, a.jsx)(sb.A, { className: s_.TN })],
            }),
            (0, a.jsx)(sM.A, {
                size: "sm",
                variantOverride: n ? void 0 : "primary",
                subscriptionTier: sR.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: s },
            }),
        ],
    });
}
var sT = n(151282),
    sD = n(199160),
    sk = n(566908),
    sO = n(81369),
    sG = n(588190),
    sF = n(663341),
    sP = n(626891),
    sK = n(474218);
function sw() {
    return (0, a.jsx)("div", {
        className: sP.kL,
        children: (0, a.jsxs)("div", {
            className: sP.vW,
            children: [
                (0, a.jsx)("img", { src: sK.A, className: sP.Tn, alt: er.intl.string(er.t.SZVs3K) }),
                (0, a.jsx)(S.D, {
                    className: sP.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: er.intl.string(er.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sP.rf,
                    children: (0, a.jsx)(y.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: er.intl.format(er.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sP.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sP.MK,
                            children: [
                                (0, a.jsx)(sU, {
                                    icon: sO.FileUpIcon,
                                    label: er.intl.string(er.t["d3+iYs"]),
                                    highlighted: !1,
                                }),
                                (0, a.jsx)(sU, {
                                    icon: sG.CalendarPlusIcon,
                                    label: er.intl.string(er.t["3+ii4F"]),
                                    highlighted: !0,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sP.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sP.$f,
                                    children: (0, a.jsx)(sF.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, a.jsx)(y.E, {
                                    variant: "body-sm/normal",
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
function sU(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: m()(sP.KT, { [sP.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sH = n(970244),
    sz = n(722178);
n(938796);
var sB = n(408018),
    sX = n(451909),
    sV = n(205120),
    sY = n(91624);
function sJ(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = ej.D_.getSetting(),
                s = (0, sk.zs)(t.createArgs),
                l = sX.Ay.unparse(s, n.id);
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
                return (0, sH.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sH.tu)(c), [c]);
    return (0, a.jsx)(sV.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sY.R3,
        children: sZ,
    });
}
function sZ(e) {
    return (0, a.jsx)(sY.Nr, { ...e });
}
n(853297);
var sW = n(757424);
let s$ = "Scheduled Messages",
    sq = { offset: { left: 4, right: -12 } };
function sQ(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sT.sy)();
    }, []);
    let n = (0, j.bG)([sD.A], () => sD.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sD.A], () => sD.A.loading),
        l = (0, j.bG)([sD.A], () => sD.A.getMessagesPendingRemoval()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        { limit: d, isUpgradable: c } = (0, sk.yz)(),
        o = d > 0 && r.length >= d,
        u = i.useRef(null),
        h = (0, O.A)("scheduled-messages", u);
    return ((0, eA.xN)(u), (0, eA.yW)(s$), s)
        ? (0, a.jsx)("div", { className: eB.Lq, children: (0, a.jsx)(I.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sw, {})
          : (0, a.jsxs)("div", {
                className: sW.MY,
                children: [
                    (0, a.jsx)(f.hD, {
                        navigator: h,
                        children: (0, a.jsx)(f.PR, {
                            children: (e) => {
                                let { ref: n, ...s } = e;
                                return (0, a.jsx)(N.Ch, {
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
                    c ? (0, a.jsx)("div", { className: sW.fH, children: (0, a.jsx)(s0, { isAtLimit: o }) }) : null,
                ],
            });
}
function s0(e) {
    let { isAtLimit: t } = e,
        { analyticsLocations: s } = (0, F.Ay)(G.A.SCHEDULED_MESSAGES_LIST),
        l = i.useCallback(() => {
            (0, tc.mM)(async () => {
                let { default: e } = await n.e(952582).then(n.bind(n, 853861));
                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: s });
            });
        }, [s]),
        r = (0, sz.Dd)(sR.PremiumTypes.TIER_2);
    return (0, a.jsx)(sL, {
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
        { isError: d, stateMessage: c } = (0, sk.Y8)(t.state),
        o = ej.hH.useSetting(),
        [u, h] = i.useState(!1),
        g = i.useCallback(() => (0, sH.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sH.CI)({ scheduledMessage: t });
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
                              type: d ? "error" : "normal",
                              text: d
                                  ? c
                                  : er.intl.formatToPlainString(er.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(b.e, {
                              size: "sm",
                              className: ed.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.JLba51),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(M.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sI.SendMessageIcon,
                                          "aria-label": er.intl.string(er.t.JLba51),
                                          disabled: s,
                                          onClick: () => (0, sH.fK)(t.scheduledMessageId),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(M.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: L.PencilIcon,
                                          "aria-label": er.intl.string(er.t.ZXE1s4),
                                          disabled: s,
                                          onClick: () => h(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(M.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: X.ClockIcon,
                                          "aria-label": er.intl.string(er.t.SBcdAN),
                                          disabled: s,
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: er.intl.string(er.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(M.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sN.CircleXIcon,
                                          "aria-label": er.intl.string(er.t.O3sL8F),
                                          disabled: s,
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(I.y, { className: eB.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ef.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sW.Mg : eB.YD,
                                            compact: o,
                                            animateAvatar: !1,
                                            focusProps: sq,
                                            inlineEditor: u
                                                ? (0, a.jsx)(sJ, {
                                                      scheduledMessage: t,
                                                      channel: r,
                                                      onCancel: () => h(!1),
                                                  })
                                                : void 0,
                                        },
                                        t.record.id,
                                    ),
                                    t.attachmentUploads.length > 0 &&
                                        (0, a.jsxs)("div", {
                                            className: m()(sW.PI, { [sW.oE]: o }),
                                            children: [
                                                (0, a.jsx)(sv.AttachmentIcon, { size: "xs", color: "currentColor" }),
                                                (0, a.jsx)(y.E, {
                                                    variant: "body-sm/normal",
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
        className: m()(eB.aP, sW.Mh),
        children: [
            (0, a.jsxs)("div", {
                className: sW.WV,
                children: [
                    (0, a.jsx)("div", {
                        className: sW.V2,
                        children: (0, a.jsx)(C.CircleErrorIcon, {
                            size: "xxs",
                            color: E.A.colors.INTERACTIVE_TEXT_ACTIVE,
                        }),
                    }),
                    (0, a.jsx)(S.D, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: er.intl.string(er.t.FpeuT5),
                    }),
                ],
            }),
            (0, a.jsx)(b.e, {
                size: "sm",
                className: ed.GC,
                children: (0, a.jsx)(p.m, {
                    text: er.intl.string(er.t.O3sL8F),
                    ariaHidden: !0,
                    children: (0, a.jsx)(M.K, {
                        variant: "secondary",
                        size: "sm",
                        icon: sN.CircleXIcon,
                        "aria-label": er.intl.string(er.t.O3sL8F),
                        onClick: () => (0, sH.tu)(t),
                    }),
                }),
            }),
        ],
    });
}
var s2 = n(211550);
function s6(e) {
    let {
        dialogClassName: t,
        tab: n,
        setTab: s,
        closePopout: l,
        handleMentionsJump: i,
        showTutorial: h,
        setSeenTutorial: m,
    } = e;
    return (0, a.jsx)(c.l, {
        "aria-label": er.intl.string(er.t.GSmTKJ),
        className: t,
        children: (0, a.jsx)("div", {
            className: s2.k,
            children: (0, a.jsx)(r.tH, {
                fallback: (0, a.jsx)(sr, {}),
                children: (0, a.jsx)(o.F, {
                    component: (0, a.jsx)(so, { tab: n, setTab: s, closePopout: l }),
                    children:
                        n === d.Y2.MENTIONS
                            ? (0, a.jsx)(sp, { onJump: i })
                            : n === d.Y2.BOOKMARKS
                              ? (0, a.jsx)(eY, { closePopout: l, type: u.Yf.BOOKMARK }, "bookmarks")
                              : n === d.Y2.REMINDERS
                                ? (0, a.jsx)(eY, { closePopout: l, type: u.Yf.REMINDER }, "reminders")
                                : n === d.Y2.SCHEDULED
                                  ? (0, a.jsx)(sQ, { onJump: i })
                                  : (0, a.jsx)(sa, { onJump: i, showTutorial: h, setSeenTutorial: m, closePopout: l }),
                }),
            }),
        }),
    });
}

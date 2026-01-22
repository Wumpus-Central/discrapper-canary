n.d(t, {
    A: () => U,
}),
    n(114821),
    n(339614),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(827734);
n(990078);
var u = n(397927),
    d = n(73153),
    f = n(334738),
    p = n(964486);
n(793574), n(688810);
var h = n(952790),
    b = n(85109),
    g = n(734057),
    m = n(71393),
    A = n(320501),
    y = n(222823),
    O = n(661191),
    j = n(851109),
    v = n(706341),
    x = n(932883),
    E = n(599486),
    _ = n(320697),
    C = n(394953),
    S = n(628325),
    I = n(524628),
    N = n(81435),
    T = n(313452),
    P = n(849077),
    w = n(652215),
    R = n(985018),
    D = n(760362);

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let L = [],
    G = {
        controller: new s.Controller({
            value: 1,
            immediate: !0,
        }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: P.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };

function k(e) {
    let { includePanelSpacing: t } = e,
        n = (0, x.op)(),
        { selectedFilter: i } = (0, E.A)(),
        s = (0, o.bG)([_.A], () => _.A.oldestDisplayedMessageId),
        c = (0, o.yK)([_.A], () => _.A.getInboxMessages()),
        S = (0, o.yK)([y.Ay, m.A, _.A], () =>
            c.filter(
                (e) =>
                    !(0, C.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.Ay,
                        GuildStore_: m.A,
                    }) && !(0, C.zo)(e, _.A.selectedItemInfo),
            ),
        ),
        I = (0, o.yK)([y.Ay, m.A, _.A], () =>
            c.filter(
                (e) =>
                    (0, C.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.Ay,
                        GuildStore_: m.A,
                    }) || (0, C.zo)(e, _.A.selectedItemInfo),
            ),
        ),
        N = l.useCallback(
            (e) => {
                i !== P.Io.BOOKMARKS &&
                    v.A.loadMoreInbox({
                        viewId: n,
                        loadingTrigger: e,
                    });
            },
            [i, n],
        ),
        { hasLoadedEver: R, canLoadMore: k } = (0, o.cf)([_.A], () => ({
            hasLoadedEver: _.A.hasLoadedEver,
            canLoadMore: _.A.canLoadMore({}),
        }));
    l.useEffect(() => {
        k && !R && N(P.VA.ON_OPEN);
    }, [k, R, N]),
        (function (e) {
            let { unreadChannelIds: t } = (0, C.U4)();
            l.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        var t;
                        let n = A.A.getMessages(e),
                            r = null == (t = n.last()) ? void 0 : t.id,
                            l = y.Ay.ackMessageId(e),
                            i = n.hasPresent() && n.ready && !n.cached;
                        null != r &&
                            null != l &&
                            i &&
                            O.default.compare(l, r) >= 0 &&
                            f.ack(
                                e,
                                {
                                    section: w.JJy.NOTIFICATIONS_INBOX,
                                    object: w.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: w.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(R ? I : null);
    let U = (0, o.yK)([b.A], () => b.A.getSavedMessages()),
        K = l.useMemo(
            () =>
                U.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? L
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = g.A.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: P.yL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [U],
        ),
        W = V(S, i, s),
        z = V(I, i, null);
    (0, p.Ay)(() => {
        var e;
        d.h.dispatch({
            type: "NOTIFICATIONS_INBOX_OPEN",
        });
        let t = (0, j.GE)({
                location: "NotificationsInboxSidebar",
            }).notificationCenterVariant,
            r = null == (e = _.A.getDevOverrides().navOnClick) || e;
        if (t !== j.U5.SIDEBAR || !1 === r) return;
        let { message: l, isUnread: i } = (function (e, t) {
            var n, r, l;
            let i = null == (r = e[e.length - 1]) ? void 0 : r.message,
                a = null == (l = t[t.length - 1]) ? void 0 : l.message,
                s = null != a ? a : i;
            if (null != s)
                return {
                    message: s,
                    isUnread: null != a,
                };
            let o = _.A.getNotifyingChannelIds();
            if (null == o || 0 === o.length)
                return {
                    message: null,
                    isUnread: !1,
                };
            let c = o[0],
                u = y.Ay.getTrackedAckMessageId(c);
            return null == u
                ? {
                      message: null,
                      isUnread: !1,
                  }
                : {
                      message: {
                          id: O.default.atNextMillisecond(u),
                          channel_id: c,
                      },
                      isUnread: null != (n = y.Ay.hasUnread(c)) && n,
                  };
        })(W, z);
        null != l &&
            v.A.inboxItemClick({
                message: l,
                channel: {
                    id: l.channel_id,
                },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                viewId: n,
            });
    }),
        (0, p.l0)(() => {
            d.h.dispatch({
                type: "NOTIFICATIONS_INBOX_CLOSE",
            });
        });
    let { filterStyle: Y } = (0, j.X8)({
            location: "NotificationsInboxSidebar",
        }),
        q = Y === j.yF.DROPDOWN && i !== P.Io.ALL,
        X = (0, P.Yw)(i);
    return (0, r.jsx)("nav", {
        className: a()(D.kL, {
            [D.Yu]: t,
        }),
        children: (0, r.jsxs)(u.Fmo, {
            forceLevel: 1,
            component: (0, r.jsx)(
                h.Ay,
                M(
                    {
                        hasSubheader: !0,
                        guild: X,
                    },
                    G,
                ),
            ),
            children: [
                i === P.Io.ALL &&
                    (0, r.jsx)(B, {
                        hideBanner: !R || i !== P.Io.ALL,
                    }),
                q &&
                    (0, r.jsx)(u.hKd, {
                        size: 8,
                    }),
                (0, r.jsx)(T.A, {
                    className: D.cl,
                    renderMessageGroup: H,
                    messages: i === P.Io.BOOKMARKS ? K : W,
                    unreadMessages: i === P.Io.BOOKMARKS ? [] : z,
                    listName: "notifications-inbox",
                    renderLoadingState: F,
                    ignoreGrouping: i === P.Io.BOOKMARKS,
                    loadMore: N,
                }),
            ],
        }),
    });
}

function U(e) {
    return (0, r.jsx)(x.GM, {
        children: (0, r.jsx)(k, M({}, e)),
    });
}

function V(e, t, n) {
    return l.useMemo(
        () =>
            0 === e.length || t === P.Io.BOOKMARKS
                ? L
                : e.filter((e) => {
                      let { id: r } = e;
                      return (
                          !(O.default.age(r) > P.V$ || (null != n && 0 >= O.default.compare(r, n))) && t === P.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}

function F() {
    return (0, r.jsx)(I.A, {});
}

function H(e, t) {
    return (0, r.jsx)(
        N.A,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t,
        },
        e[0].id,
    );
}

function B(e) {
    let { hideBanner: t } = e,
        n = (0, S.S)((e) => e.shouldHide());
    return (0, r.jsx)("div", {
        className: a()(D.dl, {
            [D.jD]: n || t,
        }),
        children: (0, r.jsxs)("div", {
            className: D.XD,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: D.vi,
                    children: R.intl.string(R.t["6XMM+D"]),
                }),
                (0, r.jsx)(u.iA$, {
                    size: "sm",
                    color: c.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
            ],
        }),
    });
}

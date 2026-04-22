n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(517738),
    o = n(311907),
    d = n(827734),
    c = n(707554),
    u = n(696986),
    h = n(834730),
    A = n(921457),
    _ = n(73153),
    m = n(334738),
    g = n(964486);
n(793574), n(688810);
var p = n(952790),
    f = n(85109),
    E = n(734057),
    x = n(71393),
    I = n(320501),
    C = n(222823),
    b = n(661191),
    N = n(851109),
    S = n(706341),
    v = n(932883),
    T = n(599486),
    y = n(320697),
    R = n(394953),
    j = n(628325),
    L = n(524628),
    O = n(81435),
    G = n(313452),
    D = n(849077),
    M = n(652215),
    U = n(985018),
    P = n(873111);
let w = [],
    k = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: D.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function V(e) {
    let { includePanelSpacing: t } = e,
        n = (0, v.op)(),
        { selectedFilter: s } = (0, T.A)(),
        r = (0, o.bG)([y.A], () => y.A.oldestDisplayedMessageId),
        d = (0, o.yK)([y.A], () => y.A.getInboxMessages()),
        h = (0, o.yK)([C.Ay, x.A, y.A], () =>
            d.filter(
                (e) =>
                    !(0, R.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: C.Ay,
                        GuildStore_: x.A,
                    }) && !(0, R.zo)(e, y.A.selectedItemInfo),
            ),
        ),
        A = (0, o.yK)([C.Ay, x.A, y.A], () =>
            d.filter(
                (e) =>
                    (0, R.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: C.Ay,
                        GuildStore_: x.A,
                    }) || (0, R.zo)(e, y.A.selectedItemInfo),
            ),
        ),
        j = l.useCallback(
            (e) => {
                s !== D.Io.BOOKMARKS && S.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [s, n],
        ),
        { hasLoadedEver: L, canLoadMore: O } = (0, o.cf)([y.A], () => ({
            hasLoadedEver: y.A.hasLoadedEver,
            canLoadMore: y.A.canLoadMore({}),
        }));
    l.useEffect(() => {
        O && !L && j(D.VA.ON_OPEN);
    }, [O, L, j]),
        (function (e) {
            let { unreadChannelIds: t } = (0, R.U4)();
            l.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = I.A.getMessages(e),
                            n = t.last()?.id,
                            i = C.Ay.ackMessageId(e),
                            l = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != i &&
                            l &&
                            b.default.compare(i, n) >= 0 &&
                            m.ack(
                                e,
                                {
                                    section: M.JJy.NOTIFICATIONS_INBOX,
                                    object: M.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(L ? A : null);
    let U = (0, o.yK)([f.A], () => f.A.getSavedMessages()),
        V = l.useMemo(
            () =>
                U.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? w
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: E.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: D.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [U],
        ),
        B = H(h, s, r),
        K = H(A, s, null);
    (0, g.Ay)(() => {
        _.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, N.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = y.A.getDevOverrides().navOnClick ?? !0;
        if (e !== N.U5.SIDEBAR || !1 === t) return;
        let { message: i, isUnread: l } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                i = t[t.length - 1]?.message,
                l = i ?? n;
            if (null != l) return { message: l, isUnread: null != i };
            let s = y.A.getNotifyingChannelIds();
            if (null == s || 0 === s.length) return { message: null, isUnread: !1 };
            let a = s[0],
                r = C.Ay.getTrackedAckMessageId(a);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: b.default.atNextMillisecond(r), channel_id: a }, isUnread: C.Ay.hasUnread(a) ?? !1 };
        })(B, K);
        null != i &&
            S.A.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: l,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, g.l0)(() => {
            _.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: z } = (0, N.X8)({ location: "NotificationsInboxSidebar" }),
        q = z === N.yF.DROPDOWN && s !== D.Io.ALL,
        X = (0, D.Yw)(s);
    return (0, i.jsx)("nav", {
        className: a()(P.kL, { [P.Yu]: t }),
        children: (0, i.jsxs)(c.F, {
            forceLevel: 1,
            component: (0, i.jsx)(p.Ay, { hasSubheader: !0, guild: X, ...k }),
            children: [
                s === D.Io.ALL && (0, i.jsx)(Y, { hideBanner: !L || s !== D.Io.ALL }),
                q && (0, i.jsx)(u.h, { size: 8 }),
                (0, i.jsx)(G.A, {
                    className: P.cl,
                    renderMessageGroup: W,
                    messages: s === D.Io.BOOKMARKS ? V : B,
                    unreadMessages: s === D.Io.BOOKMARKS ? [] : K,
                    listName: "notifications-inbox",
                    renderLoadingState: F,
                    ignoreGrouping: s === D.Io.BOOKMARKS,
                    loadMore: j,
                }),
            ],
        }),
    });
}
function B(e) {
    return (0, i.jsx)(v.GM, { children: (0, i.jsx)(V, { ...e }) });
}
function H(e, t, n) {
    return l.useMemo(
        () =>
            0 === e.length || t === D.Io.BOOKMARKS
                ? w
                : e.filter((e) => {
                      let { id: i } = e;
                      return (
                          !(b.default.age(i) > D.V$ || (null != n && 0 >= b.default.compare(i, n))) && t === D.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}
function F() {
    return (0, i.jsx)(L.A, {});
}
function W(e, t) {
    return (0, i.jsx)(O.A, { message: e[0], groupedMessages: e.slice(1), isUnread: t }, e[0].id);
}
function Y(e) {
    let { hideBanner: t } = e,
        n = (0, j.S)((e) => e.shouldHide());
    return (0, i.jsx)("div", {
        className: a()(P.dl, { [P.jD]: n || t }),
        children: (0, i.jsxs)("div", {
            className: P.XD,
            children: [
                (0, i.jsx)(h.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: P.vi,
                    children: U.intl.string(U.t["6XMM+D"]),
                }),
                (0, i.jsx)(A.i, { size: "sm", color: d.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}

n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(563495),
    o = n(311907),
    d = n(827734);
n(990078);
var c = n(397927),
    u = n(73153),
    h = n(334738),
    A = n(964486);
n(793574), n(688810);
var g = n(952790),
    m = n(85109),
    p = n(734057),
    _ = n(71393),
    x = n(320501),
    f = n(222823),
    E = n(661191),
    C = n(851109),
    I = n(706341),
    S = n(932883),
    b = n(599486),
    N = n(320697),
    T = n(394953),
    j = n(628325),
    v = n(524628),
    y = n(81435),
    R = n(313452),
    O = n(849077),
    L = n(652215),
    D = n(985018),
    M = n(760362);
let G = [],
    U = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: O.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function P(e) {
    let { includePanelSpacing: t } = e,
        n = (0, S.op)(),
        { selectedFilter: s } = (0, b.A)(),
        r = (0, o.bG)([N.A], () => N.A.oldestDisplayedMessageId),
        d = (0, o.yK)([N.A], () => N.A.getInboxMessages()),
        j = (0, o.yK)([f.Ay, _.A, N.A], () =>
            d.filter(
                (e) =>
                    !(0, T.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: f.Ay,
                        GuildStore_: _.A,
                    }) && !(0, T.zo)(e, N.A.selectedItemInfo),
            ),
        ),
        v = (0, o.yK)([f.Ay, _.A, N.A], () =>
            d.filter(
                (e) =>
                    (0, T.EJ)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: f.Ay,
                        GuildStore_: _.A,
                    }) || (0, T.zo)(e, N.A.selectedItemInfo),
            ),
        ),
        y = l.useCallback(
            (e) => {
                s !== O.Io.BOOKMARKS && I.A.loadMoreInbox({ viewId: n, loadingTrigger: e });
            },
            [s, n],
        ),
        { hasLoadedEver: D, canLoadMore: P } = (0, o.cf)([N.A], () => ({
            hasLoadedEver: N.A.hasLoadedEver,
            canLoadMore: N.A.canLoadMore({}),
        }));
    l.useEffect(() => {
        P && !D && y(O.VA.ON_OPEN);
    }, [P, D, y]),
        (function (e) {
            let { unreadChannelIds: t } = (0, T.U4)();
            l.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        let t = x.A.getMessages(e),
                            n = t.last()?.id,
                            i = f.Ay.ackMessageId(e),
                            l = t.hasPresent() && t.ready && !t.cached;
                        null != n &&
                            null != i &&
                            l &&
                            E.default.compare(i, n) >= 0 &&
                            h.ack(
                                e,
                                {
                                    section: L.JJy.NOTIFICATIONS_INBOX,
                                    object: L.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: L.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(D ? v : null);
    let k = (0, o.yK)([m.A], () => m.A.getSavedMessages()),
        F = l.useMemo(
            () =>
                k.flatMap((e) => {
                    let { message: t } = e;
                    return null == t
                        ? G
                        : [
                              {
                                  id: t.id,
                                  channelId: t.channel_id,
                                  guildId: p.A.getBasicChannel(t.channel_id)?.guild_id,
                                  kind: O.yL.BOOKMARK,
                                  message: t,
                              },
                          ];
                }),
            [k],
        ),
        Y = w(j, s, r),
        W = w(v, s, null);
    (0, A.Ay)(() => {
        u.h.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let e = (0, C.GE)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            t = N.A.getDevOverrides().navOnClick ?? !0;
        if (e !== C.U5.SIDEBAR || !1 === t) return;
        let { message: i, isUnread: l } = (function (e, t) {
            let n = e[e.length - 1]?.message,
                i = t[t.length - 1]?.message,
                l = i ?? n;
            if (null != l) return { message: l, isUnread: null != i };
            let s = N.A.getNotifyingChannelIds();
            if (null == s || 0 === s.length) return { message: null, isUnread: !1 };
            let a = s[0],
                r = f.Ay.getTrackedAckMessageId(a);
            return null == r
                ? { message: null, isUnread: !1 }
                : { message: { id: E.default.atNextMillisecond(r), channel_id: a }, isUnread: f.Ay.hasUnread(a) ?? !1 };
        })(Y, W);
        null != i &&
            I.A.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: l,
                isSidebar: !0,
                track: !1,
                autoTriggeredOnInboxOpen: !0,
                viewId: n,
            });
    }),
        (0, A.l0)(() => {
            u.h.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: K } = (0, C.X8)({ location: "NotificationsInboxSidebar" }),
        z = K === C.yF.DROPDOWN && s !== O.Io.ALL,
        X = (0, O.Yw)(s);
    return (0, i.jsx)("nav", {
        className: a()(M.kL, { [M.Yu]: t }),
        children: (0, i.jsxs)(c.Fmo, {
            forceLevel: 1,
            component: (0, i.jsx)(g.Ay, { hasSubheader: !0, guild: X, ...U }),
            children: [
                s === O.Io.ALL && (0, i.jsx)(H, { hideBanner: !D || s !== O.Io.ALL }),
                z && (0, i.jsx)(c.hKd, { size: 8 }),
                (0, i.jsx)(R.A, {
                    className: M.cl,
                    renderMessageGroup: B,
                    messages: s === O.Io.BOOKMARKS ? F : Y,
                    unreadMessages: s === O.Io.BOOKMARKS ? [] : W,
                    listName: "notifications-inbox",
                    renderLoadingState: V,
                    ignoreGrouping: s === O.Io.BOOKMARKS,
                    loadMore: y,
                }),
            ],
        }),
    });
}
function k(e) {
    return (0, i.jsx)(S.GM, { children: (0, i.jsx)(P, { ...e }) });
}
function w(e, t, n) {
    return l.useMemo(
        () =>
            0 === e.length || t === O.Io.BOOKMARKS
                ? G
                : e.filter((e) => {
                      let { id: i } = e;
                      return (
                          !(E.default.age(i) > O.V$ || (null != n && 0 >= E.default.compare(i, n))) && t === O.Io.ALL
                      );
                  }),
        [e, t, n],
    );
}
function V() {
    return (0, i.jsx)(v.A, {});
}
function B(e, t) {
    return (0, i.jsx)(y.A, { message: e[0], groupedMessages: e.slice(1), isUnread: t }, e[0].id);
}
function H(e) {
    let { hideBanner: t } = e,
        n = (0, j.S)((e) => e.shouldHide());
    return (0, i.jsx)("div", {
        className: a()(M.dl, { [M.jD]: n || t }),
        children: (0, i.jsxs)("div", {
            className: M.XD,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: M.vi,
                    children: D.intl.string(D.t["6XMM+D"]),
                }),
                (0, i.jsx)(c.iA$, { size: "sm", color: d.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
            ],
        }),
    });
}

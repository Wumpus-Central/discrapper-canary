n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(146773),
    f = n(595519),
    h = n(619915),
    p = n(622822),
    g = n(201895),
    m = n(873696),
    b = n(66999),
    _ = n(22082),
    y = n(665906),
    O = n(592125),
    v = n(430824),
    j = n(496675),
    x = n(306680),
    C = n(9156),
    E = n(594174),
    S = n(109446),
    I = n(98597),
    P = n(648501),
    N = n(473403),
    Z = n(304471),
    w = n(981631),
    T = n(647086),
    A = n(55940);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class M extends I.ZP {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: A.channelInfo,
                  children: e,
              });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: a,
                hasMoreActiveThreads: c,
                mentionCount: u,
                connectChannelDropTarget: d,
                connectChannelDragSource: f,
                connectDragPreview: h,
                canReorderChannel: p,
                isSubscriptionGated: b,
                isFavoriteSuggestion: _,
                subtitle: y,
                forceTopLevelThread: O,
                embeddedApps: v,
                resolvedUnreadSetting: j,
                withGuildIcon: x,
                enableActivities: C,
            } = this.props,
            E = C && null != v && v.length > 0,
            S = (0, m.D)(y),
            I = (0, r.jsx)("li", {
                className: o()(this.getClassName(), {
                    [A.disabled]: this.isDisabled(),
                    [A.selected]: n,
                }),
                "data-dnd-name": e.name,
                onMouseEnter: c || E ? this.handleMouseEnter : void 0,
                onMouseLeave: c || E ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(s.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (E && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(N.ZP, {
                            ref: this.channelItemRef,
                            className: A.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !_ && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: a,
                            subtitle: null == S ? void 0 : S.subtitle,
                            subtitleColor: null == S ? void 0 : S.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: p ? h : null,
                            isFavoriteSuggestion: _,
                            channelTypeOverride: O ? w.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: j,
                            withGuildIcon: x,
                            "aria-label": (0, g.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: u,
                                isSubscriptionGated: b,
                            }),
                            children: [
                                _ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderAcceptSuggestionButton(),
                                            this.renderRemoveSuggestionButton(),
                                        ],
                                    }),
                                !_ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderChannelInfo(),
                                            this.renderInviteButton(),
                                            this.renderEditButton(),
                                        ],
                                    }),
                            ],
                        }),
                }),
            });
        return p ? d(f(I)) : I;
    }
    constructor(...e) {
        super(...e),
            R(this, "state", {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1,
            }),
            R(this, "channelItemRef", i.createRef()),
            R(this, "enterTimer", 0),
            R(this, "exitTimer", 0),
            R(this, "handleMouseEnter", () => {
                (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                            ? this.setState({ shouldShowActivities: !0 })
                            : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            R(this, "handleMouseLeave", () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                            this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            R(this, "handleThreadsPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, "handleActivitiesPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            R(this, "handleClosePopout", () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
                    this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            R(this, "handleMouseDown", () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : w.ME, e.id);
            }),
            R(this, "renderPopout", (e) => {
                let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
                    { shouldShowActivities: o } = this.state;
                return t.isModeratorReportChannel() || l
                    ? null
                    : null != i && i.length > 0 && o && !n
                      ? (0, r.jsx)(Z.Z, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t,
                        })
                      : (0, r.jsx)(S.Z, L(D({}, e), { channel: this.props.channel }));
            }),
            R(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props;
                if (t.type === w.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(D({}, n), {
                                    channel: t,
                                    selected: !0,
                                }),
                            );
                    });
                if (t.type === w.d4z.DM) {
                    let i = E.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("66165"),
                                n.e("56826"),
                                n.e("31899"),
                            ]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    L(D({}, n), {
                                        user: i,
                                        channel: t,
                                        showModalItems: !1,
                                    }),
                                );
                        });
                    return;
                }
                if (t.isModeratorReportChannel())
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await n.e("86715").then(n.bind(n, 466676));
                        return (n) => (0, r.jsx)(e, L(D({}, n), { channel: t }));
                    });
                let i = v.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(
                            n.bind(n, 373651),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(D({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            });
    }
}
let k = (0, d.B)(M);
function G(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.JQ)(t),
        d = (0, a.cj)([x.ZP], () => ({
            unread: x.ZP.hasUnread(t.id),
            ackMessageId: x.ZP.ackMessageId(t.id),
            isLowImportanceMention: x.ZP.getIsMentionLowImportance(t.id),
        })),
        g = (0, a.e7)([C.ZP], () => C.ZP.resolveUnreadSetting(t)),
        m = (0, a.cj)([O.Z, j.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return {
                canManageChannel: j.Z.can(w.Plq.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    (n.id === T._ ||
                        (null != e ? j.Z.can(w.Plq.MANAGE_CHANNELS, e) : j.Z.can(w.Plq.MANAGE_CHANNELS, n))),
            };
        }),
        v = (0, a.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: E, isSubscriptionGated: S } = (0, b.Z)(t.id),
        I = (0, a.e7)([C.ZP], () => C.ZP.isFavorite(n.id, t.id)),
        N = (0, p.$5)(t),
        Z = (0, f.NX)(t.id),
        A = (0, P.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: S,
            needSubscriptionToAccess: E,
            isNewChannel: v,
            muted: o,
            enableActivities: Z,
            resolvedUnreadSetting: g,
        }),
        R = (0, h.ZP)(t);
    return (0, r.jsx)(
        k,
        L(D({}, d, m, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: S,
            needSubscriptionToAccess: E,
            isNewChannel: v && e.canBeNewChannel,
            isFavoriteSuggestion: l && !I,
            channelIsContentGated: N,
            channelInfo: A,
            embeddedApps: R,
            resolvedUnreadSetting: g,
            hasChannelInfo: null != A,
            enableActivities: Z,
        }),
    );
}

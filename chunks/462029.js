n.d(t, { g: () => P, D: () => M }), n(321073);
var i = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(617710),
    d = n(698441),
    c = n(297469),
    u = n(863005),
    h = n(152007),
    A = n(353202),
    E = n(95701),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(568548),
    p = n(309010),
    S = n(543465),
    N = n(403362),
    L = n(181079),
    m = n(93055),
    f = n(967198),
    O = n(422258),
    b = n(5180),
    v = n(774452),
    R = n(349828),
    U = n(281405),
    D = n(818348);
let G = 21552 == n.j ? [a.Ay, L.A, o.A, d.Ay, u.A, h.A, g.A, C.A, I.A, T.Ay, p.Ay, S.Ay] : null;
function y(e) {
    let { limit: t, includeLoading: n } = e,
        i = L.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let r = i[e];
        if (
            r.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == r.channelType ||
            !E.Le.has(r.channelType) ||
            null != C.A.getChannel(e)
        )
            continue;
        let a = A.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function M() {
    let { withUpsellNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { hasAccess: t, canUpsellFavoriteLimit: n } = (0, m.TW)("FavoritesGuildChannelList"),
        l = e && n,
        [s, a] = i.useState(() => P(void 0, { withUpsellNotice: l })),
        d = o.A.isConnected(),
        u = i.useMemo(() => P({}), []);
    i.useEffect(() => {
        function e() {
            a(P(void 0, { withUpsellNotice: l }));
        }
        e();
        let t = r().throttle(e, 100);
        return G.forEach((e) => e.addChangeListener(t)), () => G.forEach((e) => e.removeChangeListener(t));
    }, [l]),
        i.useEffect(() => {
            if (t && d) {
                let e;
                0 === (e = y({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : A.A.loadThreadsBulk(e);
            }
        }, [t, d]),
        i.useEffect(
            () => () => {
                if ((0, b.ai)(f.A.getGuildId())) return;
                let { hasAccess: e, isFreemium: t } = (0, m.ad)();
                e &&
                    t &&
                    (L.A.hasStoredFavorites() || null != L.A.favoriteGuildVisibleSetting || (0, O.tV)(!1, "auto"));
            },
            [],
        );
    let h = t ? s : u,
        E = t && y({ limit: 1, includeLoading: !0 }).length > 0,
        g = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(h);
    return { guildChannels: h, shouldShowEmptyState: g && !E, hasNoChannels: g };
}
function P(e) {
    let { withUpsellNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? L.A.getFavoriteChannels(),
        i = S.Ay.isGuildCollapsed(R.Vc),
        l = p.Ay.getChannelId(),
        a = C.A.getChannel(l),
        o = p.Ay.getVoiceChannelId(),
        d = [],
        A = {};
    for (let e in n) {
        let t = n[e],
            i = C.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let l = (0, v.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            d.push(l);
            continue;
        }
        let r = t.parentId;
        r in A || (A[r] = []), A[r].push(l);
    }
    function f(e, t) {
        let { isCollapsed: l, isMuted: s } = t;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !I.A.can(D.xB.VIEW_CHANNEL, e)) return null;
                let d = null != a && (a.id === e.id || o === e.id),
                    A = null != a && a.isThread() && a.parent_id === e.id,
                    g =
                        (d || A || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    C = (0, c.wF)(e, g, a, o, i),
                    p = _.A.isCollapsed(e.id),
                    N = e.isThread() ? h.A.isMuted(e.id) : S.Ay.isChannelMuted(e.guild_id, e.id),
                    L = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: C,
                        threadCount: r().size(C),
                        isCollapsed: p,
                        isMuted: N,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return d || A || !r().isEmpty(g) || T.Ay.getMentionCount(e.id) > 0
                    ? L
                    : (i && N) ||
                        (l && (N || s || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : L;
            })
            .filter(N.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let O = null,
        b = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == O && (O = f(d, this)), O;
            },
        },
        G = (0, m.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = L.A.getCategoryRecord(t);
                if (null == i) return null;
                let l = A[t] ?? [],
                    r = S.Ay.isChannelMuted(R.Vc, t),
                    s = g.A.isCollapsed(t),
                    a = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n[t]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == a && (a = f(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        y = 0;
    for (let e of [b, ...G]) for (let t of ((e.position = ++y), e.channelList)) t.position = ++y;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        P = t ? [U.r.FAVORITES_UPSELL] : [],
        x = { isEmpty: () => 0 === P.length, getRows: () => P, getRow: (e) => P[e] ?? null };
    return {
        id: R.Vc,
        hideMutedChannels: i,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[c.Xt] = P.length), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = b.channelList.length);
            for (let t = 0; t < G.length; t++) e[c.TF + t] = Math.max(1, G[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === G[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? b : G[e - c.TF]),
        getNamedCategoryFromSection: (e) => G[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => x,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [b, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [b, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [b, ...G]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}

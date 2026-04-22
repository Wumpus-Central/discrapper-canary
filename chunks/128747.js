"use strict";
n.d(t, { A: () => y }), n(321073), n(323874), n(14289), n(35956);
var r = n(735438),
    i = n.n(r),
    s = n(791332),
    a = n.n(s),
    o = n(167189),
    l = n(833291),
    u = n(219065),
    d = n(594061),
    c = n(750808),
    _ = n(808728),
    f = n(994500),
    E = n(287809),
    h = n(248465),
    p = n(695184),
    m = n(998218),
    g = n(450827),
    A = n(989133),
    I = n(926140);
let T = Object.freeze({});
function S(e, t) {
    return t.frecencyBoosters ? (0, h.X3)(e) : {};
}
class y {
    query = "";
    options = T;
    results = [];
    _userResults = [];
    _groupDMResults = [];
    _textChannelResults = [];
    _voiceChannelResults = [];
    _guildResults = [];
    _applicationResults = [];
    _linkResults = [];
    _inAppNavigations = [];
    _asyncTimeout;
    userSearchContext;
    onResultsChange;
    resultTypes;
    _userBlacklist = null;
    _limit;
    _refetchForSingleCategoryLimit;
    _refetched = !1;
    constructor(e, t, n = 100, r = T, i = 0) {
        (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = i),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = g.A.getUserSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        (this._limit = e),
            null != t && t.setLimit(e),
            this._userResults.length > this._limit && (this._userResults.length = this._limit),
            this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit),
            this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit),
            this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit),
            this._guildResults.length > this._limit && (this._guildResults.length = this._limit),
            this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit),
            this._linkResults.length > this._limit && (this._linkResults.length = this._limit),
            this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setRefetchForSingleCategoryLimit(e) {
        this._refetchForSingleCategoryLimit = e;
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null),
            (this._userResults = this._include(I.rD.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(I.rD.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(I.rD.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(I.rD.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(I.rD.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(I.rD.APPLICATION) ? this._applicationResults : []),
            (this._linkResults = this._include(I.rD.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(I.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(I.rD.USER) && this.options?.userFilters?.thread != null;
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.options = { ...this.options, ...e }) : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith("user:") ? e.replace("user:", "") : ""))
                      .filter((e) => "" !== e))
                : (this._userBlacklist = null);
    }
    _willRefetchIfSingleCategoryResults() {
        return (
            !this._refetched &&
            !(this._refetchForSingleCategoryLimit <= 5) &&
            null == this.options.voiceChannelGuildFilter &&
            null == this.options.userFilters &&
            1 ===
                [
                    this._userResults,
                    this._groupDMResults,
                    this._textChannelResults,
                    this._voiceChannelResults,
                    this._guildResults,
                    this._applicationResults,
                    this._linkResults,
                    this._inAppNavigations,
                ].filter((e) => e.length > 0).length
        );
    }
    refetchIfSingleCategoryResults() {
        if (!this._willRefetchIfSingleCategoryResults()) return;
        this._refetched = !0;
        let e = this.query;
        this._userResults.length > 0
            ? this.queryUsers(e, null, this._refetchForSingleCategoryLimit)
            : this._groupDMResults.length > 0
              ? (this._groupDMResults = this.queryGroupDMs(e, this._refetchForSingleCategoryLimit))
              : this._textChannelResults.length > 0
                ? (this._textChannelResults = this.queryTextChannels(e, this._refetchForSingleCategoryLimit))
                : this._voiceChannelResults.length > 0
                  ? (this._voiceChannelResults = this.queryVoiceChannels(e, this._refetchForSingleCategoryLimit))
                  : this._guildResults.length > 0
                    ? (this._guildResults = this.queryGuilds(e, this._refetchForSingleCategoryLimit))
                    : this._applicationResults.length > 0
                      ? (this._applicationResults = this.queryApplications(e, this._refetchForSingleCategoryLimit))
                      : this._linkResults.length > 0
                        ? (this._linkResults = this.queryLink(e, this._refetchForSingleCategoryLimit))
                        : this._inAppNavigations.length > 0 &&
                          (this._inAppNavigations = this.queryInAppNavigations(e, this._refetchForSingleCategoryLimit));
    }
    search(e, t) {
        if (((this.query = e), (this._refetched = !1), "" === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? d.bW.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit),
                (this._groupDMResults = this.queryGroupDMs(e, this._limit)),
                (this._textChannelResults = this.queryTextChannels(e, this._limit)),
                (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)),
                (this._guildResults = this.queryGuilds(e, this._limit)),
                (this._applicationResults = this.queryApplications(e, this._limit)),
                (this._linkResults = this.queryLink(e, this._limit)),
                (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)),
                this._isAsyncSearch()
                    ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, 300)))
                    : this._include(I.rD.USER) || this.updateAllResults();
        });
    }
    clear() {
        let { userSearchContext: e } = this;
        null != e && e.clearQuery(),
            (this.results = []),
            (this._userResults = []),
            (this._groupDMResults = []),
            (this._textChannelResults = []),
            (this._voiceChannelResults = []),
            (this._guildResults = []),
            (this._applicationResults = []),
            (this._linkResults = []),
            (this._inAppNavigations = []);
    }
    clean() {
        this.clear(), this.destroy(), (this.query = ""), this.updateAllResults();
    }
    pause() {
        this.userSearchContext?.unsubscribe?.();
    }
    resume() {
        this.userSearchContext?.subscribe?.();
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, t) {
        if (!this._include(I.rD.TEXT_CHANNEL)) return [];
        let n = S(I.rD.TEXT_CHANNEL, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            s = null != i ? (e) => !i.has(`channel:${e.id}`) : void 0;
        return h.Ay.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            allowSnowflake: r,
            filter: s,
            boosters: n,
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(I.rD.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: r } = this.options,
            i = S(I.rD.VOICE_CHANNEL, this.options);
        return h.Ay.queryChannels({
            query: e,
            guildId: r,
            limit: t,
            fuzzy: !0,
            type: _.vM,
            allowSnowflake: n,
            boosters: i,
        });
    }
    queryGuilds(e, t) {
        if (!this._include(I.rD.GUILD)) return [];
        let n = S(I.rD.GUILD, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            s = null != i ? (e) => !i.has(`guild:${e.id}`) : void 0;
        return h.Ay.queryGuilds({ query: e, limit: t, fuzzy: !0, filter: s, boosters: n, allowSnowflake: r });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(I.rD.USER)) return;
        let { allowSnowflake: i, userFilters: s } = this.options,
            a = S(I.rD.USER, this.options);
        if (s?.thread != null) {
            let t = u.A.getMemberListSections(s.thread),
                r = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds)
                    (!s?.friends || f.A.isFriend(e)) &&
                        (this._userBlacklist?.includes(e) || r.push({ userId: e, nick: n.usersById[e]?.displayName }));
            }
            this._userResults = h.Ay.queryUsers({ query: e, users: r, limit: n, boosters: a, allowSnowflake: i });
            return;
        }
        void 0 !== t && p.A.requestMembers(t, e, 100),
            r.setLimit(n),
            r.setQuery({ query: e, filters: s, blacklist: this._userBlacklist, boosters: a });
    }
    queryGroupDMs(e, t) {
        if (!this._include(I.rD.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = S(I.rD.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has(`channel:${e.id}`) : void 0;
        return h.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, filter: i, boosters: r });
    }
    queryApplications(e, t) {
        return this._include(I.rD.APPLICATION) ? h.Ay.queryApplications({ query: e, limit: t, fuzzy: !0 }) : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(I.rD.LINK)) return [];
        let r = (0, l.br)(e);
        if (r?.type === o.I.INVITE) return [{ type: I.rD.LINK, record: c.A.fromInviteCode(r.code), score: 1 }];
        let i = a().sanitizeUrl(e);
        try {
            n = new URL(i);
        } catch (e) {
            return [];
        }
        let { pathname: s, hostname: u = "", host: d } = n,
            _ = m.A.isDiscordHostname(u) || window.location.host === d;
        return null !== s && _ && m.A.isAppRoute(s) ? [{ type: I.rD.LINK, record: c.A.fromPath(s), score: 1 }] : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(I.rD.IN_APP_NAVIGATION)
            ? h.Ay.queryInAppNavigations({ query: e, limit: t, fuzzy: !0 })
            : [];
    }
    parseUserResults = (e) => {
        let { results: t } = e;
        if (!this._include(I.rD.USER)) return;
        for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
            let t = E.default.getUser(e);
            null != t &&
                this._userResults.push({ type: I.rD.USER, record: t, score: (0, h.zy)(n), comparator: r ?? void 0 });
        }
        let n = this._willRefetchIfSingleCategoryResults();
        !n && this._userResults.length > this._limit && (this._userResults.length = this._limit),
            n && this.refetchIfSingleCategoryResults(),
            this.updateAllResults();
    };
    updateAllResults = () => {
        clearTimeout(this._asyncTimeout),
            (this.results = i()([
                ...this._userResults,
                ...this._groupDMResults,
                ...this._textChannelResults,
                ...this._voiceChannelResults,
                ...this._guildResults,
                ...this._linkResults,
                ...this._inAppNavigations,
            ])
                .uniqBy((e) => `${e.type}-${e.record.id}`)
                .sort(A.A)
                .value()),
            this.onResultsChange(this.results, this.query);
    };
}

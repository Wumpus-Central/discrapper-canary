"use strict";
n.d(t, { A: () => S }), n(321073), n(323874), n(14289), n(35956);
var r = n(735438),
    i = n.n(r),
    a = n(791332),
    s = n.n(a),
    o = n(441446),
    l = n(594061),
    u = n(750808),
    c = n(808728),
    d = n(994500),
    _ = n(287809),
    f = n(248465),
    p = n(695184),
    h = n(998218),
    m = n(450827),
    g = n(989133),
    E = n(926140);
let A = 100,
    I = Object.freeze({}),
    T = 300;
function y(e, t) {
    return t.frecencyBoosters ? (0, f.X3)(e) : {};
}
class S {
    query = "";
    options = I;
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
    constructor(e, t, n = A, r = I, i = 0) {
        (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = i),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = m.A.getUserSearchContext(this.parseUserResults, this._limit));
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
            (this._userResults = this._include(E.rD.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(E.rD.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(E.rD.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(E.rD.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(E.rD.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(E.rD.APPLICATION) ? this._applicationResults : []),
            (this._linkResults = this._include(E.rD.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(E.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(E.rD.USER) && this.options?.userFilters?.thread != null;
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
        (this.options.frecencyBoosters ? l.bW.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit),
                (this._groupDMResults = this.queryGroupDMs(e, this._limit)),
                (this._textChannelResults = this.queryTextChannels(e, this._limit)),
                (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)),
                (this._guildResults = this.queryGuilds(e, this._limit)),
                (this._applicationResults = this.queryApplications(e, this._limit)),
                (this._linkResults = this.queryLink(e, this._limit)),
                (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)),
                this._isAsyncSearch()
                    ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, T)))
                    : this._include(E.rD.USER) || this.updateAllResults();
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
        if (!this._include(E.rD.TEXT_CHANNEL)) return [];
        let n = y(E.rD.TEXT_CHANNEL, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            a = null != i ? (e) => !i.has(`channel:${e.id}`) : void 0;
        return f.Ay.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            allowSnowflake: r,
            filter: a,
            boosters: n,
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(E.rD.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: r } = this.options,
            i = y(E.rD.VOICE_CHANNEL, this.options);
        return f.Ay.queryChannels({
            query: e,
            guildId: r,
            limit: t,
            fuzzy: !0,
            type: c.vM,
            allowSnowflake: n,
            boosters: i,
        });
    }
    queryGuilds(e, t) {
        if (!this._include(E.rD.GUILD)) return [];
        let n = y(E.rD.GUILD, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            a = null != i ? (e) => !i.has(`guild:${e.id}`) : void 0;
        return f.Ay.queryGuilds({ query: e, limit: t, fuzzy: !0, filter: a, boosters: n, allowSnowflake: r });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(E.rD.USER)) return;
        let { allowSnowflake: i, userFilters: a } = this.options,
            s = y(E.rD.USER, this.options);
        if (a?.thread != null) {
            let t = o.A.getMemberListSections(a.thread),
                r = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds)
                    (!a?.friends || d.A.isFriend(e)) &&
                        (this._userBlacklist?.includes(e) || r.push({ userId: e, nick: n.usersById[e]?.displayName }));
            }
            this._userResults = f.Ay.queryUsers({ query: e, users: r, limit: n, boosters: s, allowSnowflake: i });
            return;
        }
        void 0 !== t && p.A.requestMembers(t, e, 100),
            r.setLimit(n),
            r.setQuery({ query: e, filters: a, blacklist: this._userBlacklist, boosters: s });
    }
    queryGroupDMs(e, t) {
        if (!this._include(E.rD.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = y(E.rD.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has(`channel:${e.id}`) : void 0;
        return f.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, filter: i, boosters: r });
    }
    queryApplications(e, t) {
        return this._include(E.rD.APPLICATION) ? f.Ay.queryApplications({ query: e, limit: t, fuzzy: !0 }) : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(E.rD.LINK)) return [];
        let r = s().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: i, hostname: a = "", host: o } = n,
            l = h.A.isDiscordHostname(a) || window.location.host === o;
        return null !== i && l && h.A.isAppRoute(i) ? [{ type: E.rD.LINK, record: u.A.fromPath(i), score: 1 }] : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(E.rD.IN_APP_NAVIGATION)
            ? f.Ay.queryInAppNavigations({ query: e, limit: t, fuzzy: !0 })
            : [];
    }
    parseUserResults = (e) => {
        let { results: t } = e;
        if (!this._include(E.rD.USER)) return;
        for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
            let t = _.default.getUser(e);
            null != t &&
                this._userResults.push({ type: E.rD.USER, record: t, score: (0, f.zy)(n), comparator: r ?? void 0 });
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
                .sort(g.A)
                .value()),
            this.onResultsChange(this.results, this.query);
    };
}

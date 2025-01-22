var i = r(47120);
var a = r(789020);
var o = r(200651);
r(192379);
var s = r(481060),
    l = r(147913),
    u = r(160404),
    c = r(314897),
    d = r(592125),
    f = r(271383),
    p = r(914010),
    h = r(630388),
    _ = r(526120),
    m = r(563534),
    g = r(734893),
    E = r(846121),
    v = r(931261),
    y = r(460347),
    b = r(372897);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class T extends l.Z {
    constructor(...e) {
        super(...e),
            I(this, 'onboardingCompleteGuilds', new Set()),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            I(this, 'handlePostConnectionOpen', () => {
                let e = p.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            I(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: n, user: i, guildId: a } = e;
                if (i.id === c.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(a) && (0, h.yE)(null != n ? n : 0, b.q.COMPLETED_HOME_ACTIONS)) {
                        var l, u;
                        this.onboardingCompleteGuilds.add(a);
                        let e = null !== (u = null === (l = m.Z.getNewMemberActions(a)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
                        if (0 === e) return;
                        (0, s.openModalLazy)(async () => {
                            let { default: n } = await r.e('92339').then(r.bind(r, 184100));
                            return (r) =>
                                (0, o.jsx)(n, {
                                    ...r,
                                    initialPercent: (e - 1) / e,
                                    numActions: e
                                });
                        });
                    }
                }
            }),
            I(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                this.onboardingCompleteGuilds.delete(n.id);
            }),
            I(this, 'handleChannelSelect', async (e) => {
                let { guildId: n, channelId: r } = e;
                if (null == n || null == r) return;
                let { memberActions: i, completedActions: a } = await this._getOrLoadOnboardingMemberActions(n),
                    o = null == i ? void 0 : i.find((e) => e.channelId === r);
                (null == a ? void 0 : a[r]) !== !0 && null != o && o.actionType === g.oi.VIEW && (0, _.Oh)(n, r);
            }),
            I(this, 'handleMessageSend', (e) => {
                var n;
                let { guildId: r, channelId: i, message: a } = e;
                if (null == r || null == i || (null === (n = a.author) || void 0 === n ? void 0 : n.id) !== c.default.getId()) return;
                let o = d.Z.getChannel(i);
                (null == o ? void 0 : o.isForumPost()) && (null == o ? void 0 : o.parent_id) != null && this._completeChatAction(r, o.parent_id), this._completeChatAction(r, i);
            }),
            I(this, 'handleThreadCreate', (e) => {
                var n;
                let { channel: r, isNewlyCreated: i } = e;
                if (!!i && null != r.parent_id && !!(null === (n = d.Z.getChannel(r.parent_id)) || void 0 === n ? void 0 : n.isForumLikeChannel())) r.ownerId === c.default.getId() && this._completeChatAction(r.guild_id, r.parent_id);
            }),
            I(this, '_completeChatAction', async (e, n) => {
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(e),
                    a = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 && null != a && a.actionType === g.oi.CHAT && (0, _.Oh)(e, n);
            }),
            I(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                let n = (0, v.s)(e),
                    r = u.Z.isFullServerPreview(e);
                if (!n && !r) return {};
                let i = f.ZP.getSelfMember(e);
                if (null == i || !(0, y.m)(e)) return {};
                let [a, o] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, i)]);
                return {
                    memberActions: a,
                    completedActions: o
                };
            }),
            I(this, '_getOrLoadOnboardingHomeSettings', async (e) => {
                let n = m.Z.getNewMemberActions(e),
                    r = m.Z.getIsLoading(e);
                if (!(null == n && !r && (0, y.m)(e))) return n;
                {
                    let n = await (0, _.cP)(e);
                    return null == n ? void 0 : n.newMemberActions;
                }
            }),
            I(this, '_getOrLoadMemberActions', async (e, n) => {
                var r;
                let { completedActions: i, loading: a } = E.Z.getState(e);
                return null == i && !a && (0, h.yE)(null !== (r = n.flags) && void 0 !== r ? r : 0, b.q.STARTED_HOME_ACTIONS) ? await (0, _.Fg)(e) : i;
            });
    }
}
n.Z = new T();

var i = r(47120);
var a = r(789020);
var s = r(200651);
r(192379);
var o = r(481060),
    l = r(147913),
    u = r(160404),
    c = r(314897),
    d = r(592125),
    f = r(271383),
    _ = r(914010),
    h = r(630388),
    p = r(526120),
    m = r(563534),
    g = r(734893),
    E = r(846121),
    v = r(931261),
    I = r(460347),
    T = r(372897);
function b(e, n, r) {
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
class y extends l.Z {
    constructor(...e) {
        super(...e),
            b(this, 'onboardingCompleteGuilds', new Set()),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            b(this, 'handlePostConnectionOpen', () => {
                let e = _.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            b(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: n, user: i, guildId: a } = e;
                if (i.id === c.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(a) && (0, h.yE)(null != n ? n : 0, T.q.COMPLETED_HOME_ACTIONS)) {
                        var l, u;
                        this.onboardingCompleteGuilds.add(a);
                        let e = null !== (u = null === (l = m.Z.getNewMemberActions(a)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
                        if (0 === e) return;
                        (0, o.openModalLazy)(async () => {
                            let { default: n } = await r.e('92339').then(r.bind(r, 184100));
                            return (r) =>
                                (0, s.jsx)(n, {
                                    ...r,
                                    initialPercent: (e - 1) / e,
                                    numActions: e
                                });
                        });
                    }
                }
            }),
            b(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                this.onboardingCompleteGuilds.delete(n.id);
            }),
            b(this, 'handleChannelSelect', async (e) => {
                let { guildId: n, channelId: r } = e;
                if (null == n || null == r) return;
                let { memberActions: i, completedActions: a } = await this._getOrLoadOnboardingMemberActions(n),
                    s = null == i ? void 0 : i.find((e) => e.channelId === r);
                (null == a ? void 0 : a[r]) !== !0 && null != s && s.actionType === g.oi.VIEW && (0, p.Oh)(n, r);
            }),
            b(this, 'handleMessageSend', (e) => {
                var n;
                let { guildId: r, channelId: i, message: a } = e;
                if (null == r || null == i || (null === (n = a.author) || void 0 === n ? void 0 : n.id) !== c.default.getId()) return;
                let s = d.Z.getChannel(i);
                (null == s ? void 0 : s.isForumPost()) && (null == s ? void 0 : s.parent_id) != null && this._completeChatAction(r, s.parent_id), this._completeChatAction(r, i);
            }),
            b(this, 'handleThreadCreate', (e) => {
                var n;
                let { channel: r, isNewlyCreated: i } = e;
                if (!!i && null != r.parent_id && !!(null === (n = d.Z.getChannel(r.parent_id)) || void 0 === n ? void 0 : n.isForumLikeChannel())) r.ownerId === c.default.getId() && this._completeChatAction(r.guild_id, r.parent_id);
            }),
            b(this, '_completeChatAction', async (e, n) => {
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(e),
                    a = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 && null != a && a.actionType === g.oi.CHAT && (0, p.Oh)(e, n);
            }),
            b(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                let n = (0, v.s)(e),
                    r = u.Z.isFullServerPreview(e);
                if (!n && !r) return {};
                let i = f.ZP.getSelfMember(e);
                if (null == i || !(0, I.m)(e)) return {};
                let [a, s] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, i)]);
                return {
                    memberActions: a,
                    completedActions: s
                };
            }),
            b(this, '_getOrLoadOnboardingHomeSettings', async (e) => {
                let n = m.Z.getNewMemberActions(e),
                    r = m.Z.getIsLoading(e);
                if (!(null == n && !r && (0, I.m)(e))) return n;
                {
                    let n = await (0, p.cP)(e);
                    return null == n ? void 0 : n.newMemberActions;
                }
            }),
            b(this, '_getOrLoadMemberActions', async (e, n) => {
                var r;
                let { completedActions: i, loading: a } = E.Z.getState(e);
                return null == i && !a && (0, h.yE)(null !== (r = n.flags) && void 0 !== r ? r : 0, T.q.STARTED_HOME_ACTIONS) ? await (0, p.Fg)(e) : i;
            });
    }
}
n.Z = new y();

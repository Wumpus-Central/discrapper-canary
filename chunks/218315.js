n.d(t, { Z: () => I }), n(47120), n(789020);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(147913),
    s = n(160404),
    o = n(314897),
    l = n(592125),
    u = n(271383),
    c = n(914010),
    d = n(630388),
    f = n(526120),
    _ = n(563534),
    p = n(734893),
    h = n(846121),
    m = n(931261),
    g = n(460347),
    E = n(372897);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class y extends a.Z {
    constructor(...e) {
        super(...e),
            v(this, 'onboardingCompleteGuilds', new Set()),
            v(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            v(this, 'handlePostConnectionOpen', () => {
                let e = c.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            v(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: t, user: a, guildId: s } = e;
                if (a.id === o.default.getId() && !this.onboardingCompleteGuilds.has(s) && (0, d.yE)(null != t ? t : 0, E.q.COMPLETED_HOME_ACTIONS)) {
                    var l, u;
                    this.onboardingCompleteGuilds.add(s);
                    let e = null !== (u = null === (l = _.Z.getNewMemberActions(s)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
                    if (0 === e) return;
                    (0, r.ZDy)(async () => {
                        let { default: t } = await n.e('92339').then(n.bind(n, 184100));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                initialPercent: (e - 1) / e,
                                numActions: e
                            });
                    });
                }
            }),
            v(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                this.onboardingCompleteGuilds.delete(t.id);
            }),
            v(this, 'handleChannelSelect', async (e) => {
                let { guildId: t, channelId: n } = e;
                if (null == t || null == n) return;
                let { memberActions: i, completedActions: r } = await this._getOrLoadOnboardingMemberActions(t),
                    a = null == i ? void 0 : i.find((e) => e.channelId === n);
                (null == r ? void 0 : r[n]) !== !0 && null != a && a.actionType === p.oi.VIEW && (0, f.Oh)(t, n);
            }),
            v(this, 'handleMessageSend', (e) => {
                var t;
                let { guildId: n, channelId: i, message: r } = e;
                if (null == n || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) !== o.default.getId()) return;
                let a = l.Z.getChannel(i);
                (null == a ? void 0 : a.isForumPost()) && (null == a ? void 0 : a.parent_id) != null && this._completeChatAction(n, a.parent_id), this._completeChatAction(n, i);
            }),
            v(this, 'handleThreadCreate', (e) => {
                var t;
                let { channel: n, isNewlyCreated: i } = e;
                i && null != n.parent_id && (null === (t = l.Z.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel()) && n.ownerId === o.default.getId() && this._completeChatAction(n.guild_id, n.parent_id);
            }),
            v(this, '_completeChatAction', async (e, t) => {
                let { memberActions: n, completedActions: i } = await this._getOrLoadOnboardingMemberActions(e),
                    r = null == n ? void 0 : n.find((e) => e.channelId === t);
                (null == i ? void 0 : i[t]) !== !0 && null != r && r.actionType === p.oi.CHAT && (0, f.Oh)(e, t);
            }),
            v(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                let t = (0, m.s)(e),
                    n = s.Z.isFullServerPreview(e);
                if (!t && !n) return {};
                let i = u.ZP.getSelfMember(e);
                if (null == i || !(0, g.m)(e)) return {};
                let [r, a] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, i)]);
                return {
                    memberActions: r,
                    completedActions: a
                };
            }),
            v(this, '_getOrLoadOnboardingHomeSettings', async (e) => {
                let t = _.Z.getNewMemberActions(e),
                    n = _.Z.getIsLoading(e);
                if (!(null == t && !n && (0, g.m)(e))) return t;
                {
                    let t = await (0, f.cP)(e);
                    return null == t ? void 0 : t.newMemberActions;
                }
            }),
            v(this, '_getOrLoadMemberActions', async (e, t) => {
                var n;
                let { completedActions: i, loading: r } = h.Z.getState(e);
                return null == i && !r && (0, d.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, E.q.STARTED_HOME_ACTIONS) ? await (0, f.Fg)(e) : i;
            });
    }
}
let I = new y();

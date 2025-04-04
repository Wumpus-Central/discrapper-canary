n.d(t, { Z: () => S }), n(47120), n(789020);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(147913),
    a = n(160404),
    s = n(314897),
    l = n(592125),
    c = n(271383),
    u = n(914010),
    d = n(630388),
    f = n(526120),
    _ = n(563534),
    p = n(734893),
    h = n(846121),
    m = n(931261),
    g = n(460347),
    E = n(372897);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class I extends o.Z {
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
                let e = u.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            b(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: t, user: o, guildId: a } = e;
                if (o.id === s.default.getId() && !this.onboardingCompleteGuilds.has(a) && (0, d.yE)(null != t ? t : 0, E.q.COMPLETED_HOME_ACTIONS)) {
                    var l, c;
                    this.onboardingCompleteGuilds.add(a);
                    let e = null != (c = null == (l = _.Z.getNewMemberActions(a)) ? void 0 : l.length) ? c : 0;
                    if (0 === e) return;
                    (0, i.ZDy)(async () => {
                        let { default: t } = await n.e('92339').then(n.bind(n, 184100));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                O(y({}, n), {
                                    initialPercent: (e - 1) / e,
                                    numActions: e
                                })
                            );
                    });
                }
            }),
            b(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                this.onboardingCompleteGuilds.delete(t.id);
            }),
            b(this, 'handleChannelSelect', async (e) => {
                let { guildId: t, channelId: n } = e;
                if (null == t || null == n) return;
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(t),
                    o = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 && null != o && o.actionType === p.oi.VIEW && (0, f.Oh)(t, n);
            }),
            b(this, 'handleMessageSend', (e) => {
                var t;
                let { guildId: n, channelId: r, message: i } = e;
                if (null == n || null == r || (null == (t = i.author) ? void 0 : t.id) !== s.default.getId()) return;
                let o = l.Z.getChannel(r);
                (null == o ? void 0 : o.isForumPost()) && (null == o ? void 0 : o.parent_id) != null && this._completeChatAction(n, o.parent_id), this._completeChatAction(n, r);
            }),
            b(this, 'handleThreadCreate', (e) => {
                var t;
                let { channel: n, isNewlyCreated: r } = e;
                r && null != n.parent_id && (null == (t = l.Z.getChannel(n.parent_id)) ? void 0 : t.isForumLikeChannel()) && n.ownerId === s.default.getId() && this._completeChatAction(n.guild_id, n.parent_id);
            }),
            b(this, '_completeChatAction', async (e, t) => {
                let { memberActions: n, completedActions: r } = await this._getOrLoadOnboardingMemberActions(e),
                    i = null == n ? void 0 : n.find((e) => e.channelId === t);
                (null == r ? void 0 : r[t]) !== !0 && null != i && i.actionType === p.oi.CHAT && (0, f.Oh)(e, t);
            }),
            b(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                let t = (0, m.s)(e),
                    n = a.Z.isFullServerPreview(e);
                if (!t && !n) return {};
                let r = c.ZP.getSelfMember(e);
                if (null == r || !(0, g.m)(e)) return {};
                let [i, o] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, r)]);
                return {
                    memberActions: i,
                    completedActions: o
                };
            }),
            b(this, '_getOrLoadOnboardingHomeSettings', async (e) => {
                let t = _.Z.getNewMemberActions(e),
                    n = _.Z.getIsLoading(e);
                if (!(null == t && !n && (0, g.m)(e))) return t;
                {
                    let t = await (0, f.cP)(e);
                    return null == t ? void 0 : t.newMemberActions;
                }
            }),
            b(this, '_getOrLoadMemberActions', async (e, t) => {
                var n;
                let { completedActions: r, loading: i } = h.Z.getState(e);
                return null == r && !i && (0, d.yE)(null != (n = t.flags) ? n : 0, E.q.STARTED_HOME_ACTIONS) ? await (0, f.Fg)(e) : r;
            });
    }
}
let S = new I();

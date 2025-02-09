n.d(t, { Z: () => N }), n(47120);
var i = n(392711),
    r = n(106351),
    a = n(904245),
    s = n(147913),
    o = n(367907),
    l = n(447003),
    u = n(592125),
    c = n(650774),
    d = n(271383),
    f = n(430824),
    _ = n(375954),
    p = n(944486),
    h = n(626135),
    m = n(522558),
    g = n(581025),
    E = n(795448),
    v = n(441623),
    y = n(474936),
    I = n(981631);
function T(e, t, n) {
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
let b = 50,
    S = 1000;
class A extends s.Z {
    isChannelEligible(e, t) {
        switch (e.type) {
            case r.d.DM:
            case r.d.GROUP_DM:
                return !0;
            case r.d.GUILD_TEXT:
                let n = f.Z.getGuild(t),
                    i = c.Z.getMemberCount(t);
                return null != i && i <= b && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, l.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n, r) {
        (0, i.debounce)(() => {
            let i = p.Z.getChannelId();
            !v.Z.isGiftIntentMessageInCooldown(n) &&
                e === i &&
                _.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: r
                }),
                (0, E.PV)(n));
        }, S)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = g.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: i } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            r = u.Z.getChannel(t);
        if ((n || i) && null != r && this.isChannelEligible(r, e)) {
            let t = new Set(null != e ? d.ZP.getMemberIds(e) : r.recipients),
                a = v.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (i && a.length > 0) {
                let e = a[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(r.id, y.hX.FRIEND_ANNIVERSARY, e, a.length > 1 ? y.X2.VIEW_ALL : y.X2.SEND_MESSAGE);
            }
            n &&
                h.default.track(I.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: a.length,
                    ...(0, o.v_)(r)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = p.Z.getChannelId();
        if (null != e) {
            let t = u.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
let N = new A();

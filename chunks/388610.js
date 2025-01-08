let i, r, l, u, a, o;
n(724458), n(789020), n(47120);
var d,
    s,
    E,
    _,
    N = n(392711),
    c = n.n(N),
    S = n(913527),
    T = n.n(S),
    I = n(442837),
    h = n(544891),
    C = n(570140),
    f = n(131704),
    m = n(601964),
    A = n(758449),
    p = n(598077),
    L = n(592125),
    v = n(981631);
let g = v.QZA.CLOSED,
    y = {},
    Z = {},
    O = !1,
    G = !1,
    H = null,
    U = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'iconEmoji', 'themeColor'];
function b(e) {
    let t = L.Z.getChannel(e.channelId);
    if (null == t) return M();
    (g = v.QZA.OPEN),
        (u = l = t),
        (H = 'location' in e && null != e.location ? e.location : null),
        (r = 'subsection' in e ? e.subsection : null),
        null != u && (u = u.set('nsfw', u.isNSFW())),
        (a = L.Z.getChannel(u.parent_id)),
        (o = u.getGuildId()),
        (y = {}),
        j({
            type: 'CHANNEL_SETTINGS_SET_SECTION',
            section: null != i ? i : v.CoT.OVERVIEW,
            subsection: r
        });
}
function j(e) {
    (i = e.section),
        (r = e.subsection),
        null != u &&
            i === v.CoT.INSTANT_INVITES &&
            ((O = !0),
            h.tn
                .get({
                    url: v.ANM.INSTANT_INVITES(u.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        (O = !1),
                            C.Z.dispatch({
                                type: 'CHANNEL_SETTINGS_LOADED_INVITES',
                                invites: e.body
                            });
                    },
                    () => (O = !1)
                ));
}
function M() {
    (G = !1), (g = v.QZA.CLOSED), (i = null), (u = l = null), (a = null), (Z = {});
}
let P = c().debounce(() => {
    if (null == u || null == l) return !1;
    let e = u.toJS(),
        t = l.toJS();
    U.every((n) => e[n] === t[n]) && u !== l && ((u = l), k.emitChange());
}, 500);
function R(e) {
    return new A.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new p.Z(e.inviter) : null,
        channel: (0, f.jD)(e.channel),
        guild: null != e.guild ? new m.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: T()(e.created_at),
        type: e.type
    });
}
function w(e) {
    return (
        !!(function (e) {
            if (null == l || l.id !== e) return !1;
            if (l === u) {
                let t = L.Z.getChannel(e);
                if (null == t) return !1;
                (u = l = t), (a = L.Z.getChannel(u.parent_id));
            } else {
                let t = L.Z.getChannel(e);
                if (null == t) return !1;
                (l = t), null != u && ((u = u.set('permissionOverwrites', l.permissionOverwrites)), (a = L.Z.getChannel(u.parent_id)));
            }
            return !0;
        })(e) &&
        null != u &&
        (null != o && null == u.permissionOverwrites[o] && (o = u.getGuildId()), !0)
    );
}
function D(e) {
    let { channelId: t } = e;
    return w(t);
}
class V extends (d = I.ZP.Store) {
    initialize() {
        this.waitFor(L.Z);
    }
    hasChanges() {
        return u !== l;
    }
    isOpen() {
        return G;
    }
    getSection() {
        return i;
    }
    getInvites() {
        return {
            invites: Z,
            loading: O
        };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return u;
    }
    getFormState() {
        return g;
    }
    getCategory() {
        return a;
    }
    getProps() {
        return {
            submitting: g === v.QZA.SUBMITTING,
            errors: y,
            channel: u,
            section: i,
            subsection: r,
            invites: Z,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: H
        };
    }
}
(_ = 'ChannelSettingsStore'),
    (E = 'displayName') in (s = V)
        ? Object.defineProperty(s, E, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[E] = _);
let k = new V(C.Z, {
    CHANNEL_SETTINGS_INIT: b,
    CHANNEL_SETTINGS_OPEN: function (e) {
        (G = !0), b(e);
    },
    CHANNEL_SETTINGS_SUBMIT: function () {
        (g = v.QZA.SUBMITTING), (y = {});
    },
    CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
        (l = u), (g = v.QZA.OPEN);
    },
    CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
        var t;
        (g = v.QZA.OPEN),
            (y = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
                let i = e.errors[n];
                return (0, N.isArray)(i) ? (t[n] = i.join('\n')) : (t[n] = i), t;
            }, {}));
    },
    CHANNEL_SETTINGS_CLOSE: M,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: D,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: D,
    CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
        let { overwriteId: t } = e;
        o = t;
    },
    CHANNEL_SETTINGS_UPDATE: function (e) {
        let { name: t, channelType: n, topic: i, bitrate: r, userLimit: l, nsfw: a, flags: o, rateLimitPerUser: d, defaultThreadRateLimitPerUser: s, autoArchiveDuration: E, locked: _, invitable: N, defaultAutoArchiveDuration: c, template: S, defaultReactionEmoji: T, rtcRegion: I, videoQualityMode: h, availableTags: C, defaultSortOrder: f, defaultForumLayout: m, iconEmoji: A, themeColor: p } = e;
        if (null == u) return !1;
        null != t && (u = u.set('name', t)),
            null != i && (u = u.set('topic', i)),
            null != r && (u = u.set('bitrate', r)),
            null != l && (u = u.set('userLimit', l)),
            null != a && (u = u.set('nsfw', a)),
            null != o && (u = u.set('flags', o)),
            null != d && (u = u.set('rateLimitPerUser', d)),
            null != s && (u = u.set('defaultThreadRateLimitPerUser', s)),
            null != E &&
                (u = u.set('threadMetadata', {
                    ...u.threadMetadata,
                    autoArchiveDuration: E
                })),
            null != _ &&
                (u = u.set('threadMetadata', {
                    ...u.threadMetadata,
                    locked: _
                })),
            null != N &&
                (u = u.set('threadMetadata', {
                    ...u.threadMetadata,
                    invitable: N
                })),
            null != c && (u = u.set('defaultAutoArchiveDuration', c)),
            null != S && (u = u.set('template', S)),
            null != n && (u = u.set('type', n)),
            void 0 !== I && (u = u.set('rtcRegion', I)),
            null != h && (u = u.set('videoQualityMode', h)),
            void 0 !== T && (u = u.set('defaultReactionEmoji', T)),
            null != C && (u = u.set('availableTags', C)),
            null != f && (u = u.set('defaultSortOrder', f)),
            null != m && (u = u.set('defaultForumLayout', m)),
            void 0 !== A && (u = u.set('iconEmoji', A)),
            null != p && (u = u.set('themeColor', p)),
            P();
    },
    CHANNEL_SETTINGS_SET_SECTION: j,
    CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
        (Z = {}),
            e.invites.forEach((e) => {
                Z[e.code] = R(e);
            });
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (null == u) return !1;
        let n = !1;
        for (let e of t) n = w(e.id) || n;
        return n;
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t }
        } = e;
        if (null == u || u.id !== t) return !1;
        g = v.QZA.CLOSED;
    },
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        (Z = { ...Z }), delete Z[e.code];
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        Z = {
            ...Z,
            [e.invite.code]: R(e.invite)
        };
    }
});
t.Z = 12633 == n.j ? k : null;

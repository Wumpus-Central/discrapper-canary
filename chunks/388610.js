let r, l, i, u, o, a;
n.d(t, { Z: () => W }), n(789020), n(47120);
var s,
    d = n(392711),
    c = n.n(d),
    E = n(913527),
    _ = n.n(E),
    N = n(442837),
    S = n(544891),
    T = n(570140),
    f = n(131704),
    h = n(601964),
    I = n(758449),
    p = n(598077),
    C = n(592125),
    m = n(981631);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
let v = m.QZA.CLOSED,
    L = {},
    g = {},
    b = !1,
    j = !1,
    Z = null,
    P = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'iconEmoji', 'themeColor'];
function G(e) {
    let t = C.Z.getChannel(e.channelId);
    if (null == t) return w();
    (v = m.QZA.OPEN),
        (u = i = t),
        (Z = 'location' in e && null != e.location ? e.location : null),
        (l = 'subsection' in e ? e.subsection : null),
        null != u && (u = u.set('nsfw', u.isNSFW())),
        (o = C.Z.getChannel(u.parent_id)),
        (a = u.getGuildId()),
        (L = {}),
        H({
            type: 'CHANNEL_SETTINGS_SET_SECTION',
            section: null != r ? r : m.CoT.OVERVIEW,
            subsection: l
        });
}
function H(e) {
    (r = e.section),
        (l = e.subsection),
        null != u &&
            r === m.CoT.INSTANT_INVITES &&
            ((b = !0),
            S.tn
                .get({
                    url: m.ANM.INSTANT_INVITES(u.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        (b = !1),
                            T.Z.dispatch({
                                type: 'CHANNEL_SETTINGS_LOADED_INVITES',
                                invites: e.body
                            });
                    },
                    () => (b = !1)
                ));
}
function w() {
    (j = !1), (v = m.QZA.CLOSED), (r = null), (u = i = null), (o = null), (g = {});
}
let U = c().debounce(() => {
    if (null == u || null == i) return !1;
    let e = u.toJS(),
        t = i.toJS();
    P.every((n) => e[n] === t[n]) && u !== i && ((u = i), k.emitChange());
}, 500);
function M(e) {
    return new I.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new p.Z(e.inviter) : null,
        channel: (0, f.jD)(e.channel),
        guild: null != e.guild ? new h.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type
    });
}
function D(e) {
    return (
        !!(function (e) {
            if (null == i || i.id !== e) return !1;
            if (i === u) {
                let t = C.Z.getChannel(e);
                if (null == t) return !1;
                (u = i = t), (o = C.Z.getChannel(u.parent_id));
            } else {
                let t = C.Z.getChannel(e);
                if (null == t) return !1;
                (i = t), null != u && ((u = u.set('permissionOverwrites', i.permissionOverwrites)), (o = C.Z.getChannel(u.parent_id)));
            }
            return !0;
        })(e) &&
        null != u &&
        (null != a && null == u.permissionOverwrites[a] && (a = u.getGuildId()), !0)
    );
}
function R(e) {
    let { channelId: t } = e;
    return D(t);
}
class V extends (s = N.ZP.Store) {
    initialize() {
        this.waitFor(C.Z);
    }
    hasChanges() {
        return u !== i;
    }
    isOpen() {
        return j;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return {
            invites: g,
            loading: b
        };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return u;
    }
    getFormState() {
        return v;
    }
    getCategory() {
        return o;
    }
    getProps() {
        return {
            submitting: v === m.QZA.SUBMITTING,
            errors: L,
            channel: u,
            section: r,
            subsection: l,
            invites: g,
            selectedOverwriteId: a,
            hasChanges: this.hasChanges(),
            analyticsLocation: Z
        };
    }
}
A(V, 'displayName', 'ChannelSettingsStore');
let k = new V(T.Z, {
        CHANNEL_SETTINGS_INIT: G,
        CHANNEL_SETTINGS_OPEN: function (e) {
            (j = !0), G(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (v = m.QZA.SUBMITTING), (L = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (i = u), (v = m.QZA.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            var t;
            (v = m.QZA.OPEN),
                (L = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
                    let r = e.errors[n];
                    return (0, d.isArray)(r) ? (t[n] = r.join('\n')) : (t[n] = r), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: w,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: R,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: R,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            a = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let { name: t, channelType: n, topic: r, bitrate: l, userLimit: i, nsfw: o, flags: a, rateLimitPerUser: s, defaultThreadRateLimitPerUser: d, autoArchiveDuration: c, locked: E, invitable: _, defaultAutoArchiveDuration: N, template: S, defaultReactionEmoji: T, rtcRegion: f, videoQualityMode: h, availableTags: I, defaultSortOrder: p, defaultForumLayout: C, iconEmoji: m, themeColor: A } = e;
            if (null == u) return !1;
            null != t && (u = u.set('name', t)), null != r && (u = u.set('topic', r)), null != l && (u = u.set('bitrate', l)), null != i && (u = u.set('userLimit', i)), null != o && (u = u.set('nsfw', o)), null != a && (u = u.set('flags', a)), null != s && (u = u.set('rateLimitPerUser', s)), null != d && (u = u.set('defaultThreadRateLimitPerUser', d)), null != c && (u = u.set('threadMetadata', O(y({}, u.threadMetadata), { autoArchiveDuration: c }))), null != E && (u = u.set('threadMetadata', O(y({}, u.threadMetadata), { locked: E }))), null != _ && (u = u.set('threadMetadata', O(y({}, u.threadMetadata), { invitable: _ }))), null != N && (u = u.set('defaultAutoArchiveDuration', N)), null != S && (u = u.set('template', S)), null != n && (u = u.set('type', n)), void 0 !== f && (u = u.set('rtcRegion', f)), null != h && (u = u.set('videoQualityMode', h)), void 0 !== T && (u = u.set('defaultReactionEmoji', T)), null != I && (u = u.set('availableTags', I)), null != p && (u = u.set('defaultSortOrder', p)), null != C && (u = u.set('defaultForumLayout', C)), void 0 !== m && (u = u.set('iconEmoji', m)), null != A && (u = u.set('themeColor', A)), U();
        },
        CHANNEL_SETTINGS_SET_SECTION: H,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (g = {}),
                e.invites.forEach((e) => {
                    g[e.code] = M(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == u) return !1;
            let n = !1;
            for (let e of t) n = D(e.id) || n;
            return n;
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t }
            } = e;
            if (null == u || u.id !== t) return !1;
            v = m.QZA.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (g = y({}, g)), delete g[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            g = O(y({}, g), { [e.invite.code]: M(e.invite) });
        }
    }),
    W = 12633 == n.j ? k : null;

let r, i, o, a, s, l;
n.d(t, { Z: () => et }), n(789020), n(47120);
var c,
    u = n(392711),
    d = n.n(u),
    f = n(913527),
    _ = n.n(f),
    p = n(442837),
    h = n(544891),
    m = n(570140),
    g = n(131704),
    E = n(601964),
    b = n(758449),
    y = n(598077),
    v = n(592125),
    O = n(981631);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = O.QZA.CLOSED,
    C = {},
    R = {},
    P = !1,
    w = !1,
    D = null,
    L = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'iconEmoji', 'themeColor'];
function x(e) {
    if (null == o || o.id !== e) return !1;
    if (o === a) {
        let t = v.Z.getChannel(e);
        if (null == t) return !1;
        (a = o = t), (s = v.Z.getChannel(a.parent_id));
    } else {
        let t = v.Z.getChannel(e);
        if (null == t) return !1;
        (o = t), null != a && ((a = a.set('permissionOverwrites', o.permissionOverwrites)), (s = v.Z.getChannel(a.parent_id)));
    }
    return !0;
}
function M(e) {
    (w = !0), k(e);
}
function k(e) {
    let t = v.Z.getChannel(e.channelId);
    if (null == t) return U();
    (A = O.QZA.OPEN),
        (a = o = t),
        (D = 'location' in e && null != e.location ? e.location : null),
        (i = 'subsection' in e ? e.subsection : null),
        null != a && (a = a.set('nsfw', a.isNSFW())),
        (s = v.Z.getChannel(a.parent_id)),
        (l = a.getGuildId()),
        (C = {}),
        j({
            type: 'CHANNEL_SETTINGS_SET_SECTION',
            section: null != r ? r : O.CoT.OVERVIEW,
            subsection: i
        });
}
function j(e) {
    (r = e.section),
        (i = e.subsection),
        null != a &&
            r === O.CoT.INSTANT_INVITES &&
            ((P = !0),
            h.tn
                .get({
                    url: O.ANM.INSTANT_INVITES(a.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        (P = !1),
                            m.Z.dispatch({
                                type: 'CHANNEL_SETTINGS_LOADED_INVITES',
                                invites: e.body
                            });
                    },
                    () => (P = !1)
                ));
}
function U() {
    (w = !1), (A = O.QZA.CLOSED), (r = null), (a = o = null), (s = null), (R = {});
}
function G() {
    (A = O.QZA.SUBMITTING), (C = {});
}
function B() {
    (o = a), (A = O.QZA.OPEN);
}
function F(e) {
    var t;
    (A = O.QZA.OPEN),
        (C = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join('\n')) : (t[n] = r), t;
        }, {}));
}
let V = d().debounce(() => {
    if (null == a || null == o) return !1;
    let e = a.toJS(),
        t = o.toJS();
    L.every((n) => e[n] === t[n]) && a !== o && ((a = o), ee.emitChange());
}, 500);
function Z(e) {
    let { name: t, channelType: n, topic: r, bitrate: i, userLimit: o, nsfw: s, flags: l, rateLimitPerUser: c, defaultThreadRateLimitPerUser: u, autoArchiveDuration: d, locked: f, invitable: _, defaultAutoArchiveDuration: p, template: h, defaultReactionEmoji: m, rtcRegion: g, videoQualityMode: E, availableTags: b, defaultSortOrder: y, defaultForumLayout: v, iconEmoji: O, themeColor: I } = e;
    if (null == a) return !1;
    null != t && (a = a.set('name', t)), null != r && (a = a.set('topic', r)), null != i && (a = a.set('bitrate', i)), null != o && (a = a.set('userLimit', o)), null != s && (a = a.set('nsfw', s)), null != l && (a = a.set('flags', l)), null != c && (a = a.set('rateLimitPerUser', c)), null != u && (a = a.set('defaultThreadRateLimitPerUser', u)), null != d && (a = a.set('threadMetadata', N(S({}, a.threadMetadata), { autoArchiveDuration: d }))), null != f && (a = a.set('threadMetadata', N(S({}, a.threadMetadata), { locked: f }))), null != _ && (a = a.set('threadMetadata', N(S({}, a.threadMetadata), { invitable: _ }))), null != p && (a = a.set('defaultAutoArchiveDuration', p)), null != h && (a = a.set('template', h)), null != n && (a = a.set('type', n)), void 0 !== g && (a = a.set('rtcRegion', g)), null != E && (a = a.set('videoQualityMode', E)), void 0 !== m && (a = a.set('defaultReactionEmoji', m)), null != b && (a = a.set('availableTags', b)), null != y && (a = a.set('defaultSortOrder', y)), null != v && (a = a.set('defaultForumLayout', v)), void 0 !== O && (a = a.set('iconEmoji', O)), null != I && (a = a.set('themeColor', I)), V();
}
function H(e) {
    return new b.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new y.Z(e.inviter) : null,
        channel: (0, g.jD)(e.channel),
        guild: null != e.guild ? new E.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type
    });
}
function W(e) {
    (R = {}),
        e.invites.forEach((e) => {
            R[e.code] = H(e);
        });
}
function Y(e) {
    (R = S({}, R)), delete R[e.code];
}
function K(e) {
    R = N(S({}, R), { [e.invite.code]: H(e.invite) });
}
function z(e) {
    return !!x(e) && null != a && (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), !0);
}
function q(e) {
    let { channels: t } = e;
    if (null == a) return !1;
    let n = !1;
    for (let e of t) n = z(e.id) || n;
    return n;
}
function Q(e) {
    let { channelId: t } = e;
    return z(t);
}
function X(e) {
    let {
        channel: { id: t }
    } = e;
    if (null == a || a.id !== t) return !1;
    A = O.QZA.CLOSED;
}
function J(e) {
    let { overwriteId: t } = e;
    l = t;
}
class $ extends (c = p.ZP.Store) {
    initialize() {
        this.waitFor(v.Z);
    }
    hasChanges() {
        return a !== o;
    }
    isOpen() {
        return w;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return {
            invites: R,
            loading: P
        };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return a;
    }
    getFormState() {
        return A;
    }
    getCategory() {
        return s;
    }
    getProps() {
        return {
            submitting: A === O.QZA.SUBMITTING,
            errors: C,
            channel: a,
            section: r,
            subsection: i,
            invites: R,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: D
        };
    }
}
I($, 'displayName', 'ChannelSettingsStore');
let ee = new $(m.Z, {
        CHANNEL_SETTINGS_INIT: k,
        CHANNEL_SETTINGS_OPEN: M,
        CHANNEL_SETTINGS_SUBMIT: G,
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: B,
        CHANNEL_SETTINGS_SUBMIT_FAILURE: F,
        CHANNEL_SETTINGS_CLOSE: U,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: Q,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: Q,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: J,
        CHANNEL_SETTINGS_UPDATE: Z,
        CHANNEL_SETTINGS_SET_SECTION: j,
        CHANNEL_SETTINGS_LOADED_INVITES: W,
        CHANNEL_UPDATES: q,
        CHANNEL_DELETE: X,
        INSTANT_INVITE_REVOKE_SUCCESS: Y,
        INSTANT_INVITE_CREATE_SUCCESS: K
    }),
    et = ee;

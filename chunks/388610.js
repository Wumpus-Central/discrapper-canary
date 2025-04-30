let r, i, a, o, s, l;
n.d(t, { Z: () => et }), n(997841), n(388685);
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
    O = n(592125),
    v = n(981631);
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
function A(e, t) {
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
let N = v.QZA.CLOSED,
    C = {},
    R = {},
    P = !1,
    w = !1,
    D = null,
    L = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'defaultTagSetting', 'iconEmoji', 'themeColor'];
function x(e) {
    if (null == a || a.id !== e) return !1;
    if (a === o) {
        let t = O.Z.getChannel(e);
        if (null == t) return !1;
        (o = a = t), (s = O.Z.getChannel(o.parent_id));
    } else {
        let t = O.Z.getChannel(e);
        if (null == t) return !1;
        (a = t), null != o && ((o = o.set('permissionOverwrites', a.permissionOverwrites)), (s = O.Z.getChannel(o.parent_id)));
    }
    return !0;
}
function M(e) {
    (w = !0), k(e);
}
function k(e) {
    let t = O.Z.getChannel(e.channelId);
    if (null == t) return U();
    (N = v.QZA.OPEN),
        (o = a = t),
        (D = 'location' in e && null != e.location ? e.location : null),
        (i = 'subsection' in e ? e.subsection : null),
        null != o && (o = o.set('nsfw', o.isNSFW())),
        (s = O.Z.getChannel(o.parent_id)),
        (l = o.getGuildId()),
        (C = {}),
        j({
            type: 'CHANNEL_SETTINGS_SET_SECTION',
            section: null != r ? r : v.CoT.OVERVIEW,
            subsection: i
        });
}
function j(e) {
    (r = e.section),
        (i = e.subsection),
        null != o &&
            r === v.CoT.INSTANT_INVITES &&
            ((P = !0),
            h.tn
                .get({
                    url: v.ANM.INSTANT_INVITES(o.id),
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
    (w = !1), (N = v.QZA.CLOSED), (r = null), (o = a = null), (s = null), (R = {});
}
function G() {
    (N = v.QZA.SUBMITTING), (C = {});
}
function B() {
    (a = o), (N = v.QZA.OPEN);
}
function V(e) {
    var t;
    (N = v.QZA.OPEN),
        (C = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join('\n')) : (t[n] = r), t;
        }, {}));
}
let F = d().debounce(() => {
    if (null == o || null == a) return !1;
    let e = o.toJS(),
        t = a.toJS();
    L.every((n) => e[n] === t[n]) && o !== a && ((o = a), ee.emitChange());
}, 500);
function Z(e) {
    let { name: t, channelType: n, topic: r, bitrate: i, userLimit: a, nsfw: s, flags: l, rateLimitPerUser: c, defaultThreadRateLimitPerUser: u, autoArchiveDuration: d, locked: f, invitable: _, defaultAutoArchiveDuration: p, template: h, defaultReactionEmoji: m, rtcRegion: g, videoQualityMode: E, availableTags: b, defaultSortOrder: y, defaultForumLayout: O, defaultTagSetting: v, iconEmoji: I, themeColor: T } = e;
    if (null == o) return !1;
    null != t && (o = o.set('name', t)), null != r && (o = o.set('topic', r)), null != i && (o = o.set('bitrate', i)), null != a && (o = o.set('userLimit', a)), null != s && (o = o.set('nsfw', s)), null != l && (o = o.set('flags', l)), null != c && (o = o.set('rateLimitPerUser', c)), null != u && (o = o.set('defaultThreadRateLimitPerUser', u)), null != d && (o = o.set('threadMetadata', A(S({}, o.threadMetadata), { autoArchiveDuration: d }))), null != f && (o = o.set('threadMetadata', A(S({}, o.threadMetadata), { locked: f }))), null != _ && (o = o.set('threadMetadata', A(S({}, o.threadMetadata), { invitable: _ }))), null != p && (o = o.set('defaultAutoArchiveDuration', p)), null != h && (o = o.set('template', h)), null != n && (o = o.set('type', n)), void 0 !== g && (o = o.set('rtcRegion', g)), null != E && (o = o.set('videoQualityMode', E)), void 0 !== m && (o = o.set('defaultReactionEmoji', m)), null != b && (o = o.set('availableTags', b)), null != y && (o = o.set('defaultSortOrder', y)), null != v && (o = o.set('defaultTagSetting', v)), null != O && (o = o.set('defaultForumLayout', O)), void 0 !== I && (o = o.set('iconEmoji', I)), null != T && (o = o.set('themeColor', T)), F();
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
function Y(e) {
    (R = {}),
        e.invites.forEach((e) => {
            R[e.code] = H(e);
        });
}
function W(e) {
    (R = S({}, R)), delete R[e.code];
}
function K(e) {
    R = A(S({}, R), { [e.invite.code]: H(e.invite) });
}
function z(e) {
    return !!x(e) && null != o && (null != l && null == o.permissionOverwrites[l] && (l = o.getGuildId()), !0);
}
function q(e) {
    let { channels: t } = e;
    if (null == o) return !1;
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
    if (null == o || o.id !== t) return !1;
    N = v.QZA.CLOSED;
}
function J(e) {
    let { overwriteId: t } = e;
    l = t;
}
class $ extends (c = p.ZP.Store) {
    initialize() {
        this.waitFor(O.Z);
    }
    hasChanges() {
        return o !== a;
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
        return o;
    }
    getFormState() {
        return N;
    }
    getCategory() {
        return s;
    }
    getProps() {
        return {
            submitting: N === v.QZA.SUBMITTING,
            errors: C,
            channel: o,
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
        CHANNEL_SETTINGS_SUBMIT_FAILURE: V,
        CHANNEL_SETTINGS_CLOSE: U,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: Q,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: Q,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: J,
        CHANNEL_SETTINGS_UPDATE: Z,
        CHANNEL_SETTINGS_SET_SECTION: j,
        CHANNEL_SETTINGS_LOADED_INVITES: Y,
        CHANNEL_UPDATES: q,
        CHANNEL_DELETE: X,
        INSTANT_INVITE_REVOKE_SUCCESS: W,
        INSTANT_INVITE_CREATE_SUCCESS: K
    }),
    et = ee;

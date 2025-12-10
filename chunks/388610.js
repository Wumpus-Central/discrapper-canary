let r, i, a, o, s, l;
n.d(t, { Z: () => ee }), n(997841), n(388685);
var c,
    u = n(392711),
    d = n.n(u),
    f = n(913527),
    p = n.n(f),
    _ = n(442837),
    m = n(544891),
    h = n(570140),
    g = n(131704),
    E = n(758449),
    b = n(598077),
    y = n(411198),
    O = n(592125),
    v = n(981631);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
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
function C(e, t) {
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
let A = v.QZA.CLOSED,
    N = {},
    P = {},
    R = !1,
    D = !1,
    w = null,
    x = [
        "name",
        "type",
        "topic_",
        "bitrate_",
        "userLimit_",
        "nsfw_",
        "flags_",
        "rateLimitPerUser_",
        "defaultThreadRateLimitPerUser",
        "defaultAutoArchiveDuration",
        "template",
        "defaultReactionEmoji",
        "rtcRegion",
        "videoQualityMode",
        "threadMetadata",
        "banner",
        "availableTags",
        "defaultSortOrder",
        "defaultForumLayout",
        "defaultTagSetting",
        "iconEmoji",
        "themeColor",
    ];
function L(e) {
    if (null == a || a.id !== e) return !1;
    if (a === o) {
        let t = O.Z.getChannel(e);
        if (null == t) return !1;
        (o = a = t), (s = O.Z.getChannel(o.parent_id));
    } else {
        let t = O.Z.getChannel(e);
        if (null == t) return !1;
        (a = t),
            null != o &&
                ((o = o.set("permissionOverwrites", a.permissionOverwrites)), (s = O.Z.getChannel(o.parent_id)));
    }
    return !0;
}
function j(e) {
    let t = O.Z.getChannel(e.channelId);
    if (null == t) return k();
    (A = v.QZA.OPEN),
        (o = a = t),
        (w = "location" in e && null != e.location ? e.location : null),
        (i = "subsection" in e ? e.subsection : null),
        null != o && (o = o.set("nsfw", o.isNSFW())),
        (s = O.Z.getChannel(o.parent_id)),
        (l = o.getGuildId());
    let n = o.isModeratorReportChannel() ? v.CoT.PERMISSIONS : v.CoT.OVERVIEW;
    return (
        (N = {}),
        M({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != r ? r : n,
            subsection: i,
        }),
        !0
    );
}
function M(e) {
    (r = e.section),
        (i = e.subsection),
        null != o &&
            r === v.CoT.INSTANT_INVITES &&
            ((R = !0),
            m.tn
                .get({
                    url: v.ANM.INSTANT_INVITES(o.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                .then(
                    (e) => {
                        (R = !1),
                            h.Z.dispatch({
                                type: "CHANNEL_SETTINGS_LOADED_INVITES",
                                invites: e.body,
                            });
                    },
                    () => (R = !1),
                ));
}
function k() {
    (D = !1), (A = v.QZA.CLOSED), (r = null), (o = a = null), (s = null), (P = {});
}
function U() {
    (A = v.QZA.SUBMITTING), (N = {});
}
function G() {
    (a = o), (A = v.QZA.OPEN);
}
function Z(e) {
    var t;
    (A = v.QZA.OPEN),
        (N = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t;
        }, {}));
}
let B = d().debounce(() => {
    if (null == o || null == a) return !1;
    let e = o.toJS(),
        t = a.toJS();
    x.every((n) => e[n] === t[n]) && o !== a && ((o = a), $.emitChange());
}, 500);
function F(e) {
    let {
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: a,
        nsfw: s,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        autoArchiveDuration: d,
        locked: f,
        invitable: p,
        defaultAutoArchiveDuration: _,
        template: m,
        defaultReactionEmoji: h,
        rtcRegion: g,
        videoQualityMode: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: v,
        iconEmoji: S,
        themeColor: T,
    } = e;
    if (null == o) return !1;
    null != t && (o = o.set("name", t)),
        null != r && (o = o.set("topic", r)),
        null != i && (o = o.set("bitrate", i)),
        null != a && (o = o.set("userLimit", a)),
        null != s && (o = o.set("nsfw", s)),
        null != l && (o = o.set("flags", l)),
        null != c && (o = o.set("rateLimitPerUser", c)),
        null != u && (o = o.set("defaultThreadRateLimitPerUser", u)),
        null != d && (o = o.set("threadMetadata", C(I({}, o.threadMetadata), { autoArchiveDuration: d }))),
        null != f && (o = o.set("threadMetadata", C(I({}, o.threadMetadata), { locked: f }))),
        null != p && (o = o.set("threadMetadata", C(I({}, o.threadMetadata), { invitable: p }))),
        null != _ && (o = o.set("defaultAutoArchiveDuration", _)),
        null != m && (o = o.set("template", m)),
        null != n && (o = o.set("type", n)),
        void 0 !== g && (o = o.set("rtcRegion", g)),
        null != E && (o = o.set("videoQualityMode", E)),
        void 0 !== h && (o = o.set("defaultReactionEmoji", h)),
        null != b && (o = o.set("availableTags", b)),
        null != y && (o = o.set("defaultSortOrder", y)),
        null != v && (o = o.set("defaultTagSetting", v)),
        null != O && (o = o.set("defaultForumLayout", O)),
        void 0 !== S && (o = o.set("iconEmoji", S)),
        null != T && (o = o.set("themeColor", T)),
        B();
}
function V(e) {
    return new E.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new b.Z(e.inviter) : null,
        channel: (0, g.jD)(e.channel),
        guild: null != e.guild ? (0, y.Qs)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: p()(e.created_at),
        type: e.type,
    });
}
function H(e) {
    (P = {}),
        e.invites.forEach((e) => {
            P[e.code] = V(e);
        });
}
function Y(e) {
    (P = I({}, P)), delete P[e.code];
}
function W(e) {
    P = C(I({}, P), { [e.invite.code]: V(e.invite) });
}
function K(e) {
    return !!L(e) && null != o && (null != l && null == o.permissionOverwrites[l] && (l = o.getGuildId()), !0);
}
function z(e) {
    let { channels: t } = e;
    if (null == o) return !1;
    let n = !1;
    for (let e of t) n = K(e.id) || n;
    return n;
}
function q(e) {
    let { channelId: t } = e;
    return K(t);
}
function Q(e) {
    let {
        channel: { id: t },
    } = e;
    if (null == o || o.id !== t) return !1;
    A = v.QZA.CLOSED;
}
function X(e) {
    let { overwriteId: t } = e;
    l = t;
}
class J extends (c = _.ZP.Store) {
    initialize() {
        this.waitFor(O.Z);
    }
    hasChanges() {
        return o !== a;
    }
    isOpen() {
        return D;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return {
            invites: P,
            loading: R,
        };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return o;
    }
    getFormState() {
        return A;
    }
    getCategory() {
        return s;
    }
    getProps() {
        return {
            submitting: A === v.QZA.SUBMITTING,
            errors: N,
            channel: o,
            section: r,
            subsection: i,
            invites: P,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: w,
        };
    }
}
S(J, "displayName", "ChannelSettingsStore");
let $ = new J(h.Z, {
        CHANNEL_SETTINGS_INIT: j,
        CHANNEL_SETTINGS_SUBMIT: U,
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: G,
        CHANNEL_SETTINGS_SUBMIT_FAILURE: Z,
        CHANNEL_SETTINGS_CLOSE: k,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: q,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: q,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: X,
        CHANNEL_SETTINGS_UPDATE: F,
        CHANNEL_SETTINGS_SET_SECTION: M,
        CHANNEL_SETTINGS_LOADED_INVITES: H,
        CHANNEL_UPDATES: z,
        CHANNEL_DELETE: Q,
        INSTANT_INVITE_REVOKE_SUCCESS: Y,
        INSTANT_INVITE_CREATE_SUCCESS: W,
    }),
    ee = $;

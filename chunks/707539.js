n.d(t, {
    D3: () => I,
    JO: () => N,
    TE: () => T,
    aK: () => h.A,
    hs: () => C,
    ju: () => S,
}),
    n(938796);
var r = n(989349),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(58149),
    l = n(332456),
    c = n(222823),
    u = n(543465),
    d = n(954571),
    f = n(477427),
    p = n(661191),
    _ = n(152007),
    h = n(469881),
    m = n(37411),
    g = n(652215);

function E(e, t, n) {
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

function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
n(985018);

function S() {
    (0, o.zV)(g.HAw.THREAD_BROWSER_TAB_CHANGED);
}

function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, o.zV)(g.HAw.OPEN_MODAL, {
        type: "Thread Browser",
        location_section: e,
    });
}

function T() {
    d.default.track(g.HAw.OPEN_POPOUT, {
        type: "Active Threads Popout",
    });
}

function C(e, t) {
    var n, r;
    let i = (0, l.C)(e);
    if (null == i) return;
    let s = e.getGuildId(),
        o = e.parent_id,
        c = (0, f.ME)(s, o),
        p = (e) =>
            (0, a.Lt)(e, m.CP.ALL_MESSAGES)
                ? f.Qe[g.orn.ALL_MESSAGES]
                : (0, a.Lt)(e, m.CP.ONLY_MENTIONS)
                  ? f.Qe[g.orn.ONLY_MENTIONS]
                  : (0, a.Lt)(e, m.CP.NO_MESSAGES)
                    ? f.Qe[g.orn.NO_MESSAGES]
                    : f.Qe[g.orn.NULL],
        h = null != (n = _.A.flags(e.id)) ? n : 0,
        E = p(h),
        y = _.A.isMuted(e.id),
        v = (0, f.DZ)(_.A.getMuteConfig(e.id)),
        { can_send_message: S, parent_channel_type: I } = i,
        T = O(b({}, A(i, ["can_send_message", "parent_channel_type"])), {
            channel_id: e.id,
            guild_id: s,
            parent_id: o,
            channel_type: e.type,
            has_interacted_with_thread: (h & m.CP.HAS_INTERACTED) != 0,
            parent_is_muted: u.Ay.isGuildOrCategoryOrChannelMuted(s, o),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? p(t.flags) : E,
            parent_notification_setting: c.channel_message_notification_settings,
            old_thread_is_muted: y,
            new_thread_is_muted: null != (r = t.muted) ? r : y,
            old_thread_muted_until: v,
            new_thread_muted_until: null != t.mute_config ? (0, f.DZ)(t.mute_config) : v,
        });
    d.default.track(g.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, T);
}
let N = (e) => {
    var t, n;
    let r = (0, s.bG)([c.Ay], () => c.Ay.lastMessageId(e.id)),
        a = null != r ? p.default.extractTimestamp(r) : null,
        o = null == (n = e.threadMetadata) ? void 0 : n.createTimestamp,
        l = null != o ? i()(o).valueOf() : null;
    return null != (t = null != a ? a : l) ? t : p.default.extractTimestamp(e.id);
};

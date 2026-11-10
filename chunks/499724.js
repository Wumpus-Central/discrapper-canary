let i, r, a, s, l, o, d;
var c = n(855986),
    u = n(894139),
    _ = n(73153),
    E = n(617617),
    A = n(761821),
    f = n(46653),
    h = n(62838);
let I = h.z.object({
        value: h.z.boolean(),
        source: h.z.enum([
            "legacy_proto",
            "legacy_default",
            "declarative",
            "declarative_sibling",
            "declarative_retired",
            "declarative_predecessor",
        ]),
        explicit: h.z.boolean(),
        inherited: h.z.boolean(),
        setting_id: h.z.number().int().positive(),
        source_setting_id: h.z.number().int().positive().nullable(),
        legacy_path: h.z.string().regex(/^[a-z][a-z_]*\.[a-z][a-z_]*$/),
    }),
    p = h.z.object({
        contract_version: h.z.literal(1),
        account_id: h.z.string(),
        arm: h.z.literal("treatment"),
        legacy_data_version: h.z.number().int().nonnegative(),
        declarative_data_version: h.z.number().int().nonnegative(),
        preferences: h.z
            .object({
                go_live: I,
                voice_channel_activity: I,
                friends_gaming: I,
                custom_status_update: I,
                friend_online: I,
                profile_updates: I,
                server_trending: I,
                reactions: I.extend({ value: h.z.number().int().min(0).max(2) }).optional(),
            })
            .strip(),
    });
function m(e, t) {
    return JSON.stringify(
        Object.values(e.preferences).map((e) => {
            let { legacy_path: n } = e,
                [i, r] = n.split("."),
                a = r.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
            return t[i.replace(/_([a-z])/g, (e, t) => t.toUpperCase())]?.[a];
        }),
    );
}
let T = u.ej.create(),
    g = !1,
    S = 0,
    N = !1,
    C = !1,
    O = 0,
    R = !1;
function L() {
    ((N = !0), (s = void 0), (C = !1));
}
function y() {
    return (
        null != i &&
        !N &&
        null != l &&
        a === l &&
        i.arm === (R ? "treatment" : "control") &&
        i.account_id === f.default.getId() &&
        (null != o || i.declarative_data_version >= (T.versions?.dataVersion ?? 0)) &&
        r === m(i, E.A.settings)
    );
}
function D(e) {
    if (
        e.account_id !== f.default.getId() ||
        e.declarative_data_version < (T.versions?.dataVersion ?? 0) ||
        (i?.account_id === e.account_id && e.declarative_data_version < i.declarative_data_version) ||
        e.legacy_data_version < (E.A.settings.versions?.dataVersion ?? 0)
    )
        return !1;
    ((i = e), (S = Date.now()), (r = m(e, E.A.settings)), (a = l), (N = !1), (s = void 0), (C = !1));
}
function b() {
    d?.timeout != null && (clearTimeout(d.timeout), (d.timeout = void 0));
}
function v() {
    (b(), (d = void 0));
}
function P(e) {
    let t = T.versions?.dataVersion ?? 0;
    return "proto" === e.versionSource
        ? t
        : null != i && i.account_id === f.default.getId()
          ? Math.max(t, i.declarative_data_version)
          : void 0;
}
function M(e, t) {
    let n = u.ej.clone(e.partialSettings);
    return (u.ej.mergePartial(n, t.partialSettings), n);
}
class U extends c.Ay.PersistedStore {
    static displayName = "NotifSettingsProtoStore";
    static persistKey = "NotifSettingsProtoStore-Cache";
    static migrations = [
        (e) =>
            null == e
                ? e
                : {
                      ...e,
                      offlineEditVersionSource: e.offlineEditVersionSource ?? "proto",
                      effectiveSettings: e.effectiveSettings,
                      effectiveFetchedAt: e.effectiveFetchedAt ?? 0,
                      effectiveSourceFingerprint: e.effectiveSourceFingerprint,
                      effectiveSettingsAssignment: e.effectiveSettingsAssignment,
                  },
    ];
    initialize(e) {
        (this.waitFor(f.default, E.A),
            (function (e) {
                var t;
                let n;
                if (null == e) return;
                ((t = e.effectiveSettings),
                    (i = (n = p.safeParse(t)).success && Object.keys(n.data.preferences).length > 0 ? n.data : void 0),
                    (S = e.effectiveFetchedAt ?? 0),
                    (r = e.effectiveSourceFingerprint),
                    (N =
                        null ==
                        (a =
                            "string" == typeof e.effectiveSettingsAssignment
                                ? e.effectiveSettingsAssignment
                                : void 0)));
                let s = (0, A.ii)(u.ej, e.proto ?? null);
                null != s && (T = s);
                let l = (0, A.ii)(u.ej, e.protoToSave ?? null);
                null != l &&
                    (d = {
                        partialSettings: l,
                        offlineEditDataVersion: e.offlineEditDataVersion ?? 0,
                        versionSource: "effective" === e.offlineEditVersionSource ? "effective" : "proto",
                    });
            })(e));
    }
    getState() {
        let e = {
                proto: (0, A.ob)(u.ej, T),
                effectiveSettings: i,
                effectiveFetchedAt: S,
                effectiveSourceFingerprint: r,
                effectiveSettingsAssignment: N ? void 0 : a,
            },
            t = o ?? d;
        if (null != t) {
            let n = null != o && null != d ? M(o, d) : t.partialSettings;
            ((e.protoToSave = (0, A.ob)(u.ej, n)),
                (e.offlineEditDataVersion = t.offlineEditDataVersion),
                (e.offlineEditVersionSource = t.versionSource));
        }
        return e;
    }
    get hasLoaded() {
        return g;
    }
    get pendingEdit() {
        return d;
    }
    get applyingEdit() {
        return o;
    }
    get isApplyingEdit() {
        return null != this.applyingEdit;
    }
    get hasValidEffectiveSettings() {
        return y();
    }
    get isEffectiveSettingsStale() {
        return !y() || Date.now() - S > 3e5;
    }
    get isEffectiveSettingsLoading() {
        return C;
    }
    get isEffectiveSettingsScreenOpen() {
        return O > 0;
    }
    get effectiveSettingsScreenCount() {
        return O;
    }
    get isEffectiveTreatment() {
        return R;
    }
    get effectiveAssignment() {
        return l;
    }
    ownsEffectiveRequest(e) {
        return s === e;
    }
    getEffectiveSetting(e) {
        if (y()) return Object.values(i.preferences).find((t) => t.setting_id === e);
    }
    getOptimisticSetting(e) {
        return d?.partialSettings.values[e] ?? o?.partialSettings.values[e];
    }
    getOrCreatePendingEdit(e) {
        return (
            d ?? {
                partialSettings: u.ej.create(),
                offlineEditDataVersion: e ?? T.versions?.dataVersion ?? 0,
                versionSource: null != e ? "effective" : "proto",
            }
        );
    }
    get effectiveDataVersion() {
        return y() ? i?.declarative_data_version : void 0;
    }
    get dataVersion() {
        return T.versions?.dataVersion ?? 0;
    }
    getSetting(e) {
        return d?.partialSettings?.values[e] ?? o?.partialSettings?.values[e] ?? T.values[e];
    }
}
new U(_.h, {
    CONNECTION_OPEN: function (e) {
        let { notificationSettings: t } = e;
        ((s = void 0),
            (C = !1),
            null != t.declarativeSettings && (T = t.declarativeSettings),
            null != d && d.offlineEditDataVersion !== P(d) && v(),
            null != o && o.offlineEditDataVersion !== P(o) && (o = void 0),
            (g = !0));
    },
    CONNECTION_CLOSED: function () {
        if (d?.timeout == null) return !1;
        b();
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e,
            n = t.declarativeSettings;
        if (null == n) return !1;
        T = n;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let {
            declarativeSettings: t,
            resetApplyingEdit: n,
            resetAnyPending: i,
            effectiveSettings: r,
            effectiveSettingsAssignment: a,
        } = e;
        if ((null == t && null == n) || n !== o) return !1;
        if (null != r && r.declarative_data_version < (T.versions?.dataVersion ?? 0)) {
            o = void 0;
            return;
        }
        (null != t && (T = t), (o = void 0), null != r && null != a && a === l && D(r), i && v());
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT: function (e) {
        let { edit: t, isApplying: n } = e;
        if (!0 === n)
            if (null != o) return !1;
            else ((o = t), (d = void 0));
        else d = t;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function (e) {
        let { edit: t } = e;
        if (t !== o) return !1;
        o = void 0;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function (e) {
        let { edit: t, shouldAbandonEdit: n } = e;
        if (t !== o) return !1;
        (n ? v() : (d = null == d ? t : { ...d, partialSettings: M(t, d) }), (o = void 0));
    },
    LOGOUT: function () {
        ((T = u.ej.create()),
            v(),
            (o = void 0),
            (g = !1),
            (i = void 0),
            (S = 0),
            (r = void 0),
            (a = void 0),
            (N = !1),
            (s = void 0),
            (C = !1),
            (O = 0),
            (R = !1),
            (l = void 0));
    },
    USER_SETTINGS_PROTO_UPDATE: () => {
        if (null == i || r === m(i, E.A.settings)) return !1;
        L();
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_START: (e) => {
        let { requestId: t } = e;
        ((s = t), (C = !0));
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_SUCCESS: (e) => {
        let { requestId: t, snapshot: n } = e;
        if (t !== s) return !1;
        ((C = !1), (s = void 0), D(n));
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_FAILURE: (e) => {
        let { requestId: t } = e;
        if (t !== s) return !1;
        ((s = void 0), (C = !1));
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN: () => {
        O++;
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE: () => {
        O = Math.max(0, O - 1);
    },
    EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE: (e) => {
        let { enabled: t, assignment: n } = e,
            r = null != l && l !== n,
            s = null == n || a !== n,
            o = i?.arm !== (t ? "treatment" : "control");
        ((R = t), (l = n), (r || s || o) && L());
    },
});

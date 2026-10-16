let i, r;
var a = n(17928),
    s = n(455598),
    l = n(73153),
    o = n(761821);
let d = s.ej.create(),
    c = !1;
function u() {
    r?.timeout != null && (clearTimeout(r.timeout), (r.timeout = void 0));
}
function _() {
    (u(), (r = void 0));
}
function E(e, t) {
    let n = s.ej.clone(e.partialSettings);
    return (s.ej.mergePartial(n, t.partialSettings), n);
}
class A extends a.Ay.PersistedStore {
    static displayName = "NotifSettingsProtoStore";
    static persistKey = "NotifSettingsProtoStore-Cache";
    initialize(e) {
        !(function (e) {
            if (null == e) return;
            let t = (0, o.ii)(s.ej, e.proto ?? null);
            null != t && (d = t);
            let n = (0, o.ii)(s.ej, e.protoToSave ?? null);
            null != n && (r = { partialSettings: n, offlineEditDataVersion: e.offlineEditDataVersion ?? 0 });
        })(e);
    }
    getState() {
        let e = { proto: (0, o.ob)(s.ej, d) },
            t = i ?? r;
        if (null != t) {
            let n = null != i && null != r ? E(i, r) : t.partialSettings;
            ((e.protoToSave = (0, o.ob)(s.ej, n)), (e.offlineEditDataVersion = t.offlineEditDataVersion));
        }
        return e;
    }
    get hasLoaded() {
        return c;
    }
    get pendingEdit() {
        return r;
    }
    get applyingEdit() {
        return i;
    }
    get isApplyingEdit() {
        return null != this.applyingEdit;
    }
    getOrCreatePendingEdit() {
        return r ?? { partialSettings: s.ej.create(), offlineEditDataVersion: d.versions?.dataVersion ?? 0 };
    }
    getSetting(e) {
        return r?.partialSettings?.values[e] ?? i?.partialSettings?.values[e] ?? d.values[e];
    }
}
new A(l.h, {
    CONNECTION_OPEN: function (e) {
        let { notificationSettings: t } = e;
        null != t.declarativeSettings && (d = t.declarativeSettings);
        let n = d.versions?.dataVersion ?? 0;
        (null != r && r.offlineEditDataVersion !== n && _(),
            null != i && i.offlineEditDataVersion !== n && (i = void 0),
            (c = !0));
    },
    CONNECTION_CLOSED: function () {
        if (r?.timeout == null) return !1;
        u();
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e,
            n = t.declarativeSettings;
        if (null == n) return !1;
        d = n;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { declarativeSettings: t, resetApplyingEdit: n, resetAnyPending: r } = e;
        if ((null == t && null == n) || n !== i) return !1;
        (null != t && (d = t), (i = void 0), r && _());
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT: function (e) {
        let { edit: t, isApplying: n } = e;
        if (!0 === n)
            if (null != i) return !1;
            else ((i = t), (r = void 0));
        else r = t;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function (e) {
        let { edit: t } = e;
        if (t !== i) return !1;
        i = void 0;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function (e) {
        let { edit: t, shouldAbandonEdit: n } = e;
        if (t !== i) return !1;
        (n ? _() : (r = null == r ? t : { ...r, partialSettings: E(t, r) }), (i = void 0));
    },
    LOGOUT: function () {
        ((d = s.ej.create()), _(), (i = void 0), (c = !1));
    },
});

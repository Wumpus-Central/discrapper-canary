var i = n(855986),
    r = n(52133),
    a = n(73153),
    s = n(260498);
let l = new Map(),
    o = new Set(),
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map(),
    E = new Set(),
    A = [];
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(s.Ay);
    }
    getPublishStatus(e) {
        return l.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return o.has(e);
    }
    getPublishApprovalUrl(e) {
        return d.get(e) ?? null;
    }
    getPublishProgress(e) {
        return c.get(e) ?? null;
    }
    getSafetyRecheck(e) {
        return _.get(e) ?? null;
    }
    getPublishFailure(e) {
        return u.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return E.has(e);
    }
}
let h = [],
    I = new f(a.h, {
        LOGOUT: function () {
            if (
                0 === l.size &&
                0 === o.size &&
                0 === d.size &&
                0 === c.size &&
                0 === u.size &&
                0 === _.size &&
                0 === E.size
            )
                return !1;
            (l.clear(), o.clear(), d.clear(), c.clear(), u.clear(), _.clear(), E.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of l.keys()) null == s.Ay.getProject(e) && (l.delete(e), (t = !0));
            for (let e of d.keys()) null == s.Ay.getProject(e) && (d.delete(e), (t = !0));
            for (let e of c.keys()) null == s.Ay.getProject(e) && (c.delete(e), (t = !0));
            for (let e of u.keys()) null == s.Ay.getProject(e) && (u.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    publishState: i,
                    surface: a,
                    previewAppChannels: s,
                    previewDevicePermissions: o = h,
                    publishedRevision: _ = null,
                    publishedAt: E = null,
                    publishing: f = !1,
                    patchNotesSent: I,
                    newUiUnpublished: p = !1,
                    safetyHold: m = !1,
                } = e,
                T = !f && d.delete(n),
                g = !f && c.delete(n),
                S = l.get(n),
                N = (f || (null != S && S.publishedRevision !== _)) && u.delete(n),
                C =
                    null == I ||
                    ((t = S?.patchNotesSent ?? A),
                    t.length === I.length &&
                        t.every(
                            (e, t) => e.publishedRevision === I[t].publishedRevision && e.messageId === I[t].messageId,
                        ))
                        ? (S?.patchNotesSent ?? A)
                        : I;
            if (
                !T &&
                !g &&
                !N &&
                S?.publishState === i &&
                S.surface === a &&
                (0, r.v)(S.previewAppChannels, s) &&
                (0, r.v)(S.previewDevicePermissions ?? h, o) &&
                S.publishedRevision === _ &&
                S.publishedAt === E &&
                S.publishing === f &&
                S.patchNotesSent === C &&
                S.newUiUnpublished === p &&
                (S.safetyHold ?? !1) === m
            )
                return !1;
            l.set(n, {
                publishState: i,
                surface: a,
                previewAppChannels: s,
                previewDevicePermissions: o,
                publishedRevision: _,
                publishedAt: E,
                publishing: f,
                patchNotesSent: C,
                newUiUnpublished: p,
                safetyHold: m,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), u.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                n = o.delete(t),
                i = l.get(t)?.publishing !== !0 && c.delete(t);
            return n || i;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: n } = e;
            if (u.get(t) === n) return !1;
            u.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: n } = e;
            return null == n ? d.delete(t) : d.get(t) !== n && void d.set(t, n);
        },
        CONJURE_PROJECT_SAFETY_RECHECK: function (e) {
            let { projectId: t, recheck: n } = e;
            if (null == n) return _.delete(t);
            _.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: n } = e;
            if (c.get(t)?.stage === n.stage) return !1;
            c.set(t, n);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (E.has(t) === n) return !1;
            n ? E.add(t) : E.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                i = l.get(t);
            if (null == i) return !1;
            l.set(t, {
                ...i,
                patchNotesSent: [
                    ...(i.patchNotesSent ?? A).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (l.delete(t), o.delete(t), d.delete(t), c.delete(t), u.delete(t), _.delete(t), E.delete(t));
        },
    });
n.d(t, {}, { A: I });

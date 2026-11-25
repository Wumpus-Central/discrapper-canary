var l = n(855986),
    i = n(52133),
    s = n(73153),
    r = n(260498),
    u = n(612210);
let a = new Map(),
    o = new Set(),
    p = new Map(),
    c = new Map(),
    d = new Map(),
    h = new Map(),
    f = new Set(),
    g = [];
class _ extends l.Ay.Store {
    initialize() {
        this.waitFor(r.Ay);
    }
    getPublishStatus(e) {
        return a.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return o.has(e);
    }
    getPublishApprovalUrl(e) {
        return p.get(e) ?? null;
    }
    getPublishProgress(e) {
        return c.get(e) ?? null;
    }
    getSafetyRecheck(e) {
        return h.get(e) ?? null;
    }
    getPublishFailure(e) {
        return d.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return f.has(e);
    }
}
let v = [],
    C = [],
    y = new _(s.h, {
        LOGOUT: function () {
            if (
                0 === a.size &&
                0 === o.size &&
                0 === p.size &&
                0 === c.size &&
                0 === d.size &&
                0 === h.size &&
                0 === f.size
            )
                return !1;
            (a.clear(), o.clear(), p.clear(), c.clear(), d.clear(), h.clear(), f.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of a.keys()) null == r.Ay.getProject(e) && (a.delete(e), (t = !0));
            for (let e of p.keys()) null == r.Ay.getProject(e) && (p.delete(e), (t = !0));
            for (let e of c.keys()) null == r.Ay.getProject(e) && (c.delete(e), (t = !0));
            for (let e of d.keys()) null == r.Ay.getProject(e) && (d.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: n,
                    publishState: l,
                    surface: s,
                    previewAppChannels: r,
                    newAppChannels: o = C,
                    previewDevicePermissions: h = v,
                    publishedRevision: f = null,
                    publishedAt: _ = null,
                    publishing: y = !1,
                    patchNotesSent: E,
                    newUiUnpublished: P = !1,
                    safetyHold: S = !1,
                    views: R = null,
                } = e,
                w = !y && p.delete(n),
                A = !y && c.delete(n),
                O = a.get(n),
                m = (y || (null != O && O.publishedRevision !== f)) && d.delete(n),
                T =
                    null == E ||
                    ((t = O?.patchNotesSent ?? g),
                    t.length === E.length &&
                        t.every(
                            (e, t) => e.publishedRevision === E[t].publishedRevision && e.messageId === E[t].messageId,
                        ))
                        ? (O?.patchNotesSent ?? g)
                        : E;
            if (
                !w &&
                !A &&
                !m &&
                O?.publishState === l &&
                O.surface === s &&
                (0, i.v)(O.previewAppChannels, r) &&
                (0, i.v)(O.newAppChannels ?? C, o) &&
                (0, i.v)(O.previewDevicePermissions ?? v, h) &&
                O.publishedRevision === f &&
                O.publishedAt === _ &&
                O.publishing === y &&
                O.patchNotesSent === T &&
                O.newUiUnpublished === P &&
                (O.safetyHold ?? !1) === S &&
                (0, u.t)(O.views ?? null, R)
            )
                return !1;
            a.set(n, {
                publishState: l,
                surface: s,
                previewAppChannels: r,
                newAppChannels: o,
                previewDevicePermissions: h,
                publishedRevision: f,
                publishedAt: _,
                publishing: y,
                patchNotesSent: T,
                newUiUnpublished: P,
                safetyHold: S,
                views: R,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), d.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                n = o.delete(t),
                l = a.get(t)?.publishing !== !0 && c.delete(t);
            return n || l;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: n } = e;
            if (d.get(t) === n) return !1;
            d.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: n } = e;
            return null == n ? p.delete(t) : p.get(t) !== n && void p.set(t, n);
        },
        CONJURE_PROJECT_SAFETY_RECHECK: function (e) {
            let { projectId: t, recheck: n } = e;
            if (null == n) return h.delete(t);
            h.set(t, n);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: n } = e;
            if (c.get(t)?.stage === n.stage) return !1;
            c.set(t, n);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: n } = e;
            if (f.has(t) === n) return !1;
            n ? f.add(t) : f.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: n } = e,
                l = a.get(t);
            if (null == l) return !1;
            a.set(t, {
                ...l,
                patchNotesSent: [
                    ...(l.patchNotesSent ?? g).filter((e) => e.publishedRevision !== n.publishedRevision),
                    n,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (a.delete(t), o.delete(t), p.delete(t), c.delete(t), d.delete(t), h.delete(t), f.delete(t));
        },
    });
n.d(t, {}, { A: y });

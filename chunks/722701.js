var n = l(855986),
    i = l(52133),
    s = l(73153),
    r = l(260498);
let u = new Map(),
    o = new Set(),
    a = new Map(),
    d = new Map(),
    c = new Map(),
    E = new Map(),
    P = new Set(),
    _ = [];
class h extends n.Ay.Store {
    initialize() {
        this.waitFor(r.Ay);
    }
    getPublishStatus(e) {
        return u.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return o.has(e);
    }
    getPublishApprovalUrl(e) {
        return a.get(e) ?? null;
    }
    getPublishProgress(e) {
        return d.get(e) ?? null;
    }
    getSafetyRecheck(e) {
        return E.get(e) ?? null;
    }
    getPublishFailure(e) {
        return c.get(e) ?? null;
    }
    isAppChannelPending(e) {
        return P.has(e);
    }
}
let p = [],
    C = new h(s.h, {
        LOGOUT: function () {
            if (
                0 === u.size &&
                0 === o.size &&
                0 === a.size &&
                0 === d.size &&
                0 === c.size &&
                0 === E.size &&
                0 === P.size
            )
                return !1;
            (u.clear(), o.clear(), a.clear(), d.clear(), c.clear(), E.clear(), P.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of u.keys()) null == r.Ay.getProject(e) && (u.delete(e), (t = !0));
            for (let e of a.keys()) null == r.Ay.getProject(e) && (a.delete(e), (t = !0));
            for (let e of d.keys()) null == r.Ay.getProject(e) && (d.delete(e), (t = !0));
            for (let e of c.keys()) null == r.Ay.getProject(e) && (c.delete(e), (t = !0));
            if (!t) return !1;
        },
        CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
            var t;
            let {
                    projectId: l,
                    publishState: n,
                    surface: s,
                    previewAppChannels: r,
                    previewDevicePermissions: o = p,
                    publishedRevision: E = null,
                    publishedAt: P = null,
                    publishing: h = !1,
                    patchNotesSent: C,
                    newUiUnpublished: R = !1,
                    safetyHold: S = !1,
                } = e,
                f = !h && a.delete(l),
                g = !h && d.delete(l),
                O = u.get(l),
                T = (h || (null != O && O.publishedRevision !== E)) && c.delete(l),
                U =
                    null == C ||
                    ((t = O?.patchNotesSent ?? _),
                    t.length === C.length &&
                        t.every(
                            (e, t) => e.publishedRevision === C[t].publishedRevision && e.messageId === C[t].messageId,
                        ))
                        ? (O?.patchNotesSent ?? _)
                        : C;
            if (
                !f &&
                !g &&
                !T &&
                O?.publishState === n &&
                O.surface === s &&
                (0, i.v)(O.previewAppChannels, r) &&
                (0, i.v)(O.previewDevicePermissions ?? p, o) &&
                O.publishedRevision === E &&
                O.publishedAt === P &&
                O.publishing === h &&
                O.patchNotesSent === U &&
                O.newUiUnpublished === R &&
                (O.safetyHold ?? !1) === S
            )
                return !1;
            u.set(l, {
                publishState: n,
                surface: s,
                previewAppChannels: r,
                previewDevicePermissions: o,
                publishedRevision: E,
                publishedAt: P,
                publishing: h,
                patchNotesSent: U,
                newUiUnpublished: R,
                safetyHold: S,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (o.add(t), c.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                l = o.delete(t),
                n = u.get(t)?.publishing !== !0 && d.delete(t);
            return l || n;
        },
        CONJURE_PROJECT_PUBLISH_FAILED: function (e) {
            let { projectId: t, message: l } = e;
            if (c.get(t) === l) return !1;
            c.set(t, l);
        },
        CONJURE_PROJECT_PUBLISH_APPROVAL: function (e) {
            let { projectId: t, approvalUrl: l } = e;
            return null == l ? a.delete(t) : a.get(t) !== l && void a.set(t, l);
        },
        CONJURE_PROJECT_SAFETY_RECHECK: function (e) {
            let { projectId: t, recheck: l } = e;
            if (null == l) return E.delete(t);
            E.set(t, l);
        },
        CONJURE_PROJECT_PUBLISH_PROGRESS: function (e) {
            let { projectId: t, progress: l } = e;
            if (d.get(t)?.stage === l.stage) return !1;
            d.set(t, l);
        },
        CONJURE_PROJECT_APP_CHANNEL_PENDING: function (e) {
            let { projectId: t, pending: l } = e;
            if (P.has(t) === l) return !1;
            l ? P.add(t) : P.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: l } = e,
                n = u.get(t);
            if (null == n) return !1;
            u.set(t, {
                ...n,
                patchNotesSent: [
                    ...(n.patchNotesSent ?? _).filter((e) => e.publishedRevision !== l.publishedRevision),
                    l,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (u.delete(t), o.delete(t), a.delete(t), d.delete(t), c.delete(t), E.delete(t), P.delete(t));
        },
    });
l.d(t, {}, { A: C });

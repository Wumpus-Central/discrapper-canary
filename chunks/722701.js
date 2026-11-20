var n = l(855986),
    i = l(52133),
    s = l(73153),
    r = l(260498);
let u = new Map(),
    a = new Set(),
    o = new Map(),
    d = new Map(),
    c = new Map(),
    E = new Map(),
    p = new Set(),
    h = [];
class P extends n.Ay.Store {
    initialize() {
        this.waitFor(r.Ay);
    }
    getPublishStatus(e) {
        return u.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return a.has(e);
    }
    getPublishApprovalUrl(e) {
        return o.get(e) ?? null;
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
        return p.has(e);
    }
}
let _ = [],
    C = [],
    R = new P(s.h, {
        LOGOUT: function () {
            if (
                0 === u.size &&
                0 === a.size &&
                0 === o.size &&
                0 === d.size &&
                0 === c.size &&
                0 === E.size &&
                0 === p.size
            )
                return !1;
            (u.clear(), a.clear(), o.clear(), d.clear(), c.clear(), E.clear(), p.clear());
        },
        CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
            let t = !1;
            for (let e of u.keys()) null == r.Ay.getProject(e) && (u.delete(e), (t = !0));
            for (let e of o.keys()) null == r.Ay.getProject(e) && (o.delete(e), (t = !0));
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
                    newAppChannels: a = C,
                    previewDevicePermissions: E = _,
                    publishedRevision: p = null,
                    publishedAt: P = null,
                    publishing: R = !1,
                    patchNotesSent: S,
                    newUiUnpublished: f = !1,
                    safetyHold: g = !1,
                } = e,
                O = !R && o.delete(l),
                T = !R && d.delete(l),
                U = u.get(l),
                N = (R || (null != U && U.publishedRevision !== p)) && c.delete(l),
                A =
                    null == S ||
                    ((t = U?.patchNotesSent ?? h),
                    t.length === S.length &&
                        t.every(
                            (e, t) => e.publishedRevision === S[t].publishedRevision && e.messageId === S[t].messageId,
                        ))
                        ? (U?.patchNotesSent ?? h)
                        : S;
            if (
                !O &&
                !T &&
                !N &&
                U?.publishState === n &&
                U.surface === s &&
                (0, i.v)(U.previewAppChannels, r) &&
                (0, i.v)(U.newAppChannels ?? C, a) &&
                (0, i.v)(U.previewDevicePermissions ?? _, E) &&
                U.publishedRevision === p &&
                U.publishedAt === P &&
                U.publishing === R &&
                U.patchNotesSent === A &&
                U.newUiUnpublished === f &&
                (U.safetyHold ?? !1) === g
            )
                return !1;
            u.set(l, {
                publishState: n,
                surface: s,
                previewAppChannels: r,
                newAppChannels: a,
                previewDevicePermissions: E,
                publishedRevision: p,
                publishedAt: P,
                publishing: R,
                patchNotesSent: A,
                newUiUnpublished: f,
                safetyHold: g,
            });
        },
        CONJURE_PROJECT_PUBLISH_START: function (e) {
            let { projectId: t } = e;
            (a.add(t), c.delete(t));
        },
        CONJURE_PROJECT_PUBLISH_SETTLE: function (e) {
            let { projectId: t } = e,
                l = a.delete(t),
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
            return null == l ? o.delete(t) : o.get(t) !== l && void o.set(t, l);
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
            if (p.has(t) === l) return !1;
            l ? p.add(t) : p.delete(t);
        },
        CONJURE_PROJECT_PATCH_NOTES_SENT: function (e) {
            let { projectId: t, sent: l } = e,
                n = u.get(t);
            if (null == n) return !1;
            u.set(t, {
                ...n,
                patchNotesSent: [
                    ...(n.patchNotesSent ?? h).filter((e) => e.publishedRevision !== l.publishedRevision),
                    l,
                ],
            });
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (u.delete(t), a.delete(t), o.delete(t), d.delete(t), c.delete(t), E.delete(t), p.delete(t));
        },
    });
l.d(t, {}, { A: R });

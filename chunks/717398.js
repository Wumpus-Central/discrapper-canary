"use strict";
n.d(t, { A: () => g });
var i = n(636537),
    r = n(765178),
    a = n(228366),
    s = n(315982),
    l = n(700241),
    o = n(381689),
    d = n(30076),
    c = n(287809),
    u = n(395422),
    _ = n(427262),
    E = n(157559),
    A = n(442433),
    h = n(652215),
    I = n(235627),
    f = n(375708);
function p(e) {
    (0, A.Z_)(), E.A.show(e);
}
function T(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                p({
                    title: f.intl.string(f.t["3D5eox"]),
                    body: f.intl.string(f.t.TuJriJ),
                    confirmText: f.intl.string(f.t.DppXIx),
                });
            break;
        case 403:
            if (a === h.t02.EMAIL_VERIFICATION_REQUIRED) {
                p({
                    title: f.intl.string(f.t.Gqf33E),
                    body: f.intl.string(f.t.GHOBdx),
                    confirmText: f.intl.string(f.t.HbTSE6),
                    onConfirm: () => {
                        s.R();
                    },
                });
                break;
            }
        default:
            if (a === h.t02.USER_QUARANTINED) (0, A.Z_)(), (0, l.default)();
            else if ((0, d.O)(i, a)) break;
            else if (a === h.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, u.vU)(a || 0, n) : f.intl.string(f.t.paDJBM);
                p({ title: f.intl.string(f.t["6moJ8s"]), body: e, confirmText: f.intl.string(f.t.BddRzS) });
            }
    }
    throw e;
}
let m = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: r, note: a, errorUxConfig: s = 0 } = e,
                [l, o] = t.split("#");
            return i.Bo.post({
                url: h.Rsh.USER_RELATIONSHIPS(),
                body: { username: l, discriminator: parseInt(o), note: a, ...r },
                context: n,
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }).catch((e) => {
                T(e, s, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: r,
                    type: a,
                    fromFriendSuggestion: s,
                    confirmStrangerRequest: l,
                    captchaPayload: o,
                } = e,
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = c.default.getUser(n);
            return i.Bo.put({
                url: h.Rsh.USER_RELATIONSHIP(n),
                body: { type: a, from_friend_suggestion: s, confirm_stranger_request: l, ...o },
                context: r,
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            })
                .then(() => {
                    t?.();
                })
                .catch((e) => (T(e, d, _.Ay.getUserTag(u)), Promise.reject(e)));
        },
        acceptFriendRequest: (e) =>
            m.addRelationship(e, function () {
                r.O.announce(f.intl.string(f.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            m.removeRelationship(e, t, function () {
                r.O.announce(f.intl.string(f.t.pLUaxR));
            }),
        removeFriend(e, t) {
            m.removeRelationship(e, t, function () {
                r.O.announce(f.intl.string(f.t.vGSLa2));
            });
        },
        blockUser: (e, t) =>
            m.addRelationship({ userId: e, context: t, type: h.eA$.BLOCKED }, function () {
                r.O.announce(f.intl.string(f.t.mU0Vrp));
            }),
        unblockUser: (e, t) =>
            m.removeRelationship(e, t, function () {
                r.O.announce(f.intl.string(f.t["9t1au7"]));
            }),
        removeRelationship: (e, t, n) =>
            i.Bo.del({ url: h.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: (0, i.fT)() })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    r.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            i.Bo.patch({ url: h.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: (0, i.fT)() }),
        fetchRelationships() {
            i.Bo.get({ url: h.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, n(507019).A)(e);
        },
        clearPendingRelationships: () =>
            i.Bo.del({
                url: h.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: h.eA$.PENDING_INCOMING },
                rejectWithError: (0, i.fT)(),
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            i.Bo.del({
                url: h.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: h.eA$.PENDING_INCOMING },
                body: { filters: [I.w.SPAM, I.w.IGNORED] },
                rejectWithError: (0, i.fT)(),
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            i.Bo.put({ url: h.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, i.fT)() })
                .then(() => {
                    o.A.showIgnoreSuccessToast(e, n),
                        r.O.announce(f.intl.string(f.t.Us93Ca)),
                        a.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    o.A.showFailedToast(), r.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            i.Bo.del({ url: h.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, i.fT)() })
                .then(() => {
                    o.A.showUnignoreSuccessToast(e, n), r.O.announce(f.intl.string(f.t.QlH5w6));
                })
                .catch(() => {
                    o.A.showFailedToast(), r.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
    },
    g = m;

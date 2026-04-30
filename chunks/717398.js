"use strict";
n.d(t, { A: () => T });
var i = n(636537),
    r = n(765178),
    s = n(228366),
    a = n(315982),
    o = n(700241),
    l = n(381689),
    u = n(30076),
    c = n(287809),
    d = n(395422),
    _ = n(427262),
    f = n(157559),
    h = n(442433),
    p = n(652215),
    E = n(235627),
    m = n(375708);
function g(e) {
    (0, h.Z_)(), f.A.show(e);
}
function A(e, t, n) {
    let { status: i, body: r } = e,
        s = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                g({
                    title: m.intl.string(m.t["3D5eox"]),
                    body: m.intl.string(m.t.TuJriJ),
                    confirmText: m.intl.string(m.t.DppXIx),
                });
            break;
        case 403:
            if (s === p.t02.EMAIL_VERIFICATION_REQUIRED) {
                g({
                    title: m.intl.string(m.t.Gqf33E),
                    body: m.intl.string(m.t.GHOBdx),
                    confirmText: m.intl.string(m.t.HbTSE6),
                    onConfirm: () => {
                        a.R();
                    },
                });
                break;
            }
        default:
            if (s === p.t02.USER_QUARANTINED) (0, h.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, s)) break;
            else if (s === p.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, d.vU)(s || 0, n) : m.intl.string(m.t.paDJBM);
                g({ title: m.intl.string(m.t["6moJ8s"]), body: e, confirmText: m.intl.string(m.t.BddRzS) });
            }
    }
    throw e;
}
let I = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: r, note: s, errorUxConfig: a = 0 } = e,
                [o, l] = t.split("#");
            return i.Bo.post({
                url: p.Rsh.USER_RELATIONSHIPS(),
                body: { username: o, discriminator: parseInt(l), note: s, ...r },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                A(e, a, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: r,
                    type: s,
                    fromFriendSuggestion: a,
                    confirmStrangerRequest: o,
                    captchaPayload: l,
                } = e,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                d = c.default.getUser(n);
            return i.Bo.put({
                url: p.Rsh.USER_RELATIONSHIP(n),
                body: { type: s, from_friend_suggestion: a, confirm_stranger_request: o, ...l },
                context: r,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    t?.();
                })
                .catch((e) => (A(e, u, _.Ay.getUserTag(d)), Promise.reject(e)));
        },
        acceptFriendRequest: (e) =>
            I.addRelationship(e, function () {
                r.O.announce(m.intl.string(m.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            I.removeRelationship(e, t, function () {
                r.O.announce(m.intl.string(m.t.pLUaxR));
            }),
        removeFriend(e, t) {
            I.removeRelationship(e, t, function () {
                r.O.announce(m.intl.string(m.t.vGSLa2));
            });
        },
        blockUser: (e, t) =>
            I.addRelationship({ userId: e, context: t, type: p.eA$.BLOCKED }, function () {
                r.O.announce(m.intl.string(m.t.mU0Vrp));
            }),
        unblockUser: (e, t) =>
            I.removeRelationship(e, t, function () {
                r.O.announce(m.intl.string(m.t["9t1au7"]));
            }),
        removeRelationship: (e, t, n) =>
            i.Bo.del({ url: p.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    r.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            i.Bo.patch({ url: p.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: !1 }),
        fetchRelationships() {
            i.Bo.get({ url: p.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, n(507019).A)(e);
        },
        clearPendingRelationships: () =>
            i.Bo.del({
                url: p.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: p.eA$.PENDING_INCOMING },
                rejectWithError: !1,
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            i.Bo.del({
                url: p.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: p.eA$.PENDING_INCOMING },
                body: { filters: [E.w.SPAM, E.w.IGNORED] },
                rejectWithError: !1,
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            i.Bo.put({ url: p.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    l.A.showIgnoreSuccessToast(e, n),
                        r.O.announce(m.intl.string(m.t.Us93Ca)),
                        s.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    l.A.showFailedToast(), r.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            i.Bo.del({ url: p.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    l.A.showUnignoreSuccessToast(e, n), r.O.announce(m.intl.string(m.t.QlH5w6));
                })
                .catch(() => {
                    l.A.showFailedToast(), r.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
    },
    T = I;

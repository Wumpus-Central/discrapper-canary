"use strict";
n.d(t, { A: () => S });
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(315982),
    o = n(395484),
    l = n(700241),
    u = n(662502),
    c = n(30076),
    d = n(287809),
    _ = n(395422),
    f = n(427262),
    p = n(157559),
    h = n(442433),
    m = n(652215),
    g = n(235627),
    E = n(985018);
function A(e) {
    (0, h.Z_)(), p.A.show(e);
}
function I() {
    (0, h.Z_)(), (0, l.default)();
}
function T(e, t, n) {
    let { status: r, body: i } = e,
        a = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                A({
                    title: E.intl.string(E.t["3D5eox"]),
                    body: E.intl.string(E.t.TuJriJ),
                    confirmText: E.intl.string(E.t.DppXIx),
                });
            break;
        case 403:
            if (a === m.t02.EMAIL_VERIFICATION_REQUIRED) {
                A({
                    title: E.intl.string(E.t.Gqf33E),
                    body: E.intl.string(E.t.GHOBdx),
                    confirmText: E.intl.string(E.t.HbTSE6),
                    onConfirm: () => {
                        s.R();
                    },
                });
                break;
            }
        default:
            if (a === m.t02.USER_QUARANTINED) I();
            else if ((0, c.O)(r, a)) break;
            else if (a === m.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, _.vU)(a || 0, n) : E.intl.string(E.t.paDJBM);
                A({ title: E.intl.string(E.t["6moJ8s"]), body: e, confirmText: E.intl.string(E.t.BddRzS) });
            }
    }
    throw e;
}
let y = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: i, errorUxConfig: a = 0 } = e,
                [s, o] = t.split("#");
            return r.Bo.post({
                url: m.Rsh.USER_RELATIONSHIPS(),
                body: { username: s, discriminator: parseInt(o), ...i },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                T(e, a, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: i,
                    type: a,
                    fromFriendSuggestion: s,
                    confirmStrangerRequest: o,
                    captchaPayload: l,
                } = e,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                c = d.default.getUser(n);
            return r.Bo.put({
                url: m.Rsh.USER_RELATIONSHIP(n),
                body: { type: a, from_friend_suggestion: s, confirm_stranger_request: o, ...l },
                context: i,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    t?.();
                })
                .catch((e) => (T(e, u, f.Ay.getUserTag(c)), Promise.reject(e)));
        },
        acceptFriendRequest(e) {
            function t() {
                i.OR.announce(E.intl.string(E.t["3goNa5"]));
            }
            return y.addRelationship(e, t);
        },
        cancelFriendRequest(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.pLUaxR));
            }
            return y.removeRelationship(e, t, n);
        },
        removeFriend(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.vGSLa2));
            }
            y.removeRelationship(e, t, n);
        },
        blockUser(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.mU0Vrp));
            }
            return y.addRelationship({ userId: e, context: t, type: m.eA$.BLOCKED }, n);
        },
        unblockUser(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t["9t1au7"]));
            }
            return y.removeRelationship(e, t, n);
        },
        removeRelationship: (e, t, n) =>
            r.Bo.del({ url: m.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            r.Bo.patch({ url: m.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: !1 }),
        fetchRelationships() {
            r.Bo.get({ url: m.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, o.A)(e);
        },
        clearPendingRelationships: () =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: m.eA$.PENDING_INCOMING },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: m.eA$.PENDING_INCOMING },
                body: { filters: [g.w.SPAM, g.w.IGNORED] },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            r.Bo.put({ url: m.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    u.A.showIgnoreSuccessToast(e, n),
                        i.OR.announce(E.intl.string(E.t.Us93Ca)),
                        a.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    u.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            r.Bo.del({ url: m.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    u.A.showUnignoreSuccessToast(e, n), i.OR.announce(E.intl.string(E.t.QlH5w6));
                })
                .catch(() => {
                    u.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
    },
    S = y;

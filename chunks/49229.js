"use strict";
n.d(t, { A: () => y });
var r = n(562465),
    i = n(582754),
    s = n(73153),
    a = n(315982),
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
    E = n(235627),
    g = n(985018);
function A(e) {
    (0, h.Z_)(), p.A.show(e);
}
function I() {
    (0, h.Z_)(), (0, l.default)();
}
function T(e, t, n) {
    let { status: r, body: i } = e,
        s = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                A({
                    title: g.intl.string(g.t["3D5eox"]),
                    body: g.intl.string(g.t.TuJriJ),
                    confirmText: g.intl.string(g.t.DppXIx),
                });
            break;
        case 403:
            if (s === m.t02.EMAIL_VERIFICATION_REQUIRED) {
                A({
                    title: g.intl.string(g.t.Gqf33E),
                    body: g.intl.string(g.t.GHOBdx),
                    confirmText: g.intl.string(g.t.HbTSE6),
                    onConfirm: () => {
                        a.R();
                    },
                });
                break;
            }
        default:
            if (s === m.t02.USER_QUARANTINED) I();
            else if ((0, c.O)(r, s)) break;
            else if (s === m.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, _.vU)(s || 0, n) : g.intl.string(g.t.paDJBM);
                A({ title: g.intl.string(g.t["6moJ8s"]), body: e, confirmText: g.intl.string(g.t.BddRzS) });
            }
    }
    throw e;
}
let S = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: i, errorUxConfig: s = 0 } = e,
                [a, o] = t.split("#");
            return r.Bo.post({
                url: m.Rsh.USER_RELATIONSHIPS(),
                body: { username: a, discriminator: parseInt(o), ...i },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                T(e, s, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: i,
                    type: s,
                    fromFriendSuggestion: a,
                    confirmStrangerRequest: o,
                    captchaPayload: l,
                } = e,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                c = d.default.getUser(n);
            return r.Bo.put({
                url: m.Rsh.USER_RELATIONSHIP(n),
                body: { type: s, from_friend_suggestion: a, confirm_stranger_request: o, ...l },
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
                i.OR.announce(g.intl.string(g.t["3goNa5"]));
            }
            return S.addRelationship(e, t);
        },
        cancelFriendRequest(e, t) {
            function n() {
                i.OR.announce(g.intl.string(g.t.pLUaxR));
            }
            return S.removeRelationship(e, t, n);
        },
        removeFriend(e, t) {
            function n() {
                i.OR.announce(g.intl.string(g.t.vGSLa2));
            }
            S.removeRelationship(e, t, n);
        },
        blockUser(e, t) {
            function n() {
                i.OR.announce(g.intl.string(g.t.mU0Vrp));
            }
            return S.addRelationship({ userId: e, context: t, type: m.eA$.BLOCKED }, n);
        },
        unblockUser(e, t) {
            function n() {
                i.OR.announce(g.intl.string(g.t["9t1au7"]));
            }
            return S.removeRelationship(e, t, n);
        },
        removeRelationship: (e, t, n) =>
            r.Bo.del({ url: m.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    i.OR.announce(g.intl.string(g.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            r.Bo.patch({ url: m.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: !1 }),
        fetchRelationships() {
            r.Bo.get({ url: m.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
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
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    i.OR.announce(g.intl.string(g.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: m.eA$.PENDING_INCOMING },
                body: { filters: [E.w.SPAM, E.w.IGNORED] },
                rejectWithError: !1,
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    i.OR.announce(g.intl.string(g.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            r.Bo.put({ url: m.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    u.A.showIgnoreSuccessToast(e, n),
                        i.OR.announce(g.intl.string(g.t.Us93Ca)),
                        s.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    u.A.showFailedToast(), i.OR.announce(g.intl.string(g.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            r.Bo.del({ url: m.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    u.A.showUnignoreSuccessToast(e, n), i.OR.announce(g.intl.string(g.t.QlH5w6));
                })
                .catch(() => {
                    u.A.showFailedToast(), i.OR.announce(g.intl.string(g.t.n6Jo3E));
                }),
    },
    y = S;

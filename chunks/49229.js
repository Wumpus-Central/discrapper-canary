n.d(t, { A: () => m });
var i = n(636537),
    r = n(765178),
    a = n(228366),
    l = n(315982),
    s = n(395484),
    o = n(700241),
    d = n(381689),
    u = n(30076),
    c = n(287809),
    h = n(395422),
    E = n(427262),
    _ = n(157559),
    p = n(442433),
    A = n(652215),
    f = n(235627),
    g = n(985018);
function I(e) {
    (0, p.Z_)(), _.A.show(e);
}
function S(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                I({
                    title: g.intl.string(g.t["3D5eox"]),
                    body: g.intl.string(g.t.TuJriJ),
                    confirmText: g.intl.string(g.t.DppXIx),
                });
            break;
        case 403:
            if (a === A.t02.EMAIL_VERIFICATION_REQUIRED) {
                I({
                    title: g.intl.string(g.t.Gqf33E),
                    body: g.intl.string(g.t.GHOBdx),
                    confirmText: g.intl.string(g.t.HbTSE6),
                    onConfirm: () => {
                        l.R();
                    },
                });
                break;
            }
        default:
            if (a === A.t02.USER_QUARANTINED) (0, p.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, a)) break;
            else if (a === A.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, h.vU)(a || 0, n) : g.intl.string(g.t.paDJBM);
                I({ title: g.intl.string(g.t["6moJ8s"]), body: e, confirmText: g.intl.string(g.t.BddRzS) });
            }
    }
    throw e;
}
let T = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: r, note: a, errorUxConfig: l = 0 } = e,
                [s, o] = t.split("#");
            return i.Bo.post({
                url: A.Rsh.USER_RELATIONSHIPS(),
                body: { username: s, discriminator: parseInt(o), note: a, ...r },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                S(e, l, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: r,
                    type: a,
                    fromFriendSuggestion: l,
                    confirmStrangerRequest: s,
                    captchaPayload: o,
                } = e,
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = c.default.getUser(n);
            return i.Bo.put({
                url: A.Rsh.USER_RELATIONSHIP(n),
                body: { type: a, from_friend_suggestion: l, confirm_stranger_request: s, ...o },
                context: r,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    t?.();
                })
                .catch((e) => (S(e, d, E.Ay.getUserTag(u)), Promise.reject(e)));
        },
        acceptFriendRequest: (e) =>
            T.addRelationship(e, function () {
                r.O.announce(g.intl.string(g.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            T.removeRelationship(e, t, function () {
                r.O.announce(g.intl.string(g.t.pLUaxR));
            }),
        removeFriend(e, t) {
            T.removeRelationship(e, t, function () {
                r.O.announce(g.intl.string(g.t.vGSLa2));
            });
        },
        blockUser: (e, t) =>
            T.addRelationship({ userId: e, context: t, type: A.eA$.BLOCKED }, function () {
                r.O.announce(g.intl.string(g.t.mU0Vrp));
            }),
        unblockUser: (e, t) =>
            T.removeRelationship(e, t, function () {
                r.O.announce(g.intl.string(g.t["9t1au7"]));
            }),
        removeRelationship: (e, t, n) =>
            i.Bo.del({ url: A.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    r.O.announce(g.intl.string(g.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            i.Bo.patch({ url: A.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: !1 }),
        fetchRelationships() {
            i.Bo.get({ url: A.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, s.A)(e);
        },
        clearPendingRelationships: () =>
            i.Bo.del({
                url: A.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: A.eA$.PENDING_INCOMING },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(g.intl.string(g.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            i.Bo.del({
                url: A.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: A.eA$.PENDING_INCOMING },
                body: { filters: [f.w.SPAM, f.w.IGNORED] },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    r.O.announce(g.intl.string(g.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            i.Bo.put({ url: A.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    d.A.showIgnoreSuccessToast(e, n),
                        r.O.announce(g.intl.string(g.t.Us93Ca)),
                        a.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    d.A.showFailedToast(), r.O.announce(g.intl.string(g.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            i.Bo.del({ url: A.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    d.A.showUnignoreSuccessToast(e, n), r.O.announce(g.intl.string(g.t.QlH5w6));
                })
                .catch(() => {
                    d.A.showFailedToast(), r.O.announce(g.intl.string(g.t.n6Jo3E));
                }),
    },
    m = T;

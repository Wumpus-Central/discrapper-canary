n.d(t, { A: () => m });
var i = n(636537),
    l = n(765178),
    a = n(228366),
    r = n(315982),
    s = n(395484),
    o = n(700241),
    d = n(381689),
    u = n(30076),
    c = n(287809),
    h = n(395422),
    E = n(427262),
    A = n(157559),
    _ = n(442433),
    p = n(652215),
    g = n(235627),
    f = n(985018);
function I(e) {
    (0, _.Z_)(), A.A.show(e);
}
function S(e, t, n) {
    let { status: i, body: l } = e,
        a = l && l.code;
    switch (i) {
        case 429:
            0 === t &&
                I({
                    title: f.intl.string(f.t["3D5eox"]),
                    body: f.intl.string(f.t.TuJriJ),
                    confirmText: f.intl.string(f.t.DppXIx),
                });
            break;
        case 403:
            if (a === p.t02.EMAIL_VERIFICATION_REQUIRED) {
                I({
                    title: f.intl.string(f.t.Gqf33E),
                    body: f.intl.string(f.t.GHOBdx),
                    confirmText: f.intl.string(f.t.HbTSE6),
                    onConfirm: () => {
                        r.R();
                    },
                });
                break;
            }
        default:
            if (a === p.t02.USER_QUARANTINED) (0, _.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, a)) break;
            else if (a === p.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, h.vU)(a || 0, n) : f.intl.string(f.t.paDJBM);
                I({ title: f.intl.string(f.t["6moJ8s"]), body: e, confirmText: f.intl.string(f.t.BddRzS) });
            }
    }
    throw e;
}
let T = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: l, note: a, errorUxConfig: r = 0 } = e,
                [s, o] = t.split("#");
            return i.Bo.post({
                url: p.Rsh.USER_RELATIONSHIPS(),
                body: { username: s, discriminator: parseInt(o), note: a, ...l },
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                S(e, r, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: l,
                    type: a,
                    fromFriendSuggestion: r,
                    confirmStrangerRequest: s,
                    captchaPayload: o,
                } = e,
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = c.default.getUser(n);
            return i.Bo.put({
                url: p.Rsh.USER_RELATIONSHIP(n),
                body: { type: a, from_friend_suggestion: r, confirm_stranger_request: s, ...o },
                context: l,
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
                l.O.announce(f.intl.string(f.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            T.removeRelationship(e, t, function () {
                l.O.announce(f.intl.string(f.t.pLUaxR));
            }),
        removeFriend(e, t) {
            T.removeRelationship(e, t, function () {
                l.O.announce(f.intl.string(f.t.vGSLa2));
            });
        },
        blockUser: (e, t) =>
            T.addRelationship({ userId: e, context: t, type: p.eA$.BLOCKED }, function () {
                l.O.announce(f.intl.string(f.t.mU0Vrp));
            }),
        unblockUser: (e, t) =>
            T.removeRelationship(e, t, function () {
                l.O.announce(f.intl.string(f.t["9t1au7"]));
            }),
        removeRelationship: (e, t, n) =>
            i.Bo.del({ url: p.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: !1 })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    l.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            i.Bo.patch({ url: p.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: !1 }),
        fetchRelationships() {
            i.Bo.get({ url: p.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, s.A)(e);
        },
        clearPendingRelationships: () =>
            i.Bo.del({
                url: p.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: p.eA$.PENDING_INCOMING },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    l.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            i.Bo.del({
                url: p.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: p.eA$.PENDING_INCOMING },
                body: { filters: [g.w.SPAM, g.w.IGNORED] },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    l.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            i.Bo.put({ url: p.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    d.A.showIgnoreSuccessToast(e, n),
                        l.O.announce(f.intl.string(f.t.Us93Ca)),
                        a.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() });
                })
                .catch(() => {
                    d.A.showFailedToast(), l.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            i.Bo.del({ url: p.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: !1 })
                .then(() => {
                    d.A.showUnignoreSuccessToast(e, n), l.O.announce(f.intl.string(f.t.QlH5w6));
                })
                .catch(() => {
                    d.A.showFailedToast(), l.O.announce(f.intl.string(f.t.n6Jo3E));
                }),
    },
    m = T;

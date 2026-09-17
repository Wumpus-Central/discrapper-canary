n.d(t, { g: () => g, A: () => N });
var i,
    r = n(636537),
    a = n(765178),
    s = n(228366),
    l = n(315982),
    o = n(700241),
    d = n(381689),
    c = n(30076),
    u = n(287809),
    _ = n(395422),
    E = n(427262),
    A = n(157559),
    h = n(442433),
    I = n(652215),
    f = n(235627),
    p = n(375708);
function T(e) {
    ((0, h.Z_)(), A.A.show(e));
}
var g =
    (((i = {})[(i.SHOW_ALWAYS = 0)] = "SHOW_ALWAYS"),
    (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = "SHOW_ONLY_IF_ACTION_NEEDED"),
    i);
function m(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                T({
                    title: p.intl.string(p.t["3D5eox"]),
                    body: p.intl.string(p.t.TuJriJ),
                    confirmText: p.intl.string(p.t.DppXIx),
                });
            break;
        case 403:
            if (a === I.t02.EMAIL_VERIFICATION_REQUIRED) {
                T({
                    title: p.intl.string(p.t.Gqf33E),
                    body: p.intl.string(p.t.GHOBdx),
                    confirmText: p.intl.string(p.t.HbTSE6),
                    onConfirm: () => {
                        l.R();
                    },
                });
                break;
            }
        default:
            if (a === I.t02.USER_QUARANTINED) ((0, h.Z_)(), (0, o.default)());
            else if ((0, c.O)(i, a)) break;
            else if (a === I.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, _.vU)(a || 0, n) : p.intl.string(p.t.paDJBM);
                T({ title: p.intl.string(p.t["6moJ8s"]), body: e, confirmText: p.intl.string(p.t.BddRzS) });
            }
    }
    throw e;
}
let S = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: i, note: a, errorUxConfig: s = 0 } = e,
                [l, o] = t.split("#");
            return r.Bo.post({
                url: I.Rsh.USER_RELATIONSHIPS(),
                body: { username: l, discriminator: parseInt(o), note: a, ...i },
                context: n,
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            }).catch((e) => {
                m(e, s, t);
            });
        },
        addRelationship(e, t) {
            let {
                    userId: n,
                    context: i,
                    type: a,
                    fromFriendSuggestion: s,
                    confirmStrangerRequest: l,
                    captchaPayload: o,
                } = e,
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                c = u.default.getUser(n);
            return r.Bo.put({
                url: I.Rsh.USER_RELATIONSHIP(n),
                body: { type: a, from_friend_suggestion: s, confirm_stranger_request: l, ...o },
                context: i,
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            })
                .then(() => {
                    t?.();
                })
                .catch((e) => (m(e, d, E.Ay.getUserTag(c)), Promise.reject(e)));
        },
        acceptFriendRequest: (e) =>
            S.addRelationship(e, function () {
                a.O.announce(p.intl.string(p.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            S.removeRelationship(e, t, function () {
                a.O.announce(p.intl.string(p.t.pLUaxR));
            }),
        removeFriend(e, t) {
            S.removeRelationship(e, t, function () {
                a.O.announce(p.intl.string(p.t.vGSLa2));
            });
        },
        blockUser: (e, t) =>
            S.addRelationship({ userId: e, context: t, type: I.eA$.BLOCKED }, function () {
                a.O.announce(p.intl.string(p.t.mU0Vrp));
            }),
        unblockUser: (e, t) =>
            S.removeRelationship(e, t, function () {
                a.O.announce(p.intl.string(p.t["9t1au7"]));
            }),
        removeRelationship: (e, t, n) =>
            r.Bo.del({ url: I.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: (0, r.fT)() })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    a.O.announce(p.intl.string(p.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            r.Bo.patch({ url: I.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: (0, r.fT)() }),
        fetchRelationships() {
            r.Bo.get({ url: I.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, n(507019).A)(e);
        },
        clearPendingRelationships: () =>
            r.Bo.del({
                url: I.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: I.eA$.PENDING_INCOMING },
                rejectWithError: (0, r.fT)(),
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    a.O.announce(p.intl.string(p.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            r.Bo.del({
                url: I.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: I.eA$.PENDING_INCOMING },
                body: { filters: [f.w.SPAM, f.w.IGNORED] },
                rejectWithError: (0, r.fT)(),
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    a.O.announce(p.intl.string(p.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            r.Bo.put({ url: I.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, r.fT)() })
                .then(() => {
                    (d.A.showIgnoreSuccessToast(e, n),
                        a.O.announce(p.intl.string(p.t.Us93Ca)),
                        s.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() }));
                })
                .catch(() => {
                    (d.A.showFailedToast(), a.O.announce(p.intl.string(p.t.n6Jo3E)));
                }),
        unignoreUser: (e, t, n) =>
            r.Bo.del({ url: I.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, r.fT)() })
                .then(() => {
                    (d.A.showUnignoreSuccessToast(e, n), a.O.announce(p.intl.string(p.t.QlH5w6)));
                })
                .catch(() => {
                    (d.A.showFailedToast(), a.O.announce(p.intl.string(p.t.n6Jo3E)));
                }),
    },
    N = S;

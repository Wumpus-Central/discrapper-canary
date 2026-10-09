n.d(t, { A: () => O, g: () => S });
var i,
    r = n(636537),
    a = n(765178),
    s = n(73153),
    l = n(315982),
    o = n(700241),
    d = n(662502),
    c = n(323484),
    u = n(30076),
    _ = n(287809),
    E = n(395422),
    A = n(427262),
    h = n(157559),
    f = n(442433),
    I = n(652215),
    p = n(235627),
    T = n(835002),
    m = n(660183);
function g(e) {
    ((0, f.Z_)(), h.A.show(e));
}
var S =
    (((i = {})[(i.SHOW_ALWAYS = 0)] = "SHOW_ALWAYS"),
    (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = "SHOW_ONLY_IF_ACTION_NEEDED"),
    i);
function N(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
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
            if (a === I.t02.EMAIL_VERIFICATION_REQUIRED) {
                g({
                    title: m.intl.string(m.t.Gqf33E),
                    body: m.intl.string(m.t.GHOBdx),
                    confirmText: m.intl.string(m.t.HbTSE6),
                    onConfirm: () => {
                        l.R();
                    },
                });
                break;
            }
        default:
            if (a === I.t02.USER_QUARANTINED) ((0, f.Z_)(), (0, o.default)());
            else if ((0, u.O)(i, a)) break;
            else if (a === I.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, E.vU)(a || 0, n) : m.intl.string(m.t.paDJBM);
                g({ title: m.intl.string(m.t["6moJ8s"]), body: e, confirmText: m.intl.string(m.t.BddRzS) });
            }
    }
    throw e;
}
let C = {
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
                N(e, s, t);
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
                c = _.default.getUser(n);
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
                .catch((e) => (N(e, d, A.Ay.getUserTag(c)), Promise.reject(e)));
        },
        acceptFriendRequest: (e) =>
            C.addRelationship(e, function () {
                a.O.announce(m.intl.string(m.t["3goNa5"]));
            }),
        cancelFriendRequest: (e, t) =>
            C.removeRelationship(e, t, function () {
                a.O.announce(m.intl.string(m.t.pLUaxR));
            }),
        removeFriend(e, t) {
            C.removeRelationship(e, t, function () {
                a.O.announce(m.intl.string(m.t.vGSLa2));
            });
        },
        blockUser: (e, t, n) =>
            C.addRelationship({ userId: e, context: t, type: I.eA$.BLOCKED }, function () {
                a.O.announce((0, c.$)(T.OB.BLOCK_SUCCESS, e, n));
            }),
        unblockUser: (e, t, n) =>
            C.removeRelationship(e, t, function () {
                a.O.announce((0, c.$)(T.OB.UNBLOCK_SUCCESS, e, n));
            }),
        removeRelationship: (e, t, n) =>
            r.Bo.del({ url: I.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: (0, r.fT)() })
                .then(() => {
                    n?.();
                })
                .catch(() => {
                    a.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            r.Bo.patch({ url: I.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: (0, r.fT)() }),
        fetchRelationships() {
            r.Bo.get({ url: I.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
                () => s.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
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
                    a.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            r.Bo.del({
                url: I.Rsh.USER_RELATIONSHIPS(),
                query: { relationship_type: I.eA$.PENDING_INCOMING },
                body: { filters: [p.w.SPAM, p.w.IGNORED] },
                rejectWithError: (0, r.fT)(),
            })
                .then(() => {
                    s.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
                })
                .catch(() => {
                    a.O.announce(m.intl.string(m.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            r.Bo.put({ url: I.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, r.fT)() })
                .then(() => {
                    (d.A.showIgnoreSuccessToast(e, n),
                        a.O.announce((0, c.$)(T.OB.IGNORE_SUCCESS, e, n)),
                        s.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() }));
                })
                .catch(() => {
                    (d.A.showFailedToast(), a.O.announce(m.intl.string(m.t.n6Jo3E)));
                }),
        unignoreUser: (e, t, n) =>
            r.Bo.del({ url: I.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, r.fT)() })
                .then(() => {
                    (d.A.showUnignoreSuccessToast(e, n), a.O.announce((0, c.$)(T.OB.UNIGNORE_SUCCESS, e, n)));
                })
                .catch(() => {
                    (d.A.showFailedToast(), a.O.announce(m.intl.string(m.t.n6Jo3E)));
                }),
    },
    O = C;

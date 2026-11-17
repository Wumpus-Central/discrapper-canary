var i,
    r = n(517846),
    a = n(620632),
    s = n(765178),
    l = n(73153),
    o = n(315982),
    d = n(669700),
    c = n(700241),
    u = n(662502),
    _ = n(323484),
    E = n(30076),
    A = n(994500),
    f = n(287809),
    h = n(395422),
    I = n(427262),
    p = n(157559),
    m = n(442433),
    g = n(652215),
    T = n(235627),
    S = n(835002),
    N = n(792996);
function C(e) {
    ((0, m.Z_)(), p.A.show(e));
}
var O =
    (((i = {})[(i.SHOW_ALWAYS = 0)] = "SHOW_ALWAYS"),
    (i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = "SHOW_ONLY_IF_ACTION_NEEDED"),
    i);
function R(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                C({
                    title: N.intl.string(N.t["3D5eox"]),
                    body: N.intl.string(N.t.TuJriJ),
                    confirmText: N.intl.string(N.t.DppXIx),
                });
            break;
        case 403:
            if (a === g.t02.EMAIL_VERIFICATION_REQUIRED) {
                C({
                    title: N.intl.string(N.t.Gqf33E),
                    body: N.intl.string(N.t.GHOBdx),
                    confirmText: N.intl.string(N.t.HbTSE6),
                    onConfirm: () => {
                        o.R();
                    },
                });
                break;
            }
        default:
            if (a === g.t02.USER_QUARANTINED) ((0, m.Z_)(), (0, c.default)());
            else if ((0, E.O)(i, a)) break;
            else if (a === g.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, h.vU)(a || 0, n) : N.intl.string(N.t.paDJBM);
                C({ title: N.intl.string(N.t["6moJ8s"]), body: e, confirmText: N.intl.string(N.t.BddRzS) });
            }
    }
    throw e;
}
function L(e) {
    e === g.eA$.PENDING_INCOMING
        ? d.Ay.fireSurveyAction(r.w.FRIEND_REQUEST_ACCEPTED)
        : e === g.eA$.NONE && d.Ay.fireSurveyAction(r.w.FRIEND_REQUEST_SENT);
}
let y = {
    async sendRequest(e) {
        let { discordTag: t, context: n, captchaPayload: i, note: r, errorUxConfig: s = 0 } = e,
            [l, o] = t.split("#"),
            d = f.default.findByTag(l, o),
            c = null != d ? A.A.getRelationshipType(d.id) : g.eA$.NONE;
        try {
            let e = await a.Bo.post({
                url: g.Rsh.USER_RELATIONSHIPS(),
                body: { username: l, discriminator: parseInt(o), note: r, ...i },
                context: n,
                oldFormErrors: !0,
                rejectWithError: (0, a.fT)(),
            });
            return (L(c), e);
        } catch (e) {
            R(e, s, t);
        }
    },
    addRelationship(e, t) {
        let {
                userId: n,
                context: i,
                type: s,
                fromFriendSuggestion: l,
                confirmStrangerRequest: o,
                captchaPayload: c,
            } = e,
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            _ = f.default.getUser(n),
            E = A.A.getRelationshipType(n);
        return a.Bo.put({
            url: g.Rsh.USER_RELATIONSHIP(n),
            body: { type: s, from_friend_suggestion: l, confirm_stranger_request: o, ...c },
            context: i,
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
        })
            .then(() => {
                (s === g.eA$.BLOCKED && E !== g.eA$.BLOCKED
                    ? d.Ay.fireSurveyAction(r.w.USER_BLOCKED)
                    : (null == s || s === g.eA$.FRIEND) && L(E),
                    t?.());
            })
            .catch((e) => (R(e, u, I.Ay.getUserTag(_)), Promise.reject(e)));
    },
    acceptFriendRequest: (e) =>
        y.addRelationship(e, function () {
            s.O.announce(N.intl.string(N.t["3goNa5"]));
        }),
    cancelFriendRequest: (e, t) =>
        y.removeRelationship(e, t, function () {
            s.O.announce(N.intl.string(N.t.pLUaxR));
        }),
    removeFriend(e, t) {
        y.removeRelationship(e, t, function () {
            s.O.announce(N.intl.string(N.t.vGSLa2));
        });
    },
    blockUser: (e, t, n) =>
        y.addRelationship({ userId: e, context: t, type: g.eA$.BLOCKED }, function () {
            s.O.announce((0, _.$)(S.OB.BLOCK_SUCCESS, e, n));
        }),
    unblockUser: (e, t, n) =>
        y.removeRelationship(e, t, function () {
            s.O.announce((0, _.$)(S.OB.UNBLOCK_SUCCESS, e, n));
        }),
    removeRelationship: (e, t, n) =>
        a.Bo.del({ url: g.Rsh.USER_RELATIONSHIP(e), context: t, oldFormErrors: !0, rejectWithError: (0, a.fT)() })
            .then(() => {
                n?.();
            })
            .catch(() => {
                s.O.announce(N.intl.string(N.t.n6Jo3E));
            }),
    updateRelationship: (e, t) =>
        a.Bo.patch({ url: g.Rsh.USER_RELATIONSHIP(e), body: { nickname: t }, rejectWithError: (0, a.fT)() }),
    fetchRelationships() {
        a.Bo.get({ url: g.Rsh.USER_RELATIONSHIPS(), oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => l.h.dispatch({ type: "LOAD_RELATIONSHIPS_SUCCESS", relationships: e.body }),
            () => l.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
        );
    },
    clearPendingRelationships: () =>
        a.Bo.del({
            url: g.Rsh.USER_RELATIONSHIPS(),
            query: { relationship_type: g.eA$.PENDING_INCOMING },
            rejectWithError: (0, a.fT)(),
        })
            .then(() => {
                l.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
            })
            .catch(() => {
                s.O.announce(N.intl.string(N.t.n6Jo3E));
            }),
    clearPendingSpamAndIgnored: () =>
        a.Bo.del({
            url: g.Rsh.USER_RELATIONSHIPS(),
            query: { relationship_type: g.eA$.PENDING_INCOMING },
            body: { filters: [T.w.SPAM, T.w.IGNORED] },
            rejectWithError: (0, a.fT)(),
        })
            .then(() => {
                l.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
            })
            .catch(() => {
                s.O.announce(N.intl.string(N.t.n6Jo3E));
            }),
    ignoreUser: (e, t, n) =>
        a.Bo.put({ url: g.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, a.fT)() })
            .then(() => {
                (l.h.dispatch({ type: "RELATIONSHIP_IGNORE_USER_SUCCESS", userId: e, timestamp: Date.now() }),
                    u.A.showIgnoreSuccessToast(e, n),
                    s.O.announce((0, _.$)(S.OB.IGNORE_SUCCESS, e, n)));
            })
            .catch(() => {
                (u.A.showFailedToast(), s.O.announce(N.intl.string(N.t.n6Jo3E)));
            }),
    unignoreUser: (e, t, n) =>
        a.Bo.del({ url: g.Rsh.IGNORE_USER(e), context: { location: t }, rejectWithError: (0, a.fT)() })
            .then(() => {
                (l.h.dispatch({ type: "RELATIONSHIP_UNIGNORE_USER_SUCCESS", userId: e }),
                    u.A.showUnignoreSuccessToast(e, n),
                    s.O.announce((0, _.$)(S.OB.UNIGNORE_SUCCESS, e, n)));
            })
            .catch(() => {
                (u.A.showFailedToast(), s.O.announce(N.intl.string(N.t.n6Jo3E)));
            }),
};
n.d(t, {}, { A: y, g: O });

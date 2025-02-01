n.d(t, { Z: () => b }), n(47120);
var i = n(544891),
    r = n(780384),
    a = n(570140),
    s = n(391650),
    o = n(877215),
    l = n(895886),
    u = n(681678),
    c = n(397550),
    d = n(594174),
    f = n(657682),
    _ = n(51144),
    p = n(668781),
    h = n(239091),
    m = n(981631),
    g = n(858380),
    E = n(388032);
function v(e) {
    (0, h.Zy)(), p.Z.show(e);
}
function y() {
    (0, h.Zy)(), (0, l.default)();
}
function I(e, t, n) {
    let { status: i, body: r } = e,
        a = r && r.code;
    switch (i) {
        case 429:
            0 === t &&
                v({
                    title: E.intl.string(E.t['3D5eo6']),
                    body: E.intl.string(E.t.TuJriI),
                    confirmText: E.intl.string(E.t.DppXIy)
                });
            break;
        case 403:
            if (a === m.evJ.EMAIL_VERIFICATION_REQUIRED) {
                v({
                    title: E.intl.string(E.t.Gqf33N),
                    body: E.intl.string(E.t.GHOBd3),
                    confirmText: E.intl.string(E.t.HbTSEx),
                    onConfirm: () => {
                        s.j();
                    }
                });
                break;
            }
        default:
            if (a === m.evJ.USER_QUARANTINED) y();
            else if ((0, c.b)(i, a)) break;
            else if (0 === t) {
                let e = null != n ? (0, f.NF)(a || 0, n) : E.intl.string(E.t.paDJBA);
                v({
                    title: E.intl.string(E.t['6moJ8v']),
                    body: e,
                    confirmText: E.intl.string(E.t.BddRzc)
                });
            }
    }
    throw e;
}
let T = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: r, errorUxConfig: a = 0 } = e,
                [s, o] = t.split('#');
            return i.tn
                .post({
                    url: m.ANM.USER_RELATIONSHIPS(),
                    body: {
                        username: s,
                        discriminator: parseInt(o),
                        ...r
                    },
                    context: n,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .catch((e) => {
                    I(e, a, t);
                });
        },
        addRelationship(e, t) {
            let { userId: n, context: r, type: a, friendToken: s, fromFriendSuggestion: o, captchaPayload: l } = e,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                c = d.default.getUser(n);
            return i.tn
                .put({
                    url: m.ANM.USER_RELATIONSHIP(n),
                    body: {
                        type: a,
                        friend_token: s,
                        from_friend_suggestion: o,
                        ...l
                    },
                    context: r,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    null == t || t();
                })
                .catch((e) => {
                    I(e, u, _.ZP.getUserTag(c));
                });
        },
        acceptFriendRequest(e) {
            function t() {
                r.uv.announce(E.intl.string(E.t['3goNa2']));
            }
            return T.addRelationship(e, t);
        },
        cancelFriendRequest(e, t) {
            function n() {
                r.uv.announce(E.intl.string(E.t.pLUaxc));
            }
            return T.removeRelationship(e, t, n);
        },
        removeFriend(e, t) {
            function n() {
                r.uv.announce(E.intl.string(E.t.vGSLa2));
            }
            T.removeRelationship(e, t, n);
        },
        unblockUser(e, t) {
            function n() {
                r.uv.announce(E.intl.string(E.t['9t1au7']));
            }
            return T.removeRelationship(e, t, n);
        },
        removeRelationship: (e, t, n) =>
            i.tn
                .del({
                    url: m.ANM.USER_RELATIONSHIP(e),
                    context: t,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    null == n || n();
                })
                .catch(() => {
                    r.uv.announce(E.intl.string(E.t.n6Jo3N));
                }),
        updateRelationship: (e, t) =>
            i.tn.patch({
                url: m.ANM.USER_RELATIONSHIP(e),
                body: { nickname: t },
                rejectWithError: !1
            }),
        fetchRelationships() {
            i.tn
                .get({
                    url: m.ANM.USER_RELATIONSHIPS(),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) =>
                        a.Z.dispatch({
                            type: 'LOAD_RELATIONSHIPS_SUCCESS',
                            relationships: e.body
                        }),
                    () => a.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
                );
        },
        confirmClearPendingRelationships(e) {
            (0, o.Z)(e);
        },
        clearPendingRelationships: () =>
            i.tn
                .del({
                    url: m.ANM.USER_RELATIONSHIPS(),
                    query: { relationship_type: m.OGo.PENDING_INCOMING },
                    rejectWithError: !1
                })
                .then(() => {
                    a.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
                })
                .catch(() => {
                    r.uv.announce(E.intl.string(E.t.n6Jo3N));
                }),
        clearPendingSpamAndIgnored: () =>
            i.tn
                .del({
                    url: m.ANM.USER_RELATIONSHIPS(),
                    query: { relationship_type: m.OGo.PENDING_INCOMING },
                    body: {
                        filters: [g.G.SPAM, g.G.IGNORED]
                    },
                    rejectWithError: !1
                })
                .then(() => {
                    a.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
                })
                .catch(() => {
                    r.uv.announce(E.intl.string(E.t.n6Jo3N));
                }),
        ignoreUser: (e, t, n) =>
            i.tn
                .put({
                    url: m.ANM.IGNORE_USER(e),
                    context: { location: t },
                    rejectWithError: !1
                })
                .then(() => {
                    u.Z.showIgnoreSuccessToast(e, n), r.uv.announce(E.intl.string(E.t.Us93CQ));
                })
                .catch(() => {
                    u.Z.showFailedToast(), r.uv.announce(E.intl.string(E.t.n6Jo3N));
                }),
        unignoreUser: (e, t, n) =>
            i.tn
                .del({
                    url: m.ANM.IGNORE_USER(e),
                    context: { location: t },
                    rejectWithError: !1
                })
                .then(() => {
                    u.Z.showUnignoreSuccessToast(e, n), r.uv.announce(E.intl.string(E.t.QlH5w8));
                })
                .catch(() => {
                    u.Z.showFailedToast(), r.uv.announce(E.intl.string(E.t.n6Jo3N));
                })
    },
    b = T;

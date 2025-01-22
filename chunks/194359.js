var i,
    a = r(47120);
var o = r(544891),
    s = r(780384),
    l = r(570140),
    u = r(391650),
    c = r(877215),
    d = r(895886),
    f = r(681678),
    p = r(397550),
    h = r(594174),
    _ = r(657682),
    m = r(51144),
    g = r(668781),
    E = r(239091),
    v = r(981631),
    y = r(858380),
    b = r(388032);
function I(e) {
    (0, E.Zy)(), g.Z.show(e);
}
function T() {
    (0, E.Zy)(), (0, d.default)();
}
function S(e, n, r) {
    let { status: i, body: a } = e,
        o = a && a.code;
    switch (i) {
        case 429:
            0 === n &&
                I({
                    title: b.intl.string(b.t['3D5eo6']),
                    body: b.intl.string(b.t.TuJriI),
                    confirmText: b.intl.string(b.t.DppXIy)
                });
            break;
        case 403:
            if (o === v.evJ.EMAIL_VERIFICATION_REQUIRED) {
                I({
                    title: b.intl.string(b.t.Gqf33N),
                    body: b.intl.string(b.t.GHOBd3),
                    confirmText: b.intl.string(b.t.HbTSEx),
                    onConfirm: () => {
                        u.j();
                    }
                });
                break;
            }
        default:
            if (o === v.evJ.USER_QUARANTINED) T();
            else if ((0, p.b)(i, o)) break;
            else if (0 === n) {
                let e = null != r ? (0, _.NF)(o || 0, r) : b.intl.string(b.t.paDJBA);
                I({
                    title: b.intl.string(b.t['6moJ8v']),
                    body: e,
                    confirmText: b.intl.string(b.t.BddRzc)
                });
            }
    }
    throw e;
}
!(function (e) {
    (e[(e.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'), (e[(e.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
})(i || (i = {}));
let A = {
    sendRequest(e) {
        let { discordTag: n, context: r, captchaPayload: i, errorUxConfig: a = 0 } = e,
            [s, l] = n.split('#');
        return o.tn
            .post({
                url: v.ANM.USER_RELATIONSHIPS(),
                body: {
                    username: s,
                    discriminator: parseInt(l),
                    ...i
                },
                context: r,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((e) => {
                S(e, a, n);
            });
    },
    addRelationship(e, n) {
        let { userId: r, context: i, type: a, friendToken: s, fromFriendSuggestion: l, captchaPayload: u } = e,
            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            d = h.default.getUser(r);
        return o.tn
            .put({
                url: v.ANM.USER_RELATIONSHIP(r),
                body: {
                    type: a,
                    friend_token: s,
                    from_friend_suggestion: l,
                    ...u
                },
                context: i,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == n || n();
            })
            .catch((e) => {
                S(e, c, m.ZP.getUserTag(d));
            });
    },
    acceptFriendRequest(e) {
        function n() {
            s.uv.announce(b.intl.string(b.t['3goNa2']));
        }
        return A.addRelationship(e, n);
    },
    cancelFriendRequest(e, n) {
        function r() {
            s.uv.announce(b.intl.string(b.t.pLUaxc));
        }
        return A.removeRelationship(e, n, r);
    },
    removeFriend(e, n) {
        function r() {
            s.uv.announce(b.intl.string(b.t.vGSLa2));
        }
        A.removeRelationship(e, n, r);
    },
    unblockUser(e, n) {
        function r() {
            s.uv.announce(b.intl.string(b.t['9t1au7']));
        }
        return A.removeRelationship(e, n, r);
    },
    removeRelationship: (e, n, r) =>
        o.tn
            .del({
                url: v.ANM.USER_RELATIONSHIP(e),
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                null == r || r();
            })
            .catch(() => {
                s.uv.announce(b.intl.string(b.t.n6Jo3N));
            }),
    updateRelationship: (e, n) =>
        o.tn.patch({
            url: v.ANM.USER_RELATIONSHIP(e),
            body: { nickname: n },
            rejectWithError: !1
        }),
    fetchRelationships() {
        o.tn
            .get({
                url: v.ANM.USER_RELATIONSHIPS(),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) =>
                    l.Z.dispatch({
                        type: 'LOAD_RELATIONSHIPS_SUCCESS',
                        relationships: e.body
                    }),
                () => l.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
            );
    },
    confirmClearPendingRelationships(e) {
        (0, c.Z)(e);
    },
    clearPendingRelationships: () =>
        o.tn
            .del({
                url: v.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: v.OGo.PENDING_INCOMING },
                rejectWithError: !1
            })
            .then(() => {
                l.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(b.intl.string(b.t.n6Jo3N));
            }),
    clearPendingSpamAndIgnored: () =>
        o.tn
            .del({
                url: v.ANM.USER_RELATIONSHIPS(),
                query: { relationship_type: v.OGo.PENDING_INCOMING },
                body: {
                    filters: [y.G.SPAM, y.G.IGNORED]
                },
                rejectWithError: !1
            })
            .then(() => {
                l.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
            })
            .catch(() => {
                s.uv.announce(b.intl.string(b.t.n6Jo3N));
            }),
    ignoreUser: (e, n, r) =>
        o.tn
            .put({
                url: v.ANM.IGNORE_USER(e),
                context: { location: n },
                rejectWithError: !1
            })
            .then(() => {
                f.Z.showIgnoreSuccessToast(e, r), s.uv.announce(b.intl.string(b.t.Us93CQ));
            })
            .catch(() => {
                f.Z.showFailedToast(), s.uv.announce(b.intl.string(b.t.n6Jo3N));
            }),
    unignoreUser: (e, n, r) =>
        o.tn
            .del({
                url: v.ANM.IGNORE_USER(e),
                context: { location: n },
                rejectWithError: !1
            })
            .then(() => {
                f.Z.showUnignoreSuccessToast(e, r), s.uv.announce(b.intl.string(b.t.QlH5w8));
            })
            .catch(() => {
                f.Z.showFailedToast(), s.uv.announce(b.intl.string(b.t.n6Jo3N));
            })
};
n.Z = A;

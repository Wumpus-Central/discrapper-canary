n.d(t, {
    A: () => I,
}),
    n(896048),
    n(747238);
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(315982),
    o = n(395484),
    l = n(700241),
    c = n(662502),
    u = n(30076),
    d = n(287809),
    f = n(395422),
    p = n(427262),
    _ = n(157559),
    h = n(442433),
    m = n(652215),
    g = n(235627),
    E = n(985018);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e) {
    (0, h.Z_)(), _.A.show(e);
}

function A() {
    (0, h.Z_)(), (0, l.default)();
}

function v(e, t, n) {
    let { status: r, body: i } = e,
        a = i && i.code;
    switch (r) {
        case 429:
            0 === t &&
                O({
                    title: E.intl.string(E.t["3D5eox"]),
                    body: E.intl.string(E.t.TuJriJ),
                    confirmText: E.intl.string(E.t.DppXIx),
                });
            break;
        case 403:
            if (a === m.t02.EMAIL_VERIFICATION_REQUIRED) {
                O({
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
            if (a === m.t02.USER_QUARANTINED) A();
            else if ((0, u.O)(r, a)) break;
            else if (a === m.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
                let e = null != n ? (0, f.vU)(a || 0, n) : E.intl.string(E.t.paDJBM);
                O({
                    title: E.intl.string(E.t["6moJ8s"]),
                    body: e,
                    confirmText: E.intl.string(E.t.BddRzS),
                });
            }
    }
    throw e;
}
let S = {
        sendRequest(e) {
            let { discordTag: t, context: n, captchaPayload: i, errorUxConfig: a = 0 } = e,
                [s, o] = t.split("#");
            return r.Bo.post({
                url: m.Rsh.USER_RELATIONSHIPS(),
                body: y(
                    {
                        username: s,
                        discriminator: parseInt(o),
                    },
                    i,
                ),
                context: n,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).catch((e) => {
                v(e, a, t);
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
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                u = d.default.getUser(n);
            return r.Bo.put({
                url: m.Rsh.USER_RELATIONSHIP(n),
                body: y(
                    {
                        type: a,
                        from_friend_suggestion: s,
                        confirm_stranger_request: o,
                    },
                    l,
                ),
                context: i,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    null == t || t();
                })
                .catch((e) => (v(e, c, p.Ay.getUserTag(u)), Promise.reject(e)));
        },
        acceptFriendRequest(e) {
            function t() {
                i.OR.announce(E.intl.string(E.t["3goNa5"]));
            }
            return S.addRelationship(e, t);
        },
        cancelFriendRequest(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.pLUaxR));
            }
            return S.removeRelationship(e, t, n);
        },
        removeFriend(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.vGSLa2));
            }
            S.removeRelationship(e, t, n);
        },
        blockUser(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t.mU0Vrp));
            }
            return S.addRelationship(
                {
                    userId: e,
                    context: t,
                    type: m.eA$.BLOCKED,
                },
                n,
            );
        },
        unblockUser(e, t) {
            function n() {
                i.OR.announce(E.intl.string(E.t["9t1au7"]));
            }
            return S.removeRelationship(e, t, n);
        },
        removeRelationship: (e, t, n) =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIP(e),
                context: t,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    null == n || n();
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        updateRelationship: (e, t) =>
            r.Bo.patch({
                url: m.Rsh.USER_RELATIONSHIP(e),
                body: {
                    nickname: t,
                },
                rejectWithError: !1,
            }),
        fetchRelationships() {
            r.Bo.get({
                url: m.Rsh.USER_RELATIONSHIPS(),
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) =>
                    a.h.dispatch({
                        type: "LOAD_RELATIONSHIPS_SUCCESS",
                        relationships: e.body,
                    }),
                () =>
                    a.h.dispatch({
                        type: "LOAD_RELATIONSHIPS_FAILURE",
                    }),
            );
        },
        confirmClearPendingRelationships(e) {
            (0, o.A)(e);
        },
        clearPendingRelationships: () =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIPS(),
                query: {
                    relationship_type: m.eA$.PENDING_INCOMING,
                },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({
                        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED",
                    });
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        clearPendingSpamAndIgnored: () =>
            r.Bo.del({
                url: m.Rsh.USER_RELATIONSHIPS(),
                query: {
                    relationship_type: m.eA$.PENDING_INCOMING,
                },
                body: {
                    filters: [g.w.SPAM, g.w.IGNORED],
                },
                rejectWithError: !1,
            })
                .then(() => {
                    a.h.dispatch({
                        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED",
                    });
                })
                .catch(() => {
                    i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        ignoreUser: (e, t, n) =>
            r.Bo.put({
                url: m.Rsh.IGNORE_USER(e),
                context: {
                    location: t,
                },
                rejectWithError: !1,
            })
                .then(() => {
                    c.A.showIgnoreSuccessToast(e, n),
                        i.OR.announce(E.intl.string(E.t.Us93Ca)),
                        a.h.dispatch({
                            type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
                            userId: e,
                            timestamp: Date.now(),
                        });
                })
                .catch(() => {
                    c.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
        unignoreUser: (e, t, n) =>
            r.Bo.del({
                url: m.Rsh.IGNORE_USER(e),
                context: {
                    location: t,
                },
                rejectWithError: !1,
            })
                .then(() => {
                    c.A.showUnignoreSuccessToast(e, n), i.OR.announce(E.intl.string(E.t.QlH5w6));
                })
                .catch(() => {
                    c.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E));
                }),
    },
    I = S;

t.d(e, { A: () => g });
var r = t(228366),
    i = t(717398),
    o = t(636537),
    c = t(765178),
    a = t(157559),
    u = t(913122),
    l = t(652215),
    s = t(375708);
function d(n) {
    let e = new u.LG(n).getAnyErrorMessage();
    a.A.show({ title: s.intl.string(s.t["328j/I"]), body: null != e ? e : s.intl.string(s.t.fEptJP) });
}
async function A(n) {
    let { userId: e, applicationId: t, onSuccess: r } = n;
    try {
        (await o.Bo.del({ url: l.Rsh.USER_GAME_RELATIONSHIP(e, t), oldFormErrors: !0, rejectWithError: !1 }), r());
    } catch (n) {
        d(n);
    }
}
let f = async function (n) {
        let { userId: e, applicationId: t } = n;
        await A({
            userId: e,
            applicationId: t,
            onSuccess: () => {
                c.O.announce(s.intl.string(s.t.zRf8cO));
            },
        });
    },
    R = function (n) {
        let { userId: e, applicationId: t } = n;
        return (function (n) {
            let { userId: e, applicationId: t, onSuccess: r, type: i } = n;
            return o.Bo.put({
                url: l.Rsh.USER_GAME_RELATIONSHIP(e, t),
                body: { type: i },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    r();
                })
                .catch((n) => (d(n), Promise.reject(n)));
        })({
            userId: e,
            applicationId: t,
            type: l.eA$.FRIEND,
            onSuccess: () => {
                c.O.announce(s.intl.string(s.t.taJiuc));
            },
        });
    },
    E = async function (n) {
        let { userId: e, applicationId: t } = n;
        await A({
            userId: e,
            applicationId: t,
            onSuccess: () => {
                c.O.announce(s.intl.string(s.t.XMf21q));
            },
        });
    };
var h = t(994500),
    S = t(427262),
    y = t(477900);
t(582128);
var p = t(192308),
    I = t(174459),
    _ = t(646363);
function m(n) {
    let { onConfirm: e, onFinally: r } = n;
    (I.default.track(l.HAw.OPEN_MODAL, { type: _.C }),
        (0, p.openModalLazy)(async () => {
            let { default: n } = await t.e("352049").then(t.bind(t, 691464));
            return (t) => {
                let { onClose: i, ...o } = t;
                return (0, y.jsx)(n, {
                    onConfirm: e,
                    onClose: async () => {
                        (await i(), r?.());
                    },
                    ...o,
                });
            };
        }));
}
function C(n) {
    let { userId: e, applicationId: t, location: r, confirmStrangerRequest: o = !1 } = n;
    return null != t
        ? R({ userId: e, applicationId: t })
        : i.A.acceptFriendRequest({ userId: e, confirmStrangerRequest: o, context: { location: r } });
}
function N(n, e) {
    return n?.body?.code === l.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: e.userId, isStranger: !0 }),
          m({
              onConfirm: () => {
                  (C({ ...e, confirmStrangerRequest: !0 }), e.onConfirm?.());
              },
              onCancel: () => {
                  e.onCancel?.();
              },
          }),
          !0)
        : (n?.ok && r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: e.userId, isStranger: !1 }), !1);
}
let g = {
    removeFriend: function (n) {
        let { userId: e, applicationId: t, location: r } = n;
        null != t ? f({ userId: e, applicationId: t }) : i.A.removeFriend(e, { location: r });
    },
    cancelFriendRequest: function (n) {
        let { userId: e, applicationId: t, location: r } = n;
        return null != t ? E({ userId: e, applicationId: t }) : i.A.cancelFriendRequest(e, { location: r });
    },
    acceptFriendRequest: C,
    maybeConfirmFriendRequestAccept: function (n) {
        let { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: o, onFinally: c } = n,
            a = h.A.isStranger(e);
        return null != t || !1 === a
            ? C({ userId: e, applicationId: t, location: r, confirmStrangerRequest: !0 }).then(() => {
                  (i?.(), c?.());
              })
            : a
              ? void m({
                    onConfirm: () => {
                        (C({ userId: e, applicationId: t, location: r, confirmStrangerRequest: !0 }), i?.());
                    },
                    onCancel: () => {
                        o?.();
                    },
                    onFinally: () => {
                        c?.();
                    },
                })
              : void C({ userId: e, applicationId: t, location: r })
                    .then((n) => {
                        N(n, { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: o }) || i?.();
                    })
                    .catch((n) => {
                        N(n, { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: o });
                    })
                    .finally(() => {
                        c?.();
                    });
    },
    getDisplayName: function (n) {
        return h.A.getNickname(n.id) ?? S.Ay.getName(n);
    },
};

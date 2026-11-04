t.d(e, { A: () => g });
var r = t(73153),
    i = t(49229),
    c = t(620632),
    o = t(765178),
    a = t(157559),
    u = t(627784),
    s = t(652215),
    l = t(792996);
function d(n) {
    let e = new u.LG(n).getAnyErrorMessage();
    a.A.show({ title: l.intl.string(l.t["328j/I"]), body: null != e ? e : l.intl.string(l.t.fEptJP) });
}
async function A(n) {
    let { userId: e, applicationId: t, onSuccess: r } = n;
    try {
        (await c.Bo.del({ url: s.Rsh.USER_GAME_RELATIONSHIP(e, t), oldFormErrors: !0, rejectWithError: !1 }), r());
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
                o.O.announce(l.intl.string(l.t.zRf8cO));
            },
        });
    },
    R = function (n) {
        let { userId: e, applicationId: t } = n;
        return (function (n) {
            let { userId: e, applicationId: t, onSuccess: r, type: i } = n;
            return c.Bo.put({
                url: s.Rsh.USER_GAME_RELATIONSHIP(e, t),
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
            type: s.eA$.FRIEND,
            onSuccess: () => {
                o.O.announce(l.intl.string(l.t.taJiuc));
            },
        });
    },
    E = async function (n) {
        let { userId: e, applicationId: t } = n;
        await A({
            userId: e,
            applicationId: t,
            onSuccess: () => {
                o.O.announce(l.intl.string(l.t.XMf21q));
            },
        });
    };
var h = t(994500),
    S = t(427262),
    y = t(477900);
t(582128);
var I = t(192308),
    m = t(129230),
    p = t(646363);
function _(n) {
    let { onConfirm: e, onFinally: r } = n;
    (m.default.track(s.HAw.OPEN_MODAL, { type: p.C }),
        (0, I.mM)(async () => {
            let { default: n } = await t.e(352049).then(t.bind(t, 691464));
            return (t) => {
                let { onClose: i, ...c } = t;
                return (0, y.jsx)(n, {
                    onConfirm: e,
                    onClose: async () => {
                        (await i(), r?.());
                    },
                    ...c,
                });
            };
        }));
}
function C(n) {
    let { userId: e, applicationId: t, location: r, confirmStrangerRequest: c = !1 } = n;
    return null != t
        ? R({ userId: e, applicationId: t })
        : i.A.acceptFriendRequest({ userId: e, confirmStrangerRequest: c, context: { location: r } });
}
function N(n, e) {
    return n?.body?.code === s.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: e.userId, isStranger: !0 }),
          _({
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
        let { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: c, onFinally: o } = n,
            a = h.A.isStranger(e);
        return null != t || !1 === a
            ? C({ userId: e, applicationId: t, location: r, confirmStrangerRequest: !0 }).then(() => {
                  (i?.(), o?.());
              })
            : a
              ? void _({
                    onConfirm: () => {
                        (C({ userId: e, applicationId: t, location: r, confirmStrangerRequest: !0 }), i?.());
                    },
                    onCancel: () => {
                        c?.();
                    },
                    onFinally: () => {
                        o?.();
                    },
                })
              : void C({ userId: e, applicationId: t, location: r })
                    .then((n) => {
                        N(n, { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: c }) || i?.();
                    })
                    .catch((n) => {
                        N(n, { userId: e, applicationId: t, location: r, onConfirm: i, onCancel: c });
                    })
                    .finally(() => {
                        o?.();
                    });
    },
    getDisplayName: function (n) {
        return h.A.getNickname(n.id) ?? S.Ay.getName(n);
    },
};

t.d(n, { A: () => F });
var r = t(923457),
    i = t(228366),
    o = t(717398),
    a = t(636537),
    c = t(765178),
    l = t(157559),
    u = t(913122),
    s = t(652215),
    d = t(375708);
function f(e) {
    let n = new u.LG(e).getAnyErrorMessage();
    l.A.show({ title: d.intl.string(d.t["328j/I"]), body: null != n ? n : d.intl.string(d.t.fEptJP) });
}
async function A(e) {
    let { userId: n, applicationId: t, onSuccess: r } = e;
    try {
        await a.Bo.del({ url: s.Rsh.USER_GAME_RELATIONSHIP(n, t), oldFormErrors: !0, rejectWithError: !1 }), r();
    } catch (e) {
        f(e);
    }
}
let R = async function (e) {
        let { userId: n, applicationId: t } = e;
        await A({
            userId: n,
            applicationId: t,
            onSuccess: () => {
                c.O.announce(d.intl.string(d.t.zRf8cO));
            },
        });
    },
    E = function (e) {
        let { userId: n, applicationId: t } = e;
        return (function (e) {
            let { userId: n, applicationId: t, onSuccess: r, type: i } = e;
            return a.Bo.put({
                url: s.Rsh.USER_GAME_RELATIONSHIP(n, t),
                body: { type: i },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    r();
                })
                .catch((e) => (f(e), Promise.reject(e)));
        })({
            userId: n,
            applicationId: t,
            type: s.eA$.FRIEND,
            onSuccess: () => {
                c.O.announce(d.intl.string(d.t.taJiuc));
            },
        });
    },
    S = async function (e) {
        let { userId: n, applicationId: t } = e;
        await A({
            userId: n,
            applicationId: t,
            onSuccess: () => {
                c.O.announce(d.intl.string(d.t.XMf21q));
            },
        });
    };
var I = t(207560);
let h = (0, t(945810).mj)({
    kind: "user",
    name: "2025-10-friend-request-alerts-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var m = t(994500),
    p = t(427262),
    y = t(477900);
t(582128);
var C = t(192308),
    N = t(174459),
    _ = t(646363);
function g(e) {
    let { onConfirm: n, onFinally: r } = e;
    N.default.track(s.HAw.OPEN_MODAL, { type: _.C }),
        (0, C.openModalLazy)(async () => {
            let { default: e } = await t.e("352049").then(t.bind(t, 691464));
            return (t) => {
                let { onClose: i, ...o } = t;
                return (0, y.jsx)(e, {
                    onConfirm: n,
                    onClose: async () => {
                        await i(), r?.();
                    },
                    ...o,
                });
            };
        });
}
function T(e) {
    let { userId: n, applicationId: t, location: r, confirmStrangerRequest: i = !1 } = e;
    return null != t
        ? E({ userId: n, applicationId: t })
        : o.A.acceptFriendRequest({ userId: n, confirmStrangerRequest: i, context: { location: r } });
}
function O(e, n) {
    return e?.body?.code === s.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: n.userId, isStranger: !0 }),
          g({
              onConfirm: () => {
                  T({ ...n, confirmStrangerRequest: !0 }), n.onConfirm?.();
              },
              onCancel: () => {
                  n.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: n.userId, isStranger: !1 }), !1);
}
let F = {
    removeFriend: function (e) {
        let { userId: n, applicationId: t, location: r } = e;
        null != t ? R({ userId: n, applicationId: t }) : o.A.removeFriend(n, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: n, applicationId: t, location: r } = e;
        return null != t ? S({ userId: n, applicationId: t }) : o.A.cancelFriendRequest(n, { location: r });
    },
    acceptFriendRequest: T,
    maybeConfirmFriendRequestAccept: function (e) {
        let { userId: n, applicationId: t, location: i, onConfirm: o, onCancel: a, onFinally: c } = e,
            l = (0, I.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            u = h.getConfig({ location: "maybeConfirmFriendRequestAccept" }).enabled,
            s = m.A.isStranger(n);
        return null == t && (l || u) && !1 !== s
            ? s
                ? void g({
                      onConfirm: () => {
                          T({ userId: n, applicationId: t, location: i, confirmStrangerRequest: !0 }), o?.();
                      },
                      onCancel: () => {
                          a?.();
                      },
                      onFinally: () => {
                          c?.();
                      },
                  })
                : void T({ userId: n, applicationId: t, location: i })
                      .then((e) => {
                          O(e, { userId: n, applicationId: t, location: i, onConfirm: o, onCancel: a }) || o?.();
                      })
                      .catch((e) => {
                          O(e, { userId: n, applicationId: t, location: i, onConfirm: o, onCancel: a });
                      })
                      .finally(() => {
                          c?.();
                      })
            : T({ userId: n, applicationId: t, location: i, confirmStrangerRequest: !0 }).then(() => {
                  o?.(), c?.();
              });
    },
    getDisplayName: function (e) {
        return m.A.getNickname(e.id) ?? p.Ay.getName(e);
    },
};

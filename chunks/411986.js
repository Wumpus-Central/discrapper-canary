"use strict";
n.d(t, { A: () => L });
var i = n(923457),
    r = n(228366),
    a = n(717398),
    s = n(636537),
    l = n(765178),
    o = n(157559),
    d = n(913122),
    c = n(652215),
    u = n(375708);
function _(e) {
    let t = new d.LG(e).getAnyErrorMessage();
    o.A.show({ title: u.intl.string(u.t["328j/I"]), body: null != t ? t : u.intl.string(u.t.fEptJP) });
}
async function E(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
        await s.Bo.del({ url: c.Rsh.USER_GAME_RELATIONSHIP(t, n), oldFormErrors: !0, rejectWithError: !1 }), i();
    } catch (e) {
        _(e);
    }
}
let A = async function (e) {
        let { userId: t, applicationId: n } = e;
        await E({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                l.O.announce(u.intl.string(u.t.zRf8cO));
            },
        });
    },
    h = function (e) {
        let { userId: t, applicationId: n } = e;
        return (function (e) {
            let { userId: t, applicationId: n, onSuccess: i, type: r } = e;
            return s.Bo.put({
                url: c.Rsh.USER_GAME_RELATIONSHIP(t, n),
                body: { type: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    i();
                })
                .catch((e) => (_(e), Promise.reject(e)));
        })({
            userId: t,
            applicationId: n,
            type: c.eA$.FRIEND,
            onSuccess: () => {
                l.O.announce(u.intl.string(u.t.taJiuc));
            },
        });
    },
    I = async function (e) {
        let { userId: t, applicationId: n } = e;
        await E({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                l.O.announce(u.intl.string(u.t.XMf21q));
            },
        });
    };
var f = n(207560);
let p = (0, n(945810).mj)({
    kind: "user",
    name: "2025-10-friend-request-alerts-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var T = n(994500),
    m = n(627968);
n(64700);
var g = n(192308),
    S = n(174459),
    N = n(646363);
function C(e) {
    let { onConfirm: t, onFinally: i } = e;
    S.default.track(c.HAw.OPEN_MODAL, { type: N.C }),
        (0, g.openModalLazy)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 469083));
            return (n) => {
                let { onClose: r, ...a } = n;
                return (0, m.jsx)(e, {
                    onConfirm: t,
                    onClose: async () => {
                        await r(), i?.();
                    },
                    ...a,
                });
            };
        });
}
function O(e) {
    let { userId: t, applicationId: n, location: i, confirmStrangerRequest: r = !1 } = e;
    return null != n
        ? h({ userId: t, applicationId: n })
        : a.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: r, context: { location: i } });
}
function R(e, t) {
    return e?.body?.code === c.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
          C({
              onConfirm: () => {
                  O({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.();
              },
              onCancel: () => {
                  t.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }), !1);
}
let L = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: i } = e;
        null != n ? A({ userId: t, applicationId: n }) : a.A.removeFriend(t, { location: i });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: i } = e;
        return null != n ? I({ userId: t, applicationId: n }) : a.A.cancelFriendRequest(t, { location: i });
    },
    acceptFriendRequest: O,
    maybeConfirmFriendRequestAccept: function (e) {
        let { userId: t, applicationId: n, location: r, onConfirm: a, onCancel: s, onFinally: l } = e,
            o = (0, f.To)(i.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            d = p.getConfig({ location: "maybeConfirmFriendRequestAccept" }).enabled,
            c = T.A.isStranger(t);
        return null == n && (o || d) && !1 !== c
            ? c
                ? void C({
                      onConfirm: () => {
                          O({ userId: t, applicationId: n, location: r, confirmStrangerRequest: !0 }), a?.();
                      },
                      onCancel: () => {
                          s?.();
                      },
                      onFinally: () => {
                          l?.();
                      },
                  })
                : void O({ userId: t, applicationId: n, location: r })
                      .then((e) => {
                          R(e, { userId: t, applicationId: n, location: r, onConfirm: a, onCancel: s }) || a?.();
                      })
                      .catch((e) => {
                          R(e, { userId: t, applicationId: n, location: r, onConfirm: a, onCancel: s });
                      })
                      .finally(() => {
                          l?.();
                      })
            : O({ userId: t, applicationId: n, location: r, confirmStrangerRequest: !0 }).then(() => {
                  a?.(), l?.();
              });
    },
};

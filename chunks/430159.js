"use strict";
n.d(t, { A: () => O });
var i = n(923457),
    r = n(228366),
    s = n(717398),
    a = n(636537),
    o = n(765178),
    l = n(157559),
    u = n(845584),
    c = n(652215),
    d = n(375708);
function _(e) {
    let t = new u.LG(e).getAnyErrorMessage();
    l.A.show({ title: d.intl.string(d.t["328j/I"]), body: null != t ? t : d.intl.string(d.t.fEptJP) });
}
async function f(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
        await a.Bo.del({ url: c.Rsh.USER_GAME_RELATIONSHIP(t, n), oldFormErrors: !0, rejectWithError: !1 }), i();
    } catch (e) {
        _(e);
    }
}
let h = async function (e) {
        let { userId: t, applicationId: n } = e;
        await f({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                o.O.announce(d.intl.string(d.t.zRf8cO));
            },
        });
    },
    p = function (e) {
        let { userId: t, applicationId: n } = e;
        return (function (e) {
            let { userId: t, applicationId: n, onSuccess: i, type: r } = e;
            return a.Bo.put({
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
                o.O.announce(d.intl.string(d.t.taJiuc));
            },
        });
    },
    E = async function (e) {
        let { userId: t, applicationId: n } = e;
        await f({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                o.O.announce(d.intl.string(d.t.XMf21q));
            },
        });
    };
var m = n(207560);
let g = (0, n(945810).mj)({
    kind: "user",
    name: "2025-10-friend-request-alerts-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var A = n(994500),
    I = n(627968);
n(64700);
var T = n(192308),
    S = n(174459),
    N = n(646363);
function y(e) {
    let { onConfirm: t, onFinally: i } = e;
    S.default.track(c.HAw.OPEN_MODAL, { type: N.C }),
        (0, T.openModalLazy)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 469083));
            return (n) => {
                let { onClose: r, ...s } = n;
                return (0, I.jsx)(e, {
                    onConfirm: t,
                    onClose: async () => {
                        await r(), i?.();
                    },
                    ...s,
                });
            };
        });
}
function C(e) {
    let { userId: t, applicationId: n, location: i, confirmStrangerRequest: r = !1 } = e;
    return null != n
        ? p({ userId: t, applicationId: n })
        : s.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: r, context: { location: i } });
}
function v(e, t) {
    return e?.body?.code === c.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
          y({
              onConfirm: () => {
                  C({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.();
              },
              onCancel: () => {
                  t.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && r.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }), !1);
}
let O = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: i } = e;
        null != n ? h({ userId: t, applicationId: n }) : s.A.removeFriend(t, { location: i });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: i } = e;
        return null != n ? E({ userId: t, applicationId: n }) : s.A.cancelFriendRequest(t, { location: i });
    },
    acceptFriendRequest: C,
    maybeConfirmFriendRequestAccept: function (e) {
        let { userId: t, applicationId: n, location: r, onConfirm: s, onCancel: a, onFinally: o } = e,
            l = (0, m.To)(i.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            u = g.getConfig({ location: "maybeConfirmFriendRequestAccept" }).enabled,
            c = A.A.isStranger(t);
        return null == n && (l || u) && !1 !== c
            ? c
                ? void y({
                      onConfirm: () => {
                          C({ userId: t, applicationId: n, location: r, confirmStrangerRequest: !0 }), s?.();
                      },
                      onCancel: () => {
                          a?.();
                      },
                      onFinally: () => {
                          o?.();
                      },
                  })
                : void C({ userId: t, applicationId: n, location: r })
                      .then((e) => {
                          v(e, { userId: t, applicationId: n, location: r, onConfirm: s, onCancel: a }) || s?.();
                      })
                      .catch((e) => {
                          v(e, { userId: t, applicationId: n, location: r, onConfirm: s, onCancel: a });
                      })
                      .finally(() => {
                          o?.();
                      })
            : C({ userId: t, applicationId: n, location: r, confirmStrangerRequest: !0 }).then(() => {
                  s?.(), o?.();
              });
    },
};

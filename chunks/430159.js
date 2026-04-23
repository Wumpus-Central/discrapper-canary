n.d(e, { A: () => N });
var r = n(923457),
    i = n(228366),
    a = n(49229),
    o = n(636537),
    l = n(765178),
    s = n(157559),
    u = n(845584),
    c = n(652215),
    d = n(985018);
function A(t) {
    let e = new u.LG(t).getAnyErrorMessage();
    s.A.show({ title: d.intl.string(d.t["328j/I"]), body: null != e ? e : d.intl.string(d.t.fEptJP) });
}
async function _(t) {
    let { userId: e, applicationId: n, onSuccess: r } = t;
    try {
        await o.Bo.del({ url: c.Rsh.USER_GAME_RELATIONSHIP(e, n), oldFormErrors: !0, rejectWithError: !1 }), r();
    } catch (t) {
        A(t);
    }
}
let f = async function (t) {
        let { userId: e, applicationId: n } = t;
        await _({
            userId: e,
            applicationId: n,
            onSuccess: () => {
                l.O.announce(d.intl.string(d.t.zRf8cO));
            },
        });
    },
    p = function (t) {
        let { userId: e, applicationId: n } = t;
        return (function (t) {
            let { userId: e, applicationId: n, onSuccess: r, type: i } = t;
            return o.Bo.put({
                url: c.Rsh.USER_GAME_RELATIONSHIP(e, n),
                body: { type: i },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    r();
                })
                .catch((t) => (A(t), Promise.reject(t)));
        })({
            userId: e,
            applicationId: n,
            type: c.eA$.FRIEND,
            onSuccess: () => {
                l.O.announce(d.intl.string(d.t.taJiuc));
            },
        });
    },
    E = async function (t) {
        let { userId: e, applicationId: n } = t;
        await _({
            userId: e,
            applicationId: n,
            onSuccess: () => {
                l.O.announce(d.intl.string(d.t.XMf21q));
            },
        });
    };
var g = n(207560);
let h = (0, n(945810).mj)({
    kind: "user",
    name: "2025-10-friend-request-alerts-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = n(994500),
    m = n(627968);
n(64700);
var I = n(192308),
    C = n(954571),
    T = n(646363);
function b(t) {
    let { onConfirm: e, onFinally: r } = t;
    C.default.track(c.HAw.OPEN_MODAL, { type: T.C }),
        (0, I.openModalLazy)(async () => {
            let { default: t } = await n.e("52049").then(n.bind(n, 691464));
            return (n) => {
                let { onClose: i, ...a } = n;
                return (0, m.jsx)(t, {
                    onConfirm: e,
                    onClose: async () => {
                        await i(), r?.();
                    },
                    ...a,
                });
            };
        });
}
function v(t) {
    let { userId: e, applicationId: n, location: r, confirmStrangerRequest: i = !1 } = t;
    return null != n
        ? p({ userId: e, applicationId: n })
        : a.A.acceptFriendRequest({ userId: e, confirmStrangerRequest: i, context: { location: r } });
}
function S(t, e) {
    return t?.body?.code === c.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: e.userId, isStranger: !0 }),
          b({
              onConfirm: () => {
                  v({ ...e, confirmStrangerRequest: !0 }), e.onConfirm?.();
              },
              onCancel: () => {
                  e.onCancel?.();
              },
          }),
          !0)
        : (t?.ok && i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: e.userId, isStranger: !1 }), !1);
}
let N = {
    removeFriend: function (t) {
        let { userId: e, applicationId: n, location: r } = t;
        null != n ? f({ userId: e, applicationId: n }) : a.A.removeFriend(e, { location: r });
    },
    cancelFriendRequest: function (t) {
        let { userId: e, applicationId: n, location: r } = t;
        return null != n ? E({ userId: e, applicationId: n }) : a.A.cancelFriendRequest(e, { location: r });
    },
    acceptFriendRequest: v,
    maybeConfirmFriendRequestAccept: function (t) {
        let { userId: e, applicationId: n, location: i, onConfirm: a, onCancel: o, onFinally: l } = t,
            s = (0, g.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            u = h.getConfig({ location: "maybeConfirmFriendRequestAccept" }).enabled,
            c = y.A.isStranger(e);
        return null == n && (s || u) && !1 !== c
            ? c
                ? void b({
                      onConfirm: () => {
                          v({ userId: e, applicationId: n, location: i, confirmStrangerRequest: !0 }), a?.();
                      },
                      onCancel: () => {
                          o?.();
                      },
                      onFinally: () => {
                          l?.();
                      },
                  })
                : void v({ userId: e, applicationId: n, location: i })
                      .then((t) => {
                          S(t, { userId: e, applicationId: n, location: i, onConfirm: a, onCancel: o }) || a?.();
                      })
                      .catch((t) => {
                          S(t, { userId: e, applicationId: n, location: i, onConfirm: a, onCancel: o });
                      })
                      .finally(() => {
                          l?.();
                      })
            : v({ userId: e, applicationId: n, location: i, confirmStrangerRequest: !0 }).then(() => {
                  a?.(), l?.();
              });
    },
};

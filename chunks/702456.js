n.d(t, { Z: () => _ }), n(388685), n(642613), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(493683),
    o = n(663701),
    s = n(752048),
    c = n(518950),
    u = n(158776),
    d = n(699516),
    p = n(594174),
    f = n(823379),
    h = n(399521),
    g = n(388032),
    m = n(944658);
function b(e) {
    let { user: t } = e,
        n = (0, i.e7)([u.Z], () => u.Z.getStatus(t.id)),
        { avatarSrc: o, eventHandlers: s } = (0, c.Z)({
            userId: t.id,
            size: l.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        d = async () => {
            await a.Z.openPrivateChannel({
                recipientIds: [t.id],
                location: "frequent_friends_row",
            });
        };
    return (0, r.jsx)(l.P3F, {
        className: m.frequentFriendAvatarButton,
        onClick: d,
        onMouseEnter: s.onMouseEnter,
        onMouseLeave: s.onMouseLeave,
        "aria-label": g.intl.formatToPlainString(g.t.M5FjCg, { username: t.username }),
        children: (0, r.jsx)(l.qEK, {
            src: o,
            size: l.EFr.SIZE_32,
            "aria-label": t.username,
            status: n,
        }),
    });
}
function _() {
    let { enabled: e } = (0, h.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, i.Wu)([s.Z, p.default, d.Z], () => {
                let e = [...s.Z.getUserAffinities()]
                        .sort((e, t) => s.Z.compare(e.otherUserId, t.otherUserId))
                        .map((e) => e.otherUserId),
                    t = [];
                for (let n of e)
                    if (t.length < 5) {
                        let e = p.default.getUser(n);
                        !(0, f.lm)(e) || d.Z.isIgnored(e.id) || d.Z.isBlocked(e.id) || t.push(e);
                    } else break;
                return t;
            });
            return e.length < 5 ? null : e;
        })();
    return e && null != t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: m.frequentFriendsRow,
                      children: [
                          (0, r.jsxs)("div", {
                              className: m.frequentFriendsHeader,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/semibold",
                                      className: m.frequentFriendsTitle,
                                      children: g.intl.string(g.t.QEh90N),
                                  }),
                                  (0, r.jsx)(l.ua7, {
                                      text: g.intl.string(g.t.tqCMcX),
                                      children: (e) => {
                                          var t, n;
                                          return (0, r.jsx)(
                                              l.d3s,
                                              ((t = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })({}, e)),
                                              (n = n = { className: m.frequentFriendsInfoIcon }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(n)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            t,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(n, e),
                                                        );
                                                    }),
                                              t),
                                          );
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(l.u2D, {
                              className: m.frequentFriendsAvatars,
                              orientation: "horizontal",
                              children: t.map((e) => (0, r.jsx)(b, { user: e }, e.id)),
                          }),
                      ],
                  }),
                  (0, r.jsx)(o.d, {}),
              ],
          })
        : null;
}

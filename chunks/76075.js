n.d(t, { default: () => g });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    l = n(313201),
    a = n(271383),
    s = n(430824),
    c = n(594174),
    u = n(693546),
    d = n(305325),
    f = n(937111),
    p = n(702286),
    m = n(523924),
    b = n(388032);
let g = function (e) {
    var t,
        n,
        { guildId: g, transitionState: j } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                o,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['guildId', 'transitionState']);
    let y = (0, l.Dt)(),
        x = (0, r.e7)([f.Z], () => f.Z.getRequest(g), [g]),
        O = (0, r.e7)([s.Z], () => s.Z.getGuild(g), [g]),
        v = (0, r.e7)([c.default], () => {
            var e;
            return null == (e = c.default.getCurrentUser()) ? void 0 : e.id;
        }),
        P = (0, r.e7)([a.ZP], () => (null != v ? a.ZP.getMember(g, v) : null), [v, g]),
        C = async () => {
            if (null == P ? void 0 : P.isPending) {
                try {
                    await u.Z.removeGuildJoinRequest(g);
                } catch (e) {
                    throw e;
                }
                h.onClose(), (0, d.hk)(g);
            } else u.Z.resetGuildJoinRequest(g);
        };
    return (0, o.jsx)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: j,
        'aria-labelledby': y,
        children: (0, o.jsx)(
            m.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (t) {
                            var o;
                            (o = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = o);
                        });
                }
                return e;
            })({}, h)),
            (n = n =
                {
                    headerId: y,
                    reapplyText: b.intl.string(b.t.I1LYVl),
                    onReapply: C,
                    confirmText: b.intl.string(b.t.BddRzc),
                    onWithdrawApplication: () => {
                        h.onClose(), null == P && (0, p.Z)();
                    },
                    rejectionReason: null == x ? void 0 : x.rejectionReason,
                    guild: O
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, o);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
};

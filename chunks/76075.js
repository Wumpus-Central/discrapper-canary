n.d(t, { default: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    l = n(313201),
    a = n(271383),
    c = n(430824),
    s = n(594174),
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
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['guildId', 'transitionState']);
    let h = (0, l.Dt)(),
        v = (0, i.e7)([f.Z], () => f.Z.getRequest(g), [g]),
        O = (0, i.e7)([c.Z], () => c.Z.getGuild(g), [g]),
        x = (0, i.e7)([s.default], () => {
            var e;
            return null == (e = s.default.getCurrentUser()) ? void 0 : e.id;
        }),
        P = (0, i.e7)([a.ZP], () => (null != x ? a.ZP.getMember(g, x) : null), [x, g]),
        w = async () => {
            if (null == P ? void 0 : P.isPending) {
                try {
                    await u.Z.removeGuildJoinRequest(g);
                } catch (e) {
                    throw e;
                }
                (y.onClose(), (0, d.hk)(g));
            } else u.Z.resetGuildJoinRequest(g);
        };
    return (0, r.jsx)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        transitionState: j,
        'aria-labelledby': h,
        parentComponent: 'MemberVerificationRejectedModal',
        children: (0, r.jsx)(
            m.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, y)),
            (n = n =
                {
                    headerId: h,
                    reapplyText: b.intl.string(b.t.I1LYVl),
                    onReapply: w,
                    confirmText: b.intl.string(b.t.BddRzc),
                    onWithdrawApplication: () => {
                        (y.onClose(), null == P && (0, p.Z)());
                    },
                    rejectionReason: null == v ? void 0 : v.rejectionReason,
                    guild: O
                }),
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
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
};

n.d(t, { default: () => O });
var r = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    l = n(100527),
    a = n(970606),
    c = n(313201),
    s = n(271383),
    u = n(430824),
    d = n(594174),
    f = n(693546),
    p = n(305325),
    m = n(937111),
    g = n(702286),
    b = n(523924),
    _ = n(981631),
    j = n(388032);
let O = function (e) {
    var t,
        n,
        { guildId: O, transitionState: h } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'transitionState']);
    let v = (0, c.Dt)(),
        P = (0, o.e7)([m.Z], () => m.Z.getRequest(O), [O]),
        y = (0, o.e7)([u.Z], () => u.Z.getGuild(O), [O]),
        C = (0, o.e7)([d.default], () => {
            var e;
            return null == (e = d.default.getCurrentUser()) ? void 0 : e.id;
        }),
        N = (0, o.e7)([s.ZP], () => (null != C ? s.ZP.getMember(O, C) : null), [C, O]),
        w = async () => {
            var e;
            if (
                (null != (e = null == y ? void 0 : y.hasFeature(_.oNc.CLAN)) &&
                    e &&
                    (0, a.Vr)({
                        guildId: O,
                        source: l.Z.CLAN_REAPPLY
                    }),
                null == N ? void 0 : N.isPending)
            ) {
                try {
                    await f.Z.removeGuildJoinRequest(O);
                } catch (e) {
                    throw e;
                }
                x.onClose(), (0, p.hk)(O);
            } else f.Z.resetGuildJoinRequest(O);
        };
    return (0, r.jsx)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: h,
        'aria-labelledby': v,
        children: (0, r.jsx)(
            b.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, x)),
            (n = n =
                {
                    headerId: v,
                    reapplyText: j.NW.string(j.t.I1LYVl),
                    onReapply: w,
                    confirmText: j.NW.string(j.t.BddRzc),
                    onWithdrawApplication: () => {
                        x.onClose(), null == N && (0, g.Z)();
                    },
                    rejectionReason: null == P ? void 0 : P.rejectionReason,
                    guild: y
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

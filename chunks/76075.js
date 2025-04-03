n.d(t, { default: () => C });
var o = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    c = n(100527),
    a = n(970606),
    l = n(313201),
    d = n(271383),
    s = n(430824),
    u = n(594174),
    b = n(693546),
    _ = n(305325),
    f = n(937111),
    m = n(702286),
    p = n(523924),
    g = n(981631),
    I = n(388032);
let C = function (e) {
    var t,
        n,
        { guildId: C, transitionState: N } = e,
        O = (function (e, t) {
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
    let T = (0, l.Dt)(),
        A = (0, r.e7)([f.Z], () => f.Z.getRequest(C), [C]),
        y = (0, r.e7)([s.Z], () => s.Z.getGuild(C), [C]),
        h = (0, r.e7)([u.default], () => {
            var e;
            return null == (e = u.default.getCurrentUser()) ? void 0 : e.id;
        }),
        P = (0, r.e7)([d.ZP], () => (null != h ? d.ZP.getMember(C, h) : null), [h, C]),
        j = async () => {
            var e;
            if (
                (null != (e = null == y ? void 0 : y.hasFeature(g.oNc.CLAN)) &&
                    e &&
                    (0, a.Vr)({
                        guildId: C,
                        source: c.Z.CLAN_REAPPLY
                    }),
                null == P ? void 0 : P.isPending)
            ) {
                try {
                    await b.Z.removeGuildJoinRequest(C);
                } catch (e) {
                    throw e;
                }
                O.onClose(), (0, _.hk)(C);
            } else b.Z.resetGuildJoinRequest(C);
        };
    return (0, o.jsx)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: N,
        'aria-labelledby': T,
        children: (0, o.jsx)(
            p.Z,
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
            })({}, O)),
            (n = n =
                {
                    headerId: T,
                    reapplyText: I.NW.string(I.t.I1LYVl),
                    onReapply: j,
                    confirmText: I.NW.string(I.t.BddRzc),
                    onWithdrawApplication: () => {
                        O.onClose(), null == P && (0, m.Z)();
                    },
                    rejectionReason: null == A ? void 0 : A.rejectionReason,
                    guild: y
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

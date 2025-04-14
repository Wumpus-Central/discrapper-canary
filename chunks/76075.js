t.d(n, { default: () => j });
var o = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    c = t(100527),
    l = t(970606),
    a = t(313201),
    d = t(271383),
    s = t(430824),
    u = t(594174),
    b = t(693546),
    m = t(305325),
    p = t(937111),
    f = t(702286),
    _ = t(523924),
    g = t(981631),
    C = t(388032);
let j = function (e) {
    var n,
        t,
        { guildId: j, transitionState: h } = e,
        O = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        i = {},
                        r = Object.keys(e);
                    for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (o = 0; o < r.length; o++) (t = r[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ['guildId', 'transitionState']);
    let I = (0, a.Dt)(),
        v = (0, i.e7)([p.Z], () => p.Z.getRequest(j), [j]),
        x = (0, i.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        N = (0, i.e7)([u.default], () => {
            var e;
            return null == (e = u.default.getCurrentUser()) ? void 0 : e.id;
        }),
        P = (0, i.e7)([d.ZP], () => (null != N ? d.ZP.getMember(j, N) : null), [N, j]),
        y = async () => {
            var e;
            if (
                (null != (e = null == x ? void 0 : x.hasFeature(g.oNc.CLAN)) &&
                    e &&
                    (0, l.Vr)({
                        guildId: j,
                        source: c.Z.CLAN_REAPPLY
                    }),
                null == P ? void 0 : P.isPending)
            ) {
                try {
                    await b.Z.removeGuildJoinRequest(j);
                } catch (e) {
                    throw e;
                }
                O.onClose(), (0, m.hk)(j);
            } else b.Z.resetGuildJoinRequest(j);
        };
    return (0, o.jsx)(r.Y0X, {
        size: r.CgR.DYNAMIC,
        transitionState: h,
        'aria-labelledby': I,
        children: (0, o.jsx)(
            _.Z,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        o.forEach(function (n) {
                            var o;
                            (o = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = o);
                        });
                }
                return e;
            })({}, O)),
            (t = t =
                {
                    headerId: I,
                    reapplyText: C.NW.string(C.t.I1LYVl),
                    onReapply: y,
                    confirmText: C.NW.string(C.t.BddRzc),
                    onWithdrawApplication: () => {
                        O.onClose(), null == P && (0, f.Z)();
                    },
                    rejectionReason: null == v ? void 0 : v.rejectionReason,
                    guild: x
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, o);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n)
        )
    });
};

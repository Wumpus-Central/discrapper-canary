t.d(n, { default: () => h });
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
    g = t(523924),
    _ = t(981631),
    j = t(388032);
let h = function (e) {
    var n,
        t,
        { guildId: h, transitionState: C } = e,
        v = (function (e, n) {
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
    let y = (0, a.Dt)(),
        O = (0, i.e7)([p.Z], () => p.Z.getRequest(h), [h]),
        x = (0, i.e7)([s.Z], () => s.Z.getGuild(h), [h]),
        P = (0, i.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
        }),
        k = (0, i.e7)([d.ZP], () => (null != P ? d.ZP.getMember(h, P) : null), [P, h]),
        N = async () => {
            var e;
            if (
                (null !== (e = null == x ? void 0 : x.hasFeature(_.oNc.CLAN)) &&
                    void 0 !== e &&
                    e &&
                    (0, l.Vr)({
                        guildId: h,
                        source: c.Z.CLAN_REAPPLY
                    }),
                null == k ? void 0 : k.isPending)
            ) {
                try {
                    await b.Z.removeGuildJoinRequest(h);
                } catch (e) {
                    throw e;
                }
                v.onClose(), (0, m.hk)(h);
            } else b.Z.resetGuildJoinRequest(h);
        };
    return (0, o.jsx)(r.Y0X, {
        size: r.CgR.DYNAMIC,
        transitionState: C,
        'aria-labelledby': y,
        children: (0, o.jsx)(
            g.Z,
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
            })({}, v)),
            (t = t =
                {
                    headerId: y,
                    reapplyText: j.NW.string(j.t.I1LYVl),
                    onReapply: N,
                    confirmText: j.NW.string(j.t.BddRzc),
                    onWithdrawApplication: () => {
                        v.onClose(), null == k && (0, f.Z)();
                    },
                    rejectionReason: null == O ? void 0 : O.rejectionReason,
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

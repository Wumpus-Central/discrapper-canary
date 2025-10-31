n.d(t, { Z: () => E }), n(388685);
var r = n(951288);
n(647438);
var i = n(243814),
    l = n(481060),
    a = n(846027),
    s = n(872810),
    o = n(594190),
    c = n(989941),
    u = n(173507),
    d = n(199902),
    p = n(131951),
    f = n(449224),
    m = n(358085),
    h = n(452426),
    g = n(736045),
    _ = n(186901),
    b = n(981631);
let E = {
    [b.Etm.TOGGLE_VIDEO]: {
        scope: {
            [_.Gp.ALL]: [i.x.RPC, i.x.RPC_VIDEO_WRITE],
        },
        handler() {
            let e = p.Z.isVideoEnabled();
            null != (0, g.Z)() && (e ? a.Z.setVideoEnabled(!1) : (0, u.Z)(() => a.Z.setVideoEnabled(!0), b.IlC.APP));
        },
    },
    [b.Etm.TOGGLE_SCREENSHARE]: {
        scope: {
            [_.Gp.ALL]: [i.x.RPC, i.x.RPC_SCREENSHARE_WRITE],
        },
        validation: (e) =>
            (0, h.Z)(e)
                .optional()
                .keys({ pid: e.number().optional().min(0) }),
        handler(e) {
            let {
                    args: { pid: t },
                } = e,
                i = d.Z.getCurrentUserActiveStream(),
                a = d.Z.getStreamerActiveStreamMetadata(),
                u = (0, c.Z)(o.ZP, f.Z),
                p = (0, g.Z)();
            null != p &&
                (null != t && null != a && a.pid !== t && (0, m.isWindows)()
                    ? (0, s.WH)(p.guild_id, p.id, { pid: t })
                    : null != i
                      ? (0, s.L6)(!1)
                      : null != t && (0, m.isWindows)()
                        ? (0, s.WH)(p.guild_id, p.id, { pid: t })
                        : null != u
                          ? (0, s.WH)(p.guild_id, p.id, { pid: u.pid })
                          : (0, l.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("4093"), n.e("47863")]).then(
                                    n.bind(n, 60594),
                                );
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
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
                                        })({}, t)),
                                        (i = i =
                                            {
                                                guildId: p.guild_id,
                                                analyticsLocation: b.Sbl.ACTIVITY_RPC,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n),
                                    );
                                };
                            }));
        },
    },
};

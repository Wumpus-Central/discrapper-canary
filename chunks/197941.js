n.d(t, { Z: () => O }), n(388685);
var r = n(54381);
n(473749);
var i = n(243814),
    l = n(481060),
    a = n(846027),
    o = n(872810),
    s = n(100527),
    c = n(594190),
    u = n(989941),
    d = n(173507),
    p = n(199902),
    f = n(131951),
    g = n(449224),
    h = n(358085),
    m = n(452426),
    b = n(736045),
    _ = n(186901),
    E = n(981631);
let O = {
    [E.Etm.TOGGLE_VIDEO]: {
        scope: {
            [_.Gp.ALL]: [i.x.RPC, i.x.RPC_VIDEO_WRITE],
        },
        handler() {
            let e = f.Z.isVideoEnabled();
            null != (0, b.Z)() && (e ? a.Z.setVideoEnabled(!1) : (0, d.Z)(() => a.Z.setVideoEnabled(!0), E.IlC.APP));
        },
    },
    [E.Etm.TOGGLE_SCREENSHARE]: {
        scope: {
            [_.Gp.ALL]: [i.x.RPC, i.x.RPC_SCREENSHARE_WRITE],
        },
        validation: (e) =>
            (0, m.Z)(e)
                .optional()
                .keys({ pid: e.number().optional().min(0) }),
        handler(e) {
            let {
                    args: { pid: t },
                } = e,
                i = p.Z.getCurrentUserActiveStream(),
                a = p.Z.getStreamerActiveStreamMetadata(),
                d = (0, u.Z)(c.ZP, g.Z),
                f = (0, b.Z)();
            null != f &&
                (null != t && null != a && a.pid !== t && (0, h.isWindows)()
                    ? (0, o.WH)(f.guild_id, f.id, { pid: t })
                    : null != i
                      ? (0, o.L6)(!1)
                      : null != t && (0, h.isWindows)()
                        ? (0, o.WH)(f.guild_id, f.id, { pid: t })
                        : null != d
                          ? (0, o.WH)(f.guild_id, f.id, { pid: d.pid })
                          : (0, l.ZDy)(async () => {
                                let { default: e } = await n.e("46746").then(n.bind(n, 60594));
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
                                        (i = i = { analyticsLocations: [s.Z.RPC] }),
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

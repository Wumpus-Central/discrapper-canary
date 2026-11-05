var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i),
    s = l(855986),
    r = l(834730),
    o = l(939249),
    c = l(302959),
    u = l(961272),
    d = l(587895),
    m = l(402216),
    A = l(12351),
    h = l(769015),
    p = l(329554),
    y = l(711589),
    x = l(607407),
    g = l(652215),
    f = l(792996),
    N = l(417979);
l.d(
    t,
    {},
    {
        P: function (e) {
            let {
                    stream: t,
                    streamActivity: l,
                    user: i,
                    onWatchStream: s,
                    onAction: d,
                    showHeader: A = !1,
                    wrapperClassName: h,
                } = e,
                { actionString: g, canWatch: j, channel: v } = (0, y.K)(t);
            return null == v
                ? null
                : (0, n.jsxs)("div", {
                      className: a()(N.yt, h),
                      children: [
                          A &&
                              (0, n.jsxs)("div", {
                                  className: N.mg,
                                  children: [
                                      (0, n.jsx)(r.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: f.intl.string(f.t["HV97U/"]),
                                      }),
                                      (0, n.jsx)(m.Ay, { size: m.ed.SMALL }),
                                  ],
                              }),
                          null != s
                              ? (0, n.jsxs)(o.D, {
                                    onClick: s,
                                    className: N.GE,
                                    children: [
                                        (0, n.jsx)(x.A, { className: N.oz, stream: t, noImage: !0 }),
                                        j
                                            ? (0, n.jsx)("div", {
                                                  className: N.xD,
                                                  children: (0, n.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: N.ON,
                                                      children: g,
                                                  }),
                                              })
                                            : null,
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: N.GE,
                                    children: [
                                        (0, n.jsx)(x.A, { className: N.oz, stream: t, noImage: !0 }),
                                        j
                                            ? (0, n.jsx)("div", {
                                                  className: N.xD,
                                                  children: (0, n.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: N.ON,
                                                      children: g,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: N.JN,
                              children:
                                  null != l
                                      ? (0, n.jsx)(p.A, {
                                            showHeader: !1,
                                            presenceActivity: l,
                                            userId: i.id,
                                            channel: v,
                                            applicationStream: t,
                                            onAction: d,
                                        })
                                      : (0, n.jsx)(u.A, {
                                            type: c.M.STREAM_PREVIEW,
                                            applicationStream: t,
                                            user: i,
                                            guildId: t.guildId,
                                            channelId: t.channelId,
                                            className: N.lx,
                                            onAction: d,
                                        }),
                          }),
                      ],
                  });
        },
        Z: function (e) {
            let {
                    stream: t,
                    streamActivity: l,
                    streamApplication: i,
                    user: m,
                    onWatchStream: p,
                    onAction: j,
                    showHeader: v = !1,
                    hideTip: I = !1,
                    className: T,
                } = e,
                { actionString: S, canWatch: C } = (0, y.K)(t),
                P = (0, s.bG)(
                    [d.A],
                    () => {
                        if (null != i) {
                            if (null != i.id) return d.A.getApplication(i.id);
                            else if (null != i.name) return d.A.getApplicationByName(i.name);
                        }
                        return null;
                    },
                    [i],
                ),
                b =
                    null != l && null != l.name
                        ? f.intl.formatToPlainString(f.t["4CQq9Q"], { name: l.name })
                        : f.intl.string(f.t["Jpkr/q"]),
                E = (0, n.jsxs)(n.Fragment, {
                    children: [
                        v &&
                            (0, n.jsxs)("div", {
                                className: N.WG,
                                children: [
                                    null != P && (0, n.jsx)(h.A, { game: P, className: N.lK }),
                                    (0, n.jsx)(r.E, {
                                        variant: "body-xs/semibold",
                                        color: "currentColor",
                                        children: b,
                                    }),
                                ],
                            }),
                        null != p
                            ? (0, n.jsxs)(o.D, {
                                  onClick: p,
                                  className: N.i1,
                                  children: [
                                      (0, n.jsx)(x.A, { className: N.oz, stream: t }),
                                      C
                                          ? (0, n.jsx)("div", {
                                                className: N.xD,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: N.ON,
                                                    children: S,
                                                }),
                                            })
                                          : null,
                                  ],
                              })
                            : (0, n.jsxs)("div", {
                                  className: N.i1,
                                  children: [
                                      (0, n.jsx)(x.A, { className: N.oz, stream: t }),
                                      C
                                          ? (0, n.jsx)("div", {
                                                className: N.xD,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: N.ON,
                                                    children: S,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                        (0, n.jsxs)("div", {
                            className: N.rf,
                            children: [
                                null != l
                                    ? (0, n.jsx)(c.A, {
                                          hideHeader: !0,
                                          type: c.M.STREAM_PREVIEW,
                                          activity: l,
                                          user: m,
                                          guildId: t.guildId,
                                          channelId: t.channelId,
                                          analyticsParams: {
                                              location: {
                                                  page: g.liQ.GO_LIVE_MODAL,
                                                  section: g.JJy.STREAM_VIEWER_POPOUT,
                                              },
                                          },
                                          onAction: j,
                                      })
                                    : (0, n.jsx)(u.A, {
                                          type: c.M.STREAM_PREVIEW,
                                          applicationStream: t,
                                          user: m,
                                          guildId: t.guildId,
                                          channelId: t.channelId,
                                          className: N.lx,
                                          onAction: j,
                                      }),
                                !I &&
                                    (0, n.jsx)(A.A, {
                                        type: A.A.Types.INLINE,
                                        className: N.PP,
                                        children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF),
                                    }),
                            ],
                        }),
                    ],
                });
            return (0, n.jsx)("div", {
                className: N.yt,
                children: (0, n.jsx)("div", { className: a()(N.Rh, T), children: E }),
            });
        },
    },
);

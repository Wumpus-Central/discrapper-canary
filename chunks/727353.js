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
    j = l(417979);
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
                { actionString: g, canWatch: v, channel: N } = (0, y.K)(t);
            return null == N
                ? null
                : (0, n.jsxs)("div", {
                      className: a()(j.yt, h),
                      children: [
                          A &&
                              (0, n.jsxs)("div", {
                                  className: j.mg,
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
                                    className: j.GE,
                                    children: [
                                        (0, n.jsx)(x.A, { className: j.oz, stream: t, noImage: !0 }),
                                        v
                                            ? (0, n.jsx)("div", {
                                                  className: j.xD,
                                                  children: (0, n.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: j.ON,
                                                      children: g,
                                                  }),
                                              })
                                            : null,
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: j.GE,
                                    children: [
                                        (0, n.jsx)(x.A, { className: j.oz, stream: t, noImage: !0 }),
                                        v
                                            ? (0, n.jsx)("div", {
                                                  className: j.xD,
                                                  children: (0, n.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: j.ON,
                                                      children: g,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: j.JN,
                              children:
                                  null != l
                                      ? (0, n.jsx)(p.A, {
                                            showHeader: !1,
                                            presenceActivity: l,
                                            userId: i.id,
                                            channel: N,
                                            applicationStream: t,
                                            onAction: d,
                                        })
                                      : (0, n.jsx)(u.A, {
                                            type: c.M.STREAM_PREVIEW,
                                            applicationStream: t,
                                            user: i,
                                            guildId: t.guildId,
                                            channelId: t.channelId,
                                            className: j.lx,
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
                    onAction: v,
                    showHeader: N = !1,
                    hideTip: T = !1,
                    className: I,
                } = e,
                { actionString: S, canWatch: C } = (0, y.K)(t),
                b = (0, s.bG)(
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
                P =
                    null != l && null != l.name
                        ? f.intl.formatToPlainString(f.t["4CQq9Q"], { name: l.name })
                        : f.intl.string(f.t["Jpkr/q"]),
                L = (0, n.jsxs)(n.Fragment, {
                    children: [
                        N &&
                            (0, n.jsxs)("div", {
                                className: j.WG,
                                children: [
                                    null != b && (0, n.jsx)(h.A, { game: b, className: j.lK }),
                                    (0, n.jsx)(r.E, {
                                        variant: "body-xs/semibold",
                                        color: "currentColor",
                                        children: P,
                                    }),
                                ],
                            }),
                        null != p
                            ? (0, n.jsxs)(o.D, {
                                  onClick: p,
                                  className: j.i1,
                                  children: [
                                      (0, n.jsx)(x.A, { className: j.oz, stream: t }),
                                      C
                                          ? (0, n.jsx)("div", {
                                                className: j.xD,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: j.ON,
                                                    children: S,
                                                }),
                                            })
                                          : null,
                                  ],
                              })
                            : (0, n.jsxs)("div", {
                                  className: j.i1,
                                  children: [
                                      (0, n.jsx)(x.A, { className: j.oz, stream: t }),
                                      C
                                          ? (0, n.jsx)("div", {
                                                className: j.xD,
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: j.ON,
                                                    children: S,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                        (0, n.jsxs)("div", {
                            className: j.rf,
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
                                          onAction: v,
                                      })
                                    : (0, n.jsx)(u.A, {
                                          type: c.M.STREAM_PREVIEW,
                                          applicationStream: t,
                                          user: m,
                                          guildId: t.guildId,
                                          channelId: t.channelId,
                                          className: j.lx,
                                          onAction: v,
                                      }),
                                !T &&
                                    (0, n.jsx)(A.A, {
                                        type: A.A.Types.INLINE,
                                        className: j.PP,
                                        children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF),
                                    }),
                            ],
                        }),
                    ],
                });
            return (0, n.jsx)("div", {
                className: j.yt,
                children: (0, n.jsx)("div", { className: a()(j.Rh, I), children: L }),
            });
        },
    },
);

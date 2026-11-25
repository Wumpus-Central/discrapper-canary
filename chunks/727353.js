var a = n(477900);
n(582128);
var e = n(503698),
    i = n.n(e),
    c = n(855986),
    r = n(834730),
    d = n(939249),
    t = n(302959),
    o = n(961272),
    m = n(587895),
    x = n(402216),
    u = n(12351),
    h = n(769015),
    N = n(329554),
    j = n(711589),
    A = n(607407),
    p = n(652215),
    v = n(792996),
    E = n(417979);
n.d(
    s,
    {},
    {
        P: function (l) {
            let {
                    stream: s,
                    streamActivity: n,
                    user: e,
                    onWatchStream: c,
                    onAction: m,
                    showHeader: u = !1,
                    wrapperClassName: h,
                } = l,
                { actionString: p, canWatch: I, channel: g } = (0, j.K)(s);
            return null == g
                ? null
                : (0, a.jsxs)("div", {
                      className: i()(E.yt, h),
                      children: [
                          u &&
                              (0, a.jsxs)("div", {
                                  className: E.mg,
                                  children: [
                                      (0, a.jsx)(r.E, {
                                          variant: "body-xs/medium",
                                          color: "text-muted",
                                          children: v.intl.string(v.t["HV97U/"]),
                                      }),
                                      (0, a.jsx)(x.Ay, { size: x.ed.SMALL }),
                                  ],
                              }),
                          null != c
                              ? (0, a.jsxs)(d.D, {
                                    onClick: c,
                                    className: E.GE,
                                    children: [
                                        (0, a.jsx)(A.A, { className: E.oz, stream: s, noImage: !0 }),
                                        I
                                            ? (0, a.jsx)("div", {
                                                  className: E.xD,
                                                  children: (0, a.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: E.ON,
                                                      children: p,
                                                  }),
                                              })
                                            : null,
                                    ],
                                })
                              : (0, a.jsxs)("div", {
                                    className: E.GE,
                                    children: [
                                        (0, a.jsx)(A.A, { className: E.oz, stream: s, noImage: !0 }),
                                        I
                                            ? (0, a.jsx)("div", {
                                                  className: E.xD,
                                                  children: (0, a.jsx)(r.E, {
                                                      variant: "body-sm/normal",
                                                      color: "none",
                                                      className: E.ON,
                                                      children: p,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                          (0, a.jsx)("div", {
                              className: E.JN,
                              children:
                                  null != n
                                      ? (0, a.jsx)(N.A, {
                                            showHeader: !1,
                                            presenceActivity: n,
                                            userId: e.id,
                                            channel: g,
                                            applicationStream: s,
                                            onAction: m,
                                        })
                                      : (0, a.jsx)(o.A, {
                                            type: t.M.STREAM_PREVIEW,
                                            applicationStream: s,
                                            user: e,
                                            guildId: s.guildId,
                                            channelId: s.channelId,
                                            className: E.lx,
                                            onAction: m,
                                        }),
                          }),
                      ],
                  });
        },
        Z: function (l) {
            let {
                    stream: s,
                    streamActivity: n,
                    streamApplication: e,
                    user: x,
                    onWatchStream: N,
                    onAction: I,
                    showHeader: g = !1,
                    hideTip: y = !1,
                    className: _,
                } = l,
                { actionString: b, canWatch: R } = (0, j.K)(s),
                P = (0, c.bG)(
                    [m.A],
                    () => {
                        if (null != e) {
                            if (null != e.id) return m.A.getApplication(e.id);
                            else if (null != e.name) return m.A.getApplicationByName(e.name);
                        }
                        return null;
                    },
                    [e],
                ),
                M =
                    null != n && null != n.name
                        ? v.intl.formatToPlainString(v.t["4CQq9Q"], { name: n.name })
                        : v.intl.string(v.t["Jpkr/q"]),
                O = (0, a.jsxs)(a.Fragment, {
                    children: [
                        g &&
                            (0, a.jsxs)("div", {
                                className: E.WG,
                                children: [
                                    null != P && (0, a.jsx)(h.A, { game: P, className: E.lK }),
                                    (0, a.jsx)(r.E, {
                                        variant: "body-xs/semibold",
                                        color: "currentColor",
                                        children: M,
                                    }),
                                ],
                            }),
                        null != N
                            ? (0, a.jsxs)(d.D, {
                                  onClick: N,
                                  className: E.i1,
                                  children: [
                                      (0, a.jsx)(A.A, { className: E.oz, stream: s }),
                                      R
                                          ? (0, a.jsx)("div", {
                                                className: E.xD,
                                                children: (0, a.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: E.ON,
                                                    children: b,
                                                }),
                                            })
                                          : null,
                                  ],
                              })
                            : (0, a.jsxs)("div", {
                                  className: E.i1,
                                  children: [
                                      (0, a.jsx)(A.A, { className: E.oz, stream: s }),
                                      R
                                          ? (0, a.jsx)("div", {
                                                className: E.xD,
                                                children: (0, a.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "none",
                                                    className: E.ON,
                                                    children: b,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                        (0, a.jsxs)("div", {
                            className: E.rf,
                            children: [
                                null != n
                                    ? (0, a.jsx)(t.A, {
                                          hideHeader: !0,
                                          type: t.M.STREAM_PREVIEW,
                                          activity: n,
                                          user: x,
                                          guildId: s.guildId,
                                          channelId: s.channelId,
                                          analyticsParams: {
                                              location: {
                                                  page: p.liQ.GO_LIVE_MODAL,
                                                  section: p.JJy.STREAM_VIEWER_POPOUT,
                                              },
                                          },
                                          onAction: I,
                                      })
                                    : (0, a.jsx)(o.A, {
                                          type: t.M.STREAM_PREVIEW,
                                          applicationStream: s,
                                          user: x,
                                          guildId: s.guildId,
                                          channelId: s.channelId,
                                          className: E.lx,
                                          onAction: I,
                                      }),
                                !y &&
                                    (0, a.jsx)(u.A, {
                                        type: u.A.Types.INLINE,
                                        className: E.PP,
                                        children: __OVERLAY__ ? v.intl.string(v.t.YRdw70) : v.intl.string(v.t.CCTgbF),
                                    }),
                            ],
                        }),
                    ],
                });
            return (0, a.jsx)("div", {
                className: E.yt,
                children: (0, a.jsx)("div", { className: i()(E.Rh, _), children: O }),
            });
        },
    },
);

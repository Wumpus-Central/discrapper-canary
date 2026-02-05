i.d(t, { P: () => I, Z: () => S });
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    r = i(311907),
    s = i(397927),
    o = i(302959),
    d = i(592182),
    c = i(587895),
    u = i(402216),
    m = i(12351),
    _ = i(769015),
    A = i(877315),
    g = i(607407),
    h = i(652215),
    f = i(985018),
    p = i(573073);
function S(e) {
    let {
            stream: t,
            activeStream: i,
            streamActivity: a,
            streamApplication: u,
            user: S,
            currentUserId: I,
            canWatch: x,
            unavailableReason: v,
            onWatchStream: C,
            onAction: E,
            showHeader: y = !1,
            hideTip: T = !1,
            className: N,
        } = e,
        b = (0, r.bG)([c.A], () => {
            if (null != u) {
                if (null != u.id) return c.A.getApplication(u.id);
                else if (null != u.name) return c.A.getApplicationByName(u.name);
            }
            return null;
        }, [u]),
        j =
            null != a && null != a.name
                ? f.intl.formatToPlainString(f.t["4CQq9Q"], { name: a.name })
                : f.intl.string(f.t["Jpkr/q"]),
        L = (0, n.jsxs)(n.Fragment, {
            children: [
                y &&
                    (0, n.jsxs)("div", {
                        className: p.WG,
                        children: [
                            null != b && (0, n.jsx)(_.A, { game: b, className: p.lK }),
                            (0, n.jsx)(s.Text, { variant: "text-xs/bold", color: "currentColor", children: j }),
                        ],
                    }),
                null != C
                    ? (0, n.jsxs)(s.DUT, {
                          onClick: C,
                          className: p.i1,
                          children: [
                              (0, n.jsx)(g.A, { className: p.oz, stream: t }),
                              x
                                  ? (0, n.jsx)("div", {
                                        className: p.xD,
                                        children: (0, n.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: p.ON,
                                            children: (0, A.A)(t, i, I, v),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: p.i1,
                          children: [
                              (0, n.jsx)(g.A, { className: p.oz, stream: t }),
                              x
                                  ? (0, n.jsx)("div", {
                                        className: p.xD,
                                        children: (0, n.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: p.ON,
                                            children: (0, A.A)(t, i, I, v),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, n.jsxs)("div", {
                    className: p.rf,
                    children: [
                        null != a
                            ? (0, n.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: a,
                                  user: S,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: h.liQ.GO_LIVE_MODAL, section: h.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: E,
                              })
                            : (0, n.jsx)(d.A, {
                                  type: o.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: S,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: p.lx,
                                  onAction: E,
                              }),
                        !T &&
                            (0, n.jsx)(m.A, {
                                type: m.A.Types.INLINE,
                                className: p.PP,
                                children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: p.yt,
        children: (0, n.jsx)("div", { className: l()(p.Rh, N), children: L }),
    });
}
function I(e) {
    let {
        stream: t,
        streamActivity: i,
        activeStream: a,
        user: r,
        currentUserId: c,
        canWatch: m,
        unavailableReason: _,
        onWatchStream: S,
        onAction: I,
        showHeader: x = !1,
        wrapperClassName: v,
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(p.yt, v),
        children: [
            x &&
                (0, n.jsxs)("div", {
                    className: p.mg,
                    children: [
                        (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: f.intl.string(f.t["HV97U/"]),
                        }),
                        (0, n.jsx)(u.Ay, { size: u.ed.SMALL }),
                    ],
                }),
            null != S
                ? (0, n.jsxs)(s.DUT, {
                      onClick: S,
                      className: p.i1,
                      children: [
                          (0, n.jsx)(g.A, { className: p.oz, stream: t }),
                          m
                              ? (0, n.jsx)("div", {
                                    className: p.xD,
                                    children: (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: p.ON,
                                        children: (0, A.A)(t, a, c, _),
                                    }),
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: p.i1,
                      children: [
                          (0, n.jsx)(g.A, { className: p.oz, stream: t }),
                          m
                              ? (0, n.jsx)("div", {
                                    className: p.xD,
                                    children: (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: p.ON,
                                        children: (0, A.A)(t, a, c, _),
                                    }),
                                })
                              : null,
                      ],
                  }),
            (0, n.jsx)("div", {
                className: p.rf,
                children:
                    null != i
                        ? (0, n.jsx)(o.A, {
                              hideHeader: !0,
                              type: o.M.STREAM_PREVIEW,
                              activity: i,
                              user: r,
                              guildId: t.guildId,
                              channelId: t.channelId,
                              enableUserHoverActivities: !0,
                              analyticsParams: {
                                  location: { page: h.liQ.GO_LIVE_MODAL, section: h.JJy.STREAM_VIEWER_POPOUT },
                              },
                              onAction: I,
                          })
                        : (0, n.jsx)(d.A, {
                              type: o.M.STREAM_PREVIEW,
                              applicationStream: t,
                              user: r,
                              guildId: t.guildId,
                              channelId: t.channelId,
                              className: p.lx,
                              onAction: I,
                          }),
            }),
        ],
    });
}

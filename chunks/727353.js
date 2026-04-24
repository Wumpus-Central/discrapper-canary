l.d(t, { P: () => N, Z: () => T });
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    s = l(17928),
    r = l(834730),
    c = l(939249),
    o = l(302959),
    u = l(35903),
    d = l(587895),
    m = l(402216),
    A = l(12351),
    p = l(137177),
    h = l(329554),
    g = l(734057),
    x = l(877315),
    y = l(607407),
    f = l(652215),
    v = l(985018),
    S = l(380668),
    j = l(824078);
function T(e) {
    let {
            stream: t,
            activeStream: l,
            streamActivity: i,
            streamApplication: m,
            user: h,
            currentUserId: g,
            canWatch: T,
            unavailableReason: N,
            onWatchStream: I,
            onAction: C,
            showHeader: b = !1,
            hideTip: E = !1,
            className: _,
        } = e,
        P = (0, s.bG)([d.A], () => {
            if (null != m) {
                if (null != m.id) return d.A.getApplication(m.id);
                else if (null != m.name) return d.A.getApplicationByName(m.name);
            }
            return null;
        }, [m]),
        O =
            null != i && null != i.name
                ? v.intl.formatToPlainString(v.t["4CQq9Q"], { name: i.name })
                : v.intl.string(v.t["Jpkr/q"]),
        L = (0, n.jsxs)(n.Fragment, {
            children: [
                b &&
                    (0, n.jsxs)("div", {
                        className: S.WG,
                        children: [
                            null != P && (0, n.jsx)(p.A, { game: P, className: S.lK }),
                            (0, n.jsx)(r.E, { variant: "text-xs/bold", color: "currentColor", children: O }),
                        ],
                    }),
                null != I
                    ? (0, n.jsxs)(c.D, {
                          onClick: I,
                          className: S.i1,
                          children: [
                              (0, n.jsx)(y.A, { className: S.oz, stream: t }),
                              T
                                  ? (0, n.jsx)("div", {
                                        className: S.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: S.ON,
                                            children: (0, x.A)(t, l, g, N),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: S.i1,
                          children: [
                              (0, n.jsx)(y.A, { className: S.oz, stream: t }),
                              T
                                  ? (0, n.jsx)("div", {
                                        className: S.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: S.ON,
                                            children: (0, x.A)(t, l, g, N),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, n.jsxs)("div", {
                    className: S.rf,
                    children: [
                        null != i
                            ? (0, n.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: i,
                                  user: h,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: f.liQ.GO_LIVE_MODAL, section: f.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: C,
                              })
                            : (0, n.jsx)(u.A, {
                                  type: o.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: h,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: S.lx,
                                  onAction: C,
                              }),
                        !E &&
                            (0, n.jsx)(A.A, {
                                type: A.A.Types.INLINE,
                                className: S.PP,
                                children: __OVERLAY__ ? v.intl.string(v.t.YRdw70) : v.intl.string(v.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: S.yt,
        children: (0, n.jsx)("div", { className: a()(j.popover, S.Rh, _), children: L }),
    });
}
function N(e) {
    let {
            stream: t,
            streamActivity: l,
            activeStream: i,
            user: d,
            currentUserId: A,
            canWatch: p,
            unavailableReason: f,
            onWatchStream: j,
            onAction: T,
            showHeader: N = !1,
            wrapperClassName: I,
        } = e,
        C = (0, s.bG)([g.A], () => g.A.getChannel(t.channelId));
    return null == C
        ? null
        : (0, n.jsxs)("div", {
              className: a()(S.yt, I),
              children: [
                  N &&
                      (0, n.jsxs)("div", {
                          className: S.mg,
                          children: [
                              (0, n.jsx)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: v.intl.string(v.t["HV97U/"]),
                              }),
                              (0, n.jsx)(m.Ay, { size: m.ed.SMALL }),
                          ],
                      }),
                  null != j
                      ? (0, n.jsxs)(c.D, {
                            onClick: j,
                            className: S.GE,
                            children: [
                                (0, n.jsx)(y.A, { className: S.oz, stream: t }),
                                p
                                    ? (0, n.jsx)("div", {
                                          className: S.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: S.ON,
                                              children: (0, x.A)(t, i, A, f),
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : (0, n.jsxs)("div", {
                            className: S.GE,
                            children: [
                                (0, n.jsx)(y.A, { className: S.oz, stream: t }),
                                p
                                    ? (0, n.jsx)("div", {
                                          className: S.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: S.ON,
                                              children: (0, x.A)(t, i, A, f),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                  (0, n.jsx)("div", {
                      className: S.JN,
                      children:
                          null != l
                              ? (0, n.jsx)(h.A, {
                                    showHeader: !1,
                                    presenceActivity: l,
                                    userId: d.id,
                                    channel: C,
                                    applicationStream: t,
                                    onAction: T,
                                })
                              : (0, n.jsx)(u.A, {
                                    type: o.M.STREAM_PREVIEW,
                                    applicationStream: t,
                                    user: d,
                                    guildId: t.guildId,
                                    channelId: t.channelId,
                                    className: S.lx,
                                    onAction: T,
                                }),
                  }),
              ],
          });
}

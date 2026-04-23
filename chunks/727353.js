n.d(t, { P: () => v, Z: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(834730),
    o = n(939249),
    c = n(302959),
    d = n(592182),
    u = n(587895),
    h = n(402216),
    m = n(12351),
    A = n(769015),
    g = n(329554),
    _ = n(734057),
    p = n(877315),
    f = n(607407),
    E = n(652215),
    C = n(985018),
    x = n(380668),
    S = n(824078);
function I(e) {
    let {
            stream: t,
            activeStream: n,
            streamActivity: l,
            streamApplication: h,
            user: g,
            currentUserId: _,
            canWatch: I,
            unavailableReason: v,
            onWatchStream: N,
            onAction: T,
            showHeader: y = !1,
            hideTip: b = !1,
            className: j,
        } = e,
        R = (0, s.bG)([u.A], () => {
            if (null != h) {
                if (null != h.id) return u.A.getApplication(h.id);
                else if (null != h.name) return u.A.getApplicationByName(h.name);
            }
            return null;
        }, [h]),
        M =
            null != l && null != l.name
                ? C.intl.formatToPlainString(C.t["4CQq9Q"], { name: l.name })
                : C.intl.string(C.t["Jpkr/q"]),
        L = (0, i.jsxs)(i.Fragment, {
            children: [
                y &&
                    (0, i.jsxs)("div", {
                        className: x.WG,
                        children: [
                            null != R && (0, i.jsx)(A.A, { game: R, className: x.lK }),
                            (0, i.jsx)(r.E, { variant: "text-xs/bold", color: "currentColor", children: M }),
                        ],
                    }),
                null != N
                    ? (0, i.jsxs)(o.D, {
                          onClick: N,
                          className: x.i1,
                          children: [
                              (0, i.jsx)(f.A, { className: x.oz, stream: t }),
                              I
                                  ? (0, i.jsx)("div", {
                                        className: x.xD,
                                        children: (0, i.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: x.ON,
                                            children: (0, p.A)(t, n, _, v),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: x.i1,
                          children: [
                              (0, i.jsx)(f.A, { className: x.oz, stream: t }),
                              I
                                  ? (0, i.jsx)("div", {
                                        className: x.xD,
                                        children: (0, i.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: x.ON,
                                            children: (0, p.A)(t, n, _, v),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, i.jsxs)("div", {
                    className: x.rf,
                    children: [
                        null != l
                            ? (0, i.jsx)(c.A, {
                                  hideHeader: !0,
                                  type: c.M.STREAM_PREVIEW,
                                  activity: l,
                                  user: g,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: E.liQ.GO_LIVE_MODAL, section: E.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: T,
                              })
                            : (0, i.jsx)(d.A, {
                                  type: c.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: g,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: x.lx,
                                  onAction: T,
                              }),
                        !b &&
                            (0, i.jsx)(m.A, {
                                type: m.A.Types.INLINE,
                                className: x.PP,
                                children: __OVERLAY__ ? C.intl.string(C.t.YRdw70) : C.intl.string(C.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: x.yt,
        children: (0, i.jsx)("div", { className: a()(S.popover, x.Rh, j), children: L }),
    });
}
function v(e) {
    let {
            stream: t,
            streamActivity: n,
            activeStream: l,
            user: u,
            currentUserId: m,
            canWatch: A,
            unavailableReason: E,
            onWatchStream: S,
            onAction: I,
            showHeader: v = !1,
            wrapperClassName: N,
        } = e,
        T = (0, s.bG)([_.A], () => _.A.getChannel(t.channelId));
    return null == T
        ? null
        : (0, i.jsxs)("div", {
              className: a()(x.yt, N),
              children: [
                  v &&
                      (0, i.jsxs)("div", {
                          className: x.mg,
                          children: [
                              (0, i.jsx)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: C.intl.string(C.t["HV97U/"]),
                              }),
                              (0, i.jsx)(h.Ay, { size: h.ed.SMALL }),
                          ],
                      }),
                  null != S
                      ? (0, i.jsxs)(o.D, {
                            onClick: S,
                            className: x.GE,
                            children: [
                                (0, i.jsx)(f.A, { className: x.oz, stream: t }),
                                A
                                    ? (0, i.jsx)("div", {
                                          className: x.xD,
                                          children: (0, i.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: x.ON,
                                              children: (0, p.A)(t, l, m, E),
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : (0, i.jsxs)("div", {
                            className: x.GE,
                            children: [
                                (0, i.jsx)(f.A, { className: x.oz, stream: t }),
                                A
                                    ? (0, i.jsx)("div", {
                                          className: x.xD,
                                          children: (0, i.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: x.ON,
                                              children: (0, p.A)(t, l, m, E),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                  (0, i.jsx)("div", {
                      className: x.JN,
                      children:
                          null != n
                              ? (0, i.jsx)(g.A, {
                                    showHeader: !1,
                                    presenceActivity: n,
                                    userId: u.id,
                                    channel: T,
                                    applicationStream: t,
                                    onAction: I,
                                })
                              : (0, i.jsx)(d.A, {
                                    type: c.M.STREAM_PREVIEW,
                                    applicationStream: t,
                                    user: u,
                                    guildId: t.guildId,
                                    channelId: t.channelId,
                                    className: x.lx,
                                    onAction: I,
                                }),
                  }),
              ],
          });
}

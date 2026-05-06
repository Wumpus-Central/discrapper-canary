l.d(t, { P: () => I, Z: () => C });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(17928),
    r = l(834730),
    c = l(939249),
    o = l(302959),
    d = l(35903),
    u = l(587895),
    m = l(402216),
    A = l(12351),
    h = l(137177),
    p = l(329554),
    x = l(734057),
    g = l(652896),
    y = l(279250),
    f = l(652215),
    v = l(375708);
function j(e, t, l, n) {
    return null == t || t.state === f.XYD.ENDED || (0, g._z)(t) !== (0, g._z)(e)
        ? (0, y.CT)(n)
        : t.ownerId === l
          ? v.intl.string(v.t.XvBdeT)
          : v.intl.string(v.t["JH1SJ+"]);
}
var N = l(607407),
    T = l(380668),
    S = l(824078);
function C(e) {
    let {
            stream: t,
            activeStream: l,
            streamActivity: i,
            streamApplication: m,
            user: p,
            currentUserId: x,
            canWatch: g,
            unavailableReason: y,
            onWatchStream: C,
            onAction: I,
            showHeader: P = !1,
            hideTip: E = !1,
            className: _,
        } = e,
        b = (0, a.bG)([u.A], () => {
            if (null != m) {
                if (null != m.id) return u.A.getApplication(m.id);
                else if (null != m.name) return u.A.getApplicationByName(m.name);
            }
            return null;
        }, [m]),
        L =
            null != i && null != i.name
                ? v.intl.formatToPlainString(v.t["4CQq9Q"], { name: i.name })
                : v.intl.string(v.t["Jpkr/q"]),
        O = (0, n.jsxs)(n.Fragment, {
            children: [
                P &&
                    (0, n.jsxs)("div", {
                        className: T.WG,
                        children: [
                            null != b && (0, n.jsx)(h.A, { game: b, className: T.lK }),
                            (0, n.jsx)(r.E, { variant: "text-xs/bold", color: "currentColor", children: L }),
                        ],
                    }),
                null != C
                    ? (0, n.jsxs)(c.D, {
                          onClick: C,
                          className: T.i1,
                          children: [
                              (0, n.jsx)(N.A, { className: T.oz, stream: t }),
                              g
                                  ? (0, n.jsx)("div", {
                                        className: T.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: T.ON,
                                            children: j(t, l, x, y),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: T.i1,
                          children: [
                              (0, n.jsx)(N.A, { className: T.oz, stream: t }),
                              g
                                  ? (0, n.jsx)("div", {
                                        className: T.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: T.ON,
                                            children: j(t, l, x, y),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, n.jsxs)("div", {
                    className: T.rf,
                    children: [
                        null != i
                            ? (0, n.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: i,
                                  user: p,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: f.liQ.GO_LIVE_MODAL, section: f.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: I,
                              })
                            : (0, n.jsx)(d.A, {
                                  type: o.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: p,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: T.lx,
                                  onAction: I,
                              }),
                        !E &&
                            (0, n.jsx)(A.A, {
                                type: A.A.Types.INLINE,
                                className: T.PP,
                                children: __OVERLAY__ ? v.intl.string(v.t.YRdw70) : v.intl.string(v.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: T.yt,
        children: (0, n.jsx)("div", { className: s()(S.popover, T.Rh, _), children: O }),
    });
}
function I(e) {
    let {
            stream: t,
            streamActivity: l,
            activeStream: i,
            user: u,
            currentUserId: A,
            canWatch: h,
            unavailableReason: g,
            onWatchStream: y,
            onAction: f,
            showHeader: S = !1,
            wrapperClassName: C,
        } = e,
        I = (0, a.bG)([x.A], () => x.A.getChannel(t.channelId));
    return null == I
        ? null
        : (0, n.jsxs)("div", {
              className: s()(T.yt, C),
              children: [
                  S &&
                      (0, n.jsxs)("div", {
                          className: T.mg,
                          children: [
                              (0, n.jsx)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: v.intl.string(v.t["HV97U/"]),
                              }),
                              (0, n.jsx)(m.Ay, { size: m.ed.SMALL }),
                          ],
                      }),
                  null != y
                      ? (0, n.jsxs)(c.D, {
                            onClick: y,
                            className: T.GE,
                            children: [
                                (0, n.jsx)(N.A, { className: T.oz, stream: t }),
                                h
                                    ? (0, n.jsx)("div", {
                                          className: T.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: T.ON,
                                              children: j(t, i, A, g),
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : (0, n.jsxs)("div", {
                            className: T.GE,
                            children: [
                                (0, n.jsx)(N.A, { className: T.oz, stream: t }),
                                h
                                    ? (0, n.jsx)("div", {
                                          className: T.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: T.ON,
                                              children: j(t, i, A, g),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                  (0, n.jsx)("div", {
                      className: T.JN,
                      children:
                          null != l
                              ? (0, n.jsx)(p.A, {
                                    showHeader: !1,
                                    presenceActivity: l,
                                    userId: u.id,
                                    channel: I,
                                    applicationStream: t,
                                    onAction: f,
                                })
                              : (0, n.jsx)(d.A, {
                                    type: o.M.STREAM_PREVIEW,
                                    applicationStream: t,
                                    user: u,
                                    guildId: t.guildId,
                                    channelId: t.channelId,
                                    className: T.lx,
                                    onAction: f,
                                }),
                  }),
              ],
          });
}

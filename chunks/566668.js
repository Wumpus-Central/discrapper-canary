i.d(t, { P: () => C, Z: () => T });
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(17928),
    r = i(834730),
    c = i(939249),
    o = i(302959),
    d = i(35903),
    u = i(587895),
    m = i(402216),
    A = i(12351),
    h = i(137177),
    p = i(329554),
    g = i(734057),
    x = i(652896),
    f = i(279250),
    v = i(652215),
    I = i(375708);
function y(e, t, i, l) {
    return null == t || t.state === v.XYD.ENDED || (0, x._z)(t) !== (0, x._z)(e)
        ? (0, f.CT)(l)
        : t.ownerId === i
          ? I.intl.string(I.t.XvBdeT)
          : I.intl.string(I.t["JH1SJ+"]);
}
var S = i(607407),
    N = i(380668),
    j = i(824078);
function T(e) {
    let {
            stream: t,
            activeStream: i,
            streamActivity: n,
            streamApplication: m,
            user: p,
            currentUserId: g,
            canWatch: x,
            unavailableReason: f,
            onWatchStream: T,
            onAction: C,
            showHeader: E = !1,
            hideTip: _ = !1,
            className: b,
        } = e,
        P = (0, a.bG)([u.A], () => {
            if (null != m) {
                if (null != m.id) return u.A.getApplication(m.id);
                else if (null != m.name) return u.A.getApplicationByName(m.name);
            }
            return null;
        }, [m]),
        O =
            null != n && null != n.name
                ? I.intl.formatToPlainString(I.t["4CQq9Q"], { name: n.name })
                : I.intl.string(I.t["Jpkr/q"]),
        G = (0, l.jsxs)(l.Fragment, {
            children: [
                E &&
                    (0, l.jsxs)("div", {
                        className: N.WG,
                        children: [
                            null != P && (0, l.jsx)(h.A, { game: P, className: N.lK }),
                            (0, l.jsx)(r.E, { variant: "text-xs/bold", color: "currentColor", children: O }),
                        ],
                    }),
                null != T
                    ? (0, l.jsxs)(c.D, {
                          onClick: T,
                          className: N.i1,
                          children: [
                              (0, l.jsx)(S.A, { className: N.oz, stream: t }),
                              x
                                  ? (0, l.jsx)("div", {
                                        className: N.xD,
                                        children: (0, l.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: N.ON,
                                            children: y(t, i, g, f),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: N.i1,
                          children: [
                              (0, l.jsx)(S.A, { className: N.oz, stream: t }),
                              x
                                  ? (0, l.jsx)("div", {
                                        className: N.xD,
                                        children: (0, l.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: N.ON,
                                            children: y(t, i, g, f),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, l.jsxs)("div", {
                    className: N.rf,
                    children: [
                        null != n
                            ? (0, l.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: n,
                                  user: p,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: v.liQ.GO_LIVE_MODAL, section: v.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: C,
                              })
                            : (0, l.jsx)(d.A, {
                                  type: o.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: p,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: N.lx,
                                  onAction: C,
                              }),
                        !_ &&
                            (0, l.jsx)(A.A, {
                                type: A.A.Types.INLINE,
                                className: N.PP,
                                children: __OVERLAY__ ? I.intl.string(I.t.YRdw70) : I.intl.string(I.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: N.yt,
        children: (0, l.jsx)("div", { className: s()(j.popover, N.Rh, b), children: G }),
    });
}
function C(e) {
    let {
            stream: t,
            streamActivity: i,
            activeStream: n,
            user: u,
            currentUserId: A,
            canWatch: h,
            unavailableReason: x,
            onWatchStream: f,
            onAction: v,
            showHeader: j = !1,
            wrapperClassName: T,
        } = e,
        C = (0, a.bG)([g.A], () => g.A.getChannel(t.channelId));
    return null == C
        ? null
        : (0, l.jsxs)("div", {
              className: s()(N.yt, T),
              children: [
                  j &&
                      (0, l.jsxs)("div", {
                          className: N.mg,
                          children: [
                              (0, l.jsx)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: I.intl.string(I.t["HV97U/"]),
                              }),
                              (0, l.jsx)(m.Ay, { size: m.ed.SMALL }),
                          ],
                      }),
                  null != f
                      ? (0, l.jsxs)(c.D, {
                            onClick: f,
                            className: N.GE,
                            children: [
                                (0, l.jsx)(S.A, { className: N.oz, stream: t }),
                                h
                                    ? (0, l.jsx)("div", {
                                          className: N.xD,
                                          children: (0, l.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: N.ON,
                                              children: y(t, n, A, x),
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : (0, l.jsxs)("div", {
                            className: N.GE,
                            children: [
                                (0, l.jsx)(S.A, { className: N.oz, stream: t }),
                                h
                                    ? (0, l.jsx)("div", {
                                          className: N.xD,
                                          children: (0, l.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: N.ON,
                                              children: y(t, n, A, x),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                  (0, l.jsx)("div", {
                      className: N.JN,
                      children:
                          null != i
                              ? (0, l.jsx)(p.A, {
                                    showHeader: !1,
                                    presenceActivity: i,
                                    userId: u.id,
                                    channel: C,
                                    applicationStream: t,
                                    onAction: v,
                                })
                              : (0, l.jsx)(d.A, {
                                    type: o.M.STREAM_PREVIEW,
                                    applicationStream: t,
                                    user: u,
                                    guildId: t.guildId,
                                    channelId: t.channelId,
                                    className: N.lx,
                                    onAction: v,
                                }),
                  }),
              ],
          });
}

l.d(t, { P: () => N, Z: () => v });
var n = l(477900);
l(582128);
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
    p = l(769015),
    h = l(329554),
    x = l(711589),
    g = l(607407),
    y = l(652215),
    f = l(375708),
    j = l(417979);
function v(e) {
    let {
            stream: t,
            streamActivity: l,
            streamApplication: i,
            user: m,
            onWatchStream: h,
            onAction: v,
            showHeader: N = !1,
            hideTip: T = !1,
            className: S,
        } = e,
        { actionString: I, canWatch: C } = (0, x.K)(t),
        P = (0, a.bG)([u.A], () => {
            if (null != i) {
                if (null != i.id) return u.A.getApplication(i.id);
                else if (null != i.name) return u.A.getApplicationByName(i.name);
            }
            return null;
        }, [i]),
        E =
            null != l && null != l.name
                ? f.intl.formatToPlainString(f.t["4CQq9Q"], { name: l.name })
                : f.intl.string(f.t["Jpkr/q"]),
        b = (0, n.jsxs)(n.Fragment, {
            children: [
                N &&
                    (0, n.jsxs)("div", {
                        className: j.WG,
                        children: [
                            null != P && (0, n.jsx)(p.A, { game: P, className: j.lK }),
                            (0, n.jsx)(r.E, { variant: "text-xs/bold", color: "currentColor", children: E }),
                        ],
                    }),
                null != h
                    ? (0, n.jsxs)(c.D, {
                          onClick: h,
                          className: j.i1,
                          children: [
                              (0, n.jsx)(g.A, { className: j.oz, stream: t }),
                              C
                                  ? (0, n.jsx)("div", {
                                        className: j.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: j.ON,
                                            children: I,
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: j.i1,
                          children: [
                              (0, n.jsx)(g.A, { className: j.oz, stream: t }),
                              C
                                  ? (0, n.jsx)("div", {
                                        className: j.xD,
                                        children: (0, n.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: j.ON,
                                            children: I,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, n.jsxs)("div", {
                    className: j.rf,
                    children: [
                        null != l
                            ? (0, n.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: l,
                                  user: m,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: { page: y.liQ.GO_LIVE_MODAL, section: y.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: v,
                              })
                            : (0, n.jsx)(d.A, {
                                  type: o.M.STREAM_PREVIEW,
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
        children: (0, n.jsx)("div", { className: s()(j.Rh, S), children: b }),
    });
}
function N(e) {
    let {
            stream: t,
            streamActivity: l,
            user: i,
            onWatchStream: a,
            onAction: u,
            showHeader: A = !1,
            wrapperClassName: p,
        } = e,
        { actionString: y, canWatch: v, channel: N } = (0, x.K)(t);
    return null == N
        ? null
        : (0, n.jsxs)("div", {
              className: s()(j.yt, p),
              children: [
                  A &&
                      (0, n.jsxs)("div", {
                          className: j.mg,
                          children: [
                              (0, n.jsx)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: f.intl.string(f.t["HV97U/"]),
                              }),
                              (0, n.jsx)(m.Ay, { size: m.ed.SMALL }),
                          ],
                      }),
                  null != a
                      ? (0, n.jsxs)(c.D, {
                            onClick: a,
                            className: j.GE,
                            children: [
                                (0, n.jsx)(g.A, { className: j.oz, stream: t }),
                                v
                                    ? (0, n.jsx)("div", {
                                          className: j.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: j.ON,
                                              children: y,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : (0, n.jsxs)("div", {
                            className: j.GE,
                            children: [
                                (0, n.jsx)(g.A, { className: j.oz, stream: t }),
                                v
                                    ? (0, n.jsx)("div", {
                                          className: j.xD,
                                          children: (0, n.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              color: "none",
                                              className: j.ON,
                                              children: y,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                  (0, n.jsx)("div", {
                      className: j.JN,
                      children:
                          null != l
                              ? (0, n.jsx)(h.A, {
                                    showHeader: !1,
                                    presenceActivity: l,
                                    userId: i.id,
                                    channel: N,
                                    applicationStream: t,
                                    onAction: u,
                                })
                              : (0, n.jsx)(d.A, {
                                    type: o.M.STREAM_PREVIEW,
                                    applicationStream: t,
                                    user: i,
                                    guildId: t.guildId,
                                    channelId: t.channelId,
                                    className: j.lx,
                                    onAction: u,
                                }),
                  }),
              ],
          });
}

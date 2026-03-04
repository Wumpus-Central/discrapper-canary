n.d(e, { P: () => S, Z: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(302959),
    d = n(592182),
    u = n(587895),
    c = n(402216),
    A = n(12351),
    p = n(769015),
    m = n(877315),
    h = n(607407),
    g = n(652215),
    f = n(985018),
    E = n(573073);
function C(t) {
    let {
            stream: e,
            activeStream: n,
            streamActivity: l,
            streamApplication: c,
            user: C,
            currentUserId: S,
            canWatch: T,
            unavailableReason: v,
            onWatchStream: y,
            onAction: x,
            showHeader: N = !1,
            hideTip: _ = !1,
            className: I,
        } = t,
        j = (0, a.bG)([u.A], () => {
            if (null != c) {
                if (null != c.id) return u.A.getApplication(c.id);
                else if (null != c.name) return u.A.getApplicationByName(c.name);
            }
            return null;
        }, [c]),
        P =
            null != l && null != l.name
                ? f.intl.formatToPlainString(f.t["4CQq9Q"], { name: l.name })
                : f.intl.string(f.t["Jpkr/q"]),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                N &&
                    (0, i.jsxs)("div", {
                        className: E.WG,
                        children: [
                            null != j && (0, i.jsx)(p.A, { game: j, className: E.lK }),
                            (0, i.jsx)(s.Text, { variant: "text-xs/bold", color: "currentColor", children: P }),
                        ],
                    }),
                null != y
                    ? (0, i.jsxs)(s.DUT, {
                          onClick: y,
                          className: E.i1,
                          children: [
                              (0, i.jsx)(h.A, { className: E.oz, stream: e }),
                              T
                                  ? (0, i.jsx)("div", {
                                        className: E.xD,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: E.ON,
                                            children: (0, m.A)(e, n, S, v),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: E.i1,
                          children: [
                              (0, i.jsx)(h.A, { className: E.oz, stream: e }),
                              T
                                  ? (0, i.jsx)("div", {
                                        className: E.xD,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: E.ON,
                                            children: (0, m.A)(e, n, S, v),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, i.jsxs)("div", {
                    className: E.rf,
                    children: [
                        null != l
                            ? (0, i.jsx)(o.A, {
                                  hideHeader: !0,
                                  type: o.M.STREAM_PREVIEW,
                                  activity: l,
                                  user: C,
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  analyticsParams: {
                                      location: { page: g.liQ.GO_LIVE_MODAL, section: g.JJy.STREAM_VIEWER_POPOUT },
                                  },
                                  onAction: x,
                              })
                            : (0, i.jsx)(d.A, {
                                  type: o.M.STREAM_PREVIEW,
                                  applicationStream: e,
                                  user: C,
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  className: E.lx,
                                  onAction: x,
                              }),
                        !_ &&
                            (0, i.jsx)(A.A, {
                                type: A.A.Types.INLINE,
                                className: E.PP,
                                children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: E.yt,
        children: (0, i.jsx)("div", { className: r()(E.Rh, I), children: U }),
    });
}
function S(t) {
    let {
        stream: e,
        streamActivity: n,
        activeStream: l,
        user: a,
        currentUserId: u,
        canWatch: A,
        unavailableReason: p,
        onWatchStream: C,
        onAction: S,
        showHeader: T = !1,
        wrapperClassName: v,
    } = t;
    return (0, i.jsxs)("div", {
        className: r()(E.yt, v),
        children: [
            T &&
                (0, i.jsxs)("div", {
                    className: E.mg,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: f.intl.string(f.t["HV97U/"]),
                        }),
                        (0, i.jsx)(c.Ay, { size: c.ed.SMALL }),
                    ],
                }),
            null != C
                ? (0, i.jsxs)(s.DUT, {
                      onClick: C,
                      className: E.GE,
                      children: [
                          (0, i.jsx)(h.A, { className: E.oz, stream: e }),
                          A
                              ? (0, i.jsx)("div", {
                                    className: E.xD,
                                    children: (0, i.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: E.ON,
                                        children: (0, m.A)(e, l, u, p),
                                    }),
                                })
                              : null,
                      ],
                  })
                : (0, i.jsxs)("div", {
                      className: E.GE,
                      children: [
                          (0, i.jsx)(h.A, { className: E.oz, stream: e }),
                          A
                              ? (0, i.jsx)("div", {
                                    className: E.xD,
                                    children: (0, i.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: E.ON,
                                        children: (0, m.A)(e, l, u, p),
                                    }),
                                })
                              : null,
                      ],
                  }),
            (0, i.jsx)("div", {
                className: E.JN,
                children:
                    null != n
                        ? (0, i.jsx)(o.A, {
                              hideHeader: !0,
                              type: o.M.STREAM_PREVIEW,
                              activity: n,
                              user: a,
                              guildId: e.guildId,
                              channelId: e.channelId,
                              enableUserHoverActivities: !0,
                              analyticsParams: {
                                  location: { page: g.liQ.GO_LIVE_MODAL, section: g.JJy.STREAM_VIEWER_POPOUT },
                              },
                              onAction: S,
                          })
                        : (0, i.jsx)(d.A, {
                              type: o.M.STREAM_PREVIEW,
                              applicationStream: e,
                              user: a,
                              guildId: e.guildId,
                              channelId: e.channelId,
                              className: E.lx,
                              onAction: S,
                          }),
            }),
        ],
    });
}

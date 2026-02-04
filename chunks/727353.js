n.d(t, {
    P: () => _,
    Z: () => A,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    o = n(397927),
    s = n(302959),
    c = n(592182),
    u = n(587895),
    d = n(402216),
    f = n(12351),
    p = n(769015),
    m = n(877315),
    g = n(607407),
    y = n(652215),
    b = n(985018),
    h = n(573073);

function A(e) {
    let {
            stream: t,
            activeStream: n,
            streamActivity: i,
            streamApplication: d,
            user: A,
            currentUserId: _,
            canWatch: v,
            unavailableReason: O,
            onWatchStream: S,
            onAction: j,
            showHeader: I = !1,
            hideTip: x = !1,
            className: E,
        } = e,
        P = (0, a.bG)([u.A], () => {
            if (null != d) {
                if (null != d.id) return u.A.getApplication(d.id);
                else if (null != d.name) return u.A.getApplicationByName(d.name);
            }
            return null;
        }, [d]),
        C =
            null != i && null != i.name
                ? b.intl.formatToPlainString(b.t["4CQq9Q"], {
                      name: i.name,
                  })
                : b.intl.string(b.t["Jpkr/q"]),
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                I &&
                    (0, r.jsxs)("div", {
                        className: h.WG,
                        children: [
                            null != P &&
                                (0, r.jsx)(p.A, {
                                    game: P,
                                    className: h.lK,
                                }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "currentColor",
                                children: C,
                            }),
                        ],
                    }),
                null != S
                    ? (0, r.jsxs)(o.DUT, {
                          onClick: S,
                          className: h.i1,
                          children: [
                              (0, r.jsx)(g.A, {
                                  className: h.oz,
                                  stream: t,
                              }),
                              v
                                  ? (0, r.jsx)("div", {
                                        className: h.xD,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: h.ON,
                                            children: (0, m.A)(t, n, _, O),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: h.i1,
                          children: [
                              (0, r.jsx)(g.A, {
                                  className: h.oz,
                                  stream: t,
                              }),
                              v
                                  ? (0, r.jsx)("div", {
                                        className: h.xD,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: h.ON,
                                            children: (0, m.A)(t, n, _, O),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, r.jsxs)("div", {
                    className: h.rf,
                    children: [
                        null != i
                            ? (0, r.jsx)(s.A, {
                                  hideHeader: !0,
                                  type: s.M.STREAM_PREVIEW,
                                  activity: i,
                                  user: A,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: {
                                          page: y.liQ.GO_LIVE_MODAL,
                                          section: y.JJy.STREAM_VIEWER_POPOUT,
                                      },
                                  },
                                  onAction: j,
                              })
                            : (0, r.jsx)(c.A, {
                                  type: s.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: A,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: h.lx,
                                  onAction: j,
                              }),
                        !x &&
                            (0, r.jsx)(f.A, {
                                type: f.A.Types.INLINE,
                                className: h.PP,
                                children: __OVERLAY__ ? b.intl.string(b.t.YRdw70) : b.intl.string(b.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: h.yt,
        children: (0, r.jsx)("div", {
            className: l()(h.Rh, E),
            children: T,
        }),
    });
}

function _(e) {
    let {
        stream: t,
        streamActivity: n,
        activeStream: i,
        user: a,
        currentUserId: u,
        canWatch: f,
        unavailableReason: p,
        onWatchStream: A,
        onAction: _,
        showHeader: v = !1,
        wrapperClassName: O,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(h.yt, O),
        children: [
            v &&
                (0, r.jsxs)("div", {
                    className: h.mg,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t["HV97U/"]),
                        }),
                        (0, r.jsx)(d.Ay, {
                            size: d.ed.SMALL,
                        }),
                    ],
                }),
            null != A
                ? (0, r.jsxs)(o.DUT, {
                      onClick: A,
                      className: h.i1,
                      children: [
                          (0, r.jsx)(g.A, {
                              className: h.oz,
                              stream: t,
                          }),
                          f
                              ? (0, r.jsx)("div", {
                                    className: h.xD,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: h.ON,
                                        children: (0, m.A)(t, i, u, p),
                                    }),
                                })
                              : null,
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: h.i1,
                      children: [
                          (0, r.jsx)(g.A, {
                              className: h.oz,
                              stream: t,
                          }),
                          f
                              ? (0, r.jsx)("div", {
                                    className: h.xD,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        className: h.ON,
                                        children: (0, m.A)(t, i, u, p),
                                    }),
                                })
                              : null,
                      ],
                  }),
            (0, r.jsx)("div", {
                className: h.rf,
                children:
                    null != n
                        ? (0, r.jsx)(s.A, {
                              hideHeader: !0,
                              type: s.M.STREAM_PREVIEW,
                              activity: n,
                              user: a,
                              guildId: t.guildId,
                              channelId: t.channelId,
                              enableUserHoverActivities: !0,
                              analyticsParams: {
                                  location: {
                                      page: y.liQ.GO_LIVE_MODAL,
                                      section: y.JJy.STREAM_VIEWER_POPOUT,
                                  },
                              },
                              onAction: _,
                          })
                        : (0, r.jsx)(c.A, {
                              type: s.M.STREAM_PREVIEW,
                              applicationStream: t,
                              user: a,
                              guildId: t.guildId,
                              channelId: t.channelId,
                              className: h.lx,
                              onAction: _,
                          }),
            }),
        ],
    });
}

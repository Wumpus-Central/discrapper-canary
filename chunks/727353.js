n.d(t, {
    Z: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(302959),
    c = n(592182),
    u = n(587895),
    d = n(12351),
    f = n(769015),
    p = n(877315),
    _ = n(607407),
    h = n(652215),
    m = n(985018),
    g = n(573073);

function E(e) {
    let {
            stream: t,
            activeStream: n,
            streamActivity: i,
            streamApplication: E,
            user: y,
            currentUserId: b,
            canWatch: O,
            unavailableReason: v,
            onWatchStream: A,
            onAction: I,
            showHeader: S = !1,
            hideTip: T = !1,
            className: C,
            wrapperClassName: N,
            skipContainer: w = !1,
        } = e,
        R = (0, s.bG)([u.A], () => {
            if (null != E) {
                if (null != E.id) return u.A.getApplication(E.id);
                else if (null != E.name) return u.A.getApplicationByName(E.name);
            }
            return null;
        }, [E]),
        P =
            null != i && null != i.name
                ? m.intl.formatToPlainString(m.t["4CQq9Q"], {
                      name: i.name,
                  })
                : m.intl.string(m.t["Jpkr/q"]),
        D = (0, r.jsxs)(r.Fragment, {
            children: [
                S &&
                    (0, r.jsxs)("div", {
                        className: g.WG,
                        children: [
                            null != R &&
                                (0, r.jsx)(f.A, {
                                    game: R,
                                    className: g.lK,
                                }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                children: P,
                            }),
                        ],
                    }),
                null != A
                    ? (0, r.jsxs)(o.DUT, {
                          onClick: A,
                          className: g.i1,
                          children: [
                              (0, r.jsx)(_.A, {
                                  className: g.oz,
                                  stream: t,
                              }),
                              O
                                  ? (0, r.jsx)("div", {
                                        className: g.xD,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: g.ON,
                                            children: (0, p.A)(t, n, b, v),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: g.i1,
                          children: [
                              (0, r.jsx)(_.A, {
                                  className: g.oz,
                                  stream: t,
                              }),
                              O
                                  ? (0, r.jsx)("div", {
                                        className: g.xD,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "none",
                                            className: g.ON,
                                            children: (0, p.A)(t, n, b, v),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
                (0, r.jsxs)("div", {
                    className: g.rf,
                    children: [
                        null != i
                            ? (0, r.jsx)(l.A, {
                                  hideHeader: !0,
                                  type: l.M.STREAM_PREVIEW,
                                  activity: i,
                                  user: y,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  analyticsParams: {
                                      location: {
                                          page: h.liQ.GO_LIVE_MODAL,
                                          section: h.JJy.STREAM_VIEWER_POPOUT,
                                      },
                                  },
                                  onAction: I,
                              })
                            : (0, r.jsx)(c.A, {
                                  type: l.M.STREAM_PREVIEW,
                                  applicationStream: t,
                                  user: y,
                                  guildId: t.guildId,
                                  channelId: t.channelId,
                                  className: g.lx,
                                  onAction: I,
                              }),
                        !T &&
                            (0, r.jsx)(d.A, {
                                type: d.A.Types.INLINE,
                                className: g.PP,
                                children: __OVERLAY__ ? m.intl.string(m.t.YRdw70) : m.intl.string(m.t.CCTgbF),
                            }),
                    ],
                }),
            ],
        });
    return w
        ? (0, r.jsx)("div", {
              className: a()(g.yt, g.Tb, N),
              children: D,
          })
        : (0, r.jsx)("div", {
              className: a()(g.yt, N),
              children: (0, r.jsx)("div", {
                  className: a()(g.Rh, C),
                  children: D,
              }),
          });
}

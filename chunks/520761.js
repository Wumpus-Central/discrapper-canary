n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(192308),
    d = n(772838),
    c = n(834730),
    u = n(408278),
    m = n(22231),
    g = n(599119),
    h = n(374084),
    x = n(734057),
    _ = n(486020),
    p = n(199940),
    A = n(132514),
    E = n(985018),
    f = n(327084);
let j = function (e) {
    let { guildId: t, resourceChannel: s, index: j, onDragComplete: N, onDragStart: I, onDragReset: C } = e,
        { title: b, channelId: v, description: S } = s,
        T = x.A.getChannel(v),
        y = null;
    (null != T && (0, h.Yt)(T)) || (y = E.intl.string(E.t.kTdL8X));
    let R = null == S || 0 === S.length,
        L = _.Ay.getResourceChannelIconURL({ channelId: s.channelId, icon: s.icon }),
        {
            drag: D,
            dragSourcePosition: O,
            drop: G,
            setIsDraggable: M,
        } = (0, g.A)({
            type: "RESOURCE_CHANNEL",
            optionId: s.channelId,
            index: j,
            onDragStart: I,
            onDragComplete: N,
            onDragReset: C,
        }),
        k = l.useCallback(
            (e) => {
                (0, p.z4)(s.channelId, e);
            },
            [s.channelId],
        ),
        U = l.useCallback(
            (e, n) => {
                let i = A.A.getSettings();
                null != i &&
                    ((0, p.z4)(s.channelId, e),
                    (0, p.W5)(t, i).then(() => {
                        (0, p.E0)(t, e.channelId, n);
                    }));
            },
            [t, s],
        ),
        w = l.useCallback(
            () =>
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e("36354").then(n.bind(n, 983161));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            resourceChannel: s,
                            onSave: k,
                            onDelete: () => (0, p.XD)(s.channelId),
                            onIconUpload: U,
                        });
                }),
            [t, s, k, U],
        );
    return null == T
        ? null
        : (0, i.jsxs)("div", {
              className: f.l5,
              children: [
                  (0, i.jsxs)("div", {
                      className: r()(f.Km, {
                          [f.A]: null != O && j < O,
                          [f.Ze]: null != O && j > O,
                          [f._t]: null != y,
                      }),
                      ref: (e) => {
                          D(G(e));
                      },
                      children: [
                          (0, i.jsx)("div", {
                              className: f.cK,
                              onMouseEnter: () => M(!0),
                              onMouseLeave: () => M(!1),
                              children: (0, i.jsx)(d.W, { size: "xs", color: "currentColor", className: f.co }),
                          }),
                          null != L &&
                              (0, i.jsx)("div", {
                                  className: f.P0,
                                  children: (0, i.jsx)("img", {
                                      src: L,
                                      className: f.Kk,
                                      width: 32,
                                      height: 32,
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                              }),
                          (0, i.jsxs)("div", {
                              className: f.DP,
                              children: [
                                  (0, i.jsx)(c.E, {
                                      className: f.qj,
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: b,
                                  }),
                                  !R &&
                                      (0, i.jsx)(c.E, {
                                          className: f.ur,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: S,
                                      }),
                              ],
                          }),
                          (0, i.jsx)(a.m, {
                              text: E.intl.string(E.t.bt75uw),
                              children: (0, i.jsx)(u.K, {
                                  icon: m.R,
                                  size: "sm",
                                  variant: "primary",
                                  onClick: w,
                                  "aria-label": E.intl.string(E.t.bt75uw),
                              }),
                          }),
                      ],
                  }),
                  null != y &&
                      (0, i.jsx)(c.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: y }),
              ],
          });
};

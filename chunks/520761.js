n.d(t, {
    A: () => x,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    c = n(397927),
    o = n(599119),
    d = n(374084),
    u = n(734057),
    f = n(486020),
    g = n(199940),
    b = n(132514),
    m = n(985018),
    p = n(659233);
let x = function (e) {
    let { guildId: t, resourceChannel: l, index: x, onDragComplete: h, onDragStart: j, onDragReset: O } = e,
        { title: y, channelId: v, description: A } = l,
        E = u.A.getChannel(v),
        N = null;
    (null != E && (0, d.Yt)(E)) || (N = m.intl.string(m.t.kTdL8X));
    let _ = null == A || 0 === A.length,
        S = f.Ay.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon,
        }),
        {
            drag: T,
            dragSourcePosition: I,
            drop: C,
            setIsDraggable: P,
        } = (0, o.A)({
            type: "RESOURCE_CHANNEL",
            optionId: l.channelId,
            index: x,
            onDragStart: j,
            onDragComplete: h,
            onDragReset: O,
        }),
        w = i.useCallback(
            (e) => {
                (0, g.z4)(l.channelId, e);
            },
            [l.channelId],
        ),
        R = i.useCallback(
            (e, n) => {
                let r = b.A.getSettings();
                null != r &&
                    ((0, g.z4)(l.channelId, e),
                    (0, g.W5)(t, r).then(() => {
                        (0, g.E0)(t, e.channelId, n);
                    }));
            },
            [t, l],
        ),
        D = i.useCallback(
            () =>
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("36354").then(n.bind(n, 983161));
                    return (n) => {
                        var i, s;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (s = s =
                                {
                                    guildId: t,
                                    resourceChannel: l,
                                    onSave: w,
                                    onDelete: () => (0, g.XD)(l.channelId),
                                    onIconUpload: R,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            i),
                        );
                    };
                }),
            [t, l, w, R],
        );
    return null == E
        ? null
        : (0, r.jsxs)("div", {
              className: p.l5,
              children: [
                  (0, r.jsxs)("div", {
                      className: s()(p.Km, {
                          [p.A]: null != I && x < I,
                          [p.Ze]: null != I && x > I,
                          [p._t]: null != N,
                      }),
                      ref: (e) => {
                          T(C(e));
                      },
                      children: [
                          (0, r.jsx)("div", {
                              className: p.cK,
                              onMouseEnter: () => P(!0),
                              onMouseLeave: () => P(!1),
                              children: (0, r.jsx)(c.WP0, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: p.co,
                              }),
                          }),
                          null != S &&
                              (0, r.jsx)("div", {
                                  className: p.P0,
                                  children: (0, r.jsx)("img", {
                                      src: S,
                                      className: p.Kk,
                                      width: 32,
                                      height: 32,
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                              }),
                          (0, r.jsxs)("div", {
                              className: p.DP,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      className: p.qj,
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: y,
                                  }),
                                  !_ &&
                                      (0, r.jsx)(c.Text, {
                                          className: p.ur,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: A,
                                      }),
                              ],
                          }),
                          (0, r.jsx)(a.m, {
                              text: m.intl.string(m.t.bt75uw),
                              children: (0, r.jsx)(c.K0, {
                                  icon: c.R2l,
                                  size: "sm",
                                  variant: "primary",
                                  onClick: D,
                                  "aria-label": m.intl.string(m.t.bt75uw),
                              }),
                          }),
                      ],
                  }),
                  null != N &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-feedback-critical",
                          children: N,
                      }),
              ],
          });
};

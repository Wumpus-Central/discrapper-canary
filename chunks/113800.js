n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(990078),
    s = n(397927),
    o = n(58736),
    d = n(961350),
    c = n(430363),
    u = n(161256),
    A = n(659416),
    h = n(823854),
    _ = n(997752),
    m = n(979016),
    p = n(926966),
    g = n(985018);
function E(e) {
    let { className: t } = e,
        n = (0, c.Uk)("VoiceDareTitleBarButton"),
        E = (0, a.bG)([d.default], () => d.default.getId()),
        I = (0, a.bG)([_.A], () => _.A.getLocalVoiceDare()),
        f = (0, a.bG)([h.A], () => (null == E ? null : h.A.getTrackingEntryForUserId(E))),
        C = (0, s.rdh)(s.LU0.modules.chat.INPUT_ICON_SIZE),
        N = r.useRef(null),
        [T, S] = r.useState(!1),
        x = null != I && I.messageKind === A.cn.STATE && I.phase === A.Ob.RUNNING ? I : null,
        v = null != x && null != f;
    return (r.useEffect(() => {
        let e, t;
        if (v)
            return (
                (t = setTimeout(() => {
                    S(!0),
                        setTimeout(() => {
                            S(!1),
                                (function n() {
                                    e = setTimeout(
                                        () => {
                                            S(!0),
                                                (t = setTimeout(() => {
                                                    S(!1), n();
                                                }, 600));
                                        },
                                        3e4 + (2 * Math.random() - 1) * 6e3,
                                    );
                                })();
                        }, 600);
                }, 1e3)),
                () => {
                    clearTimeout(e), clearTimeout(t);
                }
            );
    }, [v]),
    n && null != x && null != f)
        ? (0, i.jsx)(s.YNO, {
              targetElementRef: N,
              renderPopout: () =>
                  (0, i.jsx)(m.A, {
                      userId: E,
                      surfaceKind: m.n.Popout,
                      footer: (0, i.jsx)(s.Button, {
                          size: "sm",
                          variant: "critical-primary",
                          text: g.intl.string(p.default["AHFbr+"]),
                          onClick: () => (0, u.T2)(x),
                      }),
                  }),
              position: "bottom",
              align: "left",
              animation: s.YNO.Animation.FADE,
              spacing: 6,
              children: (e, n) => {
                  let { isShown: r } = n;
                  return (0, i.jsx)("div", {
                      ref: N,
                      children: (0, i.jsx)(l.m, {
                          asContainer: !0,
                          shouldShow: !r,
                          text: g.intl.string(p.default.BZ7xL3),
                          children: (0, i.jsx)(s.bfh, {
                              isShaking: T,
                              intensity: 3,
                              children: (0, i.jsx)(o.In, {
                                  ...e,
                                  className: t,
                                  icon: s.Y3C,
                                  iconSize: C,
                                  "aria-label": g.intl.string(p.default.BZ7xL3),
                                  selected: r,
                                  color: (function (e) {
                                      switch (e) {
                                          case A.sb.MILD:
                                              return "var(--status-positive)";
                                          case A.sb.SPICY:
                                              return "var(--status-warning)";
                                          case A.sb.UNHINGED:
                                              return "var(--status-danger)";
                                      }
                                  })(x.spiciness),
                              }),
                          }),
                      }),
                  });
              },
          })
        : null;
}

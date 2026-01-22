n.d(t, {
    H: () => f,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(108531),
    a = n(311907),
    s = n(397927),
    o = n(971778),
    c = n(652215),
    u = n(985018),
    d = n(144958);

function f() {
    let e = (0, a.bG)([o.A], () => o.A.getError());
    return e
        ? (0, l.jsx)(p, {
              error: e,
          })
        : null;
}
let p = (e) => {
    let { error: t } = e,
        [n, a] = (0, r.useState)(!1),
        f = (0, s.pnh)(
            !n,
            {
                from: {
                    opacity: 0,
                    translateY: 20,
                },
                enter: {
                    opacity: 1,
                    translateY: 0,
                },
                leave: {
                    opacity: 0,
                    translateY: 80,
                },
            },
            "respect-motion-settings",
        ),
        p = (() => {
            switch (t) {
                case o.L.ERROR_DOWNLOADING_DEPENDENCY:
                    return u.intl.string(u.t.D9neaH);
                case o.L.ERROR_ACTIVATING_VOICE_FILTER:
                    return u.intl.string(u.t.mNMZZg);
                default:
                    return u.intl.string(u.t.F8FvUy);
            }
        })();
    return f((e) =>
        n
            ? null
            : (0, l.jsx)(i.animated.div, {
                  style: e,
                  className: d.z,
                  children: (0, l.jsxs)("div", {
                      className: d.A,
                      children: [
                          (0, l.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              color: "always-white",
                              children: p,
                          }),
                          (0, l.jsx)(s.PMB, {
                              noticeType: c.kqX.VOICE_FILTERS_ERROR,
                              onClick: () => a(!0),
                          }),
                      ],
                  }),
              }),
    );
};

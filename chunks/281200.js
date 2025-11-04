n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(619307),
    l = n(481060),
    o = n(308982),
    c = n(868530);
let u = [
        {
            label: "No Timer",
            value: null,
        },
        {
            label: "30 seconds",
            value: 30,
        },
        {
            label: "60 seconds",
            value: 60,
        },
        {
            label: "90 seconds",
            value: 90,
        },
        {
            label: "2 minutes",
            value: 120,
        },
        {
            label: "3 minutes",
            value: 180,
        },
        {
            label: "4 minutes",
            value: 240,
        },
        {
            label: "5 minutes",
            value: 300,
        },
    ],
    s = o.kg.getState();
function d(e) {
    let { channelId: t, showCountdown: n, shuffling: d = !1 } = e,
        { timerDuration: _ } = (0, o.E1)(t),
        [m, f] = a.useState(null),
        h = a.useCallback(
            (e) => {
                s.setTimerDuration(t, e);
            },
            [t],
        );
    a.useEffect(() => {
        n && null != _ && null == m && f(_);
    }, [n, _, m]);
    let g = a.useRef(d);
    return (a.useEffect(() => {
        d && !g.current && null != _ && f(_), (g.current = d);
    }, [d, _]),
    a.useEffect(() => {
        if (!n || d) return;
        let e = setInterval(() => {
            f((e) => (null == e || e <= 1 ? 0 : e - 1));
        }, 1000);
        return () => clearInterval(e);
    }, [n, d]),
    n && null != _ && null != m)
        ? (0, r.jsx)("div", {
              className: c.container,
              children: (0, r.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  children: ((e) => {
                      let t = Math.floor(e / 60);
                      return "".concat(t, ":").concat((e % 60).toString().padStart(2, "0"));
                  })(m),
              }),
          })
        : (0, r.jsx)("div", {
              className: c.container,
              children:
                  !n &&
                  (0, r.jsx)(i.q4, {
                      value: _,
                      onChange: h,
                      options: u,
                      closeOnSelect: !0,
                  }),
          });
}

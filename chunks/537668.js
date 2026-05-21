n.d(t, { A: () => c });
var s = n(627968);
n(64700);
var l = n(338854),
    i = n(734066),
    a = n(49999),
    r = n(16590),
    o = n(375708);
function c(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: c, position: u, shouldShow: d = !0, children: h } = e,
        m = (0, i.sw)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            h,
            d && m
                ? (0, s.jsx)(l.H, {
                      targetElementRef: t,
                      title: o.intl.string(r.default.Qn21R6),
                      body: o.intl.string(r.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: u,
                      caretConfig: { align: "center" },
                      action: {
                          text: o.intl.string(o.t.RzWDqY),
                          onClick: () => {
                              n(a.i.TAKE_ACTION), c();
                          },
                      },
                      onRequestClose: () => {
                          n(a.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}

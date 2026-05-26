"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(338854),
    s = n(734066),
    a = n(49999),
    o = n(16590),
    l = n(375708);
function u(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: u, position: c, shouldShow: d = !0, children: _ } = e,
        f = (0, s.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _,
            d && f
                ? (0, i.jsx)(r.H, {
                      targetElementRef: t,
                      title: l.intl.string(o.default.Qn21R6),
                      body: l.intl.string(o.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: c,
                      caretConfig: { align: "center" },
                      action: {
                          text: l.intl.string(l.t.RzWDqY),
                          onClick: () => {
                              n(a.i.TAKE_ACTION), u();
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

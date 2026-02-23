"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(116833),
    l = n(342494),
    r = n(49999),
    a = n(294726),
    o = n(985018);
function c(e) {
    let { gameName: t, runningGameId: n, targetElementRef: c, markAsDismissed: d, onClick: u } = e;
    return (0, i.jsx)(l.AM, {
        size: "lg",
        title: o.intl.formatToPlainString(a.default.lKzVNu, { gameName: t }),
        body: o.intl.string(a.default.qqjm8O),
        graphic:
            null != n
                ? {
                      type: "dynamic",
                      component: s.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: n },
                      aspectRatio: "6/4",
                  }
                : void 0,
        actions: [
            {
                text: o.intl.string(a.default["eJg+Zm"]),
                variant: "primary",
                onClick: () => {
                    u(), d(r.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: c,
        shouldShow: !0,
        position: "top",
        onRequestClose: () => d(r.i.USER_DISMISS),
    });
}

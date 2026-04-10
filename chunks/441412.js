"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(843472),
    l = n(763754),
    a = n(888675),
    c = n(985018);
function o(e) {
    let { message: t, usernameHook: n, onClickPins: o, compact: u } = e,
        d = (0, l.Ay)(t),
        _ = d.nick,
        E = n(d),
        A = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            s.A.jumpToMessage({ channelId: e, messageId: n, flash: !0 });
        },
        m = { iconNode: (0, i.jsx)(r.tsw, { size: "sm", color: "currentColor" }) };
    return (0, i.jsx)(a.A, {
        ...m,
        timestamp: t.timestamp,
        compact: u,
        children:
            null != t.messageReference
                ? null == o
                    ? c.intl.format(c.t.lD5tup, { usernameHook: E, username: _, messageOnClick: A })
                    : c.intl.format(c.t.yIDvPL, {
                          usernameHook: E,
                          username: _,
                          pinsActionOnClick: o,
                          messageOnClick: A,
                      })
                : null == o
                  ? c.intl.format(c.t.vfkjqx, { usernameHook: E, username: _ })
                  : c.intl.format(c.t.R7vZGZ, { usernameHook: E, username: _, pinsActionOnClick: o }),
    });
}

n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(843472),
    r = n(763754),
    s = n(888675),
    o = n(985018);
function d(e) {
    let { message: t, usernameHook: n, onClickPins: d, compact: c } = e,
        u = (0, r.Ay)(t),
        m = u.nick,
        _ = n(u),
        h = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            a.A.jumpToMessage({ channelId: e, messageId: n, flash: !0 });
        },
        p = { iconNode: (0, i.jsx)(l.tsw, { size: "sm", color: "currentColor" }) };
    return (0, i.jsx)(s.A, {
        ...p,
        timestamp: t.timestamp,
        compact: c,
        children:
            null != t.messageReference
                ? null == d
                    ? o.intl.format(o.t.lD5tup, { usernameHook: _, username: m, messageOnClick: h })
                    : o.intl.format(o.t.yIDvPL, {
                          usernameHook: _,
                          username: m,
                          pinsActionOnClick: d,
                          messageOnClick: h,
                      })
                : null == d
                  ? o.intl.format(o.t.vfkjqx, { usernameHook: _, username: m })
                  : o.intl.format(o.t.R7vZGZ, { usernameHook: _, username: m, pinsActionOnClick: d }),
    });
}

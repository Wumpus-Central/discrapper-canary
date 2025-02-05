n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(904245),
    r = n(739566),
    s = n(834129),
    o = n(388032);
function c(e) {
    let { message: t, usernameHook: c, onClickPins: d, compact: u } = e,
        m = (0, r.ZP)(t),
        _ = m.nick,
        h = c(m),
        p = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            a.Z.jumpToMessage({
                channelId: e,
                messageId: n,
                flash: !0
            });
        },
        g = (0, l.bWb)().enabled
            ? {
                  iconNode: (0, i.jsx)(l.qQX, {
                      size: 'sm',
                      color: 'currentColor'
                  })
              }
            : { icon: n(879066) };
    return (0, i.jsx)(s.Z, {
        ...g,
        timestamp: t.timestamp,
        compact: u,
        children:
            null != t.messageReference
                ? null == d
                    ? o.intl.format(o.t.lD5tur, {
                          usernameHook: h,
                          username: _,
                          messageOnClick: p
                      })
                    : o.intl.format(o.t.yIDvPD, {
                          usernameHook: h,
                          username: _,
                          pinsActionOnClick: d,
                          messageOnClick: p
                      })
                : null == d
                  ? o.intl.format(o.t.vfkjq6, {
                        usernameHook: h,
                        username: _
                    })
                  : o.intl.format(o.t.R7vZGR, {
                        usernameHook: h,
                        username: _,
                        pinsActionOnClick: d
                    })
    });
}

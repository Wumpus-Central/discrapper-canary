n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(904245),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    let { message: t, usernameHook: c, onClickPins: d, compact: u } = e,
        m = (0, a.ZP)(t),
        h = m.nick,
        f = c(m),
        p = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            l.Z.jumpToMessage({
                channelId: e,
                messageId: n,
                flash: !0
            });
        },
        _ = (0, r.useRedesignIconContext)().enabled
            ? {
                  iconNode: (0, i.jsx)(r.PinIcon, {
                      size: 'sm',
                      color: 'currentColor'
                  })
              }
            : { icon: n(879066) };
    return (0, i.jsx)(o.Z, {
        ..._,
        timestamp: t.timestamp,
        compact: u,
        children:
            null != t.messageReference
                ? null == d
                    ? s.intl.format(s.t.lD5tur, {
                          usernameHook: f,
                          username: h,
                          messageOnClick: p
                      })
                    : s.intl.format(s.t.yIDvPD, {
                          usernameHook: f,
                          username: h,
                          pinsActionOnClick: d,
                          messageOnClick: p
                      })
                : null == d
                  ? s.intl.format(s.t.vfkjq6, {
                        usernameHook: f,
                        username: h
                    })
                  : s.intl.format(s.t.R7vZGR, {
                        usernameHook: f,
                        username: h,
                        pinsActionOnClick: d
                    })
    });
}

n.d(t, { Z: () => p });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(257559),
    o = n(592125),
    s = n(375954),
    c = n(796263),
    u = n(720068),
    d = n(388032);
function p(e) {
    let { message: t, inline: n = !1 } = e,
        { messageReference: p } = t,
        m = (0, i.e7)([s.Z], () => (null != p ? s.Z.getMessage(p.channel_id, p.message_id) : null)),
        f = (0, i.e7)([o.Z], () => (null != m ? o.Z.getChannel(m.channel_id) : null)),
        h = () => {
            null != f && null != m && a.Z.confirmDelete(f, m);
        },
        g = null == m ? d.intl.string(u.default['0IZbwM']) : d.intl.string(u.default.Uj6oDw),
        _ = null == m,
        b = 'delete-message-'.concat(t.id);
    return n
        ? (0, r.jsx)(
              c.Z,
              {
                  text: g,
                  icon: l.XHJ,
                  onClick: h,
                  disabled: _,
                  color: l.zxk.Colors.RED
              },
              b
          )
        : (0, r.jsx)(
              l.sNh,
              {
                  id: 'delete-message',
                  icon: l.XHJ,
                  label: g,
                  action: h,
                  disabled: _
              },
              b
          );
}

n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    i = n(481060),
    l = n(251794),
    a = n(71619),
    o = n(796263),
    s = n(776571),
    c = n(388032);
function u(e) {
    let { channel: t, user: n, inline: u = !1 } = e,
        [d, p] = (0, a.ZP)(null == n ? void 0 : n.id, t.guild_id),
        m = () => {
            null != n &&
                (0, l.z)({
                    guildId: t.guild_id,
                    userId: n.id,
                    modReportId: t.id
                });
        },
        f = p ? c.intl.string(s.default['6uMZbm']) : c.intl.string(s.default['Sgg/uL']),
        h = 'timeout-user-'.concat(null == n ? void 0 : n.id);
    return u
        ? (0, r.jsx)(
              o.Z,
              {
                  text: f,
                  icon: i.T39,
                  onClick: m,
                  disabled: p
              },
              h
          )
        : (0, r.jsx)(
              i.sNh,
              {
                  id: 'timeout-user',
                  icon: i.T39,
                  label: f,
                  action: m,
                  disabled: p
              },
              h
          );
}

n.d(t, { default: () => h });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(331322),
    r = n(167417),
    o = n(260598),
    d = n(58149),
    c = n(615550),
    u = n(652215),
    m = n(985018),
    g = n(181667);
function h(e) {
    let { guildId: t, transitionState: n, onClose: h } = e,
        [x, p] = l.useState([]),
        [A, b] = l.useState(),
        f = [
            { label: m.intl.string(m.t["//3pvi"]), value: c.n7.DM_SPAM },
            { label: m.intl.string(m.t.SdVsip), value: c.n7.MENTION_SPAM },
            { label: m.intl.string(m.t.uTiSVL), value: c.n7.CHANNEL_SPAM },
            { label: m.intl.string(m.t.GQczU8), value: c.n7.SUS_NEW_MEMBERS },
            { label: m.intl.string(m.t.AAgqy3), value: c.n7.CHANGING_SETTINGS },
            { label: m.intl.string(m.t.ryPKb7), value: c.n7.OTHER },
        ],
        _ = l.useCallback((e) => {
            p(e);
        }, []);
    return null == t
        ? (h(), null)
        : (0, i.jsx)(s.Modal, {
              transitionState: n,
              title: m.intl.string(m.t.f5hd9P),
              actions: [
                  { text: m.intl.string(m.t["ETE/oC"]), onClick: h, variant: "secondary" },
                  {
                      text: m.intl.string(m.t.nAt0rE),
                      onClick: function () {
                          (0, d.zV)(u.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: x,
                              raid_lockdown_feedback_other_reason: A,
                              guild_id: t,
                          }),
                              h();
                      },
                      disabled: 0 === x.length,
                  },
              ],
              onClose: h,
              children: (0, i.jsxs)(a.B, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(r.$, { selectedValues: x, onChange: _, options: f }),
                      x.includes(c.n7.OTHER) &&
                          (0, i.jsx)("div", {
                              className: g.Q8,
                              children: (0, i.jsx)(o.f, {
                                  placeholder: m.intl.string(m.t["PAM+JR"]),
                                  onChange: b,
                                  value: A,
                                  autoFocus: !0,
                              }),
                          }),
                  ],
              }),
          });
}

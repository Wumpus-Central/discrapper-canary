n.d(t, { default: () => m });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(58149),
    o = n(615550),
    d = n(652215),
    c = n(985018),
    u = n(343763);
function m(e) {
    let { guildId: t, transitionState: n, onClose: m } = e,
        [g, x] = l.useState([]),
        [h, p] = l.useState(),
        A = [
            { label: c.intl.string(c.t["//3pvi"]), value: o.n7.DM_SPAM },
            { label: c.intl.string(c.t.SdVsip), value: o.n7.MENTION_SPAM },
            { label: c.intl.string(c.t.uTiSVL), value: o.n7.CHANNEL_SPAM },
            { label: c.intl.string(c.t.GQczU8), value: o.n7.SUS_NEW_MEMBERS },
            { label: c.intl.string(c.t.AAgqy3), value: o.n7.CHANGING_SETTINGS },
            { label: c.intl.string(c.t.ryPKb7), value: o.n7.OTHER },
        ],
        b = l.useCallback((e) => {
            x(e);
        }, []);
    return null == t
        ? (m(), null)
        : (0, i.jsx)(s.Modal, {
              transitionState: n,
              title: c.intl.string(c.t.f5hd9P),
              actions: [
                  { text: c.intl.string(c.t["ETE/oC"]), onClick: m, variant: "secondary" },
                  {
                      text: c.intl.string(c.t.nAt0rE),
                      onClick: function () {
                          (0, r.zV)(d.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: g,
                              raid_lockdown_feedback_other_reason: h,
                              guild_id: t,
                          }),
                              m();
                      },
                      disabled: 0 === g.length,
                  },
              ],
              onClose: m,
              children: (0, i.jsxs)(a.BJc, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(a.$QX, { selectedValues: g, onChange: b, options: A }),
                      g.includes(o.n7.OTHER) &&
                          (0, i.jsx)("div", {
                              className: u.Q8,
                              children: (0, i.jsx)(a.fs1, {
                                  placeholder: c.intl.string(c.t["PAM+JR"]),
                                  onChange: p,
                                  value: h,
                                  autoFocus: !0,
                              }),
                          }),
                  ],
              }),
          });
}

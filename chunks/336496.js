l.d(n, { default: () => h });
var e = l(627968),
    i = l(64700),
    a = l(189213),
    s = l(331322),
    r = l(167417),
    d = l(260598),
    o = l(95561),
    u = l(615550),
    c = l(652215),
    _ = l(375708),
    g = l(181667);
function h(t) {
    let { guildId: n, transitionState: l, onClose: h } = t,
        [b, p] = i.useState([]),
        [C, E] = i.useState(),
        S = [
            { label: _.intl.string(_.t["//3pvi"]), value: u.n7.DM_SPAM },
            { label: _.intl.string(_.t.SdVsip), value: u.n7.MENTION_SPAM },
            { label: _.intl.string(_.t.uTiSVL), value: u.n7.CHANNEL_SPAM },
            { label: _.intl.string(_.t.GQczU8), value: u.n7.SUS_NEW_MEMBERS },
            { label: _.intl.string(_.t.AAgqy3), value: u.n7.CHANGING_SETTINGS },
            { label: _.intl.string(_.t.ryPKb7), value: u.n7.OTHER },
        ],
        A = i.useCallback((t) => {
            p(t);
        }, []);
    return null == n
        ? (h(), null)
        : (0, e.jsx)(a.Modal, {
              transitionState: l,
              title: _.intl.string(_.t.f5hd9P),
              actions: [
                  { text: _.intl.string(_.t["ETE/oC"]), onClick: h, variant: "secondary" },
                  {
                      text: _.intl.string(_.t.nAt0rE),
                      onClick: function () {
                          (0, o.zV)(c.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: b,
                              raid_lockdown_feedback_other_reason: C,
                              guild_id: n,
                          }),
                              h();
                      },
                      disabled: 0 === b.length,
                  },
              ],
              onClose: h,
              children: (0, e.jsxs)(s.B, {
                  gap: 8,
                  children: [
                      (0, e.jsx)(r.$, { selectedValues: b, onChange: A, options: S }),
                      b.includes(u.n7.OTHER) &&
                          (0, e.jsx)("div", {
                              className: g.Q8,
                              children: (0, e.jsx)(d.f, {
                                  placeholder: _.intl.string(_.t["PAM+JR"]),
                                  onChange: E,
                                  value: C,
                                  autoFocus: !0,
                              }),
                          }),
                  ],
              }),
          });
}

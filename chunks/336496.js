n.d(t, {
    default: () => b,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(397927),
    s = n(58149),
    o = n(615550),
    c = n(652215),
    d = n(985018),
    u = n(48854);

function b(e) {
    let { guildId: t, transitionState: n, onClose: b } = e,
        [f, p] = r.useState([]),
        [m, g] = r.useState(),
        h = [
            {
                label: d.intl.string(d.t["//3pvi"]),
                value: o.n7.DM_SPAM,
            },
            {
                label: d.intl.string(d.t.SdVsip),
                value: o.n7.MENTION_SPAM,
            },
            {
                label: d.intl.string(d.t.uTiSVL),
                value: o.n7.CHANNEL_SPAM,
            },
            {
                label: d.intl.string(d.t.GQczU8),
                value: o.n7.SUS_NEW_MEMBERS,
            },
            {
                label: d.intl.string(d.t.AAgqy3),
                value: o.n7.CHANGING_SETTINGS,
            },
            {
                label: d.intl.string(d.t.ryPKb7),
                value: o.n7.OTHER,
            },
        ],
        x = r.useCallback((e) => {
            p(e);
        }, []);
    return null == t
        ? (b(), null)
        : (0, i.jsx)(l.Modal, {
              transitionState: n,
              title: d.intl.string(d.t.f5hd9P),
              actions: [
                  {
                      text: d.intl.string(d.t["ETE/oC"]),
                      onClick: b,
                      variant: "secondary",
                  },
                  {
                      text: d.intl.string(d.t.nAt0rE),
                      onClick: function () {
                          (0, s.zV)(c.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                              raid_lockdown_feedback_type: f,
                              raid_lockdown_feedback_other_reason: m,
                              guild_id: t,
                          }),
                              b();
                      },
                      disabled: 0 === f.length,
                  },
              ],
              onClose: b,
              children: (0, i.jsxs)(a.BJc, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(a.$QX, {
                          selectedValues: f,
                          onChange: x,
                          options: h,
                      }),
                      f.includes(o.n7.OTHER) &&
                          (0, i.jsx)("div", {
                              className: u.Q8,
                              children: (0, i.jsx)(a.fs1, {
                                  placeholder: d.intl.string(d.t["PAM+JR"]),
                                  onChange: g,
                                  value: m,
                                  autoFocus: !0,
                              }),
                          }),
                  ],
              }),
          });
}

n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(349435),
    d = n(178186),
    s = n(617641),
    u = n(287809),
    o = n(452082),
    c = n(985018),
    A = n(636537),
    g = n(652215),
    f = n(486227),
    h = n(966107),
    E = n(544231),
    I = n(74114);
function _(e) {
    let t,
        n,
        _,
        x,
        b,
        v,
        S,
        { channel: p } = e,
        y = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        D =
            ((t = (0, i.bG)([u.default], () => u.default.getCurrentUser())),
            t?.isStaff() !== !0
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          !p.isMessageRequest &&
                              (0, r.jsx)(l.Dr, {
                                  id: "mark-as-message-request",
                                  label: c.intl.string(c.t.L6623r),
                                  action: () => (0, h.Sk)(p.id),
                              }),
                          (0, r.jsx)(l.Dr, {
                              id: "clear-message-request",
                              label: c.intl.string(c.t["85YWlY"]),
                              action: () => (0, h.JH)(p.id),
                          }),
                      ],
                  })),
        N = (function (e) {
            var t;
            let n,
                A,
                g,
                f =
                    ((t = e),
                    (n = (0, s.Lc)({ location: "context-menu-item" })),
                    (A = (0, i.bG)([u.default], () => u.default.getCurrentUser())),
                    (g = (0, o.j)(t.id, "context-menu-item")),
                    A?.isStaff() === !0 && n && t.isDM()
                        ? {
                              isTier1: g?.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1,
                              isTier2: g?.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                          }
                        : null),
                h = (0, s.Lc)({ location: "inappropriate_conversation_context_menu" });
            if (null === f || !h) return null;
            let { isTier1: E, isTier2: I } = f;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    !E &&
                        (0, r.jsx)(l.Dr, {
                            id: "mark-as-tier-1-inappro",
                            label: c.intl.string(c.t.EuzCET),
                            action: () => (0, d.Rw)(e.id, a._j.INAPPROPRIATE_CONVERSATION_TIER_1),
                        }),
                    !I &&
                        (0, r.jsx)(l.Dr, {
                            id: "mark-as-tier-2-inappro",
                            label: c.intl.string(c.t["tBw/1i"]),
                            action: () => (0, d.Rw)(e.id, a._j.INAPPROPRIATE_CONVERSATION_TIER_2),
                        }),
                ],
            });
        })(p),
        j =
            ((n = (0, i.bG)([u.default], () => u.default.getCurrentUser())),
            (_ = (0, I.l)(p.id)),
            n?.isStaff() === !0 && p.isDM() && null == _
                ? (0, r.jsx)(l.Dr, {
                      id: "mark-as-stranger-danger",
                      label: c.intl.string(c.t.CgWmmT),
                      action: () => (0, E.Ju)(p.id),
                  })
                : null),
        M =
            ((x = (0, i.bG)([u.default], () => u.default.getCurrentUser())),
            (b = (0, i.bG)([a.Ay], () => a.Ay.getChannelSafetyWarnings(p.id))),
            x?.isStaff() !== !0 || null == b || 0 === b.length
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Dr, {
                              id: "delete-safety-warnings",
                              label: c.intl.string(c.t.g7o9bs),
                              action: () => (0, d.Ey)(p.id),
                          }),
                          (0, r.jsx)(l.Dr, {
                              id: "clear-safety-warnings",
                              label: c.intl.string(c.t.VuSvGu),
                              action: () => (0, E.WJ)(p.id),
                          }),
                      ],
                  })),
        m =
            ((v = (0, i.bG)([u.default], () => u.default.getCurrentUser())),
            (S = (0, f.E)(p.id)),
            v?.isStaff() === !0 && p.isDM() && null == S
                ? (0, r.jsx)(l.Dr, {
                      id: "mark-as-likely-ato",
                      label: c.intl.string(c.t.AWKKgc),
                      action: () => {
                          var e;
                          return (
                              (e = p.id),
                              A.Bo.post({
                                  url: g.Rsh.ADD_SAFETY_WARNING(e),
                                  body: { safety_warning_type: a._j.LIKELY_ATO },
                                  rejectWithError: !1,
                              })
                          );
                      },
                  })
                : null);
    return y?.isStaff() !== !0
        ? null
        : (0, r.jsxs)(l.Dr, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, r.jsx)(l.rX, { children: D }),
                  (0, r.jsx)(l.rX, { children: M }),
                  (0, r.jsx)(l.rX, { children: j }),
                  (0, r.jsx)(l.rX, { children: N }),
                  (0, r.jsx)(l.rX, { children: m }),
              ],
          });
}

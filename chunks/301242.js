n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(481060),
    a = n(346486),
    s = n(69882),
    c = n(815790),
    u = n(893966),
    d = n(776767),
    p = n(388032),
    h = n(12740);
function f(e) {
    let { member: t } = e,
        n = t.userId,
        f = t.guildId,
        m = (0, l.e7)([u.Z], () => u.Z.getEnhancedMember(f, n), [n, f]),
        g = (null != m ? m : t).unusualDMActivityUntil,
        b = i.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, c.fv)(t, c.jq.JOINED_AT);
        }, []),
        _ = i.useMemo(() => (null == t ? null : b(g)), [t, b, g]),
        C = i.useMemo(() => (0, s.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        y = i.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return null != g || C
        ? (0, r.jsx)(o.xJW, {
              title: p.NW.string(p.t['7V375+']),
              titleClassName: h.infoTitle,
              children: (0, r.jsxs)(d.WM, {
                  children: [
                      null != g &&
                          (0, r.jsx)(d._2, {
                              icon: (0, r.jsx)(o.b6m, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: d.Mn,
                                  height: d.Mn
                              }),
                              name: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: p.NW.string(p.t.ZRnONz)
                              }),
                              description: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: _
                              })
                          }),
                      C &&
                          null != y &&
                          (0, r.jsx)(d._2, {
                              icon: (0, r.jsx)(o.YlB, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: d.Mn,
                                  height: d.Mn
                              }),
                              name: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: p.NW.string(p.t['TJ8/tL'])
                              }),
                              description: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: (0, r.jsx)(a.Z, {
                                      deadline: y,
                                      showUnits: !0,
                                      stopAtOneSec: !0
                                  })
                              })
                          })
                  ]
              })
          })
        : null;
}

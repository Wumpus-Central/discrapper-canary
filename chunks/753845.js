n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(859703),
    o = n(639214),
    l = n(73473);
let c = (e) => {
    let { applicationId: t, children: n, questContent: c } = e,
        u = (0, a.bG)([s.A], () => s.A.quests),
        d = i.useMemo(() => (0, o.jm)(u, t), [u, t]),
        f = i.useRef(null);
    return d.length > 0
        ? (0, r.jsx)(l.R, {
              questOrQuests: d[0],
              questContent: c,
              sourceQuestContent: c,
              children: n,
          })
        : (0, r.jsx)(r.Fragment, { children: n(f, f) });
};

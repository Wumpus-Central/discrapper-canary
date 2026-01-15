n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(399606),
    o = n(616022),
    s = n(759479),
    l = n(602667);
let c = (e) => {
    let { applicationId: t, children: n, questContent: c } = e,
        u = (0, a.e7)([o.Z], () => o.Z.quests),
        d = i.useMemo(() => (0, s.zs)(u, t), [u, t]),
        f = i.useRef(null);
    return d.length > 0
        ? (0, r.jsx)(l.A, {
              questOrQuests: d[0],
              questContent: c,
              sourceQuestContent: c,
              children: n,
          })
        : (0, r.jsx)(r.Fragment, { children: n(f, f) });
};

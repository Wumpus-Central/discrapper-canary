i.d(n, { default: () => h });
var r = i(627968);
i(64700);
var e = i(189213),
    l = i(17928),
    s = i(834730),
    a = i(496431),
    o = i(859703),
    d = i(507107),
    u = i(73473),
    c = i(985018);
function p(t) {
    let { transitionState: n, onClose: i, questEnrollmentBlockedUntil: l } = t,
        { hours: o, minutes: d, seconds: u } = (0, a.A)(l),
        p = String(o).padStart(2, "0"),
        h = String(d).padStart(2, "0"),
        g = String(u).padStart(2, "0"),
        m = `${p}:${h}:${g}`;
    return (0, r.jsx)(e.Modal, {
        size: "sm",
        transitionState: n,
        onClose: i,
        title: c.intl.string(c.t["g+02d5"]),
        actions: [{ variant: "secondary", onClick: () => i(), text: c.intl.string(c.t.cpT0Cq) }],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.E, { variant: "text-md/normal", children: c.intl.string(c.t["XEHDT/"]) }),
                (0, r.jsx)(s.E, {
                    variant: "text-md/normal",
                    children: c.intl.formatToPlainString(c.t["+5XVH+"], { countdownString: m }),
                }),
            ],
        }),
    });
}
function h(t) {
    let { onClose: n, quest: i, sourceQuestContent: e, ...s } = t,
        a = (0, l.bG)([o.A], () => o.A.questEnrollmentBlockedUntil);
    return null == a || null == i
        ? null
        : (0, r.jsx)(u.R, {
              overrideVisibility: !0,
              questOrQuests: i,
              questContent: d.uF.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: e,
              children: () => (0, r.jsx)(p, { ...s, onClose: n, questEnrollmentBlockedUntil: a }),
          });
}

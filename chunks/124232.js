n.d(e, { default: () => C });
var r = n(627968);
n(64700);
var i = n(189213),
    s = n(311907),
    a = n(834730),
    l = n(496431),
    d = n(859703),
    o = n(341915),
    u = n(73473),
    c = n(985018);
function p(t) {
    let { transitionState: e, onClose: n, questEnrollmentBlockedUntil: s } = t,
        { hours: d, minutes: o, seconds: u } = (0, l.A)(s),
        p = String(d).padStart(2, "0"),
        C = String(o).padStart(2, "0"),
        m = String(u).padStart(2, "0"),
        E = `${p}:${C}:${m}`;
    return (0, r.jsx)(i.Modal, {
        size: "sm",
        transitionState: e,
        onClose: n,
        title: c.intl.string(c.t["g+02d5"]),
        actions: [{ variant: "secondary", onClick: () => n(), text: c.intl.string(c.t.cpT0Cq) }],
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.E, { variant: "text-md/normal", children: c.intl.string(c.t["XEHDT/"]) }),
                (0, r.jsx)(a.E, {
                    variant: "text-md/normal",
                    children: c.intl.formatToPlainString(c.t["+5XVH+"], { countdownString: E }),
                }),
            ],
        }),
    });
}
function C(t) {
    let { onClose: e, quest: n, sourceQuestContent: i, ...a } = t,
        l = (0, s.bG)([d.A], () => d.A.questEnrollmentBlockedUntil);
    return null == l || null == n
        ? null
        : (0, r.jsx)(u.R, {
              overrideVisibility: !0,
              questOrQuests: n,
              questContent: o.uF.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: i,
              children: () => (0, r.jsx)(p, { ...a, onClose: e, questEnrollmentBlockedUntil: l }),
          });
}

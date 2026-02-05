e.d(n, { default: () => x });
var i = e(627968);
e(64700);
var r = e(158954),
    l = e(311907),
    s = e(397927),
    a = e(496431),
    o = e(859703),
    d = e(341915),
    u = e(73473),
    c = e(985018);
function p(t) {
    let { transitionState: n, onClose: e, questEnrollmentBlockedUntil: l } = t,
        { hours: o, minutes: d, seconds: u } = (0, a.A)(l),
        p = String(o).padStart(2, "0"),
        x = String(d).padStart(2, "0"),
        h = String(u).padStart(2, "0"),
        g = `${p}:${x}:${h}`;
    return (0, i.jsx)(r.Modal, {
        size: "sm",
        transitionState: n,
        onClose: e,
        title: c.intl.string(c.t["g+02d5"]),
        actions: [{ variant: "secondary", onClick: () => e(), text: c.intl.string(c.t.cpT0Cq) }],
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Text, { variant: "text-md/normal", children: c.intl.string(c.t["XEHDT/"]) }),
                (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: c.intl.formatToPlainString(c.t["+5XVH+"], { countdownString: g }),
                }),
            ],
        }),
    });
}
function x(t) {
    let { onClose: n, quest: e, sourceQuestContent: r, ...s } = t,
        a = (0, l.bG)([o.A], () => o.A.questEnrollmentBlockedUntil);
    return null == a || null == e
        ? null
        : (0, i.jsx)(u.R, {
              overrideVisibility: !0,
              questOrQuests: e,
              questContent: d.uF.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: r,
              children: () => (0, i.jsx)(p, { ...s, onClose: n, questEnrollmentBlockedUntil: a }),
          });
}

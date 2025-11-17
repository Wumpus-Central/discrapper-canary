n.d(i, { default: () => h }), n(388685);
var l = n(54381);
n(473749);
var a = n(512722),
    e = n.n(a),
    r = n(793030),
    s = n(481060),
    c = n(935369),
    u = n(313201),
    d = n(53365),
    o = n(981631),
    p = n(388032);
function h(t) {
    let { transitionState: i, guild: n, onClose: a } = t,
        h = (0, u.Dt)(),
        [g, { loading: m, error: E }] = (0, c.Z)(d.oL),
        b = async () => {
            e()(null != n, "no guild"), null != (await g(n.id)) && a();
        };
    return (0, l.jsx)(r.Modal, {
        transitionState: i,
        "aria-labelledby": h,
        actions: [
            {
                variant: "critical-primary",
                text: p.intl.string(p.t["R3BPH+"]),
                loading: m,
                onClick: b,
            },
        ],
        title: p.intl.string(p.t.rRpcE1),
        subtitle: p.intl.format(p.t.Oa5P6w, {
            guildName: n.name,
            url: o.EYA.DEVELOPER_PORTAL_TEAMS,
        }),
        onClose: a,
        children:
            null != E
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(s.M14, {
                              type: "critical",
                              children: E.message,
                          }),
                          (0, l.jsx)(s.LZC, { size: 24 }),
                      ],
                  })
                : null,
    });
}

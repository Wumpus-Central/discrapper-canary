n.d(i, { default: () => h }), n(388685);
var l = n(951288);
n(647438);
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
        [x, { loading: g, error: m }] = (0, c.Z)(d.oL),
        E = async () => {
            e()(null != n, "no guild"), null != (await x(n.id)) && a();
        };
    return (0, l.jsx)(r.Modal, {
        transitionState: i,
        "aria-labelledby": h,
        actions: [
            {
                variant: "critical-primary",
                text: p.intl.string(p.t.R3BPHx),
                loading: g,
                onClick: E,
            },
        ],
        title: p.intl.string(p.t.rRpcEx),
        subtitle: p.intl.format(p.t["Oa5P6+"], {
            guildName: n.name,
            url: o.EYA.DEVELOPER_PORTAL_TEAMS,
        }),
        onClose: a,
        children:
            null != m
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(s.M14, {
                              type: "critical",
                              children: m.message,
                          }),
                          (0, l.jsx)(s.LZC, { size: 24 }),
                      ],
                  })
                : null,
    });
}

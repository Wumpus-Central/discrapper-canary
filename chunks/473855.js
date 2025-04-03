r.d(t, { Z: () => u }), r(266796);
var s = r(200651);
r(192379);
var n = r(388905),
    a = r(837748),
    i = r(306453),
    l = r(58346),
    c = r(19960);
let d = {
    [l.HQ.CLASSROOM]: r(320440),
    [l.HQ.LOCAL_COMMUNITIES]: r(526916),
    [l.HQ.CREATORS_HOBBIES]: r(419185),
    [l.HQ.GLOBAL_COMMUNITIES]: r(540909),
    [l.HQ.FRIENDS_FAMILY]: r(826806),
    [l.HQ.STUDY_GROUPS]: r(29654),
    [l.HQ.CREATE_FROM_SCRATCH]: r(561030),
    [l.HQ.CAMPUS_CLUBS]: r(494207),
    [l.HQ.LEAGUE_CLUBS]: r(232454),
    [l.HQ.GITHUB_HACKATHON]: r(123013)
};
function u(e) {
    let { headerId: t, guildTemplate: r } = e,
        u = r.code,
        o = d[u];
    if (null != o) {
        var C;
        let { header: e, description: d, author: m } = (0, a.Z)(u);
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)('img', {
                    className: c.image,
                    src: o,
                    alt: ''
                }),
                (0, s.jsx)(n.Dx, {
                    className: c.header,
                    id: t,
                    children: e
                }),
                (0, s.jsx)(n.DK, { children: d }),
                r.state === l.Rj.RESOLVED
                    ? (0, s.jsx)(i.D, {
                          className: c.usagePill,
                          count: null != (C = r.usageCount) ? C : 0,
                          verifiedName: m
                      })
                    : null
            ]
        });
    }
    return (0, s.jsx)(i.Z, {
        pillClassName: c.usagePill,
        guildTemplate: r,
        tall: !0
    });
}

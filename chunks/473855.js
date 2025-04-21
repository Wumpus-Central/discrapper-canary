n.d(t, { Z: () => u }), n(953529);
var i = n(200651);
n(192379);
var r = n(388905),
    s = n(837748),
    l = n(306453),
    a = n(260539),
    c = n(19960);
let d = {
    [a.HQ.CLASSROOM]: n(320440),
    [a.HQ.LOCAL_COMMUNITIES]: n(526916),
    [a.HQ.CREATORS_HOBBIES]: n(419185),
    [a.HQ.GLOBAL_COMMUNITIES]: n(540909),
    [a.HQ.FRIENDS_FAMILY]: n(826806),
    [a.HQ.STUDY_GROUPS]: n(29654),
    [a.HQ.CREATE_FROM_SCRATCH]: n(561030),
    [a.HQ.CAMPUS_CLUBS]: n(494207),
    [a.HQ.LEAGUE_CLUBS]: n(232454),
    [a.HQ.GITHUB_HACKATHON]: n(123013)
};
function u(e) {
    let { headerId: t, guildTemplate: n } = e,
        u = n.code,
        o = d[u];
    if (null != o) {
        var C;
        let { header: e, description: d, author: m } = (0, s.Z)(u);
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)('img', {
                    className: c.image,
                    src: o,
                    alt: ''
                }),
                (0, i.jsx)(r.Dx, {
                    className: c.header,
                    id: t,
                    children: e
                }),
                (0, i.jsx)(r.DK, { children: d }),
                n.state === a.Rj.RESOLVED
                    ? (0, i.jsx)(l.D, {
                          className: c.usagePill,
                          count: null != (C = n.usageCount) ? C : 0,
                          verifiedName: m
                      })
                    : null
            ]
        });
    }
    return (0, i.jsx)(l.Z, {
        pillClassName: c.usagePill,
        guildTemplate: n,
        tall: !0
    });
}

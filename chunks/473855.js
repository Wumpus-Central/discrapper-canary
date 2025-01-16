n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(388905),
    s = n(837748),
    l = n(306453),
    a = n(58346),
    c = n(860693);
let u = {
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
function d(e) {
    let { headerId: t, guildTemplate: n } = e,
        d = n.code,
        o = u[d];
    if (null != o) {
        var C;
        let { header: e, description: u, author: m } = (0, s.Z)(d);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)('img', {
                    className: c.image,
                    src: o,
                    alt: ''
                }),
                (0, r.jsx)(i.Dx, {
                    className: c.header,
                    id: t,
                    children: e
                }),
                (0, r.jsx)(i.DK, { children: u }),
                n.state === a.Rj.RESOLVED
                    ? (0, r.jsx)(l.D, {
                          className: c.usagePill,
                          count: null !== (C = n.usageCount) && void 0 !== C ? C : 0,
                          verifiedName: m
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(l.Z, {
        pillClassName: c.usagePill,
        guildTemplate: n,
        tall: !0
    });
}

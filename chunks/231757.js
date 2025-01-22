r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(726542),
    s = r(842146),
    l = r(293177),
    u = r(349407),
    c = r(49012),
    d = r(202120),
    f = r(981631);
function p(e) {
    var n;
    let { platformType: p, location: h, overrideUrl: _, successRedirect: m } = e;
    if ((p === f.ABu.LEAGUE_OF_LEGENDS && (p = f.ABu.RIOT_GAMES), p === f.ABu.CRUNCHYROLL)) {
        s.K([null != h ? h : 'unknown']);
        return;
    }
    if (p === f.ABu.XBOX) {
        u.K([null != h ? h : 'unknown']);
        return;
    }
    if (p === f.ABu.PLAYSTATION || p === f.ABu.PLAYSTATION_STAGING) {
        l.K([null != h ? h : 'unknown'], p);
        return;
    }
    if (p === f.ABu.DOMAIN) {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('64941').then(r.bind(r, 907053));
            return (n) =>
                (0, i.jsx)(e, {
                    analyticsLocation: [null != h ? h : 'unknown'],
                    ...n
                });
        });
        return;
    }
    if ((null === (n = o.Z.get(p)) || void 0 === n ? void 0 : n.isFederated) === !0) {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('54934').then(r.bind(r, 701460));
            return (n) =>
                (0, i.jsx)(e, {
                    platformType: p,
                    location: h,
                    successRedirect: m,
                    ...n
                });
        });
        return;
    }
    if (null != _) {
        (0, c.q)({
            shouldConfirm: !0,
            href: _,
            onConfirm: () => {
                (0, d.H)(
                    p,
                    {
                        location: h,
                        successRedirect: m
                    },
                    _
                );
            }
        });
        return;
    }
    (0, d.H)(p, {
        location: h,
        successRedirect: m
    });
}

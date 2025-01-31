n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(726542),
    s = n(842146),
    o = n(293177),
    l = n(349407),
    u = n(49012),
    c = n(202120),
    d = n(981631);
function f(e) {
    var t;
    let { platformType: f, location: _, overrideUrl: p, successRedirect: h } = e;
    if ((f === d.ABu.LEAGUE_OF_LEGENDS && (f = d.ABu.RIOT_GAMES), f === d.ABu.CRUNCHYROLL)) {
        s.K([null != _ ? _ : 'unknown']);
        return;
    }
    if (f === d.ABu.XBOX) {
        l.K([null != _ ? _ : 'unknown']);
        return;
    }
    if (f === d.ABu.PLAYSTATION || f === d.ABu.PLAYSTATION_STAGING) {
        o.K([null != _ ? _ : 'unknown'], f);
        return;
    }
    if (f === d.ABu.DOMAIN) {
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('64941').then(n.bind(n, 907053));
            return (t) =>
                (0, i.jsx)(e, {
                    analyticsLocation: [null != _ ? _ : 'unknown'],
                    ...t
                });
        });
        return;
    }
    if ((null === (t = a.Z.get(f)) || void 0 === t ? void 0 : t.isFederated) === !0) {
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('54934').then(n.bind(n, 701460));
            return (t) =>
                (0, i.jsx)(e, {
                    platformType: f,
                    location: _,
                    successRedirect: h,
                    ...t
                });
        });
        return;
    }
    if (null != p) {
        (0, u.q)({
            shouldConfirm: !0,
            href: p,
            onConfirm: () => {
                (0, c.H)(
                    f,
                    {
                        location: _,
                        successRedirect: h
                    },
                    p
                );
            }
        });
        return;
    }
    (0, c.H)(f, {
        location: _,
        successRedirect: h
    });
}

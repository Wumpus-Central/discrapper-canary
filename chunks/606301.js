n.d(t, {
    Tk: () => f,
    kT: () => u,
    wN: () => d
}),
    n(704826),
    n(35282),
    n(781311);
var r = n(299608),
    i = n.n(r),
    a = n(626135),
    o = n(549058),
    s = n(981631);
let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
    c = /(\n|\t|\s)/g,
    u = (e) => e.replace(l, '').replace(c, ' '),
    d = (e) => (null == e ? [] : u(e).trim().split(' ')),
    f = i()(
        (e) => {
            a.default.track(s.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        o.xv,
        {
            leading: !0,
            trailing: !1
        }
    );

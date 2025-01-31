n.d(t, {
    Tk: () => f,
    kT: () => c,
    wN: () => d
}),
    n(757143);
var i = n(299608),
    r = n.n(i),
    a = n(626135),
    s = n(549058),
    o = n(981631);
let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
    u = /(\n|\t|\s)/g,
    c = (e) => e.replace(l, '').replace(u, ' '),
    d = (e) => (null == e ? [] : c(e).trim().split(' ')),
    f = r()(
        (e) => {
            a.default.track(o.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        s.xv,
        {
            leading: !0,
            trailing: !1
        }
    );

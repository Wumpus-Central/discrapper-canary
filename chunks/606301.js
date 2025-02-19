n.d(t, {
    Tk: () => f,
    kT: () => u,
    wN: () => d
}),
    n(757143),
    n(301563),
    n(566702);
var r = n(299608),
    i = n.n(r),
    o = n(626135),
    a = n(549058),
    s = n(981631);
let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
    c = /(\n|\t|\s)/g,
    u = (e) => e.replace(l, '').replace(c, ' '),
    d = (e) => (null == e ? [] : u(e).trim().split(' ')),
    f = i()(
        (e) => {
            o.default.track(s.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        a.xv,
        {
            leading: !0,
            trailing: !1
        }
    );

r.d(n, {
    Tk: function () {
        return h;
    },
    kT: function () {
        return f;
    },
    wN: function () {
        return p;
    }
});
var i = r(757143);
var a = r(299608),
    o = r.n(a),
    s = r(626135),
    l = r(549058),
    u = r(981631);
let c = /(!|\.|;|,|-|—|–|\?|"|')/g,
    d = /(\n|\t|\s)/g,
    f = (e) => e.replace(c, '').replace(d, ' '),
    p = (e) => (null == e ? [] : f(e).trim().split(' ')),
    h = o()(
        (e) => {
            s.default.track(u.rMx.AUTO_SUGGEST_DISPLAYED, { suggestion_trigger: e });
        },
        l.xv,
        {
            leading: !0,
            trailing: !1
        }
    );

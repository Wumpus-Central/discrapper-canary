r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(392711);
var o = r(485341),
    s = r(184325),
    l = r(228168);
let u = {
    [l.y0.BITE_SIZE]: 12,
    [l.y0.FULL_SIZE]: 26,
    [l.y0.PANEL]: 13
};
function c(e) {
    let { displayProfile: n, profileType: r, onClose: l } = e,
        c = (0, o.Z)(n);
    return 0 === c.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, a.chunk)(c, u[r]).map((e) =>
                  (0, i.jsx)(
                      s.Z,
                      {
                          badges: e,
                          onClose: l
                      },
                      e[0].id
                  )
              )
          });
}

n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(485341),
    a = n(184325),
    s = n(228168);
let l = {
    [s.y0.BITE_SIZE]: 12,
    [s.y0.FULL_SIZE]: 26,
    [s.y0.PANEL]: 13
};
function c(e) {
    let { displayProfile: t, profileType: n, onClose: s } = e,
        c = (0, o.Z)(t);
    return 0 === c.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, i.chunk)(c, l[n]).map((e) =>
                  (0, r.jsx)(
                      a.Z,
                      {
                          badges: e,
                          displayProfile: t,
                          onClose: s
                      },
                      e[0].id
                  )
              )
          });
}

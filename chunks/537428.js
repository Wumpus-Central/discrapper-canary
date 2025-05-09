n.d(t, { Z: () => a });
var i = n(255367),
    r = n(73800),
    s = n(792481);
let l = r.lazy(() => n.e('22274').then(n.bind(n, 269792)));
function a() {
    return s.X.useExperiment({ location: 'level_up_animation' }).enabled
        ? (0, i.jsx)(r.Suspense, {
              fallback: null,
              children: (0, i.jsx)(l, {})
          })
        : null;
}

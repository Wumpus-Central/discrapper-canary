n.d(t, {
    J: () => l,
});
var i = n(627968);
n(64700);
var r = n(769015);

function l(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, i.jsx)(r.A, {
              game: t,
              size: r.M.XSMALL,
              allowUnknownGameIcon: !0,
              unknownGameIconFallback: n,
          });
}

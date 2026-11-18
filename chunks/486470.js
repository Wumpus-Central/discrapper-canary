var l = n(284009),
    s = n.n(l),
    a = n(984827);
(a.x.PORTRAIT, a.x.PORTRAIT);
let i = { preferred: a.x.LANDSCAPE, supported: [a.x.LANDSCAPE, a.x.PORTRAIT] },
    r = { [a.x.PORTRAIT]: 9 / 16, [a.x.LANDSCAPE]: 16 / 9 };
function o(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
n.d(
    t,
    {},
    {
        IW: function (e, t) {
            let n = e.videoPreviewRenditions?.[t];
            return null != n && "" !== n
                ? n
                : null != e.videoPreviewRenditions && Object.keys(e.videoPreviewRenditions).length > 0
                  ? void 0
                  : (e.videoPreview ?? void 0);
        },
        Ke: i,
        U9: function (e, t) {
            let n =
                null != e.videoRenditions
                    ? (function (e, t) {
                          let { preferred: n, supported: l } = t;
                          s()(l.includes(n), "Preferred aspect ratio must be in supported renditions list");
                          let a = o(e, n);
                          if (null != a) return a;
                          let i = r[n],
                              u = null,
                              c = 1 / 0;
                          for (let t of l) {
                              if (t === n) continue;
                              let l = o(e, t);
                              if (null == l) continue;
                              let s = Math.abs(r[t] - i);
                              s < c && ((c = s), (u = l));
                          }
                          return u;
                      })(e.videoRenditions, t)
                    : null;
            return null != n
                ? n
                : t.supported.includes(a.x.PORTRAIT)
                  ? { url: e.videoHls, aspectRatio: a.x.PORTRAIT }
                  : null;
        },
    },
);

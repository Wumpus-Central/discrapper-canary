i.d(l, { A: () => r });
var o = i(477900);
i(582128);
var s = i(272984),
    t = i(660183);
let e = {
    [s.M0.TRACK]: 80,
    [s.M0.EPISODE]: 232,
    [s.M0.SHOW]: 232,
    [s.M0.ALBUM]: 352,
    [s.M0.ARTIST]: 352,
    [s.M0.PLAYLIST]: 352,
};
function r(a) {
    let { className: l, resourceId: i, resourceType: r, onLoad: d, allowEncryptedMedia: p = !1 } = a;
    return "" === i
        ? null
        : (0, o.jsx)("iframe", {
              className: l ?? void 0,
              src: s.RQ.EMBED(`/${r}/${i}`),
              style: { maxWidth: 400, minWidth: 300, width: "100%", height: e[r] },
              frameBorder: 0,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
              allow: p ? "encrypted-media; clipboard-write" : "clipboard-write",
              onLoad: d,
              title: t.intl.string(t.t["0ZB/XE"]),
          });
}

o.d(l, { A: () => e });
var s = o(477900);
o(582128);
var i = o(272984),
    t = o(660183);
let r = {
    [i.M0.TRACK]: 80,
    [i.M0.EPISODE]: 232,
    [i.M0.SHOW]: 232,
    [i.M0.ALBUM]: 352,
    [i.M0.ARTIST]: 352,
    [i.M0.PLAYLIST]: 352,
};
function e(a) {
    let { className: l, resourceId: o, resourceType: e, onLoad: p } = a;
    return "" === o
        ? null
        : (0, s.jsx)("iframe", {
              className: l ?? void 0,
              src: i.RQ.EMBED(`/${e}/${o}`),
              style: { maxWidth: 400, minWidth: 300, width: "100%", height: r[e] },
              frameBorder: 0,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
              allow: "clipboard-write",
              onLoad: p,
              title: t.intl.string(t.t["0ZB/XE"]),
          });
}

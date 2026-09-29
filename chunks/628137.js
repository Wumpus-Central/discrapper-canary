s.d(l, { A: () => e });
var i = s(477900);
s(582128);
var o = s(272984),
    t = s(375708);
let r = {
    [o.M0.TRACK]: 80,
    [o.M0.EPISODE]: 232,
    [o.M0.SHOW]: 232,
    [o.M0.ALBUM]: 352,
    [o.M0.ARTIST]: 352,
    [o.M0.PLAYLIST]: 352,
};
function e(a) {
    let { className: l, resourceId: s, resourceType: e } = a;
    return "" === s
        ? null
        : (0, i.jsx)("iframe", {
              className: l ?? void 0,
              src: o.RQ.EMBED(`/${e}/${s}`),
              style: { maxWidth: 400, minWidth: 300, width: "100%", height: r[e] },
              frameBorder: 0,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
              allow: "clipboard-write",
              title: t.intl.string(t.t["0ZB/XE"]),
          });
}

e.d(t, { A: () => d });
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(686956),
    s = e(824492),
    o = e(985018);
function d(n) {
    let t = (0, l.bG)([s.A], () => s.A.didAgree(n.id));
    return n.isSpoilerChannel() && t
        ? (0, i.jsx)(a.Drp, {
              id: "clear-spoiler-agree",
              label: o.intl.string(o.t.ix2UVZ),
              action: () => r.A.clearSpoilerAgree(n.id),
          })
        : null;
}

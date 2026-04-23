n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(477782),
    a = n(686956),
    u = n(824492),
    s = n(985018);
function o(e) {
    let t = (0, r.bG)([u.A], () => u.A.didAgree(e.id));
    return e.isSpoilerChannel() && t
        ? (0, l.jsx)(i.Dr, {
              id: "clear-spoiler-agree",
              label: s.intl.string(s.t.ix2UVZ),
              action: () => a.A.clearSpoilerAgree(e.id),
          })
        : null;
}

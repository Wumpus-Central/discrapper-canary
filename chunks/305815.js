a.d(n, { default: () => o });
var t = a(951288),
    i = a(647438),
    r = a(509212),
    s = a(515108),
    l = a(291967);
function o(e) {
    let { quest: n, onClose: a, transitionState: o } = e,
        d = i.useMemo(() => (0, r.xn)(n.config), [n]);
    return null == d
        ? null
        : (0, t.jsx)(s.Z, {
              onClose: a,
              transitionState: o,
              quest: n,
              rewardContent: (0, t.jsx)(l.Z, { rewardName: d.messages.name }),
          });
}

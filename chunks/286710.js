n.d(e, { A: () => S });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(192308),
    l = n(477782),
    d = n(964404),
    s = n(401843),
    o = n(616356),
    c = n(495544),
    A = n(513963),
    u = n(951829),
    f = n(985018);
function S(t, e) {
    let n,
        S,
        [g, p, b] =
            ((n = (0, a.bG)([c.default], () => c.default.getId())),
            (S = (0, a.bG)([o.A], () => {
                let e = o.A.getCurrentUserActiveStream();
                return null != e && e.channelId === t;
            }, [t])),
            [
                (null == e || e === n) && S,
                (0, a.bG)([o.A], () => o.A.isSelfStreamHidden(t), [t]),
                (e) => {
                    (0, s.Ho)(t, e);
                },
            ]),
        h = (0, a.bG)([d.Ay], () => d.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return g
        ? (0, i.jsx)(l.sL, {
              id: "self-stream-hide",
              label: f.intl.string(f.t.aol7iW),
              checked: !p,
              action: () => {
                  if (h || p) return b(!p);
                  (0, r.openModal)((t) => (0, i.jsx)(A.A, { ...t, type: u.f.STREAM, onConfirm: () => b(!p) }));
              },
          })
        : null;
}

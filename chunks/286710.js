n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(17928),
    l = n(192308),
    a = n(477782),
    d = n(742023),
    s = n(401843),
    u = n(616356),
    o = n(280450),
    c = n(513963),
    f = n(951829),
    A = n(375708);
function p(e, t) {
    let n,
        p,
        [b, h, m] =
            ((n = (0, r.bG)([o.default], () => o.default.getId())),
            (p = (0, r.bG)([u.A], () => {
                let t = u.A.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            }, [e])),
            [
                (null == t || t === n) && p,
                (0, r.bG)([u.A], () => u.A.isSelfStreamHidden(e), [e]),
                function (t) {
                    (0, s.Ho)(e, t);
                },
            ]),
        S = (0, r.bG)([d.Ay], () => d.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return b
        ? (0, i.jsx)(a.sL, {
              id: "self-stream-hide",
              label: A.intl.string(A.t.aol7iW),
              checked: !h,
              action: function () {
                  if (S || h) return m(!h);
                  (0, l.openModal)((e) => (0, i.jsx)(c.A, { ...e, type: f.f.STREAM, onConfirm: () => m(!h) }));
              },
          })
        : null;
}

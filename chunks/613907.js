n.d(t, { A: () => x }), n(896048), n(264879);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(843472),
    u = n(631576),
    d = n(679382),
    f = n(148355),
    p = n(961350),
    h = n(320501),
    b = n(287809),
    g = n(954571),
    m = n(427262),
    A = n(143413),
    y = n(652215),
    O = n(985018),
    j = n(455683);
let v = "749054660769218631";
function x(e) {
    var t;
    let { channel: n } = e,
        [i, x] = l.useState("");
    l.useEffect(() => {
        (0, u.zk)("847199849233514549", !0);
    }, []);
    let E = (0, s.bG)(
            [h.A, p.default],
            () =>
                !!a()(h.A.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== p.default.getId() && e.state === y.cmJ.SENT && !(0, A.A)(e)),
        ),
        _ = (0, s.bG)([b.default], () => b.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        C = null != (t = m.Ay.useName(_)) ? t : O.intl.string(O.t.y1Wu2f),
        S = (0, s.bG)([d.A], () => d.A.getStickerById(v)),
        I = l.useCallback(async () => {
            if (null == i || "" === i)
                try {
                    await c.A.sendGreetMessage(n.id, v),
                        g.default.track(y.HAw.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || x(O.intl.string(O.t.Whhv4w));
                }
        }, [n.id, n.type, i]),
        N = O.intl.formatToPlainString(O.t.m0zYbV, { username: C }),
        T =
            null != i && "" !== i
                ? (0, r.jsx)(o.Text, {
                      className: j.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: i,
                  })
                : null;
    return E
        ? (0, r.jsxs)("div", {
              className: j.ft,
              children: [
                  (0, r.jsxs)(o.DUT, {
                      className: null != i && "" !== i ? j.AO : j.Iq,
                      "aria-label": O.intl.string(O.t.pJObYI),
                      onClick: I,
                      children: [
                          (0, r.jsx)(f.A, {
                              sticker: S,
                              size: 24,
                          }),
                          (0, r.jsx)(o.Text, {
                              className: j.Qq,
                              variant: "text-md/medium",
                              children: N,
                          }),
                      ],
                  }),
                  T,
              ],
          })
        : (0, r.jsxs)("div", {
              className: j.nj,
              children: [
                  (0, r.jsx)(f.A, {
                      sticker: S,
                      size: 160,
                      className: j.Xr,
                  }),
                  (0, r.jsx)(o.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: I,
                      disabled: !!i,
                      text: N,
                  }),
                  T,
              ],
          });
}

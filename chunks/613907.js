n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(843472),
    d = n(631576),
    u = n(679382),
    h = n(148355),
    m = n(961350),
    A = n(320501),
    p = n(287809),
    g = n(954571),
    f = n(427262),
    _ = n(143413),
    E = n(652215),
    C = n(985018),
    x = n(455683);
let S = "749054660769218631";
function T(e) {
    let { channel: t } = e,
        [n, a] = l.useState("");
    l.useEffect(() => {
        (0, d.zk)("847199849233514549", !0);
    }, []);
    let T = (0, r.bG)(
            [A.A, m.default],
            () =>
                !!s()(A.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== m.default.getId() && e.state === E.cmJ.SENT && !(0, _.A)(e)),
        ),
        I = (0, r.bG)([p.default], () => p.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        N = f.Ay.useName(I) ?? C.intl.string(C.t.y1Wu2f),
        v = (0, r.bG)([u.A], () => u.A.getStickerById(S)),
        y = l.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    await c.A.sendGreetMessage(t.id, S),
                        g.default.track(E.HAw.DM_EMPTY_ACTION, {
                            channel_id: t.id,
                            channel_type: t.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || a(C.intl.string(C.t.Whhv4w));
                }
        }, [t.id, t.type, n]),
        b = C.intl.formatToPlainString(C.t.m0zYbV, { username: N }),
        R =
            null != n && "" !== n
                ? (0, i.jsx)(o.Text, {
                      className: x.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return T
        ? (0, i.jsxs)("div", {
              className: x.ft,
              children: [
                  (0, i.jsxs)(o.DUT, {
                      className: null != n && "" !== n ? x.AO : x.Iq,
                      "aria-label": C.intl.string(C.t.pJObYI),
                      onClick: y,
                      children: [
                          (0, i.jsx)(h.A, { sticker: v, size: 24 }),
                          (0, i.jsx)(o.Text, { className: x.Qq, variant: "text-md/medium", children: b }),
                      ],
                  }),
                  R,
              ],
          })
        : (0, i.jsxs)("div", {
              className: x.nj,
              children: [
                  (0, i.jsx)(h.A, { sticker: v, size: 160, className: x.Xr }),
                  (0, i.jsx)(o.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: y,
                      disabled: !!n,
                      text: b,
                  }),
                  R,
              ],
          });
}

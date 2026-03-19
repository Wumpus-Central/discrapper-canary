n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(843472),
    d = n(631576),
    u = n(679382),
    h = n(148355),
    m = n(961350),
    A = n(320501),
    g = n(287809),
    p = n(954571),
    f = n(427262),
    _ = n(143413),
    E = n(652215),
    x = n(985018),
    C = n(989);
let S = "749054660769218631";
function I(e) {
    let { channel: t } = e,
        [n, s] = l.useState("");
    l.useEffect(() => {
        (0, d.zk)("847199849233514549", !0);
    }, []);
    let I = (0, r.bG)(
            [A.A, m.default],
            () =>
                !!a()(A.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== m.default.getId() && e.state === E.cmJ.SENT && !(0, _.A)(e)),
        ),
        T = (0, r.bG)([g.default], () => g.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        N = f.Ay.useName(T) ?? x.intl.string(x.t.y1Wu2f),
        y = (0, r.bG)([u.A], () => u.A.getStickerById(S)),
        b = l.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    await c.A.sendGreetMessage(t.id, S),
                        p.default.track(E.HAw.DM_EMPTY_ACTION, {
                            channel_id: t.id,
                            channel_type: t.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || s(x.intl.string(x.t.Whhv4w));
                }
        }, [t.id, t.type, n]),
        v = x.intl.formatToPlainString(x.t.m0zYbV, { username: N }),
        j =
            null != n && "" !== n
                ? (0, i.jsx)(o.Text, {
                      className: C.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return I
        ? (0, i.jsxs)("div", {
              className: C.ft,
              children: [
                  (0, i.jsxs)(o.DUT, {
                      className: null != n && "" !== n ? C.AO : C.Iq,
                      "aria-label": x.intl.string(x.t.pJObYI),
                      onClick: b,
                      children: [
                          (0, i.jsx)(h.A, { sticker: y, size: 24 }),
                          (0, i.jsx)(o.Text, { className: C.Qq, variant: "text-md/medium", children: v }),
                      ],
                  }),
                  j,
              ],
          })
        : (0, i.jsxs)("div", {
              className: C.nj,
              children: [
                  (0, i.jsx)(h.A, { sticker: y, size: 160, className: C.Xr }),
                  (0, i.jsx)(o.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: b,
                      disabled: !!n,
                      text: v,
                  }),
                  j,
              ],
          });
}

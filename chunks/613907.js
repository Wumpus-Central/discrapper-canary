n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(311907),
    o = n(834730),
    c = n(939249),
    d = n(821609),
    u = n(843472),
    h = n(631576),
    m = n(679382),
    A = n(148355),
    g = n(961350),
    p = n(320501),
    _ = n(287809),
    f = n(954571),
    E = n(427262),
    C = n(143413),
    x = n(652215),
    S = n(985018),
    I = n(310876);
let N = "749054660769218631";
function v(e) {
    let { channel: t } = e,
        [n, a] = l.useState("");
    l.useEffect(() => {
        (0, h.zk)("847199849233514549", !0);
    }, []);
    let v = (0, r.bG)(
            [p.A, g.default],
            () =>
                !!s()(p.A.getMessages(t.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== g.default.getId() && e.state === x.cmJ.SENT && !(0, C.A)(e)),
        ),
        T = (0, r.bG)([_.default], () => _.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        y = E.Ay.useName(T) ?? S.intl.string(S.t.y1Wu2f),
        b = (0, r.bG)([m.A], () => m.A.getStickerById(N)),
        j = l.useCallback(async () => {
            if (null == n || "" === n)
                try {
                    await u.A.sendGreetMessage(t.id, N),
                        f.default.track(x.HAw.DM_EMPTY_ACTION, {
                            channel_id: t.id,
                            channel_type: t.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || a(S.intl.string(S.t.Whhv4w));
                }
        }, [t.id, t.type, n]),
        R = S.intl.formatToPlainString(S.t.m0zYbV, { username: y }),
        M =
            null != n && "" !== n
                ? (0, i.jsx)(o.E, {
                      className: I.z3,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: n,
                  })
                : null;
    return v
        ? (0, i.jsxs)("div", {
              className: I.ft,
              children: [
                  (0, i.jsxs)(c.D, {
                      className: null != n && "" !== n ? I.AO : I.Iq,
                      "aria-label": S.intl.string(S.t.pJObYI),
                      onClick: j,
                      children: [
                          (0, i.jsx)(A.A, { sticker: b, size: 24 }),
                          (0, i.jsx)(o.E, { className: I.Qq, variant: "text-md/medium", children: R }),
                      ],
                  }),
                  M,
              ],
          })
        : (0, i.jsxs)("div", {
              className: I.nj,
              children: [
                  (0, i.jsx)(A.A, { sticker: b, size: 160, className: I.Xr }),
                  (0, i.jsx)(d.$, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: j,
                      disabled: !!n,
                      text: R,
                  }),
                  M,
              ],
          });
}
